import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { Users, Calendar, GitBranch, GraduationCap, MessageSquare, FileText } from "lucide-react";

const team = [
  { name: "KENMOGNE A. Yoann", role: "Chef de projet & Relation client", initial: "K" },
  { name: "BEDIAN I. Quentin", role: "Développement Frontend & UX", initial: "B" },
  { name: "KONGNE V. Joyce", role: "Infrastructure & Déploiement", initial: "V" },
  { name: "KAMDEM J. Léonard", role: "Qualité & Tests", initial: "K" },
  { name: "AMOUGOU F. Landry", role: "Designer UX/UI", initial: "A" },
];

const methodology = [
  { phase: "Étude du besoin", duration: "Semaine 1-2", tasks: "Démarrage, spécifications finalisées" },
  { phase: "Conception", duration: "Semaine 2-3", tasks: "Maquettes approuvées, architecture" },
  { phase: "Développement", duration: "Semaine 4-6", tasks: "Déploiement serveur, version beta validée" },
  { phase: "Tests & Formation", duration: "Semaine 7", tasks: "UAT complète, formation utilisateurs" },
  { phase: "Déploiement & Support", duration: "Semaine 8", tasks: "Production + accompagnement" },
];

const communication = [
  { actor: "Équipe", frequency: "Hebdomadaire", support: "Réunion", objective: "Coordination, levée de blocages" },
  { actor: "Cliente", frequency: "Bi-mensuel", support: "Réunion", objective: "Validation, feedback continu" },
  { actor: "Superviseur", frequency: "Mensuel", support: "Rapport", objective: "Suivi académique, conseils" },
];

export const ManagementSlide = () => {
  return (
    <SlideWrapper id="management" slideNumber={4} sectionTitle="Management de Projet">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-primary/20 rounded-xl">
          <Users className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Management de <span className="text-gradient">Projet</span>
        </h2>
      </div>

      {/* Team */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
          <Users className="w-5 h-5 text-primary" />
          Équipe projet (5 personnes)
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="p-2 card-gradient rounded-xl border border-border/50 text-center"
            >
              <div className="w-8 h-8 mx-auto mb-1 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-sm font-bold">
                {member.initial}
              </div>
              <p className="font-semibold text-sm leading-tight">{member.name}</p>
              <p className="text-sm text-muted-foreground mt-0.5 leading-tight">{member.role}</p>
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
        className="p-2 glass-effect rounded-xl mb-4 inline-flex items-center gap-2"
      >
        <GraduationCap className="w-4 h-4 text-primary" />
        <div>
          <span className="text-sm text-muted-foreground">Superviseur : </span>
          <span className="font-semibold text-sm">Igor Ewolo</span>
          <span className="text-muted-foreground text-sm"> — UCAC-ICAM</span>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-4">
        {/* Methodology */}
        <div>
          <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Planning (8 semaines)
          </h3>
          <div className="space-y-1.5">
            {methodology.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 p-2 card-gradient rounded-xl border border-border/50"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-gradient">{i + 1}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="font-semibold text-sm">{phase.phase}</span>
                    <span className="px-1.5 py-0.5 bg-secondary rounded text-xs text-muted-foreground">
                      {phase.duration}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate leading-tight">{phase.tasks}</p>
                </div>
                <GitBranch className="w-3 h-3 text-primary/50 flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Communication */}
        <div>
          <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-primary" />
            Communication structurée
          </h3>
          <div className="space-y-1.5">
            {communication.map((comm, i) => (
              <motion.div
                key={comm.actor}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="p-2 card-gradient rounded-xl border border-border/50"
              >
                <div className="flex items-center justify-between mb-0.5">
                  <span className="font-semibold text-sm">{comm.actor}</span>
                  <span className="px-1.5 py-0.5 bg-primary/10 rounded text-xs text-primary">
                    {comm.frequency}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-tight">{comm.objective}</p>
              </motion.div>
            ))}
          </div>

          {/* Governance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-3 p-2 glass-effect rounded-xl"
          >
            <h4 className="font-semibold text-sm mb-1.5 flex items-center gap-2">
              <FileText className="w-4 h-4 text-primary" />
              Gouvernance
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {["Matrice RACI", "Charte de projet", "Périmètre validé"].map((item) => (
                <span key={item} className="px-2 py-0.5 bg-secondary rounded text-sm">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tools */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-4 flex flex-wrap gap-2"
      >
        <span className="text-sm text-muted-foreground">Outils :</span>
        {["Git", "Lovable", "Notion", "Discord", "Supabase"].map((tool) => (
          <span key={tool} className="px-2 py-0.5 glass-effect rounded-full text-sm">
            {tool}
          </span>
        ))}
      </motion.div>
    </SlideWrapper>
  );
};
