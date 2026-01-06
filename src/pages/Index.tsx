import { useEffect, useCallback, useRef } from "react";
import { SlidesProvider } from "@/components/presentation/SlidesContext";
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
    </SlidesProvider>
  );
};

export default Index;

