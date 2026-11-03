import React, { useState } from 'react';
import {
    Phone,
    Layers,
    Hash,
    CheckCircle2,
    Search,
    SlidersHorizontal,
    RefreshCw,
    Sliders,
    ArrowRight,
    Users,
    PhoneForwarded
} from 'lucide-react';

const initialNumbers = [
    {
        id: 1,
        number: '+1 (800) 633-2545',
        raw: '+18006332545',
        type: 'Local',
        status: 'Active',
        cost: '$2.00 /mo',
        routing: 'Ring Group',
        targetName: 'Main Sales Queue #101'
    },
    {
        id: 2,
        number: '+1 (800) 032-9824',
        raw: '+18000329824',
        type: 'Local',
        status: 'Active',
        cost: '$2.00 /mo',
        routing: 'Ring Group',
        targetName: 'Technical Support Team'
    },
    {
        id: 3,
        number: '+1 (800) 789-2451',
        raw: '+18007892451',
        type: 'Toll Free',
        status: 'ASSIGNED',
        cost: '$2.00 /mo',
        routing: 'Extension',
        targetName: 'Ext 1005 (Alex Morgan)'
    },
    {
        id: 4,
        number: '+1 (800) 200-0120',
        raw: '+18002000120',
        type: 'Toll Free',
        status: 'ASSIGNED',
        cost: '$2.00 /mo',
        routing: 'Extension',
        targetName: 'Ext 1002 (Reception Desk)'
    }
];

