import React, { useState, useEffect } from 'react';
import {
    Upload,
    RefreshCw,
    Search,
    FileAudio,
    Trash2,
    Play,
    Pause,
    Volume2
} from 'lucide-react';

const initialAudioFiles = [
    {
        id: 'aud-1',
        name: 'Main greet',
        filename: '087ec20b-71ed-4a6c-83d7-8805f81f7187.wav',
        size: '454.17 KB',
        totalSec: 24,
        uploadedAt: '10/29/2026, 9:42:19 PM'
    },
    {
        id: 'aud-2',
        name: 'After Hours Closed Notice',
        filename: '3a9b41dc-58a1-4322-a9b0-9118c7634f12.wav',
        size: '320.50 KB',
        totalSec: 38,
        uploadedAt: '10/29/2026, 8:15:00 PM'
    },
    {
        id: 'aud-3',
        name: 'Corporate Hold Stream - Lo-Fi Chill',
        filename: '7c89f012-e421-4f88-8123-5591ab012c44.mp3',
        size: '1.45 MB',
        totalSec: 180,
        uploadedAt: '10/28/2026, 11:20:00 AM'
    }
];

const DemoAudioLibrary = () => {
    const [audioList, setAudioList] = useState(initialAudioFiles);
    const [searchQuery, setSearchQuery] = useState('');
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isUploadOpen, setIsUploadOpen] = useState(false);
    const [playingId, setPlayingId] = useState(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [playbackSpeed, setPlaybackSpeed] = useState(1.0);

    useEffect(() => {
        let interval = null;
        if (playingId !== null) {
            interval = setInterval(() => {
                setCurrentTime((prev) => {
                    const currentItem = audioList.find((f) => f.id === playingId);
                    const maxDur = currentItem?.totalSec || 30;
                    const next = prev + 0.25 * playbackSpeed;
                    if (next >= maxDur) {
                        setPlayingId(null);
                        return 0;
                    }
                    return next;
                });
            }, 250);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [playingId, playbackSpeed, audioList]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => setIsRefreshing(false), 500);
    };

    const handleDelete = (id) => {
        setAudioList(audioList.filter((item) => item.id !== id));
        if (playingId === id) setPlayingId(null);
    };

    const togglePlay = (id) => {
        if (playingId === id) {
            setPlayingId(null);
        } else {
            setPlayingId(id);
            setCurrentTime(0);
        }
    };

    const filtered = audioList.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.filename.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                        Audio Library
                    </h1>
                    <p className="text-slate-700 text-xs sm:text-sm mt-1 font-medium">
                        Manage IVR greetings and system prompts.
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setIsUploadOpen(true)}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs px-5 py-2.5 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
                    >
                        <Upload className="w-4 h-4" />
                        <span>Upload Audio</span>
                    </button>

                    <button
                        onClick={handleRefresh}
                        className="p-2.5 rounded-xl border-2 border-slate-300 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-950 transition-colors shadow-sm cursor-pointer"
                        title="Refresh audio list"
                    >
                        <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-blue-600' : ''}`} />
                    </button>
                </div>
            </div>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl border-2 border-slate-300 p-4 shadow-sm max-w-xl">
                <div className="relative">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search audio files..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 text-xs text-slate-950 font-bold placeholder-slate-500 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                    />
                </div>
            </div>

            {/* Table - High Contrast */}
            <div className="bg-white rounded-2xl border-2 border-slate-300 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                        <thead className="bg-slate-100 text-slate-800 uppercase tracking-wider font-black text-[11px] border-b-2 border-slate-300">
                            <tr>
                                <th className="py-3.5 px-5">Name</th>
                                <th className="py-3.5 px-5">Filename</th>
                                <th className="py-3.5 px-4">Size</th>
                                <th className="py-3.5 px-4">Uploaded At</th>
                                <th className="py-3.5 px-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y-2 divide-slate-100 font-sans">
                            {filtered.map((item) => {
                                const isCurrentPlaying = playingId === item.id;
                                return (
                                    <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                                        {/* Name with Audio Icon */}
                                        <td className="py-4 px-5">
                                            <div className="flex items-center gap-3.5">
                                                <button
                                                    onClick={() => togglePlay(item.id)}
                                                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all cursor-pointer shadow-xs ${
                                                        isCurrentPlaying
                                                            ? 'bg-blue-600 text-white shadow-md scale-105'
                                                            : 'bg-blue-100 text-blue-800 hover:bg-blue-200 border border-blue-300'
                                                    }`}
                                                    title={isCurrentPlaying ? 'Pause Audio' : 'Play Audio'}
                                                >
                                                    {isCurrentPlaying ? (
                                                        <Pause className="w-4 h-4" />
                                                    ) : (
                                                        <Play className="w-4 h-4 ml-0.5" />
                                                    )}
                                                </button>
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-extrabold text-slate-950 text-xs">
                                                        {item.name}
                                                    </p>
                                                    {isCurrentPlaying && (
                                                        <div className="flex items-center gap-2 mt-2 pt-1.5 border-t border-slate-200">
                                                            <div className="flex items-center gap-0.5 text-blue-600 mr-0.5">
                                                                <span className="w-0.5 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                                                                <span className="w-0.5 h-3.5 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></span>
                                                                <span className="w-0.5 h-2 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></span>
                                                            </div>
                                                            <span className="font-mono text-[10px] font-black text-slate-800 min-w-[24px]">
                                                                {formatTime(currentTime)}
                                                            </span>
                                                            <input
                                                                type="range"
                                                                min="0"
                                                                max={item.totalSec || 30}
                                                                step="0.5"
                                                                value={currentTime}
                                                                onChange={(e) => setCurrentTime(Number(e.target.value))}
                                                                className="w-20 sm:w-28 h-1.5 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none"
                                                                title="Scrub timeline"
                                                            />
                                                            <span className="font-mono text-[10px] font-bold text-slate-500 min-w-[24px]">
                                                                {formatTime(item.totalSec || 30)}
                                                            </span>
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    const speeds = [1.0, 1.25, 1.5, 2.0];
                                                                    setPlaybackSpeed((prev) => speeds[(speeds.indexOf(prev) + 1) % speeds.length]);
                                                                }}
                                                                className="px-1.5 py-0.5 rounded font-mono text-[10px] font-black bg-white text-slate-800 border border-slate-300 hover:border-blue-600 hover:text-blue-600 transition-colors cursor-pointer shadow-2xs"
                                                                title="Playback Speed (Click to change)"
                                                            >
                                                                {playbackSpeed}x
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </td>

                                        {/* Filename */}
                                        <td className="py-4 px-5 font-mono text-slate-700 text-xs font-bold">
                                            {item.filename}
                                        </td>

                                        {/* Size */}
                                        <td className="py-4 px-4 font-mono font-bold text-slate-800">
                                            {item.size}
                                        </td>

                                        {/* Uploaded At */}
                                        <td className="py-4 px-4 text-slate-700 font-semibold">
                                            {item.uploadedAt}
                                        </td>

                                        {/* Actions */}
                                        <td className="py-4 px-5 text-right">
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className="p-1.5 rounded-lg text-rose-600 hover:text-rose-800 hover:bg-rose-50 transition-colors cursor-pointer"
                                                title="Delete file"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Upload Modal */}
            {isUploadOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border-2 border-slate-300">
                        <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-slate-200">
                            <h3 className="text-base font-black text-slate-950">
                                Upload PBX Audio File
                            </h3>
                            <button
                                onClick={() => setIsUploadOpen(false)}
                                className="text-slate-500 hover:text-slate-950 text-2xl font-black cursor-pointer"
                            >
                                &times;
                            </button>
                        </div>

                        <div className="space-y-4 mb-6 text-xs">
                            <div className="p-8 border-2 border-dashed border-slate-300 hover:border-blue-600 rounded-2xl text-center bg-slate-50 transition-colors cursor-pointer">
                                <Upload className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                                <p className="font-bold text-slate-900">Click to upload or drag & drop</p>
                                <p className="text-[11px] text-slate-600 mt-1 font-medium">WAV (8kHz or 16kHz Mono) or MP3 up to 10MB</p>
                            </div>
                        </div>

                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => setIsUploadOpen(false)}
                                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl text-xs font-bold cursor-pointer"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setIsUploadOpen(false)}
                                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-black cursor-pointer shadow-sm"
                            >
                                Upload & Convert
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DemoAudioLibrary;
