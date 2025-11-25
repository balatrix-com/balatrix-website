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
              <div className="text-sm font-medium text-gray-500 opacity-0 animate-fade-in-up" style={{ fontFamily: 'Inter, sans-serif', animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                Contact Us �
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
                Get In<br />Touch With<br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Team</span>
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
                Ready to transform your telecommunications infrastructure? Our team of experts 
                is here to help you find the perfect solution for your business needs.
              </p>

              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-200 hover:transform hover:-translate-y-0.5 hover:shadow-xl text-sm sm:text-base"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Talk to Sales
                </button>
                <button 
                  onClick={scrollToContactForm}
                  className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-200 hover:transform hover:-translate-y-px text-sm sm:text-base"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Schedule Demo
                </button>
              </div>

              {/* Trust indicators */}
              <div className="pt-6 sm:pt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm font-medium text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-gray-800">50K+</span>
                    <span>Numbers Delivered</span>
                  </div>
                  <div className="w-px h-3 sm:h-4 bg-gray-300" />
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-gray-800">24/7</span>
                    <span>Support</span>
                  </div>
                  <div className="w-px h-3 sm:h-4 bg-gray-300" />
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-gray-800">&lt; 24h</span>
                    <span>Setup Time</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Visual Element */}
            <div className="lg:hidden mt-6 sm:mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-gray-200 shadow-sm text-center">
                  <div className="text-2xl sm:text-3xl mb-2">📞</div>
                  <div className="text-sm sm:text-base font-bold text-gray-900 mb-1">Sales & Support</div>
                  <div className="text-xs text-gray-600">Talk to experts</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-gray-200 shadow-sm text-center">
                  <div className="text-2xl sm:text-3xl mb-2">💬</div>
                  <div className="text-sm sm:text-base font-bold text-gray-900 mb-1">Live Chat</div>
                  <div className="text-xs text-gray-600">Instant help</div>
                </div>
              </div>
            </div>

            {/* Visual Element - Desktop */}
            <div className="hidden lg:block opacity-0 animate-fade-in-right" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
              <div className="relative h-80 xl:h-96 flex items-center justify-center">
                <div className="text-center space-y-4 lg:space-y-6">
                  <div className="text-5xl xl:text-6xl mb-4">📞</div>
                  <div className="text-2xl xl:text-3xl font-bold text-gray-900 mb-2">Get In Touch</div>
                  <div className="text-sm xl:text-base text-gray-600 max-w-xs">
                    Multiple ways to connect with our expert support team
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
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
      <section ref={sectionRef} className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Premium Background System */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 via-white to-gray-50/40"></div>
        
        {/* Subtle Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Radial Gradients for Depth */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-blue-100/30 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-purple-100/20 to-transparent blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Premium Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-4 sm:space-y-6 fade-in-up">
            <div className="inline-flex items-center space-x-2 text-xs sm:text-sm font-medium text-gray-600 bg-gray-100/60 px-3 sm:px-4 py-2 rounded-full border border-gray-200/60">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span>Contact Options</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] max-w-4xl mx-auto px-4">
              Choose Your Preferred
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Contact Method</span>
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Get the support you need, when you need it. Multiple ways to connect with our expert team.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <div 
                key={index} 
                className="group relative bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-3xl p-8 hover:shadow-2xl hover:shadow-gray-900/10 transition-all duration-500 hover:transform hover:-translate-y-3 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={method.icon} />
                    </svg>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                    {method.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-base leading-relaxed">
                    {method.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center text-gray-900 font-semibold text-lg">
                      {method.contact}
                    </div>
                    
                    <div className="text-sm text-gray-500">
                      {method.subtext}
                    </div>

                    <button className={`inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${method.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105 mt-4`}>
                      <span>{method.action}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            ))}
          </div>

          {/* Contact Form and Office Info */}
          <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Premium Contact Form */}
            <div className="lg:col-span-2 fade-in-up">
              <div className="relative bg-white/80 backdrop-blur-md border border-gray-200/60 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-gray-900/10 hover:shadow-gray-900/20 transition-all duration-500">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Form Header */}
                  <div className="mb-8 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Send Us a Message</h3>
                        <p className="text-gray-600">We'll get back to you within 2 hours</p>
                      </div>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-900">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 bg-white/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base placeholder-gray-400 hover:bg-white/90"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-900">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 bg-white/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base placeholder-gray-400 hover:bg-white/90"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-900">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base placeholder-gray-400 hover:bg-white/90"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-900">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 bg-white/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base placeholder-gray-400 hover:bg-white/90"
                          placeholder="Your Company"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-900">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 bg-white/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base placeholder-gray-400 hover:bg-white/90"
                          placeholder="+1 (844) 225-2435"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-900">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base"
                      >
                        {departments.map((dept) => (
                          <option key={dept.value} value={dept.value}>
                            {dept.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-900">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none text-base placeholder-gray-400 hover:bg-white/90"
                        placeholder="Tell us about your telecom needs, current challenges, or any questions you have..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 px-6 rounded-xl font-semibold hover:from-gray-800 hover:to-gray-700 transition-all duration-300 text-base hover:transform hover:-translate-y-0.5 hover:shadow-xl"
                    >
                      Send Message
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </div>
              </div>
            </div>

            {/* Office Information */}
            <div className="space-y-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
              {/* Office Card */}
              <div className="bg-white/80 backdrop-blur-md border border-gray-200/60 rounded-3xl p-8 shadow-2xl shadow-gray-900/10 hover:shadow-gray-900/20 transition-all duration-500">
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Global Headquarters</h3>
                      <p className="text-gray-600">Visit us in person</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Main Office</h4>
                    <p className="text-gray-600 leading-relaxed">
                      38 Keppel Cir<br />
                      Brampton, ON L7A 0B6<br />
                      Canada
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
                    <div className="space-y-1 text-gray-600">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM EST</p>
                      <p>Saturday: 9:00 AM - 2:00 PM EST</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Quick Contact</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <span className="text-gray-700">+1 (844) 225-2435</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-gray-700">hello@balatrix.com</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 px-4 rounded-xl font-medium hover:from-emerald-600 hover:to-green-700 transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:shadow-lg">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>

              {/* Additional Info Card */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200/50 rounded-2xl p-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Enterprise Support</h4>
                  <p className="text-sm text-gray-600">
                    Priority support for enterprise customers with dedicated account management
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Premium Dark Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900"></div>
        
        {/* Sophisticated Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Premium Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-blue-600/15 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-purple-600/10 to-transparent blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 space-y-4 fade-in-up">
            <div className="inline-flex items-center space-x-2 text-xs sm:text-sm font-medium text-gray-400 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span>Frequently Asked Questions</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] max-w-3xl mx-auto">
              Quick Answers to
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Common Questions</span>
            </h2>
            
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Find instant answers to the most common questions about our services and support.
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 transition-all duration-500 fade-in-up hover:transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-3 text-lg leading-tight">
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-12 fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-white mb-2">
                Still have questions?
              </h3>
              <p className="text-gray-300 mb-6">
                Our expert support team is here to help you find the perfect solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:shadow-xl">
                  Contact Support
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;