import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import SEO from '../components/seo/SEO';
import TiltCard from '../components/common/TiltCard';

const Services = () => {
  const pageRef = useRef(null);
  const servicesContainerRef = useRef(null);
  const servicesRowRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const row = servicesRowRef.current;
      if (!row) return;

      const scrollWidth = row.scrollWidth;
      const windowWidth = window.innerWidth;
      const translateAmount = scrollWidth - windowWidth + (windowWidth * 0.2);

      gsap.to(row, {
        x: -translateAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: servicesContainerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          pin: '.services-sticky-wrapper',
          invalidateOnRefresh: true,
        }
      });
    }, servicesContainerRef);

    return () => context.revert();
  }, []);

  const scrollToCoreServices = () => {
    const coreServices = document.getElementById('core-services');
    if (coreServices) {
      coreServices.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const services = [
    {
      id: 1,
      title: "US & Canada Wholesale Toll-Free Numbers",
      description: "Provision premium toll-free numbers instantly. Build customer trust with a nationwide corporate presence and custom prefix extensions.",
      features: [
        "Instant online provisioning",
        "Vanity numbers",
        "Local prefix routing options",
        "Free incoming call minutes"
      ],
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      popular: true
    },
    {
      id: 2,
      title: "Fully Hosted Cloud PBX System",
      description: "A complete virtual telephone switchboard. Manage your ring groups, IVR voice responses, and voicemails from a secure browser interface.",
      features: [
        "Multi-level IVR & auto-attendant",
        "Time-based routing (Schedules)",
        "Departments & extensions setup",
        "Call Monitoring"
      ],
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Free Web-Based Softphone",
      description: "Make and receive high-definition voice calls directly inside your web browser. No desktop software downloads or desk phones required.",
      features: [
        "In-browser dialing pad",
        "High-definition Opus audio codec",
        "Real-time wallet balance display",
        "Call history & recording access (Contact)"
      ],
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Whitelabel Reseller Platform",
      description: "Launch your own branded cloud PBX business. Set up custom domains, upload logos, manage clients, and configure custom margins.",
      features: [
        "100% white-label customer interface",
        "Domain mapping & color configuration",
        "Custom billing cycles & markup rates",
        "White-label client wallets & invoices"
      ],
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    }
  ];

  const processSteps = [
    { step: "01", title: "Select Number", description: "Choose a toll-free number from our vast digital catalog of prefixes and vanity styles." },
    { step: "02", title: "Configure PBX", description: "Map call routing structures, departments, IVR menus, and ring groups in our dashboard." },
    { step: "03", title: "Add Wallet Funds", description: "Top up your prepaid digital wallet securely to activate calling operations instantly." },
    { step: "04", title: "Start Calling", description: "Open our browser softphone or configure your SIP credentials to make your first live call." }
  ];

  return (
    <div ref={pageRef} className="min-h-screen bg-transparent">
      <SEO
        title="Services"
        description="Comprehensive cloud telephony and VoIP services including US/Canada toll-free numbers, hosted cloud PBX, web softphone, and whitelabel reseller platforms."
        canonicalUrl="https://balatrix.com/services"
        keywords="cloud telephony services, toll free numbers, hosted pbx, browser phone, voip api, whitelabel pbx"
      />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 w-screen h-screen z-[20] overflow-hidden opacity-[0.55] mix-blend-screen sm:opacity-[0.75]">
      </div>

      {/* 1. Hero Section - Obsidian Dark */}
      <section className="canvas-dark min-h-[75vh] flex items-center justify-center overflow-hidden relative pt-20">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-[var(--color-accent)]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-[var(--color-accent-light)]/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 text-[var(--color-accent-light)] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
              >
                <span>Advanced Telecom Services</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display-lg text-[var(--text-dark-primary)] leading-tight"
              >
                Unified Business <br />
                <span className="font-normal text-[var(--color-accent)]">Communication.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-[var(--text-dark-secondary)] font-normal leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                Launch your US or Canada calling operations instantly. Access premium toll-free trunking, browser dialers, and enterprise routing.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              >
                <button onClick={scrollToCoreServices} className="btn-pill btn-pill-primary px-8 py-3.5">
                  Explore Services
                </button>
                <Link to="?quote=consultation" className="btn-pill btn-pill-secondary px-8 py-3.5">
                  Request Consultation
                </Link>
              </motion.div>
            </div>

            {/* Visual grid layout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {[
                { title: 'Toll-Free Numbers', icon: '📞', desc: 'US & Canada prefixes' },
                { title: 'Cloud System', icon: '☁️', desc: 'PBX switchboards' },
                { title: 'REST APIs', icon: '🔧', desc: 'Embedded workflows' },
                { title: 'Web Softphone', icon: '🌐', desc: 'Browser terminal' }
              ].map((card, i) => (
                <div key={i} className="glass-card p-6 rounded-xl text-center">
                  <div className="text-3xl mb-3">{card.icon}</div>
                  <div className="text-sm font-bold text-[var(--text-dark-primary)] mb-1">{card.title}</div>
                  <div className="text-xs text-[var(--text-dark-secondary)] font-normal">{card.desc}</div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Services Grid - Cool Light */}
      <section ref={servicesContainerRef} id="core-services" className="services-scroll-section relative bg-transparent border-t border-[var(--border-dark)] h-[220vh] mt-16 md:mt-10 pt-6 md:pt-10">
        <div className="services-sticky-wrapper sticky top-0 h-screen flex flex-col justify-center overflow-hidden w-full">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[30%] left-[5%] w-[300px] h-[300px] bg-[var(--color-accent)]/5 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 w-full flex flex-col justify-between py-12 md:py-16">
            <div className="text-center mb-10 md:mb-14 shrink-0 px-4">
              <div className="text-xs font-bold text-[var(--color-accent)] tracking-widest uppercase mb-3">
                Our Offerings
              </div>
              <h2 className="font-display-md text-[var(--text-dark-primary)] mb-4">
                Our Core <em className="text-[var(--color-accent)]">Services</em>
              </h2>
              <p className="text-base text-[var(--text-dark-secondary)] max-w-xl mx-auto font-normal">
                Comprehensive communication systems engineered for peak performance and extreme compliance.
              </p>
            </div>

            {/* Horizontal Cards row */}
            <div className="w-full overflow-hidden px-[10vw]">
              <div ref={servicesRowRef} className="services-cards-row flex flex-row gap-4 sm:gap-8 w-max">
                {services.map((service, idx) => (
                  <div key={service.id} className="w-[84vw] max-w-[400px] sm:w-[500px] md:w-[600px] shrink-0">
                    <TiltCard
                      className="premium-card p-8 flex flex-col h-full group relative"
                    >
                      {service.popular && (
                        <div className="absolute -top-3 left-6 z-10">
                          <span className="bg-[var(--color-accent)] text-white px-3.5 py-1 rounded-full text-[10px] font-bold shadow-md tracking-wider uppercase">
                            Most Popular
                          </span>
                        </div>
                      )}

                      <div className="w-11 h-11 bg-[var(--canvas-dark-elevated)] text-[var(--color-accent)] rounded-full flex items-center justify-center mb-6 border border-[var(--border-dark)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-350 shadow-sm shrink-0">
                        {service.icon}
                      </div>

                      <h3 className="text-xl font-bold text-[var(--text-dark-primary)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[var(--text-dark-secondary)] text-xs mb-8 leading-relaxed flex-grow font-normal text-left">
                        {service.description}
                      </p>

                      <ul className="space-y-2.5 mt-auto pt-6 border-t border-[var(--border-dark)]">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-[13px] font-medium text-[var(--text-dark-secondary)]">
                            <div className="w-4.5 h-4.5 bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 rounded-full flex items-center justify-center mr-2.5 flex-shrink-0 mt-0.5">
                              <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="leading-snug text-left">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </TiltCard>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Process Section - Obsidian Dark */}
      <section className="canvas-dark py-24 relative border-t border-[var(--border-dark)]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] bg-[var(--color-accent)]/10 rounded-full blur-[100px] animate-pulse-glow" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="font-display-md text-[var(--text-dark-primary)] mb-4"
            >
              Our Implementation <em className="text-[var(--color-accent)]">Process</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="text-base text-[var(--text-dark-secondary)] max-w-xl mx-auto font-normal"
            >
              A proven methodology that ensures seamless deployment and optimal performance.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 relative">
            {/* desktop visual connector timeline */}
            <div className="hidden lg:block absolute top-[2.25rem] left-[12%] right-[12%] h-px bg-[var(--border-dark)] -z-10" />

            {processSteps.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-center relative z-10"
              >
                <div className="w-18 h-18 mx-auto bg-[var(--canvas-dark-deep)] rounded-full flex items-center justify-center mb-6 border border-[var(--border-dark)]">
                  <div className="bg-[var(--color-accent)] text-white w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold shadow-[0_0_150px_var(--color-accent)]">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-base font-semibold text-[var(--text-dark-primary)] mb-2">
                  {process.title}
                </h3>
                <p className="text-[var(--text-dark-secondary)] text-xs leading-relaxed font-normal px-4">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Stats Section - Cool Light */}
      <section className="canvas-dark py-20 relative border-t border-[var(--border-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { metric: '50k', label: 'Numbers Deployed' },
              { metric: '25k+', label: 'Active Numbers' },
              { metric: '99.99%', label: 'Uptime SLA' },
              { metric: 'USA, Canada', label: 'Countries Served' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative px-4"
              >
                {idx !== 0 && <div className="hidden lg:block absolute left-0 top-1/4 bottom-1/4 w-px bg-[var(--border-dark)]" />}
                <div className="text-3xl md:text-4xl font-extralight text-[var(--color-accent)] tracking-tight mb-2">
                  {stat.metric}
                </div>
                <div className="text-xs font-bold text-[var(--text-dark-muted)] uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;