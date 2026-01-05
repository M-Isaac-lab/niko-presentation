import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { ShoppingCart, Package, LayoutDashboard, Truck, FileText, Search, Wifi, Bell, LineChart, Download, Eye, RefreshCw } from "lucide-react";

const modules = [
  {
    icon: ShoppingCart,
    title: "Module Ventes",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    features: [
      { icon: FileText, text: "Ticket automatisé PDF" },
      { icon: Search, text: "Historique avec recherche" },
      { icon: Wifi, text: "Mode hors ligne" },
    ],
  },
  {
    icon: Package,
    title: "Module Stocks",
    color: "text-green-400",
    bg: "bg-green-400/10",
    features: [
      { icon: Bell, text: "Alertes automatiques" },
      { icon: RefreshCw, text: "Mise à jour temps réel" },
      { icon: LineChart, text: "Niveaux optimaux par saison" },
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Admin",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    features: [
      { icon: LineChart, text: "KPIs personnalisables" },
      { icon: Download, text: "Rapports exportables" },
      { icon: Eye, text: "Vue multi-boutiques" },
    ],
  },
  {
    icon: Truck,
    title: "Module Fournisseurs",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    features: [
      { icon: RefreshCw, text: "Commandes automatiques" },
      { icon: Search, text: "Suivi des livraisons" },
      { icon: FileText, text: "Historique des achats" },
    ],
  },
];

export const FeaturesSlide = () => {
  return (
    <SlideWrapper id="fonctionnalites">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-primary/20 rounded-xl">
          <LayoutDashboard className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Fonctionnalités <span className="text-gradient">Clés</span>
        </h2>
      </div>

      <p className="text-lg text-muted-foreground mb-12">
        4 modules interdépendants pour une gestion complète
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {modules.map((module, i) => (
          <motion.div
            key={module.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 card-gradient rounded-2xl border border-border/50 group hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-xl ${module.bg}`}>
                <module.icon className={`w-6 h-6 ${module.color}`} />
              </div>
              <h3 className="text-xl font-semibold">{module.title}</h3>
            </div>
            
            <div className="space-y-3">
              {module.features.map((feature, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + j * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <feature.icon className="w-4 h-4 text-primary/70" />
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SlideWrapper>
  );
};
