import React from 'react';
import { Link } from 'react-router-dom';

const EnterpriseSection = () => {
    return (
        <section className="bg-white py-24 lg:py-32 relative overflow-hidden border-t border-slate-200">
            {/* Background glow effects - Light Theme */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-50 blur-[120px] rounded-full pointer-events-none z-0"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-slate-50 blur-[100px] rounded-full pointer-events-none z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Content */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center space-x-2 badge bg-blue-50 text-blue-600 border border-blue-100 px-4 py-1.5 rounded-full mb-6">
                            <span className="font-semibold text-xs tracking-wider">ENTERPRISE TIER</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                            Built for Scale.<br />
                            <span className="text-blue-600">Designed for Reliability.</span>
                        </h2>

                        <p className="text-xl text-slate-600 leading-relaxed mb-10">
                            When communication is mission-critical, Balatrix delivers the fail-safes, scale, and dedicated support your enterprise requires.
                        </p>

                        <ul className="space-y-6 mb-10">
                            {[
                                { title: '100% Uptime SLA', desc: 'Financially backed guarantees for mission-critical infrastructure.' },
                                { title: 'Anycast DNS Network', desc: 'Active-active redundancy across global data centers.' },
                                { title: 'Dedicated Support Pods', desc: 'Direct Slack channels and 24/7 technical escalations.' }
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                                            <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 font-bold text-lg">{item.title}</h4>
                                        <p className="text-slate-600 mt-1">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">
                            Talk to Sales
                        </Link>
                    </div>

                    {/* Visual Data / Tech Graphic with Photo */}
                    <div className="relative order-1 lg:order-2">
                        <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-200/60 group bg-white p-2">
                            {/* Premium Data Center Photo */}
                            <img
                                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200"
                                alt="Global Data Center Infrastructure"
                                className="w-full h-full object-cover min-h-[500px] transform group-hover:scale-[1.02] transition-transform duration-700 rounded-2xl"
                            />

                            {/* Glassmorphism Overlay Card - Light Theme */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 rounded-2xl"></div>

                            <div className="absolute bottom-6 left-6 right-6 border border-slate-200 bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-xl animate-fade-in z-20" style={{ animationDelay: '0.3s' }}>
                                <h3 className="text-slate-500 font-bold text-xs tracking-widest mb-4 flex justify-between items-center uppercase">
                                    <span>Global Latency Test</span>
                                    <span className="text-blue-600 flex items-center gap-2 font-mono bg-blue-50 px-2 py-1 rounded">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                                        </span>
                                        PASS [12ms]
                                    </span>
                                </h3>

                                <div className="space-y-3">
                                    {[
                                        { region: 'US-EAST (N. Virginia)', latency: '12ms', status: 'optimal' },
                                        { region: 'US-WEST (Oregon)', latency: '15ms', status: 'optimal' },
                                        { region: 'EU-CENTRAL (Frankfurt)', latency: '18ms', status: 'optimal' },
                                        { region: 'AP-SOUTH (Mumbai)', latency: '24ms', status: 'optimal' }
                                    ].map((node, i) => (
                                        <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors">
                                            <div className="flex flex-col">
                                                <span className="text-slate-900 font-semibold text-sm">{node.region}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="flex space-x-1">
                                                    {[1, 2, 3, 4, 5].map(bar => (
                                                        <div key={bar} className={`w-1.5 h-3 rounded-sm ${bar <= 4 ? 'bg-blue-500' : 'bg-slate-200'}`} />
                                                    ))}
                                                </div>
                                                <span className="text-slate-600 font-mono font-medium text-sm min-w-[40px] text-right">{node.latency}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnterpriseSection;
