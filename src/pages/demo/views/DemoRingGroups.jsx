import React, { useState } from 'react';
import {
    Plus,
    Search,
    Users,
    Clock,
    PhoneCall,
    Layers,
    Trash2,
    Edit3,
    X,
    Check
} from 'lucide-react';

const initialGroups = [
    {
        id: 'rg-1',
        name: 'Sales Team',
        strategy: 'SEQUENTIAL',
        members: 2,
        ringTimeout: '20',
        extensions: ['U100501', 'U100502'],
        fallback: 'Voicemail'
    },
    {
        id: 'rg-2',
        name: 'Technical Support',
        strategy: 'SIMULTANEOUS',
        members: 3,
        ringTimeout: '15',
        extensions: ['U100503', 'U100504', 'U100506'],
        fallback: 'Extension (U100501)'
    },
    {
        id: 'rg-3',
        name: 'Billing & Accounts',
        strategy: 'ROUND-ROBIN',
        members: 2,
        ringTimeout: '30',
        extensions: ['U100505', 'U100507'],
        fallback: 'DID Forward'
    }
];

const ALL_EXTENSIONS = ['U100501', 'U100502', 'U100503', 'U100504', 'U100505', 'U100506', 'U100507', 'U100508', 'U100509'];

const STRATEGIES = ['SIMULTANEOUS', 'SEQUENTIAL', 'ROUND-ROBIN'];
const FALLBACKS = ['Voicemail', 'Extension (U100501)', 'DID Forward', 'IVR Menu', 'Hang Up'];

const strategyColor = (s) => {
    if (s === 'SIMULTANEOUS') return 'bg-emerald-100 text-emerald-900 border-emerald-300';
    if (s === 'SEQUENTIAL') return 'bg-blue-100 text-blue-900 border-blue-300';
    return 'bg-amber-100 text-amber-900 border-amber-300';
};

