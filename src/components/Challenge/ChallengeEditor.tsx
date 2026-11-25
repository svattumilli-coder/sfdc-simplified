import { useState } from 'react';
import { Lightbulb, CheckCircle, XCircle, Eye, EyeOff, RotateCcw, Send, AlertTriangle, Trophy, Zap, Target, Terminal, Play } from 'lucide-react';
import type { Challenge, TestCase } from '../../types';
import { validateApexSyntax, runScenario } from '../../utils/apexRunner';
import type { RunResult } from '../../utils/apexRunner';

interface ChallengeEditorProps {
  challenge: Challenge;
  isCompleted: boolean;
  savedCode?: string;
  onComplete: (code: string) => void;
}

interface PatternResult {
  passed: boolean;
  message: string;
  tcIndex: number;
}

function stripComments(code: string): string {
  return code.split('\n').map(line => {
    const idx = line.indexOf('//');
    return idx >= 0 ? line.substring(0, idx) : line;
  }).join('\n');
}

function runPatternTest(code: string, tc: TestCase): { passed: boolean; message: string } {
  try {
    const clean = stripComments(code);
    if (tc.outputPatterns && tc.outputPatterns.length > 0) {
      const passed = tc.outputPatterns.some(p => new RegExp(p, 'im').test(clean));
      return { passed, message: passed ? 'Passed' : tc.errorMessage };
    }
    const passed = new RegExp(tc.pattern, 'im').test(clean);
    return { passed, message: passed ? 'Passed' : tc.errorMessage };
  } catch {
    return { passed: false, message: 'Test case error' };
  }
}

const DIFFICULTY_CONFIG = {
  beginner: { label: 'Beginner', color: 'text-green-600 bg-green-50 border-green-200', xp: 150 },
  intermediate: { label: 'Intermediate', color: 'text-yellow-600 bg-yellow-50 border-yellow-200', xp: 200 },
  advanced: { label: 'Advanced', color: 'text-red-600 bg-red-50 border-red-200', xp: 300 },
};

