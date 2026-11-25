import { useState } from 'react';
import { Bug, Lightbulb, CheckCircle2, Eye, ChevronRight, AlertTriangle, XCircle, Cpu, Play, RotateCcw } from 'lucide-react';
import { debugScenarios } from '../data/debug-scenarios';
import type { DebugScenario } from '../types';
import { executeApex, validateApexSyntax } from '../utils/apexRunner';

const bugTypeColors: Record<string, string> = {
  'null-pointer': 'bg-red-100 text-red-800',
  'governor-limit': 'bg-orange-100 text-orange-800',
  logic: 'bg-yellow-100 text-yellow-800',
  syntax: 'bg-purple-100 text-purple-800',
  soql: 'bg-blue-100 text-blue-800',
  dml: 'bg-teal-100 text-teal-800',
};

function ScenarioCard({ scenario, onSelect }: { scenario: DebugScenario; onSelect: () => void }) {
  return (
    <button
      className="card text-left w-full hover:shadow-sf-lg hover:-translate-y-0.5 transition-all"
      onClick={onSelect}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className={`tag ${bugTypeColors[scenario.bugType] || 'bg-gray-100 text-gray-800'}`}>
          {scenario.bugType.replace('-', ' ')}
        </span>
      </div>
      <h3 className="font-bold mb-1">{scenario.title}</h3>
      <p className="text-sm text-sf-gray-6">{scenario.description}</p>
      <div className="flex items-center gap-1 mt-3 text-sf-blue text-sm font-medium">
        Debug this <ChevronRight className="w-4 h-4" />
      </div>
    </button>
  );
}

interface DebugRunResult {
  expected: string[];
  actual: string[];
  error: string | null;
}

