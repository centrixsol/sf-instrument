import { motion } from "motion/react";
import { PRODUCTS } from "../constants";
import { Search, Filter, Download } from "lucide-react";
import { useState } from "react";

export default function ProductCatalog() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(PRODUCTS.map(p => p.category))];

  const filteredProducts = filter === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <section id="products" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-[10px] font-bold text-brand-red uppercase tracking-[0.4em] mb-4">Precision Catalog</h2>
            <h3 className="text-5xl font-bold uppercase tracking-tight mb-4">Instruments</h3>
            <a 
              href="https://firebasestorage.googleapis.com/v0/b/dfpythonclient.firebasestorage.app/o/Surgiical.pdf?alt=media&token=ef96762f-a093-4ebd-9334-a956569d069c"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[10px] font-bold text-neutral-400 hover:text-brand-red transition-colors uppercase tracking-widest border border-white/5 px-4 py-2 rounded-sm"
            >
              <Download size={14} />
              Download Full PDF Catalog
            </a>
          </div>
          
          <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap border ${
                  filter === cat 
                    ? "bg-brand-red border-brand-red text-white" 
                    : "bg-transparent border-white/10 text-neutral-500 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, idx) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="group bg-neutral-900 border border-white/5 rounded-sm overflow-hidden hover:border-brand-red/40 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden bg-neutral-800">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                />
              </div>
              <div className="p-6">
                <div className="text-[10px] text-brand-red font-bold uppercase tracking-widest mb-2">{product.category}</div>
                <h4 className="text-lg font-bold mb-3 uppercase tracking-tight">{product.name}</h4>
                <p className="text-neutral-500 text-xs leading-relaxed mb-6 h-12 line-clamp-3">{product.description}</p>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('openQuoteModal', { detail: product.category })) }
                  className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-white border-b border-white/10 pb-1 hover:border-brand-red transition-all cursor-pointer"
                >
                  Request Quote
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 p-8 border border-white/5 bg-neutral-900/50 flex flex-col md:flex-row items-center justify-between gap-6 rounded-sm"
        >
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold uppercase tracking-tight mb-2">Can't find a specific tool?</h4>
            <p className="text-neutral-500 text-sm">Our full inventory includes over 5,000 precision surgical instruments.</p>
          </div>
          <a 
            href="https://firebasestorage.googleapis.com/v0/b/dfpythonclient.firebasestorage.app/o/Surgiical.pdf?alt=media&token=ef96762f-a093-4ebd-9334-a956569d069c"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-black px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-brand-red hover:text-white transition-all whitespace-nowrap"
          >
            Download Full Inventory (PDF)
          </a>
        </motion.div>
      </div>
    </section>
  );
}
