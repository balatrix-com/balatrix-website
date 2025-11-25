import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    requirements: ''
  });

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      title: "Sales & Support",
      subtitle: "Talk to our toll-free experts",
      contact: "+1 (844) 225-2435",
      description: "Get instant quotes and setup assistance",
      action: "Call Now",
      gradient: "from-blue-500 to-cyan-500"
    },
  
  ];
  return (
    <section ref={sectionRef} className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
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
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-cyan-500/5 to-transparent blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Premium Section Header */}
        

        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Premium Contact Form */}
          <div className="lg:col-span-2 fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-12 hover:bg-white/10 transition-all duration-500">
              {/* Form Header */}
              <div className="mb-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Get Your Toll-Free Numbers</h3>
                    <p className="text-gray-400">Quick setup for US & Canada toll-free numbers</p>
                  </div>
                </div>
              </div>

              {/* Premium Form */}
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">First Name *</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Last Name *</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Company *</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your Company Name"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Business Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                      placeholder="+1 (844) 225-2435"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Project Requirements *</label>
                  <textarea 
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your telecom needs, volume requirements, timeline, and any specific compliance or technical requirements..."
                  />
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center space-x-6 pt-4 border-t border-white/10">
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>SOC 2 Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span>Professional Grade Security</span>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl shadow-cyan-500/25 flex items-center justify-center space-x-3"
                >
                  <span>Get Your Quote</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className="relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${method.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={method.icon} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {method.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {method.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="font-mono text-cyan-400 font-semibold">
                      {method.contact}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {method.description}
                    </p>
                  </div>

                  <button className={`w-full bg-gradient-to-r ${method.gradient} text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 hover:scale-[1.02] text-sm`}>
                    {method.action}
                  </button>
                </div>

                {/* Card Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${method.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default ContactCTA;