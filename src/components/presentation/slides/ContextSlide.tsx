import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { AlertTriangle, Leaf, Check } from "lucide-react";

const problems = [
  { icon: "❌", text: "Gestion manuelle → Erreurs humaines, gaspillage" },
  { icon: "❌", text: "Traçabilité absente → Impossible d'optimiser la chaîne" },
  { icon: "❌", text: "Perte économique → Ruptures de stock non anticipées" },
  { icon: "❌", text: "Inefficacité énergétique → Processus papier" },
];

const solutions = [
  "Réduction des erreurs → Moins de gaspillage",
  "Optimisation des stocks → Réduction du sur-stockage",
  "Digitalisation → Suppression du papier",
  "Efficacité opérationnelle → Économie de temps",
];

export const ContextSlide = () => {
  return (
    <SlideWrapper id="contexte">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-destructive/20 rounded-xl">
          <AlertTriangle className="w-6 h-6 text-destructive" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Contexte & <span className="text-gradient">Problématique</span>
        </h2>
      </div>

      <p className="text-lg text-muted-foreground mb-12 flex items-center gap-2">
        <Leaf className="w-5 h-5 text-green-500" />
        Digitaliser pour une gestion responsable
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Problems */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold text-destructive mb-6">Problèmes identifiés</h3>
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 p-4 glass-effect rounded-xl border-destructive/20"
            >
              <span className="text-xl">{problem.icon}</span>
              <span className="text-muted-foreground">{problem.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Solutions */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold text-primary mb-6">Notre approche RSE</h3>
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 p-4 glass-effect rounded-xl border-primary/20"
            >
              <div className="p-1 bg-primary/20 rounded-full">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground">{solution}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SlideWrapper>
  );
};
