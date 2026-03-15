import React from 'react';
import { motion } from 'framer-motion';

const LOGOS = [
  'GitHub', 'Vercel', 'Shopify', 'Cloudflare', 'Notion', 'Postman', 'Supabase', 'Stripe'
];

export const TrustedBy = () => {
  return (
    <section className="py-12 bg-slate-950/50 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          Trusted by the world's most innovative teams
        </p>
      </div>
      
      <div className="flex relative">
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-16 items-center whitespace-nowrap"
        >
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <span 
              key={i} 
              className="text-2xl md:text-3xl font-black text-slate-700 hover:text-slate-400 transition-colors cursor-default"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
