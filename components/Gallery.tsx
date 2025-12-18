
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1538688543313-9426f86c8f5d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544450181-298991156546?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=800&auto=format&fit=crop",
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <span className="text-[#5d4037] font-medium tracking-widest uppercase text-sm block mb-2">Портфолио</span>
          <h2 className="text-4xl md:text-5xl font-bold">Наши проекты</h2>
        </div>
        <p className="text-gray-500 max-w-md text-right md:text-left">
          Фотографии готовых интерьеров, где наша мебель нашла свое идеальное место. 
          Вдохновляйтесь решениями для вашего дома.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className={`relative overflow-hidden group rounded-lg ${idx % 3 === 0 ? 'md:row-span-2' : ''}`}>
            <img 
              src={img} 
              alt={`Project ${idx}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
              <p className="text-white text-xs uppercase tracking-widest mb-1">Интерьер</p>
              <h4 className="text-white font-bold">Проект №{idx + 102}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
