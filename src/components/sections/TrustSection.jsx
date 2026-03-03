import React from 'react';

const TrustSection = () => {
    return (
        <section className="bg-slate-50 border-y border-slate-200 py-16 lg:py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-3">Enterprise Reliability</h2>
                    <p className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                        Trusted by modern teams to route millions of calls globally.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20">
                    {[
                        { metric: '50K+', label: 'Numbers Deployed' },
                        { metric: '99.99%', label: 'Uptime SLA' },
                        { metric: '5K+', label: 'Active Businesses' },
                        { metric: '150+', label: 'Countries Served' }
                    ].map((stat, idx) => (
                        <div key={idx} className="text-center px-4 relative">
                            {/* Optional subtle divider */}
                            {idx !== 0 && <div className="hidden md:block absolute left-0 top-1/4 bottom-1/4 w-px bg-slate-200"></div>}
                            <div className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight mb-2">
                                {stat.metric}
                            </div>
                            <div className="text-sm md:text-base font-semibold text-slate-500">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TrustSection;
