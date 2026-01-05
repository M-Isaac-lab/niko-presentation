import { useEffect, useCallback } from "react";
import { Navigation } from "@/components/presentation/Navigation";
import { TitleSlide } from "@/components/presentation/slides/TitleSlide";
import { TableOfContentsSlide } from "@/components/presentation/slides/TableOfContentsSlide";
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
  "situation",
  "analyse",
  "solution",
  "business",
  "management",
  "realisations",
  "features",
  "architecture",
  "demonstration",
  "demo",
  "conclusion",
  "impact",
  "vision",
  "contact"
];

const Index = () => {
  const getCurrentSlideIndex = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    for (let i = SLIDE_IDS.length - 1; i >= 0; i--) {
      const element = document.getElementById(SLIDE_IDS[i]);
      if (element && element.offsetTop <= scrollPosition) {
        return i;
      }
    }
    return 0;
  }, []);

  const navigateToSlide = useCallback((index: number) => {
    if (index >= 0 && index < SLIDE_IDS.length) {
      const element = document.getElementById(SLIDE_IDS[index]);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
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
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      {/* Intro */}
      <TitleSlide />
      <TableOfContentsSlide />
      
      {/* Section 1: Mise en Situation */}
      <MiseEnSituationSlide />
      
      {/* Section 2: Analyse et Solutions */}
      <AnalyseSolutionsSlide />
      <SolutionSlide />
      <BusinessSlide />
      
      {/* Section 3: Management de Projet */}
      <ManagementSlide />
      
      {/* Section 4: Réalisations */}
      <RealisationsSlide />
      <FeaturesSlide />
      <ArchitectureSlide />
      
      {/* Section 5: Démonstration */}
      <DemonstrationSlide />
      <DemoSlide />
      
      {/* Section 6: Conclusion et Perspectives */}
      <ConclusionSlide />
      <ImpactSlide />
      <VisionSlide />
      <ContactSlide />
    </main>
  );
};

export default Index;
