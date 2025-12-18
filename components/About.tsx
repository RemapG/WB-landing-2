
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1520529157201-987820464293?q=80&w=800&auto=format&fit=crop" 
            alt="Studio Room" 
            className="rounded-3xl brightness-75"
          />
        </div>
        <div className="lg:w-1/2">
          <span className="text-[#c4a484] font-medium tracking-widest uppercase text-sm block mb-4">Наша Мастерская</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">WoodBaze — место, где рождаются хиты.</h2>
          <div className="space-y-6 text-white/50 leading-relaxed">
            <p>
              Основанная в 2014 году, наша студия прошла путь от гаражного энтузиазма до профессионального комплекса, где записываются топовые артисты СНГ. Мы создали пространство, в котором комфорт исполнителя встречается с бескомпромиссным техническим качеством.
            </p>
            <p>
              Почему WoodBaze? Потому что мы верим, что звук — это фундамент (Base) любого творчества, а теплая атмосфера дерева (Wood) в наших интерьерах помогает артистам раскрыться на 100%.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div>
                <p className="text-3xl font-bold text-white mb-1">500+</p>
                <p className="text-xs uppercase tracking-widest text-[#c4a484]">Выпущенных треков</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">24/7</p>
                <p className="text-xs uppercase tracking-widest text-[#c4a484]">Режим работы</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
