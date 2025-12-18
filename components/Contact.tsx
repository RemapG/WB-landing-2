
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Recording',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Заявка отправлена! Мы перезвоним для подтверждения времени.');
    setFormData({ name: '', phone: '', service: 'Recording', message: '' });
  };

  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <h2 className="text-5xl md:text-7xl font-bold mb-10">Готов создать хитяру?</h2>
          <p className="text-white/40 text-xl leading-relaxed mb-12">
            Заполни форму, и наш менеджер свяжется с тобой в течение 15 минут для уточнения деталей проекта и бронирования времени.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <h4 className="text-[#c4a484] font-black uppercase tracking-widest text-xs mb-4">Бронирование</h4>
              <p className="font-bold">+7 (900) 123-45-67</p>
              <p className="text-white/40 text-sm mt-1">WA / TG / Call</p>
            </div>
            <div>
              <h4 className="text-[#c4a484] font-black uppercase tracking-widest text-xs mb-4">Локация</h4>
              <p className="font-bold">Москва</p>
              <p className="text-white/40 text-sm mt-1">ул. Производственная, 12</p>
            </div>
          </div>
        </div>

        <div className="bg-[#111] p-10 rounded-3xl border border-white/5 relative">
          <div className="absolute -top-6 -left-6 bg-[#c4a484] text-black font-black px-6 py-2 rounded-full text-xs uppercase tracking-widest">
            Order session
          </div>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-black text-white/30 mb-3">Имя / Никнейм</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-[#c4a484] outline-none transition-all text-white"
                  placeholder="Ваш псевдоним"
                  required
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-black text-white/30 mb-3">Телефон</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-[#c4a484] outline-none transition-all text-white"
                  placeholder="+7 (___) ___-__-__"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-black text-white/30 mb-3">Тип услуги</label>
              <select 
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-[#c4a484] outline-none transition-all text-white"
              >
                <option value="Recording">Запись (2000₽/час)</option>
                <option value="Mixing">Сведение (от 8000₽)</option>
                <option value="Mastering">Мастеринг (3500₽)</option>
                <option value="Production">Песня под ключ</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-black text-white/30 mb-3">Комментарий</label>
              <textarea 
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-[#c4a484] outline-none transition-all resize-none text-white"
                placeholder="Расскажите о своем стиле, референсы и т.д."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full py-5 bg-white text-black rounded-xl uppercase tracking-[0.2em] font-black hover:bg-[#c4a484] transition-all"
            >
              Отправить заявку
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
