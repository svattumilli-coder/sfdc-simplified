import { Link } from 'react-router-dom';
import { Trophy, BookOpen, Code2, Target, Zap, TrendingUp, CheckCircle2, RotateCcw } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import ProgressBar from '../components/common/ProgressBar';
import Badge from '../components/common/Badge';
import { lessons } from '../data/lessons';
import { challenges } from '../data/challenges';

export function Dashboard() {
  const { progress, getLevel, resetProgress } = useProgress();
  const { level, title, next } = getLevel();

  const completedLessons = progress.completedLessons.length;
  const completedChallenges = progress.completedChallenges.length;
  const totalLessons = lessons.length;
  const totalChallenges = challenges.length;

  const recentLessons = lessons
    .filter(l => progress.completedLessons.includes(l.id))
    .slice(-3)
    .reverse();

  const nextLesson = lessons.find(l => !progress.completedLessons.includes(l.id));

  const xpProgress = next === Infinity ? 100 : Math.round((progress.xp / next) * 100);

  const stats = [
    { icon: <BookOpen className="w-5 h-5 text-sf-blue" />, label: 'Lessons Done', value: completedLessons, total: totalLessons, color: 'blue' as const },
    { icon: <Code2 className="w-5 h-5 text-sf-teal" />, label: 'Challenges', value: completedChallenges, total: totalChallenges, color: 'green' as const },
    { icon: <Trophy className="w-5 h-5 text-sf-yellow" />, label: 'Total XP', value: progress.xp, total: null as number | null, color: 'orange' as const },
    { icon: <Target className="w-5 h-5 text-sf-purple" />, label: 'Level', value: level, total: 6, color: 'purple' as const },
  ];

  const modules = [
    { id: 'apex', label: 'Apex Basics', path: '/apex', icon: <Code2 className="w-5 h-5" />, color: 'blue' as const, lessons: lessons.filter(l => l.moduleId === 'apex-basics') },
    { id: 'soql', label: 'SOQL', path: '/soql', icon: <Zap className="w-5 h-5" />, color: 'green' as const, lessons: lessons.filter(l => l.moduleId === 'soql') },
    { id: 'dml', label: 'DML', path: '/apex', icon: <TrendingUp className="w-5 h-5" />, color: 'orange' as const, lessons: lessons.filter(l => l.moduleId === 'dml') },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-sf-gray-9">My Dashboard</h1>
          <p className="text-sf-gray-6">Track your Salesforce learning journey</p>
        </div>
        <button
          onClick={() => { if (confirm('Reset all progress? This cannot be undone.')) resetProgress(); }}
          className="text-xs text-sf-gray-5 hover:text-red-500 flex items-center gap-1 transition-colors"
        >
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      <div className="card mb-6 bg-gradient-to-r from-sf-navy to-sf-blue text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-sm text-blue-200">Current Level</div>
            <div className="text-2xl font-bold">Level {level}: {title}</div>
          </div>
          <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
            <Trophy className="w-7 h-7 text-sf-yellow" />
          </div>
        </div>
        <div className="flex items-center justify-between text-sm text-blue-200 mb-2">
          <span>{progress.xp} XP</span>
          {next !== Infinity && <span>{next} XP for Level {level + 1}</span>}
        </div>
        <div className="w-full bg-white/20 rounded-full h-2">
          <div className="bg-sf-yellow h-2 rounded-full transition-all" style={{ width: `${xpProgress}%` }} />
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map(s => (
          <div key={s.label} className="card text-center">
            <div className="flex justify-center mb-2">{s.icon}</div>
            <div className="text-2xl font-bold text-sf-gray-9">{s.value}</div>
            {s.total !== null && <div className="text-xs text-sf-gray-5">of {s.total}</div>}
            <div className="text-xs text-sf-gray-6 mt-1">{s.label}</div>
            {s.total !== null && (
              <div className="mt-2">
                <ProgressBar value={s.value as number} max={s.total} color={s.color} size="sm" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-sf-blue" />
            Continue Learning
          </h2>
          {nextLesson ? (
            <div>
              <div className="bg-sf-blue/5 border border-sf-blue/20 rounded-lg p-4 mb-4">
                <div className="text-xs text-sf-blue font-medium mb-1">Up Next</div>
                <div className="font-semibold">{nextLesson.title}</div>
                <div className="text-sm text-sf-gray-6 mt-1">{nextLesson.description}</div>
                <Link
                  to={`/lesson/${nextLesson.id}`}
                  className="btn-primary mt-3 inline-flex items-center gap-2 text-sm"
                >
                  Continue <BookOpen className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="success-box">
              <p className="text-green-800 font-medium">All lessons complete!</p>
              <p className="text-green-700 text-sm mt-1">Check out the Project Missions to apply what you have learned.</p>
              <Link to="/missions" className="btn-primary mt-3 inline-flex text-sm">View Missions</Link>
            </div>
          )}

          {recentLessons.length > 0 && (
            <div className="mt-4">
              <div className="text-sm font-medium text-sf-gray-7 mb-2">Recently Completed</div>
              <div className="space-y-2">
                {recentLessons.map(l => (
                  <Link key={l.id} to={`/lesson/${l.id}`} className="flex items-center gap-2 text-sm text-sf-gray-7 hover:text-sf-blue transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    {l.title}
                    {progress.quizScores[l.id] !== undefined && (
                      <span className="ml-auto text-xs text-sf-gray-5">Quiz: {progress.quizScores[l.id]}%</span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="card">
          <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-sf-blue" />
            Module Progress
          </h2>
          <div className="space-y-4">
            {modules.map(mod => {
              const done = mod.lessons.filter(l => progress.completedLessons.includes(l.id)).length;
              const total = mod.lessons.length || 1;
              return (
                <div key={mod.id}>
                  <div className="flex items-center justify-between mb-1">
                    <Link to={mod.path} className="flex items-center gap-2 text-sm font-medium hover:text-sf-blue transition-colors">
                      <span className={`w-6 h-6 rounded-md ${mod.color} text-white flex items-center justify-center`}>
                        {mod.icon}
                      </span>
                      {mod.label}
                    </Link>
                    <span className="text-xs text-sf-gray-6">{done}/{mod.lessons.length}</span>
                  </div>
                  <ProgressBar value={done} max={total} color={mod.color} size="sm" />
                </div>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-sf-gray-2">
            <div className="text-sm font-medium text-sf-gray-7 mb-3">Quick Links</div>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/soql" className="text-center p-3 bg-sf-teal/10 rounded-lg text-sf-teal text-sm font-medium hover:bg-sf-teal/20 transition-colors">SOQL Explorer</Link>
              <Link to="/debug" className="text-center p-3 bg-sf-orange/10 rounded-lg text-sf-orange text-sm font-medium hover:bg-sf-orange/20 transition-colors">Debug Lab</Link>
              <Link to="/missions" className="text-center p-3 bg-sf-purple/10 rounded-lg text-sf-purple text-sm font-medium hover:bg-sf-purple/20 transition-colors">Missions</Link>
              <Link to="/about" className="text-center p-3 bg-sf-gray-2 rounded-lg text-sf-gray-7 text-sm font-medium hover:bg-sf-gray-3 transition-colors">About</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Trophy className="w-5 h-5 text-sf-yellow" />
          Earned Badges
        </h2>
        {progress.badges.length === 0 ? (
          <p className="text-sf-gray-5 text-sm">Complete lessons and challenges to earn badges.</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {progress.badges.map(id => <Badge key={id} id={id} />)}
          </div>
        )}
      </div>
    </div>
  );
}
