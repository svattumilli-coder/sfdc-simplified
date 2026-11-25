import type { TestScenario } from '../types';

export interface RunResult {
  scenarioId: string;
  passed: boolean;
  actualOutput: string[];
  expectedOutput: string[];
  error: string | null;
}

export interface CompileResult {
  error: string | null;
  jsCode?: string;
}

function stripComments(code: string): string {
  return code.split('\n').map(line => {
    const idx = line.indexOf('//');
    return idx >= 0 ? line.substring(0, idx) : line;
  }).join('\n');
}

export function checkStructure(code: string): string | null {
  const stripped = stripComments(code).replace(/\/\*[\s\S]*?\*\//g, '');
  let braces = 0, parens = 0;
  let inString = false, stringChar = '';
  for (let i = 0; i < stripped.length; i++) {
    const ch = stripped[i];
    if (inString) { if (ch === stringChar && stripped[i-1] !== '\\') inString = false; continue; }
    if (ch === "'" || ch === '"') { inString = true; stringChar = ch; continue; }
    if (ch === '{') braces++;
    else if (ch === '}') { braces--; if (braces < 0) return 'Compilation Error: Unexpected `}` — extra closing brace found.'; }
    else if (ch === '(') parens++;
    else if (ch === ')') { parens--; if (parens < 0) return 'Compilation Error: Unexpected `)` — extra closing parenthesis.'; }
  }
  if (braces > 0) return `Compilation Error: Missing ${braces} closing brace${braces > 1 ? 's' : ''} \`}\`.`;
  if (braces < 0) return `Compilation Error: ${Math.abs(braces)} extra closing brace${Math.abs(braces) > 1 ? 's' : ''} found.`;
  if (parens !== 0) return `Compilation Error: Unbalanced parentheses — ${Math.abs(parens)} ${parens > 0 ? 'opening' : 'closing'} not matched.`;
  return null;
}

export function transpileApex(apexCode: string): CompileResult {
  try {
    let js = apexCode;

    // Detect class name so we can distinguish constructors from regular methods
    const classNameMatch = js.match(/\b(?:public|private|global)\s+(?:virtual\s+|abstract\s+)?class\s+(\w+)/);
    const className = classNameMatch ? classNameMatch[1] : null;

    // Build type registry before transformations
    const listVars = new Set<string>();
    const setVars = new Set<string>();
    const mapVars = new Set<string>();
    const stringVars = new Set<string>();

    for (const m of js.matchAll(/\bList<[^>]+>\s+(\w+)/g)) listVars.add(m[1]);
    for (const m of js.matchAll(/\bSet<[^>]+>\s+(\w+)/g)) setVars.add(m[1]);
    for (const m of js.matchAll(/\bMap<[^>]+>\s+(\w+)/g)) mapVars.add(m[1]);
    for (const m of js.matchAll(/\bString\s+(\w+)\s*[=,)]/g)) stringVars.add(m[1]);

    // 1. System.debug → __apexDebug
    js = js.replace(/System\.debug\(/g, '__apexDebug(');

    // 2. Class declarations
    js = js.replace(/\b(?:public|private|global)\s+(?:virtual\s+|abstract\s+)?class\s+(\w+)(?:\s+extends\s+\w+)?(?:\s+implements\s+[\w,\s]+)?\s*\{/g, 'class $1 {');

    // 3. Constructor: only match method name == class name (not all uppercase-first methods)
    if (className) {
      const ctorRe = new RegExp(`\\b(?:public|private)\\s+${className}\\s*\\(`, 'g');
      js = js.replace(ctorRe, 'constructor(');
    }

    // 4. Method declarations with explicit return types
    js = js.replace(/\b(?:public|private|global|protected)\s+(?:static\s+)?(?:override\s+)?(?:String|Integer|Long|Decimal|Boolean|void|Date|DateTime|Id|Object|SObject|List<[^>]+>|Map<[^,>]+,[^>]+>|Set<[^>]+>)\s+(\w+)\s*\(/g, (match) => {
      const isStatic = /\bstatic\b/.test(match);
      const name = match.match(/(\w+)\s*\($/)?.[1] ?? 'unknown';
      return isStatic ? `static ${name}(` : `${name}(`;
    });

    // 5. Remove remaining access modifiers
    js = js.replace(/\b(?:public|private|global|protected)\s+(?:static\s+)?(?:final\s+)?/g, '');

    // 6. Variable declarations with types
    js = js.replace(/\b(?:String|Integer|Long|Decimal|Boolean|Date|DateTime|Id|Object|SObject)\s+(\w+)\s*=/g, 'let $1 =');
    js = js.replace(/\bList<[^>]+>\s+(\w+)\s*=/g, 'let $1 =');
    js = js.replace(/\bSet<[^>]+>\s+(\w+)\s*=/g, 'let $1 =');
    js = js.replace(/\bMap<[^>]+>\s+(\w+)\s*=/g, 'let $1 =');
    js = js.replace(/\bAggregateResult\[\]\s+(\w+)\s*=/g, 'let $1 =');

    // 7. Remove types in parameter lists
    js = js.replace(/\b(?:String|Integer|Long|Decimal|Boolean|Date|DateTime|Id|Object|SObject|List<[^>]+>|Map<[^>]+>|Set<[^>]+>)\s+(\w+)(?=\s*[,)])/g, '$1');

    // 8. Collection literals
    js = js.replace(/new\s+List<[^>]+>\s*\(\s*\)/g, '[]');
    js = js.replace(/new\s+List<[^>]+>\s*\{([^}]*)\}/g, '[$1]');
    js = js.replace(/new\s+Set<[^>]+>\s*\((\w+)\)/g, 'new Set($1)');
    js = js.replace(/new\s+Set<[^>]+>\s*\(\s*\)/g, 'new Set()');
    js = js.replace(/new\s+Set<[^>]+>\s*\{([^}]*)\}/g, 'new Set([$1])');
    js = js.replace(/new\s+Map<[^>]+>\s*\(\s*\)/g, 'new Map()');
    js = js.replace(/new\s+List<[^>]+>\s*\((\w+)\)/g, '[...$1]');

    // 9. For-each loop
    js = js.replace(/for\s*\(\s*(?:String|Integer|Long|Decimal|Boolean|Id|SObject|Object|\w+)\s+(\w+)\s*:\s*([^)]+)\s*\)/g, 'for (const $1 of $2)');

    // 10. For-index loop
    js = js.replace(/for\s*\(\s*(?:Integer|Long)\s+(\w+)\s*=/g, 'for (let $1 =');

    // 11. .size() → .__apexSize()
    js = js.replace(/\.size\(\)/g, '.__apexSize()');

    // 11b. .isEmpty() → .length === 0 (Arrays) or .size === 0 (Set/Map handled at runtime)
    js = js.replace(/\.isEmpty\(\)/g, '.length === 0');

    // 12. List .add() → .push() for known list vars
    for (const v of listVars) {
      const re = new RegExp(`\\b${v}\\.add\\(`, 'g');
      js = js.replace(re, `${v}.push(`);
    }
    // .get(expr) → [expr] — handles both numeric literals and expressions like chain.size()-1
    js = js.replace(/\.get\(([^)]+)\)/g, '[$1]');

    // 12b. Map literals: new Map<K,V>{'key' => val, ...} → new Map([['key', val], ...])
    js = js.replace(/new\s+Map<[^>]+>\s*\{([^}]*)\}/g, (_, body: string) => {
      const entries = body.split(',').map((pair: string) => {
        const parts = pair.split('=>');
        if (parts.length !== 2) return pair.trim();
        return `[${parts[0].trim()}, ${parts[1].trim()}]`;
      });
      return `new Map([${entries.join(', ')}])`;
    });

    // 13. Map methods
    js = js.replace(/\.put\(/g, '.set(');
    js = js.replace(/\.containsKey\(/g, '.has(');
    js = js.replace(/\.keySet\(\)/g, '.__apexKeySet()');
    js = js.replace(/\.values\(\)/g, '.__apexValues()');

    // 14. String .contains()
    for (const v of stringVars) {
      const re = new RegExp(`\\b${v}\\.contains\\(`, 'g');
      js = js.replace(re, `${v}.includes(`);
    }
    js = js.replace(/\.contains\(/g, '.includes(');
    for (const v of setVars) {
      const re = new RegExp(`\\b${v}\\.includes\\(`, 'g');
      js = js.replace(re, `${v}.has(`);
    }

    // 15. Set retainAll
    js = js.replace(/(\w+)\.retainAll\((\w+)\)/g, '(() => { for (const __k of [...$1]) if (!$2.has(__k)) $1.delete(__k); })()');

    // 16. Static String methods
    js = js.replace(/String\.isBlank\(([^)]+)\)/g, '(!($1) || String($1).trim() === "")');
    js = js.replace(/String\.isNotBlank\(([^)]+)\)/g, '(!!($1) && String($1).trim() !== "")');
    js = js.replace(/String\.valueOf\(([^)]+)\)/g, 'String($1)');
    js = js.replace(/String\.join\(([^,]+),\s*([^)]+)\)/g, 'Array.from($1).join($2)');

    // 17. Date methods
    js = js.replace(/Date\.today\(\)/g, '(new Date())');
    js = js.replace(/Date\.newInstance\((\d+),\s*(\d+),\s*(\d+)\)/g, '(new Date($1, $2-1, $3))');
    js = js.replace(/DateTime\.now\(\)/g, '(new Date())');

    // 18. Type casts — SObject, List, and primitive casts
    js = js.replace(/\(Integer\)\s+/g, 'Math.floor(');
    js = js.replace(/\(Decimal\)\s+/g, 'parseFloat(');
    // Remove SObject / collection casts: (List<Lead>), (Map<..>), (Account), etc.
    js = js.replace(/\(\s*(?:List<[^>]+>|Map<[^>]+>|Set<[^>]+>|\w+)\s*\)\s*(\w)/g, '$1');

    // 19. Bare type declarations (no assignment)
    js = js.replace(/\b(?:String|Integer|Long|Decimal|Boolean|Date|DateTime|Id)\s+(\w+)\s*;/g, 'let $1;');
    js = js.replace(/\bList<[^>]+>\s+(\w+)\s*;/g, 'let $1;');
    js = js.replace(/\bSet<[^>]+>\s+(\w+)\s*;/g, 'let $1;');
    js = js.replace(/\bMap<[^>]+>\s+(\w+)\s*;/g, 'let $1;');

    // 20. String equality: == 'x' → === 'x' (Apex string == is value equality like JS ===)
    js = js.replace(/([!=])=\s*'([^']*)'/g, (_, op, val) => op === '!' ? `!== '${val}'` : `=== '${val}'`);

    return { error: null, jsCode: js };
  } catch (e) {
    return { error: `Transpilation error: ${e}`, jsCode: undefined };
  }
}

