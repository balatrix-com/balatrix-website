import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    subject: 'general',
    message: ''
  });

  const sectionRef = useRef(null);

  // Scroll to contact form function
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle anchor scrolling when page loads
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#contact-form') {
      // Add a small delay to ensure the page has rendered
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  // Floating animation component
  const FloatingElement = ({ children, delay = 0 }) => (
    <div
      className="animate-float"
      style={{
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  );

  const contactMethods = [
    {
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      title: 'Sales & Support',
      description: 'Talk to our toll-free number experts',
      contact: '+1 (844) 225-2435',
      subtext: 'Mon-Fri 8AM-8PM EST, 24/7 for existing customers',
      gradient: 'from-blue-500 to-cyan-500',
      action: 'Call Now'
    },
    {
      icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
      title: 'Live Chat Support',
      description: 'Instant help when you need it',
      contact: 'Chat with us now',
      subtext: 'Available Mon-Fri 8AM-8PM EST',
      gradient: 'from-orange-500 to-red-500',
      action: 'Start Chat'
    }
  ];

  const officeLocations = [
    {
      city: 'Brampton',
      country: 'Canada',
      address: '38 Keppel Cir, Brampton, ON L7A 0B6, Canada',
      phone: '+1 (415) 555-0123',
      type: 'Headquarters',
      flag: '🇨🇦'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: '45 Finsbury Square, London EC2A 1PX',
      phone: '+44 20 7946 0958',
      type: 'European Operations',
      flag: '🇬🇧'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      address: '1 Marina Boulevard, Singapore 018989',
      phone: '+65 6532 4567',
      type: 'Asia-Pacific Hub',
      flag: '🇸🇬'
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
      question: 'Do you offer 24/7 support?',
      answer: '24/7 phone support is available for Enterprise plan customers. All other customers have access to email support.'
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
            <div className="space-y-6 sm:space-y-8 w-full overflow-hidden">
              {/* Small intro */}
              <div className="text-sm font-bold text-[#032B93] tracking-widest uppercase mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                Contact Us
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight opacity-0 animate-fade-in-up break-words" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                Get In<br />Touch With<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#032B93] to-blue-500">Our Team</span>
              </h1>

              {/* Supporting subtext */}
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-full lg:max-w-xl opacity-0 animate-fade-in-up break-words" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                Ready to transform your telecommunications infrastructure? Our team of experts
                is here to help you find the perfect solution for your business needs.
              </p>

              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                <button className="btn btn-primary text-lg px-8 py-4 w-full sm:w-auto shadow-[0_8px_20px_rgba(3,43,147,0.25)] hover:shadow-[0_12px_25px_rgba(3,43,147,0.35)]">
                  Talk to Sales
                </button>
                <button
                  onClick={scrollToContactForm}
                  className="btn btn-secondary text-lg px-8 py-4 w-full sm:w-auto font-semibold"
                >
                  Schedule Demo
                </button>
              </div>

              {/* Trust indicators */}
              <div className="pt-8 border-t border-slate-200/60 mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
                <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-slate-800">50K+</span>
                    <span>Numbers Delivered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-slate-800">24/7</span>
                    <span>Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-slate-800">&lt; 24h</span>
                    <span>Setup Time</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Visual Element */}
            <div className="lg:hidden mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <div className="text-3xl mb-3">📞</div>
                  <div className="text-base font-bold text-slate-900 mb-1">Sales & Support</div>
                  <div className="text-sm text-slate-500 font-medium">Talk to experts</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <div className="text-3xl mb-3">💬</div>
                  <div className="text-base font-bold text-slate-900 mb-1">Live Chat</div>
                  <div className="text-sm text-slate-500 font-medium">Instant help</div>
                </div>
              </div>
            </div>

            {/* Visual Element - Desktop */}
            <div className="hidden lg:block opacity-0 animate-fade-in-right" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
              <div className="relative h-80 xl:h-96 flex items-center justify-center">
                <div className="bg-white rounded-3xl p-12 shadow-[0_20px_50px_rgba(3,43,147,0.12)] border border-slate-200/60 max-w-sm w-full text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#032B93]/5 rounded-bl-full -z-10"></div>
                  <div className="text-6xl mb-6">📞</div>
                  <div className="text-2xl font-bold text-slate-900 mb-3">Get In Touch</div>
                  <div className="text-sm text-slate-500 mb-8 font-medium">
                    Multiple ways to connect with our expert support team
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-slate-600 font-bold bg-slate-50 py-3 rounded-xl border border-slate-100">
                    <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>24/7 availability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section ref={sectionRef} className="relative py-24 bg-slate-50 border-t border-slate-200/60 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4 fade-in-up">
            <div className="text-sm font-bold text-[#032B93] tracking-widest uppercase mb-4">
              METHODS
            </div>

            <h2 className="heading-section text-slate-900">
              Choose Your Preferred Contact Method
            </h2>

            <p className="subheading max-w-2xl mx-auto">
              Get the support you need, when you need it. Multiple ways to connect with our expert team.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-24">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group relative bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-[0_20px_40px_rgba(3,43,147,0.12)] hover:border-[#032B93]/20 transition-all duration-300 hover:transform hover:-translate-y-2 fade-in-up overflow-hidden h-full flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#032B93]/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>

                <div className="relative z-10 flex-grow">
                  <div className="w-16 h-16 bg-[#032B93]/5 text-[#032B93] rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-[#032B93]/10">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={method.icon} />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {method.title}
                  </h3>

                  <p className="text-slate-600 mb-6 font-medium">
                    {method.description}
                  </p>

                  <div className="space-y-3">
                    <div className="text-2xl font-extrabold text-[#032B93]">
                      {method.contact}
                    </div>

                    <div className="text-sm font-bold text-slate-400 tracking-wider">
                      {method.subtext}
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button className="w-full btn btn-primary py-4 px-6 rounded-xl font-bold">
                    {method.action}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form and Office Info */}
          <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-12 mb-24">
            {/* Premium Contact Form */}
            <div className="lg:col-span-2 fade-in-up">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-[0_20px_40px_rgba(3,43,147,0.08)]">

                <div className="relative z-10">
                  {/* Form Header */}
                  <div className="mb-10 space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-[#032B93]/5 text-[#032B93] rounded-2xl flex items-center justify-center shadow-sm border border-[#032B93]/10">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-1">Send Us a Message</h3>
                        <p className="text-slate-600 font-medium">We'll get back to you within 2 hours</p>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-slate-700 uppercase tracking-widest">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#032B93]/50 focus:border-[#032B93] outline-none transition-all duration-200 text-slate-900 font-medium placeholder-slate-400 hover:bg-white"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-slate-700 uppercase tracking-widest">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#032B93]/50 focus:border-[#032B93] outline-none transition-all duration-200 text-slate-900 font-medium placeholder-slate-400 hover:bg-white"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700 uppercase tracking-widest">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#032B93]/50 focus:border-[#032B93] outline-none transition-all duration-200 text-slate-900 font-medium placeholder-slate-400 hover:bg-white"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-slate-700 uppercase tracking-widest">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#032B93]/50 focus:border-[#032B93] outline-none transition-all duration-200 text-slate-900 font-medium placeholder-slate-400 hover:bg-white"
                          placeholder="Your Company"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-slate-700 uppercase tracking-widest">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#032B93]/50 focus:border-[#032B93] outline-none transition-all duration-200 text-slate-900 font-medium placeholder-slate-400 hover:bg-white"
                          placeholder="+1 (844) 225-2435"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700 uppercase tracking-widest">
                        Subject *
                      </label>
                      <div className="relative">
                        <select
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#032B93]/50 focus:border-[#032B93] outline-none transition-all duration-200 text-slate-900 font-medium hover:bg-white appearance-none cursor-pointer"
                        >
                          {departments.map((dept) => (
                            <option key={dept.value} value={dept.value}>
                              {dept.label}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                          <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700 uppercase tracking-widest">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#032B93]/50 focus:border-[#032B93] outline-none transition-all duration-200 text-slate-900 font-medium placeholder-slate-400 resize-none hover:bg-white"
                        placeholder="Tell us about your telecom needs, current challenges, or any questions you have..."
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full btn btn-primary py-4 px-6 rounded-xl font-bold shadow-[0_8px_20px_rgba(3,43,147,0.25)] hover:shadow-[0_12px_25px_rgba(3,43,147,0.35)] hover:-translate-y-1 transition-all"
                      >
                        Send Message
                      </button>
                    </div>

                    <p className="text-xs text-slate-500 text-center font-medium mt-6">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </div>
              </div>
            </div>

            {/* Office Information */}
            <div className="space-y-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
              {/* Office Card */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-[0_20px_40px_rgba(3,43,147,0.08)]">
                <div className="mb-8 border-b border-slate-100 pb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shadow-sm border border-emerald-100">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">Global Headquarters</h3>
                      <p className="text-slate-600 font-medium">Visit us in person</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-3">Main Office</h4>
                    <p className="text-slate-900 font-medium leading-relaxed">
                      38 Keppel Cir<br />
                      Brampton, ON L7A 0B6<br />
                      Canada
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-3">Business Hours</h4>
                    <div className="space-y-2 text-slate-900 font-medium">
                      <p className="flex justify-between"><span>Mon - Fri</span> <span>8:00 AM - 6:00 PM EST</span></p>
                      <p className="flex justify-between"><span>Saturday</span> <span>9:00 AM - 2:00 PM EST</span></p>
                      <p className="flex justify-between text-slate-500"><span>Sunday</span> <span>Closed</span></p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-3">Quick Contact</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-200">
                          <svg className="w-5 h-5 text-[#032B93]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <span className="text-slate-900 font-bold">+1 (844) 225-2435</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-200">
                          <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-slate-900 font-bold">hello@balatrix.com</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button className="w-full btn btn-secondary py-4 px-4 rounded-xl font-bold flex items-center justify-center space-x-2">
                      <span>Get Directions</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Additional Info Card */}
              <div className="bg-[#032B93] rounded-3xl p-8 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -z-0 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="relative z-10 text-center space-y-4">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto text-white backdrop-blur-sm border border-white/20">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold">Enterprise Support</h4>
                  <p className="text-blue-100 font-medium leading-relaxed">
                    Priority support for enterprise customers with dedicated account management
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="text-sm font-bold text-[#032B93] tracking-widest uppercase mb-4">
              SUPPORT
            </div>

            <h2 className="heading-section text-slate-900">
              Frequently Asked Questions
            </h2>

            <p className="subheading max-w-2xl mx-auto">
              Find instant answers to the most common questions about our services and support.
            </p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:bg-white hover:border-slate-300 hover:shadow-[0_8px_30px_rgba(3,43,147,0.06)] transition-all duration-300 group"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#032B93]/5 text-[#032B93] rounded-xl flex items-center justify-center group-hover:bg-[#032B93] group-hover:text-white transition-colors duration-300 font-bold text-xl">
                    ?
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#032B93] transition-colors">
                      {faq.question}
                    </h3>
                    <p className="text-slate-600 font-medium leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-200 px-6 py-3 rounded-full text-slate-700 font-bold hover:bg-slate-100 transition-colors cursor-pointer" onClick={scrollToContactForm}>
              <span>Still have questions? Let's talk</span>
              <svg className="w-5 h-5 text-[#032B93]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;