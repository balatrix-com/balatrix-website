import React from 'react';
import { Link } from 'react-router-dom';

const IndustrySection = () => {
    const industries = [
        {
            id: 'enterprises',
            title: 'Large Enterprises',
            description: 'Secure, reliable routing backed by Comprehensive Audit Logs & Role-Based Access Control (RBAC) to meet strict compliance.',
            image: '/images/industry_healthcare_1772448070511.png',
            bgClass: 'hover:border-rose-300'
        },
        {
            id: 'callcenters',
            title: 'Call Centers',
            description: 'Infinite concurrent call capacity. Ensure no call goes unanswered with advanced Ring Groups and Live Monitoring analytics.',
            image: '/images/industry_callcenter_1772447963688.png',
            bgClass: 'hover:border-teal-300'
        },
        {
            id: 'agencies',
            title: 'Agencies & Resellers',
            description: 'A perfect fit to manage clients with True Multi-tenancy, automated onboarding, and built-in Billing & Wallet systems.',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c83a00?auto=format&fit=crop&q=80&w=800',
            bgClass: 'hover:border-amber-300'
        },
        {
            id: 'saas',
            title: 'SaaS / Tech',
            description: 'Programmatic REST API control to seamlessly embed unified voice capabilities directly into your core product.',
            image: '/images/industry_saas_1772447978668.png',
            bgClass: 'hover:border-blue-300'
        }
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-full h-full bg-grid-pattern opacity-30 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                            Built for every vertical.
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Transform your communication stack no matter your industry. Our infrastructure adapts to your specific regulatory and volume requirements.
                        </p>
                    </div>
                    <Link to="/solutions" className="btn btn-secondary flex-shrink-0">
                        View All Solutions
                    </Link>
                </div>

                {/* Vertical Panels Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {industries.map((ind) => (
                        <div
                            key={ind.id}
                            className={`flex flex-col h-full bg-white border border-slate-100 rounded-3xl overflow-hidden transition-all duration-300 transform group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] ${ind.bgClass}`}
                        >
                            <div className="h-56 w-full overflow-hidden relative">
                                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors z-10"></div>
                                <img src={ind.image} alt={ind.title} className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">{ind.title}</h3>
                                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                                    {ind.description}
                                </p>

                                <div className="mt-auto flex items-center text-blue-600 font-bold group-hover:text-blue-700 transition-colors">
                                    Learn more
                                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustrySection;
