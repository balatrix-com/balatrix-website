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
    Target,
    ArrowUpRight,
    ArrowDownRight,
    PhoneIncoming,
    PhoneOutgoing
} from 'lucide-react';

const ANALYTICS_DATA = {
    'TODAY': {
        grossVolume: '284',
        grossVolumeTrend: '+14.2%',
        grossVolumeIsUp: true,
        grossVolumeSub: 'Total Call Requests Processed',
        inboundCalls: 198,
        outboundCalls: 86,

        conversionRate: '91.5%',
        conversionTrend: '+2.1%',
        conversionIsUp: true,
        conversionSub: 'Answer Rate (260 answered)',

        dropOffRate: '8.5%',
        dropOffTrend: '-2.1%',
        dropOffIsUp: false,
        dropOffSub: 'Missed / Rejected (24 calls)',

        talkTime: '3m 42s',
        talkTimeTrend: '+8.4%',
        talkTimeIsUp: true,
        talkTimeSub: 'Average Session Duration',

        chartTitle: 'Hourly Call Distribution (Today)',
        chartBars: [
            { label: '08:00', inH: 28, outH: 12, inVal: '14 in', outVal: '6 out' },
            { label: '10:00', inH: 72, outH: 38, inVal: '36 in', outVal: '19 out' },
            { label: '12:00', inH: 88, outH: 48, inVal: '44 in', outVal: '24 out' },
            { label: '14:00', inH: 96, outH: 52, inVal: '48 in', outVal: '26 out' },
            { label: '16:00', inH: 64, outH: 26, inVal: '32 in', outVal: '13 out' },
            { label: '18:00', inH: 34, outH: 14, inVal: '17 in', outVal: '7 out' },
            { label: '20:00', inH: 16, outH: 6, inVal: '8 in', outVal: '3 out' }
        ],

        channels: [
            { did: '+1 (800) 200-0120', name: 'Main Inbound Queue', calls: '186 calls', share: '65.5%', width: '65.5%' },
            { did: '+1 (800) 633-2545', name: 'Direct Sales Line', calls: '68 calls', share: '23.9%', width: '23.9%' },
            { did: '+1 (888) 412-9900', name: 'Executive Priority', calls: '30 calls', share: '10.6%', width: '10.6%' }
        ],

        summaryNote: 'Peak traffic observed between 13:00 - 15:00 UTC (96 peak calls/hr).'
    },

    'LAST 7 DAYS': {
        grossVolume: '1,942',
        grossVolumeTrend: '+8.6%',
        grossVolumeIsUp: true,
        grossVolumeSub: 'Total Call Requests Processed',
        inboundCalls: 1368,
        outboundCalls: 574,

        conversionRate: '89.4%',
        conversionTrend: '+1.4%',
        conversionIsUp: true,
        conversionSub: 'Answer Rate (1,736 answered)',

        dropOffRate: '10.6%',
        dropOffTrend: '-1.4%',
        dropOffIsUp: false,
        dropOffSub: 'Missed / Rejected (206 calls)',

        talkTime: '4m 18s',
        talkTimeTrend: '+3.2%',
        talkTimeIsUp: true,
        talkTimeSub: 'Average Session Duration',

        chartTitle: 'Daily Call Distribution (Last 7 Days)',
        chartBars: [
            { label: 'Mon', inH: 82, outH: 42, inVal: '230 in', outVal: '118 out' },
            { label: 'Tue', inH: 94, outH: 48, inVal: '264 in', outVal: '134 out' },
            { label: 'Wed', inH: 98, outH: 52, inVal: '275 in', outVal: '146 out' },
            { label: 'Thu', inH: 90, outH: 44, inVal: '252 in', outVal: '124 out' },
            { label: 'Fri', inH: 78, outH: 36, inVal: '218 in', outVal: '102 out' },
            { label: 'Sat', inH: 32, outH: 14, inVal: '90 in', outVal: '38 out' },
            { label: 'Sun', inH: 22, outH: 8, inVal: '62 in', outVal: '22 out' }
        ],

        channels: [
            { did: '+1 (800) 200-0120', name: 'Main Inbound Queue', calls: '1,262 calls', share: '65.0%', width: '65.0%' },
            { did: '+1 (800) 633-2545', name: 'Direct Sales Line', calls: '468 calls', share: '24.1%', width: '24.1%' },
            { did: '+1 (888) 412-9900', name: 'Executive Priority', calls: '212 calls', share: '10.9%', width: '10.9%' }
        ],

        summaryNote: 'Busiest day: Wednesday (421 total calls processed across all 4 gateways).'
    },

    'LAST 30 DAYS': {
        grossVolume: '8,640',
        grossVolumeTrend: '+18.9%',
        grossVolumeIsUp: true,
        grossVolumeSub: 'Total Call Requests Processed',
        inboundCalls: 6048,
        outboundCalls: 2592,

        conversionRate: '88.8%',
        conversionTrend: '+3.7%',
        conversionIsUp: true,
        conversionSub: 'Answer Rate (7,672 answered)',

        dropOffRate: '11.2%',
        dropOffTrend: '-3.7%',
        dropOffIsUp: false,
        dropOffSub: 'Missed / Rejected (968 calls)',

        talkTime: '4m 06s',
        talkTimeTrend: '+5.1%',
        talkTimeIsUp: true,
        talkTimeSub: 'Average Session Duration',

        chartTitle: '5-Day Velocity Intervals (Past 30 Days)',
        chartBars: [
            { label: 'D 1-5', inH: 74, outH: 36, inVal: '940 in', outVal: '458 out' },
            { label: 'D 6-10', inH: 82, outH: 42, inVal: '1,040 in', outVal: '532 out' },
            { label: 'D 11-15', inH: 92, outH: 48, inVal: '1,168 in', outVal: '610 out' },
            { label: 'D 16-20', inH: 88, outH: 44, inVal: '1,118 in', outVal: '558 out' },
            { label: 'D 21-25', inH: 96, outH: 52, inVal: '1,220 in', outVal: '660 out' },
            { label: 'D 26-30', inH: 78, outH: 38, inVal: '990 in', outVal: '482 out' }
        ],

        channels: [
            { did: '+1 (800) 200-0120', name: 'Main Inbound Queue', calls: '5,650 calls', share: '65.4%', width: '65.4%' },
            { did: '+1 (800) 633-2545', name: 'Direct Sales Line', calls: '2,082 calls', share: '24.1%', width: '24.1%' },
            { did: '+1 (888) 412-9900', name: 'Executive Priority', calls: '908 calls', share: '10.5%', width: '10.5%' }
        ],

        summaryNote: 'Monthly SLA availability: 99.995% with zero carrier-side packet drop incidents.'
    }
};