const RUNTIME_HELPERS = `
// Size helpers — wrapped in try/catch to handle repeated calls across test cases
try { Object.defineProperty(Array.prototype, '__apexSize', { value: function() { return this.length; }, configurable: true, writable: true }); } catch(e) {}
try { Object.defineProperty(Map.prototype, '__apexSize', { value: function() { return this.size; }, configurable: true, writable: true }); } catch(e) {}
try { Object.defineProperty(Set.prototype, '__apexSize', { value: function() { return this.size; }, configurable: true, writable: true }); } catch(e) {}
try { Object.defineProperty(String.prototype, '__apexSize', { value: function() { return this.length; }, configurable: true, writable: true }); } catch(e) {}

// Map keySet / values helpers
try { Object.defineProperty(Map.prototype, '__apexKeySet', { value: function() { return new Set(this.keys()); }, configurable: true, writable: true }); } catch(e) {}
try { Object.defineProperty(Map.prototype, '__apexValues', { value: function() { return Array.from(this.values()); }, configurable: true, writable: true }); } catch(e) {}

// Set retainAll
try { Object.defineProperty(Set.prototype, 'retainAll', { value: function(other) { for (const k of [...this]) if (!other.has(k)) this.delete(k); }, configurable: true, writable: true }); } catch(e) {}

// Date add helpers
function __apexAddDays(d, n) { const r = new Date(d); r.setDate(r.getDate() + n); return r; }
function __apexAddYears(d, n) { const r = new Date(d); r.setFullYear(r.getFullYear() + n); return r; }
// Apex Date.daysBetween() — adds prototype method on Date so transpiled code can call it
try { Object.defineProperty(Date.prototype, 'daysBetween', { value: function(other) { return Math.round((other - this) / 86400000); }, configurable: true, writable: true }); } catch(e) {}
// Apex Date.addDays() — adds prototype method on Date
try { Object.defineProperty(Date.prototype, 'addDays', { value: function(n) { const r = new Date(this); r.setDate(r.getDate() + n); return r; }, configurable: true, writable: true }); } catch(e) {}
// Apex Date.addYears() — adds prototype method on Date
try { Object.defineProperty(Date.prototype, 'addYears', { value: function(n) { const r = new Date(this); r.setFullYear(r.getFullYear() + n); return r; }, configurable: true, writable: true }); } catch(e) {}
// Apex Date.addHours() — adds prototype method on Date
try { Object.defineProperty(Date.prototype, 'addHours', { value: function(n) { const r = new Date(this); r.setHours(r.getHours() + n); return r; }, configurable: true, writable: true }); } catch(e) {}
// Apex Date.addMonths() — adds prototype method on Date
try { Object.defineProperty(Date.prototype, 'addMonths', { value: function(n) { const r = new Date(this); r.setMonth(r.getMonth() + n); return r; }, configurable: true, writable: true }); } catch(e) {}
// Apex Math helpers
if (typeof Math.max !== 'function') Math.max = function(...a) { return a.reduce((m,v)=>v>m?v:m, -Infinity); };
if (typeof Math.min !== 'function') Math.min = function(...a) { return a.reduce((m,v)=>v<m?v:m, Infinity); };

// System.debug capture
const __output = [];
function __apexDebug(v) {
  if (v === null || v === undefined) { __output.push('null'); return; }
  if (v instanceof Set) { __output.push('{' + [...v].join(', ') + '}'); return; }
  if (v instanceof Map) { __output.push('{' + [...v.entries()].map(([k,val]) => k + '=' + val).join(', ') + '}'); return; }
  if (Array.isArray(v)) { __output.push('(' + v.join(', ') + ')'); return; }
  __output.push(String(v));
}
`;

