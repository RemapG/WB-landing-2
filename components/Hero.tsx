
import React from 'react';
import { HERO_DATA } from '../data';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] md:min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#050505]">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_DATA.bgImage} 
          className="w-full h-full object-cover opacity-20"
          alt="Studio Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]"></div>
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] md:w-[40%] md:h-[40%] bg-[#ccff00] rounded-full blur-[100px] md:blur-[150px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] md:w-[40%] md:h-[40%] bg-purple-600 rounded-full blur-[100px] md:blur-[150px] opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block py-1 px-3 bg-[#ccff00] text-black text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-6 md:mb-8 animate-bounce">
            Top Tier Sound Only
          </div>
          
          <h1 className="text-5xl md:text-9xl font-accent font-bold leading-[0.9] tracking-tighter mb-8 md:mb-12">
            <span className="block">{HERO_DATA.titleLine1}</span>
            <span className="text-outline block">{HERO_DATA.titleLine2}</span>
            <span className="block text-[#ccff00]">{HERO_DATA.titleLine3}</span>
          </h1>

          <div className="max-w-xl text-base md:text-xl text-white/50 mb-10 md:mb-14 font-medium lowercase px-4 leading-relaxed">
            {HERO_DATA.subtitle}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0">
            <a href="#contact" className="px-8 md:px-12 py-5 bg-[#ccff00] text-black font-accent font-bold text-xs md:text-sm hover:translate-y-[-4px] transition-all uppercase tracking-widest">
              СВЯЗАТЬСЯ С НАМИ
            </a>
            <a href="#portfolio" className="px-8 md:px-12 py-5 border border-white/10 text-white font-accent font-bold text-xs md:text-sm hover:bg-white hover:text-black transition-all">
              НАШИ ДРОПЫ
            </a>
          </div>
        </div>
      </div>

      {/* Marquee effect */}
      <div className="absolute bottom-0 w-full overflow-hidden border-t border-white/5 py-3 md:py-4 bg-black/50 backdrop-blur-sm">
        <div className="marquee font-accent text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] text-white/20 italic">
          <span>MIXING • MASTERING • RECORDING • PRODUCTION • SOUND DESIGN • SONGWRITING • </span>
          <span>MIXING • MASTERING • RECORDING • PRODUCTION • SOUND DESIGN • SONGWRITING • </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
