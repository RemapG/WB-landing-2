
import React from 'react';

const contacts = [
  {
    label: 'ГЛЕБ',
    phone: '+7 (960) 926-73-85',
    cleanPhone: '79609267385',
    vk: 'https://vk.com/bassman1', // Замените на реальные ссылки
    tg: 'https://t.me/glebif',   // Замените на реальные ссылки
  },
  {
    label: 'МАКСИМ',
    phone: '+7 (951) 587-70-83',
    cleanPhone: '79515877083',
    vk: 'https://vk.com/masyany_aa', // Замените на реальные ссылки
    tg: 'https://t.me/maximkravts',   // Замените на реальные ссылки
  }
];

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="w-full">
          <div className="mb-12 md:mb-20">
            <h2 className="text-4xl md:text-8xl font-accent font-bold mb-4">КОНТАКТЫ</h2>
            <div className="w-20 h-1 bg-[#ccff00]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
            {/* Address Info */}
            <div className="flex flex-col">
              <p className="text-[10px] font-black tracking-[0.4em] text-white/30 uppercase mb-6">Адрес студии</p>
              <p className="text-2xl md:text-3xl font-bold leading-tight">КЕМЕРОВО,<br />УЛ. ГЕОДЕЗИЧЕСКАЯ, 1/3</p>
              <div className="mt-8 flex gap-4">
                 <div className="p-3 border border-white/5 bg-white/5 rounded-lg flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Open 24/7</span>
                 </div>
              </div>
            </div>

            {/* Dynamic Contacts */}
            {contacts.map((contact, idx) => (
              <div key={idx} className="flex flex-col">
                <p className="text-[10px] font-black tracking-[0.4em] text-white/30 uppercase mb-6">Связь: {contact.label}</p>
                <p className="text-2xl md:text-3xl font-bold mb-8 hover:text-[#ccff00] transition-colors cursor-default">
                  {contact.phone}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <a 
                    href={contact.vk} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[80px] py-4 border border-white/10 flex items-center justify-center font-bold text-[10px] tracking-widest hover:bg-[#ccff00] hover:text-black transition-all uppercase rounded-sm"
                  >
                    VK
                  </a>
                  <a 
                    href={contact.tg} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[80px] py-4 border border-white/10 flex items-center justify-center font-bold text-[10px] tracking-widest hover:bg-[#ccff00] hover:text-black transition-all uppercase rounded-sm"
                  >
                    Telegram
                  </a>
                  <a 
                    href={`https://wa.me/${contact.cleanPhone}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[80px] py-4 border border-white/10 flex items-center justify-center font-bold text-[10px] tracking-widest hover:bg-[#ccff00] hover:text-black transition-all uppercase rounded-sm"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative text background */}
      <div className="mt-32 opacity-[0.02] pointer-events-none select-none">
        <h3 className="text-[12vw] font-accent font-black leading-none text-center whitespace-nowrap">
          GET IN TOUCH • WOODBAZE • GET IN TOUCH •
        </h3>
      </div>
    </div>
  );
};

export default Contact;
