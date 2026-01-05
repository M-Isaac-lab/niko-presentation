import { Navigation } from "@/components/presentation/Navigation";
import { TitleSlide } from "@/components/presentation/slides/TitleSlide";
import { ContextSlide } from "@/components/presentation/slides/ContextSlide";
import { SolutionSlide } from "@/components/presentation/slides/SolutionSlide";
import { BusinessSlide } from "@/components/presentation/slides/BusinessSlide";
import { FeaturesSlide } from "@/components/presentation/slides/FeaturesSlide";
import { ArchitectureSlide } from "@/components/presentation/slides/ArchitectureSlide";
import { PotentialSlide } from "@/components/presentation/slides/PotentialSlide";
import { DemoSlide } from "@/components/presentation/slides/DemoSlide";
import { DifferentiationSlide } from "@/components/presentation/slides/DifferentiationSlide";
import { DeploymentSlide } from "@/components/presentation/slides/DeploymentSlide";
import { ImpactSlide } from "@/components/presentation/slides/ImpactSlide";
import { VisionSlide } from "@/components/presentation/slides/VisionSlide";
import { TeamSlide } from "@/components/presentation/slides/TeamSlide";
import { ContactSlide } from "@/components/presentation/slides/ContactSlide";

const Index = () => {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <TitleSlide />
      <ContextSlide />
      <SolutionSlide />
      <BusinessSlide />
      <FeaturesSlide />
      <ArchitectureSlide />
      <PotentialSlide />
      <DemoSlide />
      <DifferentiationSlide />
      <DeploymentSlide />
      <ImpactSlide />
      <VisionSlide />
      <TeamSlide />
      <ContactSlide />
    </main>
  );
};

export default Index;
