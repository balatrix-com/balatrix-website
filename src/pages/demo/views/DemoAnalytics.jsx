import React, { useState } from 'react';
import {
    BarChart3,
    TrendingUp,
    TrendingDown,
    Phone,
    CheckCircle2,
    Percent,
    Clock,
    RefreshCw,
    Activity,
    Target
} from 'lucide-react';

const DemoAnalytics = () => {
    const [selectedRange, setSelectedRange] = useState('TODAY');
    const [isRefreshing, setIsRefreshing] = useState(false);

    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => setIsRefreshing(false), 500);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-1.5 h-4 bg-blue-600 rounded-full"></span>
                        <span className="text-[11px] font-black uppercase tracking-widest text-slate-800">
                            Operational Pulse
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                            Analytics
                        </h1>
                        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-900 font-mono text-xs font-black border border-blue-300 shadow-xs">
                            U1005
                        </span>
                    </div>
                </div>

                {/* Range Filters */}
                <div className="flex items-center gap-2">
                    <div className="flex items-center p-1 bg-white border-2 border-slate-300 rounded-xl text-xs font-bold shadow-sm">
                        {['TODAY', 'LAST 7 DAYS', 'LAST 30 DAYS'].map((range) => (
                            <button
                                key={range}
                                onClick={() => setSelectedRange(range)}
                                className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                                    selectedRange === range
                                        ? 'bg-slate-950 text-white shadow-xs font-black'
                                        : 'text-slate-700 hover:text-slate-950 font-bold'
                                }`}
                            >
                                {range}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={handleRefresh}
                        className="p-2.5 rounded-xl border-2 border-slate-300 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-950 transition-colors shadow-sm cursor-pointer"
                        title="Refresh analytics"
                    >
                        <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-blue-600' : ''}`} />
                    </button>
                </div>
            </div>

            {/* 4 Stat Cards - High Contrast */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Gross Volume */}
                <div className="relative overflow-hidden bg-white rounded-2xl border-2 border-slate-300 p-5 shadow-sm">
                    <Phone className="absolute -bottom-4 -right-4 w-28 h-28 text-blue-600/[0.1] pointer-events-none" />

                    <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 border border-blue-300 flex items-center justify-center shadow-xs">
                            <Phone className="w-4 h-4" />
                        </div>
                        <span className="inline-flex items-center gap-1 text-[11px] font-black text-emerald-950 bg-emerald-100 px-2.5 py-0.5 rounded-md border border-emerald-300">
                            <TrendingUp className="w-3.5 h-3.5 text-emerald-700" />
                            <span>+12.5%</span>
                        </span>
                    </div>

                    <p className="text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1">
                        Gross Volume
                    </p>
                    <h2 className="text-3xl font-black text-slate-950 mb-2" style={{ color: '#090d16' }}>
                        0
                    </h2>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                        Total Call Requests Processed
                    </p>
                </div>

                {/* Conversion */}
                <div className="relative overflow-hidden bg-white rounded-2xl border-2 border-slate-300 p-5 shadow-sm">
                    <CheckCircle2 className="absolute -bottom-4 -right-4 w-28 h-28 text-blue-600/[0.1] pointer-events-none" />

                    <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 border border-blue-300 flex items-center justify-center shadow-xs">
                            <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="inline-flex items-center gap-1 text-[11px] font-black text-emerald-950 bg-emerald-100 px-2.5 py-0.5 rounded-md border border-emerald-300">
                            <TrendingUp className="w-3.5 h-3.5 text-emerald-700" />
                            <span>89.2%</span>
                        </span>
                    </div>

                    <p className="text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1">
                        Conversion
                    </p>
                    <h2 className="text-3xl font-black text-slate-950 mb-2" style={{ color: '#090d16' }}>
                        0
                    </h2>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                        Answer Rate Performance
                    </p>
                </div>

                {/* Drop-Off */}
                <div className="relative overflow-hidden bg-white rounded-2xl border-2 border-slate-300 p-5 shadow-sm">
                    <Percent className="absolute -bottom-4 -right-4 w-28 h-28 text-blue-600/[0.1] pointer-events-none" />

                    <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 border border-blue-300 flex items-center justify-center shadow-xs">
                            <Percent className="w-4 h-4" />
                        </div>
                        <span className="inline-flex items-center gap-1 text-[11px] font-black text-rose-950 bg-rose-100 px-2.5 py-0.5 rounded-md border border-rose-300">
                            <TrendingDown className="w-3.5 h-3.5 text-rose-700" />
                            <span>10.8%</span>
                        </span>
                    </div>

                    <p className="text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1">
                        Drop-Off
                    </p>
                    <h2 className="text-3xl font-black text-slate-950 mb-2" style={{ color: '#090d16' }}>
                        0
                    </h2>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                        Missed/Rejected Volume
                    </p>
                </div>

                {/* Talk Time */}
                <div className="relative overflow-hidden bg-white rounded-2xl border-2 border-slate-300 p-5 shadow-sm">
                    <Clock className="absolute -bottom-4 -right-4 w-28 h-28 text-blue-600/[0.1] pointer-events-none" />

                    <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 border border-blue-300 flex items-center justify-center shadow-xs">
                            <Clock className="w-4 h-4" />
                        </div>
                        <span className="inline-flex items-center gap-1 text-[11px] font-black text-rose-950 bg-rose-100 px-2.5 py-0.5 rounded-md border border-rose-300">
                            <TrendingDown className="w-3.5 h-3.5 text-rose-700" />
                            <span>-2.4%</span>
                        </span>
                    </div>

                    <p className="text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1">
                        Talk Time
                    </p>
                    <h2 className="text-3xl font-black text-slate-950 mb-2" style={{ color: '#090d16' }}>
                        0s
                    </h2>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                        Average Session Duration
                    </p>
                </div>
            </div>

            {/* Bottom 2 Cards (Traffic Velocity & Channels) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* Traffic Velocity (2 cols) */}
                <div className="lg:col-span-2 bg-white rounded-2xl border-2 border-slate-300 p-6 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b-2 border-slate-200">
                        <div>
                            <h3 className="text-base font-black text-slate-950">
                                Traffic Velocity
                            </h3>
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-600 mt-0.5">
                                Call distribution over time
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 border border-blue-300 text-xs font-black">
                                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                                INBOUND
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 border border-emerald-300 text-xs font-black">
                                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                                OUTBOUND
                            </span>
                        </div>
                    </div>

                    {/* Chart Bars Simulated with High Contrast */}
                    <div className="h-48 flex items-end justify-between gap-2 pt-8 px-2 border-b-2 border-slate-200">
                        {[
                            { label: '09:00', inH: '15%', outH: '5%' },
                            { label: '11:00', inH: '45%', outH: '20%' },
                            { label: '13:00', inH: '70%', outH: '35%' },
                            { label: '15:00', inH: '90%', outH: '60%' },
                            { label: '17:00', inH: '55%', outH: '25%' },
                            { label: '19:00', inH: '25%', outH: '10%' }
                        ].map((bar) => (
                            <div key={bar.label} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                                <div className="w-full max-w-[28px] flex items-end justify-center gap-1 h-full">
                                    <div
                                        className="w-1/2 bg-blue-600 rounded-t-md transition-all duration-500 shadow-xs"
                                        style={{ height: bar.inH }}
                                        title={`Inbound: ${bar.inH}`}
                                    />
                                    <div
                                        className="w-1/2 bg-emerald-500 rounded-t-md transition-all duration-500 shadow-xs"
                                        style={{ height: bar.outH }}
                                        title={`Outbound: ${bar.outH}`}
                                    />
                                </div>
                                <span className="text-[11px] font-mono font-bold text-slate-700">{bar.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Channels */}
                <div className="bg-white rounded-2xl border-2 border-slate-300 p-6 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-slate-200">
                            <div>
                                <h3 className="text-base font-black text-slate-950">
                                    Channels
                                </h3>
                                <p className="text-xs font-bold uppercase tracking-wider text-slate-600 mt-0.5">
                                    Top performing DIDs
                                </p>
                            </div>
                            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                                <Target className="w-4 h-4" />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="p-3 rounded-xl bg-slate-50 border border-slate-300 flex items-center justify-between">
                                <div>
                                    <p className="font-mono font-black text-slate-950 text-xs">+1 (800) 200-0120</p>
                                    <p className="text-[11px] text-slate-600 font-bold">Main Inbound Queue</p>
                                </div>
                                <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-900 font-mono font-black text-xs">
                                    68% Vol
                                </span>
                            </div>

                            <div className="p-3 rounded-xl bg-slate-50 border border-slate-300 flex items-center justify-between">
                                <div>
                                    <p className="font-mono font-black text-slate-950 text-xs">+1 (800) 633-2545</p>
                                    <p className="text-[11px] text-slate-600 font-bold">Direct Sales Line</p>
                                </div>
                                <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-900 font-mono font-black text-xs">
                                    32% Vol
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 border-t-2 border-slate-100 text-center">
                        <span className="text-xs text-slate-600 font-bold">Telemetry synchronized across all gateways</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DemoAnalytics;