function ScenarioDetail({ scenario, onBack }: { scenario: DebugScenario; onBack: () => void }) {
  const [showHint, setShowHint] = useState(false);
  const [hintIdx, setHintIdx] = useState(0);
  const [showFix, setShowFix] = useState(false);
  const [userAttempt, setUserAttempt] = useState(scenario.brokenCode);
  const [submitted, setSubmitted] = useState(false);
  const [compilationError, setCompilationError] = useState<string | null>(null);
  const [compileOnlyOk, setCompileOnlyOk] = useState(false);
  const [runResults, setRunResults] = useState<DebugRunResult | null>(null);

  const handleCompile = () => {
    const err = validateApexSyntax(userAttempt);
    if (err) {
      setCompilationError(err);
      setRunResults(null);
      setSubmitted(true);
      setCompileOnlyOk(false);
    } else {
      setCompilationError(null);
      setRunResults(null);
      setSubmitted(false);
      setCompileOnlyOk(true);
    }
  };

  const handleRunTests = () => {
    const structErr = validateApexSyntax(userAttempt);
    if (structErr) {
      setCompilationError(structErr);
      setRunResults(null);
      setSubmitted(true);
      setCompileOnlyOk(false);
      return;
    }
    setCompilationError(null);
    setCompileOnlyOk(false);

    const expectedResult = executeApex(scenario.fixedCode);
    const actualResult = executeApex(userAttempt);

    setRunResults({
      expected: expectedResult.output,
      actual: actualResult.output,
      error: actualResult.error,
    });
    setSubmitted(true);
  };

  const outputsMatch =
    runResults !== null &&
    !runResults.error &&
    runResults.actual.join('\n') === runResults.expected.join('\n');

  return (
    <div>
      <button
        className="flex items-center gap-2 text-sm text-sf-gray-6 hover:text-sf-blue mb-6 transition-colors"
        onClick={onBack}
      >
        ← Back to scenarios
      </button>

      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
          <Bug className="w-5 h-5 text-red-600" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold">{scenario.title}</h2>
            <span className={`tag ${bugTypeColors[scenario.bugType] || ''}`}>
              {scenario.bugType.replace('-', ' ')}
            </span>
          </div>
          <p className="text-sm text-sf-gray-6">{scenario.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Broken code */}
        <div>
          <h3 className="font-semibold text-sf-gray-8 mb-2 flex items-center gap-2">
            <Bug className="w-4 h-4 text-red-500" /> Broken Code
          </h3>
          <pre className="code-block text-xs whitespace-pre-wrap border-2 border-red-300">{scenario.brokenCode}</pre>
        </div>

        {/* Error */}
        <div>
          <h3 className="font-semibold text-sf-gray-8 mb-2">Error Message</h3>
          <div className="bg-red-950 text-red-300 rounded-lg p-4 font-mono text-xs whitespace-pre-wrap mb-4">
            {scenario.errorMessage}
          </div>

          {/* Hints */}
          <div className="space-y-2">
            <button
              className="btn-secondary text-sm flex items-center gap-2 w-full justify-center"
              onClick={() => { setShowHint(true); }}
            >
              <Lightbulb className="w-4 h-4" />
              {showHint ? `Hint ${hintIdx + 1} of ${scenario.hints.length}` : 'Get a Hint'}
            </button>
            {showHint && (
              <div className="hint-box">
                <p className="text-sm text-yellow-900">{scenario.hints[hintIdx]}</p>
                {hintIdx < scenario.hints.length - 1 && (
                  <button
                    className="text-xs text-yellow-700 underline mt-2"
                    onClick={() => setHintIdx(i => i + 1)}
                  >
                    Next hint →
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Your Fix editor */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-sf-gray-8 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sf-teal inline-block" />
            Your Fix
          </h3>
          <button
            onClick={() => {
              setUserAttempt(scenario.brokenCode);
              setRunResults(null);
              setCompilationError(null);
              setSubmitted(false);
              setCompileOnlyOk(false);
            }}
            className="flex items-center gap-1 text-xs text-sf-gray-5 hover:text-sf-gray-7 transition-colors"
          >
            <RotateCcw size={11} /> Reset
          </button>
        </div>

        {/* Dark editor with line numbers */}
        <div className="relative rounded-lg overflow-hidden border border-sf-gray-3">
          <div className="flex items-center gap-2 bg-[#1e1e2e] px-3 py-2 border-b border-gray-700">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            <span className="text-xs text-gray-500 ml-2 font-mono">fix.apex</span>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-10 bg-[#1a1a2a] flex flex-col items-end pr-2 pt-3 select-none z-10">
              {userAttempt.split('\n').map((_, i) => (
                <div key={i} className="text-gray-600 text-xs leading-[1.65] font-mono">{i + 1}</div>
              ))}
            </div>
            <textarea
              value={userAttempt}
              onChange={e => {
                setUserAttempt(e.target.value);
                if (submitted) {
                  setRunResults(null);
                  setCompilationError(null);
                  setSubmitted(false);
                }
                if (compileOnlyOk) setCompileOnlyOk(false);
              }}
              className="w-full bg-[#1e1e2e] text-gray-100 pl-12 pr-4 pt-3 pb-3 border-0 outline-none focus:ring-0 font-mono text-sm leading-relaxed resize-none"
              rows={Math.max(12, userAttempt.split('\n').length + 2)}
              spellCheck={false}
              autoComplete="off"
              autoCorrect="off"
              style={{ minHeight: '240px' }}
            />
          </div>
        </div>

        {/* Two-button row */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleCompile}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-sf-blue border-2 border-sf-blue rounded-lg hover:bg-sf-blue/5 transition-colors"
          >
            <Cpu size={14} /> Compile
          </button>
          <button
            onClick={handleRunTests}
            className="btn-primary flex items-center gap-2 text-sm"
          >
            <Play size={14} /> Run Tests
          </button>
        </div>
      </div>

      {/* Compile-only success panel */}
      {!submitted && compileOnlyOk && (
        <div className="border border-green-300 rounded-xl p-4 bg-green-50 flex items-center gap-3 mb-4">
          <CheckCircle2 size={16} className="text-green-600 flex-shrink-0" />
          <div>
            <p className="font-semibold text-sm text-green-700">Compiled successfully</p>
            <p className="text-xs text-green-600 mt-0.5">No syntax errors. Click "Run Tests" to compare output with the expected fix.</p>
          </div>
        </div>
      )}

      {/* Compilation error panel */}
      {submitted && compilationError && (
        <div className="border border-red-300 rounded-xl overflow-hidden mb-4">
          <div className="px-4 py-3 bg-red-50 border-b border-red-200 flex items-center gap-2">
            <XCircle size={16} className="text-red-500" />
            <span className="font-bold text-sm text-red-700">Compilation Failed</span>
          </div>
          <div className="p-4">
            <pre className="bg-red-950/10 border border-red-200 text-red-800 text-sm rounded-lg px-3 py-2 font-mono whitespace-pre-wrap">{compilationError}</pre>
            <p className="text-xs text-sf-gray-5 mt-2">Fix the syntax error above, then click Run Tests again.</p>
          </div>
        </div>
      )}

      {/* Run results panel */}
      {submitted && runResults && !compilationError && (
        <div className="border border-gray-200 rounded-xl overflow-hidden mb-4">
          <div className={`px-4 py-3 flex items-center justify-between border-b ${
            runResults.error ? 'bg-red-50 border-red-200' :
            outputsMatch ? 'bg-green-50 border-green-200' :
            'bg-yellow-50 border-yellow-200'
          }`}>
            <div className="flex items-center gap-2">
              {runResults.error ? (
                <XCircle size={16} className="text-red-500" />
              ) : outputsMatch ? (
                <CheckCircle2 size={16} className="text-green-600" />
              ) : (
                <AlertTriangle size={16} className="text-yellow-600" />
              )}
              <span className={`font-bold text-sm ${
                runResults.error ? 'text-red-700' :
                outputsMatch ? 'text-green-700' :
                'text-yellow-700'
              }`}>
                {runResults.error ? 'Runtime Error' :
                 outputsMatch ? 'Output matches fixed code!' :
                 'Output differs from expected fix'}
              </span>
            </div>
          </div>
          <div className="p-4 space-y-3">
            {runResults.error && (
              <div className="bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                <p className="text-xs font-semibold text-red-600 mb-1 uppercase tracking-wide">Runtime Error</p>
                <p className="text-sm text-red-700 font-mono">{runResults.error}</p>
              </div>
            )}
            <div>
              <div className="text-xs font-semibold text-sf-gray-6 mb-1 uppercase tracking-wide">Expected Output (from fixed code)</div>
              {runResults.expected.length > 0 ? (
                <pre className="bg-gray-900 text-green-300 text-xs rounded-lg px-3 py-2 font-mono overflow-x-auto">{runResults.expected.join('\n')}</pre>
              ) : (
                <p className="text-xs text-sf-gray-5 italic bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                  Fixed code produces no System.debug output — this bug involves SOQL/DML/Trigger logic that cannot be simulated in the browser. Review the explanation below.
                </p>
              )}
            </div>
            <div>
              <div className="text-xs font-semibold text-sf-gray-6 mb-1 uppercase tracking-wide">Your Output</div>
              {runResults.actual.length > 0 ? (
                <pre className={`text-xs rounded-lg px-3 py-2 font-mono overflow-x-auto ${
                  outputsMatch ? 'bg-gray-900 text-green-300' : 'bg-gray-900 text-orange-300'
                }`}>{runResults.actual.join('\n')}</pre>
              ) : (
                <p className="text-xs text-sf-gray-5 italic bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">(no output produced)</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Solution */}
      <button
        className="btn-secondary flex items-center gap-2 mb-4"
        onClick={() => setShowFix(!showFix)}
      >
        <Eye className="w-4 h-4" />
        {showFix ? 'Hide Fix' : 'Show the Fix'}
      </button>

      {showFix && (
        <div className="space-y-4">
          <div className="card border-2 border-green-300">
            <h3 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Fixed Code
            </h3>
            <pre className="code-block text-xs whitespace-pre-wrap">{scenario.fixedCode}</pre>
          </div>
          <div className="card border-2 border-sf-blue/30 bg-sf-blue/5">
            <h3 className="font-semibold text-sf-blue mb-2">Explanation</h3>
            <p className="text-sm text-sf-gray-7 leading-relaxed">{scenario.explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export function DebuggingSimulator() {
  const [selected, setSelected] = useState<DebugScenario | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {!selected ? (
        <>
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-sf-gray-9 mb-2">Debug Lab</h1>
            <p className="text-sf-gray-6">Fix intentionally broken Apex code. Real bugs that Salesforce developers encounter every day.</p>
          </div>

          <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6">
            <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800">
              Each scenario shows a broken class and its error message. Use the hints if needed, then reveal the fix and explanation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {debugScenarios.map(s => (
              <ScenarioCard key={s.id} scenario={s} onSelect={() => setSelected(s)} />
            ))}
          </div>
        </>
      ) : (
        <ScenarioDetail scenario={selected} onBack={() => setSelected(null)} />
      )}
    </div>
  );
}
