import { useState } from 'react';
import { Target, Clock, ChevronDown, ChevronUp, Code2, Star } from 'lucide-react';
import { missions } from '../data/missions';
import type { Difficulty } from '../types';

const diffColors: Record<Difficulty, string> = {
  beginner: 'bg-green-100 text-green-800',
  intermediate: 'bg-yellow-100 text-yellow-800',
  advanced: 'bg-red-100 text-red-800',
};

export function Missions() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [filter, setFilter] = useState<Difficulty | 'all'>('all');

  const filtered = filter === 'all' ? missions : missions.filter(m => m.difficulty === filter);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-sf-gray-9 mb-2">Project Missions</h1>
        <p className="text-sf-gray-6">Apply your Apex skills to realistic business requirements — the kind you will encounter on actual Salesforce projects.</p>
      </div>

      <div className="card mb-6 bg-gradient-to-r from-sf-purple/10 to-sf-blue/10 border border-sf-purple/20">
        <div className="flex items-start gap-3">
          <Target className="w-5 h-5 text-sf-purple flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold mb-1">What are Missions?</div>
            <p className="text-sm text-sf-gray-7">
              Each mission presents a real business problem from a fictional company. You get a scenario, specific requirements, and a starter template.
              Missions are designed to be completed in a real Salesforce Developer Edition org — they are not validated in the browser.
            </p>
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {(['all', 'beginner', 'intermediate', 'advanced'] as const).map(d => (
          <button
            key={d}
            onClick={() => setFilter(d)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              filter === d ? 'bg-sf-blue text-white' : 'bg-white text-sf-gray-7 border border-sf-gray-3 hover:border-sf-blue'
            }`}
          >
            {d.charAt(0).toUpperCase() + d.slice(1)}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filtered.map(mission => (
          <div key={mission.id} className="card">
            <div
              className="flex items-start justify-between cursor-pointer"
              onClick={() => setExpanded(expanded === mission.id ? null : mission.id)}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className={`tag ${diffColors[mission.difficulty]}`}>{mission.difficulty}</span>
                  <span className="flex items-center gap-1 text-xs text-sf-gray-5">
                    <Clock className="w-3 h-3" /> ~{mission.estimatedHours}h
                  </span>
                  <span className="text-xs text-sf-blue font-medium">{mission.company}</span>
                </div>
                <h3 className="font-bold text-lg">{mission.title}</h3>
                <p className="text-sm text-sf-gray-6 mt-1">{mission.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {mission.skills.map(skill => (
                    <span key={skill} className="tag bg-sf-blue/10 text-sf-blue">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0 ml-4">
                {expanded === mission.id ? (
                  <ChevronUp className="w-5 h-5 text-sf-gray-5" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-sf-gray-5" />
                )}
              </div>
            </div>

            {expanded === mission.id && (
              <div className="mt-6 pt-6 border-t border-sf-gray-2 space-y-5">
                {/* Scenario */}
                <div>
                  <h4 className="font-semibold text-sf-gray-8 mb-2">Business Scenario</h4>
                  <div className="bg-sf-blue/5 border-l-4 border-sf-blue p-4 rounded-r-lg">
                    <p className="text-sm text-sf-gray-7 leading-relaxed">{mission.scenario}</p>
                  </div>
                </div>

                {/* Requirements */}
                <div>
                  <h4 className="font-semibold text-sf-gray-8 mb-2">Requirements</h4>
                  <ol className="space-y-2">
                    {mission.requirements.map((req, i) => (
                      <li key={i} className="flex gap-3 text-sm">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-sf-purple text-white text-xs flex items-center justify-center font-bold">
                          {i + 1}
                        </span>
                        <span className="text-sf-gray-7">{req}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Starter Code */}
                {mission.starterCode && (
                  <div>
                    <h4 className="font-semibold text-sf-gray-8 mb-2 flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-sf-teal" />
                      Starter Template
                    </h4>
                    <pre className="code-block text-xs whitespace-pre-wrap">{mission.starterCode}</pre>
                  </div>
                )}

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-yellow-800 text-sm font-medium mb-1">
                    <Star className="w-4 h-4" /> Where to Build This
                  </div>
                  <p className="text-xs text-yellow-700">
                    This mission is designed for a real Salesforce Developer Edition org. Create one free at{' '}
                    <a href="https://developer.salesforce.com/signup" className="underline" target="_blank" rel="noreferrer">
                      developer.salesforce.com/signup
                    </a>{' '}
                    and use the Developer Console or VS Code + Salesforce Extensions.
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
