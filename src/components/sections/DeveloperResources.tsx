import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { API_TYPES } from '../../data/content';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { BookOpen, Code, Settings, Share2 } from 'lucide-react';
import { cn } from '../../utils/cn';

import { Link } from 'react-router-dom';

export const DeveloperResources = () => {
  const [activeTab, setActiveTab] = useState(API_TYPES[0].id);

  const activeData = API_TYPES.find((t) => t.id === activeTab)!;

  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Multi-Protocol <span className="text-emerald-500">Support</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Whether you're building a traditional web app, a complex data graph, 
            or a real-time game, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-4 space-y-4">
            {API_TYPES.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                type="button"
                className={cn(
                  "w-full text-left p-6 rounded-2xl border transition-all group",
                  activeTab === type.id
                    ? "bg-emerald-500/10 border-emerald-500 text-emerald-400"
                    : "bg-white/5 border-white/10 text-slate-400 hover:border-white/20"
                )}
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                    activeTab === type.id ? "bg-emerald-500 text-slate-950" : "bg-white/5 text-slate-500"
                  )}>
                    {type.id === 'rest' && <Code className="w-5 h-5" />}
                    {type.id === 'graphql' && <Share2 className="w-5 h-5" />}
                    {type.id === 'sockets' && <Settings className="w-5 h-5" />}
                  </div>
                  <h3 className="font-bold text-lg text-white">{type.name}</h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {type.description}
                </p>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-slate-900 border border-white/10 rounded-[32px] overflow-hidden shadow-2xl h-full flex flex-col"
              >
                <div className="p-8 md:p-12 flex-1">
                  <div className="flex items-center gap-3 mb-8">
                    <BookOpen className="text-emerald-500 w-6 h-6" />
                    <h4 className="text-xl font-bold text-white">Setup Guide</h4>
                  </div>
                  
                  <div className="space-y-8">
                    <div>
                      <h5 className="text-emerald-400 font-bold mb-2 uppercase tracking-widest text-xs">How it works</h5>
                      <p className="text-slate-300 leading-relaxed">
                        {activeData.setup}
                      </p>
                    </div>

                    <div>
                      <h5 className="text-emerald-400 font-bold mb-4 uppercase tracking-widest text-xs">Implementation Example</h5>
                      <div className="bg-slate-950 rounded-2xl border border-white/5 overflow-hidden">
                        <div className="px-4 py-2 bg-white/5 border-b border-white/5 flex items-center justify-between">
                          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">example.js</span>
                          <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-white/10" />
                            <div className="w-2 h-2 rounded-full bg-white/10" />
                            <div className="w-2 h-2 rounded-full bg-white/10" />
                          </div>
                        </div>
                        <div className="p-6 overflow-x-auto">
                          <SyntaxHighlighter
                            language="javascript"
                            style={atomDark}
                            customStyle={{
                              background: 'transparent',
                              padding: 0,
                              margin: 0,
                              fontSize: '14px',
                            }}
                          >
                            {activeData.code}
                          </SyntaxHighlighter>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="px-8 py-6 bg-white/5 border-t border-white/5 flex items-center justify-between">
                  <span className="text-sm text-slate-500">Ready to start?</span>
                  <Link to="/docs" className="text-emerald-400 font-bold text-sm hover:text-emerald-300 transition-colors">
                    Read full documentation -&gt;
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
