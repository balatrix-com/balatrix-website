import React, { useState } from 'react';
import {
    ShieldCheck,
    UserPlus,
    Users,
    UserCheck,
    Ban,
    Shield,
    MoreVertical,
    CheckCircle2,
    Sliders,
    Trash2
} from 'lucide-react';

const initialStaff = [
    {
        id: '1',
        initials: 'PE',
        email: 'peter.hall@demo-corp.com',
        name: 'PETER HALL',
        isYou: false,
        status: 'ACTIVE',
        role: 'SUPPORT',
        monitorEnabled: true,
        ext: 'U100511'
    },
    {
        id: '2',
        initials: 'SM',
        email: 'alex.morgan@demo-corp.com',
        name: 'ALEX MORGAN',
        isYou: true,
        status: 'ACTIVE',
        role: 'ADMIN',
        monitorEnabled: true,
        ext: 'U100510'
    }
];

const DemoUserManagement = () => {
    const [staffList, setStaffList] = useState(initialStaff);
    const [isInviteOpen, setIsInviteOpen] = useState(false);

    const toggleMonitor = (id) => {
        setStaffList(
            staffList.map((s) =>
                s.id === id ? { ...s, monitorEnabled: !s.monitorEnabled } : s
            )
        );
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                        <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                            Staff Management
                        </h1>
                        <p className="text-slate-700 text-xs sm:text-sm mt-1 font-medium">
                            Control internal access and monitor administrative operations.
                        </p>
                    </div>
                </div>

                <div>
                    <button
                        onClick={() => setIsInviteOpen(true)}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs px-5 py-2.5 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
                    >
                        <UserPlus className="w-4 h-4" />
                        <span>Invite Staff</span>
                    </button>
                </div>
            </div>

            {/* 4 Stat Cards - High Contrast */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Admins */}
                <div className="relative overflow-hidden bg-white rounded-2xl border-2 border-slate-300 p-5 shadow-sm">
                    <Shield className="absolute -bottom-4 -right-4 w-28 h-28 text-blue-600/[0.1] pointer-events-none" />
                    <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-4 h-4 text-blue-600" />
                        <span className="text-[11px] font-black uppercase tracking-wider text-slate-800">
                            Admins
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-950" style={{ color: '#090d16' }}>
                        1
                    </h2>
                </div>

                {/* Support Team */}
                <div className="relative overflow-hidden bg-white rounded-2xl border-2 border-slate-300 p-5 shadow-sm">
                    <Users className="absolute -bottom-4 -right-4 w-28 h-28 text-blue-600/[0.1] pointer-events-none" />
                    <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span className="text-[11px] font-black uppercase tracking-wider text-slate-800">
                            Support Team
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-950" style={{ color: '#090d16' }}>
                        1
                    </h2>
                </div>

                {/* Active Now */}
                <div className="relative overflow-hidden bg-white rounded-2xl border-2 border-slate-300 p-5 shadow-sm">
                    <UserCheck className="absolute -bottom-4 -right-4 w-28 h-28 text-blue-600/[0.1] pointer-events-none" />
                    <div className="flex items-center gap-2 mb-2">
                        <UserCheck className="w-4 h-4 text-emerald-600" />
                        <span className="text-[11px] font-black uppercase tracking-wider text-slate-800">
                            Active Now
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-950" style={{ color: '#090d16' }}>
                        2
                    </h2>
                </div>

                {/* Suspended */}
                <div className="relative overflow-hidden bg-white rounded-2xl border-2 border-slate-300 p-5 shadow-sm">
                    <Ban className="absolute -bottom-4 -right-4 w-28 h-28 text-blue-600/[0.1] pointer-events-none" />
                    <div className="flex items-center gap-2 mb-2">
                        <Ban className="w-4 h-4 text-slate-500" />
                        <span className="text-[11px] font-black uppercase tracking-wider text-slate-800">
                            Suspended
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-950" style={{ color: '#090d16' }}>
                        0
                    </h2>
                </div>
            </div>

            {/* Staff Table - High Contrast */}
            <div className="bg-white rounded-2xl border-2 border-slate-300 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                        <thead className="bg-slate-100 text-slate-800 uppercase tracking-wider font-black text-[11px] border-b-2 border-slate-300">
                            <tr>
                                <th className="py-3.5 px-5">Team Member</th>
                                <th className="py-3.5 px-4">Current Status</th>
                                <th className="py-3.5 px-4">System Role</th>
                                <th className="py-3.5 px-4">Live Monitor</th>
                                <th className="py-3.5 px-5 text-right">Control</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y-2 divide-slate-100">
                            {staffList.map((member) => (
                                <tr
                                    key={member.id}
                                    className={`transition-colors ${
                                        member.isYou
                                            ? 'bg-blue-50/70 hover:bg-blue-50'
                                            : 'hover:bg-slate-50'
                                    }`}
                                >
                                    {/* Team Member */}
                                    <td className="py-4 px-5">
                                        <div className="flex items-center gap-3.5">
                                            <div className="w-10 h-10 rounded-xl bg-slate-200 border border-slate-300 flex items-center justify-center font-black text-slate-800 text-xs shadow-xs">
                                                {member.initials}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <p className="font-mono font-black text-slate-950 text-xs">
                                                        {member.email}
                                                    </p>
                                                    {member.isYou && (
                                                        <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-900 border border-indigo-300 text-[10px] font-black uppercase tracking-wider">
                                                            YOU
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-[11px] text-slate-700 font-bold uppercase tracking-wide mt-0.5">
                                                    {member.name}
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Current Status */}
                                    <td className="py-4 px-4">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 border border-emerald-300 text-[11px] font-black">
                                            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                                            {member.status}
                                        </span>
                                    </td>

                                    {/* System Role */}
                                    <td className="py-4 px-4">
                                        <span className="text-slate-950 font-black text-xs tracking-wider uppercase bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-300">
                                            {member.role}
                                        </span>
                                    </td>

                                    {/* Live Monitor Toggle */}
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-2.5">
                                            <button
                                                type="button"
                                                onClick={() => toggleMonitor(member.id)}
                                                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none shadow-xs ${
                                                    member.monitorEnabled ? 'bg-blue-600' : 'bg-slate-300'
                                                }`}
                                            >
                                                <span
                                                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                                                        member.monitorEnabled ? 'translate-x-5' : 'translate-x-0'
                                                    }`}
                                                />
                                            </button>
                                            <span className="text-xs font-mono font-bold text-slate-800 bg-slate-100 border border-slate-300 px-2.5 py-1 rounded-md">
                                                Ext: {member.ext}
                                            </span>
                                        </div>
                                    </td>

                                    {/* Control */}
                                    <td className="py-4 px-5 text-right">
                                        <button className="px-3 py-1.5 rounded-lg border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs shadow-xs transition-colors cursor-pointer">
                                            Manage
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Invite Staff Modal Simulation */}
            {isInviteOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border-2 border-slate-300">
                        <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-slate-200">
                            <h3 className="text-base font-black text-slate-950">
                                Invite Staff Member
                            </h3>
                            <button
                                onClick={() => setIsInviteOpen(false)}
                                className="text-slate-500 hover:text-slate-950 text-2xl font-black cursor-pointer"
                            >
                                &times;
                            </button>
                        </div>

                        <div className="space-y-4 mb-6 text-xs">
                            <div>
                                <label className="block text-slate-800 font-bold mb-1.5">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="colleague@yourcompany.com"
                                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-950 font-bold"
                                />
                            </div>

                            <div>
                                <label className="block text-slate-800 font-bold mb-1.5">
                                    Administrative Role
                                </label>
                                <select className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-950 font-bold">
                                    <option>SUPPORT (Read-only monitoring, CDRs & Extension routing)</option>
                                    <option>ADMIN (Full tenant management, Wallet & Billing)</option>
                                </select>
                            </div>

                            <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl text-blue-900">
                                <p className="font-black mb-0.5">Role-Based Access Control</p>
                                <p className="text-[11px] text-blue-800 font-medium">
                                    Invited colleagues receive a secure sign-in magic link and MFA verification prompt.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => setIsInviteOpen(false)}
                                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl text-xs font-bold cursor-pointer"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setIsInviteOpen(false)}
                                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-black cursor-pointer shadow-sm"
                            >
                                Send Invitation
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DemoUserManagement;
