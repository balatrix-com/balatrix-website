import React, { useState } from 'react';
import {
    Search,
    AlertTriangle,
    RefreshCw,
    Terminal,
    ArrowRight,
    ExternalLink,
    Code2,
    CheckCircle2,
    Clock,
    FileText,
    Activity,
    Radio,
    X,
    Copy,
    Check
} from 'lucide-react';

const initialTraces = [
    {
        id: 'trace-1',
        started: '11/2/2026, 6:01:29 PM',
        customer: 'U1005',
        direction: 'INBOUND',
        caller: '215469708',
        callee: '4151230178',
        cdr: 'COMPLETED',
        callId: 'a5e39f5f-a157-4caf-8892-0249984eab6c',
        mos: '4.42',
        duration: '69.537s',
        span: '69.537s',
        parties: '215469708 → 4151230178',
        messagesCount: 20,
        endpointsCount: 4
    },
    {
        id: 'trace-2',
        started: '11/2/2026, 6:00:55 PM',
        customer: 'U1005',
        direction: 'INBOUND',
        caller: '2154697061',
        callee: '8002000120',
        cdr: 'COMPLETED',
        callId: '12384b-dd20-410a-8821@sip.balatrix.net',
        mos: '4.38',
        duration: '7s',
        span: '7.120s',
        parties: '2154697061 → 8002000120',
        messagesCount: 14,
        endpointsCount: 4
    },
    {
        id: 'trace-3',
        started: '11/2/2026, 5:58:40 PM',
        customer: 'U1005',
        direction: 'INBOUND',
        caller: '2154697061',
        callee: '8002000120',
        cdr: 'COMPLETED',
        callId: 'fe8301-44ab-4e33-9122@sip.balatrix.net',
        mos: '4.40',
        duration: '3s',
        span: '3.450s',
        parties: '2154697061 → 8002000120',
        messagesCount: 12,
        endpointsCount: 4
    },
    {
        id: 'trace-4',
        started: '11/2/2026, 5:57:49 PM',
        customer: 'U1005',
        direction: 'INBOUND',
        caller: '2154697061',
        callee: '8002000120',
        cdr: 'COMPLETED',
        callId: '09ab21-88fc-4190-aa11@sip.balatrix.net',
        mos: '4.41',
        duration: '15s',
        span: '15.200s',
        parties: '2154697061 → 8002000120',
        messagesCount: 16,
        endpointsCount: 4
    }
];

