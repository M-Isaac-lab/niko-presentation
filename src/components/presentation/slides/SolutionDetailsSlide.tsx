import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { 
  Smartphone, ShoppingCart, Package, Users, BarChart3, 
  Truck, BookOpen, Clock, Shield, Wifi, CreditCard, Receipt 
} from "lucide-react";

const modules = [
  {
    icon: Smartphone,
    title: "Application Web Responsive",
    desc: "Accessible sur ordinateur, tablette et smartphone",
    color: "bg-blue-500/10 border-blue-500/30",
    iconColor: "text-blue-500",
  },
  {
    icon: ShoppingCart,
    title: "Gestion des Ventes",
    desc: "Enregistrement rapide, historique, génération de tickets",
    color: "bg-green-500/10 border-green-500/30",
    iconColor: "text-green-500",
  },
  {
    icon: Package,
    title: "Gestion des Stocks",
    desc: "Consultation temps réel, alertes de rupture automatiques",
    color: "bg-yellow-500/10 border-yellow-500/30",
    iconColor: "text-yellow-500",
  },
  {
    icon: Truck,
    title: "Gestion des Fournisseurs",
    desc: "Répertoire centralisé et suivi des commandes",
    color: "bg-purple-500/10 border-purple-500/30",
    iconColor: "text-purple-500",
  },
  {
    icon: BarChart3,
    title: "Tableau de Bord",
    desc: "Statistiques et KPIs en temps réel pour le pilotage",
    color: "bg-pink-500/10 border-pink-500/30",
    iconColor: "text-pink-500",
  },
  {
    icon: Wifi,
    title: "Synchronisation Multi-boutiques",
    desc: "Données consolidées entre Douala et Kribi",
    color: "bg-cyan-500/10 border-cyan-500/30",
    iconColor: "text-cyan-500",
  },
  {
    icon: Users,
    title: "Gestion des Utilisateurs",
    desc: "Rôles : Vendeuse, Gérante, Administrateur",
    color: "bg-orange-500/10 border-orange-500/30",
    iconColor: "text-orange-500",
  },
  {
    icon: BookOpen,
    title: "Formation & Support",
    desc: "Documentation et sessions de formation incluses",
    color: "bg-indigo-500/10 border-indigo-500/30",
    iconColor: "text-indigo-500",
  },
];

const processVente = [
  { icon: ShoppingCart, step: "1", title: "Sélection produits", desc: "Recherche intuitive ou scan" },
  { icon: CreditCard, step: "2", title: "Mode paiement", desc: "Espèces, Mobile Money, Carte" },
  { icon: Clock, step: "3", title: "Calcul automatique", desc: "Monnaie à rendre calculée" },
  { icon: Receipt, step: "4", title: "Reçu professionnel", desc: "Génération et impression" },
];

const designPrinciples = [
  { icon: Smartphone, text: "Mobile-First : Fluide sur tablettes et smartphones" },
  { icon: Shield, text: "Codes couleurs sémantiques : Vert (succès), Rouge (erreur), Jaune (alerte)" },
  { icon: Clock, text: "Feedback visuel immédiat : Confirmation de chaque action" },
];

export const SolutionDetailsSlide = () => {
  return (
    <SlideWrapper id="solution-details">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-primary/20 rounded-xl">
          <Smartphone className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-gradient">NICKOPLUS PRO</span> — Fonctionnalités
        </h2>
      </div>

      <p className="text-muted-foreground mb-6 text-sm">
        Le centre de commandement pour la gestion des Boutiques Nicko
      </p>

      {/* 8 Modules Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {modules.map((module, i) => (
          <motion.div
            key={module.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
            className={`p-3 rounded-xl border ${module.color}`}
          >
            <div className={`p-2 rounded-lg ${module.color} inline-block mb-2`}>
              <module.icon className={`w-4 h-4 ${module.iconColor}`} />
            </div>
            <h4 className="text-xs font-semibold mb-1">{module.title}</h4>
            <p className="text-xs text-muted-foreground leading-tight">{module.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        {/* Processus de vente < 2 min */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-4 card-gradient rounded-xl border border-border/50"
        >
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            Moins de 2 minutes pour une vente
          </h3>
          <div className="flex items-center justify-between gap-2">
            {processVente.map((step, i) => (
              <div key={step.step} className="text-center flex-1">
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-primary/20 flex items-center justify-center">
                  <step.icon className="w-4 h-4 text-primary" />
                </div>
                <p className="text-xs font-semibold">{step.title}</p>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Design Principles */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-4 card-gradient rounded-xl border border-border/50"
        >
          <h3 className="text-sm font-semibold mb-3">Principes de Design UX</h3>
          <p className="text-xs text-muted-foreground mb-3">
            Interface conçue pour des utilisateurs peu familiers avec les outils numériques
          </p>
          <div className="space-y-2">
            {designPrinciples.map((principle, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start gap-2 p-2 glass-effect rounded-lg"
              >
                <principle.icon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground">{principle.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
};
