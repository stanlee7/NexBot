import React from 'react';

const Mission: React.FC = () => {
  return (
    <section id="vision" className="relative bg-black text-white py-24 md:py-40 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-3">
          <div className="flex items-center gap-2 mb-4">
             <span className="text-[10px] font-bold border border-white/30 px-2 py-1 rounded-full uppercase tracking-wider">01 / Vision</span>
          </div>
        </div>
        
        <div className="md:col-span-9">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight mb-12">
            Through the convergence of high-fidelity perception and <span className="text-lime-400">end-to-end neural control</span>, we unlock new labor opportunities for dangerous, repetitive, and boring tasks.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
            <div>
              <h3 className="text-xl font-medium mb-4">Autonomy First</h3>
              <p className="text-gray-400 leading-relaxed">
                Designed to navigate human environments without modification. NexBot learns from demonstration and adapts to unseen scenarios using vision-based reinforcement learning.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Safe Interaction</h3>
              <p className="text-gray-400 leading-relaxed">
                Force-torque sensors in every joint allow for compliant interaction with fragile objects and safe operation alongside human coworkers.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-lime-900/20 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Mission;