import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import TiltCard from '../common/TiltCard';

const TrustSection = () => {
  const containerRef = useRef(null);
  const stats = [
    { metric: '50K+', label: 'Numbers Deployed', icon: '📡' },
    { metric: '25K+', label: 'Active Numbers', icon: '🏢' },
    { metric: '99.99%', label: 'Uptime SLA', icon: '⚡' },
    { metric: 'USA, Canada', label: 'Countries Served', icon: '🌐' }
  ];

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo('.trust-card',
        { opacity: 0, y: 45, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.12,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '.trust-cards-grid',
            start: 'top 88%',
            toggleActions: 'play none none none',
          }
        }
      );
    }, containerRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={containerRef} className="canvas-dark py-24 relative overflow-hidden border-b border-[var(--border-dark)]">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[var(--color-accent)]/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold text-[var(--color-accent)] tracking-widest uppercase mb-4">
            Enterprise Reliability
          </h2>

          <p className="font-display-md text-[var(--text-dark-primary)] leading-tight">
            Trusted by modern teams to route<br />
            <em className="text-[var(--color-accent)]">millions of calls</em> globally.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="trust-cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <TiltCard
              key={idx}
              className="trust-card premium-card p-6 sm:p-8 text-center flex flex-col justify-center items-center h-full group opacity-0"
            >
              <div className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-110">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-extralight text-[var(--color-accent)] tracking-tight mb-3">
                {stat.metric}
              </div>
              <div className="text-xs font-bold text-[var(--text-dark-muted)] tracking-widest uppercase">
                {stat.label}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
