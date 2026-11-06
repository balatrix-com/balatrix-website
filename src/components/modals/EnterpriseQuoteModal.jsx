import React, { useState, useEffect } from 'react';

const EnterpriseQuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    jobTitle: '',
    numberOfEmployees: '',
    monthlyVolume: '',
    useCase: '',
    timeline: '',
    additionalRequirements: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      // Pre-fill useCase from URL query parameters if present
      const params = new URLSearchParams(window.location.search);
      const quoteType = params.get('quote');
      if (quoteType === 'reseller') {
        setFormData(prev => ({ ...prev, useCase: 'whitelabel' }));
      } else if (quoteType === 'tollfree') {
        setFormData(prev => ({ ...prev, useCase: 'tollfree' }));
      } else if (quoteType === 'consultation') {
        setFormData(prev => ({ ...prev, useCase: 'callcenter' }));
      }
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Enterprise Quote Request:', formData);
      // Sync lead details to Zoho SalesIQ if it is loaded in the browser
      if (window.$zoho && window.$zoho.salesiq) {
        try {
          window.$zoho.salesiq.visitor.name(formData.firstName + ' ' + formData.lastName);
          window.$zoho.salesiq.visitor.email(formData.email);
          window.$zoho.salesiq.visitor.contactnumber(formData.phone);

          const notes = `Quote Form Submission. Company: ${formData.company}, Job Title: ${formData.jobTitle || 'N/A'}, Employees: ${formData.numberOfEmployees || 'N/A'}, Vol: ${formData.monthlyVolume || 'N/A'}, Use Case: ${formData.useCase}, Notes: ${formData.additionalRequirements || 'None'}`;
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
          jobTitle: '',
          numberOfEmployees: '',
          monthlyVolume: '',
          useCase: '',
          timeline: '',
          additionalRequirements: ''
        });
        setSubmitStatus(null);
        onClose();
      }, 2000);

    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop with Blur */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal - Rebuilt Split Screen Inspired by HIVE Popup */}
      <div className="relative bg-[#080b16] border border-white/10 rounded-3xl shadow-2xl w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col md:flex-row transform transition-all duration-300 scale-100 z-10">

        {/* Left Side: Glowing Emblem Card */}
        <div className="md:w-2/5 bg-gradient-to-br from-[#032B93] via-[#011954] to-slate-950 p-8 flex flex-col justify-between relative overflow-hidden shrink-0">
          {/* Subtle background nodes pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] z-0"></div>

          {/* Central Glow Orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

          {/* Close button for Mobile (visible inside left card) */}
          <button
            onClick={onClose}
            className="md:hidden absolute top-4 right-4 text-gray-400 hover:text-white p-1 bg-white/5 border border-white/10 rounded-lg"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Heading Content */}
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center space-x-1.5 bg-blue-500/15 border border-blue-400/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              <span>Reseller & Enterprise</span>
            </div>

            <h2 className="text-3xl font-extrabold text-white leading-tight">
              Stop Guessing.<br />Start <em>Calling.</em>
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Book a live consultation today to learn how Balatrix can automate your business communications, set up toll-free trunks, or deploy a reseller portal.
            </p>
          </div>

          {/* Central Rotating Low-Poly Emblem (Balatrix Brand Style) */}
          <div className="my-8 md:my-0 flex items-center justify-center relative z-10 h-44">
            <div className="w-32 h-32 animate-float-poly">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Stylized circular communication links */}
                <circle cx="50" cy="50" r="40" stroke="url(#modalGlow)" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3" />
                <circle cx="50" cy="50" r="30" stroke="url(#modalGlow)" strokeWidth="2" />
                <circle cx="50" cy="50" r="10" fill="url(#modalGlow)" />
                {/* Node connection lines */}
                <line x1="50" y1="10" x2="50" y2="90" stroke="url(#modalGlow)" strokeWidth="1.5" />
                <line x1="10" y1="50" x2="90" y2="50" stroke="url(#modalGlow)" strokeWidth="1.5" />
                <circle cx="50" cy="10" r="5" fill="#60a5fa" />
                <circle cx="50" cy="90" r="5" fill="#60a5fa" />
                <circle cx="10" cy="50" r="5" fill="#06b6d4" />
                <circle cx="90" cy="50" r="5" fill="#06b6d4" />
                <defs>
                  <linearGradient id="modalGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="50%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Quick Stats list */}
          <div className="relative z-10 space-y-3">
            <div className="flex items-center space-x-3 text-xs text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
              <span>99.99% Carrier SLA Guarantee</span>
            </div>
            <div className="flex items-center space-x-3 text-xs text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
              <span>Custom Brand PBX Deployments</span>
            </div>
          </div>
        </div>

        {/* Right Side: Re-styled dark input form */}
        <div className="md:w-3/5 p-8 overflow-y-auto flex flex-col justify-between">
          {/* Close button for Desktop */}
          <button
            onClick={onClose}
            className="hidden md:block absolute top-6 right-6 text-gray-400 hover:text-white p-1 hover:bg-white/5 border border-transparent hover:border-white/10 rounded-lg transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-1">Get Your Consultation</h3>
              <p className="text-xs text-gray-400">Fill in the fields below to get custom trunk pricing or setup a reseller panel demo.</p>
            </div>

            {submitStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.2)] animate-bounce">
                  <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white">Consultation Requested!</h4>
                <p className="text-sm text-gray-400 max-w-sm">We've received your request. An expert will reach out to you within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-400">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Michael"
                      className="w-full bg-slate-950/40 border border-white/5 text-white placeholder-gray-600 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-400">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Chen"
                      className="w-full bg-slate-950/40 border border-white/5 text-white placeholder-gray-600 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-400">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="ceo@company.com"
                      className="w-full bg-slate-950/40 border border-white/5 text-white placeholder-gray-600 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-400">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 019-2435"
                      className="w-full bg-slate-950/40 border border-white/5 text-white placeholder-gray-600 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-400">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Enterprise Corp"
                      className="w-full bg-slate-950/40 border border-white/5 text-white placeholder-gray-600 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-400">Monthly Volume (Mins)</label>
                    <select
                      name="monthlyVolume"
                      value={formData.monthlyVolume}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950/40 border border-white/5 text-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25"
                    >
                      <option value="" className="bg-[#080b16]">Select volume...</option>
                      <option value="under_10k" className="bg-[#080b16]">Under 10K / month</option>
                      <option value="10k_50k" className="bg-[#080b16]">10K - 50K / month</option>
                      <option value="50k_200k" className="bg-[#080b16]">50K - 200K / month</option>
                      <option value="over_200k" className="bg-[#080b16]">Over 200K / month</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-400">Primary Use Case</label>
                  <select
                    name="useCase"
                    required
                    value={formData.useCase}
                    onChange={handleInputChange}
                    className="w-full bg-slate-950/40 border border-white/5 text-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25"
                  >
                    <option value="" className="bg-[#080b16]">Select primary need...</option>
                    <option value="whitelabel" className="bg-[#080b16]">Whitelabel Reseller PBX System</option>
                    <option value="tollfree" className="bg-[#080b16]">Enterprise Toll-Free Calling</option>
                    <option value="callcenter" className="bg-[#080b16]">Call Center Dialing / QA</option>
                    <option value="migration" className="bg-[#080b16]">Migrate from legacy carrier</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-400">Additional Specifications</label>
                  <textarea
                    name="additionalRequirements"
                    rows="3"
                    value={formData.additionalRequirements}
                    onChange={handleInputChange}
                    placeholder="E.g., custom API requirements, local prefix preferences, white-label reseller branding questions..."
                    className="w-full bg-slate-950/40 border border-white/5 text-white placeholder-gray-600 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full py-4 text-center text-sm disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting Request...' : 'Book Free Consultation'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default EnterpriseQuoteModal;