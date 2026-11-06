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
    Settings,
    Move,
    Zap
} from 'lucide-react';

const ACTION_BUTTONS = [
    { type: 'Extension', label: 'Extension', icon: Phone, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/40 dark:hover:bg-blue-800/50', border: 'border-blue-200/80 dark:border-blue-900/40' },
    { type: 'Ring Group', label: 'Ring Group', icon: Users, color: 'text-indigo-600 dark:text-indigo-400', bg: 'bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900/40 dark:hover:bg-indigo-800/50', border: 'border-indigo-200/80 dark:border-indigo-900/40' },
    { type: 'Submenu', label: 'Submenu', icon: CornerDownRight, color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/40 dark:hover:bg-purple-800/50', border: 'border-purple-200/80 dark:border-purple-900/40' },
    { type: 'Route to IVR', label: 'Route to IVR', icon: LinkIcon, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-900/40 dark:hover:bg-emerald-800/50', border: 'border-emerald-200/80 dark:border-emerald-900/40' },
    { type: 'DID Forward', label: 'DID Forward', icon: PhoneForwarded, color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-100 hover:bg-amber-200 dark:bg-amber-900/40 dark:hover:bg-amber-800/50', border: 'border-amber-200/80 dark:border-amber-900/40' },
    { type: 'External No.', label: 'External No.', icon: PhoneCall, color: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-100 hover:bg-orange-200 dark:bg-orange-900/40 dark:hover:bg-orange-800/50', border: 'border-orange-200/80 dark:border-orange-900/40' },
    { type: 'Go Back', label: 'Go Back', icon: CornerUpLeft, color: 'text-slate-600 dark:text-slate-300', bg: 'bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800/50 dark:hover:bg-zinc-700/60', border: 'border-slate-200 dark:border-zinc-800/50' },
    { type: 'Repeat Menu', label: 'Repeat Menu', icon: RotateCcw, color: 'text-cyan-600 dark:text-cyan-400', bg: 'bg-cyan-100 hover:bg-cyan-200 dark:bg-cyan-900/40 dark:hover:bg-cyan-800/50', border: 'border-cyan-200/80 dark:border-cyan-900/40' },
    { type: 'Hangup', label: 'Hangup', icon: PhoneOff, color: 'text-rose-600 dark:text-rose-400', bg: 'bg-rose-100 hover:bg-rose-200 dark:bg-rose-900/40 dark:hover:bg-rose-800/50', border: 'border-rose-200/80 dark:border-rose-900/40' }
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
        iconColor: 'text-blue-500',
        parentId: 'main-menu',
        x: 80,
        y: 230
    },
    {
        id: 'node-2',
        press: 'Press 2',
        type: 'RING GROUP',
        icon: Users,
        title: 'Unconfigured',
        sub: 'Sales Team',
        border: 'border-indigo-200',
        iconColor: 'text-indigo-500',
        parentId: 'main-menu',
        x: 310,
        y: 230
    },
    {
        id: 'node-3',
        press: 'Press 3',
        type: 'SUBMENU',
        icon: CornerDownRight,
        title: 'Support Submenu',
        sub: 'Support Menu',
        border: 'border-purple-300',
        iconColor: 'text-purple-600',
        hasChildrenPort: true,
        parentId: 'main-menu',
        x: 540,
        y: 230
    },
    {
        id: 'node-4',
        press: 'Press 4',
        type: 'ROUTE TO IVR',
        icon: LinkIcon,
        title: 'Unconfigured',
        sub: 'Billing Menu',
        border: 'border-emerald-200',
        iconColor: 'text-emerald-500',
        parentId: 'main-menu',
        x: 770,
        y: 230
    }
];

const INITIAL_MAIN_MENU = {
    id: 'main-menu',
    title: 'Main Menu',
    x: 425,
    y: 40
};

const DemoIVRMenus = () => {
    const [nodes, setNodes] = useState(INITIAL_NODES);
    const [mainMenuPos, setMainMenuPos] = useState(INITIAL_MAIN_MENU);
    const [zoom, setZoom] = useState(1);
    const [isLocked, setIsLocked] = useState(false);
    const [activeNodeEdit, setActiveNodeEdit] = useState(null);
    const [showTip, setShowTip] = useState(true);

    // Live string drag state: { sourceId, startX, startY, currentX, currentY }
    const [dragWire, setDragWire] = useState(null);
    const [hoveredTargetNodeId, setHoveredTargetNodeId] = useState(null);

    const canvasAreaRef = useRef(null);
    const draggingNodeRef = useRef(null);

    // Calculate source port coordinates (bottom center of parent)
    const getSourcePortPos = (sourceId) => {
        if (sourceId === 'main-menu') {
            return { x: mainMenuPos.x + 105, y: mainMenuPos.y + 68 };
        }
        const parent = nodes.find((n) => n.id === sourceId);
        if (parent) {
            return { x: parent.x + 92.5, y: parent.y + 98 };
        }
        return { x: 0, y: 0 };
    };

    // Calculate target pin coordinates (top center of child card)
    const getTargetPinPos = (targetNodeId) => {
        const node = nodes.find((n) => n.id === targetNodeId);
        if (node) {
            return { x: node.x + 92.5, y: node.y };
        }
        return { x: 0, y: 0 };
    };

    // 1. FREE-DRAG NODE ACROSS CANVAS
    const handleMouseDownNode = (e, nodeId) => {
        if (isLocked || e.button !== 0 || dragWire) return;
        if (e.target.closest('button') || e.target.closest('input') || e.target.closest('select') || e.target.closest('.port-handle')) {
            return;
        }

        e.stopPropagation();
        const startX = e.clientX;
        const startY = e.clientY;

        if (nodeId === 'main-menu') {
            draggingNodeRef.current = {
                id: 'main-menu',
                startX,
                startY,
                origX: mainMenuPos.x,
                origY: mainMenuPos.y
            };
        } else {
            const targetNode = nodes.find((n) => n.id === nodeId);
            if (!targetNode) return;
            draggingNodeRef.current = {
                id: nodeId,
                startX,
                startY,
                origX: targetNode.x,
                origY: targetNode.y
            };
        }

        const handleMouseMove = (moveEvt) => {
            if (!draggingNodeRef.current) return;
            const deltaX = (moveEvt.clientX - draggingNodeRef.current.startX) / zoom;
            const deltaY = (moveEvt.clientY - draggingNodeRef.current.startY) / zoom;

            if (draggingNodeRef.current.id === 'main-menu') {
                setMainMenuPos((prev) => ({
                    ...prev,
                    x: Math.max(10, Math.min(1450, Math.round(draggingNodeRef.current.origX + deltaX))),
                    y: Math.max(10, Math.min(1000, Math.round(draggingNodeRef.current.origY + deltaY)))
                }));
            } else {
                const targetId = draggingNodeRef.current.id;
                setNodes((prevNodes) =>
                    prevNodes.map((n) =>
                        n.id === targetId
                            ? {
                                ...n,
                                x: Math.max(10, Math.min(1450, Math.round(draggingNodeRef.current.origX + deltaX))),
                                y: Math.max(10, Math.min(1000, Math.round(draggingNodeRef.current.origY + deltaY)))
                            }
                            : n
                    )
                );
            }
        };

        const handleMouseUp = () => {
            draggingNodeRef.current = null;
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    // 2. LIVE STRING DRAGGING (Pull from connector spot and drop onto target block)
    const handleStartWireDrag = (e, sourceId) => {
        if (isLocked || e.button !== 0) return;
        e.stopPropagation();
        e.preventDefault();

        const canvasRect = canvasAreaRef.current.getBoundingClientRect();
        const startPos = getSourcePortPos(sourceId);

        setDragWire({
            sourceId,
            startX: startPos.x,
            startY: startPos.y,
            currentX: (e.clientX - canvasRect.left + canvasAreaRef.current.scrollLeft) / zoom,
            currentY: (e.clientY - canvasRect.top + canvasAreaRef.current.scrollTop) / zoom
        });

        const handleWireMove = (moveEvt) => {
            if (!canvasAreaRef.current) return;
            const currentRect = canvasAreaRef.current.getBoundingClientRect();
            const mouseX = (moveEvt.clientX - currentRect.left + canvasAreaRef.current.scrollLeft) / zoom;
            const mouseY = (moveEvt.clientY - currentRect.top + canvasAreaRef.current.scrollTop) / zoom;

            setDragWire((prev) => (prev ? { ...prev, currentX: mouseX, currentY: mouseY } : null));

            // Highlight potential drop target block
            const el = document.elementFromPoint(moveEvt.clientX, moveEvt.clientY);
            const cardEl = el?.closest('[data-node-id]');
            const targetId = cardEl?.getAttribute('data-node-id');
            setHoveredTargetNodeId(targetId && targetId !== sourceId ? targetId : null);
        };

        const handleWireRelease = (upEvt) => {
            window.removeEventListener('mousemove', handleWireMove);
            window.removeEventListener('mouseup', handleWireRelease);

            const targetElement = document.elementFromPoint(upEvt.clientX, upEvt.clientY);
            const targetCard = targetElement?.closest('[data-node-id]');

            if (targetCard) {
                const targetNodeId = targetCard.getAttribute('data-node-id');
                if (targetNodeId && targetNodeId !== sourceId) {
                    // Re-route! Disconnects from current parent (e.g. Main Menu) and connects to new source (e.g. Submenu)
                    setNodes((prevNodes) =>
                        prevNodes.map((n) =>
                            n.id === targetNodeId ? { ...n, parentId: sourceId } : n
                        )
                    );
                }
            }

            setDragWire(null);
            setHoveredTargetNodeId(null);
        };

        window.addEventListener('mousemove', handleWireMove);
        window.addEventListener('mouseup', handleWireRelease);
    };

    // Calculate all active wire paths
    const calculatePaths = () => {
        return nodes.map((node) => {
            if (!node.parentId) return null;

            const parentPos = getSourcePortPos(node.parentId);
            const childPos = getTargetPinPos(node.id);

            const isSubmenu = node.parentId !== 'main-menu';
            const strokeColor = isSubmenu ? '#9333ea' : '#64748b';

            const midY = parentPos.y + (childPos.y - parentPos.y) * 0.55;
            const pathD = `M ${parentPos.x} ${parentPos.y} C ${parentPos.x} ${midY}, ${childPos.x} ${midY}, ${childPos.x} ${childPos.y}`;

            return {
                id: node.id,
                parentId: node.parentId,
                pathD,
                strokeColor,
                markerId: isSubmenu ? 'arrow-purple' : 'arrow-slate',
                press: node.press
            };
        }).filter(Boolean);
    };

    // Add Block from Palette
    const handleAddBlock = (action) => {
        if (isLocked) return;
        const totalNodes = nodes.length + 1;
        if (totalNodes > 12) return;

        let icon = Phone;
        let border = 'border-blue-200';
        let iconColor = 'text-blue-500';

        if (action.type === 'Ring Group') {
            icon = Users;
            border = 'border-indigo-200';
            iconColor = 'text-indigo-500';
        } else if (action.type === 'Submenu') {
            icon = CornerDownRight;
            border = 'border-purple-300';
            iconColor = 'text-purple-600';
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

        const nextPressNum = nodes.length + 1;
        const lastNode = nodes[nodes.length - 1];
        const newX = lastNode ? lastNode.x + 220 : 100;
        const newY = lastNode ? lastNode.y : 230;

        const newNode = {
            id: `node-${Date.now()}`,
            press: `Press ${nextPressNum}`,
            type: action.type.toUpperCase(),
            icon,
            title: action.type === 'Submenu' ? 'New Submenu' : 'Unconfigured',
            sub: `${action.label} Destination`,
            border,
            iconColor,
            hasChildrenPort: action.type === 'Submenu',
            parentId: 'main-menu',
            x: Math.min(newX, 1250),
            y: newY
        };

        setNodes([...nodes, newNode]);
    };

    const handleDeleteNode = (id) => {
        if (isLocked) return;
        setNodes(
            nodes
                .filter((n) => n.id !== id)
                .map((n) => (n.parentId === id ? { ...n, parentId: 'main-menu' } : n))
        );
        if (activeNodeEdit?.id === id) setActiveNodeEdit(null);
    };

    const handleResetTree = () => {
        setNodes(INITIAL_NODES);
        setMainMenuPos(INITIAL_MAIN_MENU);
        setZoom(1);
        setDragWire(null);
    };

    const handleSaveEdit = (e) => {
        e.preventDefault();
        setNodes(nodes.map((n) => (n.id === activeNodeEdit.id ? activeNodeEdit : n)));
        setActiveNodeEdit(null);
    };

    const paths = calculatePaths();

    // Live In-Flight String Curve
    let dragWirePath = null;
    let dragWireColor = '#2563eb';
    if (dragWire) {
        if (dragWire.sourceId !== 'main-menu') {
            dragWireColor = '#9333ea'; // Purple wire when dragging from Submenu!
        }
        const midY = dragWire.startY + (dragWire.currentY - dragWire.startY) * 0.55;
        dragWirePath = `M ${dragWire.startX} ${dragWire.startY} C ${dragWire.startX} ${midY}, ${dragWire.currentX} ${midY}, ${dragWire.currentX} ${dragWire.currentY}`;
    }

    return (
        <div className="space-y-4">
            {/* Top Intro Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                    <h1 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
                        Interactive Visual IVR Studio
                    </h1>
                    <p className="text-slate-500 text-xs mt-0.5">
                        Move blocks anywhere. Pull a string from the Submenu or Main Menu connection spot directly onto any block to re-route it.
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={handleResetTree}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 text-xs font-medium cursor-pointer shadow-xs transition-colors"
                    >
                        Reset Layout
                    </button>
                    <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-blue-600" />
                        Live Wire Re-Routing
                    </span>
                </div>
            </div>

            {/* Hint Notification Bar */}
            {showTip && (
                <div className="bg-yellow-95 dark:bg-yellow-100/40 border border-slate-200/90 dark:border-zinc-800/80 rounded-xl px-4 py-2.5 flex items-center justify-between text-xs text-slate-600 dark:text-zinc-900 shadow-2xs">
                    <div className="flex items-center gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-600 animate-pulse" />
                        <span>
                            <strong className="text-slate-900 dark:text-zinc-900">Drag to Re-route:</strong> Drag an Extension or Ring Group where you want it. Then <strong className="text-slate-900 dark:text-zinc-900">click & drag a string from the Submenu's purple spot</strong> and release it on the Extension block. It automatically disconnects from the Main Menu and connects to the Submenu!
                        </span>
                    </div>
                    <button
                        onClick={() => setShowTip(false)}
                        className="text-slate-400 hover:text-slate-700 dark:hover:text-zinc-200 font-bold p-1 cursor-pointer"
                    >
                        &times;
                    </button>
                </div>
            )}

            {/* Main Interactive Flow Canvas */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col lg:flex-row min-h-[700px] overflow-hidden relative">

                {/* LEFT SIDEBAR: ACTIONS PALETTE */}
                <div className="w-full lg:w-72 border-b lg:border-b-0 lg:border-r border-slate-200 p-5 flex flex-col justify-between shrink-0 bg-white z-20">
                    <div>
                        <div className="mb-4">
                            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                ACTIONS PALETTE
                            </h2>
                            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                                Click any block to add it directly to the canvas.
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
                                        disabled={isLocked || nodes.length >= 12}
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

                    <div className="pt-4 border-t border-slate-100 mt-4 space-y-2">
                        <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                            <Info className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                            <span>{nodes.length} / 12 blocks placed</span>
                        </div>
                        <div className="text-[10px] text-slate-400 leading-tight">
                            • Drag blocks to reposition<br />
                            • Drag strings from spots to re-route
                        </div>
                    </div>
                </div>

                {/* RIGHT AREA: CANVAS & DYNAMIC CONNECTED GRAPH */}
                <div
                    ref={canvasAreaRef}
                    className="flex-1 bg-[#fbfcfe] relative overflow-hidden flex flex-col select-none"
                >
                    {/* Subtle dot matrix grid background */}
                    <div
                        className="absolute inset-0 pointer-events-none opacity-45"
                        style={{
                            backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
                            backgroundSize: '24px 24px'
                        }}
                    />

                    {/* Canvas Scroll Area */}
                    <div className="flex-1 overflow-auto relative min-h-[620px] p-4">
                        <div
                            className="relative min-w-[1300px] min-h-[740px] transition-transform duration-75"
                            style={{
                                transform: `scale(${zoom})`,
                                transformOrigin: 'top left'
                            }}
                        >
                            {/* SVG CANVAS LAYER FOR ALL CONNECTOR WIRES & ARROWS */}
                            <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-10">
                                <defs>
                                    <marker
                                        id="arrow-slate"
                                        viewBox="0 0 10 10"
                                        refX="5"
                                        refY="5"
                                        markerWidth="6"
                                        markerHeight="6"
                                        orient="auto-start-reverse"
                                    >
                                        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#64748b" />
                                    </marker>

                                    <marker
                                        id="arrow-purple"
                                        viewBox="0 0 10 10"
                                        refX="5"
                                        refY="5"
                                        markerWidth="6"
                                        markerHeight="6"
                                        orient="auto-start-reverse"
                                    >
                                        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#9333ea" />
                                    </marker>

                                    <marker
                                        id="arrow-live"
                                        viewBox="0 0 10 10"
                                        refX="5"
                                        refY="5"
                                        markerWidth="6"
                                        markerHeight="6"
                                        orient="auto-start-reverse"
                                    >
                                        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill={dragWireColor} />
                                    </marker>
                                </defs>

                                {/* Render Active Connected Paths */}
                                {paths.map((p) => (
                                    <g key={p.id}>
                                        <path
                                            d={p.pathD}
                                            fill="none"
                                            stroke={p.strokeColor}
                                            strokeWidth="1.75"
                                            markerEnd={`url(#${p.markerId})`}
                                            strokeLinecap="round"
                                        />
                                    </g>
                                ))}

                                {/* Live In-Flight String Dragged by User */}
                                {dragWirePath && (
                                    <path
                                        d={dragWirePath}
                                        fill="none"
                                        stroke={dragWireColor}
                                        strokeWidth="2.5"
                                        strokeDasharray="6 4"
                                        markerEnd="url(#arrow-live)"
                                        strokeLinecap="round"
                                        className="animate-pulse"
                                    />
                                )}
                            </svg>

                            {/* 1. ROOT NODE: IVR ENTRY / MAIN MENU */}
                            <div
                                onMouseDown={(e) => handleMouseDownNode(e, 'main-menu')}
                                style={{
                                    position: 'absolute',
                                    left: `${mainMenuPos.x}px`,
                                    top: `${mainMenuPos.y}px`
                                }}
                                className="z-20 cursor-grab active:cursor-grabbing group select-none"
                            >
                                <div className="bg-white border border-slate-200/90 rounded-2xl px-6 py-3.5 shadow-sm min-w-[210px] flex items-center gap-3.5 hover:shadow-md hover:border-blue-300 transition-all relative">
                                    <div className="w-9 h-9 rounded-xl bg-[#0b192c] text-white flex items-center justify-center shadow-xs shrink-0">
                                        <Phone className="w-4 h-4 text-emerald-400" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 leading-none">
                                            IVR ENTRY
                                        </p>
                                        <h3 className="text-sm font-bold text-slate-900 mt-1">
                                            {mainMenuPos.title}
                                        </h3>
                                    </div>

                                    {/* Drag Grip indicator on hover */}
                                    <div className="absolute top-2 right-2 text-slate-300 group-hover:text-slate-400 transition-colors">
                                        <Move className="w-3 h-3" />
                                    </div>

                                    {/* Connection Spot: Blue Output Port on Main Menu */}
                                    <div
                                        onMouseDown={(e) => handleStartWireDrag(e, 'main-menu')}
                                        className="port-handle absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#1a68ff] border-2 border-white shadow-md z-30 hover:scale-150 active:scale-125 transition-transform cursor-crosshair flex items-center justify-center"
                                        title="Click & Drag string from here to connect to any block"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-white pointer-events-none" />
                                    </div>
                                </div>
                            </div>

                            {/* 2. DRAGGABLE & RE-CONNECTABLE CHILD NODES */}
                            {nodes.map((node) => {
                                const NodeIcon = node.icon;
                                const isConnected = Boolean(node.parentId);
                                const isSubmenuChild = node.parentId && node.parentId !== 'main-menu';
                                const isDropTargetHovered = hoveredTargetNodeId === node.id;

                                return (
                                    <div
                                        key={node.id}
                                        data-node-id={node.id}
                                        onMouseDown={(e) => handleMouseDownNode(e, node.id)}
                                        style={{
                                            position: 'absolute',
                                            left: `${node.x}px`,
                                            top: `${node.y}px`
                                        }}
                                        className={`z-20 flex flex-col items-center group cursor-grab active:cursor-grabbing select-none transition-transform duration-100 ${isDropTargetHovered ? 'scale-105' : ''
                                            }`}
                                    >
                                        {/* Top Pin / Input Port (target where strings connect) */}
                                        <div
                                            className={`w-3 h-3 rounded-full border-2 border-white shadow-xs mb-1.5 z-30 transition-all ${isDropTargetHovered
                                                ? 'bg-emerald-500 scale-150 ring-4 ring-emerald-200'
                                                : !isConnected
                                                    ? 'bg-rose-500'
                                                    : isSubmenuChild
                                                        ? 'bg-purple-600'
                                                        : 'bg-slate-500'
                                                }`}
                                            title={
                                                isSubmenuChild
                                                    ? 'Connected to Submenu'
                                                    : 'Connected to Main Menu'
                                            }
                                        />

                                        {/* Press X Pill */}
                                        <div className="mb-2 z-20">
                                            <span
                                                className={`inline-block px-3 py-0.5 rounded-full bg-white border text-[11px] font-semibold shadow-xs select-none ${isSubmenuChild
                                                    ? 'border-purple-300 text-purple-700 bg-purple-50/40'
                                                    : 'border-slate-200 text-slate-600'
                                                    }`}
                                            >
                                                {node.press}
                                            </span>
                                        </div>

                                        {/* Node Card Container */}
                                        <div
                                            onClick={() => setActiveNodeEdit(node)}
                                            className={`w-[185px] p-3.5 rounded-2xl border ${node.border} shadow-xs hover:shadow-md transition-all cursor-pointer relative bg-white text-left ${isDropTargetHovered
                                                ? 'ring-3 ring-emerald-400 border-emerald-400 shadow-lg'
                                                : isSubmenuChild
                                                    ? 'border-purple-300 ring-1 ring-purple-100'
                                                    : ''
                                                }`}
                                        >
                                            {/* Top Row: Icon + Type + Title */}
                                            <div className="flex items-center gap-2.5">
                                                <NodeIcon className={`w-4 h-4 shrink-0 ${node.iconColor}`} />
                                                <div className="min-w-0 pr-4">
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
                                                <span className="truncate text-slate-400 max-w-[120px]">
                                                    {node.sub}
                                                </span>
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

                                            {/* Connection Spot: Purple Output Port on Submenus */}
                                            {node.hasChildrenPort && (
                                                <div
                                                    onMouseDown={(e) => handleStartWireDrag(e, node.id)}
                                                    className="port-handle absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-600 border-2 border-white shadow-md z-30 hover:scale-150 active:scale-125 transition-transform cursor-crosshair flex items-center justify-center"
                                                    title="Click & Drag string from this Submenu spot directly onto any block to connect it here!"
                                                >
                                                    <div className="w-1.5 h-1.5 rounded-full bg-white pointer-events-none" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
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

                        <form onSubmit={handleSaveEdit} className="space-y-3.5 text-xs">
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
                                    Save Changes
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
