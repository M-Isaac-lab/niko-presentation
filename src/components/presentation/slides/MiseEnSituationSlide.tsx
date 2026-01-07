import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { AlertTriangle, Leaf, Building2, MapPin, BookOpen, Wifi, Eye, TrendingDown } from "lucide-react";

const problems = [
  { icon: BookOpen, text: "Gestion manuelle", desc: "Ventes enregistrées sur cahiers papier, perte de temps significative" },
  { icon: Wifi, text: "Absence de synchronisation", desc: "Aucune communication entre les stocks de Douala et Kribi" },
  { icon: Eye, text: "Manque de visibilité", desc: "Impossible d'identifier rapidement les produits performants" },
  { icon: TrendingDown, text: "Ruptures de stock", desc: "Non anticipées, entraînant des ventes manquées" },
];

export const MiseEnSituationSlide = () => {
  return (
    <SlideWrapper id="mise-en-situation" slideNumber={2} sectionTitle="Mise en Situation">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-primary/20 rounded-xl">
          <Building2 className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Mise en <span className="text-gradient">Situation</span>
        </h2>
      </div>

      {/* Client info - Version simplifiée */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="p-5 glass-effect rounded-2xl mb-6"
      >
        <div className="flex flex-wrap items-center gap-6">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Contexte</p>
            <p className="text-xl font-bold text-gradient">Les Boutiques Nicko</p>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Douala & Kribi, Cameroun</span>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Entreprise familiale avec deux boutiques physiques fonctionnant de manière indépendante, 
          reposant sur des processus manuels générant des frictions opérationnelles critiques.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Problems */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <h3 className="text-lg font-semibold text-destructive">Problèmes identifiés</h3>
          </div>
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 p-4 glass-effect rounded-xl border border-destructive/20"
            >
              <div className="p-2 bg-destructive/10 rounded-lg flex-shrink-0">
                <problem.icon className="w-4 h-4 text-destructive" />
              </div>
              <div>
                <p className="font-medium text-foreground">{problem.text}</p>
                <p className="text-sm text-muted-foreground">{problem.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Vision générale - Sans liste détaillée */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="w-5 h-5 text-green-500" />
            <h3 className="text-lg font-semibold text-primary">Notre vision</h3>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 card-gradient rounded-xl border border-primary/30"
          >
            <p className="text-base text-foreground mb-4">
              Une plateforme unique pour <strong className="text-gradient">centraliser</strong>, <strong className="text-gradient">optimiser</strong> et <strong className="text-gradient">piloter</strong> l'activité des deux boutiques.
            </p>
            <p className="text-sm text-muted-foreground">
              Les objectifs stratégiques détaillés seront présentés dans la section suivante.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
};
