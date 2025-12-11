import React, { useState, useEffect } from 'react';
import { Button } from './Button';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check local storage
    const consent = localStorage.getItem('zelva-cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('zelva-cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 shadow-2xl z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600 text-center md:text-left">
          We use cookies to analyze site performance and deliver personalized content. By using our site, you agree to our <a href="#" className="text-indigo-600 underline">Privacy Policy</a>.
        </p>
        <div className="flex gap-4">
          <Button size="sm" variant="ghost" onClick={accept}>Decline</Button>
          <Button size="sm" onClick={accept}>Accept Cookies</Button>
        </div>
      </div>
    </div>
  );
};
