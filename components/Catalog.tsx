
import React, { useState } from 'react';
import { Product } from '../types';

const products: Product[] = [
  { id: '1', name: 'Обеденный стол "Nordic"', description: 'Массив дуба, натуральное масло', price: 'от 45 000 ₽', image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=600&auto=format&fit=crop', category: 'tables' },
  { id: '2', name: 'Стул "Craftsman"', description: 'Ясень, эргономичный дизайн', price: '12 500 ₽', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=600&auto=format&fit=crop', category: 'chairs' },
  { id: '3', name: 'Стеллаж "Loft Style"', description: 'Металл и старая сосна', price: '28 000 ₽', image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=600&auto=format&fit=crop', category: 'storage' },
  { id: '4', name: 'Консоль "Elegance"', description: 'Карагач, живой край', price: '32 000 ₽', image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=600&auto=format&fit=crop', category: 'tables' },
  { id: '5', name: 'Полка для книг', description: 'Дуб, скрытый крепеж', price: '8 000 ₽', image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=600&auto=format&fit=crop', category: 'storage' },
  { id: '6', name: 'Журнальный столик', description: 'Спил ореха, эпоксидная смола', price: '19 500 ₽', image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=600&auto=format&fit=crop', category: 'tables' },
];

const Catalog: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  const categories = [
    { id: 'all', label: 'Все' },
    { id: 'tables', label: 'Столы' },
    { id: 'chairs', label: 'Стулья' },
    { id: 'storage', label: 'Хранение' },
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Наш Каталог</h2>
        <div className="w-20 h-1 bg-[#5d4037] mx-auto mb-8"></div>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Каждое изделие уникально. Мы подбираем текстуру дерева так, чтобы она стала украшением вашего интерьера.
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === cat.id ? 'bg-[#5d4037] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProducts.map(product => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative overflow-hidden aspect-[4/5] mb-4">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="bg-white text-black px-6 py-3 text-xs font-bold uppercase tracking-widest">
                  Подробнее
                </button>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-1">{product.name}</h3>
            <p className="text-gray-500 text-sm mb-2">{product.description}</p>
            <p className="text-[#5d4037] font-semibold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
