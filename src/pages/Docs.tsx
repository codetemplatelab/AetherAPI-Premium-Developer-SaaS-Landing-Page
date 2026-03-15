import React from 'react';
import { motion } from 'framer-motion';
import { Code, Shield, Zap, Cpu, Terminal } from 'lucide-react';
import { usePageMeta } from '../utils/seo';

const DOC_SECTIONS = [
  {
    title: 'Getting Started',
    icon: Zap,
    items: [
      { id: 'introduction', label: 'Introduction' },
      { id: 'quickstart', label: 'Quickstart' },
      { id: 'installation', label: 'Installation' },
      { id: 'authentication', label: 'Authentication' },
    ],
  },
  {
    title: 'API Reference',
    icon: Code,
    items: [
      { id: 'rest-api', label: 'REST API' },
      { id: 'graphql', label: 'GraphQL' },
      { id: 'webhooks', label: 'Webhooks' },
      { id: 'rate-limits', label: 'Rate Limits' },
    ],
  },
  {
    title: 'SDKs',
    icon: Cpu,
    items: [
      { id: 'sdk-javascript', label: 'JavaScript' },
      { id: 'sdk-python', label: 'Python' },
      { id: 'sdk-go', label: 'Go' },
      { id: 'sdk-rust', label: 'Rust' },
    ],
  },
  {
    title: 'Security',
    icon: Shield,
    items: [
      { id: 'api-keys', label: 'API Keys' },
      { id: 'oauth2', label: 'OAuth2' },
      { id: 'ip-whitelisting', label: 'IP Whitelisting' },
      { id: 'encryption', label: 'Encryption' },
    ],
  },
];

