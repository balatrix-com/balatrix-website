import React, { useState } from 'react';
import {
    Plus,
    Clock,
    Edit3,
    Trash2,
    X,
    Check,
    ChevronDown,
    ArrowLeft,
    Save,
    Calendar,
    GitBranch
} from 'lucide-react';

const TIMEZONES = [
    'America/New_York',
    'America/Chicago',
    'America/Los_Angeles',
    'America/Denver',
    'Europe/London',
    'Europe/Paris',
    'Asia/Kolkata',
    'Asia/Dubai',
    'Australia/Sydney'
];

const DAYS_OF_WEEK = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

const ROUTE_TYPES = [
    'Extension',
    'Ring Group',
    'IVR Menu',
    'DID Forward',
    'Voicemail'
];

const DESTINATIONS_MAP = {
    'Extension': [
        'Select an extension',
        'U100501 - Sales Desk (Ext 1001)',
        'U100502 - Support Desk (Ext 1002)',
        'U100503 - Tech Lead (Ext 1003)',
        'U100505 - Executive Seat (Ext 1005)'
    ],
    'Ring Group': [
        'Select a ring group',
        'Sales Team (Hunt / Ring in order)',
        'Technical Support (Simultaneous)',
        'Billing Team (Round Robin)'
    ],
    'IVR Menu': [
        'Select an IVR',
        'Main Menu - Auto-Attendant',
        'Support Submenu',
        'Billing & Payments IVR'
    ],
    'DID Forward': [
        'Select a forward number',
        'Executive Mobile Forward (+1 555-456-7892)',
        'Emergency Support Hotline (+1 555-321-4780)',
        'After-Hours On-Call Line (+1 555-789-0011)'
    ],
    'Voicemail': [
        'Select voicemail box',
        'General Voicemail Box #1',
        'Sales Voicemail Inbox',
        'Support Voicemail'
    ]
};

const initialSchedules = [
    {
        id: 'sch-1',
        name: 'Business Hours Schedule',
        timezone: 'America/New_York',
        daysStart: 'Monday',
        daysEnd: 'Friday',
        days: 'Mon - Fri',
        startTime: '09:00',
        endTime: '17:00',
        primaryRouteType: 'Extension',
        primaryDestination: 'Select an extension',
        afterHoursRouteType: 'IVR Menu',
        afterHoursDestination: 'Select an IVR',
        weekendRouteType: 'IVR Menu',
        weekendDestination: 'Select an IVR',
        rules: { primary: 'Extension', afterHours: 'Voicemail', weekend: 'IVR Menu' }
    },
    {
        id: 'sch-2',
        name: 'Support 24/7 Schedule',
        timezone: 'America/Chicago',
        daysStart: 'Monday',
        daysEnd: 'Sunday',
        days: 'Mon - Sun',
        startTime: '00:00',
        endTime: '23:59',
        primaryRouteType: 'Ring Group',
        primaryDestination: 'Technical Support (Simultaneous)',
        afterHoursRouteType: 'Ring Group',
        afterHoursDestination: 'Technical Support (Simultaneous)',
        weekendRouteType: 'Ring Group',
        weekendDestination: 'Technical Support (Simultaneous)',
        rules: { primary: 'Ring Group', afterHours: 'Ring Group', weekend: 'Ring Group' }
    }
];

/**
 * Dedicated Page: Create / Edit Operational Schedule exactly matching user screenshots
 */
