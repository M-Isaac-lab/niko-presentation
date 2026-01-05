import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { TrendingUp, MapPin, Store, Users, CreditCard, Brain, Globe } from "lucide-react";

const stats = [
  { value: "500+", label: "PME retail à Douala" },
  { value: "<30%", label: "Taux adoption numérique" },
  { value: "87%", label: "Gérants avec besoin identifié" },
];

const roadmap = [
  { icon: CreditCard, text: "Paiement mobile (Orange Money, MTN)" },
  { icon: Brain, text: "Analytics prédictif (ventes saisonnières)" },
  { icon: Globe, text: "Marketplace B2B (fournisseurs locaux)" },
];

export const PotentialSlide = () => {
  return (
    <SlideWrapper id="potentiel">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-primary/20 rounded-xl">
          <TrendingUp className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Potentiel de la <span className="text-gradient">Solution</span>
        </h2>
      </div>

      <p className="text-lg text-muted-foreground mb-12">
        Scalabilité et opportunités de marché
      </p>

      {/* Initial market */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="p-6 card-gradient rounded-2xl border border-border/50 mb-8"
      >
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          Marché cible initial
        </h3>
        <div className="flex flex-wrap gap-4">
          <span className="px-4 py-2 bg-secondary rounded-lg flex items-center gap-2">
            <Store className="w-4 h-4 text-primary" />
            2 boutiques Nicko (Douala & Kribi)
          </span>
          <span className="px-4 py-2 bg-secondary rounded-lg">
            Secteur : Décoration d'intérieur
          </span>
        </div>
      </motion.div>

      {/* Expansion */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          viewport={{ once: true }}
          className="p-5 glass-effect rounded-xl text-center"
        >
          <span className="text-sm text-primary font-medium">Vertical</span>
          <p className="mt-2 text-muted-foreground">Autres boutiques de décoration</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          viewport={{ once: true }}
          className="p-5 glass-effect rounded-xl text-center"
        >
          <span className="text-sm text-primary font-medium">Horizontal</span>
          <p className="mt-2 text-muted-foreground">PME retail au Cameroun</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          viewport={{ once: true }}
          className="p-5 glass-effect rounded-xl text-center"
        >
          <span className="text-sm text-primary font-medium">Géographique</span>
          <p className="mt-2 text-muted-foreground">Afrique francophone</p>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center p-6 card-gradient rounded-2xl border border-border/50"
          >
            <p className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</p>
            <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Roadmap */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold mb-6">Roadmap future</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {roadmap.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 p-4 glass-effect rounded-xl"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SlideWrapper>
  );
};
