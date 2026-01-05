import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { Target, TrendingUp, Clock, AlertTriangle, Smile } from "lucide-react";

const metrics = [
  { icon: Clock, metric: "Temps de vente", before: "5 min", target: "< 2 min", measure: "Chronométrage" },
  { icon: AlertTriangle, metric: "Erreurs stock/mois", before: "15-20", target: "< 5", measure: "Audit mensuel" },
  { icon: Target, metric: "Ruptures de stock", before: "8%", target: "< 3%", measure: "Suivi automatique" },
  { icon: Smile, metric: "Satisfaction équipe", before: "N/A", target: "> 4/5", measure: "Sondage anonyme" },
];

const businessImpact = [
  { value: "+15%", label: "Ventes", desc: "En disponibilité produit" },
  { value: "+8%", label: "Marge", desc: "En optimisation stock" },
  { value: "+10h", label: "Productivité", desc: "Réallouées par semaine" },
];

export const ImpactSlide = () => {
  return (
    <SlideWrapper id="impact">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-primary/20 rounded-xl">
          <Target className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Impact <span className="text-gradient">Mesurable</span> & KPI
        </h2>
      </div>

      <p className="text-lg text-muted-foreground mb-12">
        Des résultats quantifiables dès 3 mois
      </p>

      {/* Metrics table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="overflow-x-auto mb-12"
      >
        <div className="min-w-[600px]">
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 p-4 bg-secondary/50 rounded-t-xl border border-border/50">
            <span className="font-semibold">Métrique</span>
            <span className="font-semibold text-center">Avant</span>
            <span className="font-semibold text-center">Objectif (3 mois)</span>
            <span className="font-semibold text-center">Mesure</span>
          </div>

          {/* Rows */}
          {metrics.map((row, i) => (
            <motion.div
              key={row.metric}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-4 gap-4 p-4 border-x border-b border-border/50 last:rounded-b-xl items-center"
            >
              <div className="flex items-center gap-2">
                <row.icon className="w-4 h-4 text-muted-foreground" />
                <span>{row.metric}</span>
              </div>
              <span className="text-center text-muted-foreground">{row.before}</span>
              <span className="text-center text-primary font-semibold">{row.target}</span>
              <span className="text-center text-sm text-muted-foreground">{row.measure}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Business impact */}
      <h3 className="text-xl font-semibold mb-6">Impact business</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {businessImpact.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 card-gradient rounded-2xl border border-border/50 text-center glow-effect"
          >
            <p className="text-4xl md:text-5xl font-bold text-gradient mb-2">{item.value}</p>
            <p className="text-lg font-semibold mb-1">{item.label}</p>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </SlideWrapper>
  );
};
