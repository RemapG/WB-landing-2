
import React from 'react';

const Portfolio: React.FC = () => {
  const releases = [
    { title: 'NIGHTMARE', artist: 'LIL NOISE', type: 'SINGLE', color: 'bg-red-600' },
    { title: 'FUTURE', artist: 'NEON KID', type: 'EP', color: 'bg-blue-600' },
    { title: 'RAW CUTS', artist: 'TECHNO G', type: 'ALBUM', color: 'bg-purple-600' },
    { title: 'VOID', artist: 'DARK S', type: 'SINGLE', color: 'bg-zinc-800' },
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="mb-20">
        <h2 className="text-5xl md:text-9xl font-accent font-bold leading-none mb-4">RELEASES</h2>
        <div className="flex gap-4">
          <div className="h-[2px] w-20 bg-[#ccff00]"></div>
          <p className="text-white/30 text-xs tracking-widest uppercase font-bold">Latest drops mixed at WoodBaze</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {releases.map((item, idx) => (
          <div key={idx} className="group relative overflow-hidden bg-zinc-900 border border-white/5 hover:border-[#ccff00]/50 transition-all cursor-pointer">
            <div className={`aspect-square ${item.color} opacity-20 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center`}>
              <span className="text-6xl font-accent opacity-10 group-hover:opacity-30">{item.title[0]}</span>
            </div>
            
            <div className="p-6 bg-black/80 backdrop-blur-md absolute bottom-0 w-full translate-y-2 group-hover:translate-y-0 transition-transform">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-black bg-[#ccff00] text-black px-2 py-0.5">{item.type}</span>
                <span className="text-[10px] text-white/30">2024</span>
              </div>
              <h4 className="text-lg font-accent font-bold mb-1">{item.title}</h4>
              <p className="text-xs text-white/50 lowercase">{item.artist}</p>
            </div>

            <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="black"><path d="M8 5v14l11-7z"></path></svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
