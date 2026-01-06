import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { Target, Database, RefreshCw, AlertTriangle, Truck, BarChart3, Users, Smartphone, CheckCircle } from "lucide-react";

const objectives = [
  {
    icon: Database,
    title: "Centraliser les stocks",
    desc: "Gérer les stocks de Douala et Kribi dans une base de données unique",
    status: "Atteint",
  },
  {
    icon: RefreshCw,
    title: "Suivi temps réel des ventes",
    desc: "Assurer une synchronisation automatique des données",
    status: "Atteint",
  },
  {
    icon: AlertTriangle,
    title: "Réduire les ruptures de stock",
    desc: "Mettre en place un système d'alertes automatiques",
    status: "Atteint (-60%)",
  },
  {
    icon: Truck,
    title: "Optimiser la gestion fournisseurs",
    desc: "Centraliser les commandes et les livraisons",
    status: "Atteint",
  },
  {
    icon: BarChart3,
    title: "Faciliter la prise de décision",
    desc: "Intégrer un tableau de bord d'analyses de performance",
    status: "Atteint",
  },
  {
    icon: Users,
    title: "Former et responsabiliser",
    desc: "Garantir l'adoption de l'outil par les vendeuses et la gérante",
    status: "Atteint (100%)",
  },
  {
    icon: Smartphone,
    title: "Interface intuitive",
    desc: "Conçue pour des utilisateurs peu familiers avec le numérique",
    status: "Atteint",
  },
];

export const ObjectivesSlide = () => {
  return (
    <SlideWrapper id="objectifs">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-primary/20 rounded-xl">
          <Target className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          7 Objectifs <span className="text-gradient">Stratégiques</span>
        </h2>
      </div>

      <p className="text-lg text-muted-foreground mb-8">
        La digitalisation comme stratégie pour moderniser et pérenniser l'entreprise
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {objectives.map((objective, i) => (
          <motion.div
            key={objective.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-4 card-gradient rounded-xl border border-border/50 group hover:border-primary/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <objective.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="flex items-center gap-1 text-xs text-green-500 font-medium">
                <CheckCircle className="w-3 h-3" />
                {objective.status}
              </span>
            </div>
            <h4 className="font-semibold text-sm mb-1">{objective.title}</h4>
            <p className="text-xs text-muted-foreground">{objective.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-8 p-4 glass-effect rounded-xl text-center"
      >
        <p className="text-gradient font-bold text-lg mb-1">100% des objectifs atteints</p>
        <p className="text-sm text-muted-foreground">
          Tous les critères métier, techniques et académiques validés
        </p>
      </motion.div>
    </SlideWrapper>
  );
};