export default function ChallengeEditor({ challenge, isCompleted, onComplete }: ChallengeEditorProps) {
  const [code, setCode] = useState(challenge.starterCode);
  const [hintIndex, setHintIndex] = useState(-1);
  const [showSolution, setShowSolution] = useState(false);
  const [compilationError, setCompilationError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [compileOnlyMode, setCompileOnlyMode] = useState(false);
  const [showXPBurst, setShowXPBurst] = useState(false);
  const [sessionPassed, setSessionPassed] = useState(false);

  // Execution engine results (for challenges with scenarios)
  const [runResults, setRunResults] = useState<RunResult[] | null>(null);
  const [activeScenarioTab, setActiveScenarioTab] = useState(0);

  // Pattern-based results (for SOQL/DML/Trigger/LWC challenges)
  const [patternResults, setPatternResults] = useState<PatternResult[] | null>(null);
  const [activePatternTab, setActivePatternTab] = useState(0);

  const diffCfg = DIFFICULTY_CONFIG[challenge.difficulty];
  const hasScenarios = (challenge.scenarios?.length ?? 0) > 0;

  const allRunPassed = runResults?.every(r => r.passed) ?? false;
  const runPassedCount = runResults?.filter(r => r.passed).length ?? 0;

  const allPatternPassed = patternResults?.every(r => r.passed) ?? false;
  const patternPassedCount = patternResults?.filter(r => r.passed).length ?? 0;

  const handleCompile = () => {
    const err = validateApexSyntax(code);
    setCompilationError(err);
    setRunResults(null);
    setPatternResults(null);
    setSubmitted(true);
    setCompileOnlyMode(true);
    setSessionPassed(false);
  };

  const handleRunTests = () => {
    setCompileOnlyMode(false);

    // Step 1: structural + JS-engine syntax check
    const structErr = validateApexSyntax(code);
    if (structErr) {
      setCompilationError(structErr);
      setRunResults(null);
      setPatternResults(null);
      setSubmitted(true);
      setSessionPassed(false);
      return;
    }
    setCompilationError(null);

    if (hasScenarios) {
      // Execution engine path
      const results = challenge.scenarios!.map(s => runScenario(code, s));
      setRunResults(results);
      setPatternResults(null);
      setActiveScenarioTab(0);
      setSubmitted(true);
      const passed = results.every(r => r.passed);
      setSessionPassed(passed);
      if (passed) {
        onComplete(code);
        if (!isCompleted) {
          setShowXPBurst(true);
          setTimeout(() => setShowXPBurst(false), 3000);
        }
      }
    } else {
      // Pattern-based fallback for SOQL/DML/Trigger/LWC
      const results = challenge.testCases.map((tc, i) => ({
        ...runPatternTest(code, tc),
        tcIndex: i,
      }));
      setPatternResults(results);
      setRunResults(null);
      setActivePatternTab(0);
      setSubmitted(true);
      const passed = results.every(r => r.passed);
      setSessionPassed(passed);
      if (passed) {
        onComplete(code);
        if (!isCompleted) {
          setShowXPBurst(true);
          setTimeout(() => setShowXPBurst(false), 3000);
        }
      }
    }
  };

  const handleReset = () => {
    setCode(challenge.starterCode);
    setRunResults(null);
    setPatternResults(null);
    setCompilationError(null);
    setSubmitted(false);
    setHintIndex(-1);
    setShowSolution(false);
    setShowXPBurst(false);
    setSessionPassed(false);
  };

  return (
    <div className="space-y-4">
      {/* XP burst animation */}
      {showXPBurst && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
          <div className="xp-burst-container">
            <div className="xp-burst-badge">
              <Trophy className="w-8 h-8 text-yellow-400 mb-1" />
              <div className="text-2xl font-black text-yellow-300">+{diffCfg.xp} XP</div>
              <div className="text-sm text-yellow-200 font-semibold">Challenge Complete!</div>
            </div>
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="confetti-dot"
                style={{
                  '--angle': `${i * 30}deg`,
                  '--delay': `${i * 0.05}s`,
                  '--color': ['#f59e0b','#10b981','#3b82f6','#ec4899','#8b5cf6'][i % 5],
                } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      )}

      {/* Mission/Level header */}
      <div className="flex items-center justify-between flex-wrap gap-3 p-4 bg-gradient-to-r from-sf-blue/5 to-sf-teal/5 border border-sf-blue/20 rounded-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-sf-blue flex items-center justify-center shadow">
            <Target className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider text-sf-blue">Coding Challenge</span>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${diffCfg.color}`}>
                {diffCfg.label}
              </span>
              {hasScenarios && (
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full border text-purple-600 bg-purple-50 border-purple-200">
                  Live Execution
                </span>
              )}
            </div>
            <div className="text-sm text-sf-gray-6">
              {hasScenarios
                ? `${challenge.scenarios!.length} test scenario${challenge.scenarios!.length > 1 ? 's' : ''} — your code runs live`
                : `${challenge.testCases.length} test cases to pass`}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2">
          <Zap className="w-4 h-4 text-yellow-500" />
          <span className="text-sm font-bold text-yellow-700">+{diffCfg.xp} XP</span>
          {(isCompleted || sessionPassed) && <CheckCircle className="w-4 h-4 text-green-500 ml-1" />}
        </div>
      </div>

      {/* Mode indicator */}
      {hasScenarios ? (
        <div className="flex items-start gap-2 bg-purple-50 border border-purple-200 rounded-lg px-3 py-2 text-xs text-purple-700">
          <Play size={14} className="flex-shrink-0 mt-0.5" />
          <span>
            <strong>Live execution.</strong> Your Apex code is transpiled to JavaScript and executed — Compile checks syntax, Run Tests executes your code against real inputs.
          </span>
        </div>
      ) : (
        <div className="flex items-start gap-2 bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2 text-xs text-yellow-700">
          <AlertTriangle size={14} className="flex-shrink-0 mt-0.5" />
          <span>
            <strong>Structural validation.</strong> Code patterns are checked against expected structure — real Apex runs in a Salesforce org.
          </span>
        </div>
      )}

      {/* Instructions */}
      <div>
        <h4 className="font-semibold text-sf-gray-9 mb-2">Instructions</h4>
        <ol className="space-y-1">
          {challenge.instructions.map((inst, i) => (
            <li key={i} className="text-sm text-sf-gray-7 flex items-start gap-2">
              <span className="text-sf-blue font-bold flex-shrink-0 w-5 h-5 rounded-full bg-sf-blue/10 flex items-center justify-center text-xs">{i + 1}</span>
              {inst}
            </li>
          ))}
        </ol>
      </div>

      {/* Code editor */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <label className="text-sm font-medium text-sf-gray-7">Your Code</label>
          <button
            onClick={handleReset}
            className="flex items-center gap-1 text-xs text-sf-gray-5 hover:text-sf-gray-7 transition-colors"
          >
            <RotateCcw size={12} />
            Reset
          </button>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-sf-gray-9 rounded-tl-lg rounded-bl-lg flex flex-col items-end pr-2 pt-4 select-none">
            {code.split('\n').map((_, i) => (
              <div key={i} className="text-sf-gray-5 text-xs leading-[1.7] font-mono">
                {i + 1}
              </div>
            ))}
          </div>
          <textarea
            value={code}
            onChange={e => {
              setCode(e.target.value);
              if (submitted) {
                setRunResults(null);
                setPatternResults(null);
                setCompilationError(null);
                setSubmitted(false);
                setSessionPassed(false);
              }
            }}
            className="w-full code-textarea bg-sf-gray-9 text-gray-100 rounded-lg pl-12 pr-4 pt-4 pb-4 border-0 outline-none focus:ring-2 focus:ring-sf-blue"
            rows={Math.max(10, code.split('\n').length + 2)}
            spellCheck={false}
            autoComplete="off"
            autoCorrect="off"
          />
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-3 flex-wrap">
        <button
          onClick={handleCompile}
          className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-sf-blue border-2 border-sf-blue rounded-lg hover:bg-sf-blue/5 transition-colors"
        >
          <Terminal size={15} />
          Compile
        </button>
        <button
          onClick={handleRunTests}
          className="btn-primary flex items-center gap-2"
        >
          <Send size={15} />
          Run Tests
        </button>

        {hintIndex < challenge.hints.length - 1 && (
          <button
            onClick={() => setHintIndex(prev => Math.min(prev + 1, challenge.hints.length - 1))}
            className="flex items-center gap-1.5 px-3 py-2 text-sm text-yellow-700 bg-yellow-50 border border-yellow-200 rounded-lg hover:bg-yellow-100 transition-colors"
          >
            <Lightbulb size={14} />
            {hintIndex === -1 ? 'Show Hint' : 'Next Hint'}
          </button>
        )}

        <button
          onClick={() => setShowSolution(!showSolution)}
          className="flex items-center gap-1.5 px-3 py-2 text-sm text-sf-gray-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          {showSolution ? <EyeOff size={14} /> : <Eye size={14} />}
          {showSolution ? 'Hide' : 'View'} Solution
        </button>
      </div>

      {/* Compile-only success panel */}
      {submitted && compileOnlyMode && !compilationError && (
        <div className="border border-green-300 rounded-xl overflow-hidden">
          <div className="px-4 py-3 bg-green-50 flex items-center gap-2">
            <CheckCircle size={18} className="text-green-600" />
            <span className="font-bold text-green-700">Compilation Successful</span>
            <span className="text-sm text-green-600 ml-auto">No syntax errors found</span>
          </div>
          <div className="px-4 py-3 text-sm text-sf-gray-6">
            Your code structure looks valid. Click <strong>Run Tests</strong> to execute your code against the test cases.
          </div>
        </div>
      )}

      {/* Compilation error panel */}
      {submitted && compilationError && (
        <div className="border border-red-300 rounded-xl overflow-hidden">
          <div className="px-4 py-3 bg-red-50 border-b border-red-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <XCircle size={18} className="text-red-500" />
              <span className="font-bold text-red-700">Compilation Failed</span>
            </div>
            <span className="text-sm text-red-500">0 / {hasScenarios ? challenge.scenarios!.length : challenge.testCases.length} tests ran</span>
          </div>
          <div className="p-4 space-y-2">
            <div className="text-xs font-semibold text-sf-gray-6 uppercase tracking-wide mb-1">Error</div>
            <pre className="bg-red-950/10 border border-red-200 text-red-800 text-sm rounded-lg px-3 py-2 font-mono whitespace-pre-wrap leading-relaxed">{compilationError}</pre>
            <p className="text-xs text-sf-gray-5 pt-1">Fix the syntax error above, then click Run Tests again.</p>
          </div>
        </div>
      )}

      {/* ── EXECUTION ENGINE RESULTS (scenarios) ── */}
      {submitted && !compileOnlyMode && !compilationError && runResults && hasScenarios && (
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          {/* Header */}
          <div className={`px-4 py-3 flex items-center justify-between ${allRunPassed ? 'bg-green-50 border-b border-green-200' : 'bg-red-50 border-b border-red-200'}`}>
            <div className="flex items-center gap-2">
              {allRunPassed
                ? <CheckCircle size={18} className="text-green-600" />
                : <XCircle size={18} className="text-red-500" />}
              <span className={`font-bold ${allRunPassed ? 'text-green-700' : 'text-red-600'}`}>
                {allRunPassed ? 'Accepted' : 'Wrong Answer'}
              </span>
            </div>
            <span className="text-sm text-sf-gray-6">
              {runPassedCount} / {runResults.length} tests passed
            </span>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 bg-gray-50 overflow-x-auto">
            {runResults.map((r, i) => (
              <button
                key={i}
                onClick={() => setActiveScenarioTab(i)}
                className={`px-4 py-2 text-xs font-medium flex items-center gap-1.5 whitespace-nowrap border-b-2 transition-colors ${
                  activeScenarioTab === i
                    ? 'border-sf-blue text-sf-blue bg-white'
                    : 'border-transparent text-sf-gray-5 hover:text-sf-gray-7'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${r.passed ? 'bg-green-500' : 'bg-red-500'}`} />
                {challenge.scenarios![i].label}
              </button>
            ))}
          </div>

          {/* Active scenario detail */}
          {runResults[activeScenarioTab] && (() => {
            const r = runResults[activeScenarioTab];
            const s = challenge.scenarios![activeScenarioTab];
            return (
              <div className="p-4 space-y-3">
                <div className="flex items-center gap-2">
                  {r.passed
                    ? <CheckCircle size={14} className="text-green-500" />
                    : <XCircle size={14} className="text-red-500" />}
                  <span className={`text-sm font-semibold ${r.passed ? 'text-green-700' : 'text-red-600'}`}>
                    {r.passed ? 'All checks passed' : 'Output mismatch'}
                  </span>
                </div>

                {/* Input */}
                <div>
                  <div className="text-xs font-semibold text-sf-gray-6 mb-1 uppercase tracking-wide">Input</div>
                  <pre className="bg-gray-900 text-gray-100 text-xs rounded-lg px-3 py-2 overflow-x-auto font-mono">{s.inputDisplay}</pre>
                </div>

                {/* Expected output */}
                <div>
                  <div className="text-xs font-semibold text-sf-gray-6 mb-1 uppercase tracking-wide">Expected Output</div>
                  <pre className="bg-gray-900 text-green-300 text-xs rounded-lg px-3 py-2 overflow-x-auto font-mono">
                    {s.expectedOutput.join('\n')}
                  </pre>
                </div>

                {/* Actual output */}
                <div>
                  <div className={`text-xs font-semibold mb-1 uppercase tracking-wide ${r.passed ? 'text-green-600' : 'text-red-600'}`}>Your Output</div>
                  {r.error ? (
                    <pre className="bg-gray-900 text-red-400 text-xs rounded-lg px-3 py-2 overflow-x-auto font-mono">{r.error}</pre>
                  ) : r.actualOutput.length > 0 ? (
                    <pre className={`bg-gray-900 text-xs rounded-lg px-3 py-2 overflow-x-auto font-mono ${r.passed ? 'text-green-300' : 'text-orange-300'}`}>
                      {r.actualOutput.join('\n')}
                    </pre>
                  ) : (
                    <pre className="bg-gray-900 text-gray-500 text-xs rounded-lg px-3 py-2 font-mono italic">(no output — make sure System.debug() is called)</pre>
                  )}
                </div>

                {!r.passed && !r.error && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-xs text-amber-800">
                    <strong>Tip:</strong> Compare your output with the expected output above. Make sure your System.debug() statements produce the right values.
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      )}

      {/* ── PATTERN-BASED RESULTS (SOQL/DML/Trigger/LWC) ── */}
      {submitted && !compileOnlyMode && !compilationError && patternResults && !hasScenarios && (
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className={`px-4 py-3 flex items-center justify-between ${allPatternPassed ? 'bg-green-50 border-b border-green-200' : 'bg-red-50 border-b border-red-200'}`}>
            <div className="flex items-center gap-2">
              {allPatternPassed
                ? <CheckCircle size={18} className="text-green-600" />
                : <XCircle size={18} className="text-red-500" />}
              <span className={`font-bold ${allPatternPassed ? 'text-green-700' : 'text-red-600'}`}>
                {allPatternPassed ? 'Accepted' : 'Wrong Answer'}
              </span>
            </div>
            <span className="text-sm text-sf-gray-6">
              {patternPassedCount} / {patternResults.length} tests passed
            </span>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 bg-gray-50 overflow-x-auto">
            {patternResults.map((r, i) => (
              <button
                key={i}
                onClick={() => setActivePatternTab(i)}
                className={`px-4 py-2 text-xs font-medium flex items-center gap-1.5 whitespace-nowrap border-b-2 transition-colors ${
                  activePatternTab === i
                    ? 'border-sf-blue text-sf-blue bg-white'
                    : 'border-transparent text-sf-gray-5 hover:text-sf-gray-7'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${r.passed ? 'bg-green-500' : 'bg-red-500'}`} />
                Case {i + 1}
              </button>
            ))}
          </div>

          {/* Active test case */}
          {patternResults[activePatternTab] && (() => {
            const r = patternResults[activePatternTab];
            const tc = challenge.testCases[activePatternTab];
            return (
              <div className="p-4 space-y-3">
                <div className="flex items-center gap-2">
                  {r.passed
                    ? <CheckCircle size={14} className="text-green-500" />
                    : <XCircle size={14} className="text-red-500" />}
                  <span className={`text-sm font-semibold ${r.passed ? 'text-green-700' : 'text-red-600'}`}>
                    {tc.description}
                  </span>
                </div>

                {tc.inputData && (
                  <div>
                    <div className="text-xs font-semibold text-sf-gray-6 mb-1 uppercase tracking-wide">Input</div>
                    <pre className="bg-gray-900 text-gray-100 text-xs rounded-lg px-3 py-2 overflow-x-auto font-mono">{tc.inputData}</pre>
                  </div>
                )}

                {tc.expectedOutput && (
                  <div>
                    <div className="text-xs font-semibold text-sf-gray-6 mb-1 uppercase tracking-wide">Expected Output</div>
                    <pre className="bg-gray-900 text-green-300 text-xs rounded-lg px-3 py-2 overflow-x-auto font-mono">{tc.expectedOutput}</pre>
                  </div>
                )}

                {!r.passed && (
                  <div className="bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                    <div className="text-xs font-semibold text-red-600 mb-0.5 uppercase tracking-wide">Hint</div>
                    <p className="text-sm text-red-700">{r.message}</p>
                  </div>
                )}

                {r.passed && (
                  <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                    <p className="text-sm text-green-700 font-medium">All test conditions met.</p>
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      )}

      {/* Hints */}
      {hintIndex >= 0 && (
        <div className="space-y-2">
          {challenge.hints.slice(0, hintIndex + 1).map((hint, i) => (
            <div key={i} className="hint-box">
              <div className="flex items-start gap-2">
                <Lightbulb size={15} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Hint {i + 1}:</strong> {hint}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Solution */}
      {showSolution && (
        <div className="border border-sf-gray-3 rounded-lg overflow-hidden">
          <div className="bg-sf-gray-9 px-4 py-2 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-300">Solution</span>
          </div>
          <pre className="code-block rounded-none text-sm overflow-x-auto">
            <code>{challenge.solution}</code>
          </pre>
          <div className="bg-blue-50 border-t border-blue-100 p-4">
            <p className="text-sm text-sf-gray-7">
              <strong className="text-sf-gray-9">Explanation:</strong> {challenge.solutionExplanation}
            </p>
          </div>
        </div>
      )}

      {/* Completed badge */}
      {sessionPassed && (
        <div className="success-box flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
            <Trophy size={20} className="text-yellow-500" />
          </div>
          <div>
            <p className="text-sf-green font-semibold text-sm">Challenge Complete! +{diffCfg.xp} XP earned</p>
            <p className="text-green-700 text-xs">Your submission has been saved. Keep going!</p>
          </div>
        </div>
      )}
    </div>
  );
}
