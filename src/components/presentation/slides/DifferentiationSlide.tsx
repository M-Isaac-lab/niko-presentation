import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { Award, Check, X } from "lucide-react";

const vsManual = [
  { us: "Synchronisation automatique", them: "Mise à jour manuelle" },
  { us: "Alertes en temps réel", them: "Pas d'alertes" },
  { us: "Accessible hors ligne", them: "Accès limité" },
  { us: "Spécialisé retail décoration", them: "Générique" },
];

const vsCompetitors = [
  { label: "Prix", value: "3x moins cher que SAP Business One" },
  { label: "Adaptation", value: "Conçu pour le marché camerounais" },
  { label: "Simplicité", value: "Interface en français, intuitive" },
  { label: "Support", value: "Équipe locale, réactive" },
];

export const DifferentiationSlide = () => {
  return (
    <SlideWrapper id="differenciation">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-primary/20 rounded-xl">
          <Award className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Pourquoi choisir <span className="text-gradient">NICKOPLUS PRO</span> ?
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* vs Manual */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-6 card-gradient rounded-2xl border border-border/50"
        >
          <h3 className="text-xl font-semibold mb-6">Vs. Solutions génériques (Excel, papiers)</h3>
          <div className="space-y-4">
            {vsManual.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center justify-between p-3 glass-effect rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-primary/20 rounded-full">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm">{item.us}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm">{item.them}</span>
                  <div className="p-1 bg-destructive/20 rounded-full">
                    <X className="w-3 h-3 text-destructive" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* vs Competitors */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-6 card-gradient rounded-2xl border border-border/50"
        >
          <h3 className="text-xl font-semibold mb-6">Vs. Concurrents logiciels</h3>
          <div className="space-y-4">
            {vsCompetitors.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                className="p-4 glass-effect rounded-lg"
              >
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {item.label}
                </span>
                <p className="text-foreground mt-1">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
};
