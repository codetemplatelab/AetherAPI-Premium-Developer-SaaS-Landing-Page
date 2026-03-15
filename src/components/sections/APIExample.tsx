import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';

const codeExample = `// Fetch user data from AetherAPI
const response = await fetch('https://api.aether.sh/v1/users/me', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});

const user = await response.json();
console.log(user);

/* 
Response:
{
  "id": "usr_78921",
  "name": "Alex Rivera",
  "status": "active",
  "tier": "enterprise",
  "region": "us-east-1"
}
*/`;

export const APIExample = () => {
  return (
    <section id="api" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Simple to integrate, <br />
              <span className="text-cyan-400">Powerful to use</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Our API is designed by developers, for developers. With intuitive endpoints, 
              comprehensive SDKs, and real-time feedback, you'll be integrated in minutes.
            </p>
            <ul className="space-y-4">
              {['REST & GraphQL support', 'Type-safe SDKs', '99.99% Uptime SLA'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl rounded-full" />
            <div className="relative bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">main.ts</span>
              </div>
              <div className="p-4 overflow-x-auto">
                <SyntaxHighlighter
                  language="typescript"
                  style={atomDark}
                  customStyle={{
                    background: 'transparent',
                    padding: 0,
                    margin: 0,
                    fontSize: '14px',
                  }}
                >
                  {codeExample}
                </SyntaxHighlighter>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
