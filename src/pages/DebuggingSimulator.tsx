import { useState } from 'react';
import { Bug, Lightbulb, CheckCircle2, Eye, ChevronRight, AlertTriangle } from 'lucide-react';
import { debugScenarios } from '../data/debug-scenarios';
import type { DebugScenario } from '../types';

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

function ScenarioDetail({ scenario, onBack }: { scenario: DebugScenario; onBack: () => void }) {
  const [showHint, setShowHint] = useState(false);
  const [hintIdx, setHintIdx] = useState(0);
  const [showFix, setShowFix] = useState(false);
  const [userAttempt, setUserAttempt] = useState(scenario.brokenCode);
  const [submitted, setSubmitted] = useState(false);

  const handleCheck = () => {
    setSubmitted(true);
  };

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

      {/* Attempt */}
      <div className="card mb-4">
        <h3 className="font-semibold text-sf-gray-8 mb-2">Your Fix</h3>
        <p className="text-sm text-sf-gray-6 mb-3">Edit the code above to fix the bug, then click "Check My Fix":</p>
        <div className="card !p-0 overflow-hidden mb-4">
          <div className="bg-sf-gray-8 px-4 py-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-sf-gray-4 text-xs ml-2">fix.apex</span>
          </div>
          <textarea
            className="code-textarea w-full bg-sf-gray-9 text-green-300 p-4 border-0 outline-none"
            value={userAttempt}
            onChange={e => setUserAttempt(e.target.value)}
            rows={14}
            spellCheck={false}
          />
        </div>
        <button className="btn-primary" onClick={handleCheck}>
          Check My Fix
        </button>
        {submitted && (
          <div className="mt-3 note-box">
            <p className="text-sm text-blue-800">
              Great effort! Compare your solution with the official fix below to see if you found the issue.
              Pattern-based checking cannot verify runtime correctness — review the explanation carefully.
            </p>
          </div>
        )}
      </div>

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
