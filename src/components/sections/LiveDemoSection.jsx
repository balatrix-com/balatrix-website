import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GitBranch, Terminal, PhoneForwarded, Activity, ShieldCheck, FileText } from 'lucide-react';

const LiveDemoSection = () => {
  return (
    <section className="relative py-16 sm:py-20 canvas-dark overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[var(--color-accent)]/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-10 lg:p-12 bg-gradient-to-br from-[#0c1328]/95 via-[#080d1c]/90 to-[#0c1630]/95 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">

          {/* Subtle decorative mesh / glow behind card */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: 4-5 line clean, high-impact overview */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              {/* Status Indicator Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span>Live PBX System Sandbox</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Explore the Balatrix <span className="text-[var(--color-accent)]">Cloud PBX System</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Experience our enterprise Cloud PBX platform live directly in your browser with zero setup required.
                Test-drive multi-tier IVR menus, packet-level SIP traces, DID forwards & TFN routing, real-time CDR analytics, and supervisor call monitoring.
                Evaluate our carrier-grade telecom control panel firsthand before deploying across your business.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/demo"
                  className="btn-pill btn-pill-primary px-7 py-3 text-sm font-semibold shadow-[0_4px_20px_rgba(53,66,206,0.35)] hover:shadow-[0_6px_25px_rgba(53,66,206,0.55)] transition-all flex items-center justify-center gap-2 w-full sm:w-auto hover:scale-105"
                >
                  <span>Launch PBX Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/demo/app?tab=dashboard"
                  className="btn-pill btn-pill-secondary px-6 py-3 text-sm font-semibold transition-all flex items-center justify-center gap-2 w-full sm:w-auto hover:scale-105"
                >
                  <span>Open Admin Console</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Feature highlights grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 transition-all">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2.5">
                  <GitBranch className="w-4 h-4" />
                </div>
                <div className="text-sm font-bold text-white mb-1">Visual IVRs & Menus</div>
                <p className="text-xs text-slate-400 leading-relaxed">Multi-tier auto attendants, DTMF routing & custom queue trees.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-2.5">
                  <Terminal className="w-4 h-4" />
                </div>
                <div className="text-sm font-bold text-white mb-1">Live SIP Traces</div>
                <p className="text-xs text-slate-400 leading-relaxed">Full call ladder signaling & packet inspection in real time.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 transition-all">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-2.5">
                  <PhoneForwarded className="w-4 h-4" />
                </div>
                <div className="text-sm font-bold text-white mb-1">TFNs & DID Forwards</div>
                <p className="text-xs text-slate-400 leading-relaxed">Toll-free numbers, DID routing & failover schedules.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 transition-all">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-2.5">
                  <Activity className="w-4 h-4" />
                </div>
                <div className="text-sm font-bold text-white mb-1">Call Monitoring & CDRs</div>
                <p className="text-xs text-slate-400 leading-relaxed">Live stream supervision, agent whisper & detailed call logs.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemoSection;
