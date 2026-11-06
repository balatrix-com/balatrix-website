import React, { useState, useEffect } from 'react';
import {
    Activity,
    RefreshCw,
    PhoneCall,
    Headphones,
    Mic,
    PhoneOff,
    Radio,
    Volume2,
    ShieldAlert
} from 'lucide-react';

const INITIAL_CALLS = [
    {
        id: 'c1',
        caller: '+1 (555) 019-2834',
        dest: 'Ext 1001 — Sales Desk',
        direction: 'INBOUND',
        gateway: 'sip-east-01.balatrix.net',
        codec: 'G.711u',
        startSeconds: 247,
        status: 'ACTIVE'
    },
    {
        id: 'c2',
        caller: 'U100503 (Tech Support)',
        dest: '+1 (213) 778-4490',
        direction: 'OUTBOUND',
        gateway: 'sip-west-02.balatrix.net',
        codec: 'G.722',
        startSeconds: 85,
        status: 'ACTIVE'
    },
    {
        id: 'c3',
        caller: '+1 (555) 644-3310',
        dest: 'IVR Menu — Main Auto-Attendant',
        direction: 'INBOUND',
        gateway: 'sip-east-01.balatrix.net',
        codec: 'G.711a',
        startSeconds: 12,
        status: 'HOLDING'
    }
];

const directionColor = (d) =>
    d === 'INBOUND'
        ? 'bg-blue-100 text-blue-900 border-blue-300'
        : 'bg-amber-100 text-amber-900 border-amber-300';

const statusColor = (s) =>
    s === 'ACTIVE'
        ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
        : 'bg-slate-100 text-slate-700 border-slate-300';

