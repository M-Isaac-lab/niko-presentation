import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { Wrench, CheckCircle, Code, Shield, Server } from "lucide-react";

const achievements = [
  {
    category: "Technologies",
    icon: Code,
    items: [
      "React 18 + TypeScript",
      "Tailwind CSS + shadcn/ui",
      "PWA avec Service Workers",
      "Supabase (PostgreSQL + Auth)",
    ],
  },
  {
    category: "Architecture",
    icon: Server,
    items: [
      "Architecture BaaS (Backend as a Service)",
      "Synchronisation temps réel multi-boutiques",
      "Mode hors ligne robuste",
      "Déploiement Vercel + Supabase",
    ],
  },
  {
    category: "Sécurité & Qualité",
    icon: Shield,
    items: [
      "Authentification JWT sécurisée",
      "Rôles et permissions granulaires",
      "Chiffrement SSL/TLS",
      "Tests automatisés (100% coverage)",
    ],
  },
];

const stats = [
  { value: "8", label: "Modules fonctionnels" },
  { value: "12", label: "Semaines de dev" },
  { value: "2", label: "Boutiques connectées" },
  { value: "100%", label: "Tests passés" },
];

export const RealisationsSlide = () => {
  return (
    <SlideWrapper id="realisations" slideNumber={5} sectionTitle="Réalisations">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-primary/20 rounded-xl">
          <Wrench className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Réalisations <span className="text-gradient">Techniques</span>
        </h2>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="p-4 glass-effect rounded-xl text-center"
          >
            <p className="text-3xl font-bold text-gradient">{stat.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Achievements by category */}
      <div className="grid md:grid-cols-3 gap-6">
        {achievements.map((category, i) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 card-gradient rounded-2xl border border-border/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <category.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">{category.category}</h3>
            </div>
            <div className="space-y-3">
              {category.items.map((item, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + j * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SlideWrapper>
  );
};
