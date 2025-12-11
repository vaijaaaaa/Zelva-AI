import React, { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
}

export const SEO: React.FC<SeoProps> = ({ title, description, canonical }) => {
  useEffect(() => {
    document.title = title;
    
    // Helper to set meta tags
    const setMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('og:title', title);
    setMeta('og:description', description);
    setMeta('og:type', 'website');
    
    // JSON-LD Injection
    const scriptId = 'json-ld-org';
    if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        script.text = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zelva.ai",
            "url": "https://zelva.ai",
            "logo": "https://zelva.ai/logo.png",
            "sameAs": [
                "https://linkedin.com/company/zelva-ai",
                "https://twitter.com/zelva_ai"
            ],
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-0123",
                "contactType": "sales"
            }
        });
        document.head.appendChild(script);
    }

  }, [title, description, canonical]);

  return null;
};
