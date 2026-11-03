import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import {
    LayoutDashboard,
    Wallet,
    CreditCard,
    Phone,
    Users,
    UsersRound,
    ListTree,
    FileAudio,
    PhoneForwarded,
    Clock,
    Activity,
    FileText,
    Terminal,
    BarChart3,
    UserCheck,
    ChevronLeft,
    ChevronRight,
    ChevronDown,
    Bell,
    Moon,
    Sun,
    LogOut,
    Menu,
    X,
    ExternalLink,
    Shield,
    Check,
    Plus
} from 'lucide-react';

import DemoDashboard from './views/DemoDashboard';
import DemoWallet from './views/DemoWallet';
import DemoSubscriptions from './views/DemoSubscriptions';
import DemoPhoneNumbers from './views/DemoPhoneNumbers';
import DemoExtensions from './views/DemoExtensions';
import DemoExtensionStatus from './views/DemoExtensionStatus';
import DemoRingGroups from './views/DemoRingGroups';
import DemoIVRMenus from './views/DemoIVRMenus';
import DemoAudioLibrary from './views/DemoAudioLibrary';
import DemoDIDForwards from './views/DemoDIDForwards';
import DemoOperationalTime from './views/DemoOperationalTime';
import DemoCallMonitoring from './views/DemoCallMonitoring';
import DemoCallRecords from './views/DemoCallRecords';
import DemoSIPTraces from './views/DemoSIPTraces';
import DemoAnalytics from './views/DemoAnalytics';
import DemoUserManagement from './views/DemoUserManagement';
import DemoPlaceholder from './views/DemoPlaceholder';

const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'wallet', label: 'Wallet', icon: Wallet },
    { id: 'subscriptions', label: 'Subscriptions', icon: CreditCard },
    { id: 'phone-numbers', label: 'Phone Numbers', icon: Phone },
    {
        id: 'extensions',
        label: 'Extensions',
        icon: Users,
        hasSubmenu: true,
        subItems: [
            { id: 'extensions', label: 'Extension Settings' },
            { id: 'extension-status', label: 'Extension Status' }
        ]
    },
    { id: 'ring-groups', label: 'Ring Groups', icon: UsersRound },
    { id: 'ivr-menus', label: 'IVR Menus', icon: ListTree },
    { id: 'audio-library', label: 'Audio Library', icon: FileAudio },
    { id: 'did-forwards', label: 'DID Forwards', icon: PhoneForwarded },
    { id: 'operational-time', label: 'Operational Time', icon: Clock },
    { id: 'call-monitoring', label: 'Call Monitoring', icon: Activity },
    { id: 'call-records', label: 'Call Records', icon: FileText },
    { id: 'sip-traces', label: 'SIP Traces', icon: Terminal },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'user-management', label: 'User Management', icon: UserCheck }
];


const INITIAL_TRANSACTIONS = [
    {
        ref: 'ADDON-addon_1_did_number',
        cat: 'DID Phone Number',
        date: 'Oct 29, 2026 • 8:30 PM',
        status: 'COMPLETED',
        amt: '-$5.33',
        isNegative: true
    },
    {
        ref: 'ADDON-addon_1_extention',
        cat: 'Extension Add-on',
        date: 'Oct 29, 2026 • 8:30 PM',
        status: 'COMPLETED',
        amt: '-$5.33',
        isNegative: true
    },
    {
        ref: 'TXN-SUB-1793286028156-1418',
        cat: 'Pro Plan Monthly',
        date: 'Oct 29, 2026 • 8:30 PM',
        status: 'COMPLETED',
        amt: '-$89.99',
        isNegative: true
    },
    {
        ref: 'PAY-2610-1506',
        cat: 'Prepaid Wallet Credit',
        date: 'Oct 29, 2026 • 8:30 PM',
        status: 'COMPLETED',
        amt: '+$130.00',
        isNegative: false
    }
];

