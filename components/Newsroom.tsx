import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Newsroom: React.FC = () => {
  return (
    <section id="news" className="bg-[#0a0a0a] text-white py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="font-display text-5xl md:text-7xl font-medium tracking-tight">Newsroom</h2>
          <button className="hidden md:flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-white hover:text-black transition-colors">
            View All Articles <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Featured Article */}
            <div className="lg:col-span-8 bg-[#111] border border-white/5 rounded-2xl overflow-hidden group cursor-pointer">
                <div className="h-64 md:h-96 overflow-hidden relative">
                    <img 
                        src="https://images.unsplash.com/photo-1535378437327-1e188bc894bd?q=80&w=2680&auto=format&fit=crop" 
                        alt="Neural Network Viz" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute top-6 left-6 flex gap-2">
                        <span className="bg-lime-400/20 text-lime-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">Publications</span>
                    </div>
                </div>
                <div className="p-8 md:p-12">
                    <span className="text-gray-500 text-xs font-mono mb-4 block">SEPTEMBER 4, 2025</span>
                    <h3 className="text-2xl md:text-3xl font-display font-medium mb-4 group-hover:text-lime-400 transition-colors">
                        Reinforcement learning at scale: How we trained NexBot to walk in 48 hours.
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-8">
                        In this landmark technical report, we unveil our simulation-to-reality pipeline that enables robust locomotion policies without manual reward engineering.
                    </p>
                    <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest border-b border-white/20 pb-1 group-hover:border-lime-400 transition-colors">Read Article</span>
                </div>
            </div>

            {/* Sidebar Articles */}
            <div className="lg:col-span-4 flex flex-col gap-6">
                 {/* Article 2 */}
                <div className="bg-[#111] border border-white/5 p-8 rounded-2xl flex-1 flex flex-col justify-between group cursor-pointer hover:border-lime-400/30 transition-colors">
                    <div>
                        <div className="flex justify-between items-start mb-6">
                            <span className="bg-white/10 text-gray-300 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">News</span>
                            <span className="text-gray-600 text-[10px] font-mono">DEC 18, 2025</span>
                        </div>
                        <h4 className="text-xl font-display font-medium mb-3 group-hover:text-lime-400 transition-colors">Scaling Computer Vision to Solve Folding</h4>
                    </div>
                    <div className="flex justify-end mt-4">
                         <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-lime-400 group-hover:text-black transition-all">
                            <ArrowUpRight size={14} />
                        </div>
                    </div>
                </div>

                {/* Article 3 */}
                <div className="bg-gradient-to-br from-[#1a1a1a] to-black border border-white/5 p-8 rounded-2xl flex-1 flex flex-col justify-between group cursor-pointer hover:border-lime-400/30 transition-colors">
                    <div>
                        <div className="flex justify-between items-start mb-6">
                            <span className="bg-white/10 text-gray-300 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Update</span>
                            <span className="text-gray-600 text-[10px] font-mono">NOV 21, 2025</span>
                        </div>
                        <h4 className="text-xl font-display font-medium mb-3 group-hover:text-lime-400 transition-colors">Inside Our Factory: Manufacturing the future.</h4>
                    </div>
                     <div className="flex justify-end mt-4">
                         <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-lime-400 group-hover:text-black transition-all">
                            <ArrowUpRight size={14} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Newsroom;