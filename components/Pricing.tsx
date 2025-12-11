import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Pricing: React.FC = () => {
  const technologies = [
    'Next.js', 'Python', 'AWS', 'PostgreSQL', 'Docker', 'Stripe'
  ];

  return (
    <section id="tech" className="py-24 bg-white text-black border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Sticky Sidebar */}
            <div className="col-span-1">
                <div className="sticky top-24">
                     <div className="inline-block bg-black text-white px-2 py-1 text-xs font-mono font-bold uppercase mb-4 tracking-widest">
                        Tech Stack \\
                    </div>
                    <h2 className="text-4xl font-bold leading-tight mb-8">
                        <span className="opacity-50">We build with</span> modern, enterprise-grade <span className="opacity-50">technologies</span>
                    </h2>
                    <button className="hidden lg:flex items-center gap-2 border border-zinc-300 px-4 py-2 rounded text-sm hover:border-black transition-colors">
                        View Full Stack <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Grid */}
            <div className="col-span-2 grid sm:grid-cols-2 gap-4">
                {technologies.map((tech, idx) => (
                    <div key={idx} className="group p-6 bg-zinc-50 border border-transparent hover:border-black/10 hover:shadow-md transition-all rounded-lg cursor-pointer">
                        <div className="flex justify-between items-start mb-12">
                            <span className="font-mono text-xs text-zinc-500">{String.fromCharCode(65 + idx)} \</span>
                            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-black transition-colors" />
                        </div>
                        <div className="flex justify-between items-end">
                            <h3 className="text-3xl font-bold tracking-tight text-black">{tech}</h3>
                            <span className="text-xs font-mono text-orange-600 border border-orange-200 px-1 py-0.5 rounded bg-orange-50">Core</span>
                        </div>
                    </div>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
};