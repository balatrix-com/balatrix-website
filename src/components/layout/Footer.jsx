import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const footerSections = [
    {
      title: 'Solutions',
      links: [
        { name: 'Business Solutions', href: '/solutions' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Toll-Free Numbers', href: '/services' }
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
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern - Hidden on mobile for minimalism */}
        <div className="hidden sm:block absolute inset-0 opacity-20" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23374151' fillOpacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }}>
        </div>
        
        {/* Gradient Overlays - Simplified for mobile */}
        <div className="hidden sm:block absolute top-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="hidden sm:block absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        
        {/* Floating Background Text - Hidden on mobile */}
        <div className="hidden lg:block absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="text-[16rem] font-black text-white/[0.085] select-none whitespace-nowrap tracking-wider">
            BALATRIX
          </div>
        </div>
      </div>

     

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-8 lg:gap-12 xl:gap-16">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-3 sm:space-y-6">
            <div>
              <Link to="/" className="inline-block group">
                <img 
                  src="https://i.postimg.cc/CLg39YWx/image-removebg-preview.png" 
                  alt="Balatrix" 
                  className="h-12 sm:h-28 lg:h-28 transition-all duration-300 group-hover:brightness-110 mb-2 sm:mb-4"
                />
              </Link>
              {/* Contact Methods - Compact for mobile */}
            <div className="space-y-2 sm:space-y-4">
              <div className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer">
                <div className="w-6 h-6 sm:w-10 sm:h-10 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-200">
                  <svg className="w-3 h-3 sm:w-5 sm:h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white text-xs sm:text-base">+1 (800) TOLL-FREE</div>
                  <div className="text-xs text-gray-400 hidden sm:block">Sales & Support</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer">
                <div className="w-6 h-6 sm:w-10 sm:h-10 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-200">
                  <svg className="w-3 h-3 sm:w-5 sm:h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white text-xs sm:text-base break-all">anant@balatrix.com</div>
                  <div className="text-xs text-gray-400 hidden sm:block">Get Your Quote</div>
                </div>
              </div>
            </div>
            </div>

           
            
          </div>

          {/* Navigation Sections - Mobile: 2x2 grid, Desktop: horizontal */}
          <div className="grid grid-cols-2 gap-4 sm:contents lg:col-span-4">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-2 sm:space-y-4 lg:space-y-6">
                <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-1 sm:space-y-3 lg:space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.href}
                        className="group inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 text-xs sm:text-base py-0.5 sm:py-1"
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                        </span>
                        {link.badge && (
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                            link.badge === 'Live' ? 'bg-green-500/20 text-green-400' : 
                            link.badge === 'Hiring' ? 'bg-blue-500/20 text-blue-400' : 
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      

      {/* Bottom Footer */}
      <div className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-6">
          <div className="flex flex-col space-y-3 lg:flex-row lg:justify-between lg:items-center lg:space-y-0">
            <div className="flex flex-col space-y-2 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-6 text-xs text-gray-400">
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                <span>&copy; 2024 A2 Cloud Solutions</span>
                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded mt-1 sm:mt-0 w-fit">
                  Est. 2015
                </span>
              </div>
              <div className="hidden sm:flex items-center space-x-1 text-xs">
                <span>Local time:</span>
                <span className="font-mono text-blue-400">
                  {currentTime.toLocaleTimeString('en-US', { 
                    timeZone: 'UTC',
                    hour12: false 
                  })} UTC
                </span>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-4 lg:gap-6">
                <Link to="/privacy" className="hover:text-white transition-colors duration-200">
                  Privacy
                </Link>
                <Link to="/terms" className="hover:text-white transition-colors duration-200">
                  Terms
                </Link>
                <Link to="/security" className="hover:text-white transition-colors duration-200">
                  Security
                </Link>
                <Link to="/refund" className="hover:text-white transition-colors duration-200">
                  Refund & Cancellations
                </Link>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-end space-x-2 sm:space-x-4">
              <span className="text-xs text-gray-500 mr-1 sm:mr-2">Follow us:</span>
              <a href="#" className="group">
                <div className="w-6 h-6 sm:w-10 sm:h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-200 border border-white/10 group-hover:border-blue-500/30">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-6 h-6 sm:w-10 sm:h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-all duration-200 border border-white/10 group-hover:border-purple-500/30">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-purple-400 transition-colors duration-200" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-6 h-6 sm:w-10 sm:h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-gray-500/20 transition-all duration-200 border border-white/10 group-hover:border-gray-500/30">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-gray-300 transition-colors duration-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
