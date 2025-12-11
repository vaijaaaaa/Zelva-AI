import React from 'react';
import { Database, Users, ShoppingBag, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

export const Services: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 border-b border-white/10 pb-8 items-end">
            <div>
                <div className="inline-block bg-white text-black px-2 py-1 text-xs font-mono font-bold uppercase mb-4 tracking-widest">
                    Capabilities \\
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                    <span className="opacity-50">Replacing</span> legacy chaos <span className="opacity-50">with streamlined, automated software</span>
                </h2>
            </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-0 border border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            {/* Card 1 */}
            <div className="group relative bg-[#0a0a0a] p-8 lg:p-10 transition-colors hover:bg-[#0f0f0f] h-[500px] flex flex-col justify-between overflow-hidden">
                <div className="absolute top-6 left-6 text-xs font-mono text-zinc-500 group-hover:text-white transition-colors">ERP \</div>
                
                <div className="w-full h-40 mt-12 relative flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                    <Database className="w-24 h-24 text-zinc-800 group-hover:text-orange-500 transition-colors" strokeWidth={1} />
                </div>

                <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-bold text-white mb-3">Enterprise ERP</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        Unify inventory, finance, and supply chain into one real-time dashboard. Eliminate spreadsheets and manual data entry forever.
                    </p>
                    <a href="#contact" className="inline-flex items-center text-sm font-bold text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                        Automate Operations <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-[#0a0a0a] p-8 lg:p-10 transition-colors hover:bg-[#0f0f0f] h-[500px] flex flex-col justify-between overflow-hidden">
                <div className="absolute top-6 left-6 text-xs font-mono text-zinc-500 group-hover:text-white transition-colors">CRM \</div>
                
                 <div className="w-full h-40 mt-12 relative flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                    <Users className="w-24 h-24 text-zinc-800 group-hover:text-orange-500 transition-colors" strokeWidth={1} />
                </div>

                <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-bold text-white mb-3">Intelligent CRM</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        Custom pipelines that match your sales process. Auto-enrich leads, track interactions, and forecast revenue with AI-driven insights.
                    </p>
                    <a href="#contact" className="inline-flex items-center text-sm font-bold text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                        Grow Revenue <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-[#0a0a0a] p-8 lg:p-10 transition-colors hover:bg-[#0f0f0f] h-[500px] flex flex-col justify-between overflow-hidden">
                <div className="absolute top-6 left-6 text-xs font-mono text-zinc-500 group-hover:text-white transition-colors">E-COM \</div>
                
                 <div className="w-full h-40 mt-12 relative flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                    <ShoppingBag className="w-24 h-24 text-zinc-800 group-hover:text-orange-500 transition-colors" strokeWidth={1} />
                </div>

                <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-bold text-white mb-3">Custom E-Commerce</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        Headless architectures for brands that have outgrown Shopify. Sub-second load times, global payments, and infinite customization.
                    </p>
                    <a href="#contact" className="inline-flex items-center text-sm font-bold text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                        Scale Sales <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};