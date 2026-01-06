import React, { useState } from 'react';
import { Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const res = await fetch("/api/contact", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if(!res.ok) throw new Error('Failed')

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({ ...formData, message: '' })
    } catch (e) {
      console.error(e)
      alert('Something went wrong. Please try again.')
    }

  };

  const MAPS_Key = import.meta.env.VITE_MAPS_API_KEY;
  const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?q=Halal+Pizza+Express+New+Hyde+Park+NY&key=${MAPS_Key}`;

  return (
    <div className="animate-in slide-in-from-right-4 duration-500 bg-brand-black min-h-screen">
      <section className="pt-24 pb-12 text-center relative overflow-hidden px-4">
        <h1 className="text-7xl md:text-[9rem] font-black uppercase tracking-tighter italic text-brand-white leading-none">
          GET IN <span className="text-brand-red">TOUCH</span>
        </h1>
        <div className="h-4 w-32 bg-brand-orange mx-auto mt-4 mb-8"></div>
        <p className="text-brand-orange max-w-lg mx-auto text-2xl font-black uppercase tracking-widest italic">Catering. Feedback. Shoutouts.</p>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Information */}
            <div className="space-y-16">
              <div>
                <h2 className="text-5xl font-black uppercase mb-12 tracking-tighter text-brand-white italic">THE <span className="text-brand-orange">SPOT</span></h2>
                <div className="space-y-12">
                  <div className="flex items-start space-x-8 group">
                    <div className="p-5 bg-brand-gray text-brand-orange group-hover:bg-brand-orange group-hover:text-brand-black transition-all duration-300 border-b-4 border-brand-red shadow-xl">
                      <MapPin size={32} />
                    </div>
                    <div>
                      <h4 className="font-black text-brand-white uppercase text-xl tracking-widest mb-2">LOCATION</h4>
                      <p className="text-brand-orange text-2xl font-black leading-snug tracking-tighter italic">{RESTAURANT_INFO.address}<br />{RESTAURANT_INFO.cityStateZip}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-8 group">
                    <div className="p-5 bg-brand-gray text-brand-orange group-hover:bg-brand-orange group-hover:text-brand-black transition-all duration-300 border-b-4 border-brand-red shadow-xl">
                      <Phone size={32} />
                    </div>
                    <div>
                      <h4 className="font-black text-brand-white uppercase text-xl tracking-widest mb-2">DIRECT LINE</h4>
                      <p className="text-brand-orange text-3xl font-black leading-snug italic underline decoration-brand-red decoration-4 underline-offset-8">{RESTAURANT_INFO.phone}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Street Map Visual */}
              <div className="bg-brand-gray overflow-hidden h-80 shadow-[15px_15px_0px_#F7931E] relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <iframe title='map' loading="lazy" width={525} height={275} referrerPolicy="no-referrer-when-downgrade" src={googleMapsUrl}></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-brand-gray p-12 md:p-16 shadow-[20px_20px_0px_#E53935] relative">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-10 py-20 animate-in fade-in zoom-in duration-500">
                   <div className="w-32 h-32 bg-brand-orange text-brand-black flex items-center justify-center shadow-xl rotate-12">
                      <CheckCircle size={72} strokeWidth={3} />
                   </div>
                   <h3 className="text-5xl font-black uppercase tracking-tighter text-brand-white italic">SENT & SEALED!</h3>
                   <p className="text-brand-orange text-xl font-black uppercase tracking-widest">Talk to you soon.</p>
                   <button 
                    onClick={() => setSubmitted(false)}
                    className="px-10 py-4 bg-brand-white text-brand-black font-black hover:bg-brand-orange transition-all uppercase tracking-widest text-sm italic"
                   >
                     SEND ANOTHER
                   </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <h3 className="text-4xl font-black uppercase mb-4 tracking-tighter text-brand-white italic">SAY <span className="text-brand-orange">SOMETHING</span></h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-xs font-black text-brand-orange uppercase tracking-[0.3em]">Full Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full px-6 py-5 bg-brand-black border-2 border-brand-orange/20 focus:border-brand-orange text-brand-white transition-all font-black text-lg outline-none"
                        placeholder="ALI"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-xs font-black text-brand-orange uppercase tracking-[0.3em]">Email</label>
                      <input 
                        required
                        type="email" 
                        className="w-full px-6 py-5 bg-brand-black border-2 border-brand-orange/20 focus:border-brand-orange text-brand-white transition-all font-black text-lg outline-none"
                        placeholder="ALI@GMAIL.COM"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-black text-brand-orange uppercase tracking-[0.3em]">Message</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full px-6 py-5 bg-brand-black border-2 border-brand-orange/20 focus:border-brand-orange text-brand-white transition-all font-black text-lg outline-none resize-none"
                      placeholder="WHAT'S UP?"
                      value={(formData.message)}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-brand-red text-brand-white font-black py-6 hover:bg-brand-orange hover:text-brand-black transition-all duration-300 shadow-xl flex items-center justify-center space-x-4 uppercase tracking-[0.2em] text-2xl italic"
                    onClick={() => console.log(formData)}
                  >
                    <span>SEND MESSAGE</span>
                    <Send size={28} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;