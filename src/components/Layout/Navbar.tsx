import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, LayoutDashboard, Code2, Database, Bug, Target, Info, Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/apex', label: 'Apex', icon: Code2 },
  { to: '/soql', label: 'SOQL', icon: Database },
  { to: '/debug', label: 'Debug Lab', icon: Bug },
  { to: '/missions', label: 'Missions', icon: Target },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="bg-sf-navy text-white sticky top-0 z-50 shadow-sf-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-white hover:text-sf-blue-light transition-colors">
            <div className="w-8 h-8 bg-sf-blue rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap size={16} className="text-white" />
            </div>
            <span className="font-bold text-lg hidden sm:block">SF Dev Academy</span>
            <span className="font-bold text-lg sm:hidden">SFDA</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label, icon: Icon }) => {
              const active = pathname.startsWith(to);
              return (
                <Link
                  key={to}
                  to={to}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? 'bg-sf-blue text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon size={15} />
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/about"
              className="flex items-center gap-1.5 text-gray-300 hover:text-white text-sm transition-colors"
            >
              <Info size={15} />
              About
            </Link>
            <Link
              to="/apex"
              className="flex items-center gap-2 bg-sf-blue hover:bg-sf-blue-dark text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              <BookOpen size={14} />
              Start Learning
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-sf-navy border-t border-white/10 px-4 py-3 space-y-1">
          {navLinks.map(({ to, label, icon: Icon }) => {
            const active = pathname.startsWith(to);
            return (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active ? 'bg-sf-blue text-white' : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon size={16} />
                {label}
              </Link>
            );
          })}
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10"
          >
            <Info size={16} />
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
