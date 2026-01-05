import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronUp } from "lucide-react";

const sections = [
  { id: "titre", label: "Accueil", section: 0 },
  { id: "sommaire", label: "Sommaire", section: 0 },
  { id: "mise-en-situation", label: "1. Mise en Situation", section: 1 },
  { id: "analyse-solutions", label: "2. Analyse & Solutions", section: 2 },
  { id: "solution", label: "Solution", section: 2 },
  { id: "business", label: "Business Model", section: 2 },
  { id: "management", label: "3. Management", section: 3 },
  { id: "realisations", label: "4. Réalisations", section: 4 },
  { id: "fonctionnalites", label: "Fonctionnalités", section: 4 },
  { id: "architecture", label: "Architecture", section: 4 },
  { id: "demonstration", label: "5. Démonstration", section: 5 },
  { id: "demo", label: "Démo Live", section: 5 },
  { id: "conclusion", label: "6. Conclusion", section: 6 },
  { id: "impact", label: "Impact", section: 6 },
  { id: "vision", label: "Vision", section: 6 },
  { id: "contact", label: "Contact", section: 6 },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSlide, setActiveSlide] = useState("titre");
  const [currentSlideNumber, setCurrentSlideNumber] = useState(1);
  const totalSlides = 16;

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      const reversedSections = [...sections].reverse();
      for (const section of reversedSections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSlide(section.id);
          const index = sections.findIndex(s => s.id === section.id);
          setCurrentSlideNumber(index + 1);
          break;
        }
      }
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
      {/* Progress bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 h-1 bg-secondary"
      >
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent"
          style={{ width: `${(currentSlideNumber / totalSlides) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Slide counter */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-4 left-4 z-50 px-4 py-2 glass-effect rounded-full text-sm font-medium"
      >
        <span className="text-primary">{String(currentSlideNumber).padStart(2, '0')}</span>
        <span className="text-muted-foreground"> / {totalSlides}</span>
      </motion.div>

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
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-1"
      >
        {sections.map((slide) => {
          const isMainSection = slide.section > 0 && slide.label.startsWith(String(slide.section));
          return (
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
              <span className={`transition-all duration-300 ${
                isMainSection 
                  ? `w-3 h-3 rounded-sm ${activeSlide === slide.id ? "bg-primary scale-125" : "bg-muted-foreground/50 group-hover:bg-primary/70"}`
                  : `w-2 h-2 rounded-full ${activeSlide === slide.id ? "bg-primary scale-150" : "bg-muted-foreground/30 group-hover:bg-primary/50"}`
              }`} />
            </button>
          );
        })}
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
            <nav className="flex flex-col items-center justify-center h-full gap-3 overflow-y-auto py-16">
              {sections.map((slide, i) => {
                const isMainSection = slide.section > 0 && slide.label.startsWith(String(slide.section));
                return (
                  <motion.button
                    key={slide.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                    onClick={() => scrollToSlide(slide.id)}
                    className={`transition-colors ${
                      isMainSection 
                        ? "text-lg font-semibold" 
                        : "text-sm pl-4"
                    } ${
                      activeSlide === slide.id ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                  >
                    {slide.label}
                  </motion.button>
                );
              })}
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
