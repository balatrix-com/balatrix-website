import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import SEO from '../components/seo/SEO';
import TiltCard from '../components/common/TiltCard';

const Solutions = () => {
  const pageRef = useRef(null);
  const solutionsContainerRef = useRef(null);
  const solutionsRowRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const row = solutionsRowRef.current;
      if (!row) return;

      const scrollWidth = row.scrollWidth;
      const windowWidth = window.innerWidth;
      const translateAmount = scrollWidth - windowWidth + (windowWidth * 0.2);

      gsap.to(row, {
        x: -translateAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: solutionsContainerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          pin: '.solutions-sticky-wrapper',
          invalidateOnRefresh: true,
        }
      });
    }, solutionsContainerRef);

    return () => context.revert();
  }, []);

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
      subtitle: "Startups & Small Companies",
      description: "Affordable communication solutions. Get professional phone presence without the enterprise overhead.",
      features: [
        "Affordable pricing",
        "Instant number setup",
        "Call forwarding to any device",
        "Voicemail to email notifications"
      ],
      benefits: [
        "Professional brand image",
        "No hardware requirements",
        "Scale as your business grows"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Medium Business",
      subtitle: "Growing Companies",
      description: "Advanced communication features for expanding companies that need departments and queues.",
      features: [
        "Multiple numbers included",
        "Advanced call routing & IVRs",
        "Team collaboration features",
        "Call recording & analytics"
      ],
      benefits: [
        "Support multiple departments",
        "Tactile customer experience",
        "Centralized management"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Wholesale Infrastructure",
      subtitle: "Large Organizations",
      description: "Comprehensive communication system for organizations requiring high volume and uptime SLAs.",
      features: [
        "Unlimited numbers capacity",
        "99.99% uptime guarantee SLA",
        "Dedicated account team",
        "Custom APIs & webhooks"
      ],
      benefits: [
        "Carrier-grade reliability",
        "Reduced telecom footprint",
        "Custom compliance frameworks"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      popular: true
    },
    {
      id: 4,
      title: "Whitelabel Reseller",
      subtitle: "VoIP Resellers & Entrepeneurs",
      description: "Launch your own cloud PBX business. Rebrand with your custom logos, domain names, and set margins.",
      features: [
        "100% white-label system setup",
        "Custom domain mapping",
        "Set custom rates & margins",
        "Multi-tenant customer panel"
      ],
      benefits: [
        "Establish brand presence",
        "Recurring revenue stream",
        "Zero server overhead"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      popular: true
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "Professional communications for medical clinics and healthcare organizations.",
      features: ["Patient appointment lines", "24/7 routing configuration", "Compliance frameworks"],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      name: "Real Estate",
      description: "Voice routing solutions for agencies, property managers, and field brokers.",
      features: ["Lead capture routing", "Agent extension routing", "Time-based scheduling"],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1" />
        </svg>
      )
    },
    {
      name: "E-commerce",
      description: "Sales support and live ticketing numbers for digital stores and operations.",
      features: ["Order desk routing", "Automated customer flows", "Sales extensions"],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      name: "SaaS Platforms",
      description: "Programmatic phone configuration endpoints for software and apps.",
      features: ["Trunk provisioning API", "Real-time billing wallet", "Full webhook alerts"],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    }
  ];

  return (
    <div ref={pageRef} className="min-h-screen bg-transparent">
      <SEO
        title="Business Solutions"
        description="Tailored telecommunications solutions designed for your specific business needs. Discover our plans for startups, SMBs, and enterprises."
        canonicalUrl="https://balatrix.com/solutions"
        keywords="business communication solutions, enterprise voip, small business phone system, call center telecom"
      />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 w-screen h-screen z-[20] overflow-hidden opacity-[0.55] mix-blend-screen sm:opacity-[0.75]">
      </div>

      {/* 1. Hero Section - Obsidian Dark */}
      <section className="canvas-dark min-h-[75vh] flex items-center justify-center overflow-hidden relative pt-20">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-[var(--color-accent)]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] bg-[var(--color-accent-light)]/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 text-[var(--color-accent-light)] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
              >
                <span>Business Solutions</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display-lg text-[var(--text-dark-primary)] leading-tight"
              >
                Solutions by <br />
                <span className="font-normal text-[var(--color-accent)]">Business Type.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-[var(--text-dark-secondary)] font-normal leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                Scale communication operations your way. From startups to high-volume enterprises, find the routing model that fits your scope.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              >
                <button onClick={scrollToSolutions} className="btn-pill btn-pill-primary px-8 py-3.5">
                  Find Your Solution
                </button>
              </motion.div>
            </div>

            {/* Grid display layout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:grid grid-cols-2 gap-4 text-center"
            >
              {[
                { title: 'Startup' },
                { title: 'Growing' },
                { title: 'Wholesale' },
                { title: 'Reseller' }
              ].map((card, i) => (
                <div key={i} className="glass-card p-6 rounded-xl">
                  <div className="text-lg font-bold text-[var(--text-dark-primary)] mb-1">{card.title}</div>
                  <div className="text-xs text-[var(--text-dark-secondary)] font-normal">{card.desc}</div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Solutions Grid - Cool Light */}
      <section ref={solutionsContainerRef} id="solutions-grid" className="solutions-scroll-section relative bg-transparent border-t border-[var(--border-dark)] h-[220vh]">
        <div className="solutions-sticky-wrapper sticky top-0 h-screen flex flex-col justify-center overflow-hidden w-full">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[30%] left-[5%] w-[300px] h-[300px] bg-[var(--color-accent)]/5 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 w-full flex flex-col justify-between py-12 md:py-16">
            <div className="text-center mb-10 md:mb-14 shrink-0 px-4">
              <h2 className="font-display-md text-[var(--text-dark-primary)] mb-4">
                Choose Your <em className="text-[var(--color-accent)]">Business Model</em>
              </h2>
              <p className="text-base text-[var(--text-dark-secondary)] max-w-xl mx-auto font-normal">
                Each model addresses the compliance, latency, and extension scopes specific to your organizational size.
              </p>
            </div>

            {/* Horizontal Cards row */}
            <div className="w-full overflow-hidden px-[10vw]">
              <div ref={solutionsRowRef} className="solutions-cards-row flex flex-row gap-4 sm:gap-8 w-max">
                {solutions.map((solution, idx) => (
                  <div key={solution.id} className="w-[84vw] max-w-[400px] sm:w-[580px] md:w-[640px] shrink-0">
                    <TiltCard
                      className="premium-card flex flex-col justify-between h-full group relative"
                    >
                      {solution.popular && (
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
                          <span className="bg-[var(--color-accent)] text-white px-4 py-1.5 rounded-full text-[11px] font-bold shadow-md tracking-wider uppercase whitespace-nowrap">
                            Most Popular
                          </span>
                        </div>
                      )}

                      <div>
                        <div className="flex items-start gap-5 mb-8">
                          <div className="w-14 h-14 rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors duration-300 shadow-sm">
                            {solution.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-extrabold text-[var(--text-dark-primary)] mb-1.5">{solution.title}</h3>
                            <p className="text-[var(--text-dark-muted)] text-xs font-bold tracking-wider uppercase">
                              {solution.subtitle}
                            </p>
                          </div>
                        </div>

                        <p className="text-[var(--text-dark-secondary)] text-sm sm:text-base mb-8 leading-relaxed font-normal">
                          {solution.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[var(--border-dark)] pt-8">
                        <div>
                          <h4 className="font-extrabold text-[var(--text-dark-primary)] mb-4 text-xs uppercase tracking-widest">
                            Key Features:
                          </h4>
                          <ul className="space-y-3">
                            {solution.features.map((feature, index) => (
                              <li key={index} className="flex items-start text-sm sm:text-base text-[var(--text-dark-secondary)] font-normal">
                                <svg className="w-4 h-4 text-[var(--color-accent)] mr-2.5 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-extrabold text-[var(--text-dark-primary)] mb-4 text-xs uppercase tracking-widest">
                            Key Benefits:
                          </h4>
                          <ul className="space-y-3">
                            {solution.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start text-sm sm:text-base text-[var(--text-dark-secondary)] font-normal">
                                <svg className="w-4 h-4 text-[var(--color-emerald)] mr-2.5 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </TiltCard>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Industry-Specific Solutions - Obsidian Dark */}
      <section className="canvas-dark py-24 relative border-t border-[var(--border-dark)]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute left-[5%] bottom-[10%] w-[350px] h-[350px] bg-[var(--color-accent)]/10 rounded-full blur-[100px] animate-pulse-glow" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="font-display-md text-[var(--text-dark-primary)] mb-4"
            >
              Industry-Specific <em className="text-[var(--color-accent)]">Solutions</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="text-base text-[var(--text-dark-secondary)] max-w-xl mx-auto font-normal"
            >
              Specialized telecommunications systems tailored to meet the compliance and volume profiles of your industry.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card p-6 rounded-2xl hover:border-[var(--color-accent)]/50 group flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 mb-5 w-fit group-hover:scale-105 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-dark-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-[var(--text-dark-secondary)] text-xs mb-6 leading-relaxed font-normal">
                    {industry.description}
                  </p>
                </div>

                <div className="space-y-2.5 mt-auto border-t border-[var(--border-dark)] pt-4">
                  {industry.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-[11px] text-[var(--text-dark-secondary)] font-normal">
                      <svg className="w-3 h-3 text-[var(--color-accent)] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Solutions;