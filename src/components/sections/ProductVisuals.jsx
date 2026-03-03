import React from 'react';

const ProductVisuals = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">The Platform</h2>
                    <p className="heading-section">
                        Everything you need to build at scale.
                    </p>
                    <p className="mt-4 text-xl text-slate-600">
                        A powerful suite of tools designed for developers and IT teams to orchestrate complex telecom workflows.
                    </p>
                </div>

                {/* Visuals Grid */}
                <div className="grid lg:grid-cols-2 gap-8 items-stretch">

                    {/* Main Dashboard / Analytics */}
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 overflow-hidden relative group h-full">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Real-time Analytics</h3>
                        <p className="text-slate-500 mb-8">Monitor call volumes, SLA compliance, and network health instantly.</p>

                        <div className="relative h-64 bg-slate-50 border border-slate-200 rounded-xl overflow-hidden mt-auto">
                            {/* Mock Graph */}
                            <div className="absolute inset-x-0 bottom-0 flex items-end px-4 pb-4 space-x-2 h-40">
                                {[40, 70, 45, 90, 65, 85, 55, 100, 75, 40, 60].map((h, i) => (
                                    <div key={i} className="flex-1 bg-blue-100 rounded-t-sm relative group-hover:bg-blue-200 transition-colors" style={{ height: `${h}%` }}>
                                        <div className="absolute bottom-full left-0 w-full h-1 bg-blue-500" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-8">
                        {/* Call Routing Builder */}
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Visual Call Routing</h3>
                                <p className="text-slate-500 mb-6">Build resilient IVR menus and failover rules without touching code.</p>
                            </div>
                            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-3">
                                <div className="flex items-center justify-between bg-white border border-slate-200 p-3 rounded shadow-sm">
                                    <span className="text-sm font-medium text-slate-700">Incoming Call</span>
                                    <div className="w-16 h-px bg-slate-300" />
                                    <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-600 font-mono">Condition: Time</span>
                                </div>
                                <div className="flex items-center px-4">
                                    <div className="w-0.5 h-6 bg-slate-300" />
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-1 bg-white border border-blue-200 p-3 rounded shadow-sm border-l-4 border-l-blue-500">
                                        <span className="text-xs block text-slate-500 mb-1">Business Hours</span>
                                        <span className="text-sm font-medium text-slate-700">Queue: Sales</span>
                                    </div>
                                    <div className="flex-1 bg-white border border-slate-200 p-3 rounded shadow-sm">
                                        <span className="text-xs block text-slate-500 mb-1">After Hours</span>
                                        <span className="text-sm font-medium text-slate-700">Voicemail</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductVisuals;
