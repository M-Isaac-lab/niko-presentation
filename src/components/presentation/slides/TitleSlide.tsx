import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { ChevronDown, Store, BarChart3, Zap } from "lucide-react";

export const TitleSlide = () => {
  return (
    <SlideWrapper id="titre" className="hero-gradient">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="text-center relative z-10">
        {/* Icons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center gap-6 mb-8"
        >
          <div className="p-4 glass-effect rounded-2xl animate-float">
            <Store className="w-8 h-8 text-primary" />
          </div>
          <div className="p-4 glass-effect rounded-2xl animate-float" style={{ animationDelay: "0.5s" }}>
            <BarChart3 className="w-8 h-8 text-accent" />
          </div>
          <div className="p-4 glass-effect rounded-2xl animate-float" style={{ animationDelay: "1s" }}>
            <Zap className="w-8 h-8 text-primary" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="text-gradient">NICKOPLUS</span>
          <span className="text-foreground"> PRO</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto"
        >
          Digitalisation des Boutiques Nicko
        </motion.p>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-lg text-muted-foreground mb-12"
        >
          Système de gestion des ventes et stocks multi-boutiques
        </motion.p>

        {/* Team */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {["Kenmogne", "Bedian", "Kogne Verra", "Kamdem"].map((name, i) => (
            <span 
              key={name}
              className="px-4 py-2 glass-effect rounded-full text-sm font-medium"
              style={{ animationDelay: `${1 + i * 0.1}s` }}
            >
              {name}
            </span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm">Découvrir</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
};
