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
      <div className="flex items-center gap-2 mb-3">
        <div className="p-2 bg-primary/20 rounded-xl">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Notre Solution
        </h2>
      </div>

      <p className="text-2xl md:text-3xl font-semibold text-gradient mb-2">
        NICKOPLUS PRO
      </p>
      <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-xl">
        Une plateforme tout-en-un pour les boutiques Nicko
      </p>

      {/* Features grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-3 card-gradient rounded-xl border border-border/50 text-center group cursor-pointer"
          >
            <div className="inline-flex p-2 bg-primary/10 rounded-xl mb-2 group-hover:bg-primary/20 transition-colors">
              <feature.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-base mb-1">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Dashboard Screenshot */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-3xl mx-auto"
      >
        <div className="relative rounded-2xl border border-border/50 overflow-hidden glow-effect shadow-2xl bg-background">
          {/* Browser chrome */}
          <div className="absolute top-0 left-0 right-0 p-3 bg-secondary/80 backdrop-blur-sm flex items-center gap-2 z-10 border-b border-border/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-background/50 rounded px-3 py-1 text-xs text-muted-foreground text-center">
                nikoplus.lovable.app
              </div>
            </div>
          </div>
          {/* Dashboard Image */}
          <div className="relative w-full aspect-video bg-gradient-to-br from-primary/5 to-accent/5">
            <img 
              src="/dashboard-screenshot.png" 
              alt="Tableau de Bord Manager NICKOPLUS PRO - Dashboard avec KPIs, graphiques et métriques"
              className="w-full h-full object-contain"
              style={{ paddingTop: '40px' }} // Pour laisser de l'espace au browser chrome
              onError={(e) => {
                // Fallback si l'image n'existe pas encore
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.parentElement;
                if (fallback) {
                  fallback.innerHTML = `
                    <div class="absolute inset-0 flex items-center justify-center pt-10">
                      <div class="text-center">
                        <div class="flex gap-2 mb-4 justify-center">
                          <div class="w-3 h-3 rounded-full bg-destructive"></div>
                          <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div class="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <p class="text-muted-foreground mb-2">Interface Dashboard</p>
                        <p class="text-xs text-muted-foreground">Placez l'image dashboard-screenshot.png dans /public</p>
                      </div>
                    </div>
                  `;
                }
              }}
            />
          </div>
        </div>
      </motion.div>
    </SlideWrapper>
  );
};
