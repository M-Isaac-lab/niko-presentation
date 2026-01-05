import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { Rocket, Check } from "lucide-react";

const phases = [
  {
    number: "1",
    title: "Phase 1",
    period: "Mois 1-2",
    tasks: [
      "Installation et configuration",
      "Formation équipe boutique Douala",
      "Migration données existantes",
    ],
  },
  {
    number: "2",
    title: "Phase 2",
    period: "Mois 3",
    tasks: [
      "Déploiement boutique Kribi",
      "Synchronisation test",
      "Ajustements feedback",
    ],
  },
  {
    number: "3",
    title: "Phase 3",
    period: "Mois 4-6",
    tasks: [
      "Optimisation basée sur usage",
      "Rapports d'impact mensuels",
      "Décision passage version payante",
    ],
  },
];

const support = [
  "Formation complète (8 heures)",
  "Support technique 6 mois",
  "Mises à jour gratuites",
];

export const DeploymentSlide = () => {
  return (
    <SlideWrapper id="deploiement" className="hero-gradient">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-primary/20 rounded-xl">
          <Rocket className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Plan de <span className="text-gradient">Déploiement</span>
        </h2>
      </div>

      <p className="text-lg text-muted-foreground mb-12">
        Mise en œuvre progressive et accompagnée
      </p>

      {/* Timeline */}
      <div className="relative mb-12">
        {/* Connection line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

        <div className="space-y-8">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative flex gap-6"
            >
              {/* Number */}
              <div className="hidden md:flex w-16 h-16 rounded-full bg-primary/20 border-2 border-primary items-center justify-center text-2xl font-bold text-primary shrink-0">
                {phase.number}
              </div>

              {/* Content */}
              <div className="flex-1 p-6 card-gradient rounded-2xl border border-border/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{phase.title}</h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {phase.period}
                  </span>
                </div>
                <div className="space-y-2">
                  {phase.tasks.map((task, j) => (
                    <div key={j} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {task}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Support included */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="p-6 glass-effect rounded-2xl"
      >
        <h3 className="text-xl font-semibold mb-4">Support inclus</h3>
        <div className="flex flex-wrap gap-4">
          {support.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-muted-foreground">
              <div className="p-1 bg-primary/20 rounded-full">
                <Check className="w-3 h-3 text-primary" />
              </div>
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </SlideWrapper>
  );
};
