import { useState } from 'react';
import { Lightbulb, CheckCircle, XCircle, Eye, EyeOff, RotateCcw, Send, Cpu } from 'lucide-react';
import type { Mission, MissionTestCase } from '../../types';
import { validateApexSyntax, runScenario } from '../../utils/apexRunner';
import type { RunResult } from '../../utils/apexRunner';

interface MissionEditorProps {
  mission: Mission;
}

interface PatternTestResult {
  passed: boolean;
  message: string;
}

function stripComments(code: string): string {
  return code
    .split('\n')
    .map(line => {
      const idx = line.indexOf('//');
      return idx >= 0 ? line.substring(0, idx) : line;
    })
    .join('\n');
}

function runPatternCheck(code: string, tc: MissionTestCase): PatternTestResult {
  try {
    const codeWithoutComments = stripComments(code);
    const passed = new RegExp(tc.pattern, 'im').test(codeWithoutComments);
    return { passed, message: passed ? 'Passed' : tc.errorMessage };
  } catch {
    return { passed: false, message: 'Check error' };
  }
}

function extractRelevantLines(code: string, pattern: string): string[] {
  const cleaned = pattern
    .replace(/\\[nrt]/g, ' ')
    .replace(/\(\?:|\(\?=|\(\?!/g, '')
    .replace(/[\\()[\]{}*+?^$|]/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();

  const keywords = cleaned
    .split(/\s+/)
    .filter(k => k.length > 3 && /[a-zA-Z]/.test(k))
    .map(k => k.toLowerCase())
    .slice(0, 4);

  if (keywords.length === 0) return [];

  const lines = code.split('\n');
  const relevant: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line || line.startsWith('//')) continue;
    const lineLower = line.toLowerCase();
    if (keywords.some(k => lineLower.includes(k))) {
      relevant.push(`${String(i + 1).padStart(3, ' ')} │ ${lines[i]}`);
      if (relevant.length >= 3) break;
    }
  }

  return relevant;
}

export default function MissionEditor({ mission }: MissionEditorProps) {
  const [code, setCode] = useState(mission.starterCode || '// Write your Apex class here\n');
  const [patternResults, setPatternResults] = useState<PatternTestResult[] | null>(null);
  const [scenarioResults, setScenarioResults] = useState<RunResult[] | null>(null);
  const [compilationError, setCompilationError] = useState<string | null>(null);
  const [compileOnlyResult, setCompileOnlyResult] = useState<'ok' | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [hintIndex, setHintIndex] = useState(-1);
  const [activeScenarioTab, setActiveScenarioTab] = useState(0);

  const hasScenarios = (mission.scenarios?.length ?? 0) > 0;
  const hasPatternChecks = (mission.testCases?.length ?? 0) > 0;
  const hasChecks = hasScenarios || hasPatternChecks;

  // Scenario results summary
  const scenarioPassed = scenarioResults?.filter(r => r.passed).length ?? 0;
  const scenarioTotal = scenarioResults?.length ?? 0;
  const allScenariosPassed = scenarioTotal > 0 && scenarioPassed === scenarioTotal;

  // Pattern results summary
  const patternPassed = patternResults?.filter(r => r.passed).length ?? 0;
  const allPatternPassed = patternResults?.every(r => r.passed) ?? false;

  const handleCompile = () => {
    const err = validateApexSyntax(code);
    if (err) {
      setCompilationError(err);
      setScenarioResults(null);
      setPatternResults(null);
      setSubmitted(true);
      setCompileOnlyResult(null);
    } else {
      setCompilationError(null);
      setScenarioResults(null);
      setPatternResults(null);
      setSubmitted(false);
      setCompileOnlyResult('ok');
    }
  };

  const handleCheck = () => {
    const structureError = validateApexSyntax(code);
    if (structureError) {
      setCompilationError(structureError);
      setScenarioResults(null);
      setPatternResults(null);
      setSubmitted(true);
      setCompileOnlyResult(null);
      return;
    }

    setCompilationError(null);
    setCompileOnlyResult(null);

    if (hasScenarios && mission.scenarios) {
      const results = mission.scenarios.map(s => runScenario(code, s));
      setScenarioResults(results);
      setActiveScenarioTab(0);
      // Also run pattern checks if present
      if (hasPatternChecks && mission.testCases) {
        setPatternResults(mission.testCases.map(tc => runPatternCheck(code, tc)));
      }
    } else if (hasPatternChecks && mission.testCases) {
      setPatternResults(mission.testCases.map(tc => runPatternCheck(code, tc)));
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setCode(mission.starterCode || '// Write your Apex class here\n');
    setScenarioResults(null);
    setPatternResults(null);
    setCompilationError(null);
    setCompileOnlyResult(null);
    setSubmitted(false);
    setHintIndex(-1);
    setShowSolution(false);
    setActiveScenarioTab(0);
  };

  if (!mission.starterCode) {
    return (
      <div className="border border-dashed border-sf-gray-3 rounded-xl p-6 text-center flex flex-col items-center justify-center min-h-[200px]">
        <div className="text-3xl mb-2">🚧</div>
        <p className="text-sm text-sf-gray-6 font-medium">Editor coming soon for this mission</p>
        <p className="text-xs text-sf-gray-5 mt-1">Build this in a Salesforce Developer Edition org in the meantime.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* Editor header */}
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-sf-gray-8 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sf-teal inline-block" />
          Your Apex Code
        </h4>
        <button
          onClick={handleReset}
          className="flex items-center gap-1 text-xs text-sf-gray-5 hover:text-sf-gray-7 transition-colors"
        >
          <RotateCcw size={11} /> Reset
        </button>
      </div>

      {/* Code editor */}
      <div className="relative rounded-lg overflow-hidden border border-sf-gray-3">
        <div className="flex items-center gap-2 bg-[#1e1e2e] px-3 py-2 border-b border-gray-700">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <span className="text-xs text-gray-500 ml-2 font-mono">MyClass.apex</span>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-[#1a1a2a] flex flex-col items-end pr-2 pt-3 select-none z-10">
            {code.split('\n').map((_, i) => (
              <div key={i} className="text-gray-600 text-xs leading-[1.65] font-mono">{i + 1}</div>
            ))}
          </div>
          <textarea
            value={code}
            onChange={e => {
              setCode(e.target.value);
              if (submitted) {
                setScenarioResults(null);
                setPatternResults(null);
                setCompilationError(null);
                setSubmitted(false);
              }
              if (compileOnlyResult) setCompileOnlyResult(null);
            }}
            className="w-full bg-[#1e1e2e] text-gray-100 pl-12 pr-4 pt-3 pb-3 border-0 outline-none focus:ring-0 font-mono text-sm leading-relaxed resize-none"
            rows={Math.max(14, code.split('\n').length + 2)}
            spellCheck={false}
            autoComplete="off"
            autoCorrect="off"
            style={{ minHeight: '280px' }}
          />
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-2 flex-wrap">
        <button
          onClick={handleCompile}
          className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-sf-blue border-2 border-sf-blue rounded-lg hover:bg-sf-blue/5 transition-colors"
        >
          <Cpu size={14} /> Compile
        </button>
        {hasChecks && (
          <button onClick={handleCheck} className="btn-primary flex items-center gap-2 text-sm">
            <Send size={14} />
            {hasScenarios ? 'Run Tests' : 'Check Mission'}
          </button>
        )}
        {mission.hints && hintIndex < mission.hints.length - 1 && (
          <button
            onClick={() => setHintIndex(h => Math.min(h + 1, (mission.hints?.length ?? 1) - 1))}
            className="flex items-center gap-1.5 px-3 py-2 text-sm text-yellow-700 bg-yellow-50 border border-yellow-200 rounded-lg hover:bg-yellow-100 transition-colors"
          >
            <Lightbulb size={13} />
            {hintIndex === -1 ? 'Get a Hint' : 'Next Hint'}
          </button>
        )}
        {mission.solution && (
          <button
            onClick={() => setShowSolution(s => !s)}
            className="flex items-center gap-1.5 px-3 py-2 text-sm text-sf-gray-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {showSolution ? <EyeOff size={13} /> : <Eye size={13} />}
            {showSolution ? 'Hide' : 'View'} Solution
          </button>
        )}
      </div>

      {/* Compile-only success panel */}
      {!submitted && compileOnlyResult === 'ok' && (
        <div className="border border-green-300 rounded-xl p-4 bg-green-50 flex items-center gap-3">
          <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
          <div>
            <p className="font-semibold text-sm text-green-700">Compiled successfully</p>
            <p className="text-xs text-green-600 mt-0.5">No syntax errors found. Click "Run Tests" to execute all test cases.</p>
          </div>
        </div>
      )}

      {/* Hints */}
      {hintIndex >= 0 && mission.hints && (
        <div className="space-y-2">
          {mission.hints.slice(0, hintIndex + 1).map((hint, i) => (
            <div key={i} className="hint-box">
              <div className="flex items-start gap-2">
                <Lightbulb size={13} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-yellow-800"><strong>Hint {i + 1}:</strong> {hint}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Compilation error panel */}
      {submitted && compilationError && (
        <div className="border border-red-300 rounded-xl overflow-hidden">
          <div className="px-4 py-3 bg-red-50 border-b border-red-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <XCircle size={16} className="text-red-500" />
              <span className="font-bold text-sm text-red-700">Compilation Failed</span>
            </div>
            <span className="text-xs text-red-500">0 / {hasScenarios ? mission.scenarios!.length : (mission.testCases?.length ?? 0)} tests ran</span>
          </div>
          <div className="p-4 space-y-2">
            <div className="text-xs font-semibold text-sf-gray-6 uppercase tracking-wide">Error</div>
            <pre className="bg-red-950/10 border border-red-200 text-red-800 text-sm rounded-lg px-3 py-2 font-mono whitespace-pre-wrap">{compilationError}</pre>
            <p className="text-xs text-sf-gray-5 pt-1">Fix the syntax error above, then click Run Tests again.</p>
          </div>
        </div>
      )}

      {/* ── EXECUTION RESULTS (scenarios) ── */}
      {submitted && scenarioResults && (
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          {/* Header */}
          <div className={`px-4 py-3 flex items-center justify-between ${allScenariosPassed ? 'bg-green-50 border-b border-green-200' : 'bg-red-50 border-b border-red-200'}`}>
            <div className="flex items-center gap-2">
              {allScenariosPassed
                ? <CheckCircle size={16} className="text-green-600" />
                : <XCircle size={16} className="text-red-500" />}
              <span className={`font-bold text-sm ${allScenariosPassed ? 'text-green-700' : 'text-red-600'}`}>
                {allScenariosPassed ? `All ${scenarioTotal} tests passed!` : `${scenarioPassed} / ${scenarioTotal} tests passed`}
              </span>
            </div>
            <span className="text-xs text-sf-gray-5">execution-based</span>
          </div>

          {/* Tab row */}
          <div className="flex border-b border-gray-200 bg-gray-50 overflow-x-auto">
            {scenarioResults.map((r, i) => (
              <button
                key={i}
                onClick={() => setActiveScenarioTab(i)}
                className={`flex items-center gap-1.5 px-4 py-2 text-xs font-medium whitespace-nowrap transition-colors border-b-2 ${
                  activeScenarioTab === i
                    ? 'border-sf-blue text-sf-blue bg-white'
                    : 'border-transparent text-sf-gray-5 hover:text-sf-gray-7'
                }`}
              >
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${r.passed ? 'bg-green-500' : 'bg-red-500'}`} />
                {mission.scenarios![i].label}
              </button>
            ))}
          </div>

          {/* Active tab detail */}
          {(() => {
            const r = scenarioResults[activeScenarioTab];
            const s = mission.scenarios![activeScenarioTab];
            return (
              <div className="p-4 space-y-3">
                {r.error && (
                  <div>
                    <div className="text-xs font-semibold text-sf-gray-6 mb-1 uppercase tracking-wide">Runtime Error</div>
                    <pre className="bg-red-950/10 border border-red-200 text-red-800 text-xs rounded-lg px-3 py-2 font-mono whitespace-pre-wrap">{r.error}</pre>
                  </div>
                )}
                <div>
                  <div className="text-xs font-semibold text-sf-gray-6 mb-1 uppercase tracking-wide">Input</div>
                  <pre className="bg-gray-900 text-blue-300 text-xs rounded-lg px-3 py-2 font-mono">{s.inputDisplay}</pre>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs font-semibold text-sf-gray-6 mb-1 uppercase tracking-wide flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-400 inline-block" /> Expected Output
                    </div>
                    <pre className="bg-gray-900 text-green-300 text-xs rounded-lg px-3 py-2 font-mono">{r.expectedOutput.join('\n')}</pre>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-sf-gray-6 mb-1 uppercase tracking-wide flex items-center gap-1">
                      <span className={`w-2 h-2 rounded-full inline-block ${r.passed ? 'bg-green-400' : 'bg-red-400'}`} /> Your Output
                    </div>
                    <pre className={`text-xs rounded-lg px-3 py-2 font-mono ${r.passed ? 'bg-gray-900 text-green-300' : 'bg-gray-900 text-red-300'}`}>
                      {r.actualOutput.length > 0 ? r.actualOutput.join('\n') : '(no output)'}
                    </pre>
                  </div>
                </div>
              </div>
            );
          })()}

          {allScenariosPassed && (
            <div className="bg-green-50 border-t border-green-200 px-4 py-3">
              <p className="text-sm text-green-700 font-medium">
                All execution tests passed. Compare with the official solution to see alternate approaches.
              </p>
            </div>
          )}
        </div>
      )}

      {/* ── PATTERN CHECK RESULTS (shown below scenarios, or standalone) ── */}
      {submitted && patternResults && hasPatternChecks && (
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className={`px-4 py-3 flex items-center justify-between ${allPatternPassed ? 'bg-green-50 border-b border-green-200' : 'bg-orange-50 border-b border-orange-200'}`}>
            <div className="flex items-center gap-2">
              {allPatternPassed
                ? <CheckCircle size={16} className="text-green-600" />
                : <XCircle size={16} className="text-orange-500" />}
              <span className={`font-bold text-sm ${allPatternPassed ? 'text-green-700' : 'text-orange-700'}`}>
                {allPatternPassed ? 'All structure checks passed!' : `${patternPassed}/${patternResults.length} structure checks passed`}
              </span>
            </div>
            <span className="text-xs text-sf-gray-5">pattern-based</span>
          </div>
          <div className="p-4 space-y-3">
            {patternResults.map((r, i) => {
              const tc = mission.testCases![i];
              if (r.passed) {
                return (
                  <div key={i} className="flex items-center gap-3 px-4 py-3 bg-green-50 border border-green-100 rounded-xl">
                    <CheckCircle size={15} className="text-green-500 flex-shrink-0" />
                    <span className="font-medium text-sm text-green-700">{tc.description}</span>
                  </div>
                );
              }
              const relevantLines = extractRelevantLines(code, tc.pattern);
              return (
                <div key={i} className="border border-red-200 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 bg-red-50 border-b border-red-100">
                    <XCircle size={15} className="text-red-500 flex-shrink-0" />
                    <span className="font-semibold text-sm text-red-700">{tc.description}</span>
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <div className="text-xs font-semibold text-sf-gray-6 mb-1 uppercase tracking-wide flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-orange-400 inline-block" />
                        What you wrote
                      </div>
                      {relevantLines.length > 0 ? (
                        <pre className="bg-gray-900 text-orange-300 text-xs rounded-lg px-3 py-2 font-mono overflow-x-auto">{relevantLines.join('\n')}</pre>
                      ) : (
                        <div className="bg-gray-900 text-gray-500 text-xs rounded-lg px-3 py-2 font-mono italic">
                          (no matching lines found — this code may be missing entirely)
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-sf-gray-6 mb-1 uppercase tracking-wide flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />
                        What went wrong
                      </div>
                      <p className="text-sm text-red-700 bg-red-50 border border-red-100 rounded-lg px-3 py-2">{r.message}</p>
                    </div>
                    {tc.exampleFix && (
                      <div>
                        <div className="text-xs font-semibold text-sf-gray-6 mb-1 uppercase tracking-wide flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                          Try writing this instead
                        </div>
                        <pre className="bg-gray-900 text-green-300 text-xs rounded-lg px-3 py-2 font-mono overflow-x-auto">{tc.exampleFix}</pre>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* No test cases: placeholder */}
      {!hasChecks && !showSolution && (
        <div className="border border-dashed border-sf-gray-3 rounded-xl p-5 text-center">
          <div className="text-3xl mb-2">💡</div>
          <p className="text-sm text-sf-gray-6">Write your solution, then reveal the official solution to compare approaches.</p>
        </div>
      )}

      {/* Solution panel */}
      {showSolution && mission.solution && (
        <div className="border border-sf-gray-3 rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 bg-[#1e1e2e]">
            <Eye size={14} className="text-sf-teal" />
            <span className="text-sm font-medium text-gray-300">Official Solution</span>
          </div>
          <pre className="bg-[#1a1a2a] text-gray-100 text-xs p-4 overflow-x-auto font-mono leading-relaxed whitespace-pre-wrap max-h-80 overflow-y-auto">
            {mission.solution}
          </pre>
          <div className="bg-blue-50 border-t border-blue-100 px-4 py-3">
            <p className="text-xs text-sf-gray-7">
              <strong>Compare your approach:</strong> There may be multiple valid solutions. The check results above highlight the key patterns to look for.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
