
import React, { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data';

const Portfolio: React.FC = () => {
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = (idx: number, url: string) => {
    if (playingIdx === idx) {
      if (audioRef.current?.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current?.pause();
        setIsPlaying(false);
      }
    } else {
      if (audioRef.current) {
        audioRef.current.src = url;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(err => console.error("Audio error:", err));
      }
      setPlayingIdx(idx);
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setPlayingIdx(null);
    setIsPlaying(false);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleGlobalPlay = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="container mx-auto px-6 relative pb-24 md:pb-0">
      <audio 
        ref={audioRef} 
        onEnded={() => { setPlayingIdx(null); setIsPlaying(false); }}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
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
            className={`group relative aspect-square bg-[#0a0a0a] border ${playingIdx === idx ? 'border-[#ccff00]' : 'border-white/5'} overflow-hidden flex flex-col justify-end p-4 md:p-8 cursor-pointer transition-all duration-300 shadow-2xl`}
          >
            <img 
              src={work.cover} 
              alt={work.title} 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${playingIdx === idx ? 'opacity-50 scale-110' : 'opacity-20 group-hover:opacity-40'}`} 
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=400&auto=format&fit=crop";
              }}
            />
            
            <div className={`absolute inset-0 ${work.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
            
            <div className="relative z-10 transition-transform group-hover:-translate-y-2">
              <h4 className={`text-sm md:text-xl font-accent font-bold transition-colors leading-tight ${playingIdx === idx ? 'text-[#ccff00]' : 'group-hover:text-[#ccff00]'}`}>
                {work.title}
              </h4>
              <p className="text-[10px] md:text-xs text-white/40 group-hover:text-white transition-colors uppercase font-bold tracking-widest mt-1">
                {work.artist}
              </p>
            </div>

            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${playingIdx === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-90'}`}>
               <div className={`w-12 h-12 md:w-20 md:h-20 ${playingIdx === idx ? 'bg-[#ccff00]' : 'bg-white'} rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)]`}>
                  {playingIdx === idx && isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="black"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>
                  ) : (
                    <svg className="ml-1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="black"><path d="M8 5v14l11-7z"></path></svg>
                  )}
               </div>
            </div>
          </div>
        ))}
      </div>

      {playingIdx !== null && (
        <div className="fixed bottom-0 left-0 w-full bg-black/95 backdrop-blur-3xl border-t border-[#ccff00]/30 z-[1000] py-4 md:py-6 px-6 animate-slide-up shadow-[0_-20px_60px_rgba(0,0,0,0.8)]">
          <div className="container mx-auto flex items-center gap-4 md:gap-10">
            
            {/* Play & Stop Controls - Now on the left */}
            <div className="flex items-center gap-4 md:gap-6">
              <button 
                onClick={toggleGlobalPlay}
                className="w-10 h-10 md:w-14 md:h-14 bg-[#ccff00] rounded-full flex items-center justify-center hover:scale-105 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)]"
              >
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="black"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>
                ) : (
                  <svg className="ml-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="black"><path d="M8 5v14l11-7z"></path></svg>
                )}
              </button>
              
              <button 
                onClick={stopAudio}
                className="w-10 h-10 md:w-14 md:h-14 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-all"
                title="Stop"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12"></rect></svg>
              </button>
            </div>

            {/* Timeline - Filling the space */}
            <div className="flex flex-col flex-grow gap-1">
              <div className="flex items-center justify-between mb-1">
                <div className="flex flex-col">
                  <span className="text-[#ccff00] font-accent font-bold text-[10px] md:text-xs uppercase tracking-tighter">
                    {PORTFOLIO_DATA[playingIdx].title}
                  </span>
                  <span className="text-white/30 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">
                    {PORTFOLIO_DATA[playingIdx].artist}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[10px] md:text-xs font-mono text-white/40 min-w-[35px] tabular-nums">{formatTime(currentTime)}</span>
                <div className="relative flex-grow h-6 flex items-center">
                  <input 
                    type="range" 
                    min="0" 
                    max={duration || 0} 
                    value={currentTime} 
                    onChange={handleSeek}
                    className="w-full h-1 bg-zinc-800 accent-[#ccff00] rounded-full appearance-none cursor-pointer hover:h-1.5 transition-all z-10"
                  />
                  <div 
                    className="absolute top-1/2 -translate-y-1/2 left-0 h-1 bg-[#ccff00] pointer-events-none rounded-full"
                    style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
                  ></div>
                </div>
                <span className="text-[10px] md:text-xs font-mono text-white/40 min-w-[35px] tabular-nums">{formatTime(duration)}</span>
              </div>
            </div>

            {/* Close Button - Far right */}
            <div className="flex items-center">
              <button 
                onClick={stopAudio}
                className="text-white/20 hover:text-white transition-colors p-2"
                title="Закрыть"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-12 text-center hidden md:block">
        <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.4em]">выберите трек для прослушивания</p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 14px;
          width: 14px;
          border-radius: 50%;
          background: #ccff00;
          cursor: pointer;
          box-shadow: 0 0 15px rgba(204,255,0,0.6);
          border: 2px solid black;
          transition: transform 0.2s;
        }
        input[type='range']::-webkit-slider-thumb:hover {
          transform: scale(1.4);
        }
        input[type='range']::-moz-range-thumb {
          height: 14px;
          width: 14px;
          border-radius: 50%;
          background: #ccff00;
          cursor: pointer;
          box-shadow: 0 0 15px rgba(204,255,0,0.6);
          border: 2px solid black;
        }
      `}} />
    </div>
  );
};

export default Portfolio;
