import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const EnterpriseSection = () => {
  return (
    <section className="canvas-dark py-24 lg:py-32 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-[var(--color-accent)]/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-[var(--color-accent)]/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-[var(--canvas-dark-elevated)] border border-[var(--border-dark)] text-[var(--color-accent-light)] px-4 py-1.5 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse"></span>
              <span className="font-semibold text-xs tracking-wider uppercase">Enterprise Tier</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display-lg text-[var(--text-dark-primary)] leading-tight"
            >
              Built for Scale.<br />
              <span className="font-normal text-[var(--color-accent)]">Designed for Reliability.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-[var(--text-dark-secondary)] leading-relaxed font-normal max-w-lg"
            >
              When communications are mission-critical, Balatrix delivers the active redundancies, compliance, and dedicated support your enterprise demands.
            </motion.p>

            <ul className="space-y-6 pt-2">
              {[
                { title: '99.99% Uptime SLA', desc: 'Financially backed SLA guarantee for absolute infrastructure durability.', icon: '🔒' },
                { title: 'Active-Active Redundancy', desc: 'Distributed DID mapping across multiple redundant node centers.', icon: '⚡' },
                { title: 'Dedicated Support Pods', desc: 'Real-time engineer escalations and direct Slack operations access.', icon: '🎯' }
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[var(--canvas-dark-elevated)] flex items-center justify-center border border-[var(--border-dark)] text-sm">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[var(--text-dark-primary)] font-semibold text-[16px] leading-tight">{item.title}</h4>
                    <p className="text-[var(--text-dark-secondary)] mt-1 text-[13px] font-normal leading-relaxed">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-4"
            >
              <Link to="/contact" className="btn-pill btn-pill-primary text-base px-8 py-3.5">
                Talk to Sales
              </Link>
            </motion.div>
          </div>

          {/* Visual Element: Data Center Graphic with Latency Test Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.6)] border border-white/10 bg-white/5 p-2">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
                alt="Global Data Center Infrastructure"
                className="w-full h-auto object-cover min-h-[480px] rounded-xl opacity-60"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[var(--canvas-dark)] via-transparent to-transparent z-10 rounded-xl" />

              {/* Technical Latency Display Widget */}
              <div className="absolute bottom-6 left-6 right-6 border border-[var(--border-dark)] bg-[var(--canvas-dark-elevated)]/95 backdrop-blur-md p-5 rounded-xl shadow-2xl z-20">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[11px] font-bold text-[var(--text-dark-muted)] tracking-widest uppercase">Global Network Routing</span>
                  <span className="text-emerald-100 flex items-center gap-1.5 font-mono text-[10px] bg-emerald-100/10 border border-emerald-100/20 px-2.5 py-0.5 rounded">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
                    </span>
                    Health
                  </span>
                </div>

                <div className="space-y-2">
                  {[
                    { region: 'US-EAST (N. Virginia)', bars: 5 },
                    { region: 'US-WEST (Oregon)', bars: 5 },
                    { region: 'CA-CENTRAL (Toronto)', bars: 4 },
                    { region: 'CA-EAST (Montreal)', bars: 3 }
                  ].map((node, i) => (
                    <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-[var(--canvas-dark-deep)]/50 border border-[var(--border-dark)]">
                      <span className="text-[var(--text-dark-primary)] font-medium text-xs">{node.region}</span>
                      <div className="flex space-x-0.5">
                        {[1, 2, 3, 4, 5].map(bar => (
                          <div key={bar} className={`w-1 h-2.5 rounded-sm transition-all ${bar <= node.bars ? 'bg-emerald-400' : 'bg-white/10'}`} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection;
