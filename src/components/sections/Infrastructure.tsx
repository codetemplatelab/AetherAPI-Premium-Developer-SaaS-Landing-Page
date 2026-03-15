import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { InfrastructureGlobe } from '../animations/InfrastructureGlobe';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Infrastructure = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          },
        }
      );
    }
  }, []);

  return (
    <section id="infrastructure" ref={sectionRef} className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={textRef}>
            <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4 block">
              Global Infrastructure
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Deploy to the <br />
              <span className="text-cyan-400">Edge of the World</span>
            </h2>
            <p className="text-slate-400 text-xl leading-relaxed mb-10">
              Our network spans across 250+ cities in 100+ countries. 
              Your API is always close to your users, ensuring sub-10ms latency 
              no matter where they are.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-white mb-2">250+</div>
                <div className="text-slate-500 text-sm uppercase font-bold">Edge Locations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">100+</div>
                <div className="text-slate-500 text-sm uppercase font-bold">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">99.99%</div>
                <div className="text-slate-500 text-sm uppercase font-bold">Uptime SLA</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">&lt;10ms</div>
                <div className="text-slate-500 text-sm uppercase font-bold">Avg Latency</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500/20 blur-[120px] rounded-full" />
            <InfrastructureGlobe />
          </div>
        </div>
      </div>
    </section>
  );
};
