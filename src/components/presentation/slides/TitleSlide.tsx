import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { ChevronRight } from "lucide-react";
import logoUcacIcam from "@/assets/logo-ucac-icam.png";

export const TitleSlide = () => {
  return (
    <SlideWrapper id="titre" className="hero-gradient">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="text-center relative z-10 flex flex-col items-center justify-center h-full">
        {/* School Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <img 
            src={logoUcacIcam} 
            alt="UCAC-ICAM Logo" 
            className="h-20 md:h-24 w-auto mx-auto"
          />
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
          className="text-lg text-muted-foreground mb-8"
        >
          Système de gestion des ventes et stocks multi-boutiques
        </motion.p>

        {/* Team */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-3 mb-6"
        >
          {["Kenmogne", "Bedian", "Kongne Verra", "Kamdem", "François Landry"].map((name, i) => (
            <span 
              key={name}
              className="px-4 py-2 glass-effect rounded-full text-sm font-medium"
              style={{ animationDelay: `${1 + i * 0.1}s` }}
            >
              {name}
            </span>
          ))}
        </motion.div>

        {/* Academic Supervisor */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mb-12"
        >
          <p className="text-sm text-muted-foreground mb-1">Encadreur académique</p>
          <p className="text-lg font-semibold text-foreground">Igor Ewolo</p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm">Utilisez les flèches ← → pour naviguer</span>
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
};
