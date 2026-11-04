import React, { useState, useRef, useEffect } from 'react';
import {
    Phone,
    Users,
    CornerDownRight,
    Link as LinkIcon,
    PhoneForwarded,
    PhoneCall,
    CornerUpLeft,
    RotateCcw,
    PhoneOff,
    Plus,
    Minus,
    Maximize2,
    Lock,
    Unlock,
    Info,
    Edit3,
    Trash2,
    Check,
    X,
    Settings
} from 'lucide-react';

const ACTION_BUTTONS = [
    { type: 'Extension', label: 'Extension', icon: Phone, color: 'text-blue-600', bg: 'bg-blue-50/50 hover:bg-blue-50/80', border: 'border-blue-200/80' },
    { type: 'Ring Group', label: 'Ring Group', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-50/50 hover:bg-indigo-50/80', border: 'border-indigo-200/80' },
    { type: 'Submenu', label: 'Submenu', icon: CornerDownRight, color: 'text-purple-600', bg: 'bg-purple-50/50 hover:bg-purple-50/80', border: 'border-purple-200/80' },
    { type: 'Route to IVR', label: 'Route to IVR', icon: LinkIcon, color: 'text-emerald-600', bg: 'bg-emerald-50/50 hover:bg-emerald-50/80', border: 'border-emerald-200/80' },
    { type: 'DID Forward', label: 'DID Forward', icon: PhoneForwarded, color: 'text-amber-600', bg: 'bg-amber-50/50 hover:bg-amber-50/80', border: 'border-amber-200/80' },
    { type: 'External No.', label: 'External No.', icon: PhoneCall, color: 'text-orange-600', bg: 'bg-orange-50/50 hover:bg-orange-50/80', border: 'border-orange-200/80' },
    { type: 'Go Back', label: 'Go Back', icon: CornerUpLeft, color: 'text-slate-600', bg: 'bg-slate-50 hover:bg-slate-100', border: 'border-slate-200' },
    { type: 'Repeat Menu', label: 'Repeat Menu', icon: RotateCcw, color: 'text-cyan-600', bg: 'bg-cyan-50/50 hover:bg-cyan-50/80', border: 'border-cyan-200/80' },
    { type: 'Hangup', label: 'Hangup', icon: PhoneOff, color: 'text-rose-600', bg: 'bg-rose-50/50 hover:bg-rose-50/80', border: 'border-rose-200/80' }
];

const INITIAL_NODES = [
    {
        id: 'node-1',
        press: 'Press 1',
        type: 'EXTENSION',
        icon: Phone,
        title: 'Unconfigured',
        sub: 'Ext: 1001',
        border: 'border-blue-200',
        iconColor: 'text-blue-500'
    },
    {
        id: 'node-2',
        press: 'Press 2',
        type: 'RING GROUP',
        icon: Users,
        title: 'Unconfigured',
        sub: 'Sales Team',
        border: 'border-indigo-200',
        iconColor: 'text-indigo-500'
    },
    {
        id: 'node-3',
        press: 'Press 3',
        type: 'SUBMENU',
        icon: CornerDownRight,
        title: 'No Greeting',
        sub: 'Support Menu',
        border: 'border-purple-200',
        iconColor: 'text-purple-500',
        hasChildrenPort: true
    },
    {
        id: 'node-4',
        press: 'Press 4',
        type: 'ROUTE TO IVR',
        icon: LinkIcon,
        title: 'Unconfigured',
        sub: 'Billing Menu',
        border: 'border-emerald-200',
        iconColor: 'text-emerald-500'
    }
];

const DemoIVRMenus = () => {
    const [nodes, setNodes] = useState(INITIAL_NODES);
    const [zoom, setZoom] = useState(1);
    const [isLocked, setIsLocked] = useState(false);
    const [activeNodeEdit, setActiveNodeEdit] = useState(null);
    const [showTip, setShowTip] = useState(true);

    const treeContainerRef = useRef(null);
    const rootPortRef = useRef(null);
    const nodePinRefs = useRef({});
    const [paths, setPaths] = useState([]);

    // Compute exact SVG Bezier paths from root port to every node top pin
    const updateConnectorPaths = () => {
        if (!treeContainerRef.current || !rootPortRef.current) return;
        const containerRect = treeContainerRef.current.getBoundingClientRect();
        const rootRect = rootPortRef.current.getBoundingClientRect();

        const startX = (rootRect.left + rootRect.width / 2 - containerRect.left) / zoom;
        const startY = (rootRect.top + rootRect.height / 2 - containerRect.top) / zoom;

        const newPaths = nodes.map((node) => {
            const pinEl = nodePinRefs.current[node.id];
            if (!pinEl) return null;
            const pinRect = pinEl.getBoundingClientRect();
            const endX = (pinRect.left + pinRect.width / 2 - containerRect.left) / zoom;
            const endY = (pinRect.top + pinRect.height / 2 - containerRect.top) / zoom;

            // Calculate smooth Bezier curve control points
            const midY = startY + (endY - startY) * 0.55;
            const pathD = `M ${startX} ${startY} C ${startX} ${midY}, ${endX} ${midY}, ${endX} ${endY}`;

            return {
                id: node.id,
                pathD,
                endX,
                endY,
                press: node.press
            };
        }).filter(Boolean);

        setPaths(newPaths);
    };

    useEffect(() => {
        updateConnectorPaths();
        const handleResize = () => updateConnectorPaths();
        window.addEventListener('resize', handleResize);
        const timer = setTimeout(updateConnectorPaths, 60);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timer);
        };
    }, [nodes, zoom]);

    const handleAddBlock = (action) => {
        if (isLocked) return;
        const nextPressNum = nodes.length + 1;
        if (nextPressNum > 9) return;

        let icon = Phone;
        let border = 'border-blue-200';
        let iconColor = 'text-blue-500';

        if (action.type === 'Ring Group') {
            icon = Users;
            border = 'border-indigo-200';
            iconColor = 'text-indigo-500';
        } else if (action.type === 'Submenu') {
            icon = CornerDownRight;
            border = 'border-purple-200';
            iconColor = 'text-purple-500';
        } else if (action.type === 'Route to IVR') {
            icon = LinkIcon;
            border = 'border-emerald-200';
            iconColor = 'text-emerald-500';
        } else if (action.type === 'DID Forward') {
            icon = PhoneForwarded;
            border = 'border-amber-200';
            iconColor = 'text-amber-500';
        } else if (action.type === 'External No.') {
            icon = PhoneCall;
            border = 'border-orange-200';
            iconColor = 'text-orange-500';
        } else if (action.type === 'Hangup') {
            icon = PhoneOff;
            border = 'border-rose-200';
            iconColor = 'text-rose-500';
        } else if (action.type === 'Repeat Menu') {
            icon = RotateCcw;
            border = 'border-cyan-200';
            iconColor = 'text-cyan-500';
        } else if (action.type === 'Go Back') {
            icon = CornerUpLeft;
            border = 'border-slate-200';
            iconColor = 'text-slate-500';
        }

        const newNode = {
            id: `node-${Date.now()}`,
            press: `Press ${nextPressNum}`,
            type: action.type.toUpperCase(),
            icon,
            title: 'Unconfigured',
            sub: `${action.label} Destination`,
            border,
            iconColor,
            hasChildrenPort: action.type === 'Submenu'
        };

        setNodes([...nodes, newNode]);
    };

    const handleDeleteNode = (id) => {
        if (isLocked) return;
        setNodes(nodes.filter((n) => n.id !== id));
        if (activeNodeEdit?.id === id) setActiveNodeEdit(null);
    };

    const handleSaveEdit = (e) => {
        e.preventDefault();
        setNodes(nodes.map((n) => (n.id === activeNodeEdit.id ? activeNodeEdit : n)));
        setActiveNodeEdit(null);
    };

    return (
        <div className="space-y-4">
            {/* Top Intro Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                    <h1 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
                        IVR Studio & Visual Call Flow Builder
                    </h1>
                    <p className="text-slate-500 text-xs mt-0.5">
                        Click any block on the left to add and automatically connect it directly to the Main Menu.
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setNodes(INITIAL_NODES)}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 text-xs font-medium cursor-pointer shadow-xs transition-colors"
                    >
                        Reset Tree
                    </button>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                        Live Studio
                    </span>
                </div>
            </div>

            {/* Main Interactive Flow Canvas */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col lg:flex-row min-h-[660px] overflow-hidden relative">
                
                {/* LEFT SIDEBAR: ACTIONS PALETTE */}
                <div className="w-full lg:w-72 border-b lg:border-b-0 lg:border-r border-slate-200 p-5 flex flex-col justify-between shrink-0 bg-white z-20">
                    <div>
                        <div className="mb-4">
                            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                ACTIONS
                            </h2>
                            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                                Click any block to add it directly to the IVR in sequence.
                            </p>
                        </div>

                        {/* Action buttons list */}
                        <div className="space-y-2">
                            {ACTION_BUTTONS.map((action) => {
                                const Icon = action.icon;
                                return (
                                    <button
                                        key={action.type}
                                        type="button"
                                        disabled={isLocked || nodes.length >= 8}
                                        onClick={() => handleAddBlock(action)}
                                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl border ${action.border} ${action.bg} transition-all duration-150 cursor-pointer group disabled:opacity-40 disabled:cursor-not-allowed text-left`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon className={`w-4 h-4 ${action.color} group-hover:scale-105 transition-transform`} />
                                            <span className={`text-xs font-semibold ${action.color}`}>
                                                {action.label}
                                            </span>
                                        </div>
                                        <Plus className={`w-3.5 h-3.5 ${action.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 mt-4">
                        <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                            <Info className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                            <span>{nodes.length} / 8 DTMF keys currently allocated</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT AREA: CANVAS & DYNAMIC CONNECTED GRAPH */}
                <div className="flex-1 bg-[#fbfcfe] relative overflow-hidden flex flex-col">
                    
                    {/* Subtle dot matrix grid background */}
                    <div
                        className="absolute inset-0 pointer-events-none opacity-45"
                        style={{
                            backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
                            backgroundSize: '24px 24px'
                        }}
                    />

                    {/* Tip Bar */}
                    {showTip && (
                        <div className="relative z-20 m-4 p-3 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-xl flex items-center justify-between text-xs text-slate-600 shadow-xs">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                                <span>All added action blocks connect automatically to the Main Menu with live curved routing lines.</span>
                            </div>
                            <button
                                onClick={() => setShowTip(false)}
                                className="text-slate-400 hover:text-slate-700 font-bold p-1 cursor-pointer"
                            >
                                &times;
                            </button>
                        </div>
                    )}

                    {/* Canvas Scroll Area */}
                    <div className="flex-1 overflow-auto flex items-center justify-center p-6 lg:p-12 relative">
                        <div
                            ref={treeContainerRef}
                            className="flex flex-col items-center select-none relative pt-4 pb-14"
                            style={{ transform: `scale(${zoom})`, transformOrigin: 'top center' }}
                        >
                            {/* SVG CANVAS LAYER FOR ALL CONNECTOR WIRES & ARROWS */}
                            <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-10">
                                <defs>
                                    <marker
                                        id="arrow"
                                        viewBox="0 0 10 10"
                                        refX="5"
                                        refY="5"
                                        markerWidth="6"
                                        markerHeight="6"
                                        orient="auto-start-reverse"
                                    >
                                        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#64748b" />
                                    </marker>
                                </defs>
                                {paths.map((p) => (
                                    <g key={p.id}>
                                        {/* Smooth Bezier line connecting from Main Menu down to each child node pin */}
                                        <path
                                            d={p.pathD}
                                            fill="none"
                                            stroke="#64748b"
                                            strokeWidth="1.5"
                                            markerEnd="url(#arrow)"
                                            strokeLinecap="round"
                                        />
                                    </g>
                                ))}
                            </svg>

                            {/* 1. ROOT NODE: IVR ENTRY / MAIN MENU */}
                            <div className="relative z-20 mb-20">
                                <div className="bg-white border border-slate-200/90 rounded-2xl px-6 py-3.5 shadow-sm min-w-[210px] flex items-center gap-3.5">
                                    <div className="w-9 h-9 rounded-xl bg-[#0b192c] text-white flex items-center justify-center shadow-xs shrink-0">
                                        <Phone className="w-4 h-4 text-emerald-400" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 leading-none">
                                            IVR ENTRY
                                        </p>
                                        <h3 className="text-sm font-bold text-slate-900 mt-1">
                                            Main Menu
                                        </h3>
                                    </div>
                                </div>

                                {/* Blue output port at bottom center of Main Menu (wires start here) */}
                                <div
                                    ref={rootPortRef}
                                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#1a68ff] border-2 border-white shadow-xs z-30"
                                />
                            </div>

                            {/* 2. CONNECTED CHILD NODES ROW */}
                            <div className="flex items-start justify-center gap-5 lg:gap-7 flex-nowrap relative z-20">
                                {nodes.map((node) => {
                                    const NodeIcon = node.icon;
                                    return (
                                        <div key={node.id} className="flex flex-col items-center group relative">
                                            
                                            {/* Top Pin / Input Port (connector line ends here) */}
                                            <div
                                                ref={(el) => {
                                                    if (el) nodePinRefs.current[node.id] = el;
                                                }}
                                                className="w-2.5 h-2.5 rounded-full bg-slate-400 border border-white shadow-xs mb-1.5 z-30"
                                            />

                                            {/* Press X Pill (Matching Screenshot 3) */}
                                            <div className="mb-2 z-20">
                                                <span className="inline-block px-3 py-0.5 rounded-full bg-white border border-slate-200 text-[11px] font-semibold text-slate-600 shadow-xs select-none">
                                                    {node.press}
                                                </span>
                                            </div>

                                            {/* Node Card Container */}
                                            <div
                                                onClick={() => setActiveNodeEdit(node)}
                                                className={`w-[185px] p-3.5 rounded-2xl border ${node.border} shadow-xs hover:shadow-md transition-all cursor-pointer relative bg-white text-left`}
                                            >
                                                {/* Top Row: Icon + Type + Title */}
                                                <div className="flex items-center gap-2.5">
                                                    <NodeIcon className={`w-4 h-4 shrink-0 ${node.iconColor}`} />
                                                    <div className="min-w-0">
                                                        <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 truncate">
                                                            {node.type}
                                                        </p>
                                                        <p className="text-xs font-bold text-slate-900 truncate">
                                                            {node.title}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Separator Line */}
                                                <div className="border-t border-slate-100 my-2.5" />

                                                {/* Bottom Row: Destination + Edit Pencil */}
                                                <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                                                    <span className="truncate text-slate-400">{node.sub}</span>
                                                    <Edit3 className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                                                </div>

                                                {/* Delete button on hover */}
                                                {!isLocked && (
                                                    <button
                                                        type="button"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleDeleteNode(node.id);
                                                        }}
                                                        className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-rose-600 shadow-xs cursor-pointer"
                                                        title="Remove branch"
                                                    >
                                                        &times;
                                                    </button>
                                                )}

                                                {/* Blue bottom port on submenus like Screenshot 3 */}
                                                {node.hasChildrenPort && (
                                                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#1a68ff] border-2 border-white shadow-xs z-30" />
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM-LEFT CANVAS CONTROLS */}
                    <div className="absolute bottom-5 left-5 flex flex-col bg-white border border-slate-200 rounded-xl shadow-md overflow-hidden z-20">
                        <button
                            type="button"
                            onClick={() => setZoom((z) => Math.min(1.5, z + 0.1))}
                            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors border-b border-slate-100 cursor-pointer"
                            title="Zoom In"
                        >
                            <Plus className="w-4 h-4" />
                        </button>
                        <button
                            type="button"
                            onClick={() => setZoom((z) => Math.max(0.6, z - 0.1))}
                            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors border-b border-slate-100 cursor-pointer"
                            title="Zoom Out"
                        >
                            <Minus className="w-4 h-4" />
                        </button>
                        <button
                            type="button"
                            onClick={() => setZoom(1)}
                            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors border-b border-slate-100 cursor-pointer"
                            title="Reset Zoom"
                        >
                            <Maximize2 className="w-4 h-4" />
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsLocked(!isLocked)}
                            className={`p-2 transition-colors cursor-pointer ${isLocked ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
                            title={isLocked ? 'Unlock canvas' : 'Lock canvas'}
                        >
                            {isLocked ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
                        </button>
                    </div>

                    {/* BOTTOM-RIGHT REACT FLOW WATERMARK */}
                    <div className="absolute bottom-4 right-5 text-[11px] font-medium text-slate-400 select-none z-10 pointer-events-none">
                        React Flow
                    </div>
                </div>
            </div>

            {/* EDIT NODE POPUP MODAL */}
            {activeNodeEdit && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fade-in">
                    <div className="bg-white rounded-2xl max-w-sm w-full p-5 shadow-2xl border border-slate-200">
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                                <Settings className="w-4 h-4 text-blue-600" />
                                <h3 className="text-sm font-bold text-slate-800">
                                    Edit {activeNodeEdit.press} Destination
                                </h3>
                            </div>
                            <button
                                onClick={() => setActiveNodeEdit(null)}
                                className="text-slate-400 hover:text-slate-700 text-lg font-bold cursor-pointer"
                            >
                                &times;
                            </button>
                        </div>

                        <form onSubmit={handleSaveEdit} className="space-y-3 text-xs">
                            <div>
                                <label className="block text-slate-600 font-semibold mb-1">
                                    Display Label
                                </label>
                                <input
                                    type="text"
                                    value={activeNodeEdit.title}
                                    onChange={(e) => setActiveNodeEdit({ ...activeNodeEdit, title: e.target.value })}
                                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-slate-600 font-semibold mb-1">
                                    Routing Target / Extension
                                </label>
                                <input
                                    type="text"
                                    value={activeNodeEdit.sub}
                                    onChange={(e) => setActiveNodeEdit({ ...activeNodeEdit, sub: e.target.value })}
                                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-slate-600 font-semibold mb-1">
                                    DTMF Key
                                </label>
                                <select
                                    value={activeNodeEdit.press}
                                    onChange={(e) => setActiveNodeEdit({ ...activeNodeEdit, press: e.target.value })}
                                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium focus:outline-none focus:border-blue-400"
                                >
                                    {['Press 1', 'Press 2', 'Press 3', 'Press 4', 'Press 5', 'Press 6', 'Press 7', 'Press 8', 'Press 9', 'Press 0', 'Press *', 'Press #'].map((k) => (
                                        <option key={k}>{k}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                                <button
                                    type="button"
                                    onClick={() => setActiveNodeEdit(null)}
                                    className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-medium cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold cursor-pointer shadow-xs"
                                >
                                    Save Branch
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DemoIVRMenus;