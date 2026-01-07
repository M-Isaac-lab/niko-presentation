import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { 
  TrendingUp, 
  Users, 
  Leaf, 
  Shield, 
  Rocket, 
  Clock, 
  ArrowUp, 
  CheckCircle,
  DollarSign,
  Heart,
  Globe,
  Lock,
  FileText,
  Code,
  Zap,
  GraduationCap,
  Target
} from "lucide-react";

const economique = {
  icon: TrendingUp,
  color: "text-green-500",
  bgColor: "bg-green-500/10",
  borderColor: "border-green-500/30",
  items: [
    "Création de valeur durable",
    "Efficacité opérationnelle",
    "ROI 340%"
  ]
};

const social = {
  icon: Users,
  color: "text-blue-500",
  bgColor: "bg-blue-500/10",
  borderColor: "border-blue-500/30",
  items: [
    "Formation 6 vendeurs",
    "Amélioration conditions travail",
    "Satisfaction +26%"
  ]
};

const environnemental = {
  icon: Leaf,
  color: "text-orange-500",
  bgColor: "bg-orange-500/10",
  borderColor: "border-orange-500/30",
  items: [
    "Réduction paperasse",
    "Numérisation intégrale",
    "Cloud éco-responsable"
  ]
};

const ethique = {
  icon: Shield,
  color: "text-purple-500",
  bgColor: "bg-purple-500/10",
  borderColor: "border-purple-500/30",
  items: [
    { label: "Transparence", desc: "Données accessibles" },
    { label: "Traçabilité", desc: "Historique complet" },
    { label: "Sécurité", desc: "Chiffrement SSL" },
    { label: "Conformité", desc: "WCAG AA" }
  ]
};

const innovation = {
  icon: Rocket,
  color: "text-cyan-500",
  bgColor: "bg-cyan-500/10",
  borderColor: "border-cyan-500/30",
  items: [
    { label: "Tech moderne", desc: "React/Next.js" },
    { label: "Scalabilité", desc: "Architecture évolutive" },
    { label: "Compétences", desc: "Formation équipe" },
    { label: "Avenir", desc: "Roadmap claire" }
  ]
};

const kpis = [
  { value: "-75%", label: "Temps Transaction", icon: Clock },
  { value: "+31%", label: "Taux Conversion", icon: ArrowUp },
  { value: "+16%", label: "Précision Inventaire", icon: Target }
];

export const RSESlide = () => {
  return (
    <SlideWrapper id="rse">
      <div className="flex items-center gap-2 mb-3">
        <div className="p-2 bg-primary/20 rounded-xl">
          <Globe className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold">
          Impact <span className="text-gradient">RSE</span> et Responsabilité Sociétale
        </h2>
      </div>

      {/* Top Row: Économique, Social, Environnemental */}
      <div className="grid md:grid-cols-3 gap-3 mb-4">
        {/* Économique */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`p-4 rounded-xl border ${economique.bgColor} ${economique.borderColor}`}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className={`p-2 rounded-lg ${economique.bgColor}`}>
              <economique.icon className={`w-5 h-5 ${economique.color}`} />
            </div>
            <h3 className={`font-semibold text-base ${economique.color}`}>Économique</h3>
          </div>
          <div className="space-y-2">
            {economique.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-sm"
              >
                <ArrowUp className={`w-4 h-4 ${economique.color}`} />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className={`p-4 rounded-xl border ${social.bgColor} ${social.borderColor}`}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className={`p-2 rounded-lg ${social.bgColor}`}>
              <social.icon className={`w-5 h-5 ${social.color}`} />
            </div>
            <h3 className={`font-semibold text-base ${social.color}`}>Social</h3>
          </div>
          <div className="space-y-2">
            {social.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-sm"
              >
                <ArrowUp className={`w-4 h-4 ${social.color}`} />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Environnemental */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className={`p-4 rounded-xl border ${environnemental.bgColor} ${environnemental.borderColor}`}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className={`p-2 rounded-lg ${environnemental.bgColor}`}>
              <environnemental.icon className={`w-5 h-5 ${environnemental.color}`} />
            </div>
            <h3 className={`font-semibold text-base ${environnemental.color}`}>Environnemental</h3>
          </div>
          <div className="space-y-2">
            {environnemental.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-sm"
              >
                <ArrowUp className={`w-4 h-4 ${environnemental.color}`} />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Middle Row: Éthique, Innovation */}
      <div className="grid md:grid-cols-2 gap-3 mb-4">
        {/* Éthique */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className={`p-4 rounded-xl border ${ethique.bgColor} ${ethique.borderColor}`}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className={`p-2 rounded-lg ${ethique.bgColor}`}>
              <ethique.icon className={`w-5 h-5 ${ethique.color}`} />
            </div>
            <h3 className={`font-semibold text-base ${ethique.color}`}>Éthique</h3>
          </div>
          <div className="space-y-2">
            {ethique.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-sm"
              >
                <CheckCircle className={`w-4 h-4 ${ethique.color}`} />
                <div>
                  <span className="font-medium">{item.label} : </span>
                  <span className="text-muted-foreground">{item.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Innovation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className={`p-4 rounded-xl border ${innovation.bgColor} ${innovation.borderColor}`}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className={`p-2 rounded-lg ${innovation.bgColor}`}>
              <innovation.icon className={`w-5 h-5 ${innovation.color}`} />
            </div>
            <h3 className={`font-semibold text-base ${innovation.color}`}>Innovation</h3>
          </div>
          <div className="space-y-2">
            {innovation.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-sm"
              >
                <CheckCircle className={`w-4 h-4 ${innovation.color}`} />
                <div>
                  <span className="font-medium">{item.label} : </span>
                  <span className="text-muted-foreground">{item.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Row: KPIs */}
      <div className="grid md:grid-cols-3 gap-3">
        {kpis.map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-4 card-gradient rounded-xl border border-border/50 text-center glow-effect"
          >
            <div className="inline-flex p-2 bg-primary/10 rounded-lg mb-2">
              <kpi.icon className="w-5 h-5 text-primary" />
            </div>
            <p className="text-3xl md:text-4xl font-bold text-gradient mb-1">{kpi.value}</p>
            <p className="text-sm font-semibold text-muted-foreground">{kpi.label}</p>
          </motion.div>
        ))}
      </div>
    </SlideWrapper>
  );
};

