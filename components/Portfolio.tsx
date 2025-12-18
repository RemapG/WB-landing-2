
import React, { useState, useRef } from 'react';
import { PORTFOLIO_DATA } from '../data';

const Portfolio: React.FC = () => {
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = (idx: number, url: string) => {
    if (playingIdx === idx) {
      audioRef.current?.pause();
      setPlayingIdx(null);
    } else {
      if (audioRef.current) {
        audioRef.current.src = url;
        audioRef.current.play();
      }
      setPlayingIdx(idx);
    }
  };

  return (
    <div className="container mx-auto px-6">
      <audio 
        ref={audioRef} 
        onEnded={() => setPlayingIdx(null)}
        className="hidden"
      />

      <div className="mb-12 md:mb-20 text-right flex flex-col items-end">
        <h2 className="text-4xl md:text-8xl font-accent font-bold mb-4">РАБОТЫ</h2>
        <div className="w-20 h-1 bg-[#ccff00]"></div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {PORTFOLIO_DATA.map((work, idx) => (
          <div 
            key={idx} 
            onClick={() => togglePlay(idx, work.audioUrl)}
            className="group relative aspect-square bg-[#0a0a0a] border border-white/5 overflow-hidden flex flex-col justify-end p-4 md:p-8 cursor-pointer"
          >
            {/* Background Cover */}
            <img 
              src={work.cover} 
              alt={work.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500" 
            />
            
            <div className={`absolute inset-0 ${work.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
            
            <div className="relative z-10 transition-transform group-hover:-translate-y-2">
              <h4 className="text-sm md:text-xl font-accent font-bold group-hover:text-[#ccff00] transition-colors">
                {work.title}
              </h4>
              <p className="text-[10px] md:text-xs text-white/40 group-hover:text-white transition-colors uppercase font-bold tracking-widest">
                {work.artist}
              </p>
            </div>

            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ${playingIdx === idx ? 'opacity-100 scale-110' : 'opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100'}`}>
               <div className={`w-12 h-12 md:w-16 md:h-16 ${playingIdx === idx ? 'bg-[#ccff00]' : 'bg-white'} rounded-full flex items-center justify-center shadow-2xl`}>
                  {playingIdx === idx ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black"><path d="M8 5v14l11-7z"></path></svg>
                  )}
               </div>
            </div>

            {/* Playing Indicator Line */}
            {playingIdx === idx && (
              <div className="absolute bottom-0 left-0 h-1 bg-[#ccff00] animate-pulse" style={{ width: '100%' }}></div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.4em]">нажми на карточку, чтобы включить звук</p>
      </div>
    </div>
  );
};

export default Portfolio;
