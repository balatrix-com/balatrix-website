import React, { useState } from 'react';
import {
    CreditCard,
    RefreshCw,
    Box,
    Sparkles,
    Clock,
    CheckCircle2,
    Calendar,
    Layers,
    Check
} from 'lucide-react';

const DemoSubscriptions = () => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isSyncing, setIsSyncing] = useState(false);

    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => setIsRefreshing(false), 600);
    };

    const handleSync = () => {
        setIsSyncing(true);
        setTimeout(() => setIsSyncing(false), 700);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-blue-100 text-blue-700 border border-blue-300 flex items-center justify-center shrink-0 shadow-xs">
                        <CreditCard className="w-6 h-6" />
                    </div>
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                            Subscriptions Management
                        </h1>
                        <p className="text-slate-700 text-xs sm:text-sm mt-1 font-medium">
                            View and manage active tenant subscriptions and recurring services
                        </p>
                    </div>
                </div>

                <div>
                    <button
                        onClick={handleRefresh}
                        className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 text-xs font-bold px-4 py-2.5 rounded-xl border-2 border-slate-300 shadow-sm transition-all hover:border-slate-400 cursor-pointer"
                    >
                        <RefreshCw className={`w-3.5 h-3.5 text-slate-600 ${isRefreshing ? 'animate-spin text-blue-600' : ''}`} />
                        <span>Refresh Overview</span>
                    </button>
                </div>
            </div>

            {/* Primary Subscription Card - High Contrast */}
            <div className="bg-white rounded-2xl border-2 border-slate-300 shadow-sm p-6 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b-2 border-slate-200">
                    <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 border border-blue-300 flex items-center justify-center shrink-0 shadow-xs">
                            <CreditCard className="w-5 h-5" />
                        </div>
                        <div>
                            <h2 className="text-base font-black text-slate-950">
                                Subscription & Recurring Services
                            </h2>
                            <p className="text-xs font-semibold text-slate-600">
                                Manage active plan, recurring add-ons, and automated renewals
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={handleSync}
                        className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-slate-900 text-xs font-bold px-3.5 py-2 rounded-xl border border-slate-300 shadow-xs transition-all cursor-pointer"
                    >
                        <RefreshCw className={`w-3.5 h-3.5 text-slate-600 ${isSyncing ? 'animate-spin text-blue-600' : ''}`} />
                        <span>Sync Status</span>
                    </button>
                </div>

                {/* Subsection: Primary Subscription */}
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-4 h-4 text-blue-600" />
                        <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
                            Primary Subscription
                        </h3>
                    </div>

                    {/* Primary Subscription Table */}
                    <div className="overflow-x-auto border-2 border-slate-300 rounded-xl">
                        <table className="w-full text-left text-xs">
                            <thead className="bg-slate-100 text-slate-800 uppercase tracking-wider font-black text-[11px] border-b-2 border-slate-300">
                                <tr>
                                    <th className="py-3.5 px-4">Plan Name</th>
                                    <th className="py-3.5 px-4">Status</th>
                                    <th className="py-3.5 px-4">Limits & Resources</th>
                                    <th className="py-3.5 px-4">Billing Period / Dates</th>
                                    <th className="py-3.5 px-4">Auto-Renew</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-slate-100 bg-white">
                                <tr>
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 border border-blue-300 flex items-center justify-center">
                                                <Box className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="font-black text-slate-950 text-sm uppercase">pro</p>
                                                <p className="text-xs text-slate-600 font-mono font-bold">ID: starter_to_pro</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 border border-emerald-300 text-xs font-black">
                                            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                                            ACTIVE
                                        </span>
                                    </td>
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-2">
                                            <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-900 border border-slate-300 font-bold text-xs">
                                                8 Ext
                                            </span>
                                            <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-900 border border-slate-300 font-bold text-xs">
                                                1200 Mins
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4">
                                        <div>
                                            <p className="text-slate-700 font-semibold">Started: Oct 29, 2026</p>
                                            <p className="text-slate-950 font-black">Renews: Nov 29, 2026</p>
                                            <p className="text-xs text-amber-800 flex items-center gap-1 mt-0.5 font-bold">
                                                <Clock className="w-3.5 h-3.5 text-amber-600" />
                                                <span>27 days remaining</span>
                                            </p>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4">
                                        <span className="inline-flex items-center gap-1 text-xs font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                                            <Check className="w-3.5 h-3.5" />
                                            <span>Enabled</span>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Subsection: Active Add-ons */}
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <Layers className="w-4 h-4 text-blue-600" />
                        <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
                            Active Add-ons (2 items)
                        </h3>
                    </div>

                    <div className="overflow-x-auto border-2 border-slate-300 rounded-xl">
                        <table className="w-full text-left text-xs">
                            <thead className="bg-slate-100 text-slate-800 uppercase tracking-wider font-black text-[11px] border-b-2 border-slate-300">
                                <tr>
                                    <th className="py-3.5 px-4">Add-on Item</th>
                                    <th className="py-3.5 px-4">Quantity</th>
                                    <th className="py-3.5 px-4">Unit Cost</th>
                                    <th className="py-3.5 px-4">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-slate-100 bg-white">
                                <tr>
                                    <td className="py-4 px-4 font-mono font-black text-slate-950 text-xs">
                                        addon_1_did_number
                                    </td>
                                    <td className="py-4 px-4 font-black text-slate-950">1 DID</td>
                                    <td className="py-4 px-4 font-mono font-bold text-slate-800">$5.33 /mo</td>
                                    <td className="py-4 px-4">
                                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-950 border border-emerald-300 font-black text-[10px]">
                                            ACTIVE
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-4 font-mono font-black text-slate-950 text-xs">
                                        addon_1_extention
                                    </td>
                                    <td className="py-4 px-4 font-black text-slate-950">1 Seat</td>
                                    <td className="py-4 px-4 font-mono font-bold text-slate-800">$5.33 /mo</td>
                                    <td className="py-4 px-4">
                                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-950 border border-emerald-300 font-black text-[10px]">
                                            ACTIVE
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DemoSubscriptions;
