import React from 'react';

const Privacy = () => {
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
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your privacy matters to us. This policy explains how <strong>Balatrix</strong> collects, uses, and protects your information.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">

              {/* 1. Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-600">
                  This Privacy Policy describes how <strong>A2 Cloud Solutions</strong> ("we", "our", "us"), operating under the brand
                  <strong> Balatrix</strong>, collects, uses, and protects personal information of users who access our website or use our VoIP and PBX services.
                </p>
              </div>

              {/* 2. Information We Collect */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                <p className="text-gray-600 mb-4">
                  We collect information that you provide directly and automatically when using our services, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Name, business name, email address, phone number, and billing details.</li>
                  <li>Login credentials and account settings.</li>
                  <li>Call-related metadata (such as call duration, caller ID, timestamps) — not the audio content itself unless explicitly recorded by you.</li>
                  <li>Payment and transaction details processed securely via third-party payment gateways.</li>
                  <li>Device, browser, and usage analytics data through cookies and analytics tools.</li>
                </ul>
              </div>

              {/* 3. How We Use the Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">
                  The information we collect is used strictly for legitimate business purposes, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>To provide and manage our VoIP and PBX communication services.</li>
                  <li>To process payments and manage billing, subscriptions, and wallet balances.</li>
                  <li>To provide technical support, troubleshoot issues, and improve service performance.</li>
                  <li>To communicate with you regarding updates, invoices, or service-related alerts.</li>
                  <li>To comply with applicable Indian telecom, data retention, and tax regulations.</li>
                </ul>
              </div>

              {/* 4. Data Security */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                <p className="text-gray-600">
                  We use industry-standard security practices to safeguard your personal data, including encryption, restricted access,
                  and secure data storage. Payment information is processed only through PCI-DSS-compliant third-party gateways.
                  We do not store your card, UPI, or net-banking details on our servers.
                </p>
              </div>

              {/* 5. Data Retention */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention</h2>
                <p className="text-gray-600">
                  We retain user information for as long as necessary to provide our services, comply with legal obligations,
                  resolve disputes, and enforce agreements. Call records and logs may be stored as required under Indian telecom regulations.
                </p>
              </div>

              {/* 6. Sharing of Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Sharing of Information</h2>
                <p className="text-gray-600 mb-4">
                  We do not sell or rent your personal information. We may share limited data with:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Trusted service providers and telecom carriers who assist in delivering our services.</li>
                  <li>Payment gateway partners for secure payment processing.</li>
                  <li>Regulatory authorities, if required by law or to comply with lawful requests.</li>
                </ul>
              </div>

              {/* 7. Cookies and Analytics */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Analytics</h2>
                <p className="text-gray-600">
                  Our website may use cookies to enhance user experience and gather analytics. You can manage cookie preferences
                  through your browser settings. For more information, please see our{' '}
                  <a href="/cookie-policy" className="text-blue-600 hover:text-blue-700">Cookie Policy</a>.
                </p>
              </div>

              {/* 8. Your Rights */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights</h2>
                <p className="text-gray-600">
                  You have the right to access, correct, or delete your personal data stored with us.
                  You can also request limitation of processing or opt-out of promotional communications by contacting us directly.
                </p>
              </div>

              {/* 9. Links to Third-Party Websites */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Links to Third-Party Websites</h2>
                <p className="text-gray-600">
                  Our platform may contain links to external websites. We are not responsible for the content or privacy practices of those sites.
                  Please review their policies separately.
                </p>
              </div>

              {/* 10. Updates to This Policy */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Updates to This Policy</h2>
                <p className="text-gray-600">
                  We may update this Privacy Policy periodically to reflect changes in technology, regulation, or business practices.
                  The latest version will always be available on our website.
                </p>
              </div>

              {/* 11. Contact Us */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
                <p className="text-gray-600">
                  For any questions, requests, or concerns about this Privacy Policy, please contact:<br />
                  📧 <a href="mailto:privacy@balatrix.com" className="text-blue-600 hover:text-blue-700">privacy@balatrix.com</a><br />
                  🌐 <a href="https://www.balatrix.com" className="text-blue-600 hover:text-blue-700">www.balatrix.com</a><br />
                  📍 Registered Office: A2 Cloud Solutions, Brampton, ON L7A 0B6, Canada.
                </p>
              </div>

              {/* 12. Jurisdiction */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Jurisdiction</h2>
                <p className="text-gray-600">
                  This Privacy Policy shall be governed by and construed in accordance with the laws of India.
                  Any disputes shall fall under the exclusive jurisdiction of the courts of Karnataka, India.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
