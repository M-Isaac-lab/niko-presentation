import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronUp } from "lucide-react";
import { useSlides } from "./SlidesContext";

const sections = [
  { id: "titre", label: "Accueil", section: 0 },
  { id: "sommaire", label: "Sommaire", section: 0 },
  { id: "entreprise", label: "1. Entreprise", section: 1 },
  { id: "mise-en-situation", label: "2. Mise en Situation", section: 2 },
  { id: "analyse-solutions", label: "3. Analyse & Solutions", section: 3 },
  { id: "solution", label: "Solution", section: 3 },
  { id: "business", label: "Business Model", section: 3 },
  { id: "management", label: "4. Management", section: 4 },
  { id: "realisations", label: "5. Réalisations", section: 5 },
  { id: "fonctionnalites", label: "Fonctionnalités", section: 5 },
  { id: "architecture", label: "Architecture", section: 5 },
  { id: "demonstration", label: "6. Démonstration", section: 6 },
  { id: "demo", label: "Démo Live", section: 6 },
  { id: "conclusion", label: "7. Conclusion", section: 7 },
  { id: "impact", label: "Impact", section: 7 },
  { id: "vision", label: "Vision", section: 7 },
  { id: "contact", label: "Contact", section: 7 },
];

export const Navigation = () => {
  const { slideIds } = useSlides();

  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSlide, setActiveSlide] = useState("titre");
  const [currentSlideNumber, setCurrentSlideNumber] = useState(1);
  const totalSlides = Math.max(1, slideIds.length);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector('.horizontal-scroll-container') as HTMLElement | null;
      if (!container) return;

      const scrollPosition = container.scrollLeft + window.innerWidth / 2;
      setShowScrollTop(container.scrollLeft > 500);

      const reversedSections = [...sections].reverse();
      for (const section of reversedSections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetLeft <= scrollPosition) {
          setActiveSlide(section.id);
          const slideIndex = slideIds.indexOf(section.id);
          setCurrentSlideNumber(slideIndex >= 0 ? slideIndex + 1 : 1);
          break;
        }
      }
    };

    const container = document.querySelector('.horizontal-scroll-container') as HTMLElement | null;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      // set initial state on mount
      handleScroll();
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [slideIds]);

  const scrollToSlide = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", inline: "start" });
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

      {/* Desktop navigation dots - now at bottom */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:flex gap-2 px-4 py-3 glass-effect rounded-full"
      >
        {sections.map((slide) => {
          const isMainSection = slide.section > 0 && slide.label.startsWith(String(slide.section));
          return (
            <button
              key={slide.id}
              onClick={() => scrollToSlide(slide.id)}
              className="group flex items-center justify-center relative"
              title={slide.label}
            >
              <span className={`transition-all duration-300 ${
                isMainSection 
                  ? `w-3 h-3 rounded-sm ${activeSlide === slide.id ? "bg-primary scale-125" : "bg-muted-foreground/50 hover:bg-primary/70"}`
                  : `w-2 h-2 rounded-full ${activeSlide === slide.id ? "bg-primary scale-150" : "bg-muted-foreground/30 hover:bg-primary/50"}`
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

      {/* Scroll to start button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => scrollToSlide("titre")}
            className="fixed bottom-6 right-6 z-40 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <ChevronUp className="w-5 h-5 rotate-[-90deg]" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
