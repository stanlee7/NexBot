import React from 'react';
import { SpecItem } from '../types';

const specs: SpecItem[] = [
  { label: 'Height', value: "5'8\" (173 cm)" },
  { label: 'Weight', value: '125 lbs (57 kg)' },
  { label: 'Carrying Capacity', value: '45 lbs (20 kg)' },
  { label: 'Walking Speed', value: '5 mph (8 kph)' },
  { label: 'Degrees of Freedom', value: '28' },
  { label: 'Battery System', value: '2.3 kWh' },
];

const Specs: React.FC = () => {
  return (
    <section id="specs" className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
            <div className="w-2 h-2 bg-black rounded-full" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">System Specifications</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative rounded-2xl overflow-hidden h-[500px] md:h-[700px] group">
            <img 
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop" 
              alt="Engineer working on robot" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 md:p-12">
              <h3 className="text-white text-3xl font-display font-medium mb-4">Precision Engineering</h3>
              <p className="text-gray-300 max-w-md">Every joint, actuator, and sensor is custom-built to maximize efficiency and mimic human kinematics.</p>
            </div>
          </div>

          {/* Specs List Side */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-6 text-black">
              Designed for the <br/> human world.
            </h2>
            <p className="text-gray-600 mb-12 leading-relaxed">
              We eliminated the complexity of traditional hydraulics. NexBot uses purely electromechanical actuators for silent, clean, and precise movement.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {specs.map((spec, index) => (
                <div key={index} className="border-t border-gray-200 pt-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{spec.label}</p>
                  <p className="text-xl md:text-2xl font-medium text-black">{spec.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
                <button className="bg-black text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-lime-400 hover:text-black transition-colors">
                    Download Datasheet
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specs;