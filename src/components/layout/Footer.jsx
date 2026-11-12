import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/svg logo/Balatrix final logo 1.svg';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const footerSections = [
    {
      title: 'Demo & Solutions',
      links: [
        { name: 'Want a Demo', href: '/demo' },
        { name: 'Business Solutions', href: '/solutions' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'PBX System', href: '/services/pbx' },
        { name: 'Wholesale Toll-Free DID', href: '/services/tollfree' },
        { name: 'PBX Whitelabel', href: '/services/pbx-whitelabel' }
      ]
    },
    {
      title: 'Pricing',
      links: [
        { name: 'View Plans', href: '/pricing' }
      ]
    },
    {
      title: 'About',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' }
      ]
    }
  ];

  return (
    <footer className="relative z-30 bg-[var(--canvas-dark-deep)] text-[var(--text-dark-secondary)] border-t border-[var(--border-dark)] overflow-hidden pt-20">
      {/* Background Grids & Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 right-[10%] w-[450px] h-[450px] bg-[var(--color-accent)]/10 rounded-full blur-[120px] animate-pulse-glow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-16 items-start pb-16">
          {/* Brand Info Section */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block group">
              <img
                src={logo}
                alt="Balatrix"
                className="h-9 transition-transform duration-300 group-hover:scale-[1.02] object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-[14px] text-gray-400 leading-relaxed max-w-sm">
              Enterprise-grade cloud business communications and toll-free virtual Whitelabel PBX solutions. Trusted globally for scalable, instant, and reliable service.
            </p>

            {/* Direct Contact Blocks */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-blue-600/20 group-hover:border-blue-500/30 transition-all duration-300 border border-white/5">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">+1 (844) 225-2435</div>
                  <div className="text-[11px] text-gray-500">Sales & Operations</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[var(--color-accent)]/20 group-hover:border-[var(--color-accent)]/30 transition-all duration-300 border border-white/5">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-[var(--color-accent)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors break-all">sales@balatrix.com</div>
                  <div className="text-[11px] text-gray-500">Get Custom Pricing</div>
                </div>
              </div>

              <a href="https://wa.me/18442252435" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-emerald-600/20 group-hover:border-emerald-500/30 transition-all duration-300 border border-white/5">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">+1 (844) 225-2435</div>
                  <div className="text-[11px] text-gray-500">Whatsapp Contact</div>
                </div>
              </a>
            </div>
          </div>

          {/* Navigation Links Blocks */}
          <div className="grid grid-cols-2 gap-8 sm:contents lg:col-span-4">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xs font-bold text-white uppercase tracking-widest">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.href}
                        className="group inline-flex items-center text-[14px] text-gray-400 hover:text-white transition-colors duration-200 py-1"
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute bottom-0 left-0 w-0 h-px bg-[var(--color-accent)] transition-all duration-200 group-hover:w-full" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Utility Copyright Area */}
        <div className="border-t border-white/5 pt-8 flex flex-col space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
          <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4 text-xs text-gray-500">
            <span>&copy; {currentTime.getFullYear()} A2 Cloud Solutions. All rights reserved.</span>
            <span className="hidden sm:inline text-white/10">•</span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] bg-blue-500/10 text-blue-300 border border-blue-500/20 font-medium">
              Established 2015
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500">
            <Link to="/privacy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/security" className="hover:text-white transition-colors duration-200">
              Security
            </Link>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pl-2 border-l border-white/10">
              <a href="https://www.linkedin.com/company/balatrix/" className="text-gray-500 hover:text-white transition-colors duration-250" aria-label="LinkedIn">
                <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://wa.me/18442252435" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors duration-250" aria-label="WhatsApp">
                <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
