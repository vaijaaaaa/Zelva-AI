import React from 'react';

export const Stats: React.FC = () => {
  return (
    <section className="py-24 bg-white text-black border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Mission Header */}
        <div className="mb-16">
             <div className="inline-block bg-black text-white px-2 py-1 text-xs font-mono font-bold uppercase mb-4 tracking-widest">
                Impact \\
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                    Engineering real business outcomes <span className="text-zinc-400">through custom software</span>
                </h2>
                <div className="flex flex-col items-start justify-between">
                    <p className="text-lg text-zinc-600 mb-8">
                        We don't just write code; we solve operational bottlenecks. Our partners see immediate ROI through automation and workflow optimization.
                    </p>
                    <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})} className="border border-black px-6 py-3 rounded-lg font-medium hover:bg-black hover:text-white transition-colors">
                        Calculate Your ROI
                    </button>
                </div>
            </div>
        </div>

        {/* Stats Grid */}
        <div className="border-t border-black/10">
            {/* Stat Row 1 */}
            <div className="grid md:grid-cols-12 gap-8 py-10 border-b border-black/10 items-center">
                <div className="md:col-span-1 font-mono text-zinc-400">A \</div>
                <div className="md:col-span-3 text-6xl md:text-8xl font-bold text-orange-500 tracking-tighter">40%</div>
                <div className="md:col-span-8 text-sm font-mono uppercase tracking-widest text-zinc-500 max-w-xs">
                    Average reduction in manual operational costs
                </div>
            </div>
            {/* Stat Row 2 */}
            <div className="grid md:grid-cols-12 gap-8 py-10 border-b border-black/10 items-center">
                <div className="md:col-span-1 font-mono text-zinc-400">B \</div>
                <div className="md:col-span-3 text-6xl md:text-8xl font-bold text-orange-500 tracking-tighter">2x</div>
                <div className="md:col-span-8 text-sm font-mono uppercase tracking-widest text-zinc-500 max-w-xs">
                    Revenue growth within 12 months of deployment
                </div>
            </div>
             {/* Stat Row 3 */}
             <div className="grid md:grid-cols-12 gap-8 py-10 items-center">
                <div className="md:col-span-1 font-mono text-zinc-400">C \</div>
                <div className="md:col-span-3 text-6xl md:text-8xl font-bold text-orange-500 tracking-tighter">99.9%</div>
                <div className="md:col-span-8 text-sm font-mono uppercase tracking-widest text-zinc-500 max-w-xs">
                    Uptime guarantee for all managed cloud systems
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};