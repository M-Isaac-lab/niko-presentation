import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { 
  Coins, 
  TrendingUp, 
  FileText, 
  Clock, 
  Users, 
  Server, 
  GraduationCap,
  CheckCircle,
  PieChart,
  Target,
  Zap,
  BarChart3
} from "lucide-react";

const keyMetrics = [
  { 
    label: "Budget 3 mois", 
    value: "3.1M", 
    unit: "FCFA",
    icon: Coins,
    color: "text-primary",
    bgColor: "bg-primary/10",
    size: "large"
  },
  { 
    label: "ROI Projet", 
    value: "340%", 
    icon: TrendingUp,
    color: "text-green-500",
    bgColor: "bg-green-500/10"
  },
  { 
    label: "Réduction Ruptures", 
    value: "-60%", 
    icon: FileText,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10"
  },
  { 
    label: "Temps Reporting", 
    value: "-87%", 
    icon: Clock,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  }
];

const costDistribution = [
  { label: "RH", value: 77.4, color: "bg-teal-500", textColor: "text-teal-500" },
  { label: "Infrastructure", value: 14.5, color: "bg-blue-500", textColor: "text-blue-500" },
  { label: "Formation", value: 8.1, color: "bg-purple-500", textColor: "text-purple-500" }
];

const advantages = [
  "Gain d'efficacité opérationnelle",
  "Optimisation des ressources",
  "Réduction des coûts de gestion",
  "Décisions informées en temps réel"
];

const costDetails = [
  { 
    label: "Ressources Humaines", 
    amount: "2.4M FCFA", 
    percent: "77.4%",
    icon: Users,
    color: "text-teal-500",
    bgColor: "bg-teal-500/10"
  },
  { 
    label: "Infrastructure", 
    amount: "450K FCFA", 
    percent: "14.5%",
    icon: Server,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  { 
    label: "Formation & Accompagnement", 
    amount: "250K FCFA", 
    percent: "8.1%",
    icon: GraduationCap,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  }
];

export const BusinessModelSlide = () => {
  // Calculate angles for donut chart
  const total = costDistribution.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;
  const segments = costDistribution.map(item => {
    const angle = (item.value / total) * 360;
    const segment = {
      ...item,
      startAngle: currentAngle,
      endAngle: currentAngle + angle
    };
    currentAngle += angle;
    return segment;
  });

  return (
    <SlideWrapper id="business-model">
      <div className="flex items-center gap-2 mb-3">
        <div className="p-2 bg-primary/20 rounded-xl">
          <PieChart className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold">
          Business Model et <span className="text-gradient">Viabilité Économique</span>
        </h2>
      </div>

      {/* Top Section - Key Metrics */}
      <div className="grid md:grid-cols-4 gap-3 mb-4">
        {keyMetrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className={`p-4 card-gradient rounded-xl border border-border/50 text-center ${
              metric.size === "large" ? "md:col-span-1" : ""
            }`}
          >
            <div className={`inline-flex p-2 rounded-lg mb-2 ${metric.bgColor}`}>
              <metric.icon className={`w-5 h-5 ${metric.color}`} />
            </div>
            <p className={`text-2xl md:text-3xl font-bold ${metric.color} mb-1`}>
              {metric.value}
            </p>
            {metric.unit && (
              <p className="text-xs text-muted-foreground mb-1">{metric.unit}</p>
            )}
            <p className="text-sm font-semibold text-muted-foreground">{metric.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Middle Section - Cost Distribution and Advantages */}
      <div className="grid md:grid-cols-2 gap-3 mb-4">
        {/* Répartition des Coûts */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-4 card-gradient rounded-xl border border-border/50"
        >
          <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
            <PieChart className="w-5 h-5 text-primary" />
            Répartition des Coûts
          </h3>
          
          {/* Donut Chart */}
          <div className="relative w-48 h-48 mx-auto mb-4">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {segments.map((segment, i) => {
                const startAngle = segment.startAngle;
                const endAngle = segment.endAngle;
                const largeArcFlag = segment.value > 50 ? 1 : 0;
                
                const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
                const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
                const x2 = 50 + 40 * Math.cos((endAngle * Math.PI) / 180);
                const y2 = 50 + 40 * Math.sin((endAngle * Math.PI) / 180);
                
                const pathData = [
                  `M 50 50`,
                  `L ${x1} ${y1}`,
                  `A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                  `Z`
                ].join(' ');
                
                // Map colors
                const colorMap: Record<string, string> = {
                  'bg-teal-500': '#14b8a6',
                  'bg-blue-500': '#3b82f6',
                  'bg-purple-500': '#a855f7'
                };
                
                return (
                  <motion.path
                    key={i}
                    d={pathData}
                    fill={colorMap[segment.color] || segment.color}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: i * 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                );
              })}
              {/* Inner circle for donut effect */}
              <circle cx="50" cy="50" r="25" fill="hsl(var(--background))" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <p className="text-2xl font-bold text-gradient">3.1M</p>
                <p className="text-xs text-muted-foreground">FCFA</p>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-2">
            {costDistribution.map((item, i) => (
              <div key={item.label} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded ${item.color}`} />
                  <span className="text-muted-foreground">{item.label}</span>
                </div>
                <span className={`font-semibold ${item.textColor}`}>{item.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Avantages Clés */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-4 card-gradient rounded-xl border border-border/50"
        >
          <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Avantages Clés
          </h3>
          <div className="space-y-3">
            {advantages.map((advantage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-sm"
              >
                <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>{advantage}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Section - Detailed Cost Breakdown */}
      <div className="grid md:grid-cols-3 gap-3">
        {costDetails.map((detail, i) => (
          <motion.div
            key={detail.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-4 card-gradient rounded-xl border border-border/50 text-center"
          >
            <div className={`inline-flex p-3 rounded-lg mb-3 ${detail.bgColor}`}>
              <detail.icon className={`w-6 h-6 ${detail.color}`} />
            </div>
            <h4 className="text-sm font-semibold mb-2">{detail.label}</h4>
            <p className="text-xl font-bold text-gradient mb-1">{detail.amount}</p>
            <p className={`text-sm font-semibold ${detail.color}`}>{detail.percent}</p>
          </motion.div>
        ))}
      </div>
    </SlideWrapper>
  );
};