export const Docs = () => {
  usePageMeta({
    title: 'Documentation | AetherAPI',
    description:
      'AetherAPI documentation, API reference, authentication, SDKs, and best practices for building fast, secure, and scalable APIs.',
    path: '/docs',
  });

  return (
    <div className="pt-32 pb-24 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <div className="sticky top-32 space-y-8">
              {DOC_SECTIONS.map((section) => (
                <div key={section.title}>
                  <div className="flex items-center gap-2 mb-4 text-white font-bold">
                    <section.icon className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm uppercase tracking-widest">{section.title}</span>
                  </div>
                  <ul className="space-y-2 border-l border-white/10 ml-2 pl-4">
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-sm text-slate-500 hover:text-emerald-400 transition-colors"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="prose prose-invert max-w-none"
            >
              <h1 id="introduction" className="text-4xl font-black text-white mb-6">
                Introduction to AetherAPI
              </h1>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Welcome to the AetherAPI documentation. AetherAPI is a high-performance, globally
                distributed API infrastructure platform designed for modern developers.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-slate-900 border border-white/10 rounded-2xl">
                  <h3 className="text-white font-bold mb-2">Quickstart Guide</h3>
                  <p className="text-slate-500 text-sm mb-4">
                    Get your first API endpoint live in less than 5 minutes.
                  </p>
                  <a href="#quickstart" className="text-emerald-500 font-bold text-sm">
                    Read Guide -&gt;
                  </a>
                </div>
                <div className="p-6 bg-slate-900 border border-white/10 rounded-2xl">
                  <h3 className="text-white font-bold mb-2">API Reference</h3>
                  <p className="text-slate-500 text-sm mb-4">
                    Detailed documentation for every REST and GraphQL endpoint.
                  </p>
                  <a href="#api-reference" className="text-emerald-500 font-bold text-sm">
                    Explore API -&gt;
                  </a>
                </div>
              </div>

              <h2 id="quickstart" className="text-2xl font-bold text-white mb-4">
                Quickstart
              </h2>
              <p className="text-slate-400 mb-6">
                Create a project, grab your API key, and deploy your first endpoint in minutes.
                Our CLI scaffolds configs, generates schemas, and deploys globally by default.
              </p>

              <h2 id="installation" className="text-2xl font-bold text-white mb-4">
                Installation
              </h2>
              <p className="text-slate-400 mb-6">
                Install the CLI and authenticate with your dashboard token to get started.
              </p>
              <div className="bg-slate-900 border border-white/10 rounded-xl p-4 font-mono text-sm mb-12">
                <span className="text-slate-500"># CLI install</span>
                <br />
                <span className="text-emerald-400">npm install -g @aether/cli</span>
              </div>

              <h2 id="authentication" className="text-2xl font-bold text-white mb-4">
                Authentication
              </h2>
              <p className="text-slate-400 mb-6">
                All API requests must be authenticated using an API Key or OAuth2 token. You can
                manage your keys in the AetherAPI Dashboard.
              </p>
              <div className="bg-slate-900 border border-white/10 rounded-xl p-4 font-mono text-sm mb-12">
                <span className="text-slate-500"># Example Header</span>
                <br />
                <span className="text-emerald-400">Authorization: Bearer YOUR_API_KEY</span>
              </div>

              <h2 id="api-reference" className="text-2xl font-bold text-white mb-4">
                API Reference
              </h2>
              <p className="text-slate-400 mb-6">
                Explore endpoints, payloads, and error responses. Each reference section includes
                live examples and schema definitions.
              </p>

              <h3 id="rest-api" className="text-xl font-bold text-white mb-3">
                REST API
              </h3>
              <p className="text-slate-400 mb-6">
                Use conventional HTTP methods and JSON payloads to access resources. All endpoints
                are versioned under <code>/v1</code> and support idempotency keys.
              </p>

              <h3 id="graphql" className="text-xl font-bold text-white mb-3">
                GraphQL
              </h3>
              <p className="text-slate-400 mb-6">
                Query exactly what you need with a strongly typed schema. Introspection and
                persisted queries are available for production safety.
              </p>

              <h3 id="webhooks" className="text-xl font-bold text-white mb-3">
                Webhooks
              </h3>
              <p className="text-slate-400 mb-6">
                Subscribe to events and receive signed webhook payloads. Configure retries and
                monitoring in the dashboard.
              </p>

              <h3 id="rate-limits" className="text-xl font-bold text-white mb-3">
                Rate Limits
              </h3>
              <p className="text-slate-400 mb-12">
                Control traffic with token buckets and per-route limits. Every response includes
                headers for remaining quota and reset time.
              </p>

              <h2 id="sdks" className="text-2xl font-bold text-white mb-4">
                SDKs
              </h2>
              <p className="text-slate-400 mb-6">
                Official SDKs provide typed clients, retries, and streamlined auth helpers.
              </p>

              <h3 id="sdk-javascript" className="text-xl font-bold text-white mb-3">
                JavaScript
              </h3>
              <p className="text-slate-400 mb-6">
                Use the Node.js or browser SDK for typed API calls and automatic pagination.
              </p>

              <h3 id="sdk-python" className="text-xl font-bold text-white mb-3">
                Python
              </h3>
              <p className="text-slate-400 mb-6">
                Integrate quickly with async support, retries, and structured error handling.
              </p>

              <h3 id="sdk-go" className="text-xl font-bold text-white mb-3">
                Go
              </h3>
              <p className="text-slate-400 mb-6">
                Lightweight client with context support, middleware, and built-in retries.
              </p>

              <h3 id="sdk-rust" className="text-xl font-bold text-white mb-3">
                Rust
              </h3>
              <p className="text-slate-400 mb-12">
                Safe, performant bindings with tokio support and typed request builders.
              </p>

              <h2 id="security" className="text-2xl font-bold text-white mb-4">
                Security
              </h2>
              <p className="text-slate-400 mb-6">
                Security is built in by default with encrypted storage, audit logs, and policy
                controls.
              </p>

              <h3 id="api-keys" className="text-xl font-bold text-white mb-3">
                API Keys
              </h3>
              <p className="text-slate-400 mb-6">
                Generate scoped keys, rotate credentials, and restrict access by environment.
              </p>

              <h3 id="oauth2" className="text-xl font-bold text-white mb-3">
                OAuth2
              </h3>
              <p className="text-slate-400 mb-6">
                Use OAuth2 for delegated access. Support for authorization code and client
                credentials flows is included.
              </p>

              <h3 id="ip-whitelisting" className="text-xl font-bold text-white mb-3">
                IP Whitelisting
              </h3>
              <p className="text-slate-400 mb-6">
                Restrict API access to trusted networks and automatically block suspicious traffic.
              </p>

              <h3 id="encryption" className="text-xl font-bold text-white mb-12">
                Encryption
              </h3>
              <p className="text-slate-400 mb-12">
                Data is encrypted in transit and at rest. Use customer-managed keys for enterprise
                environments.
              </p>

              <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Terminal className="text-emerald-500 w-5 h-5" />
                  <span className="text-emerald-500 font-bold">Pro Tip</span>
                </div>
                <p className="text-slate-300 text-sm">
                  Use our CLI tool for the best experience. Install it globally using{' '}
                  <code>npm install -g @aether/cli</code>.
                </p>
              </div>

              <h2 id="resources" className="text-2xl font-bold text-white mb-4">
                Resources
              </h2>
              <p className="text-slate-400 mb-6">
                Additional learning material and ecosystem resources for teams of any size.
              </p>

              <h3 id="guides" className="text-xl font-bold text-white mb-3">
                Guides
              </h3>
              <p className="text-slate-400 mb-6">
                Step-by-step guides for authentication, scaling, observability, and performance.
              </p>

              <h3 id="blog" className="text-xl font-bold text-white mb-3">
                Blog
              </h3>
              <p className="text-slate-400 mb-6">
                Product updates, engineering deep dives, and platform changelogs.
              </p>

              <h3 id="open-source" className="text-xl font-bold text-white mb-3">
                Open Source
              </h3>
              <p className="text-slate-400 mb-6">
                Explore SDKs, integrations, and tooling maintained by the community.
              </p>

              <h3 id="community" className="text-xl font-bold text-white mb-3">
                Community
              </h3>
              <p className="text-slate-400 mb-12">
                Join the community forum, request features, and share feedback with the team.
              </p>

              <h3 id="integrations" className="text-xl font-bold text-white mb-3">
                Integrations
              </h3>
              <p className="text-slate-400 mb-12">
                Browse official integrations, connect popular tools, and follow guides for custom
                connectors.
              </p>

              <h2 id="status" className="text-2xl font-bold text-white mb-4">
                Status
              </h2>
              <p className="text-slate-400 mb-12">
                Track uptime, incidents, and maintenance windows for all AetherAPI regions.
              </p>

              <h2 id="legal" className="text-2xl font-bold text-white mb-4">
                Legal
              </h2>

              <h3 id="privacy" className="text-xl font-bold text-white mb-3">
                Privacy Policy
              </h3>
              <p className="text-slate-400 mb-6">
                Learn how we collect, use, and protect data across the platform.
              </p>

              <h3 id="terms" className="text-xl font-bold text-white mb-3">
                Terms of Service
              </h3>
              <p className="text-slate-400 mb-6">
                Review the service terms, acceptable use policy, and account responsibilities.
              </p>

              <h3 id="cookies" className="text-xl font-bold text-white mb-3">
                Cookie Policy
              </h3>
              <p className="text-slate-400">
                Understand how cookies are used to improve performance and personalize content.
              </p>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};
