import React, { useState } from 'react';
import {
    Search,
    Phone,
    Users,
    Check,
    Sliders,
    Layers,
    ArrowRight
} from 'lucide-react';

const initialExtensions = [
    {
        id: '1001',
        name: 'Extension from starter_to_pro',
        sipUsername: 'U100501',
        forwarding: 'OFF',
        groups: '1',
        type: 'Standard User'
    },
    {
        id: '1002',
        name: 'Extension from starter_to_pro2',
        sipUsername: 'U100502',
        forwarding: 'OFF',
        groups: '1',
        type: 'Standard User'
    },
    {
        id: '1003',
        name: 'Extension from starter_to_pro',
        sipUsername: 'U100503',
        forwarding: 'OFF',
        groups: 'NONE',
        type: 'Standard User'
    },
    {
        id: '1004',
        name: 'Extension from starter_to_pro',
        sipUsername: 'U100504',
        forwarding: 'OFF',
        groups: 'NONE',
        type: 'Standard User'
    },
    {
        id: '1005',
        name: 'Extension from starter_to_pro',
        sipUsername: 'U100505',
        forwarding: 'OFF',
        groups: 'NONE',
        type: 'Admin Seat'
    },
    {
        id: '1006',
        name: 'Extension from starter_to_pro',
        sipUsername: 'U100506',
        forwarding: 'OFF',
        groups: 'NONE',
        type: 'Standard User'
    },
    {
        id: '1007',
        name: 'Extension from starter_to_pro',
        sipUsername: 'U100507',
        forwarding: 'OFF',
        groups: 'NONE',
        type: 'Standard User'
    },
    {
        id: '1008',
        name: 'Extension from starter_to_pro',
        sipUsername: 'U100508',
        forwarding: 'OFF',
        groups: 'NONE',
        type: 'Standard User'
    },
    {
        id: '1009',
        name: 'Extension from addon_1_extention',
        sipUsername: 'U100509',
        forwarding: 'OFF',
        groups: 'NONE',
        type: 'Add-on Seat'
    }
];

const DemoExtensions = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeEditItem, setActiveEditItem] = useState(null);

    const filtered = initialExtensions.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.sipUsername.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                    Extensions
                </h1>
                <p className="text-slate-700 text-xs sm:text-sm mt-1 font-medium">
                    Manage phone system extensions and routing.
                </p>
            </div>

            {/* Search Bar - High Contrast */}
            <div className="bg-white rounded-2xl border-2 border-slate-300 p-4 shadow-sm max-w-xl">
                <div className="relative">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search extensions..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 text-xs text-slate-950 font-bold placeholder-slate-500 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                    />
                </div>
            </div>

            {/* Extensions Table - High Contrast */}
            <div className="bg-white rounded-2xl border-2 border-slate-300 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                        <thead className="bg-slate-100 text-slate-800 uppercase tracking-wider font-black text-[11px] border-b-2 border-slate-300">
                            <tr>
                                <th className="py-3.5 px-5">Extension #</th>
                                <th className="py-3.5 px-5">Name</th>
                                <th className="py-3.5 px-4">SIP Username</th>
                                <th className="py-3.5 px-4">Forwarding</th>
                                <th className="py-3.5 px-4">Groups</th>
                                <th className="py-3.5 px-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y-2 divide-slate-100 font-sans">
                            {filtered.map((row) => (
                                <tr key={row.sipUsername} className="hover:bg-slate-50 transition-colors">
                                    {/* Extension Number Pill */}
                                    <td className="py-4 px-5">
                                        <span className="inline-flex items-center px-3 py-1 rounded-lg bg-blue-100 text-blue-900 border border-blue-300 font-mono font-black text-xs shadow-xs">
                                            {row.sipUsername}
                                        </span>
                                    </td>

                                    {/* Name */}
                                    <td className="py-4 px-5">
                                        <span className="font-extrabold text-slate-950 text-xs">
                                            {row.name}
                                        </span>
                                    </td>

                                    {/* SIP Username */}
                                    <td className="py-4 px-4 font-mono font-bold text-slate-800 text-xs">
                                        {row.sipUsername}
                                    </td>

                                    {/* Forwarding */}
                                    <td className="py-4 px-4">
                                        <span className="text-xs font-black text-slate-600 uppercase">
                                            {row.forwarding}
                                        </span>
                                    </td>

                                    {/* Groups */}
                                    <td className="py-4 px-4">
                                        {row.groups === 'NONE' ? (
                                            <span className="text-xs font-bold text-slate-500 uppercase">
                                                NONE
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-100 text-emerald-900 border border-emerald-300 font-black text-xs">
                                                {row.groups}
                                            </span>
                                        )}
                                    </td>

                                    {/* Actions */}
                                    <td className="py-4 px-5 text-right">
                                        <button
                                            onClick={() => setActiveEditItem(row)}
                                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-300 hover:border-blue-600 bg-white hover:bg-blue-50 text-slate-900 hover:text-blue-800 text-xs font-bold transition-all shadow-sm cursor-pointer"
                                        >
                                            <Sliders className="w-3.5 h-3.5 text-blue-600" />
                                            <span>Configure</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}

                            {filtered.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="py-12 text-center text-slate-600 font-bold text-xs">
                                        No extensions matching your search query.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Configure Modal Simulation */}
            {activeEditItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border-2 border-slate-300">
                        <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-slate-200">
                            <div>
                                <h3 className="text-base font-black text-slate-950">
                                    Configure Extension
                                </h3>
                                <p className="text-xs text-slate-700 font-mono font-bold mt-0.5">
                                    SIP Username: {activeEditItem.sipUsername}
                                </p>
                            </div>
                            <button
                                onClick={() => setActiveEditItem(null)}
                                className="text-slate-500 hover:text-slate-950 text-2xl font-black cursor-pointer"
                            >
                                &times;
                            </button>
                        </div>

                        <div className="space-y-4 mb-6 text-xs">
                            <div>
                                <label className="block text-slate-800 font-bold mb-1.5">
                                    Display Name
                                </label>
                                <input
                                    type="text"
                                    defaultValue={activeEditItem.name}
                                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-950 font-bold"
                                />
                            </div>

                            <div>
                                <label className="block text-slate-800 font-bold mb-1.5">
                                    Voicemail Delivery
                                </label>
                                <div className="p-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 font-bold flex items-center justify-between">
                                    <span>Send Voicemail MP3 to Registered Email</span>
                                    <span className="text-emerald-700 font-black">Enabled</span>
                                </div>
                            </div>

                            <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl text-blue-900">
                                <p className="font-black mb-0.5">Sandbox Preview Mode</p>
                                <p className="text-[11px] text-blue-800 font-medium">
                                    In production, you can download autoconfig QR codes for iOS/Android softphones, set speed dials, and assign emergency E911 caller IDs.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => setActiveEditItem(null)}
                                className="px-5 py-2 bg-slate-950 hover:bg-slate-800 text-white rounded-xl text-xs font-black transition-colors cursor-pointer"
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

export default DemoExtensions;
