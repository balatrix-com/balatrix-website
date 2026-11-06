import React, { useState } from 'react';
import {
    Plus,
    Search,
    Users,
    Clock,
    PhoneCall,
    Trash2,
    Edit3,
    ArrowLeft,
    Settings,
    GripVertical,
    Check,
    PhoneForwarded,
    HelpCircle
} from 'lucide-react';

const ALL_SYSTEM_MEMBERS = [
    { id: 'U100501', label: 'Extension from starter_to_pro' },
    { id: 'U100502', label: 'Extension from starter_to_pro2' },
    { id: 'U100503', label: 'Extension from starter_to_pro3' },
    { id: 'U100504', label: 'Extension from starter_to_pro4' },
    { id: 'U100505', label: 'Extension from starter_to_pro5' },
    { id: 'U100506', label: 'Extension from starter_to_pro6' },
    { id: 'U100507', label: 'Extension from starter_to_pro7' },
    { id: 'U100508', label: 'Extension from starter_to_pro8' },
    { id: 'U100509', label: 'Extension from add-on_1' }
];

const initialGroups = [
    {
        id: 'rg-1',
        name: 'sales team',
        strategy: 'Sequential (Hunt) - Ring in order',
        ringTimeout: '5',
        assignedMembers: [
            { id: 'U100501', label: 'Extension from starter_to_pro' },
            { id: 'U100502', label: 'Extension from starter_to_pro2' }
        ],
        afterTimeout: 'Hangup Call (Final Action)'
    },
    {
        id: 'rg-2',
        name: 'Technical Support',
        strategy: 'Simultaneous (Ring All)',
        ringTimeout: '15',
        assignedMembers: [
            { id: 'U100503', label: 'Extension from starter_to_pro3' },
            { id: 'U100504', label: 'Extension from starter_to_pro4' },
            { id: 'U100506', label: 'Extension from starter_to_pro6' }
        ],
        afterTimeout: 'Send to Voicemail'
    },
    {
        id: 'rg-3',
        name: 'Billing & Accounts',
        strategy: 'Round Robin',
        ringTimeout: '20',
        assignedMembers: [
            { id: 'U100505', label: 'Extension from starter_to_pro5' },
            { id: 'U100507', label: 'Extension from starter_to_pro7' }
        ],
        afterTimeout: 'Forward to External DID'
    }
];

const STRATEGY_OPTIONS = [
    'Sequential (Hunt) - Ring in order',
    'Simultaneous (Ring All)',
    'Round Robin',
    'Random'
];

const AFTER_TIMEOUT_OPTIONS = [
    'Hangup Call (Final Action)',
    'Send to Voicemail',
    'Forward to External DID',
    'Route to Main IVR',
    'Transfer to Operator'
];

/**
 * Dedicated Full-Page "Edit Ring Group" view exactly matching user screenshots
 */
