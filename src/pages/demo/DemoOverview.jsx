import React, { useState } from 'react';
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
    Server,
    Cpu,
    Mic,
    Volume2,
    BarChart3,
    Check,
    Layers,
    Globe
} from 'lucide-react';
import SEO from '../../components/seo/SEO';

const DemoOverview = () => {
    const [activeSpecTab, setActiveSpecTab] = useState('ivr');

    const specTabs = [
        {
            id: 'ivr',
            label: 'Multi-Level IVR',
            icon: Layers,
            title: 'Intelligent IVR & Auto-Attendant Engine',
            desc: 'Guide callers seamlessly with customizable multi-language voice menus, department routing, and automated attendant responses.',
            highlights: [
                'Multi-tier DTMF press-key options (e.g., Press 1 for Sales, 2 for Support)',
                'Time-of-day dynamic greeting changes (Business hours vs After hours)',
                'Sub-menus for multiple sub-departments, branches, and language preferences',
                'Visual drag-and-drop call flow canvas with instant deployment'
            ],
            metrics: [
                { label: 'Max Menu Tiers', value: 'Unlimited' },
                { label: 'Routing Latency', value: '< 20ms' },
                { label: 'Supported Codecs', value: 'G.711u/a, G.722, Opus' }
            ]
        },
        {
            id: 'analytics',
            label: 'Recording & CDR Analytics',
            icon: BarChart3,
            title: 'Stereo Call Recording & Real-time CDR Analytics',
            desc: 'Maintain compliance, train support teams, and gain deep operational insights with crystal-clear call audio recordings and real-time reports.',
            highlights: [
                'Automatic dual-channel stereo call recording with secure cloud storage options',
                'Supervisor live monitoring tools: Listen, Whisper (coach agent), and Terminate',
                'Exportable Call Detail Records (CDR) with filterable date, direction, and duration tags',
                'Real-time wallboard displaying active calls, missed calls, and SLA performance'
            ],
            metrics: [
                { label: 'Audio Retention', value: 'Customizable' },
                { label: 'Real-Time Sync', value: 'Sub-second' },
                { label: 'Format', value: 'Stereo WAV / MP3' }
            ]
        },
        {
            id: 'softphone',
            label: 'WebSoftphone & Devices',
            icon: Headphones,
            title: 'Zero-Hardware Browser WebSoftphone & SIP Endpoints',
            desc: 'Make and receive HD calls from any browser or smartphone without installing extra desktop hardware or proprietary SIP desk phones.',
            highlights: [
                'Integrated WebRTC voice engine powered by Opus HD audio codec',
                'One-click dialer with contact sync and active call transfer capabilities',
                'Cross-platform compatibility: Chrome, Firefox, Safari, Edge, and Mobile browsers',
                'Standard SIP interoperability: Connect Polycom, Yealink, Grandstream, or Cisco IP phones'
            ],
            metrics: [
                { label: 'Hardware Cost', value: '$0 Required' },
                { label: 'Audio Quality', value: 'HD Voice (Opus)' },
                { label: 'Setup Time', value: '< 2 Minutes' }
            ]
        },
        {
            id: 'routing',
            label: 'Schedules & Ring Groups',
            icon: Clock,
            title: 'Time-Based Operational Schedules & Ring Groups',
            desc: 'Distribute incoming calls among sales and support agents with flexible strategies and automated time gates across global time zones.',
            highlights: [
                'Simultaneous, sequential, and round-robin ring strategies',
                'Automated business hours, after-hours, and weekend fallback gates',
                'Tiered failovers: Route unanswered calls to voicemail, backup queues, or mobile numbers',
                'PSTN DID forwarding with tenant rate-card billing integration'
            ],
            metrics: [
                { label: 'Routing Rules', value: 'Dynamic 24/7' },
                { label: 'Ring Strategies', value: '3 Algorithmic Modes' },
                { label: 'Timezone Gates', value: 'Global E.164' }
            ]
        }
    ];

    const specsTable = [
        { category: 'Signaling & Protocols', details: 'SIP RFC 3261, WebRTC (WSS/DTLS-SRTP), TLS 1.3, Homer SIP Capture integration' },
        { category: 'Audio Codecs', details: 'Opus (8-48 kHz HD), G.711 (u-law/a-law), G.722, G.729AB with adaptive jitter buffer' },
        { category: 'Call Routing Engine', details: 'Multi-level IVR, Round-Robin / Sequential / Simultaneous Ring Groups, Time Condition Gates' },
        { category: 'Supervisor Suite', details: 'Live Call Monitoring, Silent Listen, Private Whisper Coaching, Stream Termination' },
        { category: 'Billing & Accounting', details: 'Prepaid Wallet, Real-time CDR rating, Multi-Tenant credit limits, Automated Add-on subscriptions' },
        { category: 'High Availability', details: 'Carrier-grade geo-redundant SIP gateways across US-East, US-West & Europe (99.99% SLA)' }
    ];

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

                            <a
                                href="#pbx-specifications"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/15 text-slate-200 hover:text-white font-semibold text-sm transition-all"
                            >
                                <span>View Technical Specifications</span>
                            </a>
                        </div>

                        {/* Sandbox reassurance pill */}
                        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            <span>100% Safe Sandbox • Pre-loaded with realistic dummy telecom data • Resets on refresh</span>
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
                                    <h3 className="text-2xl font-bold text-emerald-400 mb-2">$50.00</h3>
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

                    {/* Section 1: What You Can Explore in the Demo */}
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

                    {/* Section 2: Comprehensive PBX Specifications & Architecture (From /services/pbx) */}
                    <div id="pbx-specifications" className="mb-24 pt-8">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
                                <Cpu className="w-3.5 h-3.5" />
                                <span>Platform Technical Specifications</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                                Built on Enterprise Carrier Architecture
                            </h2>
                            <p className="text-sm text-slate-300 mt-2">
                                Deep dive into the voice routing engines, media encryption, audio codecs, and supervisor tools powering Balatrix PBX.
                            </p>
                        </div>

                        {/* Interactive Tab Switcher for Specs */}
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
                            {specTabs.map((tab) => {
                                const Icon = tab.icon;
                                const isActive = activeSpecTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        type="button"
                                        onClick={() => setActiveSpecTab(tab.id)}
                                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${isActive
                                                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 border border-blue-400/40'
                                                : 'bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border border-white/10'
                                            }`}
                                    >
                                        <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-blue-400'}`} />
                                        <span>{tab.label}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Active Spec Tab Content Card */}
                        {specTabs.map((tab) => {
                            if (tab.id !== activeSpecTab) return null;
                            const TabIcon = tab.icon;
                            return (
                                <div
                                    key={tab.id}
                                    className="p-6 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-2xl mb-12"
                                >
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                                        <div className="lg:col-span-2 space-y-4">
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/20 text-blue-300 text-xs font-mono">
                                                <span>SPECIFICATION: {tab.label.toUpperCase()}</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white">
                                                {tab.title}
                                            </h3>
                                            <p className="text-sm text-slate-300 leading-relaxed">
                                                {tab.desc}
                                            </p>
                                            <div className="space-y-2.5 pt-2">
                                                {tab.highlights.map((h, i) => (
                                                    <div key={i} className="flex items-start gap-3">
                                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                                        <span className="text-xs sm:text-sm text-slate-200">{h}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Metrics Column */}
                                        <div className="p-5 rounded-2xl bg-[#090e24] border border-white/10 space-y-4">
                                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 pb-2 border-b border-white/10">
                                                Engine Benchmarks
                                            </h4>
                                            {tab.metrics.map((m, i) => (
                                                <div key={i} className="flex items-center justify-between text-xs">
                                                    <span className="text-slate-400">{m.label}</span>
                                                    <span className="font-mono font-bold text-blue-300">{m.value}</span>
                                                </div>
                                            ))}
                                            <div className="pt-2 border-t border-white/10">
                                                <Link
                                                    to={`/demo/app?tab=${tab.id === 'ivr' ? 'ivr-menus' : tab.id === 'analytics' ? 'analytics' : tab.id === 'routing' ? 'ring-groups' : 'dashboard'}`}
                                                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600/80 hover:bg-blue-600 text-white font-bold text-xs transition-colors"
                                                >
                                                    <span>Open {tab.label.split(' ')[0]} in Sandbox</span>
                                                    <ArrowRight className="w-3.5 h-3.5" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        {/* Specs Summary Table */}
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
                            <div className="p-4 sm:p-5 bg-white/[0.04] border-b border-white/10 flex items-center justify-between">
                                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                                    Technical Architecture & Compliance Matrix
                                </h3>
                                <span className="text-xs text-emerald-400 font-mono font-semibold">
                                    Carrier Grade 99.99% SLA
                                </span>
                            </div>
                            <div className="divide-y divide-white/5">
                                {specsTable.map((row, idx) => (
                                    <div
                                        key={idx}
                                        className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-white/[0.02] transition-colors text-xs sm:text-sm"
                                    >
                                        <span className="font-semibold text-slate-300 sm:w-1/3">
                                            {row.category}
                                        </span>
                                        <span className="text-slate-400 sm:w-2/3 leading-relaxed">
                                            {row.details}
                                        </span>
                                    </div>
                                ))}
                            </div>
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
                            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                                <Link
                                    to="/demo/app?tab=dashboard"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/40 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                                >
                                    <span>Launch Live Admin Demo</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>

                                <Link
                                    to="/contact"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 text-white font-bold text-sm transition-all hover:scale-105 active:scale-95"
                                >
                                    <span>Schedule Enterprise Walkthrough</span>
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
