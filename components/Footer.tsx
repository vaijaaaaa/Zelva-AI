import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
            <div className="col-span-6 pr-12">
                <div className="inline-block bg-white text-black px-2 py-1 text-xs font-mono font-bold uppercase mb-4 tracking-widest">
                        Start Now \\
                </div>
                <h3 className="text-4xl font-bold mb-8">
                    Ready to scale? <span className="opacity-50">— Let's architect your digital future.</span>
                </h3>
                
                <div className="space-y-4">
                    <a href="#" className="flex justify-between items-center py-4 border-t border-white/10 group hover:opacity-50 transition-opacity">
                        <span className="text-lg">Book a Discovery Call</span>
                        <div className="w-8 h-8 rounded-full border border-orange-500 flex items-center justify-center text-orange-500">↗</div>
                    </a>
                    <a href="#" className="flex justify-between items-center py-4 border-t border-white/10 group hover:opacity-50 transition-opacity">
                        <span className="text-lg">View Case Studies</span>
                        <div className="w-8 h-8 rounded-full border border-orange-500 flex items-center justify-center text-orange-500">↗</div>
                    </a>
                </div>
            </div>

            <div className="col-span-6 lg:col-span-5 lg:col-start-8 grid grid-cols-3 gap-8">
                <div>
                    <h4 className="font-mono text-xs text-zinc-500 mb-6">Services</h4>
                    <ul className="space-y-4 text-sm font-medium">
                        <li><a href="#" className="hover:text-orange-500 transition-colors">Custom ERP</a></li>
                        <li><a href="#" className="hover:text-orange-500 transition-colors">CRM Development</a></li>
                        <li><a href="#" className="hover:text-orange-500 transition-colors">E-Commerce</a></li>
                        <li><a href="#" className="hover:text-orange-500 transition-colors">Cloud Migration</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-mono text-xs text-zinc-500 mb-6">Company</h4>
                    <ul className="space-y-4 text-sm font-medium">
                        <li><a href="#" className="hover:text-orange-500 transition-colors">About</a></li>
                        <li><a href="#" className="hover:text-orange-500 transition-colors">Process</a></li>
                        <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-orange-500 transition-colors">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-mono text-xs text-zinc-500 mb-6">Connect</h4>
                    <ul className="space-y-4 text-sm font-medium">
                        <li><a href="#" className="hover:text-orange-500 transition-colors">LinkedIn</a></li>
                        <li><a href="#" className="hover:text-orange-500 transition-colors">Twitter</a></li>
                        <li><a href="#" className="hover:text-orange-500 transition-colors">GitHub</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500 font-mono">
          <div className="flex gap-6 mb-4 md:mb-0">
             <a href="#" className="hover:text-white">Terms of Service</a>
             <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
          <p>© 2025 Zelva.ai Solutions.</p>
        </div>
      </div>
    </footer>
  );
};