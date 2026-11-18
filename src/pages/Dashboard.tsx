import { Link } from 'react-router-dom';
import { Trophy, BookOpen, Code2, Target, Zap, TrendingUp, CheckCircle2, RotateCcw, ArrowRight, Star } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import ProgressBar from '../components/common/ProgressBar';
import { lessons } from '../data/lessons';
import { challenges } from '../data/challenges';

export function Dashboard() {
  const { progress, getLevel, resetProgress } = useProgress();
  const { level, title, next } = getLevel();

  const completedLessons = progress.completedLessons.length;
  const completedChallenges = progress.completedChallenges.length;
  const totalLessons = lessons.length;
  const totalChallenges = challenges.length;

  const nextLesson = lessons.find(l => !progress.completedLessons.includes(l.id));
  const recentLessons = lessons.filter(l => progress.completedLessons.includes(l.id)).slice(-3).reverse();
  const xpForNext = next === Infinity ? progress.xp : next;
  const xpProgress = next === Infinity ? 100 : Math.round((progress.xp / xpForNext) * 100);

  const moduleData = [
    { id: 'apex-basics', label: 'Apex Basics', path: '/apex', color: 'blue' as const, colorClass: 'bg-sf-blue', icon: <Code2 className="w-4 h-4" /> },
    { id: 'soql', label: 'SOQL', path: '/soql', color: 'green' as const, colorClass: 'bg-sf-teal', icon: <Zap className="w-4 h-4" /> },
    { id: 'dml', label: 'DML', path: '/apex', color: 'orange' as const, colorClass: 'bg-sf-orange', icon: <TrendingUp className="w-4 h-4" /> },
  ];

  const quickLinks = [
    { to: '/soql', label: 'SOQL Explorer', color: 'text-sf-teal bg-teal-50 hover:bg-teal-100' },
    { to: '/debug', label: 'Debug Lab', color: 'text-sf-orange bg-orange-50 hover:bg-orange-100' },
    { to: '/missions', label: 'Missions', color: 'text-sf-purple bg-purple-50 hover:bg-purple-100' },
    { to: '/about', label: 'About', color: 'text-gray-600 bg-gray-50 hover:bg-gray-100' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">My Dashboard</h1>
          <p className="text-gray-500 text-sm mt-0.5">Track your Salesforce learning journey</p>
        </div>
        <button
          onClick={() => { if (confirm('Reset all progress? This cannot be undone.')) resetProgress(); }}
          className="text-xs text-gray-400 hover:text-red-500 flex items-center gap-1.5 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-50"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset progress
        </button>
      </div>

      <div className="gradient-hero text-white rounded-2xl p-6 mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-16 translate-x-16" />
        <div className="relative flex items-start justify-between">
          <div className="flex-1">
            <div className="text-blue-200 text-xs font-medium uppercase tracking-wider mb-1">Current Level</div>
            <div className="text-2xl font-extrabold">Level {level}: {title}</div>
            <div className="flex items-center gap-3 mt-4 mb-2 text-sm text-blue-200">
              <span className="font-semibold text-white">{progress.xp} XP</span>
              {next !== Infinity && <span>→ {next} XP for Level {level + 1}</span>}
            </div>
            <div className="w-full max-w-xs bg-white/20 rounded-full h-2 mt-1">
              <div className="bg-yellow-400 h-2 rounded-full transition-all duration-700" style={{ width: `${xpProgress}%` }} />
            </div>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
            <Trophy className="w-7 h-7 text-yellow-300" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { icon: <BookOpen className="w-5 h-5 text-sf-blue" />, label: 'Lessons Done', value: completedLessons, total: totalLessons },
          { icon: <Code2 className="w-5 h-5 text-violet-500" />, label: 'Challenges', value: completedChallenges, total: totalChallenges },
          { icon: <Trophy className="w-5 h-5 text-yellow-500" />, label: 'Total XP', value: progress.xp, total: null as number | null },
          { icon: <Star className="w-5 h-5 text-sf-purple" />, label: 'Level', value: level, total: 6 },
        ].map(s => (
          <div key={s.label} className="card text-center p-5">
            <div className="flex justify-center mb-2">{s.icon}</div>
            <div className="text-2xl font-extrabold text-gray-900">{s.value}</div>
            {s.total !== null && <div className="text-xs text-gray-400">of {s.total}</div>}
            <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            {s.total !== null && (
              <div className="mt-3">
                <ProgressBar value={s.value as number} max={s.total} size="sm" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <div className="card">
          <h2 className="font-bold text-lg flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-sf-blue" /> Continue Learning
          </h2>
          {nextLesson ? (
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4 mb-4">
              <div className="text-xs font-semibold text-sf-blue uppercase tracking-wider mb-1">Up Next</div>
              <div className="font-bold text-gray-900">{nextLesson.title}</div>
              <div className="text-sm text-gray-500 mt-1 mb-3">{nextLesson.description}</div>
              <Link to={`/lesson/${nextLesson.id}`} className="btn-primary text-xs px-4 py-2">
                Start Lesson <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ) : (
            <div className="success-box mb-4">
              <p className="font-semibold text-emerald-800">All lessons complete!</p>
              <Link to="/missions" className="btn-primary mt-3 text-xs inline-flex">View Missions</Link>
            </div>
          )}
          {recentLessons.length > 0 && (
            <div className="space-y-1">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Recently Completed</div>
              {recentLessons.map(l => (
                <Link key={l.id} to={`/lesson/${l.id}`} className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors group">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">{l.title}</span>
                  {progress.quizScores[l.id] !== undefined && (
                    <span className="ml-auto text-xs text-gray-400">{progress.quizScores[l.id]}%</span>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="card">
          <h2 className="font-bold text-lg flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-sf-blue" /> Module Progress
          </h2>
          <div className="space-y-5">
            {moduleData.map(mod => {
              const modLessons = lessons.filter(l => l.moduleId === mod.id);
              const done = modLessons.filter(l => progress.completedLessons.includes(l.id)).length;
              const total = modLessons.length || 1;
              return (
                <div key={mod.id}>
                  <div className="flex items-center justify-between mb-2">
                    <Link to={mod.path} className="flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-sf-blue transition-colors">
                      <span className={`w-7 h-7 rounded-lg ${mod.colorClass} text-white flex items-center justify-center`}>{mod.icon}</span>
                      {mod.label}
                    </Link>
                    <span className="text-xs font-medium text-gray-400">{done}/{modLessons.length}</span>
                  </div>
                  <ProgressBar value={done} max={total} color={mod.color} size="sm" />
                </div>
              );
            })}
          </div>
          <div className="divider" />
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Quick Links</div>
          <div className="grid grid-cols-2 gap-2">
            {quickLinks.map(l => (
              <Link key={l.to} to={l.to} className={`text-center py-3 px-2 rounded-xl text-xs font-semibold transition-colors ${l.color}`}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {progress.badges.length > 0 && (
        <div className="card">
          <h2 className="font-bold text-lg flex items-center gap-2 mb-4">
            <Trophy className="w-5 h-5 text-yellow-500" /> Earned Badges
          </h2>
          <div className="flex flex-wrap gap-3">
            {progress.badges.map(b => (
              <div key={b} className="flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl px-4 py-2.5">
                <Trophy className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-semibold text-yellow-800 capitalize">{b.replace(/-/g, ' ')}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
