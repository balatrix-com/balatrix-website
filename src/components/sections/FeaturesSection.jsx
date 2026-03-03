import React from 'react';

const FeaturesSection = () => {
    const features = [
        {
            title: 'Enterprise-Grade Cloud Telephony',
            description: 'Our core Cloud Telephony engine provides complete control.',
            bullets: [
                'Global Number Provisioning (DID & TFNs)',
                'Intelligent Call Routing & IVR',
                'Ring Groups & Forwarding',
                'BYOD & SIP Trunking',
                'Operational Schedules'
            ],
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: 'Real-Time Analytics & Monitoring',
            description: 'Make data-driven decisions with our comprehensive analytics suite.',
            bullets: [
                'Live Command Center (Active calls, CPS)',
                'Call Detail Records (CDRs)',
                'Visual Analytics Over Time',
                'Call Health & Quality Metrics'
            ],
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        },
        {
            title: 'Automated Billing & Wallet',
            description: 'A transparent, frictionless financial engine built for scale.',
            bullets: [
                'Prepaid Digital Wallets',
                'Usage-Based Metering in Real-time',
                'Flexible Custom Subscriptions',
                'Automated Enforcement & Credit Limits'
            ],
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: 'Advanced Call Center Capabilities',
            description: 'Empower your support and sales teams with tools designed for high-volume operations.',
            bullets: [
                'Advanced Call Queue Management',
                'Agent Performance Tracking',
                'Call Recording & Quality Monitoring',
                'Overflow & Failover Routing'
            ],
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        {
            title: 'Security & Multi-Tenancy',
            description: 'Built from the ground up for agencies, resellers, and large enterprises.',
            bullets: [
                'True Multi-Tenancy Management',
                'Automated Tenant Onboarding',
                'Role-Based Access Control (RBAC)',
                'Comprehensive Immutable Audit Logs'
            ],
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                        Everything you need to <span className="text-blue-600">scale.</span>
                    </h2>
                    <p className="mt-4 text-xl text-slate-600">
                        Uncompromising quality and feature-rich capabilities designed for modern technical teams and contact centers.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="card-infrastructure group flex flex-col h-full">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm border border-blue-100 group-hover:border-transparent shrink-0">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-600 font-medium mb-6">
                                {feature.description}
                            </p>

                            <ul className="space-y-3 mt-auto">
                                {feature.bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-start">
                                        <svg className="h-5 w-5 text-emerald-500 mr-3 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm text-slate-600 leading-tight leading-relaxed">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
