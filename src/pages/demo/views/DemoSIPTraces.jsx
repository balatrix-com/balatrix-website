import React, { useState } from 'react';
import {
    Search,
    AlertTriangle,
    RefreshCw,
    Terminal,
    ArrowRight,
    ExternalLink,
    Code2,
    CheckCircle2,
    Clock,
    FileText
} from 'lucide-react';

const initialTraces = [
    {
        id: 'trace-1',
        started: '11/2/2026, 6:01:29 PM',
        customer: 'U1005',
        direction: 'INBOUND',
        caller: '2154697061',
        callee: '8002000120',
        cdr: 'COMPLETED',
        callId: '98432a-bc91-44ab-9012@sip.balatrix.net',
        mos: '4.42',
        duration: '43s'
    },
    {
        id: 'trace-2',
        started: '11/2/2026, 6:00:55 PM',
        customer: 'U1005',
        direction: 'INBOUND',
        caller: '2154697061',
        callee: '8002000120',
        cdr: 'COMPLETED',
        callId: '12384b-dd20-410a-8821@sip.balatrix.net',
        mos: '4.38',
        duration: '7s'
    },
    {
        id: 'trace-3',
        started: '11/2/2026, 5:58:40 PM',
        customer: 'U1005',
        direction: 'INBOUND',
        caller: '2154697061',
        callee: '8002000120',
        cdr: 'COMPLETED',
        callId: 'fe8301-44ab-4e33-9122@sip.balatrix.net',
        mos: '4.40',
        duration: '3s'
    },
    {
        id: 'trace-4',
        started: '11/2/2026, 5:57:49 PM',
        customer: 'U1005',
        direction: 'INBOUND',
        caller: '2154697061',
        callee: '8002000120',
        cdr: 'COMPLETED',
        callId: '09ab21-88fc-4190-aa11@sip.balatrix.net',
        mos: 'N/A',
        duration: '0s'
    },
    {
        id: 'trace-5',
        started: '11/2/2026, 5:57:32 PM',
        customer: 'U1005',
        direction: 'INBOUND',
        caller: '2154697061',
        callee: '8002000120',
        cdr: 'COMPLETED',
        callId: '8872bc-12aa-4980-b213@sip.balatrix.net',
        mos: 'N/A',
        duration: '0s'
    },
    {
        id: 'trace-6',
        started: '11/2/2026, 5:51:32 PM',
        customer: 'U1005',
        direction: 'INBOUND',
        caller: '2154697061',
        callee: '8002000120',
        cdr: 'COMPLETED',
        callId: '44510b-99ce-4811-cca2@sip.balatrix.net',
        mos: 'N/A',
        duration: '0s'
    },
    {
        id: 'trace-7',
        started: '11/2/2026, 5:46:21 PM',
        customer: 'U1005',
        direction: 'INBOUND',
        caller: '2154697061',
        callee: '8002000120',
        cdr: 'COMPLETED',
        callId: '22199f-71ad-4677-ee81@sip.balatrix.net',
        mos: 'N/A',
        duration: '0s'
    },
    {
        id: 'trace-8',
        started: '11/2/2026, 5:45:32 PM',
        customer: 'U1005',
        direction: 'INBOUND',
        caller: '2154697061',
        callee: '8002000120',
        cdr: 'COMPLETED',
        callId: '66512e-83de-4122-bc09@sip.balatrix.net',
        mos: 'N/A',
        duration: '3s'
    }
];

