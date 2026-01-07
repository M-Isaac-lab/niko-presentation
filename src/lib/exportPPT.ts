import pptxgen from "pptxgenjs";

interface SlideData {
  title: string;
  subtitle?: string;
  content?: string[];
  bullets?: string[];
}

const slides: SlideData[] = [
  {
    title: "NICKOPLUS PRO",
    subtitle: "Digitalisation des Boutiques Nicko",
    content: ["Projet de Fin d'Études — Génie Logiciel", "UCAC-ICAM Promotion 2025"],
  },
  {
    title: "Sommaire",
    bullets: [
      "1. Présentation Entreprise",
      "2. Mise en Situation",
      "3. Analyse et Solutions",
      "4. Management de Projet",
      "5. Réalisations",
      "6. Démonstration",
      "7. Conclusion et Perspectives",
    ],
  },
  {
    title: "Présentation Entreprise",
    subtitle: "Les Boutiques Nicko",
    bullets: [
      "Secteur : Commerce de détail cosmétiques",
      "Localisation : Yaoundé, Cameroun",
      "2 boutiques : Essos & Nkolbisson",
      "Clientèle : Femmes 18-45 ans",
      "Fondée : 2018 par Rose Gwodog",
    ],
  },
  {
    title: "Mise en Situation",
    subtitle: "Problématique identifiée",
    bullets: [
      "Gestion 100% manuelle sur cahiers",
      "Aucune synchronisation entre boutiques",
      "Ruptures de stock fréquentes",
      "Erreurs de caisse récurrentes",
      "Perte de temps considérable",
    ],
  },
  {
    title: "Objectifs Stratégiques",
    bullets: [
      "✅ OBJ-01 : Réduction du temps de transaction (-75%)",
      "✅ OBJ-02 : Diminution des ruptures de stock (-60%)",
      "✅ OBJ-03 : Centralisation des données temps réel",
      "✅ OBJ-04 : Interface intuitive (100% adoption)",
      "✅ OBJ-05 : Mode hors ligne fonctionnel",
      "✅ OBJ-06 : Scalabilité multi-boutiques",
      "✅ OBJ-07 : Sécurité des données (SSL, RLS)",
    ],
  },
  {
    title: "Solution : NICKOPLUS PRO",
    subtitle: "Application web progressive (PWA)",
    bullets: [
      "8 modules fonctionnels complets",
      "Mode hors ligne avec synchronisation",
      "Dashboard multi-boutiques temps réel",
      "Gestion des ventes en 2 minutes",
      "Alertes de stock automatiques",
      "Architecture cloud-first (Supabase)",
    ],
  },
  {
    title: "Architecture Technique",
    subtitle: "Stack technologique",
    bullets: [
      "Frontend : React 18 + TypeScript + TailwindCSS",
      "Backend : Supabase (PostgreSQL + Auth + Edge Functions)",
      "PWA : Service Workers + IndexedDB",
      "Déploiement : Lovable Cloud",
      "Sécurité : SSL/TLS + Row Level Security",
    ],
  },
  {
    title: "Management de Projet",
    subtitle: "Équipe et gouvernance",
    bullets: [
      "Chef de Projet : KENMOGNE NGAMGA Andre Yoann",
      "Développeurs : BEDIAN, KONGNE, KAMDEM, AMOUGOU",
      "Méthodologie : Agile/Scrum",
      "Durée : 8 semaines (6 nov - 31 déc 2025)",
      "Réunions hebdomadaires avec la cliente",
    ],
  },
  {
    title: "Planning Projet",
    subtitle: "8 semaines intensives",
    bullets: [
      "S1 : Étude du besoin et spécifications",
      "S2-3 : Conception UI/UX et architecture",
      "S4-6 : Développement des modules",
      "S7 : Tests UAT et formation",
      "S8 : Déploiement et support",
      "✅ 100% des jalons respectés",
    ],
  },
  {
    title: "Gestion des Risques",
    subtitle: "Matrice de criticité",
    bullets: [
      "🔴 R1 : Retard besoins → Réunions hebdomadaires",
      "🔴 R2 : Turnover → Documentation exhaustive",
      "🔴 R5 : Adoption → UX intuitive + formation",
      "🔴 R7 : Sécurité → Chiffrement SSL",
      "🟡 R3-R4-R6 : Risques modérés maîtrisés",
      "🟢 R8 : Budget maîtrisé (Supabase gratuit)",
    ],
  },
  {
    title: "Budget Détaillé",
    subtitle: "Investissement total : 3 100 000 FCFA",
    bullets: [
      "Ressources Humaines : 2 250 000 FCFA",
      "Infrastructure & Hébergement : 600 000 FCFA/an",
      "Formation & Accompagnement : 250 000 FCFA",
      "ROI estimé : 6-8 mois",
    ],
  },
  {
    title: "Impact Mesuré",
    subtitle: "KPIs atteints",
    bullets: [
      "-75% temps de transaction (5min → 1min15)",
      "-60% ruptures de stock",
      "100% adoption utilisateurs",
      "99% disponibilité système",
      "0 vulnérabilités critiques",
    ],
  },
  {
    title: "Démonstration",
    subtitle: "Application en production",
    content: ["🌐 https://nikoplus.lovable.app"],
    bullets: [
      "Processus de vente < 2 minutes",
      "Dashboard multi-boutiques",
      "Mode hors ligne fonctionnel",
      "Gestion stocks temps réel",
    ],
  },
  {
    title: "Vision Future",
    subtitle: "Perspectives d'évolution",
    bullets: [
      "Module e-commerce B2C",
      "Programme de fidélité clients",
      "IA prédictive pour les stocks",
      "Notifications SMS/WhatsApp",
      "Expansion régionale Afrique Centrale",
    ],
  },
  {
    title: "Conclusion",
    subtitle: "Projet réussi",
    bullets: [
      "✅ Solution adaptée au contexte camerounais",
      "✅ Tous les objectifs atteints",
      "✅ Adoption à 100% par les utilisatrices",
      "✅ Modèle économique viable",
      "✅ Potentiel de scalabilité confirmé",
    ],
  },
  {
    title: "Contact",
    subtitle: "Équipe NICKOPLUS PRO",
    bullets: [
      "📧 team@nickoplus-project.com",
      "📱 +237 696 623 604",
      "🌐 https://nikoplus.lovable.app",
      "💻 github.com/Ken-Andre/nikoplus",
    ],
    content: ["Merci pour votre attention !"],
  },
];

