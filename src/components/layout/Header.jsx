import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import EnterpriseQuoteModal from '../modals/EnterpriseQuoteModal';
import logo from '../../assets/svg logo/Balatrix final logo 1.svg';
import {
  Building2,
  PhoneCall,
  PhoneIncoming,
  LayoutDashboard,
  Wallet,
  CreditCard,
  Phone,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isDemoDropdownOpen, setIsDemoDropdownOpen] = useState(false);
  const [isMobileDemoExpanded, setIsMobileDemoExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      setIsScrolled(scrollPos > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    let timer;
    const checkLenis = () => {
      if (window.lenis) {
        window.lenis.on('scroll', (e) => {
          const scrollPos = e.scroll !== undefined ? e.scroll : window.scrollY;
          setIsScrolled(scrollPos > 20);
        });
      } else {
        timer = setTimeout(checkLenis, 250);
      }
    };
    checkLenis();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timer) clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDemoDropdownOpen(false);
    setIsMobileDemoExpanded(false);

    // Auto-trigger Quote Modal if query parameters contain lead tags
    const params = new URLSearchParams(location.search);
    const quoteParam = params.get('quote');
    if (quoteParam === 'true' || quoteParam === 'reseller' || quoteParam === 'tollfree' || quoteParam === 'consultation') {
      setIsQuoteModalOpen(true);
    }
  }, [location]);

  // Click outside listener for the demo dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.demo-dropdown-container')) {
        setIsDemoDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const navigation = [
    { name: 'Solutions', href: '/solutions' },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        {
          name: 'PBX System',
          href: '/services/pbx',
          icon: PhoneCall,
          badge: 'Popular'
        },
        {
          name: 'Wholesale Toll-Free DID',
          href: '/services/tollfree',
          icon: PhoneIncoming,
          badge: 'Global'
        },
        {
          name: 'PBX Whitelabel',
          href: '/services/pbx-whitelabel',
          icon: Building2,
          badge: 'Turnkey'
        },
      ]
    },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About Us', href: '/about' },
    {
      name: 'Want a Demo?',
      href: '/demo'
    },
  ];

  const openQuoteModal = () => {
    setIsQuoteModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const isActive = (path) => location.pathname === path || (path === '/demo' && location.pathname.startsWith('/demo'));

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ease-out glass-header ${isScrolled ? 'scrolled' : ''}`}
        style={{
          height: '76px',
          background: isScrolled ? 'rgba(3, 4, 8, 0.23)' : 'rgba(0, 1, 1, 0.25)',
          backdropFilter: 'blur(28px) saturate(200%)',
          WebkitBackdropFilter: 'blur(35px) saturate(200%)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.4)',
          boxShadow: isScrolled ? '0 8px 32px rgba(0,0,0,0.45)' : '0 4px 24px rgba(0,0,0,0.3)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[76px]">
            {/* Logo */}
            <Link to="/" className="flex items-center group relative z-50">
              <img
                src={logo}
                alt="Balatrix"
                className="h-8 sm:h-9 transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.4)] object-contain"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => {
                return (
                  <div key={item.name} className="relative group/dropdown">
                    <Link
                      to={item.href}
                      className={`relative font-medium text-[15px] transition-all duration-250 py-2 group flex items-center ${isActive(item.href) ? 'text-white font-bold' : 'text-slate-200 hover:text-white'
                        }`}
                    >
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="ml-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/[0.08] backdrop-blur-md text-slate-300 border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                          {item.badge}
                        </span>
                      )}
                      {item.dropdown && (
                        <svg
                          className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/dropdown:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] shadow-[0_0_8px_var(--color-accent)] transition-transform duration-300 origin-center ${isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                          }`}
                      />
                    </Link>

                    {/* Desktop Dropdown for Services */}
                    {item.dropdown && (
                      <div className="absolute left-0 top-full pt-2 w-72 md:w-80 opacity-0 invisible scale-95 -translate-y-2 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:scale-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto transition-all duration-250 ease-out origin-top-left z-50">
                        <div className="p-1.5 bg-[var(--canvas-dark-deep)]/95 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.7),0_0_20px_rgba(56,189,248,0.15)] relative overflow-hidden">
                          <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

                          <div className="relative z-10 space-y-1">
                            {item.dropdown.map((subItem) => {
                              const IconComp = subItem.icon;
                              return (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="group/item flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.07] border border-transparent hover:border-white/10 transition-all duration-200"
                                >
                                  <div className="flex items-center gap-3 min-w-0">
                                    <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover/item:bg-blue-600 group-hover/item:text-white group-hover/item:border-blue-400 group-hover/item:shadow-[0_0_12px_rgba(59,130,246,0.5)] transition-all duration-200 shrink-0">
                                      {IconComp && <IconComp className="w-4 h-4" />}
                                    </div>
                                    <span className="text-sm font-semibold text-slate-100 group-hover/item:text-white transition-colors duration-150 truncate">
                                      {subItem.name}
                                    </span>
                                  </div>

                                  {subItem.badge && (
                                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-400/30 group-hover/item:border-blue-400/60 shrink-0">
                                      {subItem.badge}
                                    </span>
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* CTA & Indicators */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Status Indicator Pill */}
              <div className="flex items-center space-x-2.5 text-sm bg-white/5 border border-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]"></div>
                <span className="text-[13px] font-medium tracking-wide transition-colors duration-300 text-slate-200">24x7 Cloud Active</span>
              </div>

              <button
                onClick={openQuoteModal}
                className="btn-pill btn-pill-primary py-2.5 px-6 text-sm shadow-[0_4px_20px_rgba(53,66,206,0.35),inset_0_1px_0_rgba(255,255,255,0.3)] hover:shadow-[0_6px_25px_rgba(53,66,206,0.55),inset_0_1px_0_rgba(255,255,255,0.4)] transition-all duration-300"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center relative z-50">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full transition-all duration-200 text-slate-200 hover:text-white hover:bg-white/10 active:bg-white/20"
                aria-label="Toggle mobile menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.2}
                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-0 left-0 w-full min-h-screen bg-[var(--canvas-dark-deep)]/98 backdrop-blur-xl border-b border-white/5 shadow-2xl z-40 flex flex-col justify-center px-6">
              <nav className="flex flex-col space-y-6 text-center">
                {navigation.map((item, index) => {
                  return (
                    <div key={index} className="flex flex-col items-center space-y-3">
                      <Link
                        to={item.href}
                        className={`text-2xl font-light tracking-wide text-gray-300 hover:text-white py-2 transition-all duration-200 ${isActive(item.href) ? 'text-white font-normal' : ''
                          }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>

                      {/* Mobile Dropdown Items for Services */}
                      {item.dropdown && (
                        <div className="flex flex-col space-y-2 mb-2 w-full max-w-xs">
                          {item.dropdown.map((subItem, subIndex) => {
                            const IconComp = subItem.icon;
                            return (
                              <Link
                                key={subIndex}
                                to={subItem.href}
                                className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 text-slate-300 hover:text-white transition-all duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <div className="flex items-center gap-2.5">
                                  {IconComp && <IconComp className="w-4 h-4 text-blue-400 shrink-0" />}
                                  <span className="text-sm font-medium">{subItem.name}</span>
                                </div>
                                {subItem.badge && (
                                  <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                                    {subItem.badge}
                                  </span>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}

                <div className="border-t border-white/10 pt-8 mt-4 flex flex-col items-center gap-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
                    <span>24x7 System Support Live</span>
                  </div>
                  <button
                    onClick={openQuoteModal}
                    className="btn-pill btn-pill-primary w-full max-w-xs py-3"
                  >
                    Contact Us
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Enterprise Quote Modal */}
      <EnterpriseQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={closeQuoteModal}
      />
    </>
  );
};

export default Header;