// Simulated ladder sequence messages
const LADDER_MESSAGES = [
    {
        id: 'msg-1',
        time: '0.000s',
        method: 'INVITE (SDP)',
        cseq: 'CSeq: INVITE',
        fromEndpoint: 0,
        toEndpoint: 1,
        color: '#9333ea', // purple
        dashed: false,
        raw: `INVITE sip:4151230178@91.99.251.61:5070 SIP/2.0
Via: SIP/2.0/UDP 91.99.251.58:5060;branch=z9hG4bK-7a892b1
From: <sip:215469708@91.99.251.58>;tag=as4921b77a
To: <sip:4151230178@91.99.251.61:5070>
Call-ID: a5e39f5f-a157-4caf-8892-0249984eab6c
CSeq: 102 INVITE
Contact: <sip:215469708@91.99.251.58:5060>
Max-Forwards: 69
Content-Type: application/sdp
Content-Length: 242

v=0
o=root 18921 18921 IN IP4 91.99.251.58
s=Balatrix Gateway
c=IN IP4 91.99.251.58
t=0 0
m=audio 10244 RTP/AVP 0 101
a=rtpmap:0 PCMU/8000
a=rtpmap:101 telephone-event/8000
a=fmtp:101 0-16
a=ptime:20
a=sendrecv`
    },
    {
        id: 'msg-2',
        time: '0.008s',
        method: '100',
        cseq: 'CSeq: INVITE',
        fromEndpoint: 1,
        toEndpoint: 0,
        color: '#0891b2', // cyan/teal
        dashed: true,
        raw: `SIP/2.0 100 Trying
Via: SIP/2.0/UDP 91.99.251.58:5060;branch=z9hG4bK-7a892b1;received=91.99.251.58
From: <sip:215469708@91.99.251.58>;tag=as4921b77a
To: <sip:4151230178@91.99.251.61:5070>
Call-ID: a5e39f5f-a157-4caf-8892-0249984eab6c
CSeq: 102 INVITE
Server: Balatrix SBC/2.4
Content-Length: 0`
    },
    {
        id: 'msg-3',
        time: '0.014s',
        method: 'INVITE (SDP)',
        cseq: 'CSeq: INVITE',
        fromEndpoint: 2,
        toEndpoint: 3,
        color: '#9333ea',
        dashed: false,
        raw: `INVITE sip:4151230178@14.96.84.224:50323 SIP/2.0
Via: SIP/2.0/UDP 91.99.251.61:7443;branch=z9hG4bK-b883011
From: <sip:215469708@balatrix.net>;tag=sbc-9021a
To: <sip:4151230178@14.96.84.224:50323>
Call-ID: a5e39f5f-a157-4caf-8892-0249984eab6c
CSeq: 1 INVITE
Content-Type: application/sdp
Content-Length: 228

v=0
o=BalatrixSBC 4912 4912 IN IP4 91.99.251.61
s=SIP Call
c=IN IP4 91.99.251.61
t=0 0
m=audio 16422 RTP/AVP 0 101
a=rtpmap:0 PCMU/8000
a=sendrecv`
    },
    {
        id: 'msg-4',
        time: '1.040s',
        method: '100',
        cseq: 'CSeq: INVITE',
        fromEndpoint: 3,
        toEndpoint: 2,
        color: '#0891b2',
        dashed: true,
        raw: `SIP/2.0 100 Trying
Via: SIP/2.0/UDP 91.99.251.61:7443;branch=z9hG4bK-b883011
From: <sip:215469708@balatrix.net>;tag=sbc-9021a
To: <sip:4151230178@14.96.84.224:50323>
Call-ID: a5e39f5f-a157-4caf-8892-0249984eab6c
CSeq: 1 INVITE
Content-Length: 0`
    },
    {
        id: 'msg-5',
        time: '1.344s',
        method: '180',
        cseq: 'CSeq: INVITE',
        fromEndpoint: 3,
        toEndpoint: 2,
        color: '#0891b2',
        dashed: true,
        raw: `SIP/2.0 180 Ringing
Via: SIP/2.0/UDP 91.99.251.61:7443;branch=z9hG4bK-b883011
From: <sip:215469708@balatrix.net>;tag=sbc-9021a
To: <sip:4151230178@14.96.84.224:50323>;tag=ep-client-312
Call-ID: a5e39f5f-a157-4caf-8892-0249984eab6c
CSeq: 1 INVITE
Contact: <sip:4151230178@14.96.84.224:50323>
Content-Length: 0`
    },
    {
        id: 'msg-6',
        time: '1.354s',
        method: '180',
        cseq: 'CSeq: INVITE',
        fromEndpoint: 1,
        toEndpoint: 0,
        color: '#0891b2',
        dashed: true,
        raw: `SIP/2.0 180 Ringing
Via: SIP/2.0/UDP 91.99.251.58:5060;branch=z9hG4bK-7a892b1
From: <sip:215469708@91.99.251.58>;tag=as4921b77a
To: <sip:4151230178@91.99.251.61:5070>;tag=asbc-9021a
Call-ID: a5e39f5f-a157-4caf-8892-0249984eab6c
CSeq: 102 INVITE
Content-Length: 0`
    },
    {
        id: 'msg-7',
        time: '9.833s',
        method: '200 (SDP)',
        cseq: 'CSeq: INVITE',
        fromEndpoint: 3,
        toEndpoint: 2,
        color: '#0891b2',
        dashed: true,
        raw: `SIP/2.0 200 OK
Via: SIP/2.0/UDP 91.99.251.61:7443;branch=z9hG4bK-b883011
From: <sip:215469708@balatrix.net>;tag=sbc-9021a
To: <sip:4151230178@14.96.84.224:50323>;tag=ep-client-312
Call-ID: a5e39f5f-a157-4caf-8892-0249984eab6c
CSeq: 1 INVITE
Contact: <sip:4151230178@14.96.84.224:50323;transport=udp>
Content-Type: application/sdp
Content-Length: 215

v=0
o=WebRTCClient 8821 8821 IN IP4 14.96.84.224
s=Talk
c=IN IP4 14.96.84.224
t=0 0
m=audio 50324 RTP/AVP 0
a=rtpmap:0 PCMU/8000
a=sendrecv`
    },
    {
        id: 'msg-8',
        time: '9.862s',
        method: '200 (SDP)',
        cseq: 'CSeq: INVITE',
        fromEndpoint: 1,
        toEndpoint: 0,
        color: '#0891b2',
        dashed: true,
        raw: `SIP/2.0 200 OK
Via: SIP/2.0/UDP 91.99.251.58:5060;branch=z9hG4bK-7a892b1
From: <sip:215469708@91.99.251.58>;tag=as4921b77a
To: <sip:4151230178@91.99.251.61:5070>;tag=asbc-9021a
Call-ID: a5e39f5f-a157-4caf-8892-0249984eab6c
CSeq: 102 INVITE
Contact: <sip:4151230178@91.99.251.61:5070>
Content-Type: application/sdp
Content-Length: 228

v=0
o=Balatrix 1024 1024 IN IP4 91.99.251.61
s=Audio
c=IN IP4 91.99.251.61
t=0 0
m=audio 10244 RTP/AVP 0
a=rtpmap:0 PCMU/8000
a=sendrecv`
    },
    {
        id: 'msg-9',
        time: '9.905s',
        method: 'ACK',
        cseq: 'CSeq: ACK',
        fromEndpoint: 0,
        toEndpoint: 1,
        color: '#9333ea',
        dashed: false,
        raw: `ACK sip:4151230178@91.99.251.61:5070 SIP/2.0
Via: SIP/2.0/UDP 91.99.251.58:5060;branch=z9hG4bK-9011aa3
From: <sip:215469708@91.99.251.58>;tag=as4921b77a
To: <sip:4151230178@91.99.251.61:5070>;tag=asbc-9021a
Call-ID: a5e39f5f-a157-4caf-8892-0249984eab6c
CSeq: 102 ACK
Max-Forwards: 70
Content-Length: 0`
    },
    {
        id: 'msg-10',
        time: '10.076s',
        method: 'INFO',
        cseq: 'CSeq: INFO',
        fromEndpoint: 1,
        toEndpoint: 0,
        color: '#9333ea',
        dashed: false,
        raw: `INFO sip:215469708@91.99.251.58:5060 SIP/2.0
Via: SIP/2.0/UDP 91.99.251.61:5070;branch=z9hG4bK-cc8102
From: <sip:4151230178@91.99.251.61:5070>;tag=asbc-9021a
To: <sip:215469708@91.99.251.58>;tag=as4921b77a
Call-ID: a5e39f5f-a157-4caf-8892-0249984eab6c
CSeq: 103 INFO
Content-Type: application/dtmf-relay
Content-Length: 22

Signal= 1
Duration= 160`
    },
    {
        id: 'msg-11',
        time: '10.470s',
        method: '200',
        cseq: 'CSeq: INFO',
        fromEndpoint: 0,
        toEndpoint: 1,
        color: '#0891b2',
        dashed: true,
        raw: `SIP/2.0 200 OK
Via: SIP/2.0/UDP 91.99.251.61:5070;branch=z9hG4bK-cc8102
From: <sip:4151230178@91.99.251.61:5070>;tag=asbc-9021a
To: <sip:215469708@91.99.251.58>;tag=as4921b77a
Call-ID: a5e39f5f-a157-4caf-8892-0249984eab6c
CSeq: 103 INFO
Content-Length: 0`
    }
];

