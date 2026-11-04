export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Balatrix",
    "alternateName": "A2 Cloud Solutions",
    "url": "https://balatrix.com",
    "logo": "https://balatrix.com/og-image.jpg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-844-225-2435",
      "contactType": "customer service",
      "areaServed": ["US", "CA"],
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://www.linkedin.com/company/balatrix",
      "https://twitter.com/balatrix"
    ]
  };
};

export const generateProductSchema = (productName, description, price) => {
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": productName,
    "description": description,
    "brand": {
      "@type": "Brand",
      "name": "Balatrix"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://balatrix.com/pricing",
      "priceCurrency": "USD",
      "price": price,
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  };
};

export const generateBreadcrumbSchema = (items) => {
  const itemListElement = items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }));

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement
  };
};

export const generateFAQSchema = (faqs) => {
  const mainEntity = faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }));

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": mainEntity
  };
};

/**
 * Generates Google Sitelinks & Site Navigation Schema
 * Specifically signals to Google the primary subpages to display as expanded Sitelinks
 */
export const generateSiteNavigationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://balatrix.com/#website",
        "url": "https://balatrix.com/",
        "name": "Balatrix",
        "alternateName": ["Balatrix Cloud PBX", "Balatrix Telephony"],
        "description": "Enterprise Cloud PBX, Wholesale Toll-Free DIDs, and Business Telephony for US & Canada"
      },
      {
        "@type": "Organization",
        "@id": "https://balatrix.com/#organization",
        "name": "Balatrix",
        "url": "https://balatrix.com/",
        "logo": "https://balatrix.com/og-image.jpg",
        "sameAs": [
          "https://www.linkedin.com/company/balatrix",
          "https://twitter.com/balatrix"
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://balatrix.com/#sitelinks",
        "name": "Balatrix Core Navigation",
        "itemListElement": [
          {
            "@type": "SiteNavigationElement",
            "position": 1,
            "name": "Want a Demo?",
            "description": "Experience our live interactive Cloud PBX sandbox, visual IVR builder, and call monitoring.",
            "url": "https://balatrix.com/demo"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 2,
            "name": "Solutions",
            "description": "Tailored business communications, enterprise telephony, and unified VoIP routing.",
            "url": "https://balatrix.com/solutions"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 3,
            "name": "Services",
            "description": "Wholesale Toll-Free DIDs, Cloud PBX hosting, SIP trunking, and white-label telephony.",
            "url": "https://balatrix.com/services"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 4,
            "name": "Pricing",
            "description": "Transparent VoIP pricing starting at $9.99/mo with zero contracts and instant activation.",
            "url": "https://balatrix.com/pricing"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 5,
            "name": "About Us",
            "description": "Learn about Balatrix, our telecom carrier infrastructure, and global network.",
            "url": "https://balatrix.com/about"
          }
        ]
      }
    ]
  };
};
