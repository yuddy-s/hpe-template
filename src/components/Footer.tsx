import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-brand-white py-24 border-t-8 border-brand-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {/* Brand Column with About Section */}
          <div className="space-y-10">
            <h3 className="text-4xl font-black uppercase tracking-tighter italic">
              HALAL PIZZA <span className="text-brand-orange">EXPRESS</span>
            </h3>
            <div className="space-y-4">
              <h4 className="text-sm font-black uppercase tracking-[0.3em] text-brand-orange">About Us</h4>
              <p className="text-brand-white/80 text-lg font-bold leading-relaxed uppercase tracking-tight">
                A New Hyde Park neighborhood staple. We pride ourselves on creating a space where everyone is welcome to enjoy a delicious, 100% Halal meal. From our family-owned kitchen to your table, we use time-honored techniques for that authentic, home-cooked feel.
              </p>
            </div>
          </div>

          {/* Quick Info */}
          <div className="space-y-10">
            <h4 className="text-2xl font-black uppercase tracking-widest border-b-4 border-brand-orange inline-block pb-2">LOCATION</h4>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <MapPin className="text-brand-red flex-shrink-0 mt-1" size={32} />
                <span className="text-2xl font-black tracking-tighter italic">{RESTAURANT_INFO.address}<br />{RESTAURANT_INFO.cityStateZip}</span>
              </div>
              <div className="flex items-center space-x-6">
                <Phone className="text-brand-orange flex-shrink-0" size={32} />
                <span className="text-3xl font-black tracking-tighter italic text-brand-red underline decoration-brand-orange decoration-4">{RESTAURANT_INFO.phone}</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-10">
            <h4 className="text-2xl font-black uppercase tracking-widest border-b-4 border-brand-orange inline-block pb-2">HOURS</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-6">
                <Clock className="text-brand-orange flex-shrink-0 mt-1" size={32} />
                <div className="flex flex-col text-2xl font-black tracking-tighter italic uppercase">
                  <div className="flex flex-col mb-4">
                    <span className="text-brand-red text-sm tracking-[0.3em] font-black">SUN - THU</span>
                    <span>11 AM - MIDNIGHT</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-brand-orange text-sm tracking-[0.3em] font-black">FRI - SAT</span>
                    <span>11 AM - 1 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-12 border-t border-brand-gray text-center flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-brand-orange font-black uppercase tracking-[0.3em] text-sm">
          <p>&copy; {new Date().getFullYear()} HALAL PIZZA EXPRESS • HILLSIDE AVE PRIDE</p>
          <div className="flex space-x-10">
            <a href="https://www.instagram.com/halalpizzaexpress/" target="blank_" rel="noopener noreferrer" className="hover:text-brand-red transition-all transform hover:scale-125 font-black">INSTAGRAM</a>
            <a href="https://www.facebook.com/profile.php?id=61577647206526#" target="blank_" rel="noopener noreferrer" className="hover:text-brand-red transition-all transform hover:scale-125 font-black">FACEBOOK</a>
            <a href="https://www.yelp.com/search?find_desc=Halal%20Pizza&find_loc=New%20Hyde%20Park,%20NY%2011040&msockid=24b636ed43f06afd0f7825e142246b78" target="blank_" rel="noopener noreferrer" className="hover:text-brand-red transition-all transform hover:scale-125 font-black">YELP</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;