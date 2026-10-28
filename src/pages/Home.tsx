import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Code2, Database, Bug, Target, CheckCircle, Zap, Users, Star } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Structured Lessons',
    description: 'Step-by-step lessons that build on each other, starting from zero Salesforce knowledge.',
    color: 'bg-blue-50 text-sf-blue',
  },
  {
    icon: Code2,
    title: 'Interactive Challenges',
    description: 'Write real Apex code in the browser with instant simulated feedback on your solutions.',
    color: 'bg-green-50 text-sf-green',
  },
  {
    icon: Database,
    title: 'SOQL Explorer',
    description: 'Run queries against fictional Salesforce records and see results in real time.',
    color: 'bg-teal-50 text-sf-teal',
  },
  {
    icon: Bug,
    title: 'Debugging Lab',
    description: 'Learn to identify and fix the most common Apex bugs through realistic scenarios.',
    color: 'bg-orange-50 text-sf-orange',
  },
  {
    icon: Target,
    title: 'Project Missions',
    description: 'Apply everything you learn to realistic Salesforce business requirements.',
    color: 'bg-purple-50 text-sf-purple',
  },
  {
    icon: Zap,
    title: 'XP & Progress',
    description: 'Earn experience points, unlock badges, and track your journey to platform champion.',
    color: 'bg-yellow-50 text-yellow-600',
  },
];

const learningCycle = [
  { step: 1, label: 'Understand', desc: 'Concept explained in plain English' },
  { step: 2, label: 'See Example', desc: 'Real Salesforce code walkthrough' },
  { step: 3, label: 'Practice', desc: 'Interactive coding exercise' },
  { step: 4, label: 'Get Hints', desc: 'Guided hints if you get stuck' },
  { step: 5, label: 'Submit', desc: 'Check your solution' },
  { step: 6, label: 'Review', desc: 'See the solution and explanation' },
  { step: 7, label: 'Apply', desc: 'Real-world mission task' },
];

const topics = [
  'Apex Variables & Data Types',
  'String Operations',
  'Conditionals & Switch',
  'Loops & Iteration',
  'Lists, Sets & Maps',
  'Apex Classes & Methods',
  'SOQL Fundamentals',
  'DML Operations',
  'Apex Triggers (coming soon)',
  'Lightning Web Components (coming soon)',
];

