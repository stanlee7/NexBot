import React from 'react';
import { ArrowDownRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-[#c8c8c8] overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/30 z-10 pointer-events-none" />

      {/* Spline 3D Model */}
      <div className="absolute inset-0 w-full h-full z-0">
        <iframe 
          src='https://my.spline.design/nexbotrobotcharacterconcept-Y3YaJoxPGcYH96cC2NpGqFXn/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          title="NexBot 3D Model"
          className="w-full h-full pointer-events-auto"
        ></iframe>
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-24 md:pb-32 pointer-events-none">
        <div className="max-w-3xl pointer-events-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-lime-400">System Online</span>
          </div>
          <h1 className="font-display text-5xl md:text-8xl font-medium leading-[0.9] tracking-tighter text-white mb-8">
            Engineering the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">future of labor.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed">
            NexBot unifies advanced neural networks with high-fidelity actuation to solve complex physical tasks.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <button className="group flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-white hover:text-black transition-all">
              Discover Platform
            </button>
            <button className="w-12 h-12 rounded-full bg-lime-400 flex items-center justify-center text-black hover:scale-110 transition-transform">
               <ArrowDownRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;