import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

// Lazy load pages for better performance (Code Splitting)
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Pricing = lazy(() => import('./pages/Pricing'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Security = lazy(() => import('./pages/Security'));
const Cookies = lazy(() => import('./pages/Cookies'));
const PBX = lazy(() => import('./pages/PBX'));
const WholesaleTollFreeDID = lazy(() => import('./pages/WholesaleTollFreeDID'));
const PBXWhitelabel = lazy(() => import('./pages/PBXWhitelabel'));
const PBXDemo = lazy(() => import('./pages/demo/PBXDemo'));
const DemoOverview = lazy(() => import('./pages/demo/DemoOverview'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#03050e]">
    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin shadow-[0_0_15px_rgba(59,130,246,0.3)]"></div>
  </div>
);

function AppContent() {
  const location = useLocation();
  const isDemoApp = location.pathname.startsWith('/demo/app');

  return (
    <div className={`App min-h-screen ${isDemoApp ? 'bg-[#f8fafc] text-slate-900' : 'bg-[var(--canvas-dark)] text-gray-100'} selection:bg-blue-600/30 selection:text-white transition-canvas`}>
      {!isDemoApp && <Header />}
      <main className={isDemoApp ? '' : 'overflow-x-hidden'}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/pbx" element={<PBX />} />
            <Route path="/services/tollfree" element={<WholesaleTollFreeDID />} />
            <Route path="/services/pbx-whitelabel" element={<PBXWhitelabel />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/security" element={<Security />} />
            <Route path="/refund" element={<Cookies />} />
            <Route path="/portal" element={<div className="pt-20 p-8">Client Portal Coming Soon</div>} />
            <Route path="/demo" element={<DemoOverview />} />
            <Route path="/demo/app/*" element={<PBXDemo />} />
            <Route path="/demo/app" element={<PBXDemo />} />
          </Routes>
        </Suspense>
      </main>
      {!isDemoApp && <Footer />}
    </div>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.8,
    });
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
