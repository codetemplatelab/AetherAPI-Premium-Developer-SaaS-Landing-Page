import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const SOCIAL_LINKS = [
  { label: 'Twitter', href: 'https://twitter.com/aetherapi', icon: Twitter },
  { label: 'GitHub', href: 'https://github.com/aetherapi', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/aetherapi', icon: Linkedin },
  { label: 'Email', href: 'mailto:hello@aetherapi.dev', icon: Mail },
];

const PLATFORM_LINKS = [
  { label: 'Features', to: '/#features' },
  { label: 'API Reference', to: '/docs#api-reference' },
  { label: 'Integrations', to: '/#integrations' },
  { label: 'Pricing', to: '/#pricing' },
  { label: 'Status', to: '/docs#status' },
];

const RESOURCE_LINKS = [
  { label: 'Documentation', to: '/docs' },
  { label: 'Guides', to: '/docs#guides' },
  { label: 'Blog', to: '/docs#blog' },
  { label: 'Open Source', to: '/docs#open-source' },
  { label: 'Community', to: '/docs#community' },
];

const POLICY_LINKS = [
  { label: 'Privacy Policy', to: '/docs#privacy' },
  { label: 'Terms of Service', to: '/docs#terms' },
  { label: 'Cookie Policy', to: '/docs#cookies' },
];

export const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
                <Terminal className="text-slate-950 w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white">AetherAPI</span>
            </div>
            <p className="text-slate-500 mb-8 leading-relaxed">
              The next generation of API infrastructure. Built for developers who demand speed,
              security, and scalability.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-500 hover:text-emerald-500 transition-colors"
                  aria-label={item.label}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Platform</h4>
            <ul className="space-y-4">
              {PLATFORM_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-slate-500 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4">
              {RESOURCE_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-slate-500 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-slate-500 text-sm mb-4">Get the latest updates on API tech.</p>
            <form
              className="space-y-3"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="developer@company.com"
                autoComplete="email"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-emerald-500 text-slate-950 font-bold py-2 rounded-lg text-sm hover:bg-emerald-400 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            (c) 2026 AetherAPI Infrastructure Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            {POLICY_LINKS.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-slate-600 hover:text-white text-xs"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
