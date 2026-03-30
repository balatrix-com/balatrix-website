import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  // Scroll to core services section
  const scrollToCoreServices = () => {
    const coreServicesSection = document.getElementById('core-services');
    if (coreServicesSection) {
      coreServicesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  const services = [
    {
      id: 1,
      title: "Enterprise-Grade Cloud Telephony",
      description: "Our core Cloud Telephony engine provides complete control over your business communications.",
      features: [
        "Global Number Provisioning (DID & TFN)",
        "Multi-level IVR (interactive voice menus)",
        "Ring groups (simultaneous, hunt, round-robin)",
        "Intelligent call forwarding (internal or external)",
        "Call monitoring (listen, whisper, barge)",
        "Time-Based Routing (Schedules)"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      popular: true
    },
    {
      id: 2,
      title: "Real-Time Analytics & Monitoring",
      description: "Make data-driven decisions with our comprehensive analytics suite and ensure crystal-clear audio quality.",
      features: [
        "Live Command Center Dashboard",
        "Call Detail Records (CDRs) Logs",
        "Visual Analytics & Interactive Charts",
        "Active Agent Status Tracking",
        "Network Latency & Packet Loss Monitroing"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Automated Billing & Wallet System",
      description: "A transparent, frictionless financial engine built for scale, preventing fraud and saving money.",
      features: [
        "Prepaid Digital Wallets",
        "Real-Time Usage-Based Metering",
        "Automated Credit Enforcement",
        "Detailed Itemized Invoicing",
        "Custom Tiered Licensing Plans"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Advanced Call Center Capabilities",
      description: "Empower your support and sales teams with tools designed for high-volume operations.",
      features: [
        "Call monitoring (listen, whisper, barge)",
        "Call transfer (blind & attended)",
        "Dynamic routing based on rules & logic",
        "Per-customer and per-number configurations",
        "DTMF input handling for IVR navigation"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Security & Multi-Tenancy",
      description: "Built from the ground up for agencies, resellers, and large enterprises requiring strict control.",
      features: [
        "True Multi-Tenancy Management",
        "Role-Based Access Control (RBAC)",
        "Immutable Audit Logs",
        "Automated Tenant Onboarding",
        "Enterprise-Grade Redis/Load Balancing"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Choose Your Numbers",
      description: "Select from available toll-free numbers or request custom vanity numbers for your business."
    },
    {
      step: "02",
      title: "Quick Setup",
      description: "Configure call forwarding, voicemail, and other features through our easy-to-use dashboard."
    },
    {
      step: "03",
      title: "Go Live Instantly",
      description: "Your toll-free numbers are active immediately with full features and 24/7 support."
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "Continuous monitoring, feature updates, and customer support to keep you connected."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen sm:min-h-[70vh] bg-gradient-to-br from-white via-gray-50/50 to-gray-50 flex items-center justify-center overflow-hidden relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 sm:top-20 right-4 sm:right-20 w-16 sm:w-32 h-16 sm:h-32 border border-blue-200 rounded-lg transform rotate-12 opacity-30 animate-float" />
          <div className="absolute bottom-16 sm:bottom-32 left-8 sm:left-40 w-12 sm:w-20 h-12 sm:h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-40 animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-20 sm:top-40 right-12 sm:right-60 w-8 sm:w-16 h-8 sm:h-16 border-2 border-blue-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-24 xl:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Content Section */}
            <div className="space-y-6 sm:space-y-8">
              {/* Small intro */}
              <div className="text-sm font-bold text-[#032B93] tracking-widest uppercase mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                Our Services
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                Business<br />Communication<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#032B93] to-blue-500">Services</span>
              </h1>

              {/* Supporting subtext */}
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-full lg:max-w-xl opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                Launch your US or Canada calling operation in minutes with Balatrix — get toll-free numbers, a cloud PBX, and complete call management at a fraction of traditional telecom costs.
              </p>

              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                <button onClick={scrollToCoreServices} className="btn btn-primary text-lg px-8 py-4 w-full sm:w-auto shadow-[0_8px_20px_rgba(3,43,147,0.25)] hover:shadow-[0_12px_25px_rgba(3,43,147,0.35)]">
                  Explore Services
                </button>
                <Link to="/contact" className="btn btn-secondary text-lg px-8 py-4 w-full sm:w-auto font-semibold">
                  Schedule Consultation
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="pt-8 border-t border-slate-200/60 mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
                <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-slate-800">5</span>
                    <span>Core Services</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-slate-800">24/7</span>
                    <span>Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-slate-800">Instant</span>
                    <span>Setup</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="hidden lg:block opacity-0 animate-fade-in-right" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
              <div className="relative h-80 xl:h-96 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="card-infrastructure hover:-translate-y-1">
                    <div className="text-3xl mb-3">📞</div>
                    <div className="text-lg font-bold text-slate-900 mb-1">Toll-Free Numbers</div>
                    <div className="text-sm text-slate-500">US & Canada</div>
                  </div>
                  <div className="card-infrastructure hover:-translate-y-1">
                    <div className="text-3xl mb-3">☁️</div>
                    <div className="text-lg font-bold text-slate-900 mb-1">Cloud System</div>
                    <div className="text-sm text-slate-500">Advanced Features</div>
                  </div>
                  <div className="card-infrastructure hover:-translate-y-1">
                    <div className="text-3xl mb-3">🔧</div>
                    <div className="text-lg font-bold text-slate-900 mb-1">Custom Solutions</div>
                    <div className="text-sm text-slate-500">Tailored Setup</div>
                  </div>
                  <div className="card-infrastructure hover:-translate-y-1">
                    <div className="text-3xl mb-3">🌐</div>
                    <div className="text-lg font-bold text-slate-900 mb-1">Free Web Softphone</div>
                    <div className="text-sm text-slate-500">Call from browser</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Visual Element */}
            <div className="lg:hidden mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="card-infrastructure text-center p-4">
                  <div className="text-2xl mb-2">📞</div>
                  <div className="text-sm font-bold text-slate-900 mb-1">Toll-Free Numbers</div>
                  <div className="text-xs text-slate-500">US & Canada</div>
                </div>
                <div className="card-infrastructure text-center p-4">
                  <div className="text-2xl mb-2">☁️</div>
                  <div className="text-sm font-bold text-slate-900 mb-1">Cloud System</div>
                  <div className="text-xs text-slate-500">Advanced Features</div>
                </div>
                <div className="card-infrastructure text-center p-4">
                  <div className="text-2xl mb-2">🔧</div>
                  <div className="text-sm font-bold text-slate-900 mb-1">Custom Solutions</div>
                  <div className="text-xs text-slate-500">Tailored Setup</div>
                </div>
                <div className="card-infrastructure text-center p-4">
                  <div className="text-2xl mb-2">🌐</div>
                  <div className="text-sm font-bold text-slate-900 mb-1">Free Web Softphone</div>
                  <div className="text-xs text-slate-500">Call from browser</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="core-services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="text-sm font-bold text-[#032B93] tracking-widest uppercase mb-4">
              OUR SERVICES
            </div>
            <h2 className="heading-section text-slate-900 mb-6">
              Our Core Services
            </h2>
            <p className="subheading max-w-2xl mx-auto">
              Comprehensive communication solutions designed for reliability and ease of use
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group relative card-infrastructure bg-white flex flex-col h-full hover:-translate-y-1">
                {service.popular && (
                  <div className="absolute -top-4 left-6 z-10">
                    <span className="bg-[#032B93] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md tracking-wider uppercase">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="w-14 h-14 bg-[#032B93]/5 text-[#032B93] rounded-2xl flex items-center justify-center mb-6 border border-[#032B93]/10 group-hover:bg-[#032B93] group-hover:text-white transition-colors duration-400">
                  <div className="w-7 h-7">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                  {service.description}
                </p>

                <ul className="space-y-4 mt-auto pt-8 border-t border-slate-100">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                      <div className="w-5 h-5 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 border border-emerald-100">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="heading-section text-slate-900 mb-6">
              Our Implementation Process
            </h2>
            <p className="subheading max-w-2xl mx-auto">
              A proven methodology that ensures seamless deployment and optimal performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden lg:block absolute top-[2.5rem] left-[12.5%] right-[12.5%] h-px bg-slate-200 -z-10"></div>

            {processSteps.map((process, index) => (
              <div key={index} className="text-center relative z-10">
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-[0_0_0_8px_rgba(255,255,255,1)] border border-slate-100">
                  <div className="bg-[#0B1120] text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-extrabold shadow-lg">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[{ metric: '99.99%', label: 'Uptime SLA' }, { metric: '5K+', label: 'Happy Customers' }, { metric: '150+', label: 'Countries Covered' }, { metric: '24/7', label: 'Expert Support' }].map((stat, idx) => (
              <div key={idx} className="relative px-4">
                {idx !== 0 && <div className="hidden md:block absolute left-0 top-1/4 bottom-1/4 w-px bg-slate-200"></div>}
                <div className="text-4xl md:text-5xl font-black text-[#032B93] tracking-tight mb-2">
                  {stat.metric}
                </div>
                <div className="text-sm md:text-base font-semibold text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Services;