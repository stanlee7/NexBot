import React from 'react';
import { Cpu, Eye, Zap, Activity } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="technology" className="bg-[#f2f2f2] text-black py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-lime-600 font-bold text-xs uppercase tracking-widest mb-4 block">The Platform</span>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-tight tracking-tight max-w-4xl">
            Combining synthetic muscle, silicon, and code into an <span className="text-gray-400">engine of autonomy.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group bg-lime-300 p-8 rounded-none aspect-square flex flex-col justify-between transition-transform hover:-translate-y-2">
            <div className="flex justify-between items-start">
              <Zap className="w-12 h-12 stroke-1" />
              <span className="text-xs font-bold opacity-50">01.</span>
            </div>
            <div>
              <h3 className="text-2xl font-display font-medium mb-3">Actuators</h3>
              <p className="text-sm font-medium leading-relaxed opacity-80">
                Custom-designed rotary and linear actuators provide human-level torque density and efficiency.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-[#1a1a1a] text-white p-8 rounded-none aspect-square flex flex-col justify-between transition-transform hover:-translate-y-2">
            <div className="flex justify-between items-start">
              <Cpu className="w-12 h-12 stroke-1 text-lime-400" />
              <span className="text-xs font-bold opacity-50">02.</span>
            </div>
            <div>
              <h3 className="text-2xl font-display font-medium mb-3">Compute</h3>
              <p className="text-sm font-medium leading-relaxed text-gray-400">
                Dual FSD chips process visual data at 250 frames per second for real-time decision making.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white border border-gray-200 p-8 rounded-none aspect-square flex flex-col justify-between transition-transform hover:-translate-y-2">
            <div className="flex justify-between items-start">
              <Eye className="w-12 h-12 stroke-1" />
              <span className="text-xs font-bold opacity-50">03.</span>
            </div>
            <div>
              <h3 className="text-2xl font-display font-medium mb-3">Vision</h3>
              <p className="text-sm font-medium leading-relaxed text-gray-600">
                Occupancy networks build a volumetric understanding of the world without LiDAR or pre-mapping.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;