export function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sf-navy via-sf-blue-dark to-sf-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
              <Zap size={14} className="text-yellow-400" />
              <span>Free interactive Salesforce developer training</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Learn Salesforce
              <span className="text-sf-blue-light block">Development</span>
              from Scratch
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
              Master Apex, SOQL, triggers, and Lightning Web Components through hands-on interactive lessons — no prior Salesforce experience required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/apex"
                className="inline-flex items-center justify-center gap-2 bg-white text-sf-blue font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Start Learning for Free
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                View Dashboard
              </Link>
            </div>
            <div className="flex items-center gap-6 mt-8 text-sm text-blue-200">
              <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-green-400" /> 10 free lessons</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-green-400" /> No signup needed</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-green-400" /> Progress saved locally</span>
            </div>
          </div>
        </div>
      </section>

      {/* Learning cycle */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sf-gray-9 mb-3">Our 7-Step Learning Cycle</h2>
            <p className="text-sf-gray-6 max-w-2xl mx-auto">
              Every lesson follows the same proven structure — so you never just read theory, you apply it immediately.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {learningCycle.map(({ step, label, desc }) => (
              <div key={step} className="flex flex-col items-center text-center w-36">
                <div className="w-10 h-10 rounded-full bg-sf-blue text-white font-bold flex items-center justify-center text-sm mb-2">
                  {step}
                </div>
                <div className="font-semibold text-sf-gray-9 text-sm">{label}</div>
                <div className="text-xs text-sf-gray-5 mt-0.5">{desc}</div>
                {step < 7 && (
                  <div className="hidden md:block absolute" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-sf-gray-1 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sf-gray-9 mb-3">Everything You Need</h2>
            <p className="text-sf-gray-6">A complete learning environment built specifically for Salesforce developers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, description, color }) => (
              <div key={title} className="card hover:shadow-sf-lg transition-shadow">
                <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center mb-4`}>
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-sf-gray-9 mb-2">{title}</h3>
                <p className="text-sf-gray-6 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics covered */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-sf-gray-9 mb-4">What You'll Learn</h2>
              <p className="text-sf-gray-6 mb-6 leading-relaxed">
                Start from the very basics and build up to writing production-quality Salesforce code. Each topic is designed for complete beginners.
              </p>
              <ul className="space-y-2">
                {topics.map((topic) => (
                  <li key={topic} className="flex items-center gap-2 text-sm">
                    <CheckCircle size={16} className={topic.includes('coming') ? 'text-sf-gray-4' : 'text-sf-green'} />
                    <span className={topic.includes('coming') ? 'text-sf-gray-4' : 'text-sf-gray-7'}>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-sf-gray-9 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-sf-gray-5 text-xs ml-2 font-mono">Apex Developer Console</span>
              </div>
              <pre className="text-sm font-mono leading-relaxed overflow-x-auto">
                <code>
                  <span className="text-blue-400">public class</span>
                  <span className="text-teal-300"> OpportunityHelper </span>
                  <span className="text-gray-300">{'{'}</span>
                  {'\n'}
                  <span className="text-gray-400">{'  '}</span>
                  <span className="text-blue-400">public static</span>
                  <span className="text-teal-300"> String</span>
                  <span className="text-yellow-300"> getStage</span>
                  <span className="text-gray-300">(</span>
                  <span className="text-teal-300">Decimal</span>
                  <span className="text-white"> amount</span>
                  <span className="text-gray-300">) {'{'}</span>
                  {'\n'}
                  <span className="text-gray-400">{'    '}</span>
                  <span className="text-blue-400">if</span>
                  <span className="text-gray-300"> (amount &gt; 100000) {'{'}</span>
                  {'\n'}
                  <span className="text-gray-400">{'      '}</span>
                  <span className="text-blue-400">return</span>
                  <span className="text-orange-300"> 'Enterprise'</span>
                  <span className="text-gray-300">;</span>
                  {'\n'}
                  <span className="text-gray-400">{'    '}</span>
                  <span className="text-gray-300">{'}'}</span>
                  <span className="text-blue-400"> else </span>
                  <span className="text-gray-300">{'{'}</span>
                  {'\n'}
                  <span className="text-gray-400">{'      '}</span>
                  <span className="text-blue-400">return</span>
                  <span className="text-orange-300"> 'Standard'</span>
                  <span className="text-gray-300">;</span>
                  {'\n'}
                  <span className="text-gray-400">{'    '}</span>
                  <span className="text-gray-300">{'}'}</span>
                  {'\n'}
                  <span className="text-gray-400">{'  '}</span>
                  <span className="text-gray-300">{'}'}</span>
                  {'\n'}
                  <span className="text-gray-300">{'}'}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-sf-blue py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: '10+', label: 'Lessons', icon: BookOpen },
              { value: '9', label: 'Challenges', icon: Code2 },
              { value: '5', label: 'Debug Scenarios', icon: Bug },
              { value: '4', label: 'Projects', icon: Target },
            ].map(({ value, label, icon: Icon }) => (
              <div key={label}>
                <Icon size={24} className="mx-auto mb-2 opacity-70" />
                <div className="text-3xl font-bold">{value}</div>
                <div className="text-blue-200 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-14 h-14 bg-sf-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Star size={24} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold text-sf-gray-9 mb-4">Ready to become a Salesforce developer?</h2>
          <p className="text-sf-gray-6 mb-8">
            Start your first lesson now. No signup, no credit card — just open the first lesson and start coding.
          </p>
          <Link
            to="/lesson/apex-variables"
            className="inline-flex items-center gap-2 bg-sf-blue hover:bg-sf-blue-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
          >
            Start Lesson 1: Variables
            <ArrowRight size={18} />
          </Link>
          <p className="text-sf-gray-5 text-sm mt-4">
            Or <Link to="/dashboard" className="text-sf-blue hover:underline">browse the full curriculum</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
