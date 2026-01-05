import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { Coins, TrendingUp, Clock, Package } from "lucide-react";

const plans = [
  { name: "Base", price: "Gratuit", desc: "1 boutique (essai 6 mois)", highlight: false },
  { name: "Pro", price: "15€/mois", desc: "Par boutique + fonctionnalités avancées", highlight: true },
  { name: "Enterprise", price: "45€/mois", desc: "3+ boutiques + support prioritaire", highlight: false },
];

const roi = [
  { icon: Package, value: "70%", label: "Réduction des erreurs de stock" },
  { icon: Clock, value: "10h", label: "Gagnées par semaine" },
  { icon: TrendingUp, value: "+15%", label: "Augmentation des ventes" },
];

export const BusinessSlide = () => {
  return (
    <SlideWrapper id="business">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-primary/20 rounded-xl">
          <Coins className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Business Model & <span className="text-gradient">Viabilité</span>
        </h2>
      </div>

      <p className="text-lg text-muted-foreground mb-12">
        Un modèle économique adapté et scalable
      </p>

      {/* Pricing */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
            className={`p-6 rounded-2xl border ${
              plan.highlight 
                ? "bg-primary/10 border-primary glow-effect" 
                : "card-gradient border-border/50"
            }`}
          >
            {plan.highlight && (
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Recommandé
              </span>
            )}
            <h3 className="text-xl font-bold mt-2">{plan.name}</h3>
            <p className="text-3xl font-bold text-gradient my-3">{plan.price}</p>
            <p className="text-sm text-muted-foreground">{plan.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* ROI */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold mb-6 text-center">ROI pour le client</h3>
        <div className="grid grid-cols-3 gap-4">
          {roi.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="text-center p-6 glass-effect rounded-2xl"
            >
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-bold text-gradient">{item.value}</p>
              <p className="text-sm text-muted-foreground mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Costs */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 p-6 glass-effect rounded-2xl"
      >
        <h4 className="font-semibold mb-4">Coûts d'exploitation maîtrisés</h4>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="px-3 py-1 bg-secondary rounded-full">Supabase: $25/mois</span>
          <span className="px-3 py-1 bg-secondary rounded-full">Vercel: Gratuit</span>
          <span className="px-3 py-1 bg-secondary rounded-full">Support: Coûts marginaux</span>
        </div>
      </motion.div>
    </SlideWrapper>
  );
};
