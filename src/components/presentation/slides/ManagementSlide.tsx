import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { Users, Calendar, GitBranch, CheckSquare, GraduationCap } from "lucide-react";

const team = [
  { name: "Kenmogne", role: "Chef de projet & Relation client", initial: "K" },
  { name: "Bedian", role: "Développement Frontend & UX", initial: "B" },
  { name: "Kogne Verra", role: "Infrastructure & Déploiement", initial: "V" },
  { name: "Kamdem", role: "Qualité & Tests", initial: "K" },
];

const methodology = [
  { phase: "Cadrage", duration: "2 semaines", tasks: "Analyse besoins, cahier des charges" },
  { phase: "Conception", duration: "2 semaines", tasks: "Maquettes, architecture technique" },
  { phase: "Développement", duration: "6 semaines", tasks: "Sprints agiles, intégration continue" },
  { phase: "Tests & Déploiement", duration: "2 semaines", tasks: "Recette, mise en production" },
];

export const ManagementSlide = () => {
  return (
    <SlideWrapper id="management" slideNumber={3} sectionTitle="Management de Projet">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-primary/20 rounded-xl">
          <Users className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Management de <span className="text-gradient">Projet</span>
        </h2>
      </div>

      {/* Team */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Users className="w-5 h-5 text-primary" />
          Équipe projet
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="p-4 card-gradient rounded-xl border border-border/50 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-lg font-bold">
                {member.initial}
              </div>
              <p className="font-semibold text-sm">{member.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Supervisor */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="p-4 glass-effect rounded-xl mb-12 inline-flex items-center gap-4"
      >
        <GraduationCap className="w-5 h-5 text-primary" />
        <div>
          <span className="text-sm text-muted-foreground">Superviseur : </span>
          <span className="font-semibold">Igor Ewolo</span>
          <span className="text-muted-foreground"> — Ucac-Icam</span>
        </div>
      </motion.div>

      {/* Methodology */}
      <div>
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          Méthodologie & Planning
        </h3>
        <div className="space-y-4">
          {methodology.map((phase, i) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-4 card-gradient rounded-xl border border-border/50"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="text-lg font-bold text-gradient">{i + 1}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-semibold">{phase.phase}</span>
                  <span className="px-2 py-0.5 bg-secondary rounded text-xs text-muted-foreground">
                    {phase.duration}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{phase.tasks}</p>
              </div>
              <GitBranch className="w-4 h-4 text-primary/50" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-8 flex flex-wrap gap-3"
      >
        <span className="text-sm text-muted-foreground">Outils :</span>
        {["Git", "Lovable", "Notion", "Discord", "Supabase"].map((tool) => (
          <span key={tool} className="px-3 py-1 glass-effect rounded-full text-sm">
            {tool}
          </span>
        ))}
      </motion.div>
    </SlideWrapper>
  );
};