const DemoAnalytics = () => {
    const [selectedRange, setSelectedRange] = useState('TODAY');
    const [isRefreshing, setIsRefreshing] = useState(false);

    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => setIsRefreshing(false), 500);
    };

    const currentData = ANALYTICS_DATA[selectedRange] || ANALYTICS_DATA['TODAY'];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-1.5 h-4 bg-blue-600 rounded-full"></span>
                        <span className="text-[11px] font-black uppercase tracking-widest text-slate-800 dark:text-zinc-200">
                            Operational Pulse
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight">
                            Analytics
                        </h1>
                        <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-900 dark:text-blue-300 font-mono text-xs font-black border border-blue-300 dark:border-blue-800 shadow-xs">
                            U1005
                        </span>
                    </div>
                </div>

                {/* Range Filters */}
                <div className="flex items-center gap-2">
                    <div className="flex items-center p-1 bg-white dark:bg-zinc-900 border border-slate-300 dark:border-zinc-700 rounded-xl text-xs font-bold shadow-xs">
                        {['TODAY', 'LAST 7 DAYS', 'LAST 30 DAYS'].map((range) => (
                            <button
                                key={range}
                                onClick={() => setSelectedRange(range)}
                                className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                                    selectedRange === range
                                        ? 'bg-blue-600 text-white shadow-xs font-black'
                                        : 'text-slate-700 dark:text-zinc-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 font-bold'
                                }`}
                            >
                                {range}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={handleRefresh}
                        className="p-2.5 rounded-xl border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 hover:text-slate-950 dark:hover:text-white transition-colors shadow-xs cursor-pointer"
                        title="Refresh analytics"
                    >
                        <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-blue-600' : ''}`} />
                    </button>
                </div>
            </div>

            {/* 4 Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Gross Volume */}
                <div className="relative overflow-hidden bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 p-5 shadow-xs">
                    <Phone className="absolute -bottom-4 -right-4 w-28 h-28 text-blue-600/[0.08] dark:text-blue-400/[0.05] pointer-events-none" />

                    <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50 flex items-center justify-center shadow-2xs">
                            <Phone className="w-4 h-4" />
                        </div>
                        <span className="inline-flex items-center gap-1 text-[11px] font-black text-emerald-950 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/50 px-2.5 py-0.5 rounded-md border border-emerald-300 dark:border-emerald-800/60">
                            <TrendingUp className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                            <span>{currentData.grossVolumeTrend}</span>
                        </span>
                    </div>

                    <p className="text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-zinc-400 mb-1">
                        Gross Volume
                    </p>
                    <h2 className="text-3xl font-black text-slate-950 dark:text-white mb-2">
                        {currentData.grossVolume}
                    </h2>
                    <p className="text-[11px] font-bold text-slate-600 dark:text-zinc-400">
                        {currentData.grossVolumeSub}
                    </p>
                </div>

                {/* Conversion */}
                <div className="relative overflow-hidden bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 p-5 shadow-xs">
                    <CheckCircle2 className="absolute -bottom-4 -right-4 w-28 h-28 text-emerald-600/[0.08] dark:text-emerald-400/[0.05] pointer-events-none" />

                    <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/50 flex items-center justify-center shadow-2xs">
                            <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="inline-flex items-center gap-1 text-[11px] font-black text-emerald-950 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/50 px-2.5 py-0.5 rounded-md border border-emerald-300 dark:border-emerald-800/60">
                            <TrendingUp className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                            <span>{currentData.conversionTrend}</span>
                        </span>
                    </div>

                    <p className="text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-zinc-400 mb-1">
                        Conversion
                    </p>
                    <h2 className="text-3xl font-black text-slate-950 dark:text-white mb-2">
                        {currentData.conversionRate}
                    </h2>
                    <p className="text-[11px] font-bold text-slate-600 dark:text-zinc-400">
                        {currentData.conversionSub}
                    </p>
                </div>

                {/* Drop-Off */}
                <div className="relative overflow-hidden bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 p-5 shadow-xs">
                    <Percent className="absolute -bottom-4 -right-4 w-28 h-28 text-rose-600/[0.08] dark:text-rose-400/[0.05] pointer-events-none" />

                    <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-900/50 flex items-center justify-center shadow-2xs">
                            <Percent className="w-4 h-4" />
                        </div>
                        <span className="inline-flex items-center gap-1 text-[11px] font-black text-emerald-950 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/50 px-2.5 py-0.5 rounded-md border border-emerald-300 dark:border-emerald-800/60">
                            <TrendingDown className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                            <span>{currentData.dropOffTrend}</span>
                        </span>
                    </div>

                    <p className="text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-zinc-400 mb-1">
                        Drop-Off
                    </p>
                    <h2 className="text-3xl font-black text-slate-950 dark:text-white mb-2">
                        {currentData.dropOffRate}
                    </h2>
                    <p className="text-[11px] font-bold text-slate-600 dark:text-zinc-400">
                        {currentData.dropOffSub}
                    </p>
                </div>

                {/* Talk Time */}
                <div className="relative overflow-hidden bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 p-5 shadow-xs">
                    <Clock className="absolute -bottom-4 -right-4 w-28 h-28 text-indigo-600/[0.08] dark:text-indigo-400/[0.05] pointer-events-none" />

                    <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900/50 flex items-center justify-center shadow-2xs">
                            <Clock className="w-4 h-4" />
                        </div>
                        <span className="inline-flex items-center gap-1 text-[11px] font-black text-emerald-950 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/50 px-2.5 py-0.5 rounded-md border border-emerald-300 dark:border-emerald-800/60">
                            <TrendingUp className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                            <span>{currentData.talkTimeTrend}</span>
                        </span>
                    </div>

                    <p className="text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-zinc-400 mb-1">
                        Talk Time
                    </p>
                    <h2 className="text-3xl font-black text-slate-950 dark:text-white mb-2">
                        {currentData.talkTime}
                    </h2>
                    <p className="text-[11px] font-bold text-slate-600 dark:text-zinc-400">
                        {currentData.talkTimeSub}
                    </p>
                </div>
            </div>

            {/* Bottom 2 Cards (Traffic Velocity & Channels) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* Traffic Velocity (2 cols) */}
                <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 p-6 shadow-xs flex flex-col justify-between">
                    <div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-zinc-800">
                            <div>
                                <h3 className="text-base font-black text-slate-950 dark:text-white">
                                    Traffic Velocity
                                </h3>
                                <p className="text-xs font-semibold text-slate-500 dark:text-zinc-400 mt-0.5">
                                    {currentData.chartTitle}
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/50 text-xs font-bold">
                                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                                    INBOUND ({currentData.inboundCalls})
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/50 text-xs font-bold">
                                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                                    OUTBOUND ({currentData.outboundCalls})
                                </span>
                            </div>
                        </div>

                        {/* Chart Bars with Live Heights and Value Badges */}
                        <div className="h-56 flex items-end justify-between gap-2 sm:gap-4 pt-10 px-2 pb-2 border-b border-slate-100 dark:border-zinc-800">
                            {currentData.chartBars.map((bar) => (
                                <div key={bar.label} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                                    {/* Tooltip on hover */}
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono bg-slate-900 text-white rounded px-1.5 py-0.5 whitespace-nowrap shadow-xs pointer-events-none mb-1">
                                        {bar.inVal} | {bar.outVal}
                                    </div>

                                    <div className="w-full max-w-[34px] flex items-end justify-center gap-1 h-40">
                                        <div
                                            className="w-1/2 bg-blue-600 hover:bg-blue-500 rounded-t-md transition-all duration-500 shadow-2xs cursor-pointer"
                                            style={{ height: `${bar.inH}%` }}
                                            title={`Inbound: ${bar.inVal}`}
                                        />
                                        <div
                                            className="w-1/2 bg-emerald-500 hover:bg-emerald-400 rounded-t-md transition-all duration-500 shadow-2xs cursor-pointer"
                                            style={{ height: `${bar.outH}%` }}
                                            title={`Outbound: ${bar.outVal}`}
                                        />
                                    </div>
                                    <span className="text-[11px] font-mono font-bold text-slate-700 dark:text-zinc-300">
                                        {bar.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400">
                        <span className="font-medium">{currentData.summaryNote}</span>
                        <span className="hidden sm:inline-block font-mono text-[11px] text-blue-600 dark:text-blue-400 font-semibold">
                            Auto-aggregates: {selectedRange}
                        </span>
                    </div>
                </div>

                {/* Top Channels */}
                <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 p-6 shadow-xs flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-zinc-800">
                            <div>
                                <h3 className="text-base font-black text-slate-950 dark:text-white">
                                    Channels
                                </h3>
                                <p className="text-xs font-semibold text-slate-500 dark:text-zinc-400 mt-0.5">
                                    Top performing DID routes
                                </p>
                            </div>
                            <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 flex items-center justify-center">
                                <Target className="w-4 h-4" />
                            </div>
                        </div>

                        <div className="space-y-3">
                            {currentData.channels.map((ch) => (
                                <div
                                    key={ch.did}
                                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-850/80 border border-slate-200 dark:border-zinc-800 transition-all hover:border-blue-300"
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <div>
                                            <p className="font-mono font-black text-slate-950 dark:text-white text-xs">
                                                {ch.did}
                                            </p>
                                            <p className="text-[11px] text-slate-500 dark:text-zinc-400 font-medium">
                                                {ch.name}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <span className="px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-blue-300 font-mono font-black text-[11px]">
                                                {ch.share}
                                            </span>
                                            <p className="text-[10px] text-slate-400 dark:text-zinc-500 font-mono mt-0.5">
                                                {ch.calls}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Visual distribution bar */}
                                    <div className="w-full bg-slate-200 dark:bg-zinc-700 rounded-full h-1.5 mt-2 overflow-hidden">
                                        <div
                                            className="bg-blue-600 rounded-full h-1.5 transition-all duration-500"
                                            style={{ width: ch.width }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 text-center">
                        <span className="text-[11px] text-slate-500 dark:text-zinc-400 font-medium">
                            Telemetry synchronized across all active PBX gateways
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DemoAnalytics;
