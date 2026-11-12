import React from 'react';
import SEO from '../components/seo/SEO';

const Terms = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <SEO
        title="Terms of Service"
        description="Read the Balatrix Terms of Service to understand the rules, guidelines, and terms that govern your use of our platform."
        canonicalUrl="https://balatrix.com/terms"
      />
      {/* Hero Section */}
      <section className="min-h-[45vh] bg-transparent flex items-center justify-center overflow-hidden relative border-b border-white/5 pt-20">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="telecom-grid opacity-[0.2]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Please read these Terms carefully before using our VoIP and PBX services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">

              {/* 1. Acceptance of Terms */}
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-400">
                  By accessing or using the <strong>Balatrix</strong> platform and services, operated by
                  <strong> A2 Cloud Solutions</strong>, you agree to comply with and be bound by these
                  Terms of Service and all applicable laws and regulations. If you do not agree, please discontinue
                  use of our services immediately.
                </p>
              </div>

              {/* 2. Service Description */}
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">2. Services Provided</h2>
                <p className="text-gray-400 mb-4">
                  Balatrix provides cloud-based VoIP and PBX solutions for businesses, including:
                </p>
                <ul className="list-disc pl-6 text-gray-400 space-y-2">
                  <li>Hosted PBX systems and call management software</li>
                  <li>Virtual phone numbers (DIDs) and toll-free numbers</li>
                  <li>Call routing, forwarding, IVR, and voicemail features</li>
                  <li>Customer support and account management services</li>
                </ul>
                <p className="text-gray-400 mt-4">
                  Our services are intended for lawful business communication only and must not be used for spam,
                  fraud, or any prohibited activities under applicable telecom, data protection, and IT laws.
                </p>
              </div>

              {/* 3. Account Responsibilities */}
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">3. Account Responsibilities</h2>
                <p className="text-gray-400 mb-4">By creating an account, you agree to:</p>
                <ul className="list-disc pl-6 text-gray-400 space-y-2">
                  <li>Provide accurate, complete, and up-to-date registration information.</li>
                  <li>Maintain the confidentiality of your login credentials.</li>
                  <li>Be responsible for all activities occurring under your account.</li>
                  <li>Immediately notify us of any unauthorized access or security breach.</li>
                </ul>
              </div>

              {/* 4. Payments and Billing */}
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">4. Payments and Billing</h2>
                <p className="text-gray-400 mb-4">
                  All services are prepaid. Payments must be made through our authorized payment gateways.
                  Prices, plan details, and applicable taxes (if any) are displayed before checkout.
                </p>
                <ul className="list-disc pl-6 text-gray-400 space-y-2">
                  <li>All amounts are in US Dollars ($) unless specified otherwise.</li>
                  <li>Payment processing is handled securely by third-party gateways; Balatrix does not store card, bank account, or digital wallet credentials.</li>
                  <li>Invoices and receipts are automatically generated and sent to your registered email address.</li>
                </ul>
              </div>

              {/* 5. Refunds and Cancellations */}
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">5. Refunds and Cancellations</h2>
                <p className="text-gray-400">
                  Balatrix provides a <strong>free demo account</strong> before purchase, so customers can evaluate services before making payment.
                  Once a paid account, PBX, or number is activated, <strong>no refunds</strong> will be issued.
                  Wallet recharges are non-refundable but may be transferred to another Balatrix account upon written request and approval.
                  For full details, please refer to our{' '}
                  <a href="/refund-policy" className="text-blue-400 hover:text-blue-700">
                    Refund & Cancellation Policy
                  </a>.
                </p>
              </div>

              {/* 6. Service Availability */}
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">6. Service Availability</h2>
                <p className="text-gray-400">
                  We aim to provide 99.9% uptime. However, temporary interruptions may occur due to maintenance,
                  updates, or network conditions beyond our control. Balatrix shall not be liable for any indirect
                  or consequential losses resulting from such downtime.
                </p>
              </div>

              {/* 7. Prohibited Use */}
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">7. Prohibited Use</h2>
                <p className="text-gray-400 mb-4">You agree not to use our services to:</p>
                <ul className="list-disc pl-6 text-gray-400 space-y-2">
                  <li>Engage in unsolicited calls or messages (spam).</li>
                  <li>Transmit fraudulent, obscene, or defamatory content.</li>
                  <li>Violate telecom, data privacy, or cyber laws.</li>
                  <li>Attempt to hack or misuse Balatrix systems.</li>
                </ul>
              </div>

              {/* 8. Limitation of Liability */}
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-400">
                  Balatrix and its parent company, <strong>A2 Cloud Solutions</strong>, shall not be liable for any
                  indirect, incidental, or consequential damages, including loss of profits, data, or business interruption,
                  arising from the use or inability to use our services.
                </p>
              </div>

              {/* 9. Termination */}
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">9. Termination</h2>
                <p className="text-gray-400">
                  We reserve the right to suspend or terminate accounts involved in non-payment, misuse,
                  or violation of these Terms. Upon termination, all active services and access may be revoked.
                </p>
              </div>

              {/* 10. Governing Law */}
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">10. Governing Law & Jurisdiction</h2>
                <p className="text-gray-400">
                  These Terms are governed by and construed under applicable laws in the relevant service jurisdiction.
                  Any disputes shall be subject to the exclusive jurisdiction of the competent courts in that jurisdiction.
                </p>
              </div>

              {/* 11. Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">11. Contact Information</h2>
                <p className="text-gray-400">
                  For questions about these Terms of Service, please contact us at:<br />
                  📧 <a href="mailto:legal@balatrix.com" className="text-blue-400 hover:text-blue-700">legal@balatrix.com</a><br />
                  🌐 <a href="https://www.balatrix.com" className="text-blue-400 hover:text-blue-700">www.balatrix.com</a>
                </p>
              </div>

              {/* 12. Updates to Terms */}
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">12. Updates to These Terms</h2>
                <p className="text-gray-400">
                  Balatrix may update these Terms periodically to reflect changes in business or legal requirements.
                  The latest version will always be available on our official website.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
