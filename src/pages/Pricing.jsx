import React, { useState } from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  // Scroll to pricing plans function
  const scrollToPricingPlans = () => {
    const pricingPlans = document.getElementById('pricing-plans');
    if (pricingPlans) {
      pricingPlans.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const pricingTiers = [
    {
      name: 'Starter Plan',
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 39.99,
      yearlyPrice: 383.90, // 20% discount: 39.99 * 12 * 0.8
      savings: '20%',
      features: [
        'Free Built-in WebRTC Softphone',
        '1 Toll-Free Number & 1 Extension',
        'Visual Call Routing & Basic IVR',
        'Real-Time Analytics Dashboard',
        'Automated Billing & Digital Wallet',
        'Additional Minutes: USD 0.015 per minute'
      ],
      limitations: [],
      popular: false,
      color: 'gray'
    },
    {
      name: 'Pro Plan',
      description: 'Ideal for growing businesses with higher volume needs',
      monthlyPrice: 79.99,
      yearlyPrice: 767.90, // 20% discount: 79.99 * 12 * 0.8
      savings: '20%',
      features: [
        'Free Built-in WebRTC Softphone',
        '2 Toll-Free Numbers & 5 Extensions',
        'Advanced Routing & Ring Groups',
        'Real-Time Analytics & CDR Logs',
        'Team Collaboration Features',
        'Additional Minutes: USD 0.014 per minute'
      ],
      limitations: [],
      popular: true,
      color: 'blue'
    },
    {
      name: 'Enterprise Plan',
      description: 'For call centers and large organizations requiring scale',
      monthlyPrice: 149.99,
      yearlyPrice: 1439.90, // 20% discount: 149.99 * 12 * 0.8
      savings: '20%',
      features: [
        'Free Built-in WebRTC Softphone',
        '5+ Toll-Free Numbers & Unlimited Exts',
        'Enterprise-Grade Call Routing',
        'Complete Analytics & QA Metrics',
        'Advanced Queue & Agent Management',
        'Full RBAC, Audit Logs & Multi-Tenancy',
        'Additional Minutes: USD 0.013 per minute'
      ],
      limitations: [],
      popular: false,
      color: 'indigo'
    }
  ];

  const addOns = [
    {
      name: 'Additional TFN',
      description: 'Extra toll-free numbers beyond your plan limit',
      payAsYouGoPrice: '5.00',
      oneTimePrice: '5.00',
      unit: 'per month'
    },
    {
      name: 'Additional Extension',
      description: 'Extra extensions beyond your plan limit',
      payAsYouGoPrice: '5.00',
      oneTimePrice: '3.00',
      unit: 'per month'
    },
    {
      name: 'Per Minute Charge',
      description: 'Additional calling minutes when you exceed your plan',
      payAsYouGoPrice: '0.015',
      oneTimePrice: '—',
      unit: 'per minute'
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Please contact support, and billing is updated accordingly.'
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'Overage charges apply at standard rates. We\'ll notify you before you reach your limits and can automatically upgrade your plan or add Credits if needed.'
    },
    {
      question: 'Do you offer custom enterprise pricing?',
      answer: 'Yes, for organizations requiring custom solutions, we offer tailored enterprise pricing. Contact our sales team for a quote.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for any of our standard plans. Custom integrations and enterprise deployments may have one-time setup costs.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, ACH transfers, and wire transfers. Enterprise clients can also arrange for net payment terms.'
    },
    {
      question: 'Can I port my existing numbers?',
      answer: 'Yes, number porting is included in all plans. Our team handles the entire process to ensure minimal downtime.'
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
          <div className="absolute top-10 sm:top-20 right-4 sm:right-20 w-16 sm:w-32 h-16 sm:h-32 border border-gray-200 rounded-lg transform rotate-12 opacity-30 animate-float" />
          <div className="absolute bottom-16 sm:bottom-32 left-8 sm:left-40 w-12 sm:w-20 h-12 sm:h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-40 animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-20 sm:top-40 left-4 sm:left-20 w-8 sm:w-16 h-8 sm:h-16 border-2 border-blue-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-24 xl:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Content Section */}
            <div className="space-y-6 sm:space-y-8 w-full overflow-hidden">
              {/* Small intro */}
              <div className="text-sm font-bold text-[#032B93] tracking-widest uppercase mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                Pricing Plans
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight opacity-0 animate-fade-in-up break-words" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                Simple,<br />Transparent<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#032B93] to-blue-500">Pricing</span>
              </h1>

              {/* Supporting subtext */}
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-full lg:max-w-xl opacity-0 animate-fade-in-up break-words" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                Choose the perfect plan for your business. All plans include our core features
                Designed for businesses that want performance without telecom headaches,
                24x7 Free Support.
              </p>

              {/* Billing Toggle */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 p-2 rounded-2xl w-fit">
                  <span className={`text-sm font-bold px-4 py-2 rounded-xl transition-all cursor-pointer ${billingCycle === 'monthly' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'}`} onClick={() => setBillingCycle('monthly')}>
                    Monthly
                  </span>
                  <span className={`text-sm font-bold px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${billingCycle === 'yearly' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'}`} onClick={() => setBillingCycle('yearly')}>
                    Annual
                    <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider">Save 20%</span>
                  </span>
                </div>
              </div>

              {/* Quarterly Payment Option */}
              <div className="bg-[#032B93]/5 border border-[#032B93]/10 rounded-2xl p-4 w-fit opacity-0 animate-fade-in-up" style={{ animationDelay: '0.65s', animationFillMode: 'forwards' }}>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#032B93] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Quarterly Payment Option</h4>
                    <p className="text-sm text-slate-500 font-medium">Pay quarterly and skip one-time setup charges</p>
                  </div>
                </div>
              </div>

              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                <Link to="/contact#contact-form" className="btn btn-primary text-lg px-8 py-4 w-full sm:w-auto shadow-[0_8px_20px_rgba(3,43,147,0.25)] hover:shadow-[0_12px_25px_rgba(3,43,147,0.35)]">
                  Start Free Trial
                </Link>
                <button onClick={scrollToPricingPlans} className="btn btn-secondary text-lg px-8 py-4 w-full sm:w-auto font-semibold">
                  Compare Plans
                </button>
              </div>

              {/* Trust indicators */}
              <div className="pt-8 border-t border-slate-200/60 mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
                <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-slate-800">USD 39.99</span>
                    <span>Starting Price</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-slate-800">No</span>
                    <span>Setup Fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-slate-800">Cancel</span>
                    <span>Anytime</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="hidden lg:block opacity-0 animate-fade-in-right" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
              <div className="relative h-80 xl:h-96 flex items-center justify-center">
                <div className="bg-white rounded-3xl p-12 shadow-[0_20px_50px_rgba(3,43,147,0.12)] border border-slate-200/60 max-w-sm w-full text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#032B93]/5 rounded-bl-full -z-10"></div>
                  <div className="text-6xl font-extrabold text-[#032B93] mb-4">USD 39.99</div>
                  <div className="text-lg text-slate-900 font-bold mb-3">Starting from</div>
                  <div className="text-sm text-slate-500 mb-8 font-medium">
                    Professional toll-free numbers with all essential features included
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-slate-600 font-bold bg-slate-50 py-3 rounded-xl border border-slate-100">
                    <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>No hidden fees</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Visual Element */}
            <div className="lg:hidden mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-[0_10px_30px_rgba(3,43,147,0.1)] text-center">
                <div className="text-5xl font-extrabold text-[#032B93] mb-3">USD 39.99</div>
                <div className="text-base text-slate-900 font-bold mb-3">Starting from</div>
                <div className="text-sm text-slate-500 mb-6 font-medium">
                  Professional toll-free numbers with all essential features included
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-slate-600 font-bold bg-slate-50 py-3 rounded-xl border border-slate-100">
                  <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>No hidden fees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing-plans" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-bold text-[#032B93] tracking-widest uppercase mb-4">
              CHOOSE YOUR PLAN
            </div>
            <h2 className="heading-section text-slate-900 mb-6">
              Find the Perfect Plan
            </h2>
            <p className="subheading max-w-2xl mx-auto">
              All plans include our core features with 99.9% uptime guarantee
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full ${tier.popular
                  ? 'border-[#032B93] shadow-[0_20px_40px_rgba(3,43,147,0.12)] ring-4 ring-[#032B93]/5'
                  : 'border-slate-200 shadow-md hover:shadow-xl hover:border-slate-300'
                  }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-[#032B93] text-white px-6 py-1.5 rounded-full text-xs font-bold shadow-md tracking-wider uppercase">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8 relative">
                  {tier.popular && <div className="absolute -inset-4 bg-gradient-to-b from-[#032B93]/5 to-transparent rounded-2xl -z-10"></div>}
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{tier.name}</h3>
                  <p className="text-slate-500 mb-8 font-medium h-12 leading-relaxed">{tier.description}</p>

                  <div className="mb-6 flex flex-col items-center justify-center min-h-[96px]">
                    {typeof tier.monthlyPrice === 'string' ? (
                      <div>
                        <span className="text-4xl font-extrabold text-slate-900">
                          {tier.monthlyPrice}
                        </span>
                        <div className="text-sm font-medium text-slate-500 mt-2">{tier.savings}</div>
                      </div>
                    ) : (
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-black text-[#032B93]">
                          USD {(billingCycle === 'monthly' ? tier.monthlyPrice : (tier.yearlyPrice / 12)).toFixed(2)}
                        </span>
                        <span className="text-slate-500 ml-2 text-lg font-medium">
                          /{billingCycle === 'monthly' ? 'month' : 'month'}
                        </span>
                      </div>
                    )}
                  </div>

                  {billingCycle === 'yearly' && typeof tier.monthlyPrice !== 'string' && (
                    <div className="text-xs tracking-wide uppercase bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full inline-block font-bold border border-emerald-100">
                      Save {tier.savings} with annual billing
                    </div>
                  )}

                  {billingCycle === 'monthly' && typeof tier.monthlyPrice !== 'string' && (
                    <div className="h-7"></div>
                  )}
                </div>

                <div className="mb-8 flex-grow">
                  <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Everything included:</h4>
                  <ul className="space-y-4">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm font-medium text-slate-700">
                        <div className="w-5 h-5 bg-[#032B93]/10 text-[#032B93] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  {tier.name === 'Enterprise Plan' ? (
                    <Link
                      to="/contact#contact-form"
                      className="w-full py-4 px-6 rounded-xl font-bold transition-all bg-slate-100 text-slate-900 hover:bg-slate-200 inline-block text-center border border-slate-200"
                    >
                      Contact Sales
                    </Link>
                  ) : (
                    <Link
                      to="/contact#contact-form"
                      className={`w-full py-4 px-6 rounded-xl font-bold transition-all inline-block text-center ${tier.popular
                        ? 'bg-[#032B93] text-white hover:bg-blue-800 shadow-[0_8px_20px_rgba(3,43,147,0.25)] hover:shadow-[0_12px_25px_rgba(3,43,147,0.35)]'
                        : 'bg-white text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-sm'
                        }`}
                    >
                      Start Free Trial
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Plan Banner */}
      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">👉</span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Need something specific?
                </h3>
              </div>
              <p className="text-slate-600 font-medium text-lg leading-relaxed max-w-3xl">
                We offer fully customizable plans tailored to your business needs. 
                From small teams to large call centers — we build plans that match your exact requirements.
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto">
              <Link to="/contact#contact-form" className="inline-block w-full sm:w-auto text-center bg-white text-slate-900 font-bold text-base px-8 py-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                Talk to us for a tailored solution
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-bold text-[#032B93] tracking-widest uppercase mb-4">
              ENHANCE YOUR PLAN
            </div>
            <h2 className="heading-section text-slate-900 mb-6">
              Pay as you Go Plans
            </h2>
            <p className="subheading max-w-2xl mx-auto">
              Extend your plan with additional services tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#032B93]/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                <div className="w-12 h-12 bg-[#032B93] rounded-xl flex items-center justify-center mb-6 shadow-md shadow-[#032B93]/20">
                  <span className="text-white font-bold text-2xl">+</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{addon.name}</h3>
                <p className="text-slate-500 mb-8 font-medium h-12 leading-relaxed">{addon.description}</p>
                <div className="space-y-6">
                  <div className="border-b border-slate-100 pb-6 flex items-end justify-between">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Pay As You Go</div>
                      <div className="text-3xl font-extrabold text-slate-900">USD {addon.payAsYouGoPrice}</div>
                    </div>
                    <div className="text-sm font-medium text-slate-500 pb-1">{addon.unit}</div>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">One-Time Charge</div>
                      <div className="text-xl font-bold text-slate-700">
                        {addon.oneTimePrice === '—' ? '—' : `USD ${addon.oneTimePrice}`}
                      </div>
                    </div>
                    {addon.oneTimePrice !== '—' && (
                      <div className="text-xs font-medium text-slate-400 pb-1">setup fee</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="subheading">
              Everything you need to know about our pricing and plans
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Pricing;