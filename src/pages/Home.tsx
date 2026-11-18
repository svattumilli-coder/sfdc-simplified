import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Code2, Zap, Target, CheckCircle2, Trophy, Users, Star, Play } from 'lucide-react';

const features = [
  { icon: <BookOpen className="w-5 h-5" />, title: '10 Structured Lessons', desc: 'From variables to DML — every concept explained with real examples', color: 'bg-blue-500' },
  { icon: <Code2 className="w-5 h-5" />, title: 'Hands-On Challenges', desc: 'Write code, get instant feedback, and learn from detailed solutions', color: 'bg-violet-500' },
  { icon: <Zap className="w-5 h-5" />, title: 'SOQL Explorer', desc: 'Query fictional Salesforce orgs and understand data relationships', color: 'bg-teal-500' },
  { icon: <Target className="w-5 h-5" />, title: 'Debug Lab', desc: 'Find and fix real bugs in broken code — governor limits and all', color: 'bg-orange-500' },
  { icon: <Trophy className="w-5 h-5" />, title: 'XP & Badges', desc: 'Track your progress and earn badges as you level up', color: 'bg-yellow-500' },
  { icon: <Star className="w-5 h-5" />, title: 'Project Missions', desc: 'Apply what you know to real-world Salesforce business scenarios', color: 'bg-pink-500' },
];

const curriculum = [
  'Apex Variables & Data Types',
  'Strings & String Methods',
  'Conditionals & Boolean Logic',
  'Loops: For, While, Do-While',
  'Lists (Apex Arrays)',
  'Sets & Uniqueness',
  'Maps: Key-Value Storage',
  'Classes & Object-Oriented Apex',
  'SOQL: Query Your Data',
  'DML: Create, Update, Delete Records',
];

const stats = [
  { value: '10', label: 'Lessons', sub: 'beginner to confident' },
  { value: '10', label: 'Challenges', sub: 'with instant feedback' },
  { value: '5', label: 'Debug Scenarios', sub: 'real bugs to fix' },
  { value: '4', label: 'Missions', sub: 'real-world projects' },
];

const steps = [
  { num: 1, label: 'Understand', desc: 'Read a clear explanation' },
  { num: 2, label: 'Example', desc: 'See real working code' },
  { num: 3, label: 'Try It', desc: 'Write code yourself' },
  { num: 4, label: 'Hint', desc: 'Unstuck in one tap' },
  { num: 5, label: 'Feedback', desc: 'Know why it passed or failed' },
  { num: 6, label: 'Solution', desc: 'See the full solution' },
  { num: 7, label: 'Apply', desc: 'Use it in a mission' },
];

export function Home() {
  return (
    <div className="min-h-screen">
      <section className="gradient-hero text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 50%, #fff 1px, transparent 0), radial-gradient(circle at 75% 20%, #fff 1px, transparent 0)', backgroundSize: '60px 60px' }} />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-8 backdrop-blur-sm">
            <Play className="w-3.5 h-3.5 text-yellow-300" />
            Free · No signup required · Start in 30 seconds
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Learn Salesforce<br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #FFC849, #FF5D2D)' }}>
              Development
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            The interactive learning platform built for absolute beginners. Master Apex, SOQL, and DML through guided lessons, real code challenges, and hands-on projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/apex" className="inline-flex items-center justify-center gap-2 bg-white text-sf-blue font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-base">
              Start Learning Free <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/dashboard" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/20 transition-colors text-base backdrop-blur-sm">
              View Dashboard
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-sf-navy text-white py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map(s => (
            <div key={s.label}>
              <div className="text-3xl font-extrabold text-yellow-400">{s.value}</div>
              <div className="font-semibold text-sm mt-0.5">{s.label}</div>
              <div className="text-xs text-blue-300 mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">The 7-Step Learning Cycle</h2>
            <p className="section-subtitle">Every lesson follows the same proven structure — so you never feel lost</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center gap-2 p-4 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors group">
                <div className="w-9 h-9 rounded-full bg-sf-blue text-white text-sm font-bold flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                  {step.num}
                </div>
                <div className="font-semibold text-sm text-gray-900">{step.label}</div>
                <div className="text-xs text-gray-500 leading-tight">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Everything You Need to Succeed</h2>
            <p className="section-subtitle">From your first variable to deploying real Apex — all in one place</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map(f => (
              <div key={f.title} className="card hover:border-sf-blue/20 group">
                <div className={`w-10 h-10 ${f.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-sm`}>
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-title mb-2">Full Apex Curriculum</h2>
              <p className="section-subtitle mb-8">10 lessons carefully sequenced from zero to job-ready Apex developer</p>
              <Link to="/apex" className="btn-primary">
                Browse All Lessons <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-2">
              {curriculum.map((item, i) => (
                <div key={item} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                  <div className="w-7 h-7 rounded-lg bg-sf-blue/10 text-sf-blue text-xs font-bold flex items-center justify-center shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{item}</span>
                  <CheckCircle2 className="w-4 h-4 text-gray-200 group-hover:text-gray-300 ml-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="gradient-hero text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Users className="w-12 h-12 mx-auto mb-4 text-yellow-300 opacity-80" />
          <h2 className="text-3xl font-extrabold mb-4">Ready to Write Your First Apex?</h2>
          <p className="text-blue-100 mb-8 text-lg">No Salesforce org needed. Start writing code right here, right now.</p>
          <Link to="/lesson/apex-variables" className="inline-flex items-center gap-2 bg-white text-sf-blue font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-base">
            Start Lesson 1: Variables <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
