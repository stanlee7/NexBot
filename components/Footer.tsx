import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return (
    <footer className="bg-black text-white pt-24 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <div>
                <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-8">
                    We are building the last <br/> machine you'll ever need.
                </h2>
                <div className="flex items-center gap-4">
                    <button className="bg-white text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-lime-400 transition-colors">
                        Work With Us
                    </button>
                    <button 
                        onClick={scrollToTop}
                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                    >
                        <ArrowUp size={16} />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-8 md:pl-24">
                <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Navigate</h4>
                    <ul className="space-y-4">
                        <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Platform</a></li>
                        <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Company</a></li>
                        <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Newsroom</a></li>
                        <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Invest</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Connect</h4>
                    <ul className="space-y-4">
                        <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Twitter / X</a></li>
                        <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">LinkedIn</a></li>
                        <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Instagram</a></li>
                        <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">GitHub</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8">
            <h1 className="font-display text-[12vw] leading-none text-white/10 select-none pointer-events-none -mb-4 md:-mb-8">
                NEXBOT
            </h1>
            <div className="flex items-center gap-2 pb-2">
                <div className="w-4 h-4 rounded-full bg-lime-400"></div>
                <span className="text-xs text-gray-500">© 2025 NexBot Robotics. All rights reserved.</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;