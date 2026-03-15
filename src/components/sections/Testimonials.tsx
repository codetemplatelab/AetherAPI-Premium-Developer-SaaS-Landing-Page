import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../../data/content';

export const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Loved by <span className="text-emerald-500">Engineers</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Join thousands of developers building the future on AetherAPI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-slate-900/50 border border-white/10 rounded-3xl relative"
            >
              <div className="text-emerald-500 text-4xl font-serif mb-6">"</div>
              <p className="text-slate-300 mb-8 leading-relaxed italic">
                {t.content}
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full border border-emerald-500/30"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-slate-500 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
