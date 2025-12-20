import React from 'react';
import { ExternalLink, Truck, Clock, ShieldCheck, PhoneCall } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';

const Order: React.FC = () => {
  return (
    <div className="animate-in zoom-in-95 duration-500 min-h-screen bg-brand-black py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-7xl md:text-9xl font-black uppercase mb-6 tracking-tighter italic text-brand-white">
            GET IT <span className="text-brand-red">NOW</span>
          </h1>
          <div className="h-4 w-32 bg-brand-orange mx-auto"></div>
          <p className="text-2xl text-brand-orange font-black uppercase tracking-widest mt-6">Late night. Hot. Ready.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {/* Pickup Card */}
          <div className="bg-brand-gray p-12 shadow-2xl border-l-8 border-brand-orange flex flex-col justify-between hover:translate-y-[-10px] transition-all duration-300">
            <div>
              <div className="w-24 h-24 bg-brand-orange text-brand-black rounded-none flex items-center justify-center mb-10 shadow-[10px_10px_0px_#E53935]">
                <PhoneCall size={52} strokeWidth={3} />
              </div>
              <h3 className="text-4xl font-black uppercase mb-6 tracking-tighter text-brand-white italic">DIRECT CALL</h3>
              <p className="text-brand-white text-xl mb-10 leading-relaxed font-medium">Place your order directly with the shop for the fastest service and the absolute best local pricing.</p>
            </div>
            <a 
              href={`tel:${RESTAURANT_INFO.phone.replace(/\D/g, '')}`} 
              className="w-full bg-brand-orange text-brand-black py-6 rounded-none font-black text-2xl text-center hover:bg-brand-red hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 shadow-[8px_8px_0px_#0B0B0D] uppercase italic"
            >
              <span>{RESTAURANT_INFO.phone}</span>
            </a>
          </div>

          {/* Delivery Card */}
          <div className="bg-brand-gray p-12 shadow-2xl border-l-8 border-brand-red flex flex-col justify-between hover:translate-y-[-10px] transition-all duration-300">
            <div>
              <div className="w-24 h-24 bg-brand-red text-brand-white rounded-none flex items-center justify-center mb-10 shadow-[10px_10px_0px_#F7931E]">
                <Truck size={52} strokeWidth={3} />
              </div>
              <h3 className="text-4xl font-black uppercase mb-6 tracking-tighter text-brand-white italic">APP DELIVERY</h3>
              <p className="text-brand-white text-xl mb-10 leading-relaxed font-medium">Find us on your favorite platforms for seamless delivery to your doorstep anywhere in NHP.</p>
              
              <div className="space-y-6 mb-8">
                {['Uber Eats', 'DoorDash', 'Grubhub'].map((app) => (
                  <a 
                    key={app}
                    href={`https://www.${app.toLowerCase().replace(' ', '')}.com`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-6 bg-brand-black rounded-none border-2 border-brand-gray hover:border-brand-orange transition-all duration-300 group"
                  >
                    <span className="font-black uppercase tracking-widest text-lg text-brand-white">{app}</span>
                    <ExternalLink size={24} className="text-brand-orange group-hover:scale-125 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="bg-brand-white p-12 md:p-16 text-brand-black flex flex-col md:flex-row items-center justify-between shadow-[20px_20px_0px_#F7931E] skew-x-[-2deg]">
          <div className="flex items-center space-x-8 mb-8 md:mb-0">
            <div className="p-6 bg-brand-black text-brand-orange">
              <Clock size={56} />
            </div>
            <div>
              <h4 className="text-4xl font-black uppercase tracking-tighter italic leading-none">WE NEVER SLEEP</h4>
              <p className="text-brand-red font-black text-xl uppercase tracking-widest">Open until 1 AM Weekends</p>
            </div>
          </div>
          <div className="text-center md:text-right">
             <div className="inline-block bg-brand-black text-brand-white px-8 py-4">
                <p className="font-black uppercase tracking-widest text-lg italic">DELIVERY RADIUS</p>
                <p className="font-bold text-2xl text-brand-orange">5 MILES • NEW HYDE PARK</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;