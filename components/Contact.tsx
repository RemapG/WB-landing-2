
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', msg: '' });

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/2">
          <div className="mb-12">
            <h2 className="text-4xl md:text-8xl font-accent font-bold mb-4">КОНТАКТЫ</h2>
            <div className="w-20 h-1 bg-[#ccff00]"></div>
          </div>
          
          <div className="space-y-12">
            <div>
              <p className="text-[10px] font-black tracking-[0.4em] text-white/30 uppercase mb-4">Адрес</p>
              <p className="text-xl md:text-3xl font-bold">МОСКВА, УЛ. ПРОИЗВОДСТВЕННАЯ, 12</p>
            </div>
            <div>
              <p className="text-[10px] font-black tracking-[0.4em] text-white/30 uppercase mb-4">Связь</p>
              <p className="text-xl md:text-3xl font-bold">+7 (900) 123-45-67</p>
              <p className="text-[#ccff00] text-sm mt-2 font-bold uppercase tracking-widest">Telegram / WhatsApp</p>
            </div>
            <div className="flex gap-4">
               {['VK', 'TG', 'YT'].map(s => (
                 <a key={s} href="#" className="w-12 h-12 border border-white/10 flex items-center justify-center font-bold text-xs hover:bg-[#ccff00] hover:text-black transition-all">{s}</a>
               ))}
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <form className="bg-black p-8 md:p-12 border border-white/5 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#ccff00]/10 flex items-center justify-center">
               <div className="w-2 h-2 bg-[#ccff00] animate-ping"></div>
            </div>
            <h3 className="text-2xl font-accent font-bold mb-10">ОСТАВИТЬ ЗАЯВКУ</h3>
            
            <div className="space-y-8">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="ИМЯ"
                  className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-[#ccff00] text-sm font-bold uppercase tracking-widest transition-all"
                />
              </div>
              <div className="relative">
                <input 
                  type="tel" 
                  placeholder="ТЕЛЕФОН"
                  className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-[#ccff00] text-sm font-bold uppercase tracking-widest transition-all"
                />
              </div>
              <div className="relative">
                <textarea 
                  rows={3}
                  placeholder="ЧТО НУЖНО СДЕЛАТЬ?"
                  className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-[#ccff00] text-sm font-bold uppercase tracking-widest transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full py-6 bg-[#ccff00] text-black font-accent font-bold text-sm hover:bg-white transition-all">
                ОТПРАВИТЬ / SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
