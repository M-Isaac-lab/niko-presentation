import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { Target, TrendingUp, CheckCircle, Rocket, MessageSquare, Mail } from "lucide-react";

const achievements = [
  "Application fonctionnelle déployée",
  "2 boutiques connectées et opérationnelles",
  "Mode hors ligne implémenté",
  "Formation utilisateurs réalisée",
];

const kpis = [
  { value: "70%", label: "Réduction erreurs stock" },
  { value: "10h", label: "Gagnées par semaine" },
  { value: "+15%", label: "Augmentation ventes" },
];

const nextSteps = [
  "Extension à d'autres boutiques",
  "Module IA recommandations",
  "Application mobile native",
  "Marketplace B2B régionale",
];

export const ConclusionSlide = () => {
  return (
    <SlideWrapper id="conclusion" slideNumber={6} sectionTitle="Conclusion">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-primary/20 rounded-xl">
          <Target className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Conclusion & <span className="text-gradient">Perspectives</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-6 card-gradient rounded-2xl border border-border/50"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            Objectifs atteints
          </h3>
          <div className="space-y-3">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-muted-foreground"
              >
                <CheckCircle className="w-4 h-4 text-primary" />
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
          className="p-6 card-gradient rounded-2xl border border-border/50"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Rocket className="w-5 h-5 text-primary" />
            Perspectives
          </h3>
          <div className="space-y-3">
            {nextSteps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-muted-foreground"
              >
                <TrendingUp className="w-4 h-4 text-accent" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* KPIs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h3 className="text-xl font-semibold mb-6 text-center">Impact mesuré</h3>
        <div className="grid grid-cols-3 gap-4">
          {kpis.map((kpi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="p-6 glass-effect rounded-2xl text-center"
            >
              <p className="text-4xl font-bold text-gradient">{kpi.value}</p>
              <p className="text-sm text-muted-foreground mt-2">{kpi.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Thank you & Questions */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center p-8 glass-effect rounded-2xl border border-primary/30 glow-effect"
      >
        <h3 className="text-3xl font-bold text-gradient mb-4">Merci de votre attention</h3>
        <p className="text-muted-foreground mb-6">Des questions ?</p>
        <div className="flex justify-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg"
          >
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm">Questions</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg"
          >
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm">Contact</span>
          </motion.div>
        </div>
      </motion.div>
    </SlideWrapper>
  );
};
