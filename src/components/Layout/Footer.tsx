import { Link } from 'react-router-dom';
import { Zap, Github, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-sf-navy text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 text-white mb-3">
              <div className="w-7 h-7 bg-sf-blue rounded-lg flex items-center justify-center">
                <Zap size={14} className="text-white" />
              </div>
              <span className="font-bold">SF Dev Academy</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              An interactive learning platform for Salesforce developers. Master Apex, SOQL, triggers, and LWC through hands-on practice.
            </p>
            <div className="mt-4 flex items-center gap-1 text-xs bg-yellow-900/30 border border-yellow-700/30 rounded px-3 py-2 w-fit">
              <span className="text-yellow-400 font-medium">⚠ Simulated Environment</span>
              <span className="ml-1">Code runs in browser only — not a real Salesforce org</span>
            </div>
          </div>

          {/* Learning */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Learning Paths</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/apex" className="hover:text-white transition-colors">Apex Fundamentals</Link></li>
              <li><Link to="/soql" className="hover:text-white transition-colors">SOQL Queries</Link></li>
              <li><Link to="/debug" className="hover:text-white transition-colors">Debugging Lab</Link></li>
              <li><Link to="/missions" className="hover:text-white transition-colors">Project Missions</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Apex Developer Guide <ExternalLink size={11} />
                </a>
              </li>
              <li>
                <a
                  href="https://trailhead.salesforce.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Salesforce Trailhead <ExternalLink size={11} />
                </a>
              </li>
              <li><Link to="/about" className="hover:text-white transition-colors">About This Platform</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2024 SF Dev Academy. Built for learners, by learners.</p>
          <p className="flex items-center gap-1">
            Not affiliated with Salesforce, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
