import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { Eye, Cpu, Smartphone, Radio, Languages, Leaf, Users, Code } from "lucide-react";

const techEvolutions = [
  { icon: Cpu, text: "IA : Recommandations produits clients" },
  { icon: Smartphone, text: "Mobile first : Application dédiée" },
  { icon: Radio, text: "IoT : Connexion systèmes inventaire" },
  { icon: Languages, text: "Multi-langues : Anglais, locales" },
];

const ecosystem = [
  { name: "NickoConnect", desc: "Plateforme fournisseurs" },
  { name: "NickoAnalytics", desc: "Business intelligence avancée" },
  { name: "NickoMarket", desc: "Marketplace B2B régionale" },
];

const commitments = [
  { icon: Leaf, text: "Partenariat fournisseurs écoresponsables" },
  { icon: Users, text: "Programme formation numérique PME" },
  { icon: Code, text: "Open source modules basiques" },
];

export const VisionSlide = () => {
  return (
    <SlideWrapper id="vision" className="hero-gradient">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-primary/20 rounded-xl">
          <Eye className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Vision Future & <span className="text-gradient">Évolution</span>
        </h2>
      </div>

      <p className="text-lg text-muted-foreground mb-12">
        Au-delà de la gestion : l'intelligence de vente
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Tech evolutions */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-6 card-gradient rounded-2xl border border-border/50"
        >
          <h3 className="text-xl font-semibold mb-6">Évolutions technologiques</h3>
          <div className="space-y-4">
            {techEvolutions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-3 glass-effect rounded-lg"
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ecosystem */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-6 card-gradient rounded-2xl border border-border/50"
        >
          <h3 className="text-xl font-semibold mb-6">Écosystème envisagé</h3>
          <div className="space-y-4">
            {ecosystem.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                className="p-4 glass-effect rounded-lg"
              >
                <span className="font-semibold text-gradient">{item.name}</span>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Commitments */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold mb-6">Engagement durable</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {commitments.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 p-4 glass-effect rounded-xl"
            >
              <item.icon className="w-5 h-5 text-green-400" />
              <span className="text-sm text-muted-foreground">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SlideWrapper>
  );
};
