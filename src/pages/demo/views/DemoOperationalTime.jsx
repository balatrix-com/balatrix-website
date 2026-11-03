import React, { useState } from 'react';
import {
    Plus,
    Clock,
    Edit3,
    Trash2,
    X,
    Check,
    ChevronDown
} from 'lucide-react';

const TIMEZONES = [
    'America/New_York (EST / EDT)',
    'America/Chicago (CST / CDT)',
    'America/Los_Angeles (PST / PDT)',
    'America/Denver (MST / MDT)',
    'Europe/London (GMT / BST)',
    'Europe/Paris (CET / CEST)',
    'Asia/Kolkata (IST)',
    'Asia/Dubai (GST)',
    'Australia/Sydney (AEDT)'
];
const DAY_RANGES = ['Mon - Fri', 'Mon - Sat', 'Mon - Sun'];
const ROUTING_TARGETS = ['Extension', 'Ring Group', 'IVR Menu', 'Voicemail', 'DID Forward'];

const initialSchedules = [
    {
        id: 'sch-1',
        name: 'Business Hours Schedule',
        timezone: 'America/New_York (EST / EDT)',
        days: 'Mon - Fri',
        startTime: '09:00',
        endTime: '17:00',
        rules: { primary: 'Extension', afterHours: 'Voicemail', weekend: 'IVR Menu' }
    },
    {
        id: 'sch-2',
        name: 'Support 24/7 Schedule',
        timezone: 'America/Chicago (CST / CDT)',
        days: 'Mon - Sun',
        startTime: '00:00',
        endTime: '23:59',
        rules: { primary: 'Ring Group', afterHours: 'Ring Group', weekend: 'Ring Group' }
    }
];

