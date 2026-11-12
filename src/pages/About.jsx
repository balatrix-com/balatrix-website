import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/seo/SEO';

const About = () => {
  const pageRef = useRef(null);
  const teamMembers = [
    {
      name: 'Anant D Kamat',
      role: 'Chief Executive Officer',
      bio: 'Driving the company’s vision and growth with extensive experience in telecommunications, business strategy, and unified communication solutions.',
      image: '/images/team/anant_kamat.jpg',
      linkedin: 'https://www.linkedin.com/in/anantdkamat/'
    },
    {
      name: 'Aniket Jadhav',
      role: 'Head of Engineering Department',
      bio: 'Leading engineering initiatives and building scalable, reliable communication platforms with expertise in SIP, VoIP, WebRTC, and modern software architecture.',
      image: '/images/team/aniket_jadhav.jpg',
      linkedin: 'https://www.linkedin.com/in/aniket-jadhav-92072a258/'
    },
    {
      name: 'Avinash Shanbhag',
      role: 'Backend Developer',
      bio: 'Developing robust and scalable backend systems that power communication services, APIs, data processing, and seamless platform integrations.',
      image: '/images/team/Avinash.jpg',
      linkedin: 'https://www.linkedin.com/in/avinashuday/'
    },
    {
      name: 'Vivek Ghagare',
      role: 'Support Engineer',
      bio: 'Providing technical support and troubleshooting expertise to ensure smooth platform operations, reliable communication services, and a seamless customer experience.',
      image: '/images/team/Vivek_Support.jpg',
      linkedin: 'https://www.linkedin.com/in/vivek-ghagare-454035317/'
    }
  ];

  const milestones = [
    {
      year: '2015',
      title: 'Company Founded',
      description: 'Launched with a core mission to provision affordable toll-free numbers across US & Canada.'
    },
    {
      year: '2018',
      title: 'API PBX Provisioning',
      description: 'Released automated API endpoints, enabling developers to build embedded voice workflows.'
    },
    {
      year: '2021',
      title: 'Global Node Scaling',
      description: 'Migrated to an Anycast network architecture to achieve and maintain our 99.99% uptime guarantee SLA.'
    },
    {
      year: '2024',
      title: '5,000+ Business Clients',
      description: 'Expanded operations serving over 5,000 businesses across North America.'
    }
  ];

  const values = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Affordability First',
      description: 'We believe every business deserves access to professional toll-free communication without breaking the bank.'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Simple Solutions',
      description: 'We make toll-free numbers and business communication simple, fast, and completely hassle-free.'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Customer Success',
      description: "Your operations are our priority. We are partners in your telecommunications journey."
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'US & Canada Focus',
      description: 'Deep expertise in North American carrier networks ensures optimal routing compliance.'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '5K+', label: 'Happy Customers' },
    { number: '50K+', label: 'Numbers Deployed' },
    { number: '99.99%', label: 'Uptime SLA' }
  ];

  return (
    <div ref={pageRef} className="min-h-screen bg-transparent">
      <SEO
        title="About Us"
        description="Learn about Balatrix, our story, and our mission to provide affordable, enterprise-grade cloud communication and toll-free numbers."
        canonicalUrl="https://balatrix.com/about"
      />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 w-screen h-screen z-[20] overflow-hidden opacity-[0.55] mix-blend-screen sm:opacity-[0.75]">
      </div>

      {/* 1. Hero Section */}
      <section className="canvas-dark min-h-screen flex items-center justify-center overflow-hidden relative pt-0 pb-0">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[500px] h-[500px] bg-[var(--color-accent)]/15 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 text-[var(--color-accent-light)] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-8"
          >
            <span>About Balatrix</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6 text-white"
          >
            Engineering <br />
            <span className="font-normal text-[var(--color-accent)]">Connections.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-10 text-center"
          >
            We are a team of telecommunications engineers and software developers dedicated to building the most reliable voice infrastructure for modern businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto"
          >
            <Link to="/contact" className="btn-pill btn-pill-primary px-8 py-3.5 text-center w-full sm:w-auto font-semibold">
              Get Your Number
            </Link>
            <Link to="/contact" className="btn-pill btn-pill-secondary px-8 py-3.5 text-center w-full sm:w-auto font-semibold">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Mission Statement */}
      <section className="canvas-dark pt-30 pb-24 relative border-t border-[var(--border-dark)]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[500px] h-[500px] bg-[var(--color-accent)]/10 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
              Our <span className="font-normal text-[var(--color-accent)]">Mission</span>
            </h2>

            <div className="space-y-3 text-slate-300 font-normal text-lg md:text-lg lg:text-xl max-w-5xl mx-auto text-justify">
              <p>
                At Balatrix, we believe that enterprise-grade telecommunications should not be locked behind complex legacy systems or exorbitant pricing models.
              </p>
              <p>
                Founded in 2015, by a team of SIP trunking experts and systems architects, our goal was simple: to construct a fully unified, cloud-native PBX network capable of sub-millisecond routing across North America, accessible via a single, intuitive interface.
              </p>
              <p className="text-white font-medium">
                Today, we process millions of calls monthly, ensuring compliance, clarity, and continuity for businesses ranging from agile startups to expansive call centers. We don't just route calls; <span className="text-[var(--color-accent)]">we engineer connections.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="canvas-dark py-24 relative border-t border-[var(--border-dark)]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] bg-[var(--color-accent)]/10 rounded-full blur-[100px] animate-pulse-glow" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="font-display-md text-[var(--text-dark-primary)] mb-4"
            >
              Core <em className="text-[var(--color-accent)]">Values</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="text-base text-[var(--text-dark-secondary)] max-w-xl mx-auto font-normal"
            >
              The principles that guide our engineering and our operations.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card p-6 rounded-2xl hover:border-[var(--color-accent)]/50 group"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 flex items-center justify-center text-xl mb-5 group-hover:scale-105 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-base font-bold text-[var(--text-dark-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                  {value.title}
                </h3>
                <p className="text-[var(--text-dark-secondary)] text-[13px] leading-relaxed font-normal">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Journey Section */}
      <section className="canvas-dark py-24 relative border-t border-[var(--border-dark)]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] bg-[var(--color-accent)]/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="font-display-md text-[var(--text-dark-primary)] mb-4"
            >
              Our <em className="text-[var(--color-accent)]">Journey</em>
            </motion.h2>
          </div>

          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute left-[27px] top-4 bottom-4 w-px bg-[var(--border-dark)]" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex relative pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[20px] top-5 w-4 h-4 rounded-full bg-[var(--canvas-dark-deep)] border-2 border-[var(--color-accent)]/30 ring-4 ring-[var(--canvas-dark)] shadow-[0_0_10px_var(--color-accent)]" />

                  <div className="bg-[var(--canvas-dark-elevated)] border border-[var(--border-dark)] rounded-xl p-6 shadow-sm flex-1">
                    <span className="inline-block bg-[var(--color-accent)]/10 text-[var(--color-accent-light)] border border-[var(--color-accent)]/20 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">
                      {milestone.year}
                    </span>
                    <h3 className="text-lg font-bold text-[var(--text-dark-primary)] mb-2">{milestone.title}</h3>
                    <p className="text-[var(--text-dark-secondary)] text-[13px] font-normal leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Team Section */}
      <section className="canvas-dark py-24 relative border-t border-[var(--border-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="font-display-md text-[var(--text-dark-primary)] mb-4"
            >
              Leadership <em className="text-[var(--color-accent)]">Team</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="text-base text-[var(--text-dark-secondary)] max-w-xl mx-auto font-normal"
            >
              Experts in VoIP protocols, systems architecture, and compliance.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col h-full bg-[var(--canvas-dark-elevated)] border border-[var(--border-dark)] rounded-2xl p-6 text-center group hover:border-[var(--color-accent)]/50 transition-colors"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-[var(--canvas-dark-deep)] border border-[var(--border-dark)] overflow-hidden mb-5 group-hover:scale-105 transition-transform duration-300">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-dark-primary)] mb-1">{member.name}</h3>
                <p className="text-[var(--color-accent)] text-xs font-semibold uppercase tracking-wider mb-4 min-h-[32px] flex items-center justify-center">{member.role}</p>
                <p className="text-[var(--text-dark-secondary)] text-[11px] leading-relaxed font-normal mb-6 flex-1">
                  {member.bio}
                </p>
                <div className="flex justify-center space-x-3 mt-auto">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn Profile`}
                    className="w-8 h-8 rounded-full bg-[var(--canvas-dark-deep)] border border-[var(--border-dark)] text-[var(--text-dark-secondary)] flex items-center justify-center hover:bg-[var(--border-dark)] hover:text-[var(--text-dark-primary)] transition-colors"
                  >
                    in
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;