import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { Lightbulb, AlertCircle, ArrowRight, Zap } from "lucide-react";

const constraints = [
  "Budget limité (solution open-source)",
  "Connexion internet instable",
  "Personnel peu formé au numérique",
  "Multi-localisation des boutiques",
];

const solutionFeatures = [
  "Application web progressive (PWA) fonctionnant hors ligne",
  "Synchronisation automatique multi-boutiques",
  "Interface intuitive adaptée aux utilisateurs peu familiers avec le numérique",
  "Solution open-source pour maîtriser les coûts",
];

export const AnalyseSolutionsSlide = () => {
  return (
    <SlideWrapper id="analyse-solutions" slideNumber={3} sectionTitle="Analyse et Solutions">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-primary/20 rounded-xl">
          <Lightbulb className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Analyse & <span className="text-gradient">Solutions</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Constraints */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-6 card-gradient rounded-2xl border border-border/50"
        >
          <div className="flex items-center gap-2 mb-6">
            <AlertCircle className="w-5 h-5 text-accent" />
            <h3 className="text-xl font-semibold">Contraintes identifiées</h3>
          </div>
          <div className="space-y-3">
            {constraints.map((constraint, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-3 glass-effect rounded-lg border border-accent/20"
              >
                <ArrowRight className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">{constraint}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Solution Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="p-6 card-gradient rounded-2xl border border-border/50"
        >
          <div className="flex items-center gap-2 mb-6">
            <Zap className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-semibold">Notre approche</h3>
          </div>
          <div className="space-y-3">
            {solutionFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-3 glass-effect rounded-lg border border-primary/20"
              >
                <div className="p-1 bg-primary/20 rounded-full flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-sm text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Solution highlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="p-8 glass-effect rounded-2xl border border-primary/30 glow-effect text-center"
      >
        <p className="text-lg text-muted-foreground mb-2">Notre réponse</p>
        <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
          NICKOPLUS PRO
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Une application web progressive (PWA) adaptée au contexte local, 
          fonctionnant hors ligne et optimisée pour une adoption rapide.
        </p>
      </motion.div>
    </SlideWrapper>
  );
};
