import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { List, Building2, MapPin, Lightbulb, Users, Wrench, Play, Target, Coins } from "lucide-react";

const sections = [
  { number: 1, title: "Présentation Entreprise", icon: Building2, description: "Les Boutiques Nicko et leur activité", id: "entreprise" },
  { number: 2, title: "Mise en Situation", icon: MapPin, description: "Contexte, problématique et objectifs stratégiques", id: "mise-en-situation" },
  { number: 3, title: "Analyse et Solutions", icon: Lightbulb, description: "NICKOPLUS PRO : fonctionnalités détaillées", id: "analyse-solutions" },
  { number: 4, title: "Management de Projet", icon: Users, description: "Équipe, planning, budget et gestion des risques", id: "management" },
  { number: 5, title: "Réalisations", icon: Wrench, description: "Architecture technique et réalisations", id: "realisations" },
  { number: 6, title: "Démonstration", icon: Play, description: "Présentation en direct de l'application", id: "demonstration" },
  { number: 7, title: "Conclusion et Perspectives", icon: Target, description: "Impact, bilan et vision future", id: "impact" },
];

export const TableOfContentsSlide = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", inline: "start" });
    }
  };

  return (
    <SlideWrapper id="sommaire">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-primary/10 rounded-xl">
          <List className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Sommaire
        </h2>
      </div>

      <p className="text-lg text-muted-foreground mb-10">
        Plan de la présentation — <span className="font-semibold">18 slides</span>
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((section, i) => (
          <motion.button
            key={section.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -2 }}
            onClick={() => scrollToSection(section.id)}
            className="flex items-start gap-4 p-4 card-gradient rounded-xl border border-border/50 hover:border-primary/50 transition-all text-left group"
          >
            {/* Number */}
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <span className="text-lg font-bold text-gradient">{section.number}</span>
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <section.icon className="w-3 h-3 text-primary flex-shrink-0" />
                <h3 className="text-sm font-semibold group-hover:text-primary transition-colors truncate">
                  {section.title}
                </h3>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2">
                {section.description}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Slide count */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-8 flex flex-wrap justify-center gap-3"
      >
        {[
          { section: "Intro", count: 2 },
          { section: "Entreprise", count: 1 },
          { section: "Situation", count: 2 },
          { section: "Solutions", count: 3 },
          { section: "Management", count: 3 },
          { section: "Réalisations", count: 2 },
          { section: "Démo", count: 1 },
          { section: "Conclusion", count: 3 },
        ].map((item) => (
          <span key={item.section} className="px-3 py-1 glass-effect rounded-full text-xs">
            {item.section} <span className="text-primary font-semibold">({item.count})</span>
          </span>
        ))}
      </motion.div>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
      />
    </SlideWrapper>
  );
};
