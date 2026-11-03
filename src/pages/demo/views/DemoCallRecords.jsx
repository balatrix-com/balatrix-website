import React, { useState } from 'react';
import {
    Calendar,
    Search,
    Download,
    CreditCard,
    Filter,
    Play,
    Pause,
    Volume2,
    CheckCircle2,
    XCircle,
    ArrowDownRight,
    ArrowUpRight
} from 'lucide-react';

const initialCDRs = [
    {
        id: 1,
        time: 'Nov 2',
        subTime: '18:02',
        caller: '2154697061',
        recipient: '8002000120',
        dest: 'U100501',
        destType: 'EXTENSION',
        type: 'INBOUND',
        dur: '0m 43s',
        billsec: '1m 0s',
        callCharge: '$0.00',
        recCharge: '$0.002',
        totalAmount: '$0.002',
        status: 'Answered',
        hasRecording: true
    },
    {
        id: 2,
        time: 'Nov 2',
        subTime: '18:01',
        caller: '2154697061',
        recipient: '8002000120',
        dest: 'U100501',
        destType: 'EXTENSION',
        type: 'INBOUND',
        dur: '0m 7s',
        billsec: '0m 7s',
        callCharge: '$0.00',
        recCharge: '$0.00',
        totalAmount: '$0.00',
        status: 'No_answer',
        hasRecording: false
    },
    {
        id: 3,
        time: 'Nov 2',
        subTime: '17:58',
        caller: '2154697061',
        recipient: '8002000120',
        dest: '8002000120',
        destType: 'EXTENSION',
        type: 'INBOUND',
        dur: '0m 3s',
        billsec: '0m 3s',
        callCharge: '$0.00',
        recCharge: '$0.00',
        totalAmount: '$0.00',
        status: 'No_answer',
        hasRecording: false
    },
    {
        id: 4,
        time: 'Nov 2',
        subTime: '17:58',
        caller: '2154697061',
        recipient: '8002000120',
        dest: 'U100501',
        destType: 'EXTENSION',
        type: 'INBOUND',
        dur: '0m 0s',
        billsec: '0m 0s',
        callCharge: '$0.00',
        recCharge: '$0.00',
        totalAmount: '$0.00',
        status: 'No_answer',
        hasRecording: false
    },
    {
        id: 5,
        time: 'Nov 2',
        subTime: '17:57',
        caller: '2154697061',
        recipient: '8002000120',
        dest: 'U100501',
        destType: 'EXTENSION',
        type: 'INBOUND',
        dur: '0m 0s',
        billsec: '0m 0s',
        callCharge: '$0.00',
        recCharge: '$0.00',
        totalAmount: '$0.00',
        status: 'No_answer',
        hasRecording: false
    },
    {
        id: 6,
        time: 'Nov 2',
        subTime: '17:51',
        caller: '2154697061',
        recipient: '8002000120',
        dest: 'U100501',
        destType: 'EXTENSION',
        type: 'INBOUND',
        dur: '0m 3s',
        billsec: '0m 3s',
        callCharge: '$0.00',
        recCharge: '$0.00',
        totalAmount: '$0.00',
        status: 'No_answer',
        hasRecording: false
    }
];

