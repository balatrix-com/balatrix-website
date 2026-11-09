import React, { useState, useEffect } from 'react';
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
        totalSec: 43,
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
        totalSec: 7,
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
        totalSec: 3,
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
        dur: '1m 15s',
        totalSec: 75,
        billsec: '1m 15s',
        callCharge: '$0.00',
        recCharge: '$0.004',
        totalAmount: '$0.004',
        status: 'Answered',
        hasRecording: true
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
        totalSec: 0,
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
        totalSec: 3,
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
    const [playingId, setPlayingId] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
    const [isExporting, setIsExporting] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isPlaying && playingId !== null) {
            interval = setInterval(() => {
                setCurrentTime((prev) => {
                    const currentItem = initialCDRs.find((r) => r.id === playingId);
                    const maxDuration = currentItem?.totalSec || 43;
                    const nextTime = prev + 0.25 * playbackSpeed;
                    if (nextTime >= maxDuration) {
                        setIsPlaying(false);
                        return 0;
                    }
                    return nextTime;
                });
            }, 250);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isPlaying, playingId, playbackSpeed]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const handleTogglePlay = (id) => {
        if (playingId === id) {
            setIsPlaying(!isPlaying);
        } else {
            setPlayingId(id);
            setCurrentTime(0);
            setIsPlaying(true);
        }
    };

    const handleSeek = (time, id) => {
        if (playingId !== id) {
            setPlayingId(id);
            setIsPlaying(true);
        }
        setCurrentTime(time);
    };

    const cycleSpeed = () => {
        const speeds = [1.0, 1.25, 1.5, 2.0];
        setPlaybackSpeed((prev) => {
            const nextIdx = (speeds.indexOf(prev) + 1) % speeds.length;
            return speeds[nextIdx];
        });
    };

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
                                <th className="py-3.5 px-5 text-right min-w-[340px]">Call Recording Player</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y-2 divide-slate-100 font-mono">
                            {filtered.map((item) => {
                                const isCurrentActive = playingId === item.id;
                                const isThisPlaying = isCurrentActive && isPlaying;
                                const currentSec = isCurrentActive ? currentTime : 0;
                                const totalSec = item.totalSec || 43;

                                return (
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

                                        <td className="py-3 px-5 text-right font-sans">
                                            {item.hasRecording ? (
                                                <div className="inline-flex items-center justify-end gap-2.5">
                                                    {/* Play / Pause Button */}
                                                    <button
                                                        onClick={() => handleTogglePlay(item.id)}
                                                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs select-none ${
                                                            isThisPlaying
                                                                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/25 ring-2 ring-blue-500/30'
                                                                : 'bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 hover:border-blue-300'
                                                        }`}
                                                        title={isThisPlaying ? 'Pause Recording' : 'Play Recording'}
                                                    >
                                                        {isThisPlaying ? (
                                                            <Pause className="w-3.5 h-3.5 fill-current" />
                                                        ) : (
                                                            <Play className="w-3.5 h-3.5 fill-current" />
                                                        )}
                                                        <span>{isThisPlaying ? 'Pause' : 'Play'}</span>
                                                    </button>

                                                    {/* Duration Timeline & Speed Container */}
                                                    <div className="flex items-center gap-2 bg-slate-100 dark:bg-zinc-800/90 px-3 py-1.5 rounded-xl border border-slate-300 dark:border-zinc-700 shadow-2xs">
                                                        {/* Live Soundwave when playing */}
                                                        {isThisPlaying && (
                                                            <div className="flex items-center gap-0.5 text-blue-600 mr-0.5" title="Playing Call Recording">
                                                                <span className="w-0.5 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                                                                <span className="w-0.5 h-3.5 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></span>
                                                                <span className="w-0.5 h-2 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></span>
                                                            </div>
                                                        )}

                                                        {/* Current Elapsed Time */}
                                                        <span className="font-mono text-[11px] font-black text-slate-800 dark:text-zinc-100 min-w-[28px] text-right">
                                                            {formatTime(currentSec)}
                                                        </span>

                                                        {/* Scrub Timeline Bar */}
                                                        <div className="relative w-24 sm:w-28 flex items-center">
                                                            <input
                                                                type="range"
                                                                min="0"
                                                                max={totalSec}
                                                                step="0.5"
                                                                value={currentSec}
                                                                onChange={(e) => handleSeek(Number(e.target.value), item.id)}
                                                                className="w-full h-1.5 bg-slate-300 dark:bg-zinc-600 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none"
                                                                title="Drag to scrub audio position"
                                                            />
                                                        </div>

                                                        {/* Total Duration */}
                                                        <span className="font-mono text-[11px] font-bold text-slate-500 dark:text-zinc-400 min-w-[28px]">
                                                            {formatTime(totalSec)}
                                                        </span>

                                                        {/* Speed Pill Toggle */}
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                cycleSpeed();
                                                            }}
                                                            className="px-1.5 py-0.5 rounded font-mono text-[10px] font-black bg-white dark:bg-zinc-900 text-slate-800 dark:text-zinc-200 border border-slate-300 dark:border-zinc-600 hover:border-blue-600 hover:text-blue-600 transition-colors cursor-pointer shadow-2xs"
                                                            title="Playback Speed (Click to change: 1.0x, 1.25x, 1.5x, 2.0x)"
                                                        >
                                                            {playbackSpeed}x
                                                        </button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <span className="text-slate-400 text-xs font-mono">—</span>
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DemoCallRecords;
