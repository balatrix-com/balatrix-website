import React, { useState } from 'react';
import {
    Search,
    Phone,
    Users,
    Check,
    Sliders,
    Layers,
    ArrowRight,
    Edit3,
    ArrowLeft,
    Hash
} from 'lucide-react';

const initialExtensions = [
    {
        id: '1001',
        name: 'Extension from starter_to_pro',
        sipUsername: 'U100501',
        sipPassword: 'password123',
        forwarding: 'OFF',
        groups: '1',
        type: 'Standard User',
        enableForwardAll: false,
        forwardAllNumber: '',
        enableForwardNoAnswer: false,
        forwardNoAnswerNumber: '',
        outboundCallerId: 'Default (System Caller ID)'
    },
    {
        id: '1002',
        name: 'Extension from starter_to_pro2',
        sipUsername: 'U100502',
        sipPassword: 'password456',
        forwarding: 'OFF',
        groups: '1',
        type: 'Standard User',
        enableForwardAll: false,
        forwardAllNumber: '',
        enableForwardNoAnswer: false,
        forwardNoAnswerNumber: '',
        outboundCallerId: 'Default (System Caller ID)'
    },
    {
        id: '1003',
        name: 'Extension from starter_to_pro',
        sipUsername: 'U100503',
        sipPassword: 'password789',
        forwarding: 'OFF',
        groups: 'NONE',
        type: 'Standard User',
        enableForwardAll: false,
        forwardAllNumber: '',
        enableForwardNoAnswer: false,
        forwardNoAnswerNumber: '',
        outboundCallerId: 'Default (System Caller ID)'
    },
    {
        id: '1004',
        name: 'Extension from starter_to_pro',
        sipUsername: 'U100504',
        sipPassword: 'password101',
        forwarding: 'OFF',
        groups: 'NONE',
        type: 'Standard User',
        enableForwardAll: false,
        forwardAllNumber: '',
        enableForwardNoAnswer: false,
        forwardNoAnswerNumber: '',
        outboundCallerId: 'Default (System Caller ID)'
    },
    {
        id: '1005',
        name: 'Extension from starter_to_pro',
        sipUsername: 'U100505',
        sipPassword: 'password102',
        forwarding: 'OFF',
        groups: 'NONE',
        type: 'Admin Seat',
        enableForwardAll: false,
        forwardAllNumber: '',
        enableForwardNoAnswer: false,
        forwardNoAnswerNumber: '',
        outboundCallerId: 'Default (System Caller ID)'
    },
    {
        id: '1006',
        name: 'Extension from starter_to_pro',
        sipUsername: 'U100506',
        sipPassword: 'password103',
        forwarding: 'OFF',
        groups: 'NONE',
        type: 'Standard User',
        enableForwardAll: false,
        forwardAllNumber: '',
        enableForwardNoAnswer: false,
        forwardNoAnswerNumber: '',
        outboundCallerId: 'Default (System Caller ID)'
    },
    {
        id: '1007',
        name: 'Extension from starter_to_pro',
        sipUsername: 'U100507',
        sipPassword: 'password104',
        forwarding: 'OFF',
        groups: 'NONE',
        type: 'Standard User',
        enableForwardAll: false,
        forwardAllNumber: '',
        enableForwardNoAnswer: false,
        forwardNoAnswerNumber: '',
        outboundCallerId: 'Default (System Caller ID)'
    },
    {
        id: '1008',
        name: 'Extension from starter_to_pro',
        sipUsername: 'U100508',
        sipPassword: 'password105',
        forwarding: 'OFF',
        groups: 'NONE',
        type: 'Standard User',
        enableForwardAll: false,
        forwardAllNumber: '',
        enableForwardNoAnswer: false,
        forwardNoAnswerNumber: '',
        outboundCallerId: 'Default (System Caller ID)'
    },
    {
        id: '1009',
        name: 'Extension from addon_1_extention',
        sipUsername: 'U100509',
        sipPassword: 'password106',
        forwarding: 'OFF',
        groups: 'NONE',
        type: 'Add-on Seat',
        enableForwardAll: false,
        forwardAllNumber: '',
        enableForwardNoAnswer: false,
        forwardNoAnswerNumber: '',
        outboundCallerId: 'Default (System Caller ID)'
    }
];

const OUTBOUND_CALLER_ID_OPTIONS = [
    'Default (System Caller ID)',
    '+1 (800) 633-2545 (Main Toll-Free)',
    '+1 (800) 032-9824 (Support Line)',
    '+1 (800) 200-0120 (Direct Line)'
];

