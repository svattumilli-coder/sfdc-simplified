import { useState } from 'react';
import { Play, Database, AlertCircle, ChevronDown, ChevronRight } from 'lucide-react';
import { executeSOQLQuery, soqlExamples, soqlObjects } from '../data/soql-data';
import type { SOQLRecord } from '../types';

export function SOQLExplorer() {
  const [query, setQuery] = useState(soqlExamples[0].query);
  const [results, setResults] = useState<SOQLRecord[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [rowCount, setRowCount] = useState(0);
  const [executedQuery, setExecutedQuery] = useState('');
  const [showSchema, setShowSchema] = useState(false);

  const runQuery = () => {
    const result = executeSOQLQuery(query);
    setResults(result.records);
    setError(result.error);
    setRowCount(result.rowCount);
    setExecutedQuery(query);
  };

  const loadExample = (q: string) => {
    setQuery(q);
    setResults(null);
    setError(null);
  };

  const columns = results && results.length > 0 ? Object.keys(results[0].fields) : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-sf-gray-9 flex items-center gap-2">
          <Database size={24} className="text-sf-teal" />
          SOQL Visual Explorer
        </h1>
        <p className="text-sf-gray-6 mt-1">
          Write and run SOQL queries against fictional Salesforce records. See results instantly.
        </p>
        <div className="flex items-center gap-2 mt-2 text-xs bg-yellow-50 border border-yellow-200 rounded px-3 py-1.5 w-fit text-yellow-700">
          <AlertCircle size={13} />
          Simulated data only — not connected to a real Salesforce org
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left sidebar: schema + examples */}
        <div className="lg:col-span-1 space-y-4">
          {/* Example queries */}
          <div className="card">
            <h3 className="font-semibold text-sf-gray-9 text-sm mb-3">Example Queries</h3>
            <div className="space-y-1">
              {soqlExamples.map((ex, i) => (
                <button
                  key={i}
                  onClick={() => loadExample(ex.query)}
                  className="w-full text-left text-xs px-2 py-1.5 rounded hover:bg-sf-gray-1 text-sf-gray-7 hover:text-sf-blue transition-colors"
                >
                  {ex.label}
                </button>
              ))}
            </div>
          </div>

          {/* Schema */}
          <div className="card">
            <button
              className="w-full flex items-center justify-between font-semibold text-sf-gray-9 text-sm"
              onClick={() => setShowSchema(!showSchema)}
            >
              <span>Data Schema</span>
              {showSchema ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            </button>
            {showSchema && (
              <div className="mt-3 space-y-3">
                {soqlObjects.map(obj => (
                  <div key={obj.name}>
                    <div className="text-xs font-semibold text-sf-blue mb-1">{obj.name}</div>
                    <div className="space-y-0.5">
                      {obj.fields.map(f => (
                        <div key={f.name} className="flex items-center justify-between text-xs">
                          <span className="text-sf-gray-7 font-mono">{f.name}</span>
                          <span className="text-sf-gray-4">{f.type}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Main area */}
        <div className="lg:col-span-3 space-y-4">
          {/* Query editor */}
          <div className="card">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-sf-gray-7">SOQL Query</label>
              <span className="text-xs text-sf-gray-4">Available: Account, Contact, Opportunity, Case</span>
            </div>
            <textarea
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full code-textarea bg-sf-gray-9 text-gray-100 rounded-lg p-4 border-0 outline-none focus:ring-2 focus:ring-sf-blue text-sm"
              rows={6}
              spellCheck={false}
            />
            <div className="flex items-center justify-between mt-3">
              <button
                onClick={runQuery}
                className="btn-primary flex items-center gap-2"
              >
                <Play size={15} />
                Run Query
              </button>
              {results !== null && (
                <span className="text-sm text-sf-gray-5">
                  {rowCount} row{rowCount !== 1 ? 's' : ''} returned
                </span>
              )}
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-2">
              <AlertCircle size={16} className="text-sf-red flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sf-red font-semibold text-sm">Query Error</p>
                <p className="text-red-700 text-sm mt-1">{error}</p>
              </div>
            </div>
          )}

          {/* Results table */}
          {results !== null && !error && (
            <div className="card overflow-hidden p-0">
              <div className="px-4 py-3 border-b border-gray-100 bg-sf-gray-1">
                <h3 className="font-semibold text-sf-gray-9 text-sm">
                  Results — {rowCount} record{rowCount !== 1 ? 's' : ''}
                </h3>
              </div>
              {results.length === 0 ? (
                <div className="text-center py-12 text-sf-gray-5">
                  <Database size={32} className="mx-auto mb-2 opacity-30" />
                  <p>No records match your query</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-sf-gray-1 border-b border-gray-200">
                      <tr>
                        {columns.map(col => (
                          <th key={col} className="text-left px-4 py-2 text-xs font-semibold text-sf-gray-7 whitespace-nowrap">
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {results.map((record, i) => (
                        <tr key={i} className="hover:bg-sf-gray-1 transition-colors">
                          {columns.map(col => {
                            const val = record.fields[col];
                            return (
                              <td key={col} className="px-4 py-2 text-sf-gray-7 whitespace-nowrap max-w-[200px] truncate">
                                {val === null || val === undefined ? (
                                  <span className="text-sf-gray-4 italic">null</span>
                                ) : typeof val === 'boolean' ? (
                                  <span className={val ? 'text-sf-green' : 'text-sf-red'}>{String(val)}</span>
                                ) : typeof val === 'number' ? (
                                  <span className="font-mono">{val.toLocaleString()}</span>
                                ) : col.toLowerCase().includes('id') ? (
                                  <span className="font-mono text-xs text-sf-gray-5">{String(val)}</span>
                                ) : (
                                  String(val)
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* Tips */}
          {results === null && (
            <div className="card border-dashed border-2 border-gray-200">
              <h3 className="font-semibold text-sf-gray-7 mb-3 text-sm">SOQL Quick Reference</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-sf-gray-6">
                {[
                  ['Basic query', 'SELECT Id, Name FROM Account LIMIT 10'],
                  ['Filter with WHERE', "WHERE Industry = 'Technology'"],
                  ['Multiple conditions', "WHERE Amount > 50000 AND StageName = 'Closed Won'"],
                  ['Pattern matching', "WHERE Name LIKE 'Tech%'"],
                  ['Sort results', 'ORDER BY Amount DESC'],
                  ['List of values', "WHERE Industry IN ('Tech', 'Healthcare')"],
                ].map(([label, example]) => (
                  <div key={label}>
                    <span className="font-medium text-sf-gray-8">{label}:</span>
                    <pre className="font-mono text-sf-gray-5 mt-0.5 whitespace-pre-wrap">{example}</pre>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
