import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { MessageCircle, Gift, Calendar, PlayCircle, TestTube, Mail, Phone, Globe, Github, Check } from "lucide-react";

const offer = [
  "6 mois gratuit pour les 2 boutiques Nicko",
  "Migration gratuite de vos données existantes",
  "Formation complète incluse",
];

const nextSteps = [
  { icon: Calendar, text: "Démo personnalisée : 1 heure adaptée à vos flux" },
  { icon: PlayCircle, text: "Plan de déploiement : Sur-mesure selon vos contraintes" },
  { icon: TestTube, text: "Période d'essai : Sans engagement" },
];

const contacts = [
  { icon: Mail, value: "team@nickoplus-project.com", href: "mailto:team@nickoplus-project.com" },
  { icon: Phone, value: "+237 XXX XX XX XX", href: "tel:+237" },
  { icon: Globe, value: "nickoplus.lovable.app", href: "https://nickoplus.lovable.app" },
  { icon: Github, value: "github.com/Ken-Andre/nikoplus", href: "https://github.com/Ken-Andre/nikoplus" },
];

const keyPoints = [
  "Solution adaptée : Conçue pour le marché camerounais",
  "Impact RSE : Réduction gaspillage, optimisation ressources",
  "Modèle viable : Abonnement simple, ROI rapide",
  "Potentiel fort : Scalable à toute la région",
];

export const ContactSlide = () => {
  return (
    <SlideWrapper id="contact" className="hero-gradient">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Transformons ensemble votre <span className="text-gradient">gestion boutique</span>
          </h2>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Offer */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-6 card-gradient rounded-2xl border border-primary/30 glow-effect"
        >
          <div className="flex items-center gap-3 mb-6">
            <Gift className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">Offre de lancement</h3>
          </div>
          <div className="space-y-3">
            {offer.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="p-1 bg-primary/20 rounded-full">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span>{item}</span>
              </div>
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
          <h3 className="text-xl font-semibold mb-6">Prochaines étapes</h3>
          <div className="space-y-4">
            {nextSteps.map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <step.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground">{step.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Contacts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="p-6 glass-effect rounded-2xl mb-12"
      >
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-primary" />
          Contacts
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {contacts.map((contact, i) => (
            <motion.a
              key={i}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors text-sm"
            >
              <contact.icon className="w-4 h-4 text-primary shrink-0" />
              <span className="truncate text-muted-foreground">{contact.value}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Key points */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="text-2xl font-bold mb-8">Merci pour votre attention</h3>
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {keyPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 p-4 glass-effect rounded-xl text-left"
            >
              <div className="p-1 bg-primary/20 rounded-full">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm">{point}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SlideWrapper>
  );
};
