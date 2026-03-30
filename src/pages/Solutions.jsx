import React from 'react';

const Solutions = () => {
  // Scroll to solutions section
  const scrollToSolutions = () => {
    const solutionsSection = document.getElementById('solutions-grid');
    if (solutionsSection) {
      solutionsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  const solutions = [
    {
      id: 1,
      title: "Small Business",
      subtitle: "Startups & Small Companies (1-15 employees)",
      description: "Affordable toll-free communication solutions for growing businesses. Get professional phone presence without the enterprise costs.",
      features: [
        "Affordable monthly pricing starting at $9.99",
        "Instant toll-free number setup",
        "Call forwarding to any device",
        "Voicemail to email notifications",
        "Mobile & desktop apps included",
        "US & Canada toll-free coverage",
        "Basic call analytics",
        "Email support during business hours"
      ],
      benefits: [
        "Professional image with toll-free numbers",
        "No expensive hardware required",
        "Scale as your business grows",
        "Work from anywhere capabilities"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: "blue",
      popular: true
    },
    {
      id: 2,
      title: "Medium Business",
      subtitle: "Growing Companies (20-50 employees)",
      description: "Advanced business communication features for expanding companies that need more than basic phone service but less than enterprise complexity.",
      features: [
        "Multiple toll-free numbers included",
        "Advanced call routing & IVR systems",
        "Team collaboration features",
        "Call recording & analytics",
        "Priority customer support",
        "Multi-location support",
        "Flexible user management"
      ],
      benefits: [
        "Support multiple departments efficiently",
        "Professional customer experience",
        "Centralized communication management",
        "Cost-effective scaling"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "green"
    },
    {
      id: 3,
      title: "Enterprise",
      subtitle: "Large Organizations (100+ employees)",
      description: "Comprehensive communication infrastructure for large organizations requiring maximum reliability, compliance, and dedicated support.",
      features: [
        "Unlimited toll-free numbers",
        "99.9% uptime guarantee with SLA",
        "24/7 dedicated account management",
        "Custom compliance frameworks",
        "Advanced security features",
        "Multi-location & international support",
        "Custom integrations & APIs",
        "White-label solutions available"
      ],
      benefits: [
        "Enterprise-grade reliability",
        "Reduce communication costs significantly",
        "Streamline global operations",
        "Maintain compliance requirements"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      color: "purple"
    },
    {
      id: 4,
      title: "Call Centers",
      subtitle: "Customer Service & Support Operations",
      description: "Specialized communication solutions for call centers, customer service teams, and support operations requiring high-volume capabilities.",
      features: [
        "High-capacity toll-free number routing",
        "Advanced call queue management",
        "Real-time analytics & reporting",
        "Agent performance tracking",
        "Call recording & quality monitoring",
        "Overflow & failover capabilities",
        "24/7 technical support"
      ],
      benefits: [
        "Improve customer satisfaction rates",
        "Optimize agent productivity",
        "Reduce abandoned call rates",
        "Scale operations efficiently"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "orange"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "Professional toll-free communication for medical practices, clinics, and healthcare providers.",
      features: ["Patient appointment lines", "24/7 emergency numbers", "HIPAA-compliant communications"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      name: "Real Estate",
      description: "Professional communication solutions for real estate agencies, agents, and property management companies.",
      features: ["Lead capture numbers", "Property inquiry lines", "Agent direct dial"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      name: "E-commerce",
      description: "Customer service and sales support numbers for online businesses and retail operations.",
      features: ["Order support lines", "Customer service", "Sales inquiries"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      name: "SaaS Platforms",
      description: "Embedded telecom capabilities for software platforms and application developers.",
      features: ["API integration", "Multi-tenant support", "Usage analytics"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    }
  ];

  const caseStudies = [
    {
      company: "Growing E-commerce Business",
      industry: "Retail",
      challenge: "Managing customer communications across 2,500 locations with inconsistent quality and high costs.",
      solution: "Implemented cloud telephony platform with centralized management and local number provisioning.",
      results: [
        "40% reduction in communication costs",
        "99.9% uptime across all locations",
        "Improved customer satisfaction scores"
      ]
    },
    {
      company: "Healthcare Technology Startup",
      industry: "Healthcare",
      challenge: "Needed HIPAA-compliant telehealth platform that could scale from 100 to 10,000 providers.",
      solution: "Built custom telecom infrastructure with compliance frameworks and automated scaling.",
      results: [
        "Achieved HIPAA compliance in 6 weeks",
        "Scaled to 5,000 providers in first year",
        "Zero security incidents to date"
      ]
    },
    {
      company: "Global Financial Institution",
      industry: "Finance",
      challenge: "Required secure, compliant communications across 15 countries with local presence.",
      solution: "Deployed multi-region infrastructure with local numbers and compliance management.",
      results: [
        "Expanded to 15 countries in 8 months",
        "Maintained 99.99% uptime SLA",
        "Reduced regulatory compliance overhead"
      ]
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
          <div className="absolute top-10 sm:top-20 right-4 sm:right-20 w-16 sm:w-32 h-16 sm:h-32 border border-purple-200 rounded-lg transform rotate-12 opacity-30 animate-float" />
          <div className="absolute bottom-16 sm:bottom-32 left-8 sm:left-40 w-12 sm:w-20 h-12 sm:h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-40 animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-20 sm:top-40 right-12 sm:right-60 w-8 sm:w-16 h-8 sm:h-16 border-2 border-purple-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-24 xl:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Content Section */}
            <div className="space-y-6 sm:space-y-8 w-full overflow-hidden">
              {/* Small intro */}
              <div className="text-sm font-medium text-gray-500 opacity-0 animate-fade-in-up" style={{ fontFamily: 'Inter, sans-serif', animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                Business Solutions 🏢
              </div>

              {/* Main Headline */}
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.2] sm:leading-[1.1] tracking-[-0.02em] opacity-0 animate-fade-in-up break-words"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  animationDelay: '0.3s',
                  animationFillMode: 'forwards',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word'
                }}
              >
                Solutions by<br />Business<br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Type</span>
              </h1>

              {/* Supporting subtext */}
              <p
                className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-full lg:max-w-lg opacity-0 animate-fade-in-up break-words"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  animationDelay: '0.5s',
                  animationFillMode: 'forwards',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word'
                }}
              >
                Scale your business your way — pay only for what you use.
                From small startups to large enterprises, we have the right solution for your scale and industry.
                No delays. No complexity. Just plug in and start calling.
              </p>

              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                <button
                  onClick={scrollToSolutions}
                  className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-200 hover:transform hover:-translate-y-0.5 hover:shadow-xl text-sm sm:text-base"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Find Your Solution
                </button>
                <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-200 hover:transform hover:-translate-y-px text-sm sm:text-base"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Compare Options
                </button>
              </div>

              {/* Trust indicators */}
              <div className="pt-6 sm:pt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm font-medium text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-gray-800">4</span>
                    <span>Business Types</span>
                  </div>
                  <div className="w-px h-3 sm:h-4 bg-gray-300" />
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-gray-800">Custom</span>
                    <span>Solutions</span>
                  </div>
                  <div className="w-px h-3 sm:h-4 bg-gray-300" />
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-gray-800">Scalable</span>
                    <span>Growth</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="hidden lg:block opacity-0 animate-fade-in-right" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
              <div className="relative h-80 xl:h-96 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-3 lg:gap-4 text-center">
                  <div className="bg-white p-4 lg:p-6 rounded-xl shadow-lg border">
                    <div className="text-xl lg:text-2xl font-bold text-blue-600 mb-1 lg:mb-2">Small</div>
                    <div className="text-xs lg:text-sm text-gray-600">1-15 employees</div>
                  </div>
                  <div className="bg-white p-4 lg:p-6 rounded-xl shadow-lg border">
                    <div className="text-xl lg:text-2xl font-bold text-green-600 mb-1 lg:mb-2">Medium</div>
                    <div className="text-xs lg:text-sm text-gray-600">20-50 employees</div>
                  </div>
                  <div className="bg-white p-4 lg:p-6 rounded-xl shadow-lg border">
                    <div className="text-xl lg:text-2xl font-bold text-purple-600 mb-1 lg:mb-2">Enterprise</div>
                    <div className="text-xs lg:text-sm text-gray-600">100+ employees</div>
                  </div>
                  <div className="bg-white p-4 lg:p-6 rounded-xl shadow-lg border">
                    <div className="text-xl lg:text-2xl font-bold text-orange-600 mb-1 lg:mb-2">Call Centers</div>
                    <div className="text-xs lg:text-sm text-gray-600">High volume</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Visual Element */}
            <div className="lg:hidden mt-6 sm:mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-gray-200 shadow-sm text-center">
                  <div className="text-lg sm:text-xl font-bold text-blue-600 mb-1">Small</div>
                  <div className="text-xs text-gray-600">1-15 employees</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-gray-200 shadow-sm text-center">
                  <div className="text-lg sm:text-xl font-bold text-green-600 mb-1">Medium</div>
                  <div className="text-xs text-gray-600">20-50 employees</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-gray-200 shadow-sm text-center">
                  <div className="text-lg sm:text-xl font-bold text-purple-600 mb-1">Enterprise</div>
                  <div className="text-xs text-gray-600">100+ employees</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-gray-200 shadow-sm text-center">
                  <div className="text-lg sm:text-xl font-bold text-orange-600 mb-1">Call Centers</div>
                  <div className="text-xs text-gray-600">High volume</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions-grid" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 opacity-0 animate-fade-in-up"
              style={{
                fontFamily: 'Inter, sans-serif',
                animationDelay: '0.1s',
                animationFillMode: 'forwards'
              }}
            >
              Choose Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Business Model</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up"
              style={{
                fontFamily: 'Inter, sans-serif',
                animationDelay: '0.3s',
                animationFillMode: 'forwards'
              }}
            >
              Each solution is specifically designed to address the unique challenges and requirements of different business types
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                className={`relative bg-white border-2 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group opacity-0 animate-fade-in-up ${solution.popular ? 'border-blue-500' : 'border-gray-200 hover:border-gray-300'
                  }`}
                style={{
                  animationDelay: `${0.2 + index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              >
                {solution.popular && (
                  <div className="absolute -top-4 left-8">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-start space-x-4 mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br from-${solution.color}-500 to-${solution.color}-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-gray-800 transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 font-medium"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {solution.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {solution.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {solution.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Key Benefits:
                    </h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 opacity-0 animate-fade-in-up"
              style={{
                fontFamily: 'Inter, sans-serif',
                animationDelay: '0.1s',
                animationFillMode: 'forwards'
              }}
            >
              Industry-Specific <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up"
              style={{
                fontFamily: 'Inter, sans-serif',
                animationDelay: '0.3s',
                animationFillMode: 'forwards'
              }}
            >
              Specialized telecommunications solutions tailored to meet the unique compliance,
              security, and operational requirements of different industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group opacity-0 animate-fade-in-up hover:-translate-y-2"
                style={{
                  animationDelay: `${0.2 + index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-4 w-fit group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {industry.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {industry.description}
                </p>
                <div className="space-y-2">
                  {industry.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 opacity-0 animate-fade-in-up"
              style={{
                fontFamily: 'Inter, sans-serif',
                animationDelay: '0.1s',
                animationFillMode: 'forwards'
              }}
            >
              Success <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up"
              style={{
                fontFamily: 'Inter, sans-serif',
                animationDelay: '0.3s',
                animationFillMode: 'forwards'
              }}
            >
              See how companies like yours have transformed their communications infrastructure with Balatrix
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group opacity-0 animate-fade-in-up hover:-translate-y-2"
                style={{
                  animationDelay: `${0.2 + index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-xl text-gray-900 group-hover:text-gray-800 transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {study.company}
                  </h3>
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {study.industry}
                  </span>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Challenge:
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{study.challenge}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Solution:
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{study.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Results:
                  </h4>
                  <ul className="space-y-3">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start text-sm">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Solutions;