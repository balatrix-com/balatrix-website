import React from 'react';
import Hero from '../components/sections/Hero';
import TrustSection from '../components/sections/TrustSection';
import ProductVisuals from '../components/sections/ProductVisuals';
import FeaturesSection from '../components/sections/FeaturesSection';
import EnterpriseSection from '../components/sections/EnterpriseSection';
import IndustrySection from '../components/sections/IndustrySection';
import SocialProofSection from '../components/sections/SocialProofSection';
import ContactCTA from '../components/sections/ContactCTA';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustSection />
      <ProductVisuals />
      <FeaturesSection />
      <EnterpriseSection />
      <IndustrySection />
      <SocialProofSection />
      <ContactCTA />
    </div>
  );
};

export default Home;