export function executeApex(apexCode: string): { output: string[]; error: string | null } {
  const compileResult = transpileApex(apexCode);
  if (compileResult.error) return { output: [], error: compileResult.error };

  try {
    const body = `"use strict";\n${RUNTIME_HELPERS}\n${compileResult.jsCode}\nreturn __output;`;
    const fn = new Function(body);
    const result = fn();
    return { output: Array.isArray(result) ? result : [], error: null };
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return { output: [], error: `Runtime Error: ${msg}` };
  }
}

/**
 * Validates Apex syntax using the JS engine parser (catches orphaned else/if, etc.)
 * Returns null if valid, error string if invalid.
 */
export function validateApexSyntax(apexCode: string): string | null {
  const structErr = checkStructure(apexCode);
  if (structErr) return structErr;

  const { jsCode, error: transpileErr } = transpileApex(apexCode);
  if (transpileErr) return transpileErr;
  if (!jsCode) return null;

  const wrappedCode = `(function() {\n${jsCode}\n})`;
  try {
    // new Function parses but does NOT execute — safely catches SyntaxErrors
    new Function(`"use strict"; return ${wrappedCode}`); // eslint-disable-line no-new-func
    return null;
  } catch (e: unknown) {
    if (e instanceof SyntaxError) {
      const msg = e.message;
      if (msg.includes("Unexpected token 'else'") || msg.includes('Unexpected token else') || msg.toLowerCase().includes("unexpected token 'else'")) {
        return "Compilation Error: `else` or `else if` without a preceding `if` block. Every `else` must follow a closed `if` statement.";
      }
      if (msg.includes('Unexpected token')) {
        return `Compilation Error: Unexpected syntax — ${msg}. Check for missing semicolons, unclosed blocks, or invalid operators.`;
      }
      return `Compilation Error: ${msg}`;
    }
    return null; // runtime errors caught later during execution
  }
}

