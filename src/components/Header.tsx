import { motion } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { CONTACT_INFO } from "../constants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-red rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-xl">SF</span>
            </div>
            <span className="text-xl font-bold tracking-tight">SF-INSTRUMENT</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-bold text-neutral-400">
            <a href="#home" className="hover:text-brand-red transition-colors tracking-widest">HOME</a>
            <a href="#products" className="hover:text-brand-red transition-colors tracking-widest">CATALOG</a>
            <a href="#blog" className="hover:text-brand-red transition-colors tracking-widest">BLOG</a>
            
            <div className="flex items-center gap-2 text-white border-l border-white/10 pl-8">
              <Phone size={14} className="text-brand-red" />
              <span className="tracking-widest">{CONTACT_INFO.phone}</span>
            </div>

            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('openQuoteModal'))}
              className="bg-brand-red text-white px-6 py-2 rounded-sm hover:bg-brand-red-dark transition-all tracking-wider"
            >
              GET QUOTATION
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-neutral-950 border-b border-white/5 px-4 py-8 space-y-6"
        >
          <div className="space-y-4">
            <a href="#home" className="block text-lg uppercase tracking-tight" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#products" className="block text-lg uppercase tracking-tight" onClick={() => setIsOpen(false)}>Products</a>
            <a href="#blog" className="block text-lg uppercase tracking-tight" onClick={() => setIsOpen(false)}>Blog</a>
          </div>

          <div className="pt-6 border-t border-white/5 space-y-4">
            <div className="flex items-center gap-3 text-neutral-400">
              <Phone size={18} className="text-brand-red" />
              <span className="font-bold">{CONTACT_INFO.phone}</span>
            </div>
            <button 
              className="w-full bg-brand-red text-white font-bold py-4 rounded-sm tracking-widest uppercase text-sm" 
              onClick={() => {
                setIsOpen(false);
                window.dispatchEvent(new CustomEvent('openQuoteModal'));
              }}
            >
              Get Quote
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
