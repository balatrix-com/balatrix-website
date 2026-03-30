import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-white pt-24 pb-16 lg:pt-28 lg:pb-20 min-h-screen flex items-center relative overflow-hidden">
      {/* Soft Background Effects - Light Theme */}
      <div className="absolute inset-0 z-0">
        {/* Subtle engineering grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        {/* Large ambient glowing orbs using the brand #032B93 color */}
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#032B93] opacity-[0.08] blur-[100px]"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#032B93]/[0.05] rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 animate-pulse-subtle pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#032B93]/[0.03] rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* Content Section */}
          <div className="space-y-8 animate-fade-in lg:pr-8">
            <div className="inline-flex items-center space-x-2 bg-[#032B93]/5 border border-[#032B93]/10 text-[#032B93] px-4 py-1.5 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#032B93] animate-pulse"></span>
              <span className="font-semibold text-xs tracking-wide uppercase">Enterprise-Grade Cloud Telephony</span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              The Ultimate <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#032B93] to-blue-500">
                Cloud Telephony
              </span> <br />
              Platform.
            </h1>

            <p className="text-lg lg:text-xl text-slate-600 max-w-xl leading-relaxed">
              Balatrix provides affordable US and Canada phone numbers with a fully hosted cloud PBX, enabling businesses to start calling operations instantly without any complex setup.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact" className="btn btn-primary text-lg px-8 py-4 w-full sm:w-auto shadow-[0_8px_20px_rgba(3,43,147,0.25)] hover:shadow-[0_12px_25px_rgba(3,43,147,0.35)]">
                Get Your Number
              </Link>
              <Link to="/contact" className="btn btn-secondary text-lg px-8 py-4 w-full sm:w-auto font-semibold">
                Talk to an Engineer
              </Link>
            </div>

          </div>

          {/* Visual Element - Premium Photography in Light Theme Context */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl shadow-[0_20px_50px_rgba(3,43,147,0.15)] overflow-hidden group border border-slate-200/50">
              <img
                src="/images/hero_dashboard_1772447946359.png"
                alt="Balatrix Live Communications Analytics"
                className="w-full h-auto object-cover object-center transform transition-transform duration-700 group-hover:scale-[1.03]"
              />

              {/* Light Theme Floating Trust Badge */}
              <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-md border border-slate-100 rounded-2xl p-4 shadow-[0_10px_40px_rgba(0,0,0,0.1)] animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#032B93]/10 flex items-center justify-center border border-[#032B93]/20">
                    <svg className="w-5 h-5 text-[#032B93]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-900 text-sm font-bold leading-tight">Active Node Health</p>
                    <p className="text-[#032B93] text-xs font-semibold tracking-wide">100% OPERATIONAL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;