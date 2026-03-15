import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Server, 
  Globe, 
  Key, 
  CheckCircle2, 
  ArrowRight, 
  Copy,
  Terminal,
  Cpu
} from 'lucide-react';
import { cn } from '../../utils/cn';

const STEPS = [
  { id: 'project', title: 'Project Details', icon: Plus },
  { id: 'region', title: 'Select Region', icon: Globe },
  { id: 'auth', title: 'Authentication', icon: Key },
  { id: 'deploy', title: 'Deploy', icon: Server },
];

const REGIONS = [
  { id: 'us-east', name: 'US East (N. Virginia)', latency: '12ms' },
  { id: 'eu-west', name: 'EU West (Ireland)', latency: '24ms' },
  { id: 'ap-south', name: 'Asia Pacific (Mumbai)', latency: '8ms' },
];

export const APISetupFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [projectName, setProjectName] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('ap-south');
  const [isDeploying, setIsDeploying] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const apiKeySample = 'ae_live_8923_xk92_...';

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      startDeployment();
    }
  };

  const startDeployment = () => {
    setIsDeploying(true);
    setTimeout(() => {
      setIsDeploying(false);
      setIsFinished(true);
    }, 3000);
  };

  const handleCopyKey = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(apiKeySample);
    }
  };

  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Interactive <span className="text-emerald-500">Setup Flow</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Experience how easy it is to launch your first API project.
          </p>
        </div>

        <div className="bg-slate-900/50 border border-white/10 rounded-[32px] overflow-hidden shadow-2xl">
          {/* Progress Bar */}
          <div className="flex border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
            {STEPS.map((step, index) => (
              <div
                key={step.id}
                className={cn(
                  "flex-1 flex items-center justify-center py-4 px-2 gap-2 border-r border-white/5 last:border-r-0 transition-colors",
                  index <= currentStep ? "text-emerald-400" : "text-slate-600"
                )}
              >
                <step.icon className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider hidden md:block">
                  {step.title}
                </span>
              </div>
            ))}
          </div>

          {/* Content Area */}
          <div className="p-8 md:p-12 min-h-[400px] flex flex-col">
            <AnimatePresence mode="wait">
              {!isDeploying && !isFinished && (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex-1"
                >
                  {currentStep === 0 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-white">Name your project</h3>
                      <p className="text-slate-400">This will be used for your default endpoint URL.</p>
                      <div className="relative">
                        <label htmlFor="project-name" className="sr-only">
                          Project name
                        </label>
                        <input
                          id="project-name"
                          type="text"
                          value={projectName}
                          onChange={(e) => setProjectName(e.target.value)}
                          placeholder="my-awesome-api"
                          autoComplete="off"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500 transition-colors text-lg"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-mono text-sm">
                          .aether.sh
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-white">Choose a deployment region</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {REGIONS.map((region) => (
                          <button
                            key={region.id}
                            onClick={() => setSelectedRegion(region.id)}
                            type="button"
                            className={cn(
                              "p-6 rounded-2xl border text-left transition-all",
                              selectedRegion === region.id
                                ? "bg-emerald-500/10 border-emerald-500 text-emerald-400"
                                : "bg-white/5 border-white/10 text-slate-400 hover:border-white/20"
                            )}
                          >
                            <Globe className="w-6 h-6 mb-4" />
                            <div className="font-bold text-white">{region.name}</div>
                            <div className="text-xs mt-1 opacity-60">Latency: {region.latency}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-white">Security & Authentication</h3>
                      <div className="p-6 bg-slate-950 rounded-2xl border border-white/5 space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400 text-sm">Default API Key</span>
                          <span className="text-emerald-500 text-xs font-bold uppercase">Auto-generated</span>
                        </div>
                        <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                          <Key className="text-slate-500 w-5 h-5" />
                          <code className="text-slate-300 flex-1">{apiKeySample}</code>
                          <button
                            type="button"
                            onClick={handleCopyKey}
                            className="text-slate-500 hover:text-white transition-colors"
                            aria-label="Copy API key"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-slate-500">
                          You can rotate this key or create new ones in your dashboard after deployment.
                        </p>
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-white">Review & Launch</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                          <div className="text-xs text-slate-500 uppercase font-bold mb-1">Project</div>
                          <div className="text-white">{projectName || 'my-api'}</div>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                          <div className="text-xs text-slate-500 uppercase font-bold mb-1">Region</div>
                          <div className="text-white">{REGIONS.find(r => r.id === selectedRegion)?.name}</div>
                        </div>
                      </div>
                      <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
                        <p className="text-emerald-400/80 text-sm leading-relaxed">
                          Your API will be deployed to our global edge network. 
                          Estimated propagation time: <span className="font-bold">~1.2 seconds</span>.
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {isDeploying && (
                <motion.div
                  key="deploying"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex-1 flex flex-col items-center justify-center text-center"
                >
                  <div className="relative w-24 h-24 mb-8">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Cpu className="text-emerald-500 w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Deploying Infrastructure</h3>
                  <p className="text-slate-500 font-mono text-sm">Provisioning edge nodes in {selectedRegion}...</p>
                </motion.div>
              )}

              {isFinished && (
                <motion.div
                  key="finished"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex-1 flex flex-col items-center justify-center text-center"
                >
                  <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-emerald-500/40">
                    <CheckCircle2 className="text-slate-950 w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">API is Live!</h3>
                  <p className="text-slate-400 mb-8 max-w-md">
                    Your project <span className="text-emerald-400 font-bold">{projectName || 'my-api'}</span> has been successfully 
                    deployed to the global edge network.
                  </p>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      className="px-8 py-3 bg-emerald-500 text-slate-950 rounded-xl font-bold hover:bg-emerald-400 transition-all"
                    >
                      Go to Dashboard
                    </button>
                    <button 
                      onClick={() => {
                        setIsFinished(false);
                        setCurrentStep(0);
                        setProjectName('');
                      }}
                      type="button"
                      className="px-8 py-3 bg-white/5 text-white border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all"
                    >
                      Create Another
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Actions */}
            {!isDeploying && !isFinished && (
              <div className="mt-12 flex items-center justify-between pt-8 border-t border-white/5">
                <button
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  type="button"
                  className="text-slate-500 font-bold hover:text-white disabled:opacity-0 transition-all"
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  type="button"
                  className="group flex items-center gap-2 px-8 py-3 bg-emerald-500 text-slate-950 rounded-xl font-bold hover:bg-emerald-400 transition-all active:scale-95"
                >
                  {currentStep === STEPS.length - 1 ? 'Deploy API' : 'Continue'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
