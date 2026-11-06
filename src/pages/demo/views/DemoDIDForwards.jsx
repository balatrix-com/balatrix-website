import React, { useState } from 'react';
import {
    Plus,
    Search,
    PhoneForwarded,
    Phone,
    Edit3,
    Trash2,
    X,
    Check,
    ArrowLeft,
    Save
} from 'lucide-react';

const initialForwards = [
    {
        id: '2',
        name: 'Executive Mobile Forward',
        destination: '+1 (555) 456-7892',
        rawDestination: '+15554567892',
        created: '10/29/2026'
    },
    {
        id: '1',
        name: 'Emergency Support Hotline',
        destination: '+1 (555) 321-4780',
        rawDestination: '+15553214780',
        created: '10/29/2026'
    },
    {
        id: '3',
        name: 'After-Hours On-Call Line',
        destination: '+1 (555) 789-0011',
        rawDestination: '+15557890011',
        created: '10/31/2026'
    }
];

/**
 * Dedicated Page: Create / Edit DID Forward exactly matching uploaded screenshot
 */
const CreateDIDForwardView = ({ onBack, onSave, initialData }) => {
    const [friendlyName, setFriendlyName] = useState(initialData?.name || '');
    const [destinationNumber, setDestinationNumber] = useState(initialData?.rawDestination || '');
    const [isSaved, setIsSaved] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!friendlyName.trim() || !destinationNumber.trim()) return;

        const formatted = destinationNumber
            .replace(/[^\d+]/g, '')
            .replace(/(\+1)(\d{3})(\d{3})(\d{4})/, '+1 ($2) $3-$4');

        onSave({
            id: initialData?.id || String(Date.now()),
            name: friendlyName.trim(),
            rawDestination: destinationNumber.trim(),
            destination: formatted || destinationNumber.trim(),
            created: initialData?.created || new Date().toLocaleDateString('en-US')
        });

        setIsSaved(true);
        setTimeout(() => {
            onBack();
        }, 200);
    };

    return (
        <div className="space-y-4 max-w-4xl">
            {/* Top Back Navigation Link */}
            <div>
                <button
                    onClick={onBack}
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to DID Forwards</span>
                </button>
            </div>

            {/* Main Form Container Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 dark:border-zinc-850 shadow-xs overflow-hidden">
                <form onSubmit={handleSubmit}>
                    {/* Header: Title and Subtitle with light divider */}
                    <div className="p-7 sm:p-8 border-b border-slate-100 dark:border-zinc-850">
                        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                            {initialData ? 'Edit DID Forward' : 'Create DID Forward'}
                        </h1>
                        <p className="text-slate-600 dark:text-zinc-300 text-xs sm:text-sm mt-1 font-medium">
                            Configure an external number destination that can be used by DIDs.
                        </p>
                    </div>

                    {/* Form Fields */}
                    <div className="p-7 sm:p-8 space-y-6">
                        {/* Friendly Name */}
                        <div>
                            <label className="block text-xs font-bold text-slate-900 dark:text-zinc-100 mb-2">
                                Friendly Name <span className="text-rose-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={friendlyName}
                                onChange={(e) => setFriendlyName(e.target.value)}
                                placeholder="e.g. CEO Mobile"
                                required
                                className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-slate-950 dark:text-white font-semibold text-sm focus:outline-none focus:border-blue-600 transition-all placeholder:text-slate-400 dark:placeholder:text-zinc-600 shadow-2xs"
                            />
                            <p className="text-xs text-slate-600 dark:text-zinc-400 mt-1.5 font-medium">
                                A name to identify this forward in the dashboard.
                            </p>
                        </div>

                        {/* Destination Number */}
                        <div>
                            <label className="block text-xs font-bold text-slate-900 dark:text-zinc-100 mb-2">
                                Destination Number <span className="text-rose-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={destinationNumber}
                                onChange={(e) => setDestinationNumber(e.target.value)}
                                placeholder="e.g. +15551234567"
                                required
                                className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-slate-950 dark:text-white font-semibold text-sm focus:outline-none focus:border-blue-600 transition-all placeholder:text-slate-400 dark:placeholder:text-zinc-600 shadow-2xs font-mono"
                            />
                            <p className="text-xs text-slate-600 dark:text-zinc-400 mt-1.5 font-medium">
                                The external phone number receiving the call (E.164 format recommended).
                            </p>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-5 sm:px-8 border-t border-slate-200 dark:border-zinc-800 flex items-center justify-end gap-3 bg-white dark:bg-zinc-900">
                        <button
                            type="button"
                            onClick={onBack}
                            className="px-6 py-2.5 rounded-xl border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-850 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 font-bold text-xs shadow-2xs transition-colors cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs shadow-sm hover:shadow transition-all inline-flex items-center gap-2 cursor-pointer"
                        >
                            <Save className="w-4 h-4" />
                            <span>{isSaved ? 'Saved!' : 'Save Forward'}</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const DemoDIDForwards = () => {
    const [forwards, setForwards] = useState(initialForwards);
    const [searchQuery, setSearchQuery] = useState('');
    const [isCreating, setIsCreating] = useState(false);
    const [activeEditItem, setActiveEditItem] = useState(null);

    const handleDelete = (id) => setForwards(forwards.filter((f) => f.id !== id));

    const handleSaveForward = (forwardData) => {
        const exists = forwards.some((f) => f.id === forwardData.id);
        if (exists) {
            setForwards(forwards.map((f) => (f.id === forwardData.id ? forwardData : f)));
        } else {
            setForwards([forwardData, ...forwards]);
        }
        setIsCreating(false);
        setActiveEditItem(null);
    };

    // Dedicated Page View Mode for Create
    if (isCreating) {
        return (
            <CreateDIDForwardView
                onBack={() => setIsCreating(false)}
                onSave={handleSaveForward}
            />
        );
    }

    // Dedicated Page View Mode for Edit
    if (activeEditItem) {
        return (
            <CreateDIDForwardView
                initialData={activeEditItem}
                onBack={() => setActiveEditItem(null)}
                onSave={handleSaveForward}
            />
        );
    }

    const filtered = forwards.filter(
        (f) =>
            f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            f.destination.includes(searchQuery) ||
            f.rawDestination.includes(searchQuery)
    );

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">DID Forwards</h1>
                    <p className="text-slate-700 text-xs sm:text-sm mt-1 font-medium">Manage external call forwarding destinations</p>
                </div>
                <button
                    onClick={() => setIsCreating(true)}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs px-5 py-2.5 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
                >
                    <Plus className="w-4 h-4" />
                    <span>Create Forward</span>
                </button>
            </div>

            {/* Search */}
            <div className="bg-white rounded-2xl border-2 border-slate-300 p-4 shadow-sm max-w-xl">
                <div className="relative">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search forwards..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 text-xs text-slate-950 font-bold placeholder-slate-500 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                    />
                </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 max-w-5xl">
                {filtered.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-2xl border-2 border-slate-300 shadow-sm p-6 hover:shadow-md transition-all flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-start gap-3.5 mb-5">
                                <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-800 border border-amber-300 flex items-center justify-center shrink-0 shadow-xs">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-black text-slate-950 leading-tight">{item.name}</h3>
                                    <p className="text-xs font-mono font-bold text-slate-600 mt-0.5">ID: {item.id}</p>
                                </div>
                            </div>

                            <div className="space-y-3 text-xs mb-6">
                                <div className="flex items-center justify-between pb-2.5 border-b border-slate-200">
                                    <span className="font-bold text-slate-700">Destination:</span>
                                    <span className="font-mono font-black text-slate-950 text-sm">{item.rawDestination}</span>
                                </div>
                                <div className="flex items-center justify-between pb-2.5 border-b border-slate-200">
                                    <span className="font-bold text-slate-700">Created:</span>
                                    <span className="font-mono font-bold text-slate-800">{item.created}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 pt-3 border-t-2 border-slate-100">
                            <button
                                onClick={() => setActiveEditItem(item)}
                                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-300 hover:border-blue-400 hover:text-blue-700 text-slate-900 hover:bg-blue-50 text-xs font-bold transition-colors cursor-pointer"
                            >
                                <Edit3 className="w-3.5 h-3.5" />
                                <span>Edit</span>
                            </button>
                            <button
                                onClick={() => handleDelete(item.id)}
                                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-rose-300 hover:border-rose-400 text-rose-700 hover:bg-rose-50 text-xs font-bold transition-colors cursor-pointer"
                            >
                                <Trash2 className="w-3.5 h-3.5 text-rose-600" />
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DemoDIDForwards;
