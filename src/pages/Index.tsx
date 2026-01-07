import { useEffect, useCallback, useRef } from "react";
import { SlidesProvider } from "@/components/presentation/SlidesContext";
import { Navigation } from "@/components/presentation/Navigation";
import { TitleSlide } from "@/components/presentation/slides/TitleSlide";
import { TableOfContentsSlide } from "@/components/presentation/slides/TableOfContentsSlide";
import { EntrepriseSlide } from "@/components/presentation/slides/EntrepriseSlide";
import { MiseEnSituationSlide } from "@/components/presentation/slides/MiseEnSituationSlide";
import { ObjectivesSlide } from "@/components/presentation/slides/ObjectivesSlide";
import { AnalyseSolutionsSlide } from "@/components/presentation/slides/AnalyseSolutionsSlide";
import { SolutionSlide } from "@/components/presentation/slides/SolutionSlide";
import { SolutionDetailsSlide } from "@/components/presentation/slides/SolutionDetailsSlide";
import { BudgetSlide } from "@/components/presentation/slides/BudgetSlide";
import { ManagementSlide } from "@/components/presentation/slides/ManagementSlide";
import { PlanningSlide } from "@/components/presentation/slides/PlanningSlide";
import { RisksSlide } from "@/components/presentation/slides/RisksSlide";
import { RealisationsSlide } from "@/components/presentation/slides/RealisationsSlide";
import { ArchitectureSlide } from "@/components/presentation/slides/ArchitectureSlide";
import { DemonstrationSlide } from "@/components/presentation/slides/DemonstrationSlide";
import { ImpactSlide } from "@/components/presentation/slides/ImpactSlide";
import { RSESlide } from "@/components/presentation/slides/RSESlide";
import { BusinessModelSlide } from "@/components/presentation/slides/BusinessModelSlide";
import { ConclusionSlide } from "@/components/presentation/slides/ConclusionSlide";
import { ContactSlide } from "@/components/presentation/slides/ContactSlide";

const SLIDE_IDS = [
  "titre",
  "sommaire",
  // Section 1: Présentation Entreprise
  "entreprise",
  // Section 2: Mise en Situation
  "mise-en-situation",
  "objectifs",
  // Section 3: Analyse et Solutions  
  "analyse-solutions",
  "solution",
  "solution-details",
  // Section 4: Management de Projet
  "management",
  "planning",
  "budget",
  "risques",
  // Section 5: Réalisations
  "realisations",
  "architecture",
  // Section 6: Démonstration
  "demonstration",
  // Section 7: Conclusion et Perspectives
  "impact",
  "rse",
  "business-model",
  "conclusion",
  "contact"
];

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const getCurrentSlideIndex = useCallback(() => {
    if (!containerRef.current) return 0;
    const scrollPosition = containerRef.current.scrollLeft + window.innerWidth / 2;

    for (let i = SLIDE_IDS.length - 1; i >= 0; i--) {
      const element = document.getElementById(SLIDE_IDS[i]);
      if (element && element.offsetLeft <= scrollPosition) {
        return i;
      }
    }
    return 0;
  }, []);

  const navigateToSlide = useCallback((index: number) => {
    if (index >= 0 && index < SLIDE_IDS.length) {
      const element = document.getElementById(SLIDE_IDS[index]);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", inline: "start" });
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
    <SlidesProvider slideIds={SLIDE_IDS}>
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
          <ObjectivesSlide />

          {/* Section 3: Analyse et Solutions */}
          <AnalyseSolutionsSlide />
          <SolutionSlide />
          <SolutionDetailsSlide />

          {/* Section 4: Management de Projet */}
          <ManagementSlide />
          <PlanningSlide />
          <BudgetSlide />
          <RisksSlide />

          {/* Section 5: Réalisations */}
          <RealisationsSlide />
          <ArchitectureSlide />

          {/* Section 6: Démonstration */}
          <DemonstrationSlide />

          {/* Section 7: Conclusion et Perspectives */}
          <ImpactSlide />
          <RSESlide />
          <BusinessModelSlide />
          <ConclusionSlide />
          <ContactSlide />
        </div>
      </main>
    </SlidesProvider>
  );
};

export default Index;
