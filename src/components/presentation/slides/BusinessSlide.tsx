import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { Coins, TrendingUp, Clock, Package, Server, Users, BookOpen } from "lucide-react";

const budgetRH = [
  { role: "Chef de projet & relation client", monthly: "250 000", duration: "3 mois", total: "750 000" },
  { role: "Développeur Frontend & UX", monthly: "200 000", duration: "3 mois", total: "600 000" },
  { role: "Infrastructure & déploiement", monthly: "200 000", duration: "3 mois", total: "600 000" },
  { role: "Qualité & tests", monthly: "150 000", duration: "3 mois", total: "450 000" },
];

const budgetInfra = [
  { service: "Supabase (PostgreSQL + Auth)", cost: "198 000" },
  { service: "Vercel (Hébergement Frontend)", cost: "Gratuit" },
  { service: "Nom de domaine (1 an)", cost: "15 000" },
  { service: "Sauvegardes & sécurité", cost: "90 000" },
  { service: "Réserve technique", cost: "147 000" },
];

const budgetFormation = [
  { formation: "Formation vendeurs Douala", public: "3 vendeurs", cost: "75 000" },
  { formation: "Formation vendeurs Kribi", public: "2 vendeurs", cost: "50 000" },
  { formation: "Formation gérante / admin", public: "1 personne", cost: "100 000" },
];

const budgetRecap = [
  { poste: "Ressources humaines", montant: "2 400 000", percent: "77,4%" },
  { poste: "Infrastructure & hébergement", montant: "450 000", percent: "14,5%" },
  { poste: "Formation & accompagnement", montant: "250 000", percent: "8,1%" },
];

const roi = [
  { icon: Clock, value: "-75%", label: "Temps de transaction", desc: "De 8 min à 2 min" },
  { icon: Package, value: "-60%", label: "Ruptures de stock", desc: "Alertes automatiques" },
  { icon: TrendingUp, value: "100%", label: "Adoption utilisateurs", desc: "Toutes les vendeuses" },
];

export const BusinessSlide = () => {
  return (
    <SlideWrapper id="business">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-primary/20 rounded-xl">
          <Coins className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Budget & <span className="text-gradient">Viabilité</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Budget Recap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-5 card-gradient rounded-2xl border border-border/50"
        >
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Coins className="w-5 h-5 text-primary" />
            Récapitulatif des budgets
          </h3>
          <div className="space-y-3">
            {budgetRecap.map((item, i) => (
              <motion.div
                key={item.poste}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center justify-between p-3 glass-effect rounded-lg"
              >
                <span className="text-sm">{item.poste}</span>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-gradient">{item.montant} FCFA</span>
                  <span className="px-2 py-0.5 bg-primary/10 rounded text-xs text-primary">{item.percent}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-primary/10 rounded-xl text-center">
            <p className="text-sm text-muted-foreground">Budget Total</p>
            <p className="text-2xl font-bold text-gradient">3 100 000 FCFA</p>
          </div>
        </motion.div>

        {/* Infrastructure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="p-5 card-gradient rounded-2xl border border-border/50"
        >
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Server className="w-5 h-5 text-primary" />
            Infrastructure (12 mois)
          </h3>
          <div className="space-y-2">
            {budgetInfra.map((item, i) => (
              <motion.div
                key={item.service}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center justify-between p-2 text-sm"
              >
                <span className="text-muted-foreground">{item.service}</span>
                <span className={item.cost === "Gratuit" ? "text-green-500 font-medium" : "font-medium"}>
                  {item.cost === "Gratuit" ? item.cost : `${item.cost} FCFA`}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-border/50 flex justify-between">
            <span className="font-semibold">Total Infrastructure</span>
            <span className="font-bold text-gradient">450 000 FCFA</span>
          </div>
        </motion.div>
      </div>

      {/* ROI */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg font-semibold mb-4 text-center">Impact mesuré (ROI)</h3>
        <div className="grid grid-cols-3 gap-4">
          {roi.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="text-center p-5 glass-effect rounded-2xl"
            >
              <item.icon className="w-7 h-7 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold text-gradient">{item.value}</p>
              <p className="font-semibold text-sm mt-1">{item.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Formation costs note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-6 p-4 glass-effect rounded-xl flex items-center gap-4"
      >
        <BookOpen className="w-5 h-5 text-primary flex-shrink-0" />
        <div className="text-sm">
          <span className="font-medium">Formation incluse :</span>
          <span className="text-muted-foreground"> 250 000 FCFA pour 6 personnes + support post-déploiement (25 000 FCFA)</span>
        </div>
      </motion.div>
    </SlideWrapper>
  );
};
