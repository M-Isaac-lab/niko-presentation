import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronUp } from "lucide-react";

const slides = [
  { id: "titre", label: "Accueil" },
  { id: "contexte", label: "Contexte" },
  { id: "solution", label: "Solution" },
  { id: "business", label: "Business Model" },
  { id: "fonctionnalites", label: "Fonctionnalités" },
  { id: "architecture", label: "Architecture" },
  { id: "potentiel", label: "Potentiel" },
  { id: "demo", label: "Démo" },
  { id: "differenciation", label: "Différenciation" },
  { id: "deploiement", label: "Déploiement" },
  { id: "impact", label: "Impact" },
  { id: "vision", label: "Vision" },
  { id: "equipe", label: "Équipe" },
  { id: "contact", label: "Contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSlide, setActiveSlide] = useState("titre");

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const slide of slides.reverse()) {
        const element = document.getElementById(slide.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSlide(slide.id);
          break;
        }
      }
      slides.reverse();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSlide = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile menu button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-4 right-4 z-50 p-3 glass-effect rounded-lg md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </motion.button>

      {/* Desktop navigation dots */}
      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2"
      >
        {slides.map((slide) => (
          <button
            key={slide.id}
            onClick={() => scrollToSlide(slide.id)}
            className="group flex items-center justify-end gap-3"
          >
            <span className={`text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              activeSlide === slide.id ? "text-primary" : "text-muted-foreground"
            }`}>
              {slide.label}
            </span>
            <span className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSlide === slide.id 
                ? "bg-primary scale-150" 
                : "bg-muted-foreground/50 group-hover:bg-primary/70"
            }`} />
          </button>
        ))}
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 glass-effect md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-4">
              {slides.map((slide, i) => (
                <motion.button
                  key={slide.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollToSlide(slide.id)}
                  className={`text-lg font-medium transition-colors ${
                    activeSlide === slide.id ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {slide.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => scrollToSlide("titre")}
            className="fixed bottom-6 right-6 z-40 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