export const exportToPPT = () => {
  const pres = new pptxgen();
  
  // Set presentation properties
  pres.title = "NICKOPLUS PRO - Présentation";
  pres.author = "Équipe NICKOPLUS";
  pres.subject = "Digitalisation des Boutiques Nicko";
  
  // Define master slide
  pres.defineSlideMaster({
    title: "NICKOPLUS_MASTER",
    background: { color: "0F172A" },
  });

  slides.forEach((slideData, index) => {
    const slide = pres.addSlide({ masterName: "NICKOPLUS_MASTER" });
    
    // Title
    slide.addText(slideData.title, {
      x: 0.5,
      y: 0.5,
      w: "90%",
      h: 0.8,
      fontSize: 32,
      bold: true,
      color: "FFFFFF",
    });
    
    // Subtitle
    if (slideData.subtitle) {
      slide.addText(slideData.subtitle, {
        x: 0.5,
        y: 1.3,
        w: "90%",
        h: 0.5,
        fontSize: 18,
        color: "94A3B8",
      });
    }
    
    // Content
    if (slideData.content) {
      slideData.content.forEach((text, i) => {
        slide.addText(text, {
          x: 0.5,
          y: 2 + i * 0.5,
          w: "90%",
          h: 0.4,
          fontSize: 14,
          color: "CBD5E1",
        });
      });
    }
    
    // Bullets
    if (slideData.bullets) {
      const bulletY = slideData.subtitle ? 2 : 1.5;
      slideData.bullets.forEach((bullet, i) => {
        slide.addText(bullet, {
          x: 0.7,
          y: bulletY + i * 0.45,
          w: "85%",
          h: 0.4,
          fontSize: 14,
          color: "E2E8F0",
          bullet: { type: "bullet" },
        });
      });
    }
    
    // Slide number
    slide.addText(`${index + 1} / ${slides.length}`, {
      x: "85%",
      y: "92%",
      w: 1,
      h: 0.3,
      fontSize: 10,
      color: "64748B",
    });
  });

  // Save the presentation
  pres.writeFile({ fileName: "NICKOPLUS_PRO_Presentation.pptx" });
};
