import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700 bg-brand-black">
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-6 bg-brand-orange opacity-20 group-hover:opacity-40 transition-opacity blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=1974&auto=format&fit=crop" 
                alt="Cooking Halal Pizza" 
                className="relative z-10 border-[12px] border-brand-gray shadow-2xl group-hover:scale-[1.03] transition-transform duration-700 w-full"
              />
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-red rounded-none z-20 hidden md:flex items-center justify-center border-[10px] border-brand-black shadow-2xl rotate-6 group-hover:rotate-0 transition-transform duration-500">
                <span className="text-brand-white font-black text-center text-4xl uppercase leading-none italic tracking-tighter">ESTD.<br/>NHP</span>
              </div>
            </div>
            
            <div className="space-y-12">
              <div>
                <span className="text-brand-orange font-black uppercase tracking-[0.4em] text-xl mb-6 block italic">THE REAL DEAL</span>
                <h1 className="text-7xl md:text-9xl font-black uppercase leading-[0.8] tracking-tighter text-brand-white italic">
                  BOLD <br />
                  <span className="text-brand-red">LEGACY.</span>
                </h1>
              </div>
              
              <div className="h-4 w-32 bg-brand-orange mb-10"></div>
              
              <p className="text-2xl text-brand-white leading-tight font-black uppercase tracking-tight">
                Halal Pizza Express is more than a slice shop—it's a New Hyde Park institution. High contrast, high flavor, zero compromises.
              </p>
              
              <p className="text-xl text-brand-orange font-bold leading-relaxed tracking-wide">
                We brought the NYC street-food soul to Hillside Ave. Our mission has always been to serve the community with 100% Halal options that actually taste like authentic New York pizza.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-10">
                <div className="bg-brand-gray p-10 shadow-2xl border-l-8 border-brand-orange">
                  <p className="text-5xl font-black text-brand-white mb-2">100%</p>
                  <p className="text-lg font-black uppercase tracking-[0.3em] text-brand-orange">HALAL CERTIFIED</p>
                </div>
                <div className="bg-brand-red p-10 shadow-2xl border-l-8 border-brand-black">
                  <p className="text-5xl font-black text-brand-white mb-2 italic">DAILY</p>
                  <p className="text-lg font-black uppercase tracking-[0.3em] text-brand-black">FRESH KNEADED</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;