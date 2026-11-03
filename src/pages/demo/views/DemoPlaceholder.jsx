import React from 'react';
import {
    LayoutDashboard,
    Wallet,
    CreditCard,
    Phone,
    ArrowRight,
    Sparkles,
    ShieldCheck
} from 'lucide-react';

const moduleInfo = {
    extensions: {
        title: 'Extensions Management',
        description: 'Provision WebRTC softphones, SIP hard-phones, departmental extensions, speed-dials, and user authentication credentials.',
        tag: 'Telephony Endpoints'
    },
    'ring-groups': {
        title: 'Ring Groups & Hunting Lists',
        description: 'Distribute inbound calls evenly across sales, billing, and support agents with simultaneous, linear, or round-robin call strategies.',
        tag: 'Call Distribution'
    },
    'ivr-menus': {
        title: 'IVR Multi-Level Menus',
        description: 'Design multi-tiered voice auto-attendants with customizable DTMF press-key options (Press 1 for Sales, 2 for Support), multi-language greetings, and timeout fallbacks.',
        tag: 'Interactive Voice Response'
    },
    'audio-library': {
        title: 'Audio Library & Music-on-Hold',
        description: 'Upload custom WAV/MP3 prompts, text-to-speech synthesized greetings, after-hours announcements, and custom hold music streams.',
        tag: 'Media Assets'
    },
    'did-forwards': {
        title: 'DID Forwarding & Failover Rules',
        description: 'Forward incoming phone numbers instantaneously to remote mobile devices, branch offices, or backup SIP trunk endpoints during network events.',
        tag: 'Redundancy & Routing'
    },
    'operational-time': {
        title: 'Operational Time & Business Hours',
        description: 'Configure corporate operating schedules, holidays, and after-hours call routing rules with automated time-condition triggers.',
        tag: 'Schedule Automation'
    },
    'call-monitoring': {
        title: 'Live Call Monitoring (Barge & Whisper)',
        description: 'Supervise active agent calls in real-time with silent listen-in, whisper coaching, and supervisor barge-in capabilities.',
        tag: 'Supervision & Quality'
    },
    'call-records': {
        title: 'Call Records (CDRs) & Recordings',
        description: 'Inspect detailed call logs with caller ID, timestamp, destination, duration, termination cause, MOS audio quality, and embedded call recordings.',
        tag: 'Historical Telemetry'
    },
    'sip-traces': {
        title: 'SIP Traces & Protocol Debugging',
        description: 'Examine raw SIP signaling ladders (INVITE, 180 Ringing, 200 OK, BYE) and SDP packet payloads directly in the browser for rapid diagnostics.',
        tag: 'Carrier-Grade Diagnostics'
    },
    analytics: {
        title: 'Advanced Telecom Analytics',
        description: 'Track answered vs abandoned call ratios, peak hour concurrency, average handle time (AHT), and carrier cost metrics with rich data visualizations.',
        tag: 'Business Intelligence'
    },
    'user-management': {
        title: 'Role-Based User Management',
        description: 'Manage tenant administrators, billing managers, supervisors, and agents with granular role-based permissions and audit logs.',
        tag: 'Security & Access'
    }
};

const DemoPlaceholder = ({ tabKey, onNavigateTab }) => {
    const info = moduleInfo[tabKey] || {
        title: 'Platform Module',
        description: 'Manage specialized telecommunications functionality on the Balatrix PBX Platform.',
        tag: 'Enterprise PBX'
    };

    return (
        <div className="bg-white rounded-2xl border border-slate-200/70 p-8 sm:p-12 shadow-sm text-center max-w-3xl mx-auto my-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>{info.tag}</span>
            </div>

            <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {info.title}
                </h2>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                    {info.description}
                </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 text-xs text-slate-600 max-w-lg mx-auto text-left flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                    <p className="font-semibold text-slate-800">Screenshots & Live Modules Loading</p>
                    <p className="text-slate-500 mt-0.5">
                        This section's live interactive view is currently being integrated from the platform screenshots. Switch between the 4 active live views below to test real-time functionality:
                    </p>
                </div>
            </div>

            {/* Quick jump to the 4 implemented sections */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5">
                <button
                    onClick={() => onNavigateTab('dashboard')}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold border border-blue-200/60 transition-colors"
                >
                    <LayoutDashboard className="w-3.5 h-3.5" />
                    <span>Dashboard</span>
                </button>
                <button
                    onClick={() => onNavigateTab('wallet')}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold border border-blue-200/60 transition-colors"
                >
                    <Wallet className="w-3.5 h-3.5" />
                    <span>Wallet</span>
                </button>
                <button
                    onClick={() => onNavigateTab('subscriptions')}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold border border-blue-200/60 transition-colors"
                >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Subscriptions</span>
                </button>
                <button
                    onClick={() => onNavigateTab('phone-numbers')}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold border border-blue-200/60 transition-colors"
                >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Phone Numbers</span>
                </button>
            </div>
        </div>
    );
};

export default DemoPlaceholder;
