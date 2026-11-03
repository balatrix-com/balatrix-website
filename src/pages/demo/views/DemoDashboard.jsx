import React, { useState } from 'react';
import {
    ShieldCheck,
    Wallet,
    Phone,
    Mic,
    RefreshCw,
    TrendingUp,
    CreditCard,
    ArrowUpRight,
    ArrowDownLeft,
    CheckCircle2,
    Sliders,
    Layers
} from 'lucide-react';

const DemoDashboard = ({ onNavigateTab, onOpenAddFunds, walletBalance = 29.31, transactions = [] }) => {
    const [callRecordingEnabled, setCallRecordingEnabled] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => setIsRefreshing(false), 600);
    };

    return (
        <div className="space-y-6">
            {/* Top Welcome Banner */}
            <div className="relative overflow-hidden bg-gradient-to-r from-[#0d144b] via-[#121c63] to-[#0c1448] text-white rounded-3xl p-7 md:p-9 shadow-lg border-2 border-blue-800/60">
                {/* Background ambient lighting */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-indigo-500/15 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/30 text-blue-200 border border-blue-400/50 text-xs font-black uppercase tracking-wider mb-3">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span>PBX Tenant Administration Snapshot</span>
                        </div>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-white mb-2">
                            Welcome back, Alex
                        </h1>
                        <p className="text-slate-100 text-sm md:text-base leading-relaxed font-normal">
                            Command your telecom infrastructure with precision. Here is your system snapshot for today.
                        </p>
                    </div>

                    <div className="shrink-0">
                        <button
                            onClick={onOpenAddFunds}
                            className="inline-flex items-center gap-2 bg-white text-[#0d144b] hover:bg-blue-50 font-black text-sm px-5 py-3 rounded-xl shadow-md transition-all duration-200 hover:shadow-lg active:scale-95 cursor-pointer"
                        >
                            <Wallet className="w-4 h-4 text-blue-700" />
                            <span>Add Funds</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* 4 System Metric Cards (2x2 Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Card 1: System Health */}
                <div className="relative overflow-hidden bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-sm transition-shadow">
                    <ShieldCheck className="absolute -bottom-4 -right-4 w-32 h-32 text-blue-600/[0.08] pointer-events-none" />

                    <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shadow-xs">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold tracking-wide uppercase">
                            SAFE
                        </span>
                    </div>

                    <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                            System Health
                        </p>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                            Operational
                        </h2>
                    </div>
                </div>

                {/* Card 2: Available Balance */}
                <div className="relative overflow-hidden bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-sm transition-shadow">
                    <Wallet className="absolute -bottom-4 -right-4 w-32 h-32 text-blue-600/[0.08] pointer-events-none" />

                    <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shadow-xs">
                            <Wallet className="w-5 h-5" />
                        </div>
                        <button
                            onClick={handleRefresh}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                            title="Refresh balance"
                        >
                            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-blue-600' : ''}`} />
                        </button>
                    </div>

                    <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                            Available Balance
                        </p>
                        <div className="flex items-baseline gap-2 mb-2">
                            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                                ${walletBalance.toFixed(2)}
                            </h2>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-xs">
                            <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                                <span>Credit Limit: <strong className="text-slate-800 font-bold">$1500.00</strong></span>
                            </div>
                            <div className="flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                                <TrendingUp className="w-3.5 h-3.5" />
                                <span>Burn: ~$0.00/day</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 3: Free Minutes Usage */}
                <div className="relative overflow-hidden bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-sm transition-shadow">
                    <Phone className="absolute -bottom-4 -right-4 w-32 h-32 text-blue-600/[0.08] pointer-events-none" />

                    <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shadow-xs">
                            <Phone className="w-5 h-5" />
                        </div>
                    </div>

                    <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                            Free Minutes Usage
                        </p>
                        <div className="flex items-baseline gap-2 mb-3">
                            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                                21
                            </h2>
                            <span className="text-slate-500 font-bold text-sm">
                                / 1200 MIN
                            </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-slate-100 rounded-full h-2 mb-2 overflow-hidden border border-slate-200">
                            <div
                                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                                style={{ width: '1.8%' }}
                            />
                        </div>

                        <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                            <span>1.8% consumed</span>
                            <span>1179 mins left</span>
                        </div>
                    </div>
                </div>

                {/* Card 4: Global Settings */}
                <div className="relative overflow-hidden bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-sm transition-shadow">
                    <Mic className="absolute -bottom-4 -right-4 w-32 h-32 text-blue-600/[0.08] pointer-events-none" />

                    <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shadow-xs">
                            <Mic className="w-5 h-5" />
                        </div>

                        {/* Toggle Switch */}
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={callRecordingEnabled}
                                onChange={(e) => setCallRecordingEnabled(e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>

                    <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                            Global Settings
                        </p>
                        <h2 className="text-xl font-extrabold text-slate-900 mb-1">
                            Call Recording
                        </h2>
                        <p className="text-xs text-slate-600 font-medium">
                            Record all inbound and outbound calls
                        </p>
                    </div>
                </div>
            </div>

            {/* Recent Transactions Section */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/60">
                    <h3 className="text-sm font-bold text-slate-900">
                        Recent Transactions
                    </h3>
                    <button
                        onClick={() => onNavigateTab('wallet')}
                        className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors cursor-pointer"
                    >
                        <span>View all</span>
                        <span>→</span>
                    </button>
                </div>

                <div className="divide-y divide-slate-100">
                    {transactions.slice(0, 4).map((tx) => (
                        <div key={tx.ref} className="flex items-center justify-between px-6 py-3.5 hover:bg-slate-50 transition-colors">
                            <div className="flex items-center gap-3.5">
                                <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600">
                                    <CreditCard className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-900 font-mono">
                                        {tx.ref}
                                    </p>
                                    <p className="text-[11px] text-slate-500 font-medium">
                                        {tx.date} • {tx.cat}
                                    </p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className={`text-xs font-mono font-bold ${tx.isNegative ? 'text-slate-900' : 'text-emerald-600'}`}>
                                    {tx.amt}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DemoDashboard;
