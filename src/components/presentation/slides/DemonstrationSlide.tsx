import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { Play, Monitor, ShoppingCart, BarChart3, Package } from "lucide-react";

const demoSteps = [
  { icon: ShoppingCart, title: "Processus de vente", desc: "Création d'une vente en moins de 2 minutes" },
  { icon: Package, title: "Gestion des stocks", desc: "Alertes automatiques et mise à jour temps réel" },
  { icon: BarChart3, title: "Dashboard admin", desc: "KPIs et rapports multi-boutiques" },
  { icon: Monitor, title: "Mode hors ligne", desc: "Fonctionnement sans connexion internet" },
];

export const DemonstrationSlide = () => {
  return (
    <SlideWrapper id="demonstration" slideNumber={6} sectionTitle="Démonstration">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-primary/20 rounded-xl">
          <Play className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Démonstration <span className="text-gradient">Live</span>
        </h2>
      </div>

      <p className="text-lg text-muted-foreground mb-12">
        Découverte de l'application en situation réelle
      </p>

      {/* Demo preview */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto mb-12"
      >
        <div className="aspect-video card-gradient rounded-2xl border border-border/50 overflow-hidden glow-effect">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-6 bg-primary/20 rounded-full cursor-pointer group"
            >
              <Play className="w-12 h-12 text-primary group-hover:text-accent transition-colors" />
            </motion.div>
          </div>
          {/* Browser chrome */}
          <div className="absolute top-0 left-0 right-0 p-4 bg-secondary/50 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-background/50 rounded px-3 py-1 text-sm text-muted-foreground text-center">
                nikoplus.lovable.app
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Demo steps */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {demoSteps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="p-5 glass-effect rounded-xl text-center"
          >
            <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-3">
              <step.icon className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-1">{step.title}</h4>
            <p className="text-sm text-muted-foreground">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </SlideWrapper>
  );
};
