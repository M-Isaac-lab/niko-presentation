import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { List, Building2, MapPin, Lightbulb, Users, Wrench, Play, Target } from "lucide-react";

const sections = [
  { number: 1, title: "Présentation Entreprise", icon: Building2, description: "Les Boutiques Nicko et leur activité", id: "entreprise" },
  { number: 2, title: "Mise en Situation", icon: MapPin, description: "Contexte du projet et problématique RSE", id: "mise-en-situation" },
  { number: 3, title: "Analyse et Solutions", icon: Lightbulb, description: "Notre approche et la solution NICKOPLUS PRO", id: "analyse-solutions" },
  { number: 4, title: "Management de Projet", icon: Users, description: "Équipe, méthodologie et planification", id: "management" },
  { number: 5, title: "Réalisations", icon: Wrench, description: "Fonctionnalités développées et architecture", id: "realisations" },
  { number: 6, title: "Démonstration", icon: Play, description: "Présentation en direct de l'application", id: "demonstration" },
  { number: 7, title: "Conclusion et Perspectives", icon: Target, description: "Bilan, impact et vision future", id: "conclusion" },
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

      <p className="text-lg text-muted-foreground mb-12">
        Plan de la présentation
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((section, i) => (
          <motion.button
            key={section.number}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, x: 5 }}
            onClick={() => scrollToSection(section.id)}
            className="flex items-start gap-5 p-6 card-gradient rounded-2xl border border-border/50 hover:border-primary/50 transition-all text-left group"
          >
            {/* Number */}
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <span className="text-2xl font-bold text-gradient">{section.number}</span>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <section.icon className="w-4 h-4 text-primary" />
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {section.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {section.description}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
      />
    </SlideWrapper>
  );
};
