import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { Target, TrendingUp, Clock, AlertTriangle, Smile, CheckCircle, Server, Shield } from "lucide-react";

const metricsMetier = [
  { icon: TrendingUp, metric: "Adoption utilisateurs", target: "100%", status: "Atteint", desc: "Toutes les vendeuses utilisent l'outil" },
  { icon: Clock, metric: "Réduction temps de saisie", target: "-40%", status: "Atteint (-75%)", desc: "De 8 min à 2 min par transaction" },
  { icon: AlertTriangle, metric: "Réduction ruptures stock", target: "-30%", status: "Atteint (-60%)", desc: "Résolution d'une problématique majeure" },
  { icon: Smile, metric: "Satisfaction utilisateurs", target: "≥ 4/5", status: "Atteint", desc: "Via questionnaire UAT" },
];

const metricsTechniques = [
  { metric: "Temps de réponse", target: "< 3 secondes", status: "Atteint" },
  { metric: "Disponibilité service", target: "≥ 99%", status: "Atteint" },
  { metric: "Couverture tests", target: "≥ 80%", status: "Atteint" },
  { metric: "Sécurité", target: "Pas de vulnérabilités", status: "Atteint" },
];

const metricsAcademiques = [
  { metric: "Respect du planning", target: "100% des jalons", status: "Atteint" },
  { metric: "Qualité livrables", target: "Tous docs validés", status: "Atteint" },
  { metric: "Apprentissage étudiant", target: "Compétences acquises", status: "Atteint" },
];

const businessImpact = [
  { value: "-75%", label: "Temps transaction", desc: "De 8 min à 2 min" },
  { value: "-60%", label: "Ruptures de stock", desc: "Objectif dépassé" },
  { value: "99%", label: "Disponibilité", desc: "Service garanti" },
];

export const ImpactSlide = () => {
  return (
    <SlideWrapper id="impact">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-primary/20 rounded-xl">
          <Target className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Impact <span className="text-gradient">Mesurable</span> & KPI
        </h2>
      </div>

      <p className="text-lg text-muted-foreground mb-8">
        Tous les objectifs atteints — Des résultats concrets et quantifiables
      </p>

      {/* Business impact cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {businessImpact.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-5 card-gradient rounded-2xl border border-border/50 text-center glow-effect"
          >
            <p className="text-3xl md:text-4xl font-bold text-gradient mb-1">{item.value}</p>
            <p className="font-semibold text-sm mb-1">{item.label}</p>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        {/* Critères Métier */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-4 card-gradient rounded-xl border border-border/50"
        >
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            Critères Métier
          </h3>
          <div className="space-y-2">
            {metricsMetier.map((row, i) => (
              <div key={row.metric} className="p-2 glass-effect rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium">{row.metric}</span>
                  <span className="text-xs text-green-500 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    {row.status}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{row.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Critères Techniques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="p-4 card-gradient rounded-xl border border-border/50"
        >
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Server className="w-4 h-4 text-primary" />
            Critères Techniques
          </h3>
          <div className="space-y-2">
            {metricsTechniques.map((row, i) => (
              <div key={row.metric} className="p-2 glass-effect rounded-lg flex items-center justify-between">
                <div>
                  <span className="text-xs font-medium">{row.metric}</span>
                  <p className="text-xs text-muted-foreground">{row.target}</p>
                </div>
                <span className="text-xs text-green-500 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Critères Académiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="p-4 card-gradient rounded-xl border border-border/50"
        >
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            Critères Académiques
          </h3>
          <div className="space-y-2">
            {metricsAcademiques.map((row, i) => (
              <div key={row.metric} className="p-2 glass-effect rounded-lg flex items-center justify-between">
                <div>
                  <span className="text-xs font-medium">{row.metric}</span>
                  <p className="text-xs text-muted-foreground">{row.target}</p>
                </div>
                <span className="text-xs text-green-500 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
};
