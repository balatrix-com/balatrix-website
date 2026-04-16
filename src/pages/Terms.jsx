import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-[50vh] bg-gradient-to-br from-white via-gray-50/50 to-gray-50 flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please read these Terms carefully before using our VoIP and PBX services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">

              {/* 1. Acceptance of Terms */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600">
                  By accessing or using the <strong>Balatrix</strong> platform and services, operated by
                  <strong> A2 Cloud Solutions</strong>, you agree to comply with and be bound by these
                  Terms of Service and all applicable laws and regulations. If you do not agree, please discontinue
                  use of our services immediately.
                </p>
              </div>

              {/* 2. Service Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Provided</h2>
                <p className="text-gray-600 mb-4">
                  Balatrix provides cloud-based VoIP and PBX solutions for businesses, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Hosted PBX systems and call management software</li>
                  <li>Virtual phone numbers (DIDs) and toll-free numbers</li>
                  <li>Call routing, forwarding, IVR, and voicemail features</li>
                  <li>Customer support and account management services</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Our services are intended for lawful business communication only and must not be used for spam,
                  fraud, or any prohibited activities under applicable telecom, data protection, and IT laws.
                </p>
              </div>

              {/* 3. Account Responsibilities */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Responsibilities</h2>
                <p className="text-gray-600 mb-4">By creating an account, you agree to:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Provide accurate, complete, and up-to-date registration information.</li>
                  <li>Maintain the confidentiality of your login credentials.</li>
                  <li>Be responsible for all activities occurring under your account.</li>
                  <li>Immediately notify us of any unauthorized access or security breach.</li>
                </ul>
              </div>

              {/* 4. Payments and Billing */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payments and Billing</h2>
                <p className="text-gray-600 mb-4">
                  All services are prepaid. Payments must be made through our authorized payment gateways.
                  Prices, plan details, and applicable taxes (if any) are displayed before checkout.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>All amounts are in US Dollars (USD) unless specified otherwise.</li>
                  <li>Payment processing is handled securely by third-party gateways; Balatrix does not store card, bank account, or digital wallet credentials.</li>
                  <li>Invoices and receipts are automatically generated and sent to your registered email address.</li>
                </ul>
              </div>

              {/* 5. Refunds and Cancellations */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Refunds and Cancellations</h2>
                <p className="text-gray-600">
                  Balatrix provides a <strong>free demo account</strong> before purchase, so customers can evaluate services before making payment.
                  Once a paid account, PBX, or number is activated, <strong>no refunds</strong> will be issued.
                  Wallet recharges are non-refundable but may be transferred to another Balatrix account upon written request and approval.
                  For full details, please refer to our{' '}
                  <a href="/refund-policy" className="text-blue-600 hover:text-blue-700">
                    Refund & Cancellation Policy
                  </a>.
                </p>
              </div>

              {/* 6. Service Availability */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Service Availability</h2>
                <p className="text-gray-600">
                  We aim to provide 99.9% uptime. However, temporary interruptions may occur due to maintenance,
                  updates, or network conditions beyond our control. Balatrix shall not be liable for any indirect
                  or consequential losses resulting from such downtime.
                </p>
              </div>

              {/* 7. Prohibited Use */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Prohibited Use</h2>
                <p className="text-gray-600 mb-4">You agree not to use our services to:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Engage in unsolicited calls or messages (spam).</li>
                  <li>Transmit fraudulent, obscene, or defamatory content.</li>
                  <li>Violate telecom, data privacy, or cyber laws.</li>
                  <li>Attempt to hack or misuse Balatrix systems.</li>
                </ul>
              </div>

              {/* 8. Limitation of Liability */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-600">
                  Balatrix and its parent company, <strong>A2 Cloud Solutions</strong>, shall not be liable for any
                  indirect, incidental, or consequential damages, including loss of profits, data, or business interruption,
                  arising from the use or inability to use our services.
                </p>
              </div>

              {/* 9. Termination */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
                <p className="text-gray-600">
                  We reserve the right to suspend or terminate accounts involved in non-payment, misuse,
                  or violation of these Terms. Upon termination, all active services and access may be revoked.
                </p>
              </div>

              {/* 10. Governing Law */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law & Jurisdiction</h2>
                <p className="text-gray-600">
                  These Terms are governed by and construed under applicable laws in the relevant service jurisdiction.
                  Any disputes shall be subject to the exclusive jurisdiction of the competent courts in that jurisdiction.
                </p>
              </div>

              {/* 11. Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
                <p className="text-gray-600">
                  For questions about these Terms of Service, please contact us at:<br />
                  📧 <a href="mailto:legal@balatrix.com" className="text-blue-600 hover:text-blue-700">legal@balatrix.com</a><br />
                  🌐 <a href="https://www.balatrix.com" className="text-blue-600 hover:text-blue-700">www.balatrix.com</a>
                </p>
              </div>

              {/* 12. Updates to Terms */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Updates to These Terms</h2>
                <p className="text-gray-600">
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
