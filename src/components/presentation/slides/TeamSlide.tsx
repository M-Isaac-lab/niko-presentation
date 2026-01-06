import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { Users, GraduationCap, Handshake } from "lucide-react";

const team = [
  { name: "Kenmogne", role: "Gestion projet & relation client", email: "andre.kenmogne@2026.icam.fr" },
  { name: "Bedian", role: "Développement frontend & UX", email: "isaac.bedian@2026.ucac-icam.com" },
  { name: "Kongne Verra", role: "Infrastructure & déploiement", email: "verra.kogne@2026.ucac-icam.com" },
  { name: "Kamdem", role: "Qualité & tests utilisateurs", email: "kamdem@2026.ucac-icam.com" },
  { name: "François Landry", role: "Designer UX/UI", email: "francois.landry@2026.ucac-icam.com" },
];

const partners = [
  { name: "Ucac-Icam", type: "Encadrement académique" },
  { name: "Supabase", type: "Partenaire technologique" },
  { name: "Lovable", type: "Hébergement développement" },
];

export const TeamSlide = () => {
  return (
    <SlideWrapper id="equipe">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-primary/10 rounded-xl">
          <Users className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Équipe & <span className="text-gradient">Partenaires</span>
        </h2>
      </div>

      <p className="text-lg text-muted-foreground mb-12">
        Une équipe passionnée au service de votre succès
      </p>

      {/* Team */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 card-gradient rounded-2xl border border-border/50 group hover:border-primary/30 transition-colors"
          >
            <div className="flex items-start gap-4">
              {/* Avatar placeholder */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-xl font-bold text-primary">
                {member.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-primary text-sm mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.email}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Supervisor */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="p-6 glass-effect rounded-2xl mb-12"
      >
        <div className="flex items-center gap-3 mb-4">
          <GraduationCap className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">Superviseur Académique</h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary">
            IE
          </div>
          <div>
            <p className="font-medium">Igor Ewolo</p>
            <p className="text-sm text-muted-foreground">Ucac-Icam</p>
          </div>
        </div>
      </motion.div>

      {/* Partners */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-6">
          <Handshake className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">Partenariats</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="p-4 card-gradient rounded-xl border border-border/50 text-center"
            >
              <p className="font-semibold text-gradient">{partner.name}</p>
              <p className="text-sm text-muted-foreground mt-1">{partner.type}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SlideWrapper>
  );
};
