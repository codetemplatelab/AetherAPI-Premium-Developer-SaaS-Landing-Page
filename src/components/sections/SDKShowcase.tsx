import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SDK_EXAMPLES } from '../../data/content';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Terminal, Download, Copy, Check } from 'lucide-react';
import { cn } from '../../utils/cn';

export const SDKShowcase = () => {
  const [activeLang, setActiveLang] = useState(SDK_EXAMPLES[0].lang);
  const [copied, setCopied] = useState(false);

  const activeData = SDK_EXAMPLES.find((s) => s.lang === activeLang)!;

  const handleCopy = () => {
    navigator.clipboard.writeText(activeData.install);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4 block">
              Native SDKs
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Build in your <br />
              <span className="text-emerald-500">Favorite Language</span>
            </h2>
            <p className="text-slate-400 text-xl leading-relaxed mb-10">
              We provide official SDKs for all major languages. Get type-safety, 
              automatic retries, and optimized performance out of the box.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              {SDK_EXAMPLES.map((sdk) => (
                <button
                  key={sdk.lang}
                  onClick={() => setActiveLang(sdk.lang)}
                  type="button"
                  className={cn(
                    "px-6 py-3 rounded-xl font-bold transition-all",
                    activeLang === sdk.lang
                      ? "bg-emerald-500 text-slate-950"
                      : "bg-white/5 text-slate-400 hover:bg-white/10"
                  )}
                >
                  {sdk.lang}
                </button>
              ))}
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold">One-line Installation</h4>
                  <p className="text-slate-500 text-sm">Get started with a single command.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Type-Safe Interface</h4>
                  <p className="text-slate-500 text-sm">Full TypeScript and static typing support.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-full" />
            <div className="relative bg-slate-900 border border-white/10 rounded-[32px] overflow-hidden shadow-2xl">
              <div className="p-8">
                <div className="mb-8">
                  <div className="text-xs text-slate-500 uppercase font-bold mb-4 tracking-widest">Installation</div>
                  <div className="flex items-center justify-between bg-slate-950 p-4 rounded-xl border border-white/5 font-mono text-sm">
                    <code className="text-emerald-400">{activeData.install}</code>
                    <button 
                      onClick={handleCopy}
                      type="button"
                      className="text-slate-500 hover:text-white transition-colors"
                      aria-label="Copy install command"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold mb-4 tracking-widest">Usage</div>
                  <div className="bg-slate-950 rounded-xl border border-white/5 overflow-hidden">
                    <div className="p-6 overflow-x-auto">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeLang}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <SyntaxHighlighter
                            language={activeLang.toLowerCase()}
                            style={atomDark}
                            customStyle={{
                              background: 'transparent',
                              padding: 0,
                              margin: 0,
                              fontSize: '13px',
                            }}
                          >
                            {activeData.usage}
                          </SyntaxHighlighter>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
