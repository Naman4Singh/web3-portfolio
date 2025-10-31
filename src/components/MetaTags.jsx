import { useEffect } from 'react';

const MetaTags = () => {
  useEffect(() => {
    // Get the current origin (works for any domain)
    const origin = window.location.origin;
    const baseUrl = origin.endsWith('/') ? origin.slice(0, -1) : origin;
    const ogImageUrl = `${baseUrl}/og-image.png`;
    
    // Update or create meta tags dynamically
    const updateMetaTag = (property, content) => {
      let element = document.querySelector(`meta[property="${property}"]`) || 
                   document.querySelector(`meta[name="${property}"]`);
      
      if (element) {
        element.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        if (property.startsWith('og:')) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', property);
        }
        meta.setAttribute('content', content);
        document.getElementsByTagName('head')[0].appendChild(meta);
      }
    };

    // Update OG image URLs to use absolute URLs with current origin
    updateMetaTag('og:url', `${baseUrl}/`);
    updateMetaTag('og:image', ogImageUrl);
    updateMetaTag('og:image:secure_url', ogImageUrl);
    updateMetaTag('twitter:url', `${baseUrl}/`);
    updateMetaTag('twitter:image', ogImageUrl);
    
    // Update canonical link
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', `${baseUrl}/`);
    }
  }, []);

  return null;
};

export default MetaTags;

