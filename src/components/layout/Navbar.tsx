import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';
import { NAV_LINKS } from '../../data/content';
import { cn } from '../../utils/cn';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled 
          ? 'bg-slate-950/80 backdrop-blur-md border-white/10 py-3' 
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Terminal className="text-slate-950 w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white leading-none">
                Aether<span className="text-emerald-500">API</span>
              </span>
              <span className="text-[10px] font-bold text-emerald-500/50 uppercase tracking-[0.2em] mt-1">
                Prototype v1.0
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isHash = link.href.startsWith('#');
              const href = isHash ? `/${link.href}` : link.href;
              
                return (
                  <Link
                    key={link.name}
                    to={href}
                    className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                );
            })}
            <Link
              to="/playground"
              className={cn(
                "text-sm font-medium transition-colors",
                location.pathname === '/playground' ? "text-emerald-400" : "text-slate-400 hover:text-emerald-400"
              )}
              aria-current={location.pathname === '/playground' ? 'page' : undefined}
            >
              Playground
            </Link>
            <Link
              to="/docs"
              className="bg-white text-slate-950 px-5 py-2 rounded-full text-sm font-semibold hover:bg-emerald-400 transition-all active:scale-95"
              aria-current={location.pathname === '/docs' ? 'page' : undefined}
            >
              Documentation
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-white/10 overflow-hidden"
            id="mobile-menu"
          >
            <div className="px-4 py-6 space-y-4">
              {NAV_LINKS.map((link) => {
                const isHash = link.href.startsWith('#');
                const href = isHash ? `/${link.href}` : link.href;
                
                return (
                  <Link
                    key={link.name}
                    to={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg font-medium text-slate-300"
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                to="/playground"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg font-medium text-slate-300"
              >
                Playground
              </Link>
              <Link 
                to="/docs" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-emerald-500 text-slate-950 px-5 py-3 rounded-xl text-lg font-bold block text-center"
              >
                Documentation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
