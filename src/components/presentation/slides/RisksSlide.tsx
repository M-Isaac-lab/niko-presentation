import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { AlertTriangle, Shield, Users, Wifi, Lock, CheckCircle, TrendingUp, Server, FileCheck, DollarSign, UserX } from "lucide-react";

const risksMatrix = [
  {
    id: "R1",
    icon: AlertTriangle,
    risk: "Retard définition besoins",
    probability: "Moyenne",
    impact: "Élevé",
    criticality: "ÉLEVÉ",
    criticalityColor: "bg-red-500",
    mitigation: "Réunions d'alignement hebdomadaires",
  },
  {
    id: "R2",
    icon: UserX,
    risk: "Turnover d'équipe",
    probability: "Basse",
    impact: "Critique",
    criticality: "ÉLEVÉ",
    criticalityColor: "bg-red-500",
    mitigation: "Documentation exhaustive, pair-programming",
  },
  {
    id: "R5",
    icon: Users,
    risk: "Manque d'adoption",
    probability: "Moyenne",
    impact: "Élevé",
    criticality: "ÉLEVÉ",
    criticalityColor: "bg-red-500",
    mitigation: "UX intuitive, formation, support post-go-live",
  },
  {
    id: "R7",
    icon: Lock,
    risk: "Fuite de données",
    probability: "Basse",
    impact: "Critique",
    criticality: "ÉLEVÉ",
    criticalityColor: "bg-red-500",
    mitigation: "Chiffrement SSL, sauvegardes, audit sécurité",
  },
  {
    id: "R3",
    icon: Wifi,
    risk: "Connectivité Internet",
    probability: "Moyenne",
    impact: "Moyen",
    criticality: "MOYEN",
    criticalityColor: "bg-yellow-500",
    mitigation: "Architecture minimisant la bande passante",
  },
  {
    id: "R4",
    icon: Server,
    risk: "Dépassement charge",
    probability: "Basse",
    impact: "Élevé",
    criticality: "MOYEN",
    criticalityColor: "bg-yellow-500",
    mitigation: "Tests de charge, planification 10+ connexions",
  },
  {
    id: "R6",
    icon: FileCheck,
    risk: "Divergence Spéc/Implém",
    probability: "Moyenne",
    impact: "Moyen",
    criticality: "MOYEN",
    criticalityColor: "bg-yellow-500",
    mitigation: "Validation itérative, démos bi-mensuelles",
  },
  {
    id: "R8",
    icon: DollarSign,
    risk: "Dépassement budget",
    probability: "Basse",
    impact: "Moyen",
    criticality: "FAIBLE",
    criticalityColor: "bg-green-500",
    mitigation: "Suivi ressources, choix du gratuit (BaaS)",
  },
];

const synthese = [
  {
    color: "bg-red-500",
    label: "Risques Critiques",
    description: "Humain (adoption, turnover) et sécurité → Formation et chiffrement SSL",
  },
  {
    color: "bg-yellow-500",
    label: "Risques Modérés",
    description: "Infrastructure technique → Architecture cloud-first et PWA hors ligne",
  },
  {
    color: "bg-green-500",
    label: "Budget Maîtrisé",
    description: "Criticité faible grâce au pivot vers Supabase (gratuit)",
  },
];

export const RisksSlide = () => {
  return (
    <SlideWrapper id="risques">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-primary/20 rounded-xl">
          <Shield className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Gestion des <span className="text-gradient">Risques</span>
        </h2>
      </div>

      <p className="text-base text-muted-foreground mb-6">
        Matrice de criticité et plans de mitigation
      </p>

      {/* Risk Matrix Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="overflow-x-auto mb-6"
      >
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left py-2 px-2 font-semibold text-muted-foreground">ID</th>
              <th className="text-left py-2 px-2 font-semibold text-muted-foreground">Risque</th>
              <th className="text-center py-2 px-2 font-semibold text-muted-foreground">Probabilité</th>
              <th className="text-center py-2 px-2 font-semibold text-muted-foreground">Impact</th>
              <th className="text-center py-2 px-2 font-semibold text-muted-foreground">Criticité</th>
              <th className="text-left py-2 px-2 font-semibold text-muted-foreground">Plan de Mitigation</th>
            </tr>
          </thead>
          <tbody>
            {risksMatrix.map((risk, i) => (
              <motion.tr
                key={risk.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                className="border-b border-border/30 hover:bg-secondary/30 transition-colors"
              >
                <td className="py-2 px-2">
                  <div className="flex items-center gap-1">
                    <risk.icon className="w-3 h-3 text-primary" />
                    <span className="font-bold text-primary">{risk.id}</span>
                  </div>
                </td>
                <td className="py-2 px-2 font-medium">{risk.risk}</td>
                <td className="py-2 px-2 text-center text-muted-foreground">{risk.probability}</td>
                <td className="py-2 px-2 text-center text-muted-foreground">{risk.impact}</td>
                <td className="py-2 px-2 text-center">
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-white text-[10px] font-bold ${risk.criticalityColor}`}>
                    {risk.criticality === "ÉLEVÉ" && "🔴"}
                    {risk.criticality === "MOYEN" && "🟡"}
                    {risk.criticality === "FAIBLE" && "🟢"}
                    {risk.criticality}
                  </span>
                </td>
                <td className="py-2 px-2 text-muted-foreground">{risk.mitigation}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Synthèse Visuelle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
        className="p-4 glass-effect rounded-xl"
      >
        <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-primary" />
          Synthèse Visuelle des Impacts
        </h3>
        <div className="grid md:grid-cols-3 gap-3">
          {synthese.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
              viewport={{ once: true }}
              className="flex items-start gap-2 p-3 bg-secondary/50 rounded-lg"
            >
              <div className={`w-3 h-3 rounded-full ${item.color} mt-0.5 flex-shrink-0`} />
              <div>
                <p className="font-semibold text-xs mb-1">{item.label}</p>
                <p className="text-[10px] text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Success Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        viewport={{ once: true }}
        className="mt-4 flex justify-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
          <CheckCircle className="w-4 h-4 text-green-500" />
          <span className="text-xs font-medium text-green-600 dark:text-green-400">
            100% des risques maîtrisés — Aucun incident majeur
          </span>
        </div>
      </motion.div>
    </SlideWrapper>
  );
};
