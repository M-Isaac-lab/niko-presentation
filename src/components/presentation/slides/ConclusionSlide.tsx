import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { Target, CheckCircle, Rocket, ShoppingCart, Users, Bell, BarChart } from "lucide-react";

const achievements = [
  "Transformation opérationnelle réussie",
  "Application fonctionnelle déployée en production",
  "2 boutiques connectées et synchronisées",
  "Mode hors ligne robuste implémenté",
  "100% d'adoption par les utilisateurs",
  "Formation complète réalisée",
];

const nextSteps = [
  { icon: ShoppingCart, text: "Intégration E-commerce", desc: "Vente en ligne synchronisée avec stocks physiques" },
  { icon: Users, text: "Programme de Fidélité", desc: "Système de points pour achats récurrents" },
  { icon: BarChart, text: "Analyses Prédictives", desc: "Anticiper les tendances de vente" },
  { icon: Bell, text: "Notifications SMS/WhatsApp", desc: "Alertes clients pour promotions" },
];

const perennite = [
  "Support post-déploiement : 2 semaines incluses",
  "Plan de maintenance : Contrat à négocier pour année 1+",
  "Documentation complète : Guides utilisateur et admin",
  "Étudiant référent désigné pour passation",
];

export const ConclusionSlide = () => {
  return (
    <SlideWrapper id="conclusion" slideNumber={7} sectionTitle="Conclusion">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-primary/20 rounded-xl">
          <Target className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Conclusion & <span className="text-gradient">Perspectives</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-5 card-gradient rounded-2xl border border-border/50"
        >
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            Objectifs atteints
          </h3>
          <div className="space-y-2">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Next steps */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-5 card-gradient rounded-2xl border border-border/50"
        >
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Rocket className="w-5 h-5 text-primary" />
            Vision Future
          </h3>
          <div className="space-y-2">
            {nextSteps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-2 glass-effect rounded-lg"
              >
                <item.icon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">{item.text}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* KPIs Reference */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-6 glass-effect rounded-2xl border border-primary/30 text-center"
        >
          <h3 className="text-lg font-semibold mb-3 text-gradient">Impact Business Démontré</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Réduction de <strong className="text-foreground">75%</strong> du temps de transaction, 
            <strong className="text-foreground"> 60%</strong> de réduction des ruptures de stock, 
            et <strong className="text-foreground">99%</strong> de disponibilité du service.
          </p>
          <p className="text-xs text-muted-foreground">
            Voir la slide "Impact Mesurable & KPI" pour les détails complets
          </p>
        </motion.div>
      </motion.div>

      {/* Pérennité */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
        className="p-4 glass-effect rounded-xl mb-8"
      >
        <h4 className="font-semibold text-sm mb-3">Assurer la pérennité</h4>
        <div className="flex flex-wrap gap-2">
          {perennite.map((item, i) => (
            <span key={i} className="px-3 py-1 bg-secondary rounded-full text-xs">
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Final Message */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center p-6 glass-effect rounded-2xl border border-primary/30 glow-effect"
      >
        <p className="text-lg text-muted-foreground mb-2">
          NICKOPLUS PRO : Plus qu'une application, un levier de croissance durable
        </p>
        <p className="text-sm text-muted-foreground">
          Prêt à transformer la gestion de vos boutiques
        </p>
      </motion.div>
    </SlideWrapper>
  );
};
