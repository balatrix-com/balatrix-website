import React from 'react';
import SEO from '../components/seo/SEO';

const Security = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <SEO
        title="Security & Compliance"
        description="Learn about our enterprise-grade security measures, compliance frameworks, and how we protect your business communications."
        canonicalUrl="https://balatrix.com/security"
      />
      {/* Hero Section */}
      <section className="min-h-[45vh] bg-transparent flex items-center justify-center overflow-hidden relative border-b border-white/5 pt-20">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="telecom-grid opacity-[0.2]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Security & Compliance
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Your data security is our top priority. Learn about our comprehensive security measures.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Data Encryption</h2>
                <p className="text-gray-400 mb-4">
                  All data transmitted through our services is protected using industry-standard encryption.
                </p>
                <ul className="list-disc pl-6 text-gray-400 space-y-2">
                  <li>TLS 1.3 encryption for all data in transit</li>
                  <li>AES-256 encryption for data at rest</li>
                  <li>End-to-end encryption for sensitive communications</li>
                  <li>Regular security audits and penetration testing</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Infrastructure Security</h2>
                <p className="text-gray-400 mb-4">
                  Our telecommunications infrastructure is built with security as a fundamental principle.
                </p>
                <ul className="list-disc pl-6 text-gray-400 space-y-2">
                  <li>SOC 2 Type II certified data centers</li>
                  <li>24/7 network monitoring and threat detection</li>
                  <li>Redundant systems for maximum availability</li>
                  <li>Physical security controls and access restrictions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Compliance Standards</h2>
                <p className="text-gray-400 mb-4">
                  We maintain compliance with industry regulations and standards.
                </p>
                <ul className="list-disc pl-6 text-gray-400 space-y-2">
                  <li>HIPAA compliance for healthcare communications</li>
                  <li>PCI DSS for payment processing</li>
                  <li>FCC regulations for telecommunications</li>
                  <li>GDPR compliance for data protection</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Incident Response</h2>
                <p className="text-gray-400">
                  We have established procedures for detecting, responding to, and recovering from
                  security incidents to minimize any potential impact on our customers.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Report Security Issues</h2>
                <p className="text-gray-400">
                  If you discover a security vulnerability, please report it immediately to{' '}
                  <a href="mailto:security@balatrix.com" className="text-blue-400 hover:text-blue-700">
                    security@balatrix.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Security;