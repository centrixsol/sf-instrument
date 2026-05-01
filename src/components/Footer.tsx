import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { CONTACT_INFO } from "../constants";

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-red rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">SF</span>
              </div>
              <span className="text-lg font-bold tracking-tight">SF-INSTRUMENT</span>
            </div>
            <p className="text-neutral-600 text-[11px] leading-relaxed tracking-wide uppercase">
              Precision manufactured for excellence in healthcare. Industrial standards for global surgery.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-sm bg-neutral-900 flex items-center justify-center hover:bg-brand-red transition-all border border-white/5"><Facebook size={14} /></a>
              <a href="#" className="w-8 h-8 rounded-sm bg-neutral-900 flex items-center justify-center hover:bg-brand-red transition-all border border-white/5"><Twitter size={14} /></a>
              <a href="#" className="w-8 h-8 rounded-sm bg-neutral-900 flex items-center justify-center hover:bg-brand-red transition-all border border-white/5"><Instagram size={14} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-8">Navigation</h4>
            <ul className="space-y-3 text-neutral-600 text-[10px] font-bold uppercase tracking-widest">
              <li><a href="#products" className="hover:text-brand-red transition-colors">Catalog</a></li>
              <li><a href="#about" className="hover:text-brand-red transition-colors">About Us</a></li>
              <li><a href="#blog" className="hover:text-brand-red transition-colors">Insights</a></li>
              <li><button onClick={() => window.dispatchEvent(new CustomEvent('openQuoteModal'))} className="hover:text-brand-red transition-colors cursor-pointer">Quotation</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-8">Legal</h4>
            <ul className="space-y-3 text-neutral-600 text-[10px] font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-white transition-colors">ISO 13485:2016</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CE Markings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FDA Registry</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-8">Contact HUB</h4>
            <ul className="space-y-4 text-neutral-600 text-[11px] font-medium leading-relaxed">
              <li className="flex gap-3">
                <MapPin size={16} className="text-brand-red shrink-0" />
                <span>{CONTACT_INFO.address.split(',')[0]},<br />{CONTACT_INFO.address.split(',').slice(1).join(',')}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-brand-red shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex gap-3 text-neutral-400">
                <Mail size={16} className="text-brand-red shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-700">
          <p>© 2024 SF-INSTRUMENT SIALKOT. MANUFACTURED FOR LIFE.</p>
          <div className="flex gap-6">
            <span>Sialkot, Pakistan</span>
            <span className="text-brand-red">v1.2.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
