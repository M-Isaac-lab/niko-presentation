import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { Play, LogIn, ScanLine, BarChart3, WifiOff } from "lucide-react";

const demoSteps = [
  { icon: LogIn, step: "01", title: "Connexion", desc: "Interface simple et intuitive" },
  { icon: ScanLine, step: "02", title: "Vente rapide", desc: "Scan produit → validation" },
  { icon: BarChart3, step: "03", title: "Dashboard", desc: "Visualisation KPIs en direct" },
  { icon: WifiOff, step: "04", title: "Mode hors ligne", desc: "Démonstration sans connexion" },
];

export const DemoSlide = () => {
  return (
    <SlideWrapper id="demo" className="hero-gradient">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-primary/20 rounded-xl">
          <Play className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-gradient">NICKOPLUS PRO</span> en action
        </h2>
      </div>

      <p className="text-lg text-muted-foreground mb-12">
        Durée : 2-3 minutes maximum
      </p>

      {/* Demo video placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-3xl mx-auto mb-16"
      >
        <div className="aspect-video card-gradient rounded-2xl border border-border/50 overflow-hidden glow-effect flex items-center justify-center group cursor-pointer">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-6 bg-primary/20 rounded-full"
          >
            <Play className="w-12 h-12 text-primary" />
          </motion.div>
          <div className="absolute bottom-4 left-4 right-4 flex justify-between text-sm text-muted-foreground">
            <span>Vidéo de démonstration</span>
            <span>02:45</span>
          </div>
        </div>
      </motion.div>

      {/* Demo sequence */}
      <h3 className="text-xl font-semibold mb-8 text-center">Séquence recommandée</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {demoSteps.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
            className="relative p-6 card-gradient rounded-2xl border border-border/50 text-center group"
          >
            <span className="absolute top-4 right-4 text-5xl font-bold text-primary/10">
              {step.step}
            </span>
            <div className="relative z-10">
              <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-1">{step.title}</h4>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideWrapper>
  );
};
