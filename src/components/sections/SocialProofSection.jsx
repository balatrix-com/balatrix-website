import React from 'react';

const SocialProofSection = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="heading-section">
                        Empowering the world's most <br className="hidden sm:block" />
                        <span className="text-blue-600">demanding engineering teams.</span>
                    </h2>
                </div>

                {/* Logo Grid */}
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 mb-20">
                    <div className="text-xl font-bold font-mono tracking-tighter text-slate-800">ACME Corp</div>
                    <div className="text-xl font-extrabold italic text-slate-800 tracking-wider">GLOBEX</div>
                    <div className="text-xl font-bold text-slate-800 flex items-center gap-1">
                        <div className="w-6 h-6 bg-slate-800 rounded-sm transform rotate-45"></div> SOYUZ
                    </div>
                    <div className="text-xl font-sans font-black tracking-tight text-slate-800">MASSIVE. <span className="text-blue-500 text-sm">inc</span></div>
                    <div className="text-xl font-serif font-bold text-slate-800">Vandelay</div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Main Case Study */}
                    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
                            alt="Sarah Jenkins"
                            className="w-20 h-20 rounded-full shadow-lg mb-8 border-4 border-white object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        <blockquote className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed mb-8 relative z-10">
                            "Switching to Balatrix's infrastructure reduced our P99 call latency by 45%. We scale up during peak holiday seasons instantly via API without worrying about provisioning trunks."
                        </blockquote>

                        <div className="relative z-10">
                            <div className="font-bold text-slate-900">Sarah Jenkins</div>
                            <div className="text-slate-500 text-sm">VP of Engineering at Massive Inc.</div>
                        </div>
                    </div>

                    {/* Metrics / Secondary Proof */}
                    <div className="space-y-6">
                        <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex items-start gap-6 hover:-translate-y-1 transition-transform duration-300">
                            <div className="bg-blue-50 text-blue-600 p-4 rounded-2xl mt-1 border border-blue-100">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-xl text-slate-900">Reduced Drop Rate</h4>
                                <p className="text-slate-600 mt-2 leading-relaxed">Globex reduced their dropped call rate from 1.2% to 0.01% after migrating to our Anycast routing engine.</p>
                            </div>
                        </div>

                        <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex items-start gap-6 hover:-translate-y-1 transition-transform duration-300">
                            <div className="bg-emerald-50 text-emerald-600 p-4 rounded-2xl mt-1 border border-emerald-100">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-xl text-slate-900">Deployment Speed</h4>
                                <p className="text-slate-600 mt-2 leading-relaxed">Acme Corp moved their entire 500-seat call center to the cloud in under 48 hours utilizing our REST API.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProofSection;
