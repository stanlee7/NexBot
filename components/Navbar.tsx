import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-lime-400 flex items-center justify-center">
                <div className="w-3 h-3 bg-black rounded-full" />
            </div>
          <span className="text-xl font-bold tracking-tight text-white">NEXBOT</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#vision" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Vision</a>
          <a href="#technology" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Technology</a>
          <a href="#specs" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Specifications</a>
          <a href="#news" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Newsroom</a>
          
          <button className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-lime-400 transition-colors">
            Order Now <ArrowRight size={14} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-6 md:hidden">
          <a href="#vision" className="text-lg font-medium text-white">Vision</a>
          <a href="#technology" className="text-lg font-medium text-white">Technology</a>
          <a href="#specs" className="text-lg font-medium text-white">Specifications</a>
          <a href="#news" className="text-lg font-medium text-white">Newsroom</a>
          <button className="w-full flex justify-center items-center gap-2 bg-white text-black px-5 py-3 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-lime-400 transition-colors">
            Order Now <ArrowRight size={16} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;