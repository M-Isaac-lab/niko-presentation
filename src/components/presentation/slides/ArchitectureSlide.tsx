import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { Server, Monitor, Database, Shield, Zap, Smartphone, Cloud } from "lucide-react";

const frontend = [
  "React 18 + Next.js 14",
  "Tailwind CSS",
  "PWA (Service Workers)",
];

const backend = [
  "Supabase (PostgreSQL)",
  "Authentification JWT",
  "Synchronisation temps réel",
];

const advantages = [
  { icon: Zap, text: "Chargement < 3s", color: "text-yellow-400" },
  { icon: Smartphone, text: "Mode hors ligne", color: "text-blue-400" },
  { icon: Shield, text: "Auth sécurisée", color: "text-green-400" },
  { icon: Cloud, text: "PWA installable", color: "text-purple-400" },
];

export const ArchitectureSlide = () => {
  return (
    <SlideWrapper id="architecture" className="hero-gradient">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-primary/20 rounded-xl">
          <Server className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Architecture <span className="text-gradient">Technique</span>
        </h2>
      </div>

      <p className="text-lg text-muted-foreground mb-12">
        Une stack moderne et robuste
      </p>

      {/* Architecture diagram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-12"
      >
        {/* Users */}
        <div className="flex justify-center gap-4 mb-6">
          {["Vendeurs", "Gérante", "Superviseur"].map((user, i) => (
            <motion.div
              key={user}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="px-4 py-2 glass-effect rounded-lg text-sm"
            >
              {user}
            </motion.div>
          ))}
        </div>

        {/* Arrow */}
        <div className="flex justify-center mb-6">
          <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
        </div>

        {/* Frontend & Backend */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 card-gradient rounded-2xl border border-blue-500/30"
          >
            <div className="flex items-center gap-3 mb-4">
              <Monitor className="w-6 h-6 text-blue-400" />
              <h3 className="text-lg font-semibold">Frontend</h3>
            </div>
            <div className="space-y-2">
              {frontend.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 card-gradient rounded-2xl border border-green-500/30"
          >
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-green-400" />
              <h3 className="text-lg font-semibold">Backend</h3>
            </div>
            <div className="space-y-2">
              {backend.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Advantages */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {advantages.map((adv, i) => (
          <motion.div
            key={adv.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 p-4 glass-effect rounded-xl"
          >
            <adv.icon className={`w-5 h-5 ${adv.color}`} />
            <span className="text-sm">{adv.text}</span>
          </motion.div>
        ))}
      </div>
    </SlideWrapper>
  );
};
