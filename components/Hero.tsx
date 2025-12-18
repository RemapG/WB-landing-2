
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#050505]">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#ccff00] rounded-full blur-[150px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600 rounded-full blur-[150px] opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block py-1 px-3 bg-[#ccff00] text-black text-[10px] font-bold uppercase tracking-[0.3em] mb-8 animate-bounce">
            Top Tier Sound only
          </div>
          
          <h1 className="text-6xl md:text-9xl font-accent font-bold leading-none tracking-tighter mb-8">
            <span className="block">WOOD</span>
            <span className="text-outline block">BAZE</span>
            <span className="block text-[#ccff00]">STUDIO</span>
          </h1>

          <div className="max-w-2xl text-lg md:text-xl text-white/60 mb-12 font-light lowercase">
            мы не просто записываем звук. мы создаем <span className="text-white font-bold">звуковую идентичность</span>. забудь всё, что ты слышал до этого.
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#contact" className="px-12 py-5 bg-[#ccff00] text-black font-accent font-bold text-sm hover:translate-y-[-4px] hover:shadow-[0_10px_20px_rgba(204,255,0,0.3)] transition-all">
              Записаться сейчас
            </a>
            <a href="#portfolio" className="px-12 py-5 border border-white/10 text-white font-accent font-bold text-sm hover:bg-white hover:text-black transition-all">
              Наши дропы
            </a>
          </div>
        </div>
      </div>

      {/* Marquee effect */}
      <div className="absolute bottom-0 w-full overflow-hidden border-t border-white/5 py-4 bg-black/50 backdrop-blur-sm">
        <div className="marquee font-accent text-[10px] tracking-[0.5em] text-white/20">
          <span>MIXING • MASTERING • RECORDING • PRODUCTION • SOUND DESIGN • SONGWRITING • </span>
          <span>MIXING • MASTERING • RECORDING • PRODUCTION • SOUND DESIGN • SONGWRITING • </span>
          <span>MIXING • MASTERING • RECORDING • PRODUCTION • SOUND DESIGN • SONGWRITING • </span>
          <span>MIXING • MASTERING • RECORDING • PRODUCTION • SOUND DESIGN • SONGWRITING • </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