const DemoCallMonitoring = () => {
    const [calls, setCalls] = useState(INITIAL_CALLS);
    const [seconds, setSeconds] = useState(() =>
        Object.fromEntries(INITIAL_CALLS.map((c) => [c.id, c.startSeconds]))
    );
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [pingLatency, setPingLatency] = useState(18);
    const [whisperActive, setWhisperActive] = useState(null);
    const [listenActive, setListenActive] = useState(null);

    // Tick all active call durations
    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prev) => {
                const next = { ...prev };
                calls.forEach((c) => { if (c.status === 'ACTIVE') next[c.id] = (next[c.id] || 0) + 1; });
                return next;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [calls]);

    const formatTimer = (total) => {
        const h = Math.floor(total / 3600);
        const m = Math.floor((total % 3600) / 60).toString().padStart(2, '0');
        const s = (total % 60).toString().padStart(2, '0');
        return h > 0 ? `${h}:${m}:${s}` : `${m}:${s}`;
    };

    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => {
            setIsRefreshing(false);
            setPingLatency(Math.floor(Math.random() * 8) + 14);
        }, 500);
    };

    const terminateCall = (id) => {
        setCalls((prev) => prev.filter((c) => c.id !== id));
        setWhisperActive((w) => (w === id ? null : w));
        setListenActive((l) => (l === id ? null : l));
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 border border-blue-300 flex items-center justify-center shadow-xs">
                            <Activity className="w-5 h-5" />
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">Live Call Monitoring</h1>
                        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 border border-emerald-300 text-xs font-black">
                            {calls.length} Active {calls.length === 1 ? 'Call' : 'Calls'}
                        </span>
                    </div>
                    <p className="text-slate-700 text-xs sm:text-sm mt-1 font-medium">Monitor and manage active calls in real-time</p>
                </div>

                <div className="flex items-center gap-2.5 text-xs">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-950 shadow-xs font-black">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
                        <span>CONNECTED</span>
                    </div>
                    <button
                        onClick={handleRefresh}
                        className="px-3 py-1.5 rounded-xl bg-white border-2 border-slate-300 text-slate-900 font-mono text-[11px] font-black shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
                        title="Measure WebSocket latency"
                    >
                        PING {pingLatency}ms
                    </button>
                    <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-red-950 text-white font-mono text-xs shadow-sm">
                        <span className="text-slate-400 font-sans text-xs">Admin Ext:</span>
                        <span className="font-black text-blue-300">U100510</span>
                    </div>
                </div>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
                {[
                    { label: 'Active Calls', value: calls.filter((c) => c.status === 'ACTIVE').length, color: 'emerald' },
                    { label: 'On Hold', value: calls.filter((c) => c.status === 'HOLDING').length, color: 'amber' },
                    { label: 'Inbound', value: calls.filter((c) => c.direction === 'INBOUND').length, color: 'blue' },
                    { label: 'Outbound', value: calls.filter((c) => c.direction === 'OUTBOUND').length, color: 'slate' }
                ].map((stat) => (
                    <div key={stat.label} className="bg-white rounded-2xl border-2 border-slate-300 p-4 shadow-xs text-center">
                        <p className={`text-2xl font-black text-${stat.color}-700`}>{stat.value}</p>
                        <p className="text-[11px] uppercase font-black tracking-wider text-slate-600 mt-1">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Live Call Stream Table */}
            <div className="bg-white rounded-2xl border-2 border-slate-300 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b-2 border-slate-200 bg-slate-50">
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">Active Call Streams</h3>
                    <button
                        onClick={handleRefresh}
                        className="inline-flex items-center gap-1.5 text-xs text-slate-700 hover:text-slate-950 font-bold transition-colors cursor-pointer"
                    >
                        <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-blue-600' : ''}`} />
                        <span>Refresh</span>
                    </button>
                </div>

                {calls.length === 0 ? (
                    <div className="p-16 text-center">
                        <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-700 border border-blue-300 flex items-center justify-center mx-auto mb-4">
                            <Activity className="w-8 h-8" />
                        </div>
                        <h4 className="text-lg font-black text-slate-950 mb-1">No active calls</h4>
                        <p className="text-xs text-slate-600 max-w-md mx-auto font-medium">Calls will appear here when initiated.</p>
                    </div>
                ) : (
                    <div className="divide-y-2 divide-slate-100">
                        {calls.map((call) => (
                            <div key={call.id} className={`p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4 ${call.status === 'HOLDING' ? 'bg-amber-50/40' : ''}`}>
                                {/* Call Info */}
                                <div className="flex items-start gap-4 min-w-0">
                                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-sm shrink-0 ${call.status === 'ACTIVE' ? 'bg-emerald-600 animate-pulse' : 'bg-amber-500'} text-white`}>
                                        <PhoneCall className="w-5 h-5" />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <span className="font-black text-slate-950 text-sm font-mono">
                                                {call.caller} → {call.dest}
                                            </span>
                                            <span className={`px-2 py-0.5 rounded-md border text-[10px] font-black uppercase ${statusColor(call.status)}`}>
                                                {call.status}
                                            </span>
                                            <span className={`px-2 py-0.5 rounded-md border text-[10px] font-black uppercase ${directionColor(call.direction)}`}>
                                                {call.direction}
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-700 font-mono mt-1 font-bold">
                                            ⏱ {formatTimer(seconds[call.id] || 0)}
                                            &nbsp;·&nbsp;{call.gateway}
                                            &nbsp;·&nbsp;{call.codec}
                                        </p>
                                        {whisperActive === call.id && (
                                            <p className="text-[11px] text-blue-700 font-bold mt-1 flex items-center gap-1">
                                                <Mic className="w-3 h-3" />Whisper mode active — speaking privately to agent
                                            </p>
                                        )}
                                        {listenActive === call.id && (
                                            <p className="text-[11px] text-emerald-700 font-bold mt-1 flex items-center gap-1">
                                                <Headphones className="w-3 h-3" />Listening silently — agent cannot hear you
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Controls */}
                                <div className="flex items-center gap-2 shrink-0">
                                    <button
                                        onClick={() => { setListenActive((l) => l === call.id ? null : call.id); setWhisperActive(null); }}
                                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold shadow-xs cursor-pointer transition-all ${listenActive === call.id ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white border-slate-300 hover:border-blue-600 text-slate-900'}`}
                                    >
                                        <Headphones className="w-3.5 h-3.5" />
                                        {listenActive === call.id ? 'Stop' : 'Listen'}
                                    </button>
                                    <button
                                        onClick={() => { setWhisperActive((w) => w === call.id ? null : call.id); setListenActive(null); }}
                                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold shadow-xs cursor-pointer transition-all ${whisperActive === call.id ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-slate-300 hover:border-blue-600 text-slate-900'}`}
                                    >
                                        <Mic className="w-3.5 h-3.5" />
                                        {whisperActive === call.id ? 'Stop' : 'Whisper'}
                                    </button>
                                    <button
                                        onClick={() => terminateCall(call.id)}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs shadow-xs cursor-pointer"
                                    >
                                        <PhoneOff className="w-3.5 h-3.5" />
                                        <span>Terminate</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Gateway Health */}
            <div className="bg-white rounded-2xl border-2 border-slate-300 shadow-sm p-6 max-w-3xl">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-800 mb-4">SIP Gateway Health</h3>
                <div className="space-y-3">
                    {[
                        { name: 'sip-east-01.balatrix.net', latency: 18, load: 62, status: 'HEALTHY' },
                        { name: 'sip-west-02.balatrix.net', latency: 24, load: 34, status: 'HEALTHY' },
                        { name: 'sip-eu-01.balatrix.net', latency: 71, load: 8, status: 'DEGRADED' }
                    ].map((gw) => (
                        <div key={gw.name} className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                            <div className="flex items-center gap-2.5">
                                <span className={`w-2.5 h-2.5 rounded-full ${gw.status === 'HEALTHY' ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`}></span>
                                <span className="font-mono font-bold text-slate-900 text-xs">{gw.name}</span>
                            </div>
                            <div className="flex items-center gap-4 text-xs">
                                <span className="font-mono font-bold text-slate-700">{gw.latency}ms</span>
                                <div className="w-24 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${gw.load > 80 ? 'bg-rose-500' : gw.load > 50 ? 'bg-amber-500' : 'bg-emerald-500'}`}
                                        style={{ width: `${gw.load}%` }}
                                    />
                                </div>
                                <span className={`px-2 py-0.5 rounded-md border text-[10px] font-black uppercase ${gw.status === 'HEALTHY' ? 'bg-emerald-100 text-emerald-900 border-emerald-300' : 'bg-amber-100 text-amber-900 border-amber-300'}`}>
                                    {gw.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DemoCallMonitoring;
