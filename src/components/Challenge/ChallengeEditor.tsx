import { useState } from 'react';
import { Lightbulb, CheckCircle, XCircle, Eye, EyeOff, RotateCcw, Send, AlertTriangle } from 'lucide-react';
import type { Challenge, TestCase } from '../../types';

interface ChallengeEditorProps {
  challenge: Challenge;
  isCompleted: boolean;
  savedCode?: string;
  onComplete: (code: string) => void;
}

function runTestCase(code: string, tc: TestCase): { passed: boolean; message: string } {
  try {
    const regex = new RegExp(tc.pattern, 'im');
    const passed = regex.test(code);
    return { passed, message: passed ? 'Passed' : tc.errorMessage };
  } catch {
    return { passed: false, message: 'Test case error' };
  }
}

export default function ChallengeEditor({ challenge, isCompleted, savedCode, onComplete }: ChallengeEditorProps) {
  const [code, setCode] = useState(savedCode || challenge.starterCode);
  const [hintIndex, setHintIndex] = useState(-1);
  const [showSolution, setShowSolution] = useState(false);
  const [results, setResults] = useState<{ passed: boolean; message: string }[] | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const allPassed = results?.every(r => r.passed) ?? false;

  const handleSubmit = () => {
    const testResults = challenge.testCases.map(tc => runTestCase(code, tc));
    setResults(testResults);
    setSubmitted(true);
    if (testResults.every(r => r.passed)) {
      onComplete(code);
    }
  };

  const handleReset = () => {
    setCode(challenge.starterCode);
    setResults(null);
    setSubmitted(false);
    setHintIndex(-1);
    setShowSolution(false);
  };

  const showNextHint = () => {
    setHintIndex(prev => Math.min(prev + 1, challenge.hints.length - 1));
  };

  return (
    <div className="space-y-4">
      {/* Simulated environment warning */}
      <div className="flex items-start gap-2 bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2 text-xs text-yellow-700">
        <AlertTriangle size={14} className="flex-shrink-0 mt-0.5" />
        <span>
          <strong>Simulated validation only.</strong> This checks code patterns, not actual execution. Real Apex runs in a Salesforce org.
        </span>
      </div>

      {/* Instructions */}
      <div>
        <h4 className="font-semibold text-sf-gray-9 mb-2">Instructions</h4>
        <ol className="space-y-1">
          {challenge.instructions.map((inst, i) => (
            <li key={i} className="text-sm text-sf-gray-7 flex items-start gap-2">
              <span className="text-sf-blue font-bold flex-shrink-0">{i + 1}.</span>
              {inst}
            </li>
          ))}
        </ol>
      </div>

      {/* Code editor */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <label className="text-sm font-medium text-sf-gray-7">Your Code</label>
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="flex items-center gap-1 text-xs text-sf-gray-5 hover:text-sf-gray-7 transition-colors"
            >
              <RotateCcw size={12} />
              Reset
            </button>
          </div>
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
            onChange={e => setCode(e.target.value)}
            className="w-full code-textarea bg-sf-gray-9 text-gray-100 rounded-lg pl-12 pr-4 pt-4 pb-4 border-0 outline-none focus:ring-2 focus:ring-sf-blue"
            rows={Math.max(10, code.split('\n').length + 2)}
            spellCheck={false}
            autoComplete="off"
            autoCorrect="off"
          />
        </div>
      </div>

      {/* Test results */}
      {submitted && results && (
        <div>
          <h4 className="font-semibold text-sf-gray-9 mb-2">
            {allPassed ? '✓ All tests passed!' : 'Test Results'}
          </h4>
          <div className="space-y-2">
            {results.map((r, i) => (
              <div
                key={i}
                className={`flex items-start gap-2 p-3 rounded-lg text-sm ${
                  r.passed ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                }`}
              >
                {r.passed
                  ? <CheckCircle size={15} className="text-sf-green mt-0.5 flex-shrink-0" />
                  : <XCircle size={15} className="text-sf-red mt-0.5 flex-shrink-0" />}
                <div>
                  <span className={`font-medium ${r.passed ? 'text-sf-green' : 'text-sf-red'}`}>
                    Test {i + 1}: {challenge.testCases[i]?.description}
                  </span>
                  {!r.passed && (
                    <p className="text-sf-gray-7 mt-0.5">{r.message}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action buttons */}
      <div className="flex items-center gap-3 flex-wrap">
        <button
          onClick={handleSubmit}
          className="btn-primary flex items-center gap-2"
        >
          <Send size={15} />
          {submitted ? 'Resubmit' : 'Submit'}
        </button>

        {hintIndex < challenge.hints.length - 1 && (
          <button
            onClick={showNextHint}
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
      {(isCompleted || allPassed) && (
        <div className="success-box flex items-center gap-2">
          <CheckCircle size={18} className="text-sf-green flex-shrink-0" />
          <div>
            <p className="text-sf-green font-semibold text-sm">Challenge completed! +150 XP</p>
            <p className="text-green-700 text-xs">Your submission has been saved.</p>
          </div>
        </div>
      )}
    </div>
  );
}
