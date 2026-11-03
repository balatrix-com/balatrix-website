import React, { useState } from 'react';
import {
    RefreshCw,
    Activity,
    Smartphone,
    Globe,
    CheckCircle2,
    ShieldCheck
} from 'lucide-react';

const DemoExtensionStatus = () => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [showSimulatedActive, setShowSimulatedActive] = useState(false);

    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => setIsRefreshing(false), 600);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                        Extension Status
                    </h1>
                    <p className="text-slate-700 text-xs sm:text-sm mt-1 font-medium">
                        Real-time view of currently registered active extensions.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={handleRefresh}
                        className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 text-xs font-bold px-4 py-2.5 rounded-xl border border-slate-300 shadow-sm transition-all hover:border-slate-400 cursor-pointer"
                    >
                        <RefreshCw className={`w-3.5 h-3.5 text-slate-600 ${isRefreshing ? 'animate-spin text-blue-600' : ''}`} />
                        <span>Refresh Status</span>
                    </button>
                </div>
            </div>

            {/* Live Registrations Card Container - High Contrast */}
            <div className="bg-white rounded-2xl border-2 border-slate-300 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b-2 border-slate-200 bg-slate-50">
                    <div className="flex items-center gap-2.5">
                        <Activity className="w-4 h-4 text-blue-600" />
                        <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">
                            Live Registrations
                        </h3>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-black">
                        <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                        {showSimulatedActive ? '2 ACTIVE' : '0 ACTIVE'}
                    </span>
                </div>

                {/* Body Content */}
                {!showSimulatedActive ? (
                    <div className="p-16 text-center">
                        <p className="text-slate-900 text-base font-bold">
                            No active extensions found.
                        </p>
                        <p className="text-xs text-slate-600 mt-1 font-medium">
                            SIP endpoints register dynamically when softphones or desk phones come online.
                        </p>

                        <div className="mt-6">
                            <button
                                onClick={() => setShowSimulatedActive(true)}
                                className="inline-flex items-center gap-2 text-xs text-blue-700 hover:text-blue-900 font-black bg-blue-50 hover:bg-blue-100 px-4 py-2.5 rounded-xl transition-colors border border-blue-300 shadow-sm cursor-pointer"
                            >
                                <span>Simulate Registered WebRTC Endpoints</span>
                                <span>→</span>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="divide-y-2 divide-slate-100">
                        {/* Endpoint 1 */}
                        <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                            <div className="flex items-center gap-3.5">
                                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 border border-blue-300 flex items-center justify-center">
                                    <Smartphone className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <p className="font-black text-slate-950 text-sm font-mono">
                                            U100501 (Sales Representative)
                                        </p>
                                        <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-300 text-[10px] font-black">
                                            ONLINE
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-600 font-mono mt-0.5 font-medium">
                                        Client: Balatrix WebRTC Phone v2.1 • User-Agent: Chrome/Windows
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 text-xs text-slate-700 font-bold">
                                <span>NAT: 198.51.100.24:5060</span>
                                <span className="text-emerald-700 font-black">Ping: 14ms</span>
                            </div>
                        </div>

                        {/* Endpoint 2 */}
                        <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                            <div className="flex items-center gap-3.5">
                                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 border border-blue-300 flex items-center justify-center">
                                    <Smartphone className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <p className="font-black text-slate-950 text-sm font-mono">
                                            U100502 (Support Desk)
                                        </p>
                                        <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-300 text-[10px] font-black">
                                            ONLINE
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-600 font-mono mt-0.5 font-medium">
                                        Client: Yealink T46U SIP Phone • User-Agent: Yealink/v86
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 text-xs text-slate-700 font-bold">
                                <span>NAT: 203.0.113.88:5060</span>
                                <span className="text-emerald-700 font-black">Ping: 22ms</span>
                            </div>
                        </div>

                        <div className="p-4 bg-slate-50 text-center border-t border-slate-200">
                            <button
                                onClick={() => setShowSimulatedActive(false)}
                                className="text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
                            >
                                Reset to Default View (0 Active)
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DemoExtensionStatus;
