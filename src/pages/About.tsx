import { Link } from 'react-router-dom';
import { Code2, BookOpen, Zap, Target, AlertTriangle, Heart, ArrowRight } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-sf-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Code2 className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold mb-3">About SF Dev Academy</h1>
        <p className="text-sf-gray-6 text-lg">An interactive learning platform for aspiring Salesforce developers</p>
      </div>

      <div className="space-y-8">
        <div className="card">
          <h2 className="text-xl font-bold mb-3">What is SF Dev Academy?</h2>
          <p className="text-sf-gray-7 leading-relaxed">
            SF Dev Academy is a free, browser-based learning platform designed specifically for people who are completely new to Salesforce development.
            Unlike documentation or video courses, every topic here follows a hands-on cycle: understand, see an example, write code, get feedback, review the solution.
          </p>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold mb-4">What You Will Learn</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: <Code2 className="w-4 h-4 text-sf-blue" />, label: 'Apex Programming', desc: 'Variables, classes, loops, collections' },
              { icon: <Zap className="w-4 h-4 text-sf-teal" />, label: 'SOQL Queries', desc: 'Query Salesforce data with precision' },
              { icon: <BookOpen className="w-4 h-4 text-sf-orange" />, label: 'DML Operations', desc: 'Create, update, delete records safely' },
              { icon: <Target className="w-4 h-4 text-sf-purple" />, label: 'Real Scenarios', desc: 'Apply skills to business problems' },
            ].map(item => (
              <div key={item.label} className="flex gap-3 p-3 bg-sf-gray-1 rounded-lg">
                <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <div className="font-medium text-sm">{item.label}</div>
                  <div className="text-xs text-sf-gray-6">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card border-2 border-amber-200 bg-amber-50">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-lg font-bold text-amber-900 mb-2">Important Disclaimer</h2>
              <p className="text-amber-800 text-sm leading-relaxed">
                SF Dev Academy is an educational learning platform and is <strong>not affiliated with Salesforce, Inc.</strong>
                The coding challenges use <strong>pattern-based validation</strong> in the browser — they do not compile or execute real Apex code.
                This means the feedback checks for the presence of correct syntax patterns, not actual runtime correctness.
                To test real Apex, use a <a href="https://developer.salesforce.com/signup" className="underline" target="_blank" rel="noreferrer">free Salesforce Developer Edition org</a>.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold mb-3">How Progress is Saved</h2>
          <p className="text-sf-gray-7 text-sm leading-relaxed">
            In this initial version, all progress (completed lessons, quiz scores, XP, badges) is stored in your browser's
            <code className="code-inline mx-1">localStorage</code>. This means it persists across sessions on the same device and browser,
            but is not synced across devices. A future version will support user accounts with server-side persistence.
          </p>
        </div>

        <div className="card text-center">
          <Heart className="w-8 h-8 text-red-400 mx-auto mb-3" />
          <h2 className="text-xl font-bold mb-2">Get Started</h2>
          <p className="text-sf-gray-6 mb-4">Ready to become a Salesforce developer?</p>
          <Link to="/apex" className="btn-primary inline-flex items-center gap-2">
            Start Learning <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
