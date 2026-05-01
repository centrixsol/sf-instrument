import { motion } from "motion/react";
import { Factory, Globe2, Users2, ShieldCheck } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Factory, label: "Advanced Facility", value: "30k sqft" },
    { icon: Globe2, label: "Global Reach", value: "45+ Countries" },
    { icon: Users2, label: "Craftsmen", value: "200+" },
    { icon: ShieldCheck, label: "Compliance", value: "FDA Reg." },
  ];

  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-brand-red font-bold uppercase tracking-[0.4em] text-[10px] mb-4">Our Heritage</h2>
              <h3 className="text-5xl md:text-6xl font-bold leading-[0.9] uppercase tracking-tighter mb-8">
                Crafting <br />
                <span className="text-neutral-600">Reliability.</span>
              </h3>
            </div>
            
            <p className="text-neutral-500 text-sm leading-relaxed max-w-sm mb-12">
              Based in Sialkot, Pakistan—the global hub of surgical instrument manufacturing—SF-INSTRUMENT has dedicated decades to perfecting the art of stainless steel tool production. We serve the world's most demanding medical professionals.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="p-6 bg-neutral-900 border border-white/5 rounded-sm">
                  <stat.icon className="text-brand-red mb-4" size={20} />
                  <div className="text-white font-bold text-xl uppercase tracking-tighter mb-1">{stat.value}</div>
                  <div className="text-neutral-600 text-[10px] uppercase tracking-wider font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200" 
                alt="Manufacturing Quality"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-red/10 mix-blend-overlay" />
            </div>
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-red/10 blur-[80px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
