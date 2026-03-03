import React from 'react';

const About = () => {
  const teamMembers = [
    {
      name: 'Michael Chen',
      role: 'Chief Executive Officer',
      bio: '15+ years in telecommunications infrastructure. Former VP of Engineering at major telecom providers.',
      image: '/api/placeholder/300/300',
      linkedin: '#'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'Expert in scalable communication systems and API design. Led engineering teams at major technology companies.',
      image: '/api/placeholder/300/300',
      linkedin: '#'
    },
    {
      name: 'David Thompson',
      role: 'Chief Operations Officer',
      bio: 'Operations specialist with deep expertise in telecom regulations and compliance across global markets.',
      image: '/api/placeholder/300/300',
      linkedin: '#'
    },
    {
      name: 'Lisa Wang',
      role: 'VP of Customer Success',
      bio: 'Customer-focused leader ensuring business clients achieve maximum value from their communication investments.',
      image: '/api/placeholder/300/300',
      linkedin: '#'
    }
  ];

  const milestones = [
    {
      year: '2015',
      title: 'Company Founded',
      description: 'Started with a vision to make toll-free numbers affordable and accessible'
    },
    {
      year: '2012',
      title: 'First Major Enterprise Client',
      description: 'Secured our first major business client, validating our affordable approach'
    },
    {
      year: '2015',
      title: 'Global Expansion',
      description: 'Expanded operations to 25 countries, establishing local regulatory expertise'
    },
    {
      year: '2018',
      title: 'API Platform Launch',
      description: 'Released comprehensive API platform, enabling seamless integrations'
    },
    {
      year: '2021',
      title: '99.99% SLA Achievement',
      description: 'Achieved industry-leading uptime through infrastructure investments'
    },
    {
      year: '2024',
      title: '5K+ Happy Customers',
      description: 'Reached milestone of serving over 5,000 businesses across North America'
    }
  ];

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Affordability First',
      description: 'We believe every business deserves access to professional toll-free communication without breaking the bank.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Simple Solutions',
      description: 'We make toll-free numbers and business communication simple, fast, and hassle-free.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Customer Success',
      description: 'Your success is our success. We\'re partners in your telecommunications journey.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'US & Canada Focus',
      description: 'Deep expertise in North American telecommunications ensures optimal service and compliance.'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years of Experience' },
    { number: '50K+', label: 'Numbers Delivered' },
    { number: '2', label: 'Countries (US & Canada)' },
    { number: '99.9%', label: 'Uptime Guarantee' }
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
          <div className="absolute top-10 sm:top-20 right-5 sm:right-20 w-16 sm:w-32 h-16 sm:h-32 border border-gray-200 rounded-lg transform rotate-12 opacity-20 sm:opacity-30 animate-float" />
          <div className="absolute bottom-20 sm:bottom-32 right-10 sm:right-40 w-12 sm:w-20 h-12 sm:h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-30 sm:opacity-40 animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-20 sm:top-40 left-5 sm:left-20 w-8 sm:w-16 h-8 sm:h-16 border-2 border-gray-300 rounded-full opacity-15 sm:opacity-20 animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-24 xl:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Content Section */}
            <div className="space-y-6 sm:space-y-8 w-full overflow-hidden">
              {/* Small intro */}
              <div className="text-sm font-bold text-[#032B93] tracking-widest uppercase mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                Our Story
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight opacity-0 animate-fade-in-up break-words" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                Making Business<br />Communication<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#032B93] to-blue-500">Affordable</span>
              </h1>

              {/* Supporting subtext */}
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-full lg:max-w-xl opacity-0 animate-fade-in-up break-words" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                For over 15 years, we've been the trusted partner for businesses of all sizes
                seeking reliable toll-free numbers for US & Canada. Our mission is simple:
                make business communication effortless.
              </p>

              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                <button className="btn btn-primary text-lg px-8 py-4 w-full sm:w-auto shadow-[0_8px_20px_rgba(3,43,147,0.25)] hover:shadow-[0_12px_25px_rgba(3,43,147,0.35)]">
                  Get Your Numbers
                </button>
                <button className="btn btn-secondary text-lg px-8 py-4 w-full sm:w-auto font-semibold">
                  Contact Us
                </button>
              </div>

              {/* Trust indicators */}
              <div className="pt-8 border-t border-slate-200/60 mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
                <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-slate-800">15+</span>
                    <span>Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-slate-800">5K+</span>
                    <span>Happy Customers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-slate-800">99.9%</span>
                    <span>Uptime SLA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="hidden lg:block opacity-0 animate-fade-in-right" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
              <div className="relative h-80 xl:h-96 flex items-center justify-center">
                <div className="bg-white rounded-3xl p-12 shadow-[0_20px_50px_rgba(3,43,147,0.12)] border border-slate-200/60 max-w-sm w-full text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#032B93]/5 rounded-bl-full -z-10"></div>
                  <div className="text-6xl font-extrabold text-[#032B93] mb-4">2015</div>
                  <div className="text-lg text-slate-900 font-bold mb-3">Founded in Canada</div>
                  <div className="text-sm text-slate-500 mb-8 font-medium">
                    With a vision to transform business telecommunications through reliability and customer service.
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Visual Element */}
            <div className="lg:hidden mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>
              <div className="flex justify-center">
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-[0_10px_30px_rgba(3,43,147,0.1)] text-center w-full max-w-xs mx-4">
                  <div className="text-5xl font-extrabold text-[#032B93] mb-3">2015</div>
                  <div className="text-base text-slate-900 font-bold mb-3">Founded in Canada</div>
                  <div className="text-sm text-slate-500 font-medium">
                    15+ years of telecommunications excellence
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="relative px-4 group">
                {index !== 0 && <div className="hidden md:block absolute left-0 top-1/4 bottom-1/4 w-px bg-slate-200"></div>}
                <div className="text-4xl md:text-5xl font-black text-[#032B93] tracking-tight mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base font-semibold text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="text-sm font-bold text-[#032B93] tracking-widest uppercase mb-4">
                HOW IT STARTED
              </div>
              <h2 className="heading-section text-slate-900 mb-6 text-left">
                Our Story
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Balatrix was born from a simple observation: getting toll-free numbers
                  was unnecessarily complex and expensive. In 2015, our founders recognized
                  that businesses needed a partner who could deliver affordable toll-free
                  communication solutions with the same reliability they expected from other services.
                </p>
                <div className="p-6 bg-slate-50 border-l-4 border-[#032B93] rounded-r-2xl my-8">
                  <p className="font-medium text-slate-800 italic">
                    Balatrix is registered as A2 Cloud Solutions, proudly headquartered in Brampton, Canada.
                    Balatrix is a Registered Trademark Owned by A2 Cloud Solutions.
                  </p>
                </div>
                <p>
                  What started as a mission to simplify toll-free number provisioning has evolved into
                  a comprehensive business communication platform serving over 50,000 businesses
                  across US & Canada. Our commitment to affordability, reliability, and customer
                  success has made us the go-to choice for companies seeking cost-effective communication.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#032B93]/5 transform rotate-3 rounded-3xl"></div>
              <div className="bg-white border border-slate-200 p-10 rounded-3xl shadow-xl relative z-10 lg:aspect-square flex flex-col justify-center text-center">
                <div className="text-8xl font-black text-[#032B93] mb-4 opacity-20">❝</div>
                <div className="text-2xl font-bold text-slate-900 mb-6 leading-snug">
                  Our team works around the clock to ensure your toll-free numbers are always reliable, always affordable, and always ready for growth.
                </div>
                <div className="text-[#032B93] font-bold tracking-wider uppercase text-sm">The Founders</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-50 py-24 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="text-sm font-bold text-[#032B93] tracking-widest uppercase mb-4">
              OUR VALUES
            </div>
            <h2 className="heading-section text-slate-900 mb-6">
              Our Core Values
            </h2>
            <p className="subheading max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-white rounded-2xl shadow-sm border border-slate-200 group-hover:shadow-[0_20px_40px_rgba(3,43,147,0.12)] group-hover:border-[#032B93]/20 transition-all duration-300"></div>
                <div className="relative p-8 h-full flex flex-col">
                  <div className="w-16 h-16 bg-[#032B93]/5 text-[#032B93] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#032B93] group-hover:text-white shadow-sm border border-[#032B93]/10">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="text-sm font-bold text-[#032B93] tracking-widest uppercase mb-4">
              HISTORY
            </div>
            <h2 className="heading-section text-slate-900 mb-4">
              Our Journey
            </h2>
            <p className="subheading max-w-2xl mx-auto">
              Key milestones that shaped Balatrix into the industry leader it is today
            </p>
          </div>

          <div className="relative border-l-2 border-slate-100 ml-4 md:ml-0 space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-5 items-center group">
                  <div className="hidden md:block col-span-2 text-right pr-12">
                    <span className="text-3xl font-extrabold text-slate-300 transition-colors group-hover:text-[#032B93]">{milestone.year}</span>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-[-9px] md:left-auto md:col-start-3 md:mx-auto w-4 h-4 rounded-full bg-white border-4 border-slate-300 md:w-5 md:h-5 z-10 group-hover:border-[#032B93] transition-colors shadow-[0_0_0_4px_white]"></div>

                  <div className="md:hidden mb-2">
                    <span className="text-2xl font-extrabold text-[#032B93]">{milestone.year}</span>
                  </div>

                  <div className="md:col-span-2 md:pl-12">
                    <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl group-hover:shadow-md transition-shadow group-hover:border-slate-200 group-hover:bg-white group-hover:-translate-y-1 duration-300">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-slate-600 font-medium">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




    </div>
  );
};

export default About;