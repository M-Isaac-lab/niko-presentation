import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { Calendar, CheckCircle, Flag, Clock, ArrowRight, Zap } from "lucide-react";

const planning = [
  { week: "S1", phase: "Étude du besoin", tasks: "Analyse existant, interviews, spécifications", dates: "6-12 nov" },
  { week: "S2-3", phase: "Conception", tasks: "Maquettes UI/UX, architecture, UML", dates: "13-26 nov" },
  { week: "S4-6", phase: "Développement", tasks: "Modules ventes, stocks, fournisseurs, dashboard", dates: "27 nov - 17 déc" },
  { week: "S7", phase: "Tests & Formation", tasks: "Tests UAT, formation vendeuses", dates: "18-24 déc" },
  { week: "S8", phase: "Déploiement", tasks: "Production, documentation, support", dates: "25-31 déc" },
];

const milestones = [
  { id: "M1", date: "3 nov", label: "Démarrage et validation charte", status: "done" },
  { id: "M2", date: "12 nov", label: "Finalisation spécifications", status: "done" },
  { id: "M3", date: "26 nov", label: "Approbation maquettes", status: "done" },
  { id: "M4", date: "1 déc", label: "Déploiement staging", status: "done" },
  { id: "M5", date: "17 déc", label: "Version bêta livrée", status: "done" },
  { id: "M6", date: "24 déc", label: "Validation UAT", status: "done" },
  { id: "M7", date: "31 déc", label: "Déploiement production", status: "done" },
];

const bilanPoints = [
  "Respect strict du délai de 8 semaines",
  "100% des jalons atteints aux dates prévues",
  "Pivot technique réussi (NestJS → Supabase)",
];

export const PlanningSlide = () => {
  return (
    <SlideWrapper id="planning">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-primary/20 rounded-xl">
          <Calendar className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Planning <span className="text-gradient">Projet</span>
        </h2>
      </div>

      <p className="text-base text-muted-foreground mb-6">
        8 semaines intensives — 6 novembre au 31 décembre 2025
      </p>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Planning Prévisionnel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-4 card-gradient rounded-xl border border-border/50"
        >
          <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            Planning Prévisionnel
          </h3>
          <div className="space-y-2">
            {planning.map((item, i) => (
              <motion.div
                key={item.week}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-2 bg-secondary/30 rounded-lg text-xs"
              >
                <span className="w-10 font-bold text-primary text-center">{item.week}</span>
                <div className="flex-1">
                  <p className="font-semibold">{item.phase}</p>
                  <p className="text-muted-foreground text-[10px]">{item.tasks}</p>
                </div>
                <span className="text-[10px] text-muted-foreground whitespace-nowrap">{item.dates}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Jalons Critiques */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-4 card-gradient rounded-xl border border-border/50"
        >
          <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
            <Flag className="w-4 h-4 text-primary" />
            7 Jalons Critiques (Milestones)
          </h3>
          <div className="space-y-2">
            {milestones.map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-2 bg-secondary/30 rounded-lg text-xs"
              >
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-primary">{m.id}</span>
                    <span className="text-muted-foreground">({m.date})</span>
                  </div>
                  <p className="text-[11px] truncate">{m.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bilan Réel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-6 p-4 glass-effect rounded-xl"
      >
        <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
          <Zap className="w-4 h-4 text-primary" />
          Bilan Réel : Exécution Conforme
        </h3>
        <div className="grid md:grid-cols-3 gap-3">
          {bilanPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/30 rounded-lg"
            >
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span className="text-xs text-green-600 dark:text-green-400">{point}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Timeline Visual */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-4 flex items-center justify-center gap-1 text-[10px] text-muted-foreground"
      >
        <span>6 Nov</span>
        <div className="flex-1 max-w-xs h-2 bg-gradient-to-r from-primary via-accent to-green-500 rounded-full" />
        <span>31 Déc</span>
        <ArrowRight className="w-3 h-3 text-green-500 ml-1" />
        <span className="text-green-500 font-semibold">SUCCÈS</span>
      </motion.div>
    </SlideWrapper>
  );
};
