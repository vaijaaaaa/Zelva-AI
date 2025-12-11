import React from 'react';
import { Search, Code2, Rocket } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-[#050505] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
             <div>
                <div className="inline-block bg-white text-black px-2 py-1 text-xs font-mono font-bold uppercase mb-4 tracking-widest">
                    Methodology \\
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                    Transparent delivery <span className="opacity-50">— from blueprint to deployment</span>
                </h2>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border border-white/10 divide-x divide-white/10">
            {/* Step 1 */}
            <div className="group relative p-8 lg:p-12 hover:bg-[#0a0a0a] transition-colors">
                <div className="text-xs font-mono text-zinc-500 mb-8">A \</div>
                <div className="h-48 flex items-center justify-center border border-white/5 bg-[#0a0a0a] rounded mb-8 group-hover:border-orange-500/30 transition-colors">
                    <Search className="w-12 h-12 text-zinc-700 group-hover:text-orange-500 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">1. Discovery & Strategy</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                    We audit your current infrastructure, map your workflows, and architect a technical roadmap before writing a single line of code.
                </p>
            </div>

             {/* Step 2 */}
             <div className="group relative p-8 lg:p-12 hover:bg-[#0a0a0a] transition-colors">
                <div className="text-xs font-mono text-zinc-500 mb-8">B \</div>
                <div className="h-48 flex items-center justify-center border border-white/5 bg-[#0a0a0a] rounded mb-8 group-hover:border-orange-500/30 transition-colors">
                    <Code2 className="w-12 h-12 text-zinc-700 group-hover:text-orange-500 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">2. Agile Development</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                    We build in 2-week sprints with constant feedback loops. You see progress every step of the way, ensuring the final product fits your needs perfectly.
                </p>
            </div>

             {/* Step 3 */}
             <div className="group relative p-8 lg:p-12 hover:bg-[#0a0a0a] transition-colors">
                <div className="text-xs font-mono text-zinc-500 mb-8">C \</div>
                <div className="h-48 flex items-center justify-center border border-white/5 bg-[#0a0a0a] rounded mb-8 group-hover:border-orange-500/30 transition-colors">
                    <Rocket className="w-12 h-12 text-zinc-700 group-hover:text-orange-500 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">3. Scale & Support</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                    Deployment is just the start. We provide SLA-backed support, CI/CD pipeline management, and ongoing feature development to keep you ahead.
                </p>
            </div>
        </div>
        
        <div className="mt-12 flex justify-end">
            <div className="text-right">
                <p className="text-zinc-400 text-sm mb-4">Ready to modernize your operations?</p>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})} className="bg-white text-black px-6 py-3 rounded font-bold hover:bg-orange-500 hover:text-white transition-colors">
                    Get a Technical Roadmap
                </button>
            </div>
        </div>

      </div>
    </section>
  );
};