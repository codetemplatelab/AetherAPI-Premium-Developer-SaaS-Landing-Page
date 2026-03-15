import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FinalCTA = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-emerald-500/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 blur-[160px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-[40px] p-12 md:p-24 text-center shadow-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Ready to build the <br />
              <span className="text-emerald-500">Next Big Thing?</span>
            </h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12">
              Join 50,000+ developers and start building your APIs on the most 
              advanced infrastructure available today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/playground"
                className="group px-10 py-5 bg-emerald-500 text-slate-950 rounded-full font-bold text-xl hover:bg-emerald-400 transition-all active:scale-95 flex items-center gap-2"
              >
                Get Started for Free
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="mailto:sales@aetherapi.dev"
                className="px-10 py-5 bg-white/5 text-white border border-white/10 rounded-full font-bold text-xl hover:bg-white/10 transition-all active:scale-95"
              >
                Talk to Sales
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