export function runScenario(apexCode: string, scenario: TestScenario): RunResult {
  // Full syntax validation: structural check + JS engine parse
  const syntaxErr = validateApexSyntax(apexCode);
  if (syntaxErr) {
    return {
      scenarioId: scenario.id,
      passed: false,
      actualOutput: [],
      expectedOutput: scenario.expectedOutput,
      error: syntaxErr,
    };
  }

  const compileResult = transpileApex(apexCode);
  if (compileResult.error) {
    return {
      scenarioId: scenario.id,
      passed: false,
      actualOutput: [],
      expectedOutput: scenario.expectedOutput,
      error: compileResult.error,
    };
  }

  const paramNames = Object.keys(scenario.inputs ?? {});
  const paramValues = Object.values(scenario.inputs ?? {});

  try {
    let body: string;
    if (scenario.methodCall) {
      // Class-based: define class, inject inputs as params, call method, capture return value
      body = `"use strict";\n${RUNTIME_HELPERS}\n${compileResult.jsCode}\nconst __returnValue = ${scenario.methodCall};\nreturn { output: __output, returnValue: __returnValue };`;
    } else {
      // Script-based: code runs top-to-bottom, capture debug output
      body = `"use strict";\n${RUNTIME_HELPERS}\n${compileResult.jsCode}\nreturn { output: __output, returnValue: undefined };`;
    }

    const fn = new Function(...paramNames, body);
    const result = fn(...paramValues) as { output: string[]; returnValue: unknown };
    const actualOutput = result.output.map(s => String(s).trim());

    if (scenario.expectedReturn !== undefined) {
      // Compare return value directly — this is the class-based execution path
      const actualReturn = String(result.returnValue ?? 'null').trim();
      const expectedReturn = String(scenario.expectedReturn).trim();
      const passed = actualReturn === expectedReturn;
      return {
        scenarioId: scenario.id,
        passed,
        actualOutput: [actualReturn],
        expectedOutput: [expectedReturn],
        error: null,
      };
    }

    // Script-based: compare debug output lines
    const expected = scenario.expectedOutput.map(s => s.trim());
    const passed = expected.length > 0 && expected.every(exp =>
      actualOutput.some(act => act.toLowerCase().includes(exp.toLowerCase()))
    );
    return { scenarioId: scenario.id, passed, actualOutput, expectedOutput: expected, error: null };
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return {
      scenarioId: scenario.id,
      passed: false,
      actualOutput: [],
      expectedOutput: scenario.expectedOutput,
      error: `Runtime Error: ${msg}`,
    };
  }
}