const PBXDemo = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const activeTab = searchParams.get('tab') || 'dashboard';

    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('balatrix_demo_theme') === 'dark';
    });
    const [isAddFundsOpen, setIsAddFundsOpen] = useState(false);
    const [walletBalance, setWalletBalance] = useState(29.31);
    const [transactions, setTransactions] = useState(INITIAL_TRANSACTIONS);
    const [customFundAmt, setCustomFundAmt] = useState('');
    const [addFundsSuccess, setAddFundsSuccess] = useState(false);

    // Function to add funds in demo memory
    const handleAddFunds = (amount) => {
        const num = parseFloat(amount);
        if (isNaN(num) || num <= 0) return;

        setWalletBalance((prev) => prev + num);
        const newTx = {
            ref: `PAY-DEMO-${Date.now().toString().slice(-6)}`,
            cat: 'Prepaid Wallet Top-up',
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) + ' • Just now',
            status: 'COMPLETED',
            amt: `+$${num.toFixed(2)}`,
            isNegative: false
        };
        setTransactions((prev) => [newTx, ...prev]);
        setAddFundsSuccess(true);
        setTimeout(() => {
            setAddFundsSuccess(false);
            setIsAddFundsOpen(false);
            setCustomFundAmt('');
        }, 800);
    };
    const [isExtensionsOpen, setIsExtensionsOpen] = useState(
        activeTab === 'extensions' || activeTab === 'extension-status'
    );

    // Persist and apply dark mode preference
    const handleToggleDarkMode = () => {
        setIsDarkMode((prev) => {
            const next = !prev;
            localStorage.setItem('balatrix_demo_theme', next ? 'dark' : 'light');
            return next;
        });
    };

    // Keep extensions accordion open if active tab is inside it
    useEffect(() => {
        if (activeTab === 'extensions' || activeTab === 'extension-status') {
            setIsExtensionsOpen(true);
        }
        window.scrollTo(0, 0);
    }, [activeTab]);

    const handleTabChange = (tabId) => {
        setSearchParams({ tab: tabId });
        setIsMobileMenuOpen(false);
    };

    const renderActiveContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return (
                    <DemoDashboard
                        onNavigateTab={handleTabChange}
                        onOpenAddFunds={() => setIsAddFundsOpen(true)}
                        walletBalance={walletBalance}
                        transactions={transactions}
                    />
                );
            case 'wallet':
                return (
                    <DemoWallet
                        onNavigateTab={handleTabChange}
                        onOpenAddFunds={() => setIsAddFundsOpen(true)}
                        walletBalance={walletBalance}
                        transactions={transactions}
                    />
                );
            case 'subscriptions':
                return <DemoSubscriptions />;
            case 'phone-numbers':
                return <DemoPhoneNumbers />;
            case 'extensions':
                return <DemoExtensions />;
            case 'extension-status':
                return <DemoExtensionStatus />;
            case 'ring-groups':
                return <DemoRingGroups />;
            case 'ivr-menus':
                return <DemoIVRMenus />;
            case 'audio-library':
                return <DemoAudioLibrary />;
            case 'did-forwards':
                return <DemoDIDForwards />;
            case 'operational-time':
                return <DemoOperationalTime />;
            case 'call-monitoring':
                return <DemoCallMonitoring />;
            case 'call-records':
                return <DemoCallRecords />;
            case 'sip-traces':
                return <DemoSIPTraces />;
            case 'analytics':
                return <DemoAnalytics />;
            case 'user-management':
                return <DemoUserManagement />;
            default:
                return (
                    <DemoPlaceholder
                        tabKey={activeTab}
                        onNavigateTab={handleTabChange}
                    />
                );
        }
    };

    return (
        <div
            className={`pbx-demo ${
                isDarkMode ? 'dark' : ''
            } min-h-screen bg-[#f7f8fa] text-slate-700 flex flex-col font-sans`}
        >
            {/* Top Balatrix Return Banner */}
            <div className="bg-[#1a1f4e] text-white px-4 py-2 flex items-center justify-between text-xs border-b border-[#2a2f5e] z-50">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="font-semibold text-white text-xs">Balatrix Cloud PBX Admin Sandbox</span>
                    <span className="hidden sm:inline-block text-slate-400 font-normal">
                        — Interactive test environment with dummy data
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-all"
                    >
                        ← Return to Balatrix.com
                    </Link>
                </div>
            </div>

            <div className="flex flex-1 relative overflow-hidden">
                {/* Desktop Sidebar - Refined & Sized to Screenshot */}
                <aside
                    className={`hidden lg:flex flex-col bg-white border-r border-slate-100 transition-all duration-300 ease-in-out shrink-0 select-none ${
                        isSidebarCollapsed ? 'w-20' : 'w-64'
                    }`}
                >
                    {/* Sidebar Brand */}
                    <div className="h-16 flex items-center px-6 border-b border-slate-100">
                        <Link to="/" className="flex items-center gap-2.5 group">
                            <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-base shadow-sm group-hover:scale-105 transition-transform">
                                B
                            </div>
                            {!isSidebarCollapsed && (
                                <span className="text-xl font-bold tracking-tight text-slate-800">
                                    Balatrix
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* Sidebar Nav Items */}
                    <div className="flex-1 overflow-y-auto py-3 px-3 space-y-1">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isDirectActive = activeTab === item.id;
                            const isSubActive =
                                item.hasSubmenu &&
                                item.subItems?.some((sub) => sub.id === activeTab);

                            if (item.hasSubmenu) {
                                return (
                                    <div key={item.id} className="space-y-1">
                                        <button
                                            onClick={() => {
                                                if (isSidebarCollapsed) {
                                                    setIsSidebarCollapsed(false);
                                                    setIsExtensionsOpen(true);
                                                } else {
                                                    setIsExtensionsOpen(!isExtensionsOpen);
                                                }
                                                handleTabChange('extensions');
                                            }}
                                            title={isSidebarCollapsed ? item.label : undefined}
                                            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-150 cursor-pointer ${
                                                isSubActive
                                                    ? 'text-blue-600 font-semibold bg-blue-50/60'
                                                    : 'text-[#475569] hover:text-[#0f172a] hover:bg-slate-50'
                                            } ${isSidebarCollapsed ? 'justify-center px-2' : ''}`}
                                        >
                                            <div className="flex items-center gap-3.5 min-w-0">
                                                <Icon
                                                    className={`w-5 h-5 shrink-0 ${
                                                        isSubActive ? 'text-blue-600' : 'text-[#64748b]'
                                                    }`}
                                                />
                                                {!isSidebarCollapsed && (
                                                    <span className="truncate">{item.label}</span>
                                                )}
                                            </div>
                                            {!isSidebarCollapsed && (
                                                <ChevronDown
                                                    className={`w-4 h-4 text-[#94a3b8] transition-transform duration-200 ${
                                                        isExtensionsOpen ? 'rotate-180 text-blue-600' : ''
                                                    }`}
                                                />
                                            )}
                                        </button>

                                        {/* Submenu Accordion Items */}
                                        {!isSidebarCollapsed && isExtensionsOpen && (
                                            <div className="pl-6 space-y-1 pt-0.5">
                                                {item.subItems.map((sub, sIdx) => {
                                                    const isSelected = activeTab === sub.id;
                                                    const isFirst = sIdx === 0;
                                                    return (
                                                        <button
                                                            key={sub.id}
                                                            onClick={() => handleTabChange(sub.id)}
                                                            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-all duration-150 cursor-pointer ${
                                                                isSelected
                                                                    ? 'text-blue-600 font-semibold bg-blue-50/50'
                                                                    : 'text-[#64748b] hover:text-[#0f172a] hover:bg-slate-50 font-normal'
                                                            }`}
                                                        >
                                                            <span className={`${isSelected ? 'text-blue-400' : 'text-slate-300'} font-mono text-xs select-none`}>
                                                                {isFirst ? '├──' : '└──'}
                                                            </span>
                                                            <span className="truncate">{sub.label}</span>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => handleTabChange(item.id)}
                                    title={isSidebarCollapsed ? item.label : undefined}
                                    className={`w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-[13px] transition-all duration-150 cursor-pointer ${
                                        isDirectActive
                                            ? 'bg-[#1a68ff] text-white font-semibold shadow-xs'
                                            : 'text-[#475569] hover:text-[#0f172a] hover:bg-slate-50 font-medium'
                                    } ${isSidebarCollapsed ? 'justify-center px-2' : ''}`}
                                >
                                    <Icon
                                        className={`w-5 h-5 shrink-0 ${
                                            isDirectActive ? 'text-white' : 'text-[#64748b]'
                                        }`}
                                    />
                                    {!isSidebarCollapsed && (
                                        <span className="truncate">{item.label}</span>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Sidebar Footer */}
                    {!isSidebarCollapsed && (
                        <div className="p-4 border-t border-slate-100 bg-[#fafbfe]/80">
                            <div className="text-[11px] text-slate-400">
                                <p className="font-semibold text-slate-600">Enterprise PBX v2.4</p>
                                <p className="text-slate-400 text-[10px] mt-0.5">SIP Engine Status: Normal</p>
                            </div>
                        </div>
                    )}
                </aside>

                {/* Mobile Slide-Over Drawer */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 z-50 lg:hidden flex">
                        <div
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <div className="relative w-72 bg-white flex flex-col h-full z-10 shadow-2xl">
                            <div className="h-16 flex items-center justify-between px-6 border-b border-slate-200">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black">
                                        B
                                    </div>
                                    <span className="text-xl font-black text-slate-950">
                                        Balatrix
                                    </span>
                                </div>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-1 rounded-lg text-slate-500 hover:text-slate-800"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1.5">
                                {navItems.map((item) => {
                                    const Icon = item.icon;
                                    const isDirectActive = activeTab === item.id;
                                    const isSubActive =
                                        item.hasSubmenu &&
                                        item.subItems?.some((sub) => sub.id === activeTab);

                                    if (item.hasSubmenu) {
                                        return (
                                            <div key={item.id} className="space-y-1">
                                                <button
                                                    onClick={() => setIsExtensionsOpen(!isExtensionsOpen)}
                                                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold ${
                                                        isSubActive
                                                            ? 'text-blue-700 bg-blue-50 border border-blue-200'
                                                            : 'text-slate-700'
                                                    }`}
                                                >
                                                    <div className="flex items-center gap-3.5">
                                                        <Icon className="w-4 h-4 text-blue-600" />
                                                        <span>{item.label}</span>
                                                    </div>
                                                    <ChevronDown
                                                        className={`w-3.5 h-3.5 text-slate-500 transition-transform ${
                                                            isExtensionsOpen ? 'rotate-180' : ''
                                                        }`}
                                                    />
                                                </button>

                                                {isExtensionsOpen && (
                                                    <div className="pl-6 space-y-1">
                                                        {item.subItems.map((sub, sIdx) => (
                                                            <button
                                                                key={sub.id}
                                                                onClick={() => handleTabChange(sub.id)}
                                                                className={`w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold ${
                                                                    activeTab === sub.id
                                                                        ? 'bg-blue-600 text-white'
                                                                        : 'text-slate-600'
                                                                }`}
                                                            >
                                                                <span className="text-slate-400 font-mono text-xs">
                                                                    {sIdx === 0 ? '├──' : '└──'}
                                                                </span>
                                                                <span>{sub.label}</span>
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    }

                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => handleTabChange(item.id)}
                                            className={`w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                                                isDirectActive
                                                    ? 'bg-blue-600 text-white'
                                                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                                            }`}
                                        >
                                            <Icon
                                                className={`w-4 h-4 shrink-0 ${
                                                    isDirectActive ? 'text-white' : 'text-slate-500'
                                                }`}
                                            />
                                            <span>{item.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main View Area */}
                <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
                    {/* Top App Bar */}
                    <header className="h-14 bg-white border-b border-slate-200 px-4 sm:px-5 flex items-center justify-between sticky top-0 z-40">
                        {/* Left Controls */}
                        <div className="flex items-center gap-2.5">
                            {/* Mobile menu hamburger */}
                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="lg:hidden p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
                            >
                                <Menu className="w-5 h-5" />
                            </button>

                            {/* Desktop collapse toggle */}
                            <button
                                onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                                className="hidden lg:flex p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                                title="Toggle sidebar"
                            >
                                {isSidebarCollapsed ? (
                                    <ChevronRight className="w-4 h-4" />
                                ) : (
                                    <ChevronLeft className="w-4 h-4" />
                                )}
                            </button>

                            {/* User Badge */}
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-lg text-xs">
                                <span className="font-semibold text-slate-800">SMITH STEVE</span>
                                <span className="bg-slate-800 text-white font-mono text-[10px] px-1.5 py-0.5 rounded">
                                    u1005
                                </span>
                            </div>

                            {/* Telephony Status Pills */}
                            <div className="hidden md:flex items-center gap-2">
                                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-600">
                                    <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                                    <span>ACTIVE CALLS: 0</span>
                                </div>

                                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-600">
                                    <Activity className="w-3 h-3 text-slate-400" />
                                    <span>QUEUE DEPTH: —</span>
                                </div>

                                <span className="px-2.5 py-1 rounded-lg bg-orange-50 text-orange-700 border border-orange-200 text-[11px] font-semibold">
                                    IMP
                                </span>
                            </div>
                        </div>

                        {/* Right Tools */}
                        <div className="flex items-center gap-1.5 sm:gap-2">
                            {/* Notification Bell */}
                            <div className="relative">
                                <button
                                    onClick={() => setShowNotifications(!showNotifications)}
                                    className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors relative cursor-pointer"
                                    title="Notifications"
                                >
                                    <Bell className="w-4 h-4" />
                                    <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-400 ring-1 ring-white"></span>
                                </button>

                                {showNotifications && (
                                    <div className="absolute right-0 mt-1.5 w-72 bg-white rounded-xl shadow-lg border border-slate-200 p-3.5 z-50 text-xs">
                                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                                            <span className="font-semibold text-slate-800">Notifications</span>
                                            <span className="text-[11px] text-blue-600 font-medium cursor-pointer">Mark read</span>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-100 text-slate-700">
                                                <p className="font-semibold text-slate-800">Monthly Minutes Active</p>
                                                <p className="text-[11px] text-slate-500 mt-0.5">1200 free minutes provisioned for this billing cycle.</p>
                                            </div>
                                            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-700">
                                                <p className="font-semibold text-slate-800">Carrier SIP Gateway Safe</p>
                                                <p className="text-[11px] text-slate-500 mt-0.5">Latency 18ms across all US-East gateways.</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Theme Toggle */}
                            <button
                                onClick={handleToggleDarkMode}
                                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                                aria-label="Toggle theme"
                            >
                                {isDarkMode ? (
                                    <Sun className="w-4 h-4 text-amber-400" />
                                ) : (
                                    <Moon className="w-4 h-4" />
                                )}
                            </button>

                            {/* Exit Icon */}
                            <Link
                                to="/"
                                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                                title="Exit Demo"
                            >
                                <LogOut className="w-4 h-4" />
                            </Link>
                        </div>
                    </header>

                    {/* Content View Container */}
                    <main className="flex-1 p-5 sm:p-6 lg:p-7 max-w-7xl w-full mx-auto">
                        {renderActiveContent()}
                    </main>
                </div>
            </div>

            {/* Fully Functional Demo Add Funds Modal */}
            {isAddFundsOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fade-in">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center">
                                    <Wallet className="w-4 h-4" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-slate-900">
                                        Add Prepaid Wallet Funds
                                    </h3>
                                    <p className="text-[11px] text-slate-400">Current Balance: ${walletBalance.toFixed(2)}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    setIsAddFundsOpen(false);
                                    setAddFundsSuccess(false);
                                }}
                                className="text-slate-400 hover:text-slate-700 text-lg font-bold p-1 cursor-pointer"
                            >
                                &times;
                            </button>
                        </div>

                        {addFundsSuccess ? (
                            <div className="py-8 text-center space-y-2">
                                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                                    <Check className="w-6 h-6" />
                                </div>
                                <h4 className="text-base font-bold text-slate-900">Funds Added Successfully!</h4>
                                <p className="text-xs text-slate-500">Updated Balance: <strong className="text-emerald-600 font-mono">${walletBalance.toFixed(2)}</strong></p>
                            </div>
                        ) : (
                            <div className="space-y-4 text-xs">
                                <p className="text-slate-600">
                                    Select a preset amount or enter a custom sum to deposit into your demo PBX balance:
                                </p>

                                {/* Preset buttons */}
                                <div className="grid grid-cols-3 gap-2">
                                    {[50, 100, 250].map((amt) => (
                                        <button
                                            key={amt}
                                            type="button"
                                            onClick={() => handleAddFunds(amt)}
                                            className="py-2.5 px-3 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 bg-slate-50/60 font-bold text-slate-800 hover:text-blue-600 transition-all cursor-pointer text-center text-sm"
                                        >
                                            +${amt}
                                        </button>
                                    ))}
                                </div>

                                {/* Custom amount input */}
                                <div className="space-y-1.5 pt-1">
                                    <label className="block text-[11px] font-semibold text-slate-600 uppercase tracking-wide">
                                        Or Custom Amount ($ USD)
                                    </label>
                                    <div className="flex gap-2">
                                        <div className="relative flex-1">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                            <input
                                                type="number"
                                                min="1"
                                                step="1"
                                                placeholder="e.g. 75"
                                                value={customFundAmt}
                                                onChange={(e) => setCustomFundAmt(e.target.value)}
                                                className="w-full pl-7 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-semibold focus:outline-none focus:border-blue-400 focus:bg-white text-xs"
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            disabled={!customFundAmt || parseFloat(customFundAmt) <= 0}
                                            onClick={() => handleAddFunds(customFundAmt)}
                                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white rounded-xl text-xs font-semibold cursor-pointer shadow-xs transition-colors shrink-0"
                                        >
                                            Deposit
                                        </button>
                                    </div>
                                </div>

                                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-500 text-[11px] leading-relaxed">
                                    💡 <strong>Session Memory:</strong> All balance updates, transactions, and changes live in memory only for your current exploration. When you refresh or leave the demo, the state resets back to the fresh initial baseline.
                                </div>

                                <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
                                    <button
                                        type="button"
                                        onClick={() => setIsAddFundsOpen(false)}
                                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-medium cursor-pointer"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PBXDemo;
