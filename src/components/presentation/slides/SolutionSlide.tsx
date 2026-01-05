import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { Sparkles, Globe, Wifi, Clock, BarChart3 } from "lucide-react";

const features = [
  { icon: Globe, title: "Multi-boutiques", desc: "Douala & Kribi synchronisées" },
  { icon: Wifi, title: "PWA", desc: "Fonctionne hors ligne" },
  { icon: Clock, title: "Rapidité", desc: "Vente en < 2 minutes" },
  { icon: BarChart3, title: "Pilotage", desc: "Dashboard temps réel" },
];

export const SolutionSlide = () => {
  return (
    <SlideWrapper id="solution" className="hero-gradient">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-primary/20 rounded-xl">
          <Sparkles className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Notre Solution
        </h2>
      </div>

      <p className="text-2xl md:text-3xl font-semibold text-gradient mb-4">
        NICKOPLUS PRO
      </p>
      <p className="text-lg text-muted-foreground mb-12 max-w-xl">
        Une plateforme tout-en-un pour les boutiques Nicko
      </p>

      {/* Features grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-6 card-gradient rounded-2xl border border-border/50 text-center group cursor-pointer"
          >
            <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors">
              <feature.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Mockup placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-3xl mx-auto"
      >
        <div className="aspect-video card-gradient rounded-2xl border border-border/50 overflow-hidden glow-effect">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="flex gap-2 mb-4 justify-center">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <p className="text-muted-foreground">Interface Dashboard</p>
            </div>
          </div>
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-6 h-full">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="border-r border-primary/30" />
              ))}
            </div>
            <div className="absolute inset-0 grid grid-rows-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="border-b border-primary/30" />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </SlideWrapper>
  );
};