const DemoPhoneNumbers = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedType, setSelectedType] = useState('All');
    const [statusFilter, setStatusFilter] = useState('All');
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [activeConfigureItem, setActiveConfigureItem] = useState(null);

    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => setIsRefreshing(false), 500);
    };

    const filteredNumbers = initialNumbers.filter((item) => {
        const matchesSearch =
            item.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.raw.includes(searchQuery) ||
            item.routing.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesType =
            selectedType === 'All'
                ? true
                : selectedType === 'Local'
                ? item.type === 'Local'
                : item.type === 'Toll Free';

        const matchesStatus =
            statusFilter === 'All'
                ? true
                : item.status.toLowerCase() === statusFilter.toLowerCase();

        return matchesSearch && matchesType && matchesStatus;
    });

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                        Phone Numbers
                    </h1>
                    <p className="text-slate-700 text-xs sm:text-sm mt-1 font-medium">
                        Unified management for Local DIDs and Toll-Free numbers with inbound routing rules.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3.5 py-1.5 rounded-xl border border-slate-300">
                        Available Balance: <strong className="text-slate-950 font-black">$29.31</strong>
                    </span>

                    <button
                        onClick={handleRefresh}
                        className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-slate-900 text-xs font-bold px-3.5 py-1.5 rounded-xl border-2 border-slate-300 shadow-xs transition-all cursor-pointer"
                    >
                        <RefreshCw className={`w-3.5 h-3.5 text-slate-600 ${isRefreshing ? 'animate-spin text-blue-600' : ''}`} />
                        <span>Refresh</span>
                    </button>
                </div>
            </div>

            {/* 4 Stat Cards - High Contrast */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Total Numbers */}
                <div className="bg-white rounded-2xl border-2 border-slate-300 p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-black uppercase tracking-wider text-slate-800">
                            Total Numbers
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 border border-blue-300 flex items-center justify-center shadow-xs">
                            <Layers className="w-4 h-4" />
                        </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-950" style={{ color: '#090d16' }}>
                        {initialNumbers.length}
                    </h2>
                </div>

                {/* Local DIDs */}
                <div className="bg-white rounded-2xl border-2 border-slate-300 p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-black uppercase tracking-wider text-slate-800">
                            Local Numbers
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 border border-blue-300 flex items-center justify-center shadow-xs">
                            <Phone className="w-4 h-4" />
                        </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-950" style={{ color: '#090d16' }}>
                        2
                    </h2>
                </div>

                {/* Toll Free */}
                <div className="bg-white rounded-2xl border-2 border-slate-300 p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-black uppercase tracking-wider text-slate-800">
                            Toll Free
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 border border-blue-300 flex items-center justify-center shadow-xs">
                            <Hash className="w-4 h-4" />
                        </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-950" style={{ color: '#090d16' }}>
                        2
                    </h2>
                </div>

                {/* Active Routing */}
                <div className="bg-white rounded-2xl border-2 border-slate-300 p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-black uppercase tracking-wider text-slate-800">
                            Active Routing
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center justify-center shadow-xs">
                            <CheckCircle2 className="w-4 h-4" />
                        </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-emerald-700">
                        100%
                    </h2>
                </div>
            </div>

            {/* Filter Pills and Search */}
            <div className="bg-white rounded-2xl border-2 border-slate-300 p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search by number or destination..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 text-xs text-slate-950 font-bold placeholder-slate-500 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                    />
                </div>

                <div className="flex items-center gap-2">
                    {['All', 'Local', 'Toll Free'].map((t) => (
                        <button
                            key={t}
                            onClick={() => setSelectedType(t)}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                selectedType === t
                                    ? 'bg-slate-950 text-white font-black shadow-xs'
                                    : 'bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-300'
                            }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            {/* Numbers Table - High Contrast */}
            <div className="bg-white rounded-2xl border-2 border-slate-300 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                        <thead className="bg-slate-100 text-slate-800 uppercase tracking-wider font-black text-[11px] border-b-2 border-slate-300">
                            <tr>
                                <th className="py-3.5 px-5">Phone Number</th>
                                <th className="py-3.5 px-4">Type</th>
                                <th className="py-3.5 px-4">Status</th>
                                <th className="py-3.5 px-4">Routing Destination</th>
                                <th className="py-3.5 px-4">Monthly Cost</th>
                                <th className="py-3.5 px-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y-2 divide-slate-100 font-sans">
                            {filteredNumbers.map((row) => (
                                <tr key={row.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="py-4 px-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 border border-blue-300 flex items-center justify-center font-bold">
                                                <Phone className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="font-mono font-black text-slate-950 text-sm">
                                                    {row.number}
                                                </p>
                                                <p className="text-[11px] text-slate-600 font-mono font-semibold">
                                                    E.164: {row.raw}
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="py-4 px-4">
                                        <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-900 border border-blue-300 font-black text-[11px]">
                                            {row.type}
                                        </span>
                                    </td>

                                    <td className="py-4 px-4">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-950 border border-emerald-300 text-[11px] font-black uppercase">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                                            {row.status}
                                        </span>
                                    </td>

                                    <td className="py-4 px-4">
                                        <div>
                                            <span className="text-xs font-black text-slate-950">
                                                {row.routing}
                                            </span>
                                            <p className="text-[11px] text-slate-600 font-bold mt-0.5">
                                                {row.targetName}
                                            </p>
                                        </div>
                                    </td>

                                    <td className="py-4 px-4 font-mono font-bold text-slate-800 text-xs">
                                        {row.cost}
                                    </td>

                                    <td className="py-4 px-5 text-right">
                                        <button
                                            onClick={() => setActiveConfigureItem(row)}
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 hover:border-blue-600 bg-white hover:bg-blue-50 text-slate-900 hover:text-blue-800 text-xs font-bold transition-all shadow-xs cursor-pointer"
                                        >
                                            <Sliders className="w-3.5 h-3.5 text-blue-600" />
                                            <span>Routing</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Configure Routing Modal */}
            {activeConfigureItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border-2 border-slate-300">
                        <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-slate-200">
                            <div>
                                <h3 className="text-base font-black text-slate-950">
                                    Configure Inbound Routing
                                </h3>
                                <p className="text-xs text-slate-700 font-mono font-bold mt-0.5">
                                    DID: {activeConfigureItem.number}
                                </p>
                            </div>
                            <button
                                onClick={() => setActiveConfigureItem(null)}
                                className="text-slate-500 hover:text-slate-950 text-2xl font-black cursor-pointer"
                            >
                                &times;
                            </button>
                        </div>

                        <div className="space-y-4 mb-6 text-xs">
                            <div>
                                <label className="block text-slate-800 font-bold mb-1.5">
                                    Routing Destination Type
                                </label>
                                <select className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-950 font-bold">
                                    <option>Ring Group (Simultaneous/Sequential)</option>
                                    <option>Extension (Direct User Seat)</option>
                                    <option>IVR Auto-Attendant Tree</option>
                                    <option>External Forward (DID Forwards)</option>
                                </select>
                            </div>

                            <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl text-blue-900">
                                <p className="font-black mb-0.5">Carrier Inbound Switch</p>
                                <p className="text-[11px] text-blue-800 font-medium">
                                    Changes take effect across global SBC clusters in &lt; 200 milliseconds.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button
                                onClick={() => setActiveConfigureItem(null)}
                                className="px-5 py-2 bg-slate-950 hover:bg-slate-800 text-white rounded-xl text-xs font-black cursor-pointer"
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

export default DemoPhoneNumbers;
