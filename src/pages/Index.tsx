import { useEffect, useCallback, useRef } from "react";
import { Navigation } from "@/components/presentation/Navigation";
import { TitleSlide } from "@/components/presentation/slides/TitleSlide";
import { TableOfContentsSlide } from "@/components/presentation/slides/TableOfContentsSlide";
import { EntrepriseSlide } from "@/components/presentation/slides/EntrepriseSlide";
import { MiseEnSituationSlide } from "@/components/presentation/slides/MiseEnSituationSlide";
import { AnalyseSolutionsSlide } from "@/components/presentation/slides/AnalyseSolutionsSlide";
import { SolutionSlide } from "@/components/presentation/slides/SolutionSlide";
import { BusinessSlide } from "@/components/presentation/slides/BusinessSlide";
import { ManagementSlide } from "@/components/presentation/slides/ManagementSlide";
import { RealisationsSlide } from "@/components/presentation/slides/RealisationsSlide";
import { FeaturesSlide } from "@/components/presentation/slides/FeaturesSlide";
import { ArchitectureSlide } from "@/components/presentation/slides/ArchitectureSlide";
import { DemonstrationSlide } from "@/components/presentation/slides/DemonstrationSlide";
import { DemoSlide } from "@/components/presentation/slides/DemoSlide";
import { ConclusionSlide } from "@/components/presentation/slides/ConclusionSlide";
import { ImpactSlide } from "@/components/presentation/slides/ImpactSlide";
import { VisionSlide } from "@/components/presentation/slides/VisionSlide";
import { ContactSlide } from "@/components/presentation/slides/ContactSlide";

const SLIDE_IDS = [
  "titre",
  "sommaire",
  "entreprise",
  "mise-en-situation",
  "analyse-solutions",
  "solution",
  "business",
  "management",
  "realisations",
  "fonctionnalites",
  "architecture",
  "demonstration",
  "demo",
  "conclusion",
  "impact",
  "vision",
  "contact"
];

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const currentSlideRef = useRef(0);

  const getCurrentSlideIndex = useCallback(() => {
    if (!containerRef.current) return currentSlideRef.current;
    const container = containerRef.current;
    const slideWidth = window.innerWidth;
    const scrollPosition = container.scrollLeft;
    const index = Math.round(scrollPosition / slideWidth);
    currentSlideRef.current = Math.max(0, Math.min(index, SLIDE_IDS.length - 1));
    return currentSlideRef.current;
  }, []);

  const navigateToSlide = useCallback((index: number) => {
    if (index >= 0 && index < SLIDE_IDS.length) {
      currentSlideRef.current = index;
      const element = document.getElementById(SLIDE_IDS[index]);
      if (element && containerRef.current) {
        containerRef.current.scrollTo({
          left: index * window.innerWidth,
          behavior: "smooth"
        });
      }
    }
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    const currentIndex = getCurrentSlideIndex();
    
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      navigateToSlide(currentIndex + 1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      navigateToSlide(currentIndex - 1);
    }
  }, [getCurrentSlideIndex, navigateToSlide]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <main className="bg-background text-foreground overflow-hidden h-screen">
      <Navigation />
      
      <div 
        ref={containerRef}
        className="horizontal-scroll-container overflow-x-auto overflow-y-hidden scrollbar-hide"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {/* Intro */}
        <TitleSlide />
        <TableOfContentsSlide />
        
        {/* Section 1: Présentation Entreprise */}
        <EntrepriseSlide />
        
        {/* Section 2: Mise en Situation */}
        <MiseEnSituationSlide />
        
        {/* Section 3: Analyse et Solutions */}
        <AnalyseSolutionsSlide />
        <SolutionSlide />
        <BusinessSlide />
        
        {/* Section 4: Management de Projet */}
        <ManagementSlide />
        
        {/* Section 5: Réalisations */}
        <RealisationsSlide />
        <FeaturesSlide />
        <ArchitectureSlide />
        
        {/* Section 6: Démonstration */}
        <DemonstrationSlide />
        <DemoSlide />
        
        {/* Section 7: Conclusion et Perspectives */}
        <ConclusionSlide />
        <ImpactSlide />
        <VisionSlide />
        <ContactSlide />
      </div>
    </main>
  );
};

export default Index;
