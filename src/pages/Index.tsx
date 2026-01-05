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

const Index = () => {
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
