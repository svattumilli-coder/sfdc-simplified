import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, Menu, X, Trophy, BookOpen, Zap, Target, Info, Home, LayoutDashboard } from 'lucide-react';
import { useProgress } from '../../hooks/useProgress';

const navLinks = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/apex', label: 'Apex', icon: Code2 },
  { to: '/soql', label: 'SOQL', icon: Zap },
  { to: '/debug', label: 'Debug', icon: Target },
  { to: '/missions', label: 'Missions', icon: BookOpen },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { progress, getLevel } = useProgress();
  const { level, title } = getLevel();

  return (
    <header className="sticky top-0 z-50 glass border-b border-gray-200/60 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center h-16 gap-4">
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-8 h-8 rounded-lg bg-sf-blue flex items-center justify-center group-hover:bg-blue-700 transition-colors">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-gray-900 text-sm hidden sm:block">SFDC Simplified</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 ml-2">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={location.pathname === to ? 'nav-link-active' : 'nav-link-inactive'}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex-1" />

          <Link to="/dashboard" className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-sf-navy to-sf-blue text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:opacity-90 transition-opacity">
            <Trophy className="w-3.5 h-3.5 text-yellow-300" />
            <span>{progress.xp} XP</span>
            <span className="opacity-60">·</span>
            <span>Lv {level}</span>
          </Link>

          <Link to="/about" className="btn-ghost hidden md:inline-flex p-2">
            <Info className="w-4 h-4" />
          </Link>

          <button onClick={() => setOpen(!open)} className="md:hidden btn-ghost p-2">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md px-4 py-3 space-y-1">
          {navLinks.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                location.pathname === to ? 'bg-blue-50 text-sf-blue' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-100 mt-2">
            <div className="flex items-center gap-2 px-3 py-2 text-xs text-gray-500">
              <Trophy className="w-3.5 h-3.5 text-yellow-500" />
              <span className="font-semibold text-gray-700">{progress.xp} XP</span>
              <span>·</span>
              <span>Level {level}: {title}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
