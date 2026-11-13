import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/seo/SEO';

const Contact = () => {
  const pageRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    subject: 'general',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const sectionRef = useRef(null);

  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#contact-form') {
      setTimeout(() => {
        scrollToContactForm();
      }, 100);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      if (window.$zoho && window.$zoho.salesiq) {
        try {
          window.$zoho.salesiq.visitor.name(formData.firstName + ' ' + formData.lastName);
          window.$zoho.salesiq.visitor.email(formData.email);
          window.$zoho.salesiq.visitor.contactnumber(formData.phone);

          const notes = `Contact Page Submission. Company: ${formData.company || 'N/A'}, Subject: ${formData.subject}, Message: ${formData.message}`;
          window.$zoho.salesiq.visitor.question(notes);
        } catch (err) {
          console.warn('Zoho SalesIQ sync failed:', err);
        }
      }

      setSubmitStatus('success');

      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          subject: 'general',
          message: ''
        });
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      title: 'Sales & Support',
      description: 'Talk to our toll-free number experts',
      contact: '+1 (844) 225-2435',
      subtext: 'Mon-Fri 8AM-8PM EST, 24/7 for existing customers'
    },
    {
      icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
      title: 'Live Chat Support',
      description: 'Instant help when you need it',
      contact: 'Chat with us now',
      subtext: 'Available Mon-Fri 8AM-8PM EST'
    }
  ];

  const officeLocations = [
    {
      city: 'Brampton',
      country: 'Canada',
      address: '38 Keppel Cir, Brampton, ON L7A 0B6, Canada',
      phone: '+1 (905) 495-2435',
      type: 'Headquarters',
      flag: '🇨🇦'
    }
  ];

  const departments = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'sales', label: 'Sales & Pricing' },
    { value: 'support', label: 'Technical Support' },
    { value: 'billing', label: 'Billing & Accounts' },
    { value: 'partnerships', label: 'Partnerships' },
    { value: 'careers', label: 'Careers' }
  ];

  const faqData = [
    {
      question: 'How quickly will I receive a response?',
      answer: 'Sales inquiries receive responses within 2 hours during business hours. Technical support varies by plan level.'
    },
    {
      question: 'Can I schedule a demo?',
      answer: 'Yes! Contact our sales team to schedule a personalized demo of our platform and discuss your specific requirements.'
    },
    {
      question: 'Where can I find compliance info?',
      answer: 'Our legal and regulatory compliance details are listed under our Privacy Policy. For specific inquiries, select Partnerships.'
    }
  ];

  return (
    <div ref={pageRef} className="min-h-screen bg-transparent">
      <SEO
        title="Contact Us"
        description="Get in touch with Balatrix. Contact our sales and support teams for toll-free numbers, Hosted PBX pricing, or platform custom setups."
        canonicalUrl="https://balatrix.com/contact"
        keywords="contact balatrix, toll free support, voip customer service, wholesale telecom sales"
      />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 w-screen h-screen z-[20] overflow-hidden opacity-[0.55] mix-blend-screen sm:opacity-[0.75]">
      </div>

      {/* 1. Hero Section - Obsidian Dark */}
      <section className="canvas-dark flex items-center justify-center overflow-hidden relative pt-28 md:pt-36 pb-6 md:pb-8">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-[var(--color-accent)]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] bg-[var(--color-accent-light)]/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-6 pb-6 md:pt-10 md:pb-10 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 text-[var(--color-accent-light)] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
              >
                <span>Support Channels</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display-lg text-[var(--text-dark-primary)] leading-tight"
              >
                Connect With <br />
                Our <span className="font-normal text-[var(--color-accent)]">Experts.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-[var(--text-dark-secondary)] font-normal leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                Need high-volume trunking support or have custom reseller PBX requirements? Our team is available 24x7 to assist you.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              >
                <button onClick={scrollToContactForm} className="btn-pill btn-pill-primary px-8 py-3.5">
                  Send Message
                </button>
                <a href="tel:+18442252435" className="btn-pill btn-pill-secondary px-8 py-3.5 text-center">
                  Call Sales
                </a>
              </motion.div>
            </div>

            {/* Right-hand side card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="glass-card p-10 rounded-2xl border-[var(--border-dark)] max-w-sm mx-auto text-center relative overflow-hidden">
                <div className="text-5xl mb-4">📞</div>
                <h3 className="text-lg font-bold text-[var(--text-dark-primary)] mb-2">Get In Touch</h3>
                <p className="text-xs text-[var(--text-dark-secondary)] mb-6 font-normal">Multiple ways to connect with our expert team.</p>
                <div className="flex items-center justify-center gap-2 text-xs text-[var(--text-dark-primary)] bg-[var(--canvas-dark-deep)] py-2.5 rounded-xl border border-[var(--border-dark)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-emerald)] animate-pulse"></span>
                  <span>24/7 Availability Support</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Contact Methods Section - Cool Light */}
      <section ref={sectionRef} className="canvas-dark py-12 md:py-16 relative border-t border-[var(--border-dark)]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-[var(--color-accent)]/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="text-xs font-bold text-[var(--color-accent)] tracking-widest uppercase mb-4"
            >
              Methods
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="font-display-md text-[var(--text-dark-primary)] mb-4"
            >
              Preferred <em className="text-[var(--color-accent)]">Channels</em>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card p-8 group border-[var(--border-dark)] hover:border-[var(--color-accent)]/50"
              >
                <div>
                  <div className="w-12 h-12 bg-[var(--canvas-dark-elevated)] text-[var(--color-accent)] border border-[var(--border-dark)] rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={method.icon} />
                    </svg>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--text-dark-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">{method.title}</h3>
                  <p className="text-[var(--text-dark-secondary)] text-xs mb-6 font-normal">{method.description}</p>

                  <div className="space-y-1">
                    <div className="text-xl font-bold text-[var(--text-dark-primary)]">{method.contact}</div>
                    <div className="text-[10px] text-[var(--text-dark-muted)] font-semibold">{method.subtext}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Form and Office Details - Obsidian Dark */}
      <section id="contact-form" className="canvas-dark py-24 relative border-t border-[var(--border-dark)]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-[var(--color-accent)]/10 rounded-full blur-[100px] animate-pulse-glow" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

            {/* Form Container */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card rounded-2xl p-8 lg:p-12 border-[var(--border-dark)]"
              >
                <div className="mb-10 flex items-center gap-4">
                  <div className="w-12 h-12 bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 rounded-full flex items-center justify-center shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-dark-primary)] mb-0.5">Send Us a Message</h3>
                    <p className="text-[11px] text-[var(--text-dark-secondary)] font-normal">Complete fields below and our engineers will review your request.</p>
                  </div>
                </div>

                {submitStatus === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-emerald)]/10 flex items-center justify-center border border-[var(--color-emerald)]/20 shadow-[0_0_15px_rgba(16,185,129,0.25)] animate-bounce">
                      <svg className="w-6 h-6 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-[var(--text-dark-primary)]">Message Transmitted!</h4>
                    <p className="text-xs text-[var(--text-dark-secondary)] max-w-xs font-normal">We've received your request. A sales engineer will follow up in 2 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-[var(--text-dark-muted)] uppercase tracking-widest">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Michael"
                          className="w-full bg-[var(--canvas-dark-deep)] border border-[var(--border-dark)] text-[var(--text-dark-primary)] placeholder-[var(--text-dark-muted)] rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[var(--color-accent)]/50 focus:ring-1 focus:ring-[var(--color-accent)]/25 transition-all"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-[var(--text-dark-muted)] uppercase tracking-widest">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Rodriguez"
                          className="w-full bg-[var(--canvas-dark-deep)] border border-[var(--border-dark)] text-[var(--text-dark-primary)] placeholder-[var(--text-dark-muted)] rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[var(--color-accent)]/50 focus:ring-1 focus:ring-[var(--color-accent)]/25 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-[var(--text-dark-muted)] uppercase tracking-widest">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="mrodriguez@company.com"
                          className="w-full bg-[var(--canvas-dark-deep)] border border-[var(--border-dark)] text-[var(--text-dark-primary)] placeholder-[var(--text-dark-muted)] rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[var(--color-accent)]/50 focus:ring-1 focus:ring-[var(--color-accent)]/25 transition-all"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-[var(--text-dark-muted)] uppercase tracking-widest">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 019-2435"
                          className="w-full bg-[var(--canvas-dark-deep)] border border-[var(--border-dark)] text-[var(--text-dark-primary)] placeholder-[var(--text-dark-muted)] rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[var(--color-accent)]/50 focus:ring-1 focus:ring-[var(--color-accent)]/25 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-[var(--text-dark-muted)] uppercase tracking-widest">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Acme Corp"
                          className="w-full bg-[var(--canvas-dark-deep)] border border-[var(--border-dark)] text-[var(--text-dark-primary)] placeholder-[var(--text-dark-muted)] rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[var(--color-accent)]/50 focus:ring-1 focus:ring-[var(--color-accent)]/25 transition-all"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-[var(--text-dark-muted)] uppercase tracking-widest">Department</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full bg-[var(--canvas-dark-deep)] border border-[var(--border-dark)] text-[var(--text-dark-primary)] rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[var(--color-accent)]/50 focus:ring-1 focus:ring-[var(--color-accent)]/25 transition-all"
                        >
                          {departments.map((dept) => (
                            <option key={dept.value} value={dept.value} className="bg-[var(--canvas-dark-deep)]">{dept.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-[var(--text-dark-muted)] uppercase tracking-widest">Message Description</label>
                      <textarea
                        name="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Detail how we can assist you..."
                        className="w-full bg-[var(--canvas-dark-deep)] border border-[var(--border-dark)] text-[var(--text-dark-primary)] placeholder-[var(--text-dark-muted)] rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[var(--color-accent)]/50 focus:ring-1 focus:ring-[var(--color-accent)]/25 transition-all resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-pill-primary w-full py-3 disabled:opacity-50"
                      >
                        {isSubmitting ? 'Transmitting Data...' : 'Transmit Message'}
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>

            {/* Office Locations */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-[var(--text-dark-primary)] mb-2">Office Locations</h3>
              {officeLocations.map((office, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="glass-card p-6 rounded-2xl border-[var(--border-dark)] flex flex-col justify-between hover:border-[var(--color-accent)]/50 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-[var(--text-dark-primary)] text-sm">
                        {office.city} {office.flag}
                      </h4>
                      <span className="text-[9px] font-bold bg-[var(--color-accent)]/15 text-[var(--color-accent-light)] border border-[var(--color-accent)]/30 px-2 py-0.5 rounded-full">
                        {office.type}
                      </span>
                    </div>
                    <p className="text-[var(--text-dark-secondary)] text-xs leading-relaxed mb-4 font-normal">
                      {office.address}
                    </p>
                  </div>
                  <div className="border-t border-[var(--border-dark)] pt-4 flex items-center space-x-2 text-xs font-semibold text-[var(--color-accent)]">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{office.phone}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQs - Cool Light */}
      <section className="canvas-dark py-24 relative border-t border-[var(--border-dark)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="font-display-md text-[var(--text-dark-primary)] mb-4"
            >
              Frequently Asked <em className="text-[var(--color-accent)]">Questions</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="text-base text-[var(--text-dark-secondary)] font-normal"
            >
              Quick answers regarding SLA responses and compliance inquiries.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-[var(--canvas-dark-elevated)] border border-[var(--border-dark)] rounded-xl p-6 hover:border-[var(--color-accent)]/20 transition-all duration-300"
              >
                <h4 className="font-bold text-[var(--text-dark-primary)] text-sm mb-2 flex items-start">
                  <span className="text-[var(--color-accent)] mr-3 text-lg leading-none mt-0.5">Q.</span>
                  {faq.question}
                </h4>
                <p className="text-[var(--text-dark-secondary)] text-xs leading-relaxed font-normal ml-6 pl-1">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;