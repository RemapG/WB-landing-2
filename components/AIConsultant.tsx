
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Message } from '../types';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: 'Чё каво? Я WoodBaze AI. Готов разложить по полкам любой вопрос по звуку. Какой проект мутим?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages, userMessage].map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: 'Ты — свойский, дерзкий, но мега-профессиональный ИИ-консультант студии WoodBaze Studio. Общаешься на молодежном сленге (но без мата), используешь музыкальные термины. Ты знаешь всё про сведение, мастеринг и оборудование. Твоя цель — заинтересовать клиента и помочь ему сделать его трек хитом. Не будь занудным!',
        }
      });
      setMessages(prev => [...prev, { role: 'assistant', text: response.text || 'Сигнал потерян. Повтори-ка.' }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', text: 'Микрофон фонит. Давай в Телегу лучше.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#ccff00] text-black rounded-none shadow-[4px_4px_0px_white] flex items-center justify-center hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_white] transition-all"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          <span className="font-black text-xl">?</span>
        )}
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[320px] h-[450px] bg-black border-2 border-white flex flex-col shadow-[10px_10px_0px_rgba(204,255,0,0.5)] animate-in fade-in zoom-in duration-200">
          <div className="bg-white p-3 text-black font-accent font-bold text-xs flex justify-between items-center">
            <span>WB_CONSULTANT.EXE</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-black"></div>
              <div className="w-2 h-2 bg-black"></div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-[#0a0a0a]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-3 text-[13px] ${msg.role === 'user' ? 'bg-[#ccff00] text-black font-bold' : 'bg-white/5 text-white border border-white/10'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-white/10 bg-black">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Что по звуку?.."
                className="flex-grow bg-[#111] text-white text-xs border border-white/20 p-2 focus:outline-none focus:border-[#ccff00]"
              />
              <button onClick={handleSend} className="bg-white text-black px-3 font-bold text-xs">GO</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIConsultant;
