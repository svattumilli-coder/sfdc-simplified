import { Link } from 'react-router-dom';
import { Code2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-sf-blue flex items-center justify-center">
              <Code2 className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-semibold text-gray-900 text-sm">SFDC Simplified</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-gray-500">
            <Link to="/about" className="hover:text-sf-blue transition-colors">About</Link>
            <Link to="/apex" className="hover:text-sf-blue transition-colors">Lessons</Link>
            <Link to="/missions" className="hover:text-sf-blue transition-colors">Missions</Link>
            <a href="https://developer.salesforce.com" target="_blank" rel="noopener noreferrer" className="hover:text-sf-blue transition-colors">Salesforce Docs</a>
          </div>

          <p className="text-xs text-gray-400">Not affiliated with Salesforce, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
