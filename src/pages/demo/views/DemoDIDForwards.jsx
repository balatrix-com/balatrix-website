import React, { useState } from 'react';
import {
    Plus,
    Search,
    PhoneForwarded,
    Phone,
    Edit3,
    Trash2,
    X,
    Check
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

const EditForwardModal = ({ item, onClose, onSave }) => {
    const [name, setName] = useState(item.name);
    const [destination, setDestination] = useState(item.rawDestination);
    const [saved, setSaved] = useState(false);
    const [error, setError] = useState('');

    const handleSave = () => {
        if (!name.trim()) { setError('Label is required.'); return; }
        if (!/^\+?[\d\s\-()]{7,}$/.test(destination.trim())) { setError('Enter a valid E.164 or local number.'); return; }
        setError('');
        setSaved(true);
        setTimeout(() => {
            const formatted = destination.replace(/[^\d+]/g, '').replace(/(\+1)(\d{3})(\d{3})(\d{4})/, '+1 ($2) $3-$4');
            onSave({ ...item, name: name.trim(), rawDestination: destination.trim(), destination: formatted });
        }, 600);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border-2 border-slate-300">
                <div className="flex items-center justify-between mb-5 pb-3 border-b-2 border-slate-200">
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 border border-amber-300 flex items-center justify-center">
                            <Edit3 className="w-4 h-4" />
                        </div>
                        <h3 className="text-base font-black text-slate-950">Edit DID Forward</h3>
                    </div>
                    <button onClick={onClose} className="text-slate-500 hover:text-slate-950 cursor-pointer p-1">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="space-y-4 text-xs mb-6">
                    <div>
                        <label className="block text-slate-800 font-bold mb-1.5 uppercase tracking-wide text-[11px]">Forward Label / Description</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g., Regional Mobile Cell"
                            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-950 font-bold focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-slate-800 font-bold mb-1.5 uppercase tracking-wide text-[11px]">PSTN / E.164 Destination Number</label>
                        <input
                            type="text"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            placeholder="+15551234567"
                            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-950 font-bold font-mono focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                        />
                    </div>
                    {error && (
                        <p className="text-rose-700 font-bold text-[11px] bg-rose-50 border border-rose-200 rounded-lg px-3 py-2">{error}</p>
                    )}
                    <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl text-blue-900">
                        <p className="font-black mb-0.5">Carrier Forwarding Policy</p>
                        <p className="text-[11px] text-blue-800 font-medium">
                            External calls follow the tenant rate card for outbound leg minutes. Changes propagate within 2 seconds.
                        </p>
                    </div>
                </div>

                <div className="flex justify-end gap-2 pt-4 border-t-2 border-slate-200">
                    <button onClick={onClose} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl text-xs font-bold cursor-pointer">Cancel</button>
                    <button
                        onClick={handleSave}
                        className={`px-5 py-2 rounded-xl text-xs font-black cursor-pointer shadow-sm transition-all inline-flex items-center gap-2 ${
                            saved ? 'bg-emerald-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}
                    >
                        {saved ? <Check className="w-3.5 h-3.5" /> : <Edit3 className="w-3.5 h-3.5" />}
                        {saved ? 'Saved!' : 'Save Changes'}
                    </button>
                </div>
            </div>
        </div>
    );
};

const DemoDIDForwards = () => {
    const [forwards, setForwards] = useState(initialForwards);
    const [searchQuery, setSearchQuery] = useState('');
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [activeEditItem, setActiveEditItem] = useState(null);
    const [newName, setNewName] = useState('');
    const [newDest, setNewDest] = useState('');

    const handleDelete = (id) => setForwards(forwards.filter((f) => f.id !== id));

    const handleSaveEdit = (updated) => {
        setForwards(forwards.map((f) => (f.id === updated.id ? updated : f)));
        setActiveEditItem(null);
    };

    const handleCreate = () => {
        if (!newName.trim() || !newDest.trim()) return;
        setForwards([
            ...forwards,
            {
                id: String(Date.now()),
                name: newName.trim(),
                destination: newDest.trim(),
                rawDestination: newDest.trim(),
                created: new Date().toLocaleDateString('en-US')
            }
        ]);
        setNewName('');
        setNewDest('');
        setIsCreateOpen(false);
    };

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
                    onClick={() => setIsCreateOpen(true)}
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

            {/* Edit Modal */}
            {activeEditItem && (
                <EditForwardModal
                    item={activeEditItem}
                    onClose={() => setActiveEditItem(null)}
                    onSave={handleSaveEdit}
                />
            )}

            {/* Create Modal */}
            {isCreateOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border-2 border-slate-300">
                        <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-slate-200">
                            <h3 className="text-base font-black text-slate-950">Create DID Forward</h3>
                            <button onClick={() => setIsCreateOpen(false)} className="text-slate-500 hover:text-slate-950 text-2xl font-black cursor-pointer">&times;</button>
                        </div>
                        <div className="space-y-4 mb-6 text-xs">
                            <div>
                                <label className="block text-slate-800 font-bold mb-1.5">Forward Label / Description</label>
                                <input
                                    type="text"
                                    placeholder="e.g., Regional Mobile Cell"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-950 font-bold focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-slate-800 font-bold mb-1.5">PSTN / E.164 Destination Number</label>
                                <input
                                    type="text"
                                    placeholder="+15551234567"
                                    value={newDest}
                                    onChange={(e) => setNewDest(e.target.value)}
                                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-950 font-bold font-mono focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl text-blue-900">
                                <p className="font-black mb-0.5">Carrier Forwarding Policy</p>
                                <p className="text-[11px] text-blue-800 font-medium">External calls follow the tenant rate card for outbound leg minutes.</p>
                            </div>
                        </div>
                        <div className="flex justify-end gap-2">
                            <button onClick={() => setIsCreateOpen(false)} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl text-xs font-bold cursor-pointer">Cancel</button>
                            <button onClick={handleCreate} className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-black cursor-pointer shadow-sm">Save Forward</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DemoDIDForwards;
