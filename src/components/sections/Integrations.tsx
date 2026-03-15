import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { INTEGRATIONS } from '../../data/content';

export const Integrations = () => {
  return (
    <section id="integrations" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Connect Your <span className="text-emerald-500">Stack</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            AetherAPI integrates seamlessly with the tools you already use and love.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INTEGRATIONS.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.05)' }}
              className="flex flex-col items-center justify-center p-8 bg-slate-900/30 border border-white/5 rounded-2xl transition-all cursor-pointer group"
            >
              <item.icon 
                className="w-10 h-10 mb-4 transition-transform group-hover:scale-110" 
                style={{ color: item.color }} 
              />
              <span className="text-sm font-semibold text-slate-400 group-hover:text-white transition-colors">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link
            to="/docs#integrations"
            className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors flex items-center gap-2 mx-auto"
          >
            View all 50+ integrations
            <span className="text-xl">-&gt;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
