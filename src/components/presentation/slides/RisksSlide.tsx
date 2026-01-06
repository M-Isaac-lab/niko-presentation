import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { AlertTriangle, Shield, Users, Wifi, Lock, CheckCircle } from "lucide-react";

const risks = [
  {
    id: "R1",
    icon: Users,
    risk: "Utilisateurs peu technophiles",
    impact: "Outil sous-utilisé, pas de retour sur investissement",
    mitigation: "UX très intuitive, sessions de formation approfondies, support post-go-live",
    result: "Très efficace — Adoption rapide et unanime (100%)",
    color: "border-blue-500/30",
    iconColor: "text-blue-500",
  },
  {
    id: "R2",
    icon: Wifi,
    risk: "Problèmes de connectivité internet",
    impact: "Interruption des ventes, perte de données",
    mitigation: "Architecture PWA avec mode hors ligne robuste et cache local",
    result: "Très efficace — Continuité des ventes assurée même en coupure",
    color: "border-yellow-500/30",
    iconColor: "text-yellow-500",
  },
  {
    id: "R3",
    icon: AlertTriangle,
    risk: "Retard dans la définition des besoins",
    impact: "Décalage du planning, mauvaise adéquation de la solution",
    mitigation: "Réunions hebdomadaires avec la cliente pour validation itérative",
    result: "Maîtrisé — 100% des jalons respectés",
    color: "border-orange-500/30",
    iconColor: "text-orange-500",
  },
  {
    id: "R4",
    icon: Lock,
    risk: "Fuite de données sensibles",
    impact: "Perte de confiance, impact business et légal",
    mitigation: "Chiffrement SSL, sauvegardes régulières, audits de sécurité, gestion stricte des accès",
    result: "Sécurisé — Pas de vulnérabilités critiques détectées",
    color: "border-red-500/30",
    iconColor: "text-red-500",
  },
];

export const RisksSlide = () => {
  return (
    <SlideWrapper id="risques">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-primary/20 rounded-xl">
          <Shield className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Gestion des <span className="text-gradient">Risques</span>
        </h2>
      </div>

      <p className="text-lg text-muted-foreground mb-8">
        Une gestion proactive pour sécuriser le succès du projet
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {risks.map((risk, i) => (
          <motion.div
            key={risk.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className={`p-5 card-gradient rounded-xl border ${risk.color}`}
          >
            <div className="flex items-start gap-3 mb-3">
              <div className={`p-2 bg-secondary rounded-lg flex-shrink-0`}>
                <risk.icon className={`w-5 h-5 ${risk.iconColor}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-muted-foreground">{risk.id}</span>
                  <h4 className="font-semibold text-sm">{risk.risk}</h4>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-2 glass-effect rounded-lg">
                <p className="text-muted-foreground mb-1">
                  <span className="font-medium text-destructive">Impact :</span> {risk.impact}
                </p>
              </div>
              
              <div className="p-2 glass-effect rounded-lg">
                <p className="text-muted-foreground mb-1">
                  <span className="font-medium text-primary">Mitigation :</span> {risk.mitigation}
                </p>
              </div>

              <div className="p-2 bg-green-500/10 rounded-lg flex items-start gap-2">
                <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-green-600 dark:text-green-400">{risk.result}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-6 p-4 glass-effect rounded-xl text-center"
      >
        <p className="text-sm text-muted-foreground">
          La gestion des risques a été un <span className="font-semibold text-foreground">pilier de notre management</span>, 
          transformant les incertitudes en actions contrôlées.
        </p>
      </motion.div>
    </SlideWrapper>
  );
};