const ENDPOINTS = [
    { ip: '91.99.251.58:5060', label: 'endpoint 1' },
    { ip: '91.99.251.61:5070', label: 'endpoint 2' },
    { ip: '91.99.251.61:7443', label: 'endpoint 3' },
    { ip: '14.96.84.224:50323', label: 'endpoint 4' }
];

/**
 * Full-screen SIP Signaling Trace modal exactly matching the user's uploaded screenshot
 */
const SIPSignalingTraceModal = ({ trace, onClose }) => {
    const [selectedTab, setSelectedTab] = useState('trace'); // 'trace' | 'raw'
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [copied, setCopied] = useState(false);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-hidden">
            <div className="bg-white dark:bg-[#070709] w-full h-full sm:max-w-7xl sm:h-[94vh] sm:rounded-2xl shadow-2xl border border-slate-200 dark:border-zinc-850 flex flex-col overflow-hidden text-slate-800 dark:text-zinc-200">
                
                {/* 1. TOP HEADER */}
                <div className="p-4 sm:px-6 sm:py-4 border-b border-slate-200 dark:border-zinc-850 flex items-start justify-between bg-white dark:bg-[#070709] shrink-0">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                            MERGED CALL DETAIL
                        </p>
                        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight mt-0.5">
                            SIP signaling trace
                        </h2>
                        <p className="text-xs font-mono text-blue-600 dark:text-blue-400 mt-0.5">
                            {trace.callId}
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                        title="Close"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* 2. STATS BAR (Signaling span, Parties, Messages, Endpoints) */}
                <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-slate-200 dark:border-zinc-850 text-xs shrink-0 divide-x divide-slate-100 dark:divide-zinc-850 bg-slate-50/50 dark:bg-zinc-900/40">
                    {/* Signaling span */}
                    <div className="p-3.5 sm:px-6 flex items-center gap-3">
                        <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                        <div>
                            <p className="text-[10px] text-slate-500 dark:text-zinc-400 uppercase tracking-wide">Signaling span</p>
                            <p className="font-bold text-slate-900 dark:text-white">{trace.span || '69.537s'}</p>
                        </div>
                    </div>

                    {/* Parties */}
                    <div className="p-3.5 sm:px-6 flex items-center gap-3">
                        <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                        <div>
                            <p className="text-[10px] text-slate-500 dark:text-zinc-400 uppercase tracking-wide">Parties</p>
                            <p className="font-bold text-slate-900 dark:text-white font-mono text-xs">{trace.parties || `${trace.caller} → ${trace.callee}`}</p>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="p-3.5 sm:px-6 flex items-center gap-3">
                        <Activity className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                        <div>
                            <p className="text-[10px] text-slate-500 dark:text-zinc-400 uppercase tracking-wide">Messages</p>
                            <p className="font-bold text-slate-900 dark:text-white">{trace.messagesCount || 20}</p>
                        </div>
                    </div>

                    {/* Endpoints */}
                    <div className="p-3.5 sm:px-6 flex items-center gap-3">
                        <Radio className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                        <div>
                            <p className="text-[10px] text-slate-500 dark:text-zinc-400 uppercase tracking-wide">Endpoints</p>
                            <p className="font-bold text-slate-900 dark:text-white">{trace.endpointsCount || 4}</p>
                        </div>
                    </div>
                </div>

                {/* 3. TABS (SIP Trace / Raw Data) */}
                <div className="flex items-center gap-6 px-6 border-b border-slate-200 dark:border-zinc-850 shrink-0 bg-white dark:bg-[#070709]">
                    <button
                        onClick={() => setSelectedTab('trace')}
                        className={`py-3 text-xs font-bold inline-flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
                            selectedTab === 'trace'
                                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                                : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-zinc-400 dark:hover:text-white'
                        }`}
                    >
                        <Radio className="w-3.5 h-3.5" />
                        <span>SIP Trace</span>
                    </button>
                    <button
                        onClick={() => setSelectedTab('raw')}
                        className={`py-3 text-xs font-bold inline-flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
                            selectedTab === 'raw'
                                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                                : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-zinc-400 dark:hover:text-white'
                        }`}
                    >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Raw Data</span>
                    </button>
                </div>

                {/* 4. MAIN WORKSPACE (Split View: Ladder on Left, Inspector on Right) */}
                <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
                    
                    {/* LEFT PANE: SIP LADDER DIAGRAM */}
                    <div className="flex-1 overflow-auto p-4 sm:p-6 bg-white dark:bg-[#070709] border-r border-slate-200 dark:border-zinc-850 relative">
                        {selectedTab === 'trace' ? (
                            <div className="min-w-[680px]">
                                {/* Endpoints Header Columns */}
                                <div className="grid grid-cols-4 pb-4 border-b border-slate-100 dark:border-zinc-850 text-center font-mono text-[11px]">
                                    {ENDPOINTS.map((ep, idx) => (
                                        <div key={idx} className="px-2">
                                            <p className="font-bold text-slate-900 dark:text-white truncate">{ep.ip}</p>
                                            <p className="text-[10px] text-slate-400 dark:text-zinc-500">{ep.label}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Vertical Column Guidelines */}
                                <div className="relative pt-6 min-h-[480px]">
                                    {/* 4 vertical guide lines corresponding to the 4 endpoints */}
                                    <div className="absolute inset-0 grid grid-cols-4 pointer-events-none">
                                        <div className="border-r border-dashed border-slate-200/80 dark:border-zinc-800/80 -mr-px" />
                                        <div className="border-r border-dashed border-slate-200/80 dark:border-zinc-800/80 -mr-px" />
                                        <div className="border-r border-dashed border-slate-200/80 dark:border-zinc-800/80 -mr-px" />
                                        <div />
                                    </div>

                                    {/* Horizontal Messages Stack */}
                                    <div className="space-y-6 relative z-10">
                                        {LADDER_MESSAGES.map((msg) => {
                                            const isLeftToRight = msg.fromEndpoint < msg.toEndpoint;
                                            const isSelected = selectedMessage?.id === msg.id;

                                            // Calculate grid columns: endpoints are 0, 1, 2, 3
                                            // E.g. 0 -> 1 spans col 1
                                            // 2 -> 3 spans col 3
                                            const minCol = Math.min(msg.fromEndpoint, msg.toEndpoint);
                                            const maxCol = Math.max(msg.fromEndpoint, msg.toEndpoint);

                                            // Left offset and width percentage across the 4 columns
                                            const leftPercent = (minCol * 25) + 12.5; // centers over endpoint
                                            const widthPercent = (maxCol - minCol) * 25;

                                            return (
                                                <div
                                                    key={msg.id}
                                                    onClick={() => setSelectedMessage(msg)}
                                                    className="relative flex items-center h-10 group cursor-pointer"
                                                >
                                                    {/* Timestamp on far left */}
                                                    <span className="w-14 text-[10px] font-mono text-slate-400 dark:text-zinc-500 shrink-0 select-none">
                                                        {msg.time}
                                                    </span>

                                                    {/* Arrow container positioned over target columns */}
                                                    <div
                                                        className="absolute h-full flex flex-col justify-center"
                                                        style={{
                                                            left: `${leftPercent}%`,
                                                            width: `${widthPercent}%`
                                                        }}
                                                    >
                                                        {/* Method and CSeq label above arrow */}
                                                        <div className="text-center pb-0.5">
                                                            <span
                                                                className={`text-[10px] font-bold font-mono px-1.5 py-0.5 rounded transition-colors ${
                                                                    msg.color === '#9333ea'
                                                                        ? 'text-purple-600 dark:text-purple-400 group-hover:bg-purple-50 dark:group-hover:bg-purple-950/40'
                                                                        : 'text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-950/40'
                                                                } ${isSelected ? 'ring-1 ring-current' : ''}`}
                                                            >
                                                                {msg.method}
                                                            </span>
                                                            <p className="text-[9px] text-slate-400 dark:text-zinc-500 font-mono scale-90">
                                                                {msg.cseq}
                                                            </p>
                                                        </div>

                                                        {/* Directed Line */}
                                                        <div className="relative flex items-center">
                                                            {/* SVG arrow line */}
                                                            <svg className="w-full h-3 overflow-visible">
                                                                <line
                                                                    x1={isLeftToRight ? '0' : '100%'}
                                                                    y1="6"
                                                                    x2={isLeftToRight ? '100%' : '0'}
                                                                    y2="6"
                                                                    stroke={msg.color}
                                                                    strokeWidth={isSelected ? '2.5' : '1.75'}
                                                                    strokeDasharray={msg.dashed ? '4 3' : 'none'}
                                                                />
                                                                {/* Arrowhead */}
                                                                <polygon
                                                                    points={
                                                                        isLeftToRight
                                                                            ? '96,2 100,6 96,10'
                                                                            : '4,2 0,6 4,10'
                                                                    }
                                                                    fill={msg.color}
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* RAW DATA TAB */
                            <div className="font-mono text-xs space-y-4">
                                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-zinc-800">
                                    <span className="text-slate-500 dark:text-zinc-400 text-xs">Full Packet Stream (PCAP Export Available)</span>
                                    <button
                                        onClick={() => handleCopy(LADDER_MESSAGES.map((m) => `[${m.time}] ${m.raw}`).join('\n\n'))}
                                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800 text-xs cursor-pointer"
                                    >
                                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                                        <span>{copied ? 'Copied' : 'Copy All'}</span>
                                    </button>
                                </div>
                                <pre className="p-4 rounded-xl bg-slate-50 dark:bg-black text-slate-800 dark:text-zinc-200 border border-slate-200 dark:border-zinc-800 overflow-x-auto text-xs leading-relaxed">
                                    {LADDER_MESSAGES.map((m) => `// ${m.time} | ${m.method}\n${m.raw}`).join('\n\n')}
                                </pre>
                            </div>
                        )}
                    </div>

                    {/* RIGHT PANE: REDACTED SIP MESSAGE INSPECTOR */}
                    <div className="w-full lg:w-[420px] bg-slate-50/60 dark:bg-[#070709] p-5 sm:p-6 flex flex-col shrink-0 overflow-y-auto">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-slate-400 dark:text-zinc-400 font-mono font-bold text-sm">{`{ }`}</span>
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
                                Redacted SIP message
                            </h3>
                        </div>

                        {selectedMessage ? (
                            <div className="space-y-4">
                                <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-between text-xs">
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white font-mono">{selectedMessage.method}</p>
                                        <p className="text-[11px] text-slate-400 dark:text-zinc-400 font-mono">Timestamp: {selectedMessage.time}</p>
                                    </div>
                                    <button
                                        onClick={() => handleCopy(selectedMessage.raw)}
                                        className="p-1.5 rounded-lg border border-slate-200 dark:border-zinc-700 text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                                        title="Copy message"
                                    >
                                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                                    </button>
                                </div>

                                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-black text-slate-800 dark:text-zinc-200 font-mono text-[11px] leading-relaxed overflow-x-auto border border-slate-200 dark:border-zinc-850">
                                    <pre className="whitespace-pre">{selectedMessage.raw}</pre>
                                </div>
                            </div>
                        ) : (
                            <div className="flex-1 flex flex-col items-center justify-center text-center p-8 text-slate-500 dark:text-zinc-400 text-xs font-medium">
                                <p className="leading-relaxed">
                                    Select an arrow or a message to inspect its redacted SIP headers and SDP.
                                </p>
                            </div>
                        )}
                    </div>

                </div>

            </div>
        </div>
    );
};

const DemoSIPTraces = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [activeTraceModal, setActiveTraceModal] = useState(null);

    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => setIsRefreshing(false), 500);
    };

    const filtered = initialTraces.filter((t) =>
        t.caller.includes(searchQuery) ||
        t.callee.includes(searchQuery) ||
        t.callId.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-5">
            {/* Header */}
            <div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                    SIP traces
                </h1>
                <p className="text-slate-700 text-xs sm:text-sm mt-1 font-medium">
                    Your latest 100 completed calls. When a newer call arrives, the oldest drops out of this view. Raw SIP is fetched from Homer on demand.
                </p>
            </div>

            {/* Warning Banner (matching screenshot with strong contrast) */}
            <div className="p-4 rounded-2xl bg-amber-100 border-2 border-amber-400 text-amber-950 text-xs flex items-start gap-3 shadow-xs">
                <AlertTriangle className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <p className="leading-relaxed font-semibold">
                    SIP signaling contains sensitive data. Authentication headers are redacted: Homer retention or packet loss may leave a trace incomplete.
                </p>
            </div>

            {/* Search Box - High Contrast */}
            <div className="bg-white rounded-2xl border-2 border-slate-300 p-4 shadow-sm max-w-xl">
                <label className="block text-[11px] uppercase font-black text-slate-800 mb-1.5">
                    Number / Call-ID
                </label>
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1 px-3 py-2 text-xs text-slate-950 font-bold placeholder-slate-500 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-mono"
                    />
                    <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-black shadow-sm inline-flex items-center gap-1.5 transition-all cursor-pointer">
                        <Search className="w-3.5 h-3.5" />
                        <span>Search</span>
                    </button>
                </div>
            </div>

            {/* Traces Table Container - High Contrast */}
            <div className="bg-white rounded-2xl border-2 border-slate-300 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b-2 border-slate-200 bg-slate-50">
                    <h3 className="text-sm font-black text-slate-950">
                        Calls
                    </h3>

                    <button
                        onClick={handleRefresh}
                        className="p-1.5 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-colors cursor-pointer"
                        title="Refresh traces"
                    >
                        <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-blue-600' : ''}`} />
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs whitespace-nowrap">
                        <thead className="bg-slate-100 text-slate-800 uppercase tracking-wider font-black text-[11px] border-b-2 border-slate-300">
                            <tr>
                                <th className="py-3.5 px-5">Started</th>
                                <th className="py-3.5 px-4">Customer</th>
                                <th className="py-3.5 px-4">Direction</th>
                                <th className="py-3.5 px-5">Caller → Callee</th>
                                <th className="py-3.5 px-4">CDR</th>
                                <th className="py-3.5 px-5 text-right">Trace</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y-2 divide-slate-100 font-mono">
                            {filtered.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                                    {/* Started */}
                                    <td className="py-4 px-5 text-slate-900 font-semibold">
                                        {item.started}
                                    </td>

                                    {/* Customer */}
                                    <td className="py-4 px-4 font-black text-slate-950">
                                        {item.customer}
                                    </td>

                                    {/* Direction */}
                                    <td className="py-4 px-4">
                                        <span className="font-black text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                                            {item.direction}
                                        </span>
                                    </td>

                                    {/* Caller -> Callee */}
                                    <td className="py-4 px-5 text-slate-950 font-black">
                                        <span>{item.caller}</span>
                                        <span className="text-slate-400 mx-2">→</span>
                                        <span className="text-blue-700">{item.callee}</span>
                                    </td>

                                    {/* CDR */}
                                    <td className="py-4 px-4 font-sans">
                                        <span className="text-xs font-black text-slate-700">
                                            {item.cdr}
                                        </span>
                                    </td>

                                    {/* Trace Action */}
                                    <td className="py-4 px-5 text-right font-sans">
                                        <button
                                            onClick={() => setActiveTraceModal(item)}
                                            className="text-xs font-black text-blue-700 hover:text-blue-900 hover:underline cursor-pointer"
                                        >
                                            Open trace
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Full SIP Signaling Trace Modal matching uploaded screenshot */}
            {activeTraceModal && (
                <SIPSignalingTraceModal
                    trace={activeTraceModal}
                    onClose={() => setActiveTraceModal(null)}
                />
            )}
        </div>
    );
};

export default DemoSIPTraces;