const DemoCallRecords = () => {
    const [searchNumber, setSearchNumber] = useState('');
    const [selectedRange, setSelectedRange] = useState('30 Days');
    const [isPlaying, setIsPlaying] = useState(false);
    const [isExporting, setIsExporting] = useState(false);

    const handleExport = () => {
        setIsExporting(true);
        setTimeout(() => setIsExporting(false), 800);
    };

    const filtered = initialCDRs.filter((r) =>
        r.caller.includes(searchNumber) ||
        r.recipient.includes(searchNumber) ||
        r.dest.toLowerCase().includes(searchNumber.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                        Call Records (CDRs)
                    </h1>
                    <p className="text-slate-700 text-xs sm:text-sm mt-1 font-medium">
                        Search and analyze inbound and outbound call sessions.
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={handleExport}
                        className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 text-xs font-bold px-4 py-2.5 rounded-xl border-2 border-slate-300 shadow-sm transition-all hover:border-slate-400 cursor-pointer"
                    >
                        <Download className={`w-3.5 h-3.5 text-slate-600 ${isExporting ? 'animate-bounce' : ''}`} />
                        <span>{isExporting ? 'Exporting CSV...' : 'Export CDRs'}</span>
                    </button>
                </div>
            </div>

            {/* Filters Row */}
            <div className="bg-white rounded-2xl border-2 border-slate-300 p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search caller, recipient or destination..."
                        value={searchNumber}
                        onChange={(e) => setSearchNumber(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 text-xs text-slate-950 font-bold placeholder-slate-500 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-mono"
                    />
                </div>

                <div className="flex items-center gap-2">
                    {['Today', '7 Days', '30 Days'].map((r) => (
                        <button
                            key={r}
                            onClick={() => setSelectedRange(r)}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                selectedRange === r
                                    ? 'bg-slate-950 text-white font-black shadow-xs'
                                    : 'bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-300'
                            }`}
                        >
                            {r}
                        </button>
                    ))}
                </div>
            </div>

            {/* CDRs Table - High Contrast */}
            <div className="bg-white rounded-2xl border-2 border-slate-300 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs whitespace-nowrap">
                        <thead className="bg-slate-100 text-slate-800 uppercase tracking-wider font-black text-[11px] border-b-2 border-slate-300">
                            <tr>
                                <th className="py-3.5 px-5">Time</th>
                                <th className="py-3.5 px-5">Caller</th>
                                <th className="py-3.5 px-5">Recipient</th>
                                <th className="py-3.5 px-4">Dest</th>
                                <th className="py-3.5 px-4">Type</th>
                                <th className="py-3.5 px-4">Duration</th>
                                <th className="py-3.5 px-4">Cost</th>
                                <th className="py-3.5 px-4">Status</th>
                                <th className="py-3.5 px-5 text-right">Recording</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y-2 divide-slate-100 font-mono">
                            {filtered.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="py-4 px-5 text-slate-900 font-bold">
                                        <span>{item.time}</span>
                                        <span className="text-slate-600 text-[11px] block">{item.subTime}</span>
                                    </td>

                                    <td className="py-4 px-5 font-black text-slate-950">
                                        {item.caller}
                                    </td>

                                    <td className="py-4 px-5 font-bold text-blue-700">
                                        {item.recipient}
                                    </td>

                                    <td className="py-4 px-4 font-bold text-slate-800">
                                        {item.dest}
                                    </td>

                                    <td className="py-4 px-4">
                                        <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-300 text-[10px] font-black">
                                            {item.type}
                                        </span>
                                    </td>

                                    <td className="py-4 px-4 text-slate-800 font-bold">
                                        {item.dur}
                                    </td>

                                    <td className="py-4 px-4 font-black text-slate-950">
                                        {item.totalAmount}
                                    </td>

                                    <td className="py-4 px-4 font-sans">
                                        {item.status === 'Answered' ? (
                                            <span className="inline-flex items-center gap-1 text-[11px] font-black text-emerald-950 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                                                Answered
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1 text-[11px] font-black text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-300">
                                                No Answer
                                            </span>
                                        )}
                                    </td>

                                    <td className="py-4 px-5 text-right font-sans">
                                        {item.hasRecording ? (
                                            <button
                                                onClick={() => setIsPlaying(!isPlaying)}
                                                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer shadow-xs ${
                                                    isPlaying
                                                        ? 'bg-blue-600 text-white'
                                                        : 'bg-blue-100 text-blue-800 hover:bg-blue-200 border border-blue-300'
                                                }`}
                                            >
                                                {isPlaying ? (
                                                    <Pause className="w-3.5 h-3.5" />
                                                ) : (
                                                    <Play className="w-3.5 h-3.5" />
                                                )}
                                                <span>{isPlaying ? 'Pause' : 'Play'}</span>
                                            </button>
                                        ) : (
                                            <span className="text-slate-400 text-xs">—</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DemoCallRecords;
