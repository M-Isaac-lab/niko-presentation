import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { Coins, Users, Server, BookOpen, PieChart } from "lucide-react";

const budgetRH = [
  { role: "Chef de projet & relation client", tauxMensuel: "250 000", duree: "3 mois", total: "750 000" },
  { role: "Développeur Frontend & UX", tauxMensuel: "200 000", duree: "3 mois", total: "600 000" },
  { role: "Infrastructure & déploiement", tauxMensuel: "200 000", duree: "3 mois", total: "600 000" },
  { role: "Qualité & tests", tauxMensuel: "150 000", duree: "3 mois", total: "450 000" },
];

const budgetInfra = [
  { service: "Supabase (PostgreSQL + Auth)", usage: "Base de données PostgreSQL + Auth", cout: "198 000" },
  { service: "Vercel", usage: "Hébergement Frontend", cout: "Gratuit" },
  { service: "Nom de domaine", usage: "nickoplus.com (1 an)", cout: "15 000" },
  { service: "Certificat SSL", usage: "Let's Encrypt", cout: "Gratuit" },
  { service: "Sauvegardes & sécurité", usage: "Backup automatique (12 mois)", cout: "90 000" },
  { service: "Réserve technique", usage: "Bande passante & imprévus", cout: "147 000" },
];

const budgetFormation = [
  { formation: "Formation vendeurs Douala", public: "3 vendeurs", cout: "75 000" },
  { formation: "Formation vendeurs Kribi", public: "2 vendeurs", cout: "50 000" },
  { formation: "Formation gérante / admin", public: "1 personne", cout: "100 000" },
  { formation: "Accompagnement post-déploiement", public: "1 mois", cout: "25 000" },
];

const budgetRecap = [
  { poste: "Ressources humaines", montant: "2 400 000", percent: 77.4, color: "bg-blue-500" },
  { poste: "Infrastructure & hébergement", montant: "450 000", percent: 14.5, color: "bg-green-500" },
  { poste: "Formation & accompagnement", montant: "250 000", percent: 8.1, color: "bg-purple-500" },
];

export const BudgetSlide = () => {
  return (
    <SlideWrapper id="budget">
      <div className="flex items-center gap-2 mb-3">
        <div className="p-2 bg-primary/20 rounded-xl">
          <Coins className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Budget <span className="text-gradient">Détaillé</span>
        </h2>
      </div>

      <p className="text-base md:text-lg text-muted-foreground mb-4">
        Investissement total : <span className="font-bold text-gradient">3 100 000 FCFA</span> — Durée : 3 mois
      </p>

      <div className="grid lg:grid-cols-2 gap-3">
        {/* Ressources Humaines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-3 card-gradient rounded-xl border border-border/50"
        >
          <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-500" />
            Ressources Humaines
            <span className="ml-auto text-blue-500 font-bold">2 400 000 FCFA</span>
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-1.5 text-muted-foreground font-medium">Rôle</th>
                  <th className="text-right py-1.5 text-muted-foreground font-medium">Taux/mois</th>
                  <th className="text-right py-1.5 text-muted-foreground font-medium">Durée</th>
                  <th className="text-right py-1.5 text-muted-foreground font-medium">Total</th>
                </tr>
              </thead>
              <tbody>
                {budgetRH.map((item, i) => (
                  <motion.tr
                    key={item.role}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="border-b border-border/30"
                  >
                    <td className="py-1.5">{item.role}</td>
                    <td className="py-1.5 text-right text-muted-foreground">{item.tauxMensuel}</td>
                    <td className="py-1.5 text-right text-muted-foreground">{item.duree}</td>
                    <td className="py-1.5 text-right font-semibold">{item.total}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Infrastructure & Hébergement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="p-3 card-gradient rounded-xl border border-border/50"
        >
          <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
            <Server className="w-4 h-4 text-green-500" />
            Infrastructure & Hébergement (12 mois)
            <span className="ml-auto text-green-500 font-bold">450 000 FCFA</span>
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-1.5 text-muted-foreground font-medium">Service</th>
                  <th className="text-left py-1.5 text-muted-foreground font-medium">Usage</th>
                  <th className="text-right py-1.5 text-muted-foreground font-medium">Coût</th>
                </tr>
              </thead>
              <tbody>
                {budgetInfra.map((item, i) => (
                  <motion.tr
                    key={item.service}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="border-b border-border/30"
                  >
                    <td className="py-1.5 font-medium">{item.service}</td>
                    <td className="py-1.5 text-muted-foreground">{item.usage}</td>
                    <td className={`py-1.5 text-right font-semibold ${item.cout === "Gratuit" ? "text-green-500" : ""}`}>
                      {item.cout === "Gratuit" ? item.cout : item.cout}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Formation & Accompagnement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="p-3 card-gradient rounded-xl border border-border/50"
        >
          <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-purple-500" />
            Formation & Accompagnement
            <span className="ml-auto text-purple-500 font-bold">250 000 FCFA</span>
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-1.5 text-muted-foreground font-medium">Formation</th>
                  <th className="text-left py-1.5 text-muted-foreground font-medium">Public</th>
                  <th className="text-right py-1.5 text-muted-foreground font-medium">Coût</th>
                </tr>
              </thead>
              <tbody>
                {budgetFormation.map((item, i) => (
                  <motion.tr
                    key={item.formation}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="border-b border-border/30"
                  >
                    <td className="py-1.5 font-medium">{item.formation}</td>
                    <td className="py-1.5 text-muted-foreground">{item.public}</td>
                    <td className="py-1.5 text-right font-semibold">{item.cout}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Récapitulatif */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="p-3 card-gradient rounded-xl border border-border/50"
        >
          <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
            <PieChart className="w-4 h-4 text-primary" />
            Récapitulatif des budgets
          </h3>
          
          {/* Visual bar chart */}
          <div className="space-y-3 mb-4">
            {budgetRecap.map((item, i) => (
              <motion.div
                key={item.poste}
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "100%" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between text-sm mb-1">
                  <span>{item.poste}</span>
                  <span className="font-semibold">{item.montant} FCFA ({item.percent}%)</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percent}%` }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`h-full ${item.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-2 bg-primary/10 rounded-lg text-center">
            <p className="text-sm text-muted-foreground">Budget Total</p>
            <p className="text-xl font-bold text-gradient">3 100 000 FCFA</p>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
};
