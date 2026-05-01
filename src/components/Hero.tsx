import { motion } from "motion/react";
import { ChevronRight, ShieldCheck, Award, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <div className="medical-grid absolute inset-0 -z-10" />
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-red/20 blur-[100px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/10 border border-brand-red/20 rounded-sm text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-8">
              <Zap size={12} />
              Original Instruments Manufacturer
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-8 uppercase tracking-tighter">
              Precision <br />
              <span className="text-brand-red">Surgical</span> Tools.
            </h1>
            <p className="text-neutral-500 max-w-md text-sm leading-relaxed mb-10">
              Superior medical grade surgical instruments manufactured in Sialkot, Pakistan. ISO 13485 certified craftsmanship for global healthcare providers.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#products" className="group bg-brand-red text-white px-10 py-4 rounded-sm flex items-center gap-3 text-sm font-bold tracking-widest uppercase hover:bg-brand-red-dark transition-all">
                The Catalog
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16">
              <div className="space-y-2">
                <ShieldCheck className="text-brand-red" />
                <div className="text-2xl font-bold">ISO 9001</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider">Certified Quality</div>
              </div>
              <div className="space-y-2">
                <Award className="text-brand-red" />
                <div className="text-2xl font-bold">15+ Yrs</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider">Manufacturing Excellence</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200" 
                alt="Surgical Precision"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
            {/* Design accents */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-red rounded-full -z-10 blur-3xl opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
