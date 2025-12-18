
import React from 'react';

const services = [
  { id: '01', title: 'VOICE REC', desc: 'Запись на легендарные микрофоны. Твой голос будет звучать как у кумиров.', price: '2000' },
  { id: '02', title: 'MIXING', desc: 'Сведение, которое заставит колонки дышать. Полный баланс и мощь.', price: '8000' },
  { id: '03', title: 'MASTER', desc: 'Финальный пробив для стримингов. Громко. Чисто. Масштабно.', price: '3500' },
  { id: '04', title: 'BEATMAKING', desc: 'Эксклюзивный продакшн. Никаких тайп-битов, только твой вайб.', price: '15000' },
];

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
        <h2 className="text-5xl md:text-8xl font-accent font-bold">Services</h2>
        <p className="text-white/40 max-w-sm lowercase">Прайс-лист для тех, кто ценит качество, а не дешевые понты.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-white/10">
        {services.map((s) => (
          <div key={s.id} className="group p-10 border-r border-b border-white/10 hover:bg-[#ccff00] transition-colors duration-500 cursor-pointer">
            <div className="flex justify-between items-start mb-12">
              <span className="font-accent text-sm group-hover:text-black">{s.id}</span>
              <span className="text-4xl group-hover:text-black">→</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-accent font-bold mb-6 group-hover:text-black">{s.title}</h3>
            <p className="text-white/40 group-hover:text-black/60 mb-8 lowercase h-12 overflow-hidden">{s.desc}</p>
            <div className="text-2xl font-bold group-hover:text-black">от {s.price} ₽</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