const DemoSIPTraces = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [activeTraceModal, setActiveTraceModal] = useState(null);

    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => setIsRefreshing(false), 500);
    };

    const filtered = initialTraces.filter((t) =>
        t.caller.includes(searchQuery) ||
        t.callee.includes(searchQuery) ||
        t.callId.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-5">
            {/* Header */}
            <div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                    SIP traces
                </h1>
                <p className="text-slate-700 text-xs sm:text-sm mt-1 font-medium">
                    Your latest 100 completed calls. When a newer call arrives, the oldest drops out of this view. Raw SIP is fetched from Homer on demand.
                </p>
            </div>

            {/* Warning Banner (matching screenshot with strong contrast) */}
            <div className="p-4 rounded-2xl bg-amber-100 border-2 border-amber-400 text-amber-950 text-xs flex items-start gap-3 shadow-xs">
                <AlertTriangle className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <p className="leading-relaxed font-semibold">
                    SIP signaling contains sensitive data. Authentication headers are redacted: Homer retention or packet loss may leave a trace incomplete.
                </p>
            </div>

            {/* Search Box - High Contrast */}
            <div className="bg-white rounded-2xl border-2 border-slate-300 p-4 shadow-sm max-w-xl">
                <label className="block text-[11px] uppercase font-black text-slate-800 mb-1.5">
                    Number / Call-ID
                </label>
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1 px-3 py-2 text-xs text-slate-950 font-bold placeholder-slate-500 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-mono"
                    />
                    <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-black shadow-sm inline-flex items-center gap-1.5 transition-all cursor-pointer">
                        <Search className="w-3.5 h-3.5" />
                        <span>Search</span>
                    </button>
                </div>
            </div>

            {/* Traces Table Container - High Contrast */}
            <div className="bg-white rounded-2xl border-2 border-slate-300 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b-2 border-slate-200 bg-slate-50">
                    <h3 className="text-sm font-black text-slate-950">
                        Calls
                    </h3>

                    <button
                        onClick={handleRefresh}
                        className="p-1.5 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-colors cursor-pointer"
                        title="Refresh traces"
                    >
                        <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-blue-600' : ''}`} />
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs whitespace-nowrap">
                        <thead className="bg-slate-100 text-slate-800 uppercase tracking-wider font-black text-[11px] border-b-2 border-slate-300">
                            <tr>
                                <th className="py-3.5 px-5">Started</th>
                                <th className="py-3.5 px-4">Customer</th>
                                <th className="py-3.5 px-4">Direction</th>
                                <th className="py-3.5 px-5">Caller → Callee</th>
                                <th className="py-3.5 px-4">CDR</th>
                                <th className="py-3.5 px-5 text-right">Trace</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y-2 divide-slate-100 font-mono">
                            {filtered.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                                    {/* Started */}
                                    <td className="py-4 px-5 text-slate-900 font-semibold">
                                        {item.started}
                                    </td>

                                    {/* Customer */}
                                    <td className="py-4 px-4 font-black text-slate-950">
                                        {item.customer}
                                    </td>

                                    {/* Direction */}
                                    <td className="py-4 px-4">
                                        <span className="font-black text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                                            {item.direction}
                                        </span>
                                    </td>

                                    {/* Caller -> Callee */}
                                    <td className="py-4 px-5 text-slate-950 font-black">
                                        <span>{item.caller}</span>
                                        <span className="text-slate-400 mx-2">→</span>
                                        <span className="text-blue-700">{item.callee}</span>
                                    </td>

                                    {/* CDR */}
                                    <td className="py-4 px-4 font-sans">
                                        <span className="text-xs font-black text-slate-700">
                                            {item.cdr}
                                        </span>
                                    </td>

                                    {/* Trace Action */}
                                    <td className="py-4 px-5 text-right font-sans">
                                        <button
                                            onClick={() => setActiveTraceModal(item)}
                                            className="text-xs font-black text-blue-700 hover:text-blue-900 hover:underline cursor-pointer"
                                        >
                                            Open trace
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Simulated Raw SIP Ladder Modal */}
            {activeTraceModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border-2 border-slate-300">
                        <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-slate-200">
                            <div>
                                <h3 className="text-base font-black text-slate-950 flex items-center gap-2">
                                    <Terminal className="w-5 h-5 text-blue-600" />
                                    <span>SIP Signaling Flow Ladder</span>
                                </h3>
                                <p className="text-xs text-slate-700 font-mono font-bold mt-0.5">
                                    Call-ID: {activeTraceModal.callId}
                                </p>
                            </div>
                            <button
                                onClick={() => setActiveTraceModal(null)}
                                className="text-slate-500 hover:text-slate-950 text-2xl font-black cursor-pointer"
                            >
                                &times;
                            </button>
                        </div>

                        {/* SIP Flow Visualization */}
                        <div className="bg-slate-950 text-slate-100 p-4 rounded-xl font-mono text-xs overflow-x-auto space-y-2 mb-4 border border-slate-800">
                            <p className="text-slate-400">// Carrier SBC → Balatrix OpenSIPS Core</p>
                            <p className="text-emerald-400 font-bold">18:01:29.102 | INVITE sip:8002000120@sip.balatrix.net SIP/2.0</p>
                            <p className="text-blue-400">18:01:29.115 | SIP/2.0 100 Trying</p>
                            <p className="text-yellow-400">18:01:29.140 | SIP/2.0 180 Ringing</p>
                            <p className="text-emerald-400 font-bold">18:01:29.980 | SIP/2.0 200 OK (SDP: PCMU/8000)</p>
                            <p className="text-cyan-400">18:01:29.992 | ACK sip:8002000120@sip.balatrix.net SIP/2.0</p>
                            <p className="text-purple-400">18:02:12.440 | BYE sip:u100501@pbx.balatrix.net SIP/2.0</p>
                            <p className="text-emerald-400">18:02:12.448 | SIP/2.0 200 OK</p>
                        </div>

                        <div className="flex justify-end">
                            <button
                                onClick={() => setActiveTraceModal(null)}
                                className="px-5 py-2 bg-slate-950 hover:bg-slate-800 text-white rounded-xl text-xs font-black cursor-pointer"
                            >
                                Close Trace
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DemoSIPTraces;