const EditModal = ({ group, onClose, onSave }) => {
    const [form, setForm] = useState({
        name: group.name,
        strategy: group.strategy,
        ringTimeout: group.ringTimeout,
        extensions: [...group.extensions],
        fallback: group.fallback
    });
    const [saved, setSaved] = useState(false);

    const toggleExt = (ext) => {
        setForm((f) =>
            f.extensions.includes(ext)
                ? { ...f, extensions: f.extensions.filter((e) => e !== ext) }
                : { ...f, extensions: [...f.extensions, ext] }
        );
    };

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => {
            onSave({ ...group, ...form, members: form.extensions.length });
        }, 600);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border-2 border-slate-300 max-h-[90vh] overflow-y-auto">
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-5 pb-3 border-b-2 border-slate-200">
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 border border-blue-300 flex items-center justify-center">
                            <Edit3 className="w-4 h-4" />
                        </div>
                        <h3 className="text-base font-black text-slate-950">Edit Ring Group</h3>
                    </div>
                    <button onClick={onClose} className="text-slate-500 hover:text-slate-950 text-xl font-black cursor-pointer p-1">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="space-y-4 text-xs">
                    {/* Group Name */}
                    <div>
                        <label className="block text-slate-800 font-bold mb-1.5 uppercase tracking-wide text-[11px]">Group Name</label>
                        <input
                            type="text"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-950 font-bold focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                        />
                    </div>

                    {/* Ring Strategy */}
                    <div>
                        <label className="block text-slate-800 font-bold mb-1.5 uppercase tracking-wide text-[11px]">Ring Strategy</label>
                        <div className="grid grid-cols-3 gap-2">
                            {STRATEGIES.map((s) => (
                                <button
                                    key={s}
                                    onClick={() => setForm({ ...form, strategy: s })}
                                    className={`py-2 px-2 rounded-xl border-2 font-black text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
                                        form.strategy === s
                                            ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                                            : 'bg-slate-50 text-slate-700 border-slate-300 hover:border-blue-400'
                                    }`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                        <p className="mt-1.5 text-[11px] text-slate-500 font-medium">
                            {form.strategy === 'SIMULTANEOUS' && 'All extensions ring at the same time. First to answer wins.'}
                            {form.strategy === 'SEQUENTIAL' && 'Extensions ring one by one in tiered order until answered.'}
                            {form.strategy === 'ROUND-ROBIN' && 'Calls are distributed evenly across all extensions in rotation.'}
                        </p>
                    </div>

                    {/* Ring Timeout */}
                    <div>
                        <label className="block text-slate-800 font-bold mb-1.5 uppercase tracking-wide text-[11px]">
                            Ring Timeout — <span className="text-blue-700">{form.ringTimeout}s per extension</span>
                        </label>
                        <input
                            type="range"
                            min="5"
                            max="60"
                            step="5"
                            value={form.ringTimeout}
                            onChange={(e) => setForm({ ...form, ringTimeout: e.target.value })}
                            className="w-full accent-blue-600 cursor-pointer"
                        />
                        <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-0.5">
                            <span>5s</span><span>30s</span><span>60s</span>
                        </div>
                    </div>

                    {/* Extensions Toggle */}
                    <div>
                        <label className="block text-slate-800 font-bold mb-2 uppercase tracking-wide text-[11px]">Assigned Extensions</label>
                        <div className="flex flex-wrap gap-2">
                            {ALL_EXTENSIONS.map((ext) => (
                                <button
                                    key={ext}
                                    onClick={() => toggleExt(ext)}
                                    className={`px-3 py-1.5 rounded-lg border font-mono font-black text-xs transition-all cursor-pointer ${
                                        form.extensions.includes(ext)
                                            ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                                            : 'bg-slate-50 text-slate-700 border-slate-300 hover:border-blue-400'
                                    }`}
                                >
                                    {ext}
                                </button>
                            ))}
                        </div>
                        <p className="mt-1.5 text-[11px] text-slate-500 font-medium">{form.extensions.length} extension(s) selected</p>
                    </div>

                    {/* Fallback */}
                    <div>
                        <label className="block text-slate-800 font-bold mb-1.5 uppercase tracking-wide text-[11px]">Timeout / No-Answer Fallback</label>
                        <select
                            value={form.fallback}
                            onChange={(e) => setForm({ ...form, fallback: e.target.value })}
                            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-950 font-bold focus:outline-none focus:border-blue-500 transition-all"
                        >
                            {FALLBACKS.map((f) => <option key={f}>{f}</option>)}
                        </select>
                    </div>

                    {/* Info note */}
                    <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl text-blue-900">
                        <p className="font-black mb-0.5 text-[11px] uppercase tracking-wide">Live Preview Mode</p>
                        <p className="text-[11px] text-blue-800 font-medium">
                            Changes here update the demo environment instantly. In production, routing updates propagate to all SIP gateways in under 2 seconds.
                        </p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-2 mt-6 pt-4 border-t-2 border-slate-200">
                    <button onClick={onClose} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl text-xs font-bold cursor-pointer">
                        Cancel
                    </button>
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

const DemoRingGroups = () => {
    const [ringGroups, setRingGroups] = useState(initialGroups);
    const [searchQuery, setSearchQuery] = useState('');
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [activeEditGroup, setActiveEditGroup] = useState(null);
    const [newName, setNewName] = useState('');
    const [newStrategy, setNewStrategy] = useState('SIMULTANEOUS');
    const [newTimeout, setNewTimeout] = useState('20');

    const filtered = ringGroups.filter(
        (rg) =>
            rg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            rg.strategy.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleDelete = (id) => setRingGroups(ringGroups.filter((g) => g.id !== id));

    const handleSaveEdit = (updated) => {
        setRingGroups(ringGroups.map((g) => (g.id === updated.id ? updated : g)));
        setActiveEditGroup(null);
    };

    const handleCreate = () => {
        if (!newName.trim()) return;
        setRingGroups([
            ...ringGroups,
            {
                id: `rg-${Date.now()}`,
                name: newName.trim(),
                strategy: newStrategy,
                members: 0,
                ringTimeout: `${newTimeout}`,
                extensions: [],
                fallback: 'Voicemail'
            }
        ]);
        setNewName('');
        setNewStrategy('SIMULTANEOUS');
        setNewTimeout('20');
        setIsCreateOpen(false);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">Ring Groups</h1>
                    <p className="text-slate-700 text-xs sm:text-sm mt-1 font-medium">
                        Group extensions together for simultaneous, sequential, or round-robin call routing.
                    </p>
                </div>
                <button
                    onClick={() => setIsCreateOpen(true)}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs px-5 py-2.5 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
                >
                    <Plus className="w-4 h-4" />
                    <span>Create Ring Group</span>
                </button>
            </div>

            {/* Search */}
            <div className="bg-white rounded-2xl border-2 border-slate-300 p-4 shadow-sm max-w-xl">
                <div className="relative">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search ring groups..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 text-xs text-slate-950 font-bold placeholder-slate-500 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                    />
                </div>
            </div>

            {/* Ring Groups Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 max-w-5xl">
                {filtered.map((group) => (
                    <div
                        key={group.id}
                        className="bg-white rounded-2xl border-2 border-slate-300 shadow-sm p-6 hover:shadow-md transition-all flex flex-col justify-between"
                    >
                        <div>
                            {/* Card Header */}
                            <div className="flex items-start justify-between mb-4 pb-2 border-b-2 border-slate-200 gap-2">
                                <h3 className="text-sm font-black text-slate-950 leading-tight">{group.name}</h3>
                                <span className={`px-2.5 py-1 rounded-full border text-[10px] font-black tracking-wider uppercase shrink-0 ${strategyColor(group.strategy)}`}>
                                    {group.strategy}
                                </span>
                            </div>

                            {/* Details */}
                            <div className="space-y-2.5 text-xs mb-5">
                                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                                    <span className="font-black uppercase tracking-wider text-[11px] text-slate-700 flex items-center gap-1.5">
                                        <Users className="w-3.5 h-3.5 text-slate-500" />Members
                                    </span>
                                    <span className="font-black text-slate-950">{group.members} Agents</span>
                                </div>
                                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                                    <span className="font-black uppercase tracking-wider text-[11px] text-slate-700 flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5 text-slate-500" />Timeout
                                    </span>
                                    <span className="font-black text-slate-950 font-mono">{group.ringTimeout}s</span>
                                </div>
                                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                                    <span className="font-black uppercase tracking-wider text-[11px] text-slate-700">Fallback</span>
                                    <span className="font-bold text-slate-700 text-[11px]">{group.fallback}</span>
                                </div>
                                <div>
                                    <span className="block font-black uppercase tracking-wider text-[11px] text-slate-700 mb-2">Extensions</span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {group.extensions.length === 0 && (
                                            <span className="text-slate-500 text-[11px] italic">None assigned</span>
                                        )}
                                        {group.extensions.map((ext) => (
                                            <span
                                                key={ext}
                                                className="inline-flex items-center px-2 py-1 rounded-lg bg-blue-100 text-blue-900 border border-blue-300 font-mono text-[11px] font-black"
                                            >
                                                {ext}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2 pt-3 border-t-2 border-slate-100">
                            <button
                                onClick={() => setActiveEditGroup(group)}
                                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-300 hover:border-blue-400 hover:text-blue-700 text-slate-900 hover:bg-blue-50 text-xs font-bold transition-colors cursor-pointer"
                            >
                                <Edit3 className="w-3.5 h-3.5" />
                                <span>Edit Group</span>
                            </button>
                            <button
                                onClick={() => handleDelete(group.id)}
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
            {activeEditGroup && (
                <EditModal
                    group={activeEditGroup}
                    onClose={() => setActiveEditGroup(null)}
                    onSave={handleSaveEdit}
                />
            )}

            {/* Create Modal */}
            {isCreateOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border-2 border-slate-300">
                        <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-slate-200">
                            <h3 className="text-base font-black text-slate-950">Create Ring Group</h3>
                            <button onClick={() => setIsCreateOpen(false)} className="text-slate-500 hover:text-slate-950 text-2xl font-black cursor-pointer">
                                &times;
                            </button>
                        </div>

                        <div className="space-y-4 mb-6 text-xs">
                            <div>
                                <label className="block text-slate-800 font-bold mb-1.5">Group Name</label>
                                <input
                                    type="text"
                                    placeholder="e.g., Billing & Accounts Team"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-950 font-bold focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-slate-800 font-bold mb-1.5">Ring Strategy</label>
                                <select
                                    value={newStrategy}
                                    onChange={(e) => setNewStrategy(e.target.value)}
                                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-950 font-bold"
                                >
                                    {STRATEGIES.map((s) => <option key={s}>{s}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block text-slate-800 font-bold mb-1.5">Ring Timeout — {newTimeout}s</label>
                                <input type="range" min="5" max="60" step="5" value={newTimeout}
                                    onChange={(e) => setNewTimeout(e.target.value)}
                                    className="w-full accent-blue-600 cursor-pointer"
                                />
                            </div>
                            <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl text-blue-900">
                                <p className="font-black mb-0.5">Tiered Failover</p>
                                <p className="text-[11px] text-blue-800 font-medium">
                                    If no agent answers within the ring timeout, calls route automatically to fallback voicemail or overflow queue.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-end gap-2">
                            <button onClick={() => setIsCreateOpen(false)} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl text-xs font-bold cursor-pointer">
                                Cancel
                            </button>
                            <button onClick={handleCreate} className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-black cursor-pointer shadow-sm">
                                Save Group
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DemoRingGroups;
