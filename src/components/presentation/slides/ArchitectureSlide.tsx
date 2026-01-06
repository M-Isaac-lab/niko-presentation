import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { Server, Monitor, Database, Shield, Zap, Smartphone, Cloud, ArrowRight, RefreshCw } from "lucide-react";

const architectureComparison = [
  { composant: "Backend", documentee: "NestJS (Node.js) personnalisé", implementee: "Supabase (BaaS)", avantage: "Complexité réduite, focus sur l'UX" },
  { composant: "Base de données", documentee: "PostgreSQL déploiement personnalisé", implementee: "Supabase PostgreSQL managé", avantage: "Maintenance simplifiée" },
  { composant: "Authentification", documentee: "JWT custom (manuel)", implementee: "Supabase Auth (intégré)", avantage: "Solution robuste et sécurisée" },
  { composant: "Coûts", documentee: "Serveur dédié à prévoir", implementee: "Plan gratuit généreux", avantage: "Maîtrise des coûts, viabilité PME" },
];

const frontend = [
  "React 18 + TypeScript",
  "Tailwind CSS",
  "PWA (Service Workers)",
  "Mode hors ligne robuste",
];

const backend = [
  "Supabase (PostgreSQL)",
  "Authentification intégrée",
  "Synchronisation temps réel",
  "Sauvegardes automatiques",
];

const syncSteps = [
  { step: "1", label: "Boutique envoie données" },
  { step: "2", label: "Serveur consolide" },
  { step: "3", label: "Base de données centrale" },
  { step: "4", label: "Dashboard mis à jour" },
];

const advantages = [
  { icon: Zap, text: "Temps réponse < 3s", color: "text-yellow-400" },
  { icon: Smartphone, text: "Mode hors ligne", color: "text-blue-400" },
  { icon: Shield, text: "Sécurité SSL/JWT", color: "text-green-400" },
  { icon: Cloud, text: "PWA installable", color: "text-purple-400" },
];

export const ArchitectureSlide = () => {
  return (
    <SlideWrapper id="architecture" className="hero-gradient">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-primary/20 rounded-xl">
          <Server className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Architecture <span className="text-gradient">Technique</span>
        </h2>
      </div>

      <p className="text-muted-foreground mb-6 text-sm">
        Pivot stratégique : Architecture BaaS pour rapidité, maintenabilité et maîtrise des coûts
      </p>

      {/* Architecture Pivot Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-6 p-4 card-gradient rounded-xl border border-border/50"
      >
        <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
          <RefreshCw className="w-4 h-4 text-primary" />
          Pivot Architecture : Théorique → Implémentée
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left py-2 text-muted-foreground font-medium">Composant</th>
                <th className="text-left py-2 text-muted-foreground font-medium">Documentée</th>
                <th className="text-left py-2 text-muted-foreground font-medium">Implémentée</th>
                <th className="text-left py-2 text-muted-foreground font-medium">Avantage</th>
              </tr>
            </thead>
            <tbody>
              {architectureComparison.map((row, i) => (
                <motion.tr
                  key={row.composant}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                  className="border-b border-border/30"
                >
                  <td className="py-2 font-medium">{row.composant}</td>
                  <td className="py-2 text-muted-foreground line-through opacity-60">{row.documentee}</td>
                  <td className="py-2 text-primary font-medium">{row.implementee}</td>
                  <td className="py-2 text-green-500">{row.avantage}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-4 mb-6">
        {/* Frontend & Backend */}
        <div className="grid grid-cols-2 gap-3">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-4 card-gradient rounded-xl border border-blue-500/30"
          >
            <div className="flex items-center gap-2 mb-3">
              <Monitor className="w-5 h-5 text-blue-400" />
              <h3 className="text-sm font-semibold">Frontend</h3>
            </div>
            <div className="space-y-1">
              {frontend.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-1 h-1 rounded-full bg-blue-400" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-4 card-gradient rounded-xl border border-green-500/30"
          >
            <div className="flex items-center gap-2 mb-3">
              <Database className="w-5 h-5 text-green-400" />
              <h3 className="text-sm font-semibold">Backend</h3>
            </div>
            <div className="space-y-1">
              {backend.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-1 h-1 rounded-full bg-green-400" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Synchronisation Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="p-4 card-gradient rounded-xl border border-border/50"
        >
          <h3 className="text-sm font-semibold mb-3">Synchronisation Multi-boutiques</h3>
          <div className="flex items-center justify-between gap-2">
            {syncSteps.map((step, i) => (
              <div key={step.step} className="flex items-center gap-1">
                <div className="text-center">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary mb-1">
                    {step.step}
                  </div>
                  <p className="text-xs text-muted-foreground leading-tight">{step.label}</p>
                </div>
                {i < syncSteps.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-3 p-2 bg-blue-500/10 rounded-lg">
            <p className="text-xs text-blue-400">
              <strong>Mode hors ligne :</strong> Ventes sauvegardées localement, synchronisation automatique au retour de connexion
            </p>
          </div>
        </motion.div>
      </div>

      {/* Advantages */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {advantages.map((adv, i) => (
          <motion.div
            key={adv.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 p-3 glass-effect rounded-xl"
          >
            <adv.icon className={`w-4 h-4 ${adv.color}`} />
            <span className="text-xs">{adv.text}</span>
          </motion.div>
        ))}
      </div>
    </SlideWrapper>
  );
};
