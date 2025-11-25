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
              <div className="text-sm font-medium text-gray-500 opacity-0 animate-fade-in-up" style={{ fontFamily: 'Inter, sans-serif', animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                Our Story 📖
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
                Making Business<br />Communication<br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Affordable</span>
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
                For over 15 years, we've been the trusted partner for businesses of all sizes 
                seeking affordable, reliable toll-free numbers for US & Canada. Our mission is simple: 
                make business communication effortless and affordable.
              </p>

              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-200 hover:transform hover:-translate-y-0.5 hover:shadow-xl text-sm sm:text-base touch-manipulation"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Get Your Numbers
                </button>
                <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-200 hover:transform hover:-translate-y-px text-sm sm:text-base touch-manipulation"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Our Story
                </button>
              </div>

              {/* Trust indicators */}
              <div className="pt-6 sm:pt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm font-medium text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-gray-800">15+</span>
                    <span>Years Experience</span>
                  </div>
                  <div className="w-px h-3 sm:h-4 bg-gray-300" />
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-gray-800">5K+</span>
                    <span>Happy Customers</span>
                  </div>
                  <div className="w-px h-3 sm:h-4 bg-gray-300" />
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-gray-800">99.9%</span>
                    <span>Uptime</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="hidden lg:block opacity-0 animate-fade-in-right" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
              <div className="relative h-80 xl:h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl xl:text-6xl font-bold text-blue-600 mb-2">2015</div>
                  <div className="text-base xl:text-lg text-gray-900 font-semibold mb-4">Founded in Mumbai</div>
                  <div className="text-sm xl:text-base text-gray-600 max-w-xs">
                    With a vision to transform business telecommunications through 
                    affordability, reliability, and exceptional customer service.
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile Visual Element */}
            <div className="lg:hidden mt-6 sm:mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>
              <div className="flex justify-center">
                <div className="text-center bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm w-full max-w-xs mx-4">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">2015</div>
                  <div className="text-sm font-semibold text-gray-900 mb-1 sm:mb-2">Founded</div>
                  <div className="text-xs text-gray-600">
                    15+ years of telecommunications excellence
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 sm:mb-3">{stat.number}</div>
                  <div className="text-gray-600 font-medium text-sm sm:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Balatrix was born from a simple observation: getting toll-free numbers 
                  was unnecessarily complex and expensive. In 2015, our founders recognized 
                  that businesses needed a partner who could deliver affordable toll-free 
                  communication solutions with the same reliability they expected from other services.
                </p>
                 <p>
                  Balatrix is registered as A2 Cloud Solutions, through ROC MUMBAI.
                  Balatrix is a Registered Trademark Owned by A2 Cloud Solutions.
                </p>
                <p>
                  What started as a mission to simplify toll-free number provisioning has evolved into 
                  a comprehensive business communication platform serving over 50,000 businesses 
                  across US & Canada. Our commitment to affordability, reliability, and customer 
                  success has made us the go-to choice for companies seeking cost-effective communication.
                </p>
                <p>
                  Today, we're proud to maintain a 99.9% uptime guarantee while keeping our prices 
                  affordable for businesses of all sizes. Our team works around the clock to ensure 
                  your toll-free numbers are always reliable, always affordable, and always ready for growth.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-600 mb-2">2015</div>
                <div className="text-lg text-gray-900 font-semibold mb-4">Founded in Mumbai</div>
                <div className="text-gray-600">
                  With a vision to transform business telecommunications through 
                  reliability, innovation, and exceptional customer service.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="text-sm font-medium text-blue-600 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              OUR VALUES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              These principles guide everything we do and shape how we serve our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones that shaped Balatrix into the industry leader it is today
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">
                    {milestone.description}
                  </p>
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