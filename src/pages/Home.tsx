import React from 'react';
import { ShoppingBag, ChevronRight, Star, CookingPot, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 bg-brand-black">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[20000ms] hover:scale-110"
          style={{ 
            backgroundImage: `linear-gradient(rgba(11, 11, 13, 0.7), rgba(11, 11, 13, 0.9)), url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop')` 
          }}
        />
        
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#F7931E 1px, transparent 1px), linear-gradient(90deg, #F7931E 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-brand-white z-10">
          <div className="inline-block px-8 py-2 bg-brand-red text-white font-black uppercase tracking-[0.4em] mb-10 skew-x-[-12deg] shadow-[5px_5px_0px_#F7931E]">
            NEW HYDE PARK, NY
          </div>
          
          <h1 className="text-7xl md:text-[10rem] font-black uppercase mb-10 drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] leading-[0.8] tracking-tighter italic">
            REAL <span className="text-brand-orange">HALAL</span> <br />
            <span className="text-brand-white">PIZZA</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-brand-white mb-16 max-w-4xl mx-auto font-bold drop-shadow-lg leading-tight uppercase tracking-tight">
            The Boldest Flavor in Queens & Nassau. <br className="hidden md:block" />
            Hand-Tossed. 100% Halal. Fresh Daily.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-10">
            <a 
              href="#menu" 
              className="group relative bg-brand-orange text-brand-black px-12 py-6 rounded-none font-black text-2xl hover:bg-brand-red hover:text-white transition-all duration-300 shadow-[8px_8px_0px_#E53935] uppercase tracking-tighter w-full sm:w-auto text-center"
            >
              <div className="flex items-center justify-center space-x-3">
                <span>VIEW MENU</span>
                <ChevronRight size={28} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </a>
            <a 
              href="#order" 
              className="group bg-brand-white text-brand-black px-12 py-6 rounded-none font-black text-2xl hover:bg-brand-orange transition-all duration-300 shadow-[8px_8px_0px_#0B0B0D] border-2 border-brand-black flex items-center justify-center space-x-3 uppercase tracking-tighter w-full sm:w-auto text-center"
            >
              <ShoppingBag size={28} />
              <span>ORDER NOW</span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-1 h-12 bg-gradient-to-b from-brand-orange to-transparent"></div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-32 bg-brand-black relative px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 border-b-8 border-brand-red pb-10">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-brand-white leading-none">
              WHY WE <span className="text-brand-orange italic">ROCK</span>
            </h2>
            <p className="text-brand-orange font-black uppercase tracking-widest text-xl mt-4 md:mt-0 italic">NYC Street Aesthetic Since Day One</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "100% HALAL MEATS", 
                description: "Strictly sourced, never compromised. We serve our community with the highest standards of quality and tradition.",
                icon: <Star className="text-brand-red" fill="currentColor" size={60} />
              },
              { 
                title: "HAND-CRAFTED DOUGH", 
                description: "Freshly made in-house every morning. Our dough is never frozen, giving you that perfect NYC crust and airy bite.",
                icon: <CookingPot className="text-brand-white" size={60} strokeWidth={2.5} />
              },
              { 
                title: "LOCAL PRIDE", 
                description: "Right in the heart of Hillside Ave. We are the destination for authentic flavor and bold neighborhood vibes.",
                icon: <Navigation className="text-brand-red" fill="currentColor" size={60} />
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-brand-gray p-12 rounded-none border-l-8 border-brand-orange hover:bg-brand-orange group transition-all duration-500 shadow-2xl h-full flex flex-col">
                <div className="mb-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">{item.icon}</div>
                <h3 className="text-3xl font-black uppercase mb-6 tracking-tighter group-hover:text-brand-black transition-colors">{item.title}</h3>
                <p className="text-brand-white text-xl font-medium leading-relaxed group-hover:text-brand-black transition-colors">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Visual Break / Quote */}
      <section className="py-24 bg-brand-orange text-brand-black overflow-hidden relative">
        <div className="absolute top-0 left-0 text-[15rem] font-black opacity-10 whitespace-nowrap pointer-events-none -translate-y-1/2">
          HALAL PIZZA EXPRESS • HALAL PIZZA EXPRESS • 
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">
            "THE BEST SLICE ON <span className="underline decoration-brand-red decoration-8">HILLSIDE AVE</span>"
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Home;