import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Send, Terminal, RefreshCw, CheckCircle2 } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { cn } from '../utils/cn';
import { usePageMeta } from '../utils/seo';

const ENDPOINTS = [
  { method: 'GET', path: '/v1/users/me', description: 'Get current user profile' },
  { method: 'GET', path: '/v1/projects', description: 'List all projects' },
  { method: 'POST', path: '/v1/deploy', description: 'Trigger a new deployment' },
  { method: 'GET', path: '/v1/stats', description: 'Get real-time usage stats' },
];

export const Playground = () => {
  usePageMeta({
    title: 'API Playground | AetherAPI',
    description:
      'Test AetherAPI endpoints in real time with a developer-friendly playground and instant response previews.',
    path: '/playground',
  });

  const [selectedEndpoint, setSelectedEndpoint] = useState(ENDPOINTS[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const [apiKey, setApiKey] = useState('ae_live_test_key_8923');

  const handleTest = () => {
    setIsLoading(true);
    setResponse(null);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setResponse({
        status: 200,
        ok: true,
        data: {
          id: "usr_78921",
          name: "Alex Rivera",
          email: "alex@example.com",
          projects: [
            { id: "proj_1", name: "Production API", status: "active" },
            { id: "proj_2", name: "Staging Environment", status: "idle" }
          ],
          usage: {
            requests_this_month: 12450,
            limit: 50000
          }
        },
        headers: {
          'content-type': 'application/json',
          'x-aether-request-id': 'req_923847239'
        }
      });
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            API <span className="text-emerald-500">Playground</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Test our API endpoints in real-time. No setup required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Endpoint List */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-500" />
              Endpoints
            </h3>
            {ENDPOINTS.map((ep) => (
              <button
                key={ep.path}
                onClick={() => setSelectedEndpoint(ep)}
                type="button"
                aria-pressed={selectedEndpoint.path === ep.path}
                className={cn(
                  "w-full text-left p-4 rounded-xl border transition-all",
                  selectedEndpoint.path === ep.path
                    ? "bg-emerald-500/10 border-emerald-500"
                    : "bg-white/5 border-white/10 hover:border-white/20"
                )}
              >
                <div className="flex items-center gap-3 mb-1">
                  <span className={cn(
                    "text-[10px] font-bold px-2 py-0.5 rounded",
                    ep.method === 'GET' ? "bg-blue-500/20 text-blue-400" : "bg-emerald-500/20 text-emerald-400"
                  )}>
                    {ep.method}
                  </span>
                  <span className="text-sm font-mono text-white">{ep.path}</span>
                </div>
                <p className="text-xs text-slate-500">{ep.description}</p>
              </button>
            ))}
          </div>

          {/* Request/Response Area */}
          <div className="lg:col-span-8 space-y-6">
            {/* Request Config */}
            <div className="bg-slate-900 border border-white/10 rounded-3xl p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-bold text-white">Request Configuration</h3>
                <button
                  onClick={handleTest}
                  type="button"
                  disabled={isLoading}
                  className="flex items-center gap-2 px-6 py-2 bg-emerald-500 text-slate-950 rounded-full font-bold hover:bg-emerald-400 transition-all disabled:opacity-50"
                  aria-busy={isLoading}
                >
                  {isLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  {isLoading ? 'Sending...' : 'Send Request'}
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="api-key"
                    className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2"
                  >
                    API Key
                  </label>
                  <input
                    id="api-key"
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    autoComplete="off"
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Endpoint URL</label>
                  <div className="flex items-center gap-2 bg-slate-950 border border-white/10 rounded-xl px-4 py-3 font-mono text-sm">
                    <span className="text-slate-500">https://api.aether.sh</span>
                    <span className="text-emerald-400">{selectedEndpoint.path}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Area */}
            <div
              className="bg-slate-900 border border-white/10 rounded-3xl overflow-hidden min-h-[300px] flex flex-col"
              role="region"
              aria-live="polite"
              aria-label="API response"
            >
              <div className="px-6 py-4 bg-white/5 border-b border-white/5 flex items-center justify-between">
                <h3 className="text-sm font-bold text-white">Response</h3>
                {response && (
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs font-bold text-emerald-500">200 OK</span>
                  </div>
                )}
              </div>
              <div className="flex-1 p-6 relative">
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex flex-col items-center justify-center text-slate-500"
                    >
                      <RefreshCw className="w-8 h-8 animate-spin mb-4" />
                      <p className="text-sm font-mono">Awaiting response from edge node...</p>
                    </motion.div>
                  ) : response ? (
                    <motion.div
                      key="response"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <SyntaxHighlighter
                        language="json"
                        style={atomDark}
                        customStyle={{
                          background: 'transparent',
                          padding: 0,
                          margin: 0,
                          fontSize: '13px',
                        }}
                      >
                        {JSON.stringify(response.data, null, 2)}
                      </SyntaxHighlighter>
                    </motion.div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-slate-600">
                      <Play className="w-12 h-12 mb-4 opacity-20" />
                      <p className="text-sm">Click "Send Request" to test the endpoint</p>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
