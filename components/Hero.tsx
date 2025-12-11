import React from 'react';
import { Button } from './Button';
import { ArrowRight, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#050505] min-h-[90vh] flex items-center border-b border-white/5">
      {/* Plus Grid Pattern */}
      <div className="absolute inset-0 bg-plus-pattern opacity-[0.15] pointer-events-none" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        
        <div className="flex flex-col items-center text-center relative">
            
            {/* Center Box with Border */}
            <div className="relative border border-white/10 bg-[#050505]/80 backdrop-blur-sm p-12 md:p-20 max-w-4xl mx-auto mb-12">
                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-orange-500"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-orange-500"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-orange-500"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-orange-500"></div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[0.9]">
                  <span className="block text-orange-500">Intelligent</span>
                  <span className="block">Enterprise</span>
                  <span className="block">Systems</span>
                </h1>
                
                <p className="text-lg md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                  We build the digital backbone of your business. Custom ERP, CRM, and E-Commerce solutions engineered for scale.
                </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 w-full justify-center max-w-lg mx-auto">
              <Button size="lg" className="w-full sm:w-auto font-bold" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
                Start a Project
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto font-bold">
                View Case Studies
              </Button>
            </div>

        </div>
      </div>
    </section>
  );
};