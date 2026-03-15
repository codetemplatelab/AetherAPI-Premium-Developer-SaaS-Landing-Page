import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Hero3D } from '../animations/Hero3D';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

export const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    })
    .from(textRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
    }, '-=0.6')
    .from(buttonsRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
    }, '-=0.4')
    .from(previewRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 1,
    }, '-=0.2');
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <Hero3D />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div>
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full"
          >
            The Future of API Infrastructure
          </motion.span>
          <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1] mb-8">
            Build, Deploy, and <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Scale APIs Faster
            </span>
          </h1>
          <p ref={textRef} className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            AetherAPI provides the ultimate infrastructure for modern developers. 
            Deploy globally in seconds, monitor in real-time, and scale to billions of requests.
          </p>
          
          <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/playground" className="group relative px-8 py-4 bg-emerald-500 text-slate-950 rounded-full font-bold text-lg overflow-hidden transition-all hover:pr-12 active:scale-95">
              <span className="relative z-10">Try Playground</span>
              <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" />
            </Link>
            <Link to="/docs" className="flex items-center gap-2 px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-all active:scale-95">
              <Play className="w-5 h-5 fill-current" />
              View API Docs
            </Link>
          </div>
        </div>

        <div ref={previewRef} className="mt-20 relative">
          <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl rounded-full" />
          <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl">
            <div className="bg-slate-950 rounded-xl overflow-hidden border border-white/5 aspect-video md:aspect-[21/9] flex items-center justify-center">
              <div className="text-slate-500 font-mono text-sm md:text-base p-8 text-left w-full">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <p className="text-emerald-400">$ aether deploy --project my-api</p>
                <p className="mt-2">Deploying to global edge network...</p>
                <p className="text-slate-400">OK: Build optimized (2.4s)</p>
                <p className="text-slate-400">OK: Propagating to 250+ nodes (1.1s)</p>
                <p className="text-cyan-400 mt-2">Success! Your API is live at https://my-api.aether.sh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
