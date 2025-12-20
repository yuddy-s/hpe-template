import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const categories = ['All', 'Hot Dishes', 'Sides', 'Beverages', 'Coupons'];
  
  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="animate-in fade-in duration-500 bg-brand-black min-h-screen">
      <section className="bg-brand-black pt-24 pb-16 text-center relative overflow-hidden px-4">
        <h1 className="text-7xl md:text-[9rem] font-black uppercase mb-4 tracking-tighter italic text-brand-white">
          THE <span className="text-brand-orange">MENU</span>
        </h1>
        <div className="h-4 w-48 bg-brand-red mx-auto -mt-4 mb-8"></div>
        <p className="text-brand-orange max-w-2xl mx-auto text-2xl font-black uppercase tracking-widest italic">Legendary Pies. Bold Pastas. Big Flavors.</p>
      </section>

      {/* Category Filter */}
      <div className="bg-brand-black border-y border-brand-orange/20 sticky top-24 z-40 overflow-x-auto whitespace-nowrap px-4 py-8 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-start md:justify-center space-x-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-10 py-4 font-black uppercase text-lg tracking-widest transition-all duration-300 skew-x-[-10deg] ${
                activeCategory === cat 
                  ? 'bg-brand-orange text-brand-black shadow-[5px_5px_0px_#E53935] scale-105' 
                  : 'bg-brand-gray text-brand-white hover:bg-brand-red'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Menu Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredItems.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-brand-gray p-10 shadow-2xl border-t-4 border-brand-orange hover:border-brand-red transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-brand-orange/10 rounded-full group-hover:scale-[3] transition-transform duration-700"></div>
                
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-brand-white group-hover:text-brand-orange transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-brand-orange font-black text-2xl drop-shadow-md">
                    {item.price}
                  </span>
                </div>
                
                <div className="flex flex-col space-y-4 relative z-10">
                  <div className="flex items-center space-x-3">
                    <span className="text-[12px] font-black uppercase tracking-widest text-brand-black bg-brand-white px-3 py-1">
                      {item.category}
                    </span>
                    {item.description && (
                      <p className="text-sm text-brand-orange font-bold uppercase tracking-tight">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Specials Banner - Rebuilt for Bold Street Style */}
          <div className="mt-32 bg-brand-orange p-12 md:p-20 text-brand-black relative overflow-hidden shadow-[20px_20px_0px_#E53935]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-white/20 -mr-32 -mt-32 rounded-full"></div>
            
            <div className="relative z-10">
                <h2 className="text-6xl md:text-8xl font-black uppercase mb-12 italic tracking-tighter leading-none">
                    LIMITED <span className="text-brand-red">DEALS</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-brand-black text-brand-white p-10 border-b-8 border-brand-red hover:translate-y-[-10px] transition-transform duration-300">
                       <p className="text-brand-orange font-black uppercase mb-4 tracking-widest">Buy 2 Heros</p>
                       <p className="text-4xl font-black uppercase italic">GET 1 FREE</p>
                       <div className="h-1 w-12 bg-brand-orange mt-6"></div>
                    </div>
                    <div className="bg-brand-black text-brand-white p-10 border-b-8 border-brand-red hover:translate-y-[-10px] transition-transform duration-300">
                       <p className="text-brand-orange font-black uppercase mb-4 tracking-widest">Any Large Pie</p>
                       <p className="text-4xl font-black uppercase italic">$2.00 OFF</p>
                       <div className="h-1 w-12 bg-brand-orange mt-6"></div>
                    </div>
                    <div className="bg-brand-black text-brand-white p-10 border-b-8 border-brand-red hover:translate-y-[-10px] transition-transform duration-300">
                       <p className="text-brand-orange font-black uppercase mb-4 tracking-widest">Mon & Tue</p>
                       <p className="text-4xl font-black uppercase italic">$5.00 OFF</p>
                       <p className="text-xs text-brand-orange font-bold mt-2">Lg Cheese Pie Only</p>
                    </div>
                </div>
                
                <p className="mt-16 text-xl font-black uppercase tracking-tighter italic">* PICK-UP ONLY. SUBJECT TO AVAILABILITY. NO COMBINING DEALS.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;