const EditRingGroupView = ({ group, onBack, onSave }) => {
    const [name, setName] = useState(group.name);
    const [ringTimeout, setRingTimeout] = useState(group.ringTimeout || '5');
    const [strategy, setStrategy] = useState(group.strategy || 'Sequential (Hunt) - Ring in order');
    const [assignedMembers, setAssignedMembers] = useState(group.assignedMembers || []);
    const [afterTimeout, setAfterTimeout] = useState(group.afterTimeout || 'Hangup Call (Final Action)');
    const [isSaved, setIsSaved] = useState(false);

    // Compute available members to add that aren't already assigned
    const assignedIds = new Set(assignedMembers.map((m) => m.id));
    const availableMembers = ALL_SYSTEM_MEMBERS.filter((m) => !assignedIds.has(m.id));

    const handleAddMember = (member) => {
        setAssignedMembers([...assignedMembers, member]);
    };

    const handleRemoveMember = (id) => {
        setAssignedMembers(assignedMembers.filter((m) => m.id !== id));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsSaved(true);
        setTimeout(() => {
            onSave({
                ...group,
                name: name.trim() || group.name,
                ringTimeout,
                strategy,
                assignedMembers,
                afterTimeout
            });
        }, 500);
    };

    return (
        <div className="space-y-6 max-w-6xl animate-fade-in pb-12">
            {/* Top Page Header with Back Arrow */}
            <div className="flex items-start gap-3">
                <button
                    type="button"
                    onClick={onBack}
                    className="p-1.5 -ml-1 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer mt-0.5"
                    title="Return to Ring Groups"
                >
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <div>
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                        Edit Ring Group
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
                        Configure routing behavior and assignments.
                    </p>
                </div>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* 1. BASIC INFORMATION CARD */}
                <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 sm:p-7">
                    <div className="flex items-center gap-2 mb-6">
                        <Settings className="w-4 h-4 text-slate-400" />
                        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                            BASIC INFORMATION
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Group Name */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                Name <span className="text-rose-500">*</span>
                            </label>
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 font-medium focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                                placeholder="e.g. sales team"
                            />
                        </div>

                        {/* Ring Timeout */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                Ring Timeout (seconds)
                            </label>
                            <input
                                type="number"
                                min="1"
                                max="120"
                                value={ringTimeout}
                                onChange={(e) => setRingTimeout(e.target.value)}
                                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 font-medium focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                            />
                            <p className="text-[11px] text-slate-400 mt-1.5">
                                How long to ring before moving to next action.
                            </p>
                        </div>
                    </div>

                    {/* Ring Strategy */}
                    <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Ring Strategy <span className="text-rose-500">*</span>
                        </label>
                        <select
                            value={strategy}
                            onChange={(e) => setStrategy(e.target.value)}
                            className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 font-medium focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer"
                        >
                            {STRATEGY_OPTIONS.map((opt) => (
                                <option key={opt} value={opt}>
                                    {opt}
                                </option>
                            ))}
                        </select>
                        <p className="text-[11px] text-slate-400 mt-1.5">
                            {strategy.includes('Sequential') && 'Extensions ring one after another (Hunt Group).'}
                            {strategy.includes('Simultaneous') && 'All extensions in the group ring at the same time.'}
                            {strategy.includes('Round Robin') && 'Calls rotate evenly in cyclic order across active agents.'}
                            {strategy.includes('Random') && 'Calls are assigned randomly to available extensions.'}
                        </p>
                    </div>
                </div>

                {/* 2. ASSIGNED MEMBERS CARD */}
                <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 sm:p-7">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-slate-400" />
                            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                                ASSIGNED MEMBERS
                            </h2>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-[11px] font-bold text-slate-600 tracking-wider">
                            {assignedMembers.length} TOTAL
                        </span>
                    </div>

                    {/* Members Table */}
                    <div className="border-b border-slate-100 pb-2 mb-2">
                        <div className="grid grid-cols-12 text-[10px] font-bold text-slate-400 uppercase tracking-wider pb-2">
                            <div className="col-span-1 pl-6">#</div>
                            <div className="col-span-11 pl-2">EXTENSION</div>
                        </div>

                        {assignedMembers.length === 0 ? (
                            <div className="py-6 text-center text-xs text-slate-400 italic">
                                No members assigned. Click + below to add extensions.
                            </div>
                        ) : (
                            <div className="space-y-1">
                                {assignedMembers.map((member, idx) => (
                                    <div
                                        key={member.id}
                                        className="flex items-center py-2 px-2 hover:bg-slate-50/70 rounded-xl transition-colors group"
                                    >
                                        <div className="w-6 flex items-center justify-center text-slate-300">
                                            <GripVertical className="w-3.5 h-3.5 cursor-grab" />
                                        </div>
                                        <span className="w-8 text-xs text-slate-600 font-semibold pl-1">
                                            {idx + 1}
                                        </span>
                                        <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200/60 font-mono text-xs font-semibold mr-3">
                                            {member.id}
                                        </span>
                                        <span className="text-sm font-bold text-slate-800">
                                            {member.label}
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveMember(member.id)}
                                            className="ml-auto opacity-0 group-hover:opacity-100 text-slate-400 hover:text-rose-600 transition-opacity p-1 text-sm font-bold cursor-pointer"
                                            title="Remove member"
                                        >
                                            &times;
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* ADD MEMBERS Sub-section */}
                    <div className="mt-7">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3.5">
                            ADD MEMBERS
                        </h3>

                        {availableMembers.length === 0 ? (
                            <p className="text-xs text-slate-400 italic">
                                All available extensions are currently assigned to this ring group.
                            </p>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                {availableMembers.map((member) => (
                                    <div
                                        key={member.id}
                                        className="border border-slate-200/90 rounded-xl p-3 bg-white hover:border-blue-300 transition-all flex items-center justify-between shadow-2xs"
                                    >
                                        <div className="min-w-0 pr-2">
                                            <p className="text-xs font-bold text-slate-800 font-mono">
                                                {member.id}
                                            </p>
                                            <p
                                                className="text-[11px] text-slate-400 truncate mt-0.5"
                                                title={member.label}
                                            >
                                                {member.label.length > 20
                                                    ? member.label.slice(0, 20) + '...'
                                                    : member.label}
                                            </p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => handleAddMember(member)}
                                            className="w-7 h-7 rounded-lg border border-slate-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 text-slate-400 flex items-center justify-center transition-all cursor-pointer shrink-0"
                                            title={`Add ${member.id}`}
                                        >
                                            <Plus className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* 3. NO ANSWER HANDLING CARD */}
                <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 sm:p-7">
                    <div className="flex items-center gap-2 mb-5">
                        <PhoneCall className="w-4 h-4 text-slate-400" />
                        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                            NO ANSWER HANDLING
                        </h2>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-2">
                            After Timeout
                        </label>
                        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                            <select
                                value={afterTimeout}
                                onChange={(e) => setAfterTimeout(e.target.value)}
                                className="w-full lg:max-w-md px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 font-medium focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer"
                            >
                                {AFTER_TIMEOUT_OPTIONS.map((opt) => (
                                    <option key={opt} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                            <span className="text-xs text-slate-400 italic">
                                Calls that are not answered within the timeout period will be disconnected.
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="flex items-center justify-end gap-3 pt-3">
                    <button
                        type="button"
                        onClick={onBack}
                        className="px-6 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs cursor-pointer shadow-xs transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-6 py-2.5 rounded-xl bg-[#1c22d4] hover:bg-blue-700 text-white font-semibold text-xs cursor-pointer shadow-md transition-all active:scale-95 flex items-center gap-2"
                    >
                        {isSaved ? <Check className="w-4 h-4" /> : null}
                        <span>{isSaved ? 'Updated!' : 'Update Ring Group'}</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

const DemoRingGroups = () => {
    const [ringGroups, setRingGroups] = useState(initialGroups);
    const [searchQuery, setSearchQuery] = useState('');
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [activeEditGroup, setActiveEditGroup] = useState(null);
    const [newName, setNewName] = useState('');
    const [newStrategy, setNewStrategy] = useState('Sequential (Hunt) - Ring in order');
    const [newTimeout, setNewTimeout] = useState('5');

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
                ringTimeout: `${newTimeout}`,
                assignedMembers: [
                    { id: 'U100501', label: 'Extension from starter_to_pro' }
                ],
                afterTimeout: 'Hangup Call (Final Action)'
            }
        ]);
        setNewName('');
        setNewStrategy('Sequential (Hunt) - Ring in order');
        setNewTimeout('5');
        setIsCreateOpen(false);
    };

    // If a group is actively being edited, display the dedicated full Edit page
    if (activeEditGroup) {
        return (
            <EditRingGroupView
                group={activeEditGroup}
                onBack={() => setActiveEditGroup(null)}
                onSave={handleSaveEdit}
            />
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                        Ring Groups
                    </h1>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1 font-medium">
                        Group extensions together for simultaneous, sequential, or round-robin call routing.
                    </p>
                </div>
                <button
                    onClick={() => setIsCreateOpen(true)}
                    className="inline-flex items-center gap-2 bg-[#1c22d4] hover:bg-blue-700 text-white font-semibold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
                >
                    <Plus className="w-4 h-4" />
                    <span>Create Ring Group</span>
                </button>
            </div>

            {/* Search */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-3.5 shadow-xs max-w-xl">
                <div className="relative">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search ring groups..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 text-xs text-slate-900 font-medium placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                    />
                </div>
            </div>

            {/* Ring Groups Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 max-w-5xl">
                {filtered.map((group) => (
                    <div
                        key={group.id}
                        className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 hover:shadow-md transition-all flex flex-col justify-between"
                    >
                        <div>
                            {/* Card Header */}
                            <div className="flex items-start justify-between mb-4 pb-2.5 border-b border-slate-100 gap-2">
                                <h3 className="text-sm font-bold text-slate-900 leading-tight capitalize">
                                    {group.name}
                                </h3>
                                <span className="px-2.5 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-[10px] font-semibold tracking-wider shrink-0">
                                    {group.strategy.split(' ')[0]}
                                </span>
                            </div>

                            {/* Details */}
                            <div className="space-y-2.5 text-xs mb-5">
                                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                                    <span className="font-semibold text-[11px] text-slate-500 flex items-center gap-1.5">
                                        <Users className="w-3.5 h-3.5 text-slate-400" />
                                        Members
                                    </span>
                                    <span className="font-bold text-slate-800">
                                        {group.assignedMembers?.length || 0} Agents
                                    </span>
                                </div>
                                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                                    <span className="font-semibold text-[11px] text-slate-500 flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                                        Timeout
                                    </span>
                                    <span className="font-bold text-slate-800 font-mono">
                                        {group.ringTimeout}s
                                    </span>
                                </div>
                                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                                    <span className="font-semibold text-[11px] text-slate-500">
                                        Fallback
                                    </span>
                                    <span className="font-medium text-slate-600 text-[11px] truncate max-w-[160px]">
                                        {group.afterTimeout}
                                    </span>
                                </div>
                                <div>
                                    <span className="block font-semibold text-[11px] text-slate-500 mb-2">
                                        Assigned Extensions
                                    </span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {group.assignedMembers?.length === 0 ? (
                                            <span className="text-slate-400 text-[11px] italic">
                                                None assigned
                                            </span>
                                        ) : (
                                            group.assignedMembers?.map((m) => (
                                                <span
                                                    key={m.id}
                                                    className="inline-flex items-center px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200/60 font-mono text-[11px] font-semibold"
                                                >
                                                    {m.id}
                                                </span>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                            <button
                                onClick={() => setActiveEditGroup(group)}
                                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-slate-200 hover:border-blue-400 hover:text-blue-700 text-slate-700 hover:bg-blue-50 text-xs font-semibold transition-colors cursor-pointer"
                            >
                                <Edit3 className="w-3.5 h-3.5" />
                                <span>Edit Group</span>
                            </button>
                            <button
                                onClick={() => handleDelete(group.id)}
                                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-rose-200 hover:border-rose-300 text-rose-600 hover:bg-rose-50 text-xs font-semibold transition-colors cursor-pointer"
                            >
                                <Trash2 className="w-3.5 h-3.5 text-rose-500" />
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Create Modal */}
            {isCreateOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fade-in">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
                        <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                            <h3 className="text-base font-bold text-slate-900">Create Ring Group</h3>
                            <button
                                onClick={() => setIsCreateOpen(false)}
                                className="text-slate-400 hover:text-slate-700 text-xl font-bold cursor-pointer"
                            >
                                &times;
                            </button>
                        </div>

                        <div className="space-y-4 mb-6 text-xs">
                            <div>
                                <label className="block text-slate-700 font-semibold mb-1.5">
                                    Group Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. Sales Team"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium focus:outline-none focus:border-blue-500 focus:bg-white"
                                />
                            </div>
                            <div>
                                <label className="block text-slate-700 font-semibold mb-1.5">
                                    Ring Strategy
                                </label>
                                <select
                                    value={newStrategy}
                                    onChange={(e) => setNewStrategy(e.target.value)}
                                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium focus:outline-none focus:border-blue-500"
                                >
                                    {STRATEGY_OPTIONS.map((s) => (
                                        <option key={s} value={s}>
                                            {s}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-slate-700 font-semibold mb-1.5">
                                    Ring Timeout (seconds)
                                </label>
                                <input
                                    type="number"
                                    min="1"
                                    max="60"
                                    value={newTimeout}
                                    onChange={(e) => setNewTimeout(e.target.value)}
                                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium focus:outline-none focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => setIsCreateOpen(false)}
                                className="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl text-xs font-semibold cursor-pointer"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleCreate}
                                className="px-5 py-2 bg-[#1c22d4] hover:bg-blue-700 text-white rounded-xl text-xs font-semibold cursor-pointer shadow-xs"
                            >
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
