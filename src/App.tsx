import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Home';
import { Docs } from './pages/Docs';
import { Playground } from './pages/Playground';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/animations/CustomCursor';
import { BackgroundParticles } from './components/animations/BackgroundParticles';
import { SmoothScroll } from './components/animations/SmoothScroll';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.replace('#', ''));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [hash, pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SmoothScroll>
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500 selection:text-slate-950">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-slate-950 focus:text-white focus:px-4 focus:py-2 focus:rounded-full"
          >
            Skip to content
          </a>
          <CustomCursor />
          <BackgroundParticles />
          <Navbar />
          <main id="main-content" className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/playground" element={<Playground />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