const CreateScheduleView = ({ onBack, onSave, initialData }) => {
    const [scheduleName, setScheduleName] = useState(initialData?.name || '');
    const [timezone, setTimezone] = useState(initialData?.timezone || 'America/New_York');
    const [daysStart, setDaysStart] = useState(initialData?.daysStart || 'Monday');
    const [daysEnd, setDaysEnd] = useState(initialData?.daysEnd || 'Friday');
    const [startTime, setStartTime] = useState(initialData?.startTime || '09:00');
    const [endTime, setEndTime] = useState(initialData?.endTime || '17:00');

    // Routing Rules
    const [primaryRouteType, setPrimaryRouteType] = useState(initialData?.primaryRouteType || 'Extension');
    const [primaryDestination, setPrimaryDestination] = useState(initialData?.primaryDestination || 'Select an extension');

    const [afterHoursRouteType, setAfterHoursRouteType] = useState(initialData?.afterHoursRouteType || 'IVR Menu');
    const [afterHoursDestination, setAfterHoursDestination] = useState(initialData?.afterHoursDestination || 'Select an IVR');

    const [weekendRouteType, setWeekendRouteType] = useState(initialData?.weekendRouteType || 'IVR Menu');
    const [weekendDestination, setWeekendDestination] = useState(initialData?.weekendDestination || 'Select an IVR');

    const [isSaved, setIsSaved] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!scheduleName.trim()) return;

        const startShort = daysStart.slice(0, 3);
        const endShort = daysEnd.slice(0, 3);
        const daysLabel = `${startShort} - ${endShort}`;

        onSave({
            id: initialData?.id || `sch-${Date.now()}`,
            name: scheduleName.trim(),
            timezone,
            daysStart,
            daysEnd,
            days: daysLabel,
            startTime,
            endTime,
            primaryRouteType,
            primaryDestination,
            afterHoursRouteType,
            afterHoursDestination,
            weekendRouteType,
            weekendDestination,
            rules: {
                primary: primaryRouteType,
                afterHours: afterHoursRouteType,
                weekend: weekendRouteType
            }
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
                    <span>Back to Schedules</span>
                </button>
            </div>

            {/* Main Form Container Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 dark:border-zinc-850 shadow-xs overflow-hidden">
                <form onSubmit={handleSubmit}>
                    {/* Header: Title and Subtitle */}
                    <div className="p-7 sm:p-8 border-b border-slate-100 dark:border-zinc-850">
                        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                            {initialData ? 'Edit Schedule' : 'Create Schedule'}
                        </h1>
                        <p className="text-slate-500 dark:text-zinc-400 text-xs sm:text-sm mt-1">
                            Configure time-based routing for different times of day
                        </p>
                    </div>

                    <div className="p-7 sm:p-8 space-y-8">
                        {/* 1. BASIC INFORMATION SECTION */}
                        <div className="space-y-5">
                            <h2 className="text-sm font-black text-slate-900 dark:text-white">
                                Basic Information
                            </h2>

                            {/* Schedule Name */}
                            <div>
                                <label className="block text-xs font-bold text-slate-800 dark:text-zinc-200 mb-2">
                                    Schedule Name <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={scheduleName}
                                    onChange={(e) => setScheduleName(e.target.value)}
                                    placeholder="e.g., Business Hours Schedule"
                                    required
                                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-900 dark:text-white font-medium text-sm focus:outline-none focus:border-blue-600 transition-all placeholder:text-slate-400 dark:placeholder:text-zinc-600 shadow-2xs"
                                />
                            </div>

                            {/* Timezone */}
                            <div>
                                <label className="block text-xs font-bold text-slate-800 dark:text-zinc-200 mb-2">
                                    Timezone <span className="text-rose-500">*</span>
                                </label>
                                <select
                                    value={timezone}
                                    onChange={(e) => setTimezone(e.target.value)}
                                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-900 dark:text-white font-medium text-sm focus:outline-none focus:border-blue-600 transition-all cursor-pointer shadow-2xs"
                                >
                                    {TIMEZONES.map((tz) => (
                                        <option key={tz} value={tz}>
                                            {tz}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-slate-100 dark:border-zinc-850" />

                        {/* 2. BUSINESS HOURS SECTION */}
                        <div className="space-y-5">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-blue-600" />
                                <h2 className="text-sm font-black text-slate-900 dark:text-white">
                                    Business Hours
                                </h2>
                            </div>

                            {/* Business Days Start & End */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-bold text-slate-800 dark:text-zinc-200 mb-2">
                                        Business Days Start <span className="text-rose-500">*</span>
                                    </label>
                                    <select
                                        value={daysStart}
                                        onChange={(e) => setDaysStart(e.target.value)}
                                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-900 dark:text-white font-medium text-sm focus:outline-none focus:border-blue-600 transition-all cursor-pointer shadow-2xs"
                                    >
                                        {DAYS_OF_WEEK.map((day) => (
                                            <option key={day} value={day}>
                                                {day}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-800 dark:text-zinc-200 mb-2">
                                        Business Days End <span className="text-rose-500">*</span>
                                    </label>
                                    <select
                                        value={daysEnd}
                                        onChange={(e) => setDaysEnd(e.target.value)}
                                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-900 dark:text-white font-medium text-sm focus:outline-none focus:border-blue-600 transition-all cursor-pointer shadow-2xs"
                                    >
                                        {DAYS_OF_WEEK.map((day) => (
                                            <option key={day} value={day}>
                                                {day}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Start Time & End Time */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-bold text-slate-800 dark:text-zinc-200 mb-2">
                                        Start Time <span className="text-rose-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="time"
                                            value={startTime}
                                            onChange={(e) => setStartTime(e.target.value)}
                                            required
                                            className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-900 dark:text-white font-medium text-sm focus:outline-none focus:border-blue-600 transition-all shadow-2xs font-mono"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-800 dark:text-zinc-200 mb-2">
                                        End Time <span className="text-rose-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="time"
                                            value={endTime}
                                            onChange={(e) => setEndTime(e.target.value)}
                                            required
                                            className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-900 dark:text-white font-medium text-sm focus:outline-none focus:border-blue-600 transition-all shadow-2xs font-mono"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-slate-100 dark:border-zinc-850" />

                        {/* 3. ROUTING RULES SECTION (Matches Screenshot 2) */}
                        <div className="space-y-5">
                            <div className="flex items-center gap-2">
                                <GitBranch className="w-4 h-4 text-blue-600 rotate-90" />
                                <h2 className="text-sm font-black text-slate-900 dark:text-white">
                                    Routing Rules
                                </h2>
                            </div>

                            {/* Primary Route (Business Hours) */}
                            <div className="rounded-2xl border border-slate-200 dark:border-zinc-800 p-5 bg-white dark:bg-zinc-900/90 relative overflow-hidden border-l-4 border-l-emerald-500 shadow-xs">
                                <div className="mb-4">
                                    <div className="flex items-center gap-1.5 font-black text-xs text-slate-900 dark:text-white">
                                        <span>🤗</span>
                                        <span>Primary Route (Business Hours)</span>
                                    </div>
                                    <p className="text-xs text-slate-600 dark:text-zinc-400 mt-0.5 font-medium">
                                        Active during business days and hours configured above
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-900 dark:text-zinc-100 mb-1.5">
                                            Route Type <span className="text-rose-500">*</span>
                                        </label>
                                        <select
                                            value={primaryRouteType}
                                            onChange={(e) => {
                                                const newType = e.target.value;
                                                setPrimaryRouteType(newType);
                                                setPrimaryDestination(DESTINATIONS_MAP[newType]?.[0] || '');
                                            }}
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-slate-900 dark:text-white text-xs font-semibold focus:outline-none focus:border-blue-600 transition-all cursor-pointer shadow-2xs"
                                        >
                                            {ROUTE_TYPES.map((t) => (
                                                <option key={t} value={t}>
                                                    {t}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-900 dark:text-zinc-100 mb-1.5">
                                            Destination <span className="text-rose-500">*</span>
                                        </label>
                                        <select
                                            value={primaryDestination}
                                            onChange={(e) => setPrimaryDestination(e.target.value)}
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-slate-900 dark:text-white text-xs font-semibold focus:outline-none focus:border-blue-600 transition-all cursor-pointer shadow-2xs"
                                        >
                                            {(DESTINATIONS_MAP[primaryRouteType] || DESTINATIONS_MAP['Extension']).map((dest) => (
                                                <option key={dest} value={dest}>
                                                    {dest}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* After Hours Route */}
                            <div className="rounded-2xl border border-slate-200 dark:border-zinc-800 p-5 bg-white dark:bg-zinc-900/90 relative overflow-hidden border-l-4 border-l-blue-500 shadow-xs">
                                <div className="mb-4">
                                    <div className="flex items-center gap-1.5 font-black text-xs text-slate-900 dark:text-white">
                                        <span>🌙</span>
                                        <span>After Hours Route</span>
                                    </div>
                                    <p className="text-xs text-slate-600 dark:text-zinc-400 mt-0.5 font-medium">
                                        Active on business days outside of business hours
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-900 dark:text-zinc-100 mb-1.5">
                                            Route Type
                                        </label>
                                        <select
                                            value={afterHoursRouteType}
                                            onChange={(e) => {
                                                const newType = e.target.value;
                                                setAfterHoursRouteType(newType);
                                                setAfterHoursDestination(DESTINATIONS_MAP[newType]?.[0] || '');
                                            }}
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-slate-900 dark:text-white text-xs font-semibold focus:outline-none focus:border-blue-600 transition-all cursor-pointer shadow-2xs"
                                        >
                                            {ROUTE_TYPES.map((t) => (
                                                <option key={t} value={t}>
                                                    {t}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-900 dark:text-zinc-100 mb-1.5">
                                            Destination
                                        </label>
                                        <select
                                            value={afterHoursDestination}
                                            onChange={(e) => setAfterHoursDestination(e.target.value)}
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-slate-900 dark:text-white text-xs font-semibold focus:outline-none focus:border-blue-600 transition-all cursor-pointer shadow-2xs"
                                        >
                                            {(DESTINATIONS_MAP[afterHoursRouteType] || DESTINATIONS_MAP['IVR Menu']).map((dest) => (
                                                <option key={dest} value={dest}>
                                                    {dest}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Weekend Route */}
                            <div className="rounded-2xl border border-slate-200 dark:border-zinc-800 p-5 bg-white dark:bg-zinc-900/90 relative overflow-hidden border-l-4 border-l-amber-500 shadow-xs">
                                <div className="mb-4">
                                    <div className="flex items-center gap-1.5 font-black text-xs text-slate-900 dark:text-white">
                                        <span>📅</span>
                                        <span>Weekend Route</span>
                                    </div>
                                    <p className="text-xs text-slate-600 dark:text-zinc-400 mt-0.5 font-medium">
                                        Active on weekends and non-business days
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-900 dark:text-zinc-100 mb-1.5">
                                            Route Type
                                        </label>
                                        <select
                                            value={weekendRouteType}
                                            onChange={(e) => {
                                                const newType = e.target.value;
                                                setWeekendRouteType(newType);
                                                setWeekendDestination(DESTINATIONS_MAP[newType]?.[0] || '');
                                            }}
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-slate-900 dark:text-white text-xs font-semibold focus:outline-none focus:border-blue-600 transition-all cursor-pointer shadow-2xs"
                                        >
                                            {ROUTE_TYPES.map((t) => (
                                                <option key={t} value={t}>
                                                    {t}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-900 dark:text-zinc-100 mb-1.5">
                                            Destination
                                        </label>
                                        <select
                                            value={weekendDestination}
                                            onChange={(e) => setWeekendDestination(e.target.value)}
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-slate-900 dark:text-white text-xs font-semibold focus:outline-none focus:border-blue-600 transition-all cursor-pointer shadow-2xs"
                                        >
                                            {(DESTINATIONS_MAP[weekendRouteType] || DESTINATIONS_MAP['IVR Menu']).map((dest) => (
                                                <option key={dest} value={dest}>
                                                    {dest}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
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
                            <span>{isSaved ? 'Created!' : 'Create Schedule'}</span>
                        </button>
                    </div>
                </form>
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
    const [isCreating, setIsCreating] = useState(false);
    const [activeEditSchedule, setActiveEditSchedule] = useState(null);

    const handleDelete = (id) => setSchedules(schedules.filter((s) => s.id !== id));

    const handleSaveSchedule = (scheduleData) => {
        const exists = schedules.some((s) => s.id === scheduleData.id);
        if (exists) {
            setSchedules(schedules.map((s) => (s.id === scheduleData.id ? scheduleData : s)));
        } else {
            setSchedules([scheduleData, ...schedules]);
        }
        setIsCreating(false);
        setActiveEditSchedule(null);
    };

    // Dedicated Page View for Create
    if (isCreating) {
        return (
            <CreateScheduleView
                onBack={() => setIsCreating(false)}
                onSave={handleSaveSchedule}
            />
        );
    }

    // Dedicated Page View for Edit
    if (activeEditSchedule) {
        return (
            <CreateScheduleView
                initialData={activeEditSchedule}
                onBack={() => setActiveEditSchedule(null)}
                onSave={handleSaveSchedule}
            />
        );
    }

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
                    onClick={() => setIsCreating(true)}
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
        </div>
    );
};

export default DemoOperationalTime;
