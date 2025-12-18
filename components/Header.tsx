
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 py-4 border-b border-[#ccff00]/20' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#ccff00] flex items-center justify-center text-black font-black transition-transform group-hover:rotate-90">W</div>
          <span className="font-accent font-bold tracking-tighter text-lg">WOODBAZE</span>
        </a>

        <nav className="hidden md:flex gap-12">
          {['услуги', 'портфолио', 'студия', 'контакты'].map((item) => (
            <a 
              key={item} 
              href={`#${item === 'студия' ? 'about' : (item === 'контакты' ? 'contact' : (item === 'услуги' ? 'services' : 'portfolio'))}`}
              className="text-[11px] font-bold uppercase tracking-widest text-white/50 hover:text-[#ccff00] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <a href="#contact" className="px-6 py-2 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-[#ccff00] transition-colors">
          Book session
        </a>
      </div>
    </header>
  );
};

export default Header;
