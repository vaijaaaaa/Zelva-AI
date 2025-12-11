import React from 'react';
import { SEO } from './utils/seo';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';

const App: React.FC = () => {
  return (
    <div className="font-sans text-white bg-[#050505] antialiased selection:bg-orange-500 selection:text-black min-h-screen flex flex-col">
      <SEO 
        title="Zelva.ai | Enterprise Software Development"
        description="We build custom ERP, CRM, and E-Commerce ecosystems. Drive efficiency and growth with precision-engineered software solutions."
      />
      
      <Header />
      
      <main className="relative z-10 flex-grow">
        <Hero />
        <Services />
        <Stats />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default App;