/**
 * Dedicated Full-Page "Edit Extension" view matching user's screenshots
 */
const EditExtensionView = ({ ext, onBack, onSave }) => {
    const [name, setName] = useState(ext.name || '');
    const [extNumber, setExtNumber] = useState(ext.sipUsername || '');
    const [sipPassword, setSipPassword] = useState(ext.sipPassword || '123456');
    const [enableForwardAll, setEnableForwardAll] = useState(ext.enableForwardAll || false);
    const [forwardAllNumber, setForwardAllNumber] = useState(ext.forwardAllNumber || '');
    const [enableForwardNoAnswer, setEnableForwardNoAnswer] = useState(ext.enableForwardNoAnswer || false);
    const [forwardNoAnswerNumber, setForwardNoAnswerNumber] = useState(ext.forwardNoAnswerNumber || '');
    const [outboundCallerId, setOutboundCallerId] = useState(ext.outboundCallerId || 'Default (System Caller ID)');
    const [isSaved, setIsSaved] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            ...ext,
            name,
            sipUsername: extNumber,
            sipPassword,
            enableForwardAll,
            forwardAllNumber,
            enableForwardNoAnswer,
            forwardNoAnswerNumber,
            outboundCallerId,
            forwarding: enableForwardAll || enableForwardNoAnswer ? 'ON' : 'OFF'
        });
        setIsSaved(true);
        setTimeout(() => {
            onBack();
        }, 300);
    };

    return (
        <div className="space-y-6 max-w-5xl">
            {/* Header with back navigation button */}
            <div className="flex items-start gap-4">
                <button
                    onClick={onBack}
                    className="p-2 -ml-2 text-slate-400 hover:text-slate-800 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                    title="Go back"
                >
                    <ArrowLeft className="w-5 h-5 text-slate-500" />
                </button>
                <div>
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                        Edit Extension
                    </h1>
                    <p className="text-slate-500 dark:text-zinc-400 text-xs sm:text-sm mt-0.5">
                        Configure SIP account details and routing rules.
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. BASIC INFORMATION Card */}
                <div className="bg-white rounded-3xl border border-slate-200/90 dark:border-zinc-850 p-6 sm:p-8 shadow-xs">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="text-slate-400 font-mono text-sm">⚙</span>
                        <h2 className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-zinc-300">
                            BASIC INFORMATION
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Extension Number */}
                        <div>
                            <label className="block text-xs font-bold text-slate-800 dark:text-zinc-200 mb-2">
                                Extension Number <span className="text-rose-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={extNumber}
                                onChange={(e) => setExtNumber(e.target.value)}
                                className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/60 text-slate-900 dark:text-white font-medium text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                                placeholder="e.g. U100501"
                                required
                            />
                            <p className="text-[11px] text-slate-400 dark:text-zinc-500 mt-1.5">
                                3-10 alphanumeric characters (e.g., 1001, u1001)
                            </p>
                        </div>

                        {/* Name */}
                        <div>
                            <label className="block text-xs font-bold text-slate-800 dark:text-zinc-200 mb-2">
                                Name <span className="text-rose-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-900 dark:text-white font-medium text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                                placeholder="Extension Name"
                                required
                            />
                        </div>

                        {/* SIP Password */}
                        <div>
                            <label className="block text-xs font-bold text-slate-800 dark:text-zinc-200 mb-2">
                                SIP Password
                            </label>
                            <input
                                type="text"
                                value={sipPassword}
                                onChange={(e) => setSipPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-900 dark:text-white font-medium text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-mono"
                                placeholder="123456"
                            />
                            <p className="text-[11px] text-slate-400 dark:text-zinc-500 mt-1.5">
                                Password for device registration. Update to change.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2. CALL FORWARDING RULES Card */}
                <div className="bg-white rounded-3xl border border-slate-200/90 dark:border-zinc-850 p-6 sm:p-8 shadow-xs">
                    <div className="flex items-center gap-2 mb-6">
                        <Phone className="w-4 h-4 text-slate-400" />
                        <h2 className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-zinc-300">
                            CALL FORWARDING RULES
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {/* Enable Forward All */}
                        <div>
                            <label className="flex items-start gap-3 cursor-pointer select-none">
                                <input
                                    type="checkbox"
                                    checked={enableForwardAll}
                                    onChange={(e) => setEnableForwardAll(e.target.checked)}
                                    className="mt-0.5 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                                />
                                <div>
                                    <span className="text-xs font-bold text-slate-800 dark:text-zinc-200">
                                        Enable Forward All
                                    </span>
                                    <p className="text-[11px] text-slate-400 dark:text-zinc-500 mt-0.5">
                                        Immediately forward all incoming calls without ringing this extension.
                                    </p>
                                </div>
                            </label>
                            {enableForwardAll && (
                                <div className="mt-3 ml-7 max-w-sm">
                                    <input
                                        type="text"
                                        value={forwardAllNumber}
                                        onChange={(e) => setForwardAllNumber(e.target.value)}
                                        placeholder="Enter forwarding destination number"
                                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-blue-600"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="border-t border-slate-100 dark:border-zinc-800/60" />

                        {/* Enable Forward on No Answer */}
                        <div>
                            <label className="flex items-start gap-3 cursor-pointer select-none">
                                <input
                                    type="checkbox"
                                    checked={enableForwardNoAnswer}
                                    onChange={(e) => setEnableForwardNoAnswer(e.target.checked)}
                                    className="mt-0.5 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                                />
                                <div>
                                    <span className="text-xs font-bold text-slate-800 dark:text-zinc-200">
                                        Enable Forward on No Answer
                                    </span>
                                    <p className="text-[11px] text-slate-400 dark:text-zinc-500 mt-0.5">
                                        Forward calls if this extension is not answered within the timeout period.
                                    </p>
                                </div>
                            </label>
                            {enableForwardNoAnswer && (
                                <div className="mt-3 ml-7 max-w-sm">
                                    <input
                                        type="text"
                                        value={forwardNoAnswerNumber}
                                        onChange={(e) => setForwardNoAnswerNumber(e.target.value)}
                                        placeholder="Enter no-answer forwarding number"
                                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-blue-600"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* 3. OUTBOUND SETTINGS Card */}
                <div className="bg-white rounded-3xl border border-slate-200/90 dark:border-zinc-850 p-6 sm:p-8 shadow-xs">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="text-slate-400 font-bold text-sm">#</span>
                        <h2 className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-zinc-300">
                            OUTBOUND SETTINGS
                        </h2>
                    </div>

                    <div className="max-w-md">
                        <label className="block text-xs font-bold text-slate-800 dark:text-zinc-200 mb-2">
                            Outbound Caller ID
                        </label>
                        <select
                            value={outboundCallerId}
                            onChange={(e) => setOutboundCallerId(e.target.value)}
                            className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-900 dark:text-white font-medium text-sm focus:outline-none focus:border-blue-600 transition-all cursor-pointer shadow-2xs"
                        >
                            {OUTBOUND_CALLER_ID_OPTIONS.map((opt) => (
                                <option key={opt} value={opt}>
                                    {opt}
                                </option>
                            ))}
                        </select>
                        <p className="text-[11px] text-slate-400 dark:text-zinc-500 mt-1.5">
                            Phone number to display when making outbound calls.
                        </p>
                    </div>
                </div>

                {/* Form Footer Buttons */}
                <div className="flex items-center justify-end gap-3 pt-5 border-t border-slate-100 dark:border-zinc-850">
                    <button
                        type="button"
                        onClick={onBack}
                        className="px-6 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 font-bold text-xs shadow-2xs transition-colors cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-6 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-600 active:bg-blue-800 text-white font-bold text-xs shadow-sm hover:shadow transition-all cursor-pointer"
                    >
                        {isSaved ? 'Updated!' : 'Update Extension'}
                    </button>
                </div>
            </form>
        </div>
    );
};

const DemoExtensions = () => {
    const [extensionsList, setExtensionsList] = useState(initialExtensions);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeEditItem, setActiveEditItem] = useState(null);

    const handleSaveExtension = (updatedExt) => {
        setExtensionsList((prev) =>
            prev.map((e) => (e.sipUsername === updatedExt.sipUsername ? updatedExt : e))
        );
        setActiveEditItem(null);
    };

    if (activeEditItem) {
        return (
            <EditExtensionView
                ext={activeEditItem}
                onBack={() => setActiveEditItem(null)}
                onSave={handleSaveExtension}
            />
        );
    }

    const filtered = extensionsList.filter((item) =>
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
                                            className="w-8 h-8 rounded-lg border border-blue-500 dark:border-blue-400 bg-white dark:bg-white text-blue-500 dark:text-blue-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:hover:border-blue-500 shadow-xs hover:shadow-md active:scale-95 transition-all duration-150 cursor-pointer inline-flex items-center justify-center" title="Edit Extension"
                                        >
                                            <Edit3 className="w-4 h-4" />
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
        </div>
    );
};

export default DemoExtensions;
