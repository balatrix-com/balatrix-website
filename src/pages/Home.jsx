import React, { useRef } from 'react';
import SEO from '../components/seo/SEO';
import { generateSiteNavigationSchema } from '../utils/schemaGenerator';
import Hero from '../components/sections/Hero';
import TrustSection from '../components/sections/TrustSection';
import ProductVisuals from '../components/sections/ProductVisuals';
import FeaturesSection from '../components/sections/FeaturesSection';
import EnterpriseSection from '../components/sections/EnterpriseSection';
import IndustrySection from '../components/sections/IndustrySection';
import ContactCTA from '../components/sections/ContactCTA';
import SIPCommunicationVisualization from '../components/sections/SIPCommunicationVisualization';

const Home = () => {
  const pageRef = useRef(null);

  return (
    <div ref={pageRef} className="min-h-screen">
      <SEO
        title="Balatrix | Cloud PBX & Wholesale Toll-Free DID Provider"
        description="Get professional toll-free numbers, interactive Cloud PBX, and business telecom solutions starting at $9.99/mo. Instant setup for US & Canada."
        canonicalUrl="https://balatrix.com/"
        keywords="Balatrix, toll-free numbers, cloud PBX, business phone system, VoIP provider, wholesale DID, US Canada toll-free"
        schema={generateSiteNavigationSchema()}
      />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 w-screen h-screen z-[20] overflow-hidden opacity-[0.50] mix-blend-screen sm:opacity-[0.60]">
        <SIPCommunicationVisualization background scrollTarget={pageRef} />
      </div>
      <Hero />
      <TrustSection />
      <ProductVisuals />
      <FeaturesSection />
      <EnterpriseSection />
      <IndustrySection />
      <ContactCTA />
    </div>
  );
};

export default Home;
