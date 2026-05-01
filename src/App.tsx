import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ProductCatalog from "./components/ProductCatalog";
import Blog from "./components/Blog";
import QuoteModal from "./components/QuoteModal";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-20 left-0 right-0 h-1 bg-brand-red z-50 origin-left"
        style={{ scaleX }}
      />

      <Header />
      
      <main>
        <Hero />
        <About />
        <ProductCatalog />
        <Blog />
      </main>

      <QuoteModal />
      <Footer />
    </div>
  );
}
