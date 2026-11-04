import React, { useState } from 'react';
import {
    Wallet,
    CreditCard,
    Sparkles,
    TrendingUp,
    Clock,
    AlertTriangle,
    ArrowUp,
    ArrowDown,
    RefreshCw,
    SlidersHorizontal,
    Plus,
    X,
    Check
} from 'lucide-react';

const DemoWallet = ({ onNavigateTab, onOpenAddFunds, walletBalance = 50.00, transactions = [] }) => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [showManageCardsModal, setShowManageCardsModal] = useState(false);

    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => setIsRefreshing(false), 600);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">
                        Wallet
                    </h1>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1">
                        Manage your account balance and payment methods
                    </p>
                </div>

                <div className="flex items-center gap-2.5">
                    <button
                        onClick={onOpenAddFunds}
                        className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer"
                    >
                        <Plus className="w-4 h-4" />
                        <span>Add Funds</span>
                    </button>

                    <button
                        onClick={() => onNavigateTab('subscriptions')}
                        className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium px-3.5 py-2.5 rounded-xl border border-slate-200 shadow-xs transition-all cursor-pointer"
                    >
                        <CreditCard className="w-4 h-4 text-blue-600" />
                        <span>Subscriptions</span>
                    </button>

                    <button
                        onClick={() => setShowManageCardsModal(true)}
                        className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium px-3.5 py-2.5 rounded-xl border border-slate-200 shadow-xs transition-all cursor-pointer"
                    >
                        <CreditCard className="w-4 h-4 text-blue-600" />
                        <span>Manage Cards</span>
                    </button>
                </div>
            </div>

            {/* 4 Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Active Plan */}
                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center">
                            <Sparkles className="w-4 h-4" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                            Active Plan
                        </span>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 mb-2 uppercase">
                        pro
                    </h2>

                    <p className="text-xs font-semibold text-indigo-600 tracking-wide uppercase">
                        8 Extensions • 21 / 1200 Mins Used
                    </p>
                </div>

                {/* Current Balance */}
                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center">
                                <Wallet className="w-4 h-4" />
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                Current Balance
                            </span>
                        </div>
                        <button
                            onClick={handleRefresh}
                            className="text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                        >
                            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-blue-600' : ''}`} />
                        </button>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 mb-1">
                        ${walletBalance.toFixed(2)}
                    </h2>

                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                        <span>Credit Limit: <strong className="text-slate-800 font-bold">$1500.00</strong></span>
                    </div>

                    <div className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                        <AlertTriangle className="w-3 h-3 text-amber-600" />
                        <span>AUTO-RECHARGE: OFF</span>
                    </div>
                </div>

                {/* Daily Burn Rate */}
                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center">
                            <TrendingUp className="w-4 h-4" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                            Daily Burn Rate
                        </span>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 mb-2">
                        ~$0.00<span className="text-sm font-normal text-slate-500"> /day</span>
                    </h2>

                    <p className="text-xs font-medium text-slate-400 tracking-wide">
                        Based on last 7 days of activity
                    </p>
                </div>

                {/* Next Billing Date */}
                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center">
                            <Clock className="w-4 h-4" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                            Next Billing Date
                        </span>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 mb-2">
                        Nov 29, 2026
                    </h2>

                    <p className="text-xs font-semibold text-emerald-600 tracking-wide uppercase">
                        Recurring in 26 days
                    </p>
                </div>
            </div>

            {/* Transactions History Table */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/60">
                    <div>
                        <h3 className="text-sm font-bold text-slate-900">
                            Billing & Transaction History
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                            Recent charges, add-ons and payment transactions
                        </p>
                    </div>
                    <button
                        onClick={onOpenAddFunds}
                        className="text-xs font-bold text-blue-600 hover:text-blue-800 cursor-pointer"
                    >
                        + Add Funds
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                        <thead>
                            <tr className="border-b border-slate-100 bg-slate-50/40 text-slate-400 uppercase text-[10px] font-bold tracking-wider">
                                <th className="py-3 px-6">Reference ID</th>
                                <th className="py-3 px-4">Category</th>
                                <th className="py-3 px-4">Date</th>
                                <th className="py-3 px-4">Status</th>
                                <th className="py-3 px-6 text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {transactions.map((tx) => (
                                <tr key={tx.ref} className="hover:bg-slate-50/70 transition-colors">
                                    <td className="py-3.5 px-6 font-mono font-bold text-slate-800">
                                        {tx.ref}
                                    </td>
                                    <td className="py-3.5 px-4 font-medium text-slate-600">
                                        {tx.cat}
                                    </td>
                                    <td className="py-3.5 px-4 text-slate-500 font-medium">
                                        {tx.date}
                                    </td>
                                    <td className="py-3.5 px-4">
                                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold text-[10px]">
                                            {tx.status}
                                        </span>
                                    </td>
                                    <td className="py-3.5 px-6 text-right font-mono font-bold">
                                        <span className={tx.isNegative ? 'text-slate-800' : 'text-emerald-600'}>
                                            {tx.amt}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Manage Cards Modal */}
            {showManageCardsModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fade-in">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                                <CreditCard className="w-5 h-5 text-blue-600" />
                                <h3 className="text-sm font-bold text-slate-900">
                                    Stored Payment Methods
                                </h3>
                            </div>
                            <button
                                onClick={() => setShowManageCardsModal(false)}
                                className="text-slate-400 hover:text-slate-700 font-bold p-1 cursor-pointer"
                            >
                                &times;
                            </button>
                        </div>

                        <div className="space-y-3 mb-5 text-xs">
                            <div className="p-3.5 rounded-xl border border-blue-200 bg-blue-50/50 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-6 bg-slate-800 text-white font-bold text-[10px] rounded flex items-center justify-center">
                                        VISA
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-800">•••• •••• •••• 4242</p>
                                        <p className="text-[11px] text-slate-500 font-medium">Expires 12/28 • Primary</p>
                                    </div>
                                </div>
                                <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold text-[10px]">
                                    DEFAULT
                                </span>
                            </div>

                            <p className="text-[11px] text-slate-500">
                                In this demo sandbox, card transactions are simulated without real billing.
                            </p>
                        </div>

                        <div className="flex justify-end">
                            <button
                                onClick={() => setShowManageCardsModal(false)}
                                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold cursor-pointer"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DemoWallet;
