import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { AlertTriangle, Leaf, Check, Building2, MapPin } from "lucide-react";

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

export const MiseEnSituationSlide = () => {
  return (
    <SlideWrapper id="mise-en-situation" slideNumber={1} sectionTitle="Mise en Situation">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-primary/20 rounded-xl">
          <Building2 className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Mise en <span className="text-gradient">Situation</span>
        </h2>
      </div>

      {/* Client info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="p-6 glass-effect rounded-2xl mb-8"
      >
        <div className="flex flex-wrap items-center gap-6">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Client</p>
            <p className="text-xl font-bold text-gradient">Boutiques Nicko</p>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Douala & Kribi, Cameroun</span>
          </div>
          <div className="px-3 py-1 bg-primary/10 rounded-full text-sm">
            Commerce de détail multi-boutiques
          </div>
        </div>
      </motion.div>

      <div className="flex items-center gap-2 mb-8">
        <Leaf className="w-5 h-5 text-green-500" />
        <p className="text-lg text-muted-foreground">
          Digitaliser pour une gestion responsable
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Problems */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <h3 className="text-xl font-semibold text-destructive">Problèmes identifiés</h3>
          </div>
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 p-4 glass-effect rounded-xl border border-destructive/20"
            >
              <span className="text-xl">{problem.icon}</span>
              <span className="text-muted-foreground">{problem.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* RSE Approach */}
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
              className="flex items-start gap-3 p-4 glass-effect rounded-xl border border-primary/20"
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
