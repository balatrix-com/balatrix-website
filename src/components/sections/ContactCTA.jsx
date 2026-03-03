import React from 'react';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-[#0B1120] border border-slate-800 shadow-2xl">

          {/* Beautiful Ambient Background Glows */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#032B93] rounded-full blur-[130px] opacity-30 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[100px] opacity-20 -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

          {/* Subtle Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] opacity-50"></div>

          <div className="relative px-6 py-20 sm:py-24 lg:px-16 lg:py-32 text-center text-white">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold !text-white tracking-tight mb-6 leading-[1.15]">
              Ready to Upgrade Your <br className="hidden md:block" />
              Communication Infrastructure?
            </h2>

            <p className="text-lg md:text-xl !text-slate-300 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              Join thousands of modern enterprises running mission-critical voice applications on Balatrix.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center bg-white text-[#032B93] hover:bg-slate-50 text-lg font-bold px-8 py-4 rounded-xl shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all duration-300 w-full sm:w-auto transform hover:-translate-y-0.5">
                Get Started Free
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center bg-white/5 !text-white hover:bg-white/10 text-lg font-bold px-8 py-4 rounded-xl border border-white/10 backdrop-blur-md transition-all duration-300 w-full sm:w-auto transform hover:-translate-y-0.5">
                Schedule a Demo
              </Link>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm !text-slate-300 font-medium tracking-wide">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                14-day free trial
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;