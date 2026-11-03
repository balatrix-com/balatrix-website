import React from 'react';
import { Link } from 'react-router-dom';
import {
    LayoutDashboard,
    PhoneCall,
    GitBranch,
    ShieldCheck,
    Wallet,
    CreditCard,
    Headphones,
    Users,
    Activity,
    ArrowRight,
    Sparkles,
    CheckCircle2,
    Lock,
    ExternalLink,
    Play,
    Zap,
    Clock,
    Server
} from 'lucide-react';
import SEO from '../../components/seo/SEO';

const DemoOverview = () => {
    return (
        <>
            <SEO
                title="Interactive Cloud PBX Demo & Admin Sandbox | Balatrix"
                description="Experience Balatrix Cloud PBX firsthand. Explore our live admin portal sandbox with IVR visual builders, active call monitoring, wallet billing, and tenant management."
                keywords={['PBX Demo', 'Cloud PBX Test Drive', 'Telecom Admin Console', 'PBX Sandbox', 'Live IVR Builder']}
            />

            <div className="min-h-screen bg-[#030614] text-white pt-28 pb-20 relative overflow-hidden selection:bg-blue-600/30 selection:text-white">
                {/* Background Ambient Glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-600/15 via-indigo-600/10 to-transparent blur-3xl pointer-events-none" />
                <div className="absolute top-1/4 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    
                    {/* Hero Section */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-blue-300 mb-6 shadow-xs">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                            <span>Interactive Admin Sandbox Available</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
                            Experience the Power of{' '}
                            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                                Balatrix PBX
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8 max-w-2xl mx-auto">
                            Step inside our live telecom management platform from the administrator seat. Test-drive live call routing, IVR tree visual builders, extension provisioning, and wallet billing with zero commitment.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                to="/demo/app?tab=dashboard"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm tracking-wide shadow-[0_10px_35px_rgba(37,99,235,0.5)] hover:shadow-[0_15px_45px_rgba(37,99,235,0.7)] transition-all duration-200 transform hover:scale-[1.02] active:scale-95 cursor-pointer"
                            >
                                <Play className="w-4 h-4 fill-white" />
                                <span>Launch Live Admin Demo</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                to="/services/pbx"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/15 text-slate-200 hover:text-white font-semibold text-sm transition-all"
                            >
                                <span>Read PBX Specifications</span>
                            </Link>
                        </div>

                        {/* Sandbox reassurance pill */}
                        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            <span>100% Safe Sandbox • Pre-loaded with realistic dummy telecom data • No sign-up required</span>
                        </div>
                    </div>

                    {/* Interactive Preview Mockup Card */}
                    <div className="relative mb-24 max-w-5xl mx-auto">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-xl opacity-30 pointer-events-none" />
                        <div className="relative rounded-2xl border border-white/15 bg-[#090d22]/90 backdrop-blur-2xl p-4 sm:p-6 shadow-2xl overflow-hidden">
                            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                                    <span className="ml-3 font-mono text-slate-400 text-[11px] hidden sm:inline">
                                        https://pbxwl.balatrix.com/platform/dashboard
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                    <span>Telemetry Active</span>
                                </div>
                            </div>

                            {/* Mini UI Snapshot inside Preview */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                                    <p className="text-xs uppercase text-slate-400 font-bold mb-1">Live Telemetry</p>
                                    <h3 className="text-2xl font-bold text-white mb-2">Operational</h3>
                                    <p className="text-xs text-slate-300">Carrier SIP trunk gateways reporting 18ms latency across US-East & Europe.</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                                    <p className="text-xs uppercase text-slate-400 font-bold mb-1">Prepaid Wallet</p>
                                    <h3 className="text-2xl font-bold text-emerald-400 mb-2">$29.31</h3>
                                    <p className="text-xs text-slate-300">Simulate instant credit card tokenization, rate card tracking, and one-click top-ups.</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                                    <p className="text-xs uppercase text-slate-400 font-bold mb-1">Active Streams</p>
                                    <h3 className="text-2xl font-bold text-blue-400 mb-2">3 Live Calls</h3>
                                    <p className="text-xs text-slate-300">Supervisor listen & whisper modes with real-time audio packet counters.</p>
                                </div>
                            </div>

                            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between flex-wrap gap-3">
                                <p className="text-xs text-slate-400">
                                    Ready to explore the real admin interface?
                                </p>
                                <Link
                                    to="/demo/app"
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    <span>Enter Sandbox Console</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* What You Can Test Section */}
                    <div className="mb-24">
                        <div className="text-center max-w-2xl mx-auto mb-14">
                            <h2 className="text-3xl font-extrabold text-white tracking-tight mb-3">
                                What You Can Explore in the Demo
                            </h2>
                            <p className="text-sm text-slate-400">
                                Each module reflects the exact production architecture that runs on Balatrix Carrier Infrastructure.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: LayoutDashboard,
                                    title: 'Centralized Tenant Dashboard',
                                    desc: 'Monitor real-time call volume, operational system health, prepaid wallet burn rate, and call recording global switches.',
                                    tab: 'dashboard'
                                },
                                {
                                    icon: GitBranch,
                                    title: 'Visual IVR Call Flow Studio',
                                    desc: 'Design drag-and-drop auto-attendants. Connect dynamic action blocks like Extensions, Ring Groups, Submenus, and DID Forwards.',
                                    tab: 'ivr-menus'
                                },
                                {
                                    icon: Activity,
                                    title: 'Real-Time Call Monitoring',
                                    desc: 'Watch active inbound and outbound call streams, observe codec latency, and test supervisor Whisper / Listen modes.',
                                    tab: 'call-monitoring'
                                },
                                {
                                    icon: Users,
                                    title: 'Multi-Tenant Extensions & Ring Groups',
                                    desc: 'Configure simultaneous, sequential, and round-robin ring strategies with customizable ring timeouts and fallback routing.',
                                    tab: 'ring-groups'
                                },
                                {
                                    icon: Clock,
                                    title: 'Time-Based Operational Schedules',
                                    desc: 'Create business hours, after-hours, and holiday schedules with automated time gates across global timezones.',
                                    tab: 'operational-time'
                                },
                                {
                                    icon: Wallet,
                                    title: 'Wallet & Automated Billing',
                                    desc: 'Test-drive prepaid top-ups with live balance calculation, add-on subscription management, and complete CDR records.',
                                    tab: 'wallet'
                                }
                            ].map((feature) => {
                                const FeatureIcon = feature.icon;
                                return (
                                    <div
                                        key={feature.title}
                                        className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.06] transition-all duration-200 group flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                                <FeatureIcon className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-base font-bold text-white mb-2">
                                                {feature.title}
                                            </h3>
                                            <p className="text-xs text-slate-300 leading-relaxed font-normal">
                                                {feature.desc}
                                            </p>
                                        </div>

                                        <div className="mt-5 pt-4 border-t border-white/5">
                                            <Link
                                                to={`/demo/app?tab=${feature.tab}`}
                                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                                            >
                                                <span>Try {feature.title.split(' ')[0]} in Sandbox</span>
                                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Bottom CTA Banner */}
                    <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-r from-blue-900/60 via-indigo-900/40 to-slate-900/80 p-8 sm:p-12 text-center">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
                        
                        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                                Ready to Test the Platform Yourself?
                            </h2>
                            <p className="text-sm text-slate-300 leading-relaxed font-normal">
                                Launch the full administrator console right now in your browser. All test data will reset automatically whenever you exit or refresh.
                            </p>
                            <div className="pt-2">
                                <Link
                                    to="/demo/app?tab=dashboard"
                                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/40 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                                >
                                    <span>Launch Live Admin Demo</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default DemoOverview;