const EditScheduleModal = ({ schedule, onClose, onSave }) => {
    const [form, setForm] = useState({ ...schedule, rules: { ...schedule.rules } });
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => onSave({ ...schedule, ...form }), 600);
    };

    const fmt = (t) => {
        const [h, m] = t.split(':');
        const hour = parseInt(h, 10);
        return `${hour % 12 || 12}:${m} ${hour < 12 ? 'AM' : 'PM'}`;
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border-2 border-slate-300 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-5 pb-3 border-b-2 border-slate-200">
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 border border-blue-300 flex items-center justify-center">
                            <Edit3 className="w-4 h-4" />
                        </div>
                        <h3 className="text-base font-black text-slate-950">Edit Schedule</h3>
                    </div>
                    <button onClick={onClose} className="text-slate-500 hover:text-slate-950 cursor-pointer p-1">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="space-y-4 text-xs">
                    {/* Name */}
                    <div>
                        <label className="block text-slate-800 font-bold mb-1.5 uppercase tracking-wide text-[11px]">Schedule Name</label>
                        <input
                            type="text"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-950 font-bold focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                        />
                    </div>

                    {/* Timezone */}
                    <div>
                        <label className="block text-slate-800 font-bold mb-1.5 uppercase tracking-wide text-[11px]">Timezone</label>
                        <select
                            value={form.timezone}
                            onChange={(e) => setForm({ ...form, timezone: e.target.value })}
                            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-950 font-bold focus:outline-none focus:border-blue-500 transition-all"
                        >
                            {TIMEZONES.map((t) => <option key={t}>{t}</option>)}
                        </select>
                    </div>

                    {/* Day Range */}
                    <div>
                        <label className="block text-slate-800 font-bold mb-2 uppercase tracking-wide text-[11px]">Active Days</label>
                        <div className="flex gap-2">
                            {DAY_RANGES.map((d) => (
                                <button
                                    key={d}
                                    onClick={() => setForm({ ...form, days: d })}
                                    className={`flex-1 py-2 px-2 rounded-xl border-2 font-black text-[10px] transition-all cursor-pointer ${
                                        form.days === d
                                            ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                                            : 'bg-slate-50 text-slate-700 border-slate-300 hover:border-blue-400'
                                    }`}
                                >
                                    {d}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Time Range */}
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-slate-800 font-bold mb-1.5 uppercase tracking-wide text-[11px]">
                                Start Time <span className="text-blue-700 font-mono">{fmt(form.startTime)}</span>
                            </label>
                            <input
                                type="time"
                                value={form.startTime}
                                onChange={(e) => setForm({ ...form, startTime: e.target.value })}
                                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-950 font-bold focus:outline-none focus:border-blue-500 transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-slate-800 font-bold mb-1.5 uppercase tracking-wide text-[11px]">
                                End Time <span className="text-blue-700 font-mono">{fmt(form.endTime)}</span>
                            </label>
                            <input
                                type="time"
                                value={form.endTime}
                                onChange={(e) => setForm({ ...form, endTime: e.target.value })}
                                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-950 font-bold focus:outline-none focus:border-blue-500 transition-all"
                            />
                        </div>
                    </div>

                    {/* Routing Rules */}
                    <div>
                        <label className="block text-slate-800 font-bold mb-2 uppercase tracking-wide text-[11px]">Routing Rules</label>
                        <div className="space-y-2">
                            {[
                                { key: 'primary', label: 'Primary (Business Hours)', color: 'emerald' },
                                { key: 'afterHours', label: 'After Hours', color: 'slate' },
                                { key: 'weekend', label: 'Weekend', color: 'amber' }
                            ].map(({ key, label, color }) => (
                                <div key={key} className={`flex items-center justify-between p-2.5 rounded-xl bg-${color}-50 border border-${color}-200 gap-3`}>
                                    <span className={`font-black text-[11px] uppercase text-${color}-900`}>{label}</span>
                                    <select
                                        value={form.rules[key]}
                                        onChange={(e) => setForm({ ...form, rules: { ...form.rules, [key]: e.target.value } })}
                                        className={`px-2.5 py-1.5 bg-white border border-${color}-300 rounded-lg text-slate-950 font-bold text-xs focus:outline-none focus:border-blue-500`}
                                    >
                                        {ROUTING_TARGETS.map((t) => <option key={t}>{t}</option>)}
                                    </select>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl text-blue-900">
                        <p className="font-black mb-0.5 text-[11px] uppercase">Automated Time Gates</p>
                        <p className="text-[11px] text-blue-800 font-medium">
                            Calls outside the configured window automatically fall through to your After Hours or Weekend routing target.
                        </p>
                    </div>
                </div>

                <div className="flex justify-end gap-2 mt-6 pt-4 border-t-2 border-slate-200">
                    <button onClick={onClose} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl text-xs font-bold cursor-pointer">Cancel</button>
                    <button
                        onClick={handleSave}
                        className={`px-5 py-2 rounded-xl text-xs font-black cursor-pointer shadow-sm transition-all inline-flex items-center gap-2 ${
                            saved ? 'bg-emerald-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}
                    >
                        {saved ? <Check className="w-3.5 h-3.5" /> : <Edit3 className="w-3.5 h-3.5" />}
                        {saved ? 'Saved!' : 'Save Schedule'}
                    </button>
                </div>
            </div>
        </div>
    );
};

const ruleColor = (key) => {
    if (key === 'primary') return 'bg-emerald-100 border-emerald-300 text-emerald-950';
    if (key === 'afterHours') return 'bg-slate-100 border-slate-300 text-slate-900';
    return 'bg-amber-100 border-amber-300 text-amber-950';
};

const DemoOperationalTime = () => {
    const [schedules, setSchedules] = useState(initialSchedules);
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [activeEditSchedule, setActiveEditSchedule] = useState(null);
    const [newName, setNewName] = useState('');
    const [newTz, setNewTz] = useState(TIMEZONES[0]);

    const handleDelete = (id) => setSchedules(schedules.filter((s) => s.id !== id));
    const handleSaveEdit = (updated) => {
        setSchedules(schedules.map((s) => (s.id === updated.id ? updated : s)));
        setActiveEditSchedule(null);
    };
    const handleCreate = () => {
        if (!newName.trim()) return;
        setSchedules([
            ...schedules,
            {
                id: `sch-${Date.now()}`,
                name: newName.trim(),
                timezone: newTz,
                days: 'Mon - Fri',
                startTime: '09:00',
                endTime: '17:00',
                rules: { primary: 'Extension', afterHours: 'Voicemail', weekend: 'IVR Menu' }
            }
        ]);
        setNewName('');
        setIsCreateOpen(false);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">Operational Schedules</h1>
                    <p className="text-slate-700 text-xs sm:text-sm mt-1 font-medium">
                        Time-based routing for business hours, after-hours, and weekends
                    </p>
                </div>
                <button
                    onClick={() => setIsCreateOpen(true)}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs px-5 py-2.5 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
                >
                    <Plus className="w-4 h-4" />
                    <span>Create Schedule</span>
                </button>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl">
                {schedules.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-2xl border-2 border-slate-300 shadow-sm p-6 hover:shadow-md transition-all flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-start justify-between mb-4 pb-2 border-b border-slate-200 gap-2">
                                <h3 className="text-sm font-black text-slate-950 capitalize leading-tight">{item.name}</h3>
                                <span className="px-2 py-1 rounded-full bg-slate-200 text-slate-900 border border-slate-400 text-[10px] font-bold tracking-wide font-mono shrink-0">
                                    {item.timezone.split(' ')[0]}
                                </span>
                            </div>

                            <div className="mb-5">
                                <div className="flex items-center gap-1.5 text-slate-800 text-[11px] uppercase font-black tracking-wider mb-2">
                                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                                    <span>Business Hours</span>
                                </div>
                                <div className="p-3.5 bg-blue-50/80 rounded-xl border border-blue-200 text-xs">
                                    <p className="font-black text-slate-950 text-sm">{item.days}</p>
                                    <p className="text-slate-800 font-mono font-bold text-xs mt-0.5">
                                        {item.startTime} – {item.endTime}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-2 mb-6 text-xs">
                                <span className="block text-[11px] uppercase font-black tracking-wider text-slate-800 mb-1">Routing Rules</span>
                                {[
                                    { k: 'primary', label: 'Primary' },
                                    { k: 'afterHours', label: 'After Hours' },
                                    { k: 'weekend', label: 'Weekend' }
                                ].map(({ k, label }) => (
                                    <div key={k} className={`flex items-center justify-between p-2.5 rounded-xl border font-bold ${ruleColor(k)}`}>
                                        <span className="font-black text-[11px] uppercase">{label}</span>
                                        <span className="bg-white px-2 py-0.5 rounded-md border border-current/20 text-xs">{item.rules[k]}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-2 pt-3 border-t-2 border-slate-100">
                            <button
                                onClick={() => setActiveEditSchedule(item)}
                                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-300 hover:border-blue-400 hover:text-blue-700 text-slate-900 hover:bg-blue-50 text-xs font-bold transition-colors cursor-pointer"
                            >
                                <Edit3 className="w-3.5 h-3.5" />Edit
                            </button>
                            <button
                                onClick={() => handleDelete(item.id)}
                                className="flex-1 py-2.5 px-3 rounded-xl border border-rose-300 hover:border-rose-400 text-rose-700 hover:bg-rose-50 text-xs font-bold text-center transition-colors cursor-pointer"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Edit Modal */}
            {activeEditSchedule && (
                <EditScheduleModal
                    schedule={activeEditSchedule}
                    onClose={() => setActiveEditSchedule(null)}
                    onSave={handleSaveEdit}
                />
            )}

            {/* Create Modal */}
            {isCreateOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border-2 border-slate-300">
                        <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-slate-200">
                            <h3 className="text-base font-black text-slate-950">Create Operational Schedule</h3>
                            <button onClick={() => setIsCreateOpen(false)} className="text-slate-500 hover:text-slate-950 text-2xl font-black cursor-pointer">&times;</button>
                        </div>
                        <div className="space-y-4 mb-6 text-xs">
                            <div>
                                <label className="block text-slate-800 font-bold mb-1.5">Schedule Name</label>
                                <input
                                    type="text"
                                    placeholder="e.g., Regional Support Schedule"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-950 font-bold focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-slate-800 font-bold mb-1.5">Timezone</label>
                                <select value={newTz} onChange={(e) => setNewTz(e.target.value)}
                                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-950 font-bold">
                                    {TIMEZONES.map((t) => <option key={t}>{t}</option>)}
                                </select>
                            </div>
                            <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl text-blue-900">
                                <p className="font-black mb-0.5">Automated Time Gates</p>
                                <p className="text-[11px] text-blue-800 font-medium">
                                    Calls outside configured windows route automatically to After Hours targets.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-end gap-2">
                            <button onClick={() => setIsCreateOpen(false)} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl text-xs font-bold cursor-pointer">Cancel</button>
                            <button onClick={handleCreate} className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-black cursor-pointer shadow-sm">Save Schedule</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DemoOperationalTime;
