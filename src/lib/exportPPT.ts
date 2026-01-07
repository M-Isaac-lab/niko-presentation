import pptxgen from "pptxgenjs";

// Couleurs du thème (alignées avec la présentation React)
const colors = {
  primary: "3B82F6", // Blue
  accent: "8B5CF6", // Purple
  success: "10B981", // Green
  warning: "F59E0B", // Yellow
  danger: "EF4444", // Red
  dark: "0F172A", // Dark background
  light: "F8FAFC", // Light text
  muted: "94A3B8", // Muted text
};

export const exportToPPT = () => {
  const pres = new pptxgen();
  
  // Propriétés de la présentation
  pres.title = "NICKOPLUS PRO - Présentation";
  pres.author = "Équipe NICKOPLUS";
  pres.subject = "Digitalisation des Boutiques Nicko";
  pres.company = "UCAC-ICAM";
  pres.layout = "LAYOUT_WIDE"; // Format 16:9
  
  // Définir le master slide avec thème sombre
  pres.defineSlideMaster({
    title: "NICKOPLUS_MASTER",
    background: { color: colors.dark },
    objects: [
      {
        rect: {
          x: 0,
          y: 0,
          w: "100%",
          h: 0.2,
          fill: { color: colors.primary, transparency: 20 },
        },
      },
    ],
  });

  // ============================================
  // SLIDE 1: TITRE
  // ============================================
  const slide1 = pres.addSlide({ masterName: "NICKOPLUS_MASTER" });
  slide1.background = { color: colors.dark };
  
  // Titre principal
  slide1.addText("NICKOPLUS PRO", {
    x: 0.5,
    y: 1.5,
    w: 9,
    h: 1,
    fontSize: 64,
    bold: true,
    color: colors.primary,
    align: "center",
    fontFace: "Arial",
  });
  
  // Sous-titre
  slide1.addText("Digitalisation des Boutiques Nicko", {
    x: 0.5,
    y: 2.6,
    w: 9,
    h: 0.5,
    fontSize: 24,
    color: colors.muted,
    align: "center",
  });
  
  slide1.addText("Système de gestion des ventes et stocks multi-boutiques", {
    x: 0.5,
    y: 3.2,
    w: 9,
    h: 0.4,
    fontSize: 16,
    color: colors.light,
    align: "center",
  });
  
  // Équipe
  const teamMembers = [
    "KENMOGNE André Yoann",
    "BEDIAN Isaac Quentin",
    "KONGNE Verra Joyce",
    "KAMDEM Joseph Léonard",
    "AMOUGOU François Landry",
  ];
  
  let teamY = 4;
  teamMembers.forEach((member, i) => {
    slide1.addText(`• ${member}`, {
      x: 2,
      y: teamY + i * 0.3,
      w: 6,
      h: 0.25,
      fontSize: 14,
      color: colors.light,
      align: "center",
    });
  });
  
  // Encadreur
  slide1.addText("Encadreur académique : Igor Ewolo — UCAC-ICAM", {
    x: 0.5,
    y: 6.5,
    w: 9,
    h: 0.4,
    fontSize: 14,
    color: colors.muted,
    align: "center",
  });

  // ============================================
  // SLIDE 2: SOMMAIRE
  // ============================================
  const slide2 = pres.addSlide({ masterName: "NICKOPLUS_MASTER" });
  slide2.addText("Sommaire", {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.6,
    fontSize: 40,
    bold: true,
    color: colors.primary,
  });
  
  slide2.addText("Plan de la présentation — 19 slides", {
    x: 0.5,
    y: 1.2,
    w: 9,
    h: 0.4,
    fontSize: 16,
    color: colors.muted,
  });
  
  const sommaireItems = [
    "1. Présentation Entreprise — Les Boutiques Nicko et leur activité",
    "2. Mise en Situation — Contexte, problématique et objectifs stratégiques",
    "3. Analyse et Solutions — NICKOPLUS PRO : fonctionnalités détaillées",
    "4. Management de Projet — Équipe, planning, budget et gestion des risques",
    "5. Réalisations — Architecture technique et réalisations",
    "6. Démonstration — Présentation en direct de l'application",
    "7. Conclusion et Perspectives — Impact, bilan et vision future",
  ];
  
  sommaireItems.forEach((item, i) => {
    slide2.addText(item, {
      x: 0.7,
      y: 2 + i * 0.5,
      w: 8.6,
      h: 0.4,
      fontSize: 14,
      color: colors.light,
      bullet: { type: "number" },
    });
  });

  // ============================================
  // SLIDE 3: PRÉSENTATION ENTREPRISE
  // ============================================
  const slide3 = pres.addSlide({ masterName: "NICKOPLUS_MASTER" });
  slide3.addText("Les Boutiques Nicko", {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.6,
    fontSize: 36,
    bold: true,
    color: colors.primary,
  });
  
  slide3.addText("Une entreprise familiale au cœur de la décoration textile et d'intérieur", {
    x: 0.5,
    y: 0.9,
    w: 9,
    h: 0.4,
    fontSize: 14,
    color: colors.muted,
  });
  
  // Produits & Services
  slide3.addText("Produits & Services", {
    x: 0.5,
    y: 1.5,
    w: 4.5,
    h: 0.4,
    fontSize: 20,
    bold: true,
    color: colors.primary,
  });
  
  const produits = [
    "• Décoration de fenêtres : Rideaux, voilages, tissus sur mesure",
    "• Décoration de chambre : Draps, taies, housses",
    "• Décoration de salon : Coussins, revêtements",
    "• Prestations associées : Prise de mesures, confection, installation",
  ];
  
  produits.forEach((item, i) => {
    slide3.addText(item, {
      x: 0.7,
      y: 2 + i * 0.35,
      w: 4.3,
      h: 0.3,
      fontSize: 12,
      color: colors.light,
    });
  });
  
  // Implantation
  slide3.addText("Implantation", {
    x: 5.5,
    y: 1.5,
    w: 4.5,
    h: 0.4,
    fontSize: 20,
    bold: true,
    color: colors.accent,
  });
  
  slide3.addText("• Douala : Boutique principale — Zone urbaine à forte activité", {
    x: 5.7,
    y: 2,
    w: 4.3,
    h: 0.3,
    fontSize: 12,
    color: colors.light,
  });
  
  slide3.addText("• Kribi : Boutique secondaire — Zone côtière touristique", {
    x: 5.7,
    y: 2.4,
    w: 4.3,
    h: 0.3,
    fontSize: 12,
    color: colors.light,
  });
  
  slide3.addText("Direction : Mme Pia Dim Nicole — Directrice des Boutiques Nicko", {
    x: 5.7,
    y: 3.2,
    w: 4.3,
    h: 0.3,
    fontSize: 12,
    bold: true,
    color: colors.primary,
  });

  // ============================================
  // SLIDE 4: MISE EN SITUATION
  // ============================================
  const slide4 = pres.addSlide({ masterName: "NICKOPLUS_MASTER" });
  slide4.addText("Mise en Situation", {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.6,
    fontSize: 36,
    bold: true,
    color: colors.primary,
  });
  
  slide4.addText("Contexte — Les Boutiques Nicko (Douala & Kribi, Cameroun)", {
    x: 0.5,
    y: 0.9,
    w: 9,
    h: 0.4,
    fontSize: 14,
    color: colors.muted,
  });
  
  slide4.addText("Entreprise familiale avec deux boutiques physiques fonctionnant de manière indépendante, reposant sur des processus manuels générant des frictions opérationnelles critiques.", {
    x: 0.5,
    y: 1.4,
    w: 9,
    h: 0.5,
    fontSize: 12,
    color: colors.light,
  });
  
  // Problèmes
  slide4.addText("Problèmes identifiés", {
    x: 0.5,
    y: 2.2,
    w: 4.5,
    h: 0.4,
    fontSize: 18,
    bold: true,
    color: colors.danger,
  });
  
  const problemes = [
    "• Gestion manuelle : Ventes enregistrées sur cahiers papier",
    "• Absence de synchronisation : Aucune communication entre boutiques",
    "• Manque de visibilité : Impossible d'identifier les produits performants",
    "• Ruptures de stock : Non anticipées, ventes manquées",
  ];
  
  problemes.forEach((item, i) => {
    slide4.addText(item, {
      x: 0.7,
      y: 2.7 + i * 0.4,
      w: 4.3,
      h: 0.3,
      fontSize: 11,
      color: colors.light,
    });
  });
  
  // Vision
  slide4.addText("Notre vision", {
    x: 5.5,
    y: 2.2,
    w: 4.5,
    h: 0.4,
    fontSize: 18,
    bold: true,
    color: colors.success,
  });
  
  slide4.addText("Une plateforme unique pour centraliser, optimiser et piloter l'activité des deux boutiques.", {
    x: 5.7,
    y: 2.7,
    w: 4.3,
    h: 0.6,
    fontSize: 12,
    color: colors.light,
  });
  
  slide4.addText("Les objectifs stratégiques détaillés seront présentés dans la section suivante.", {
    x: 5.7,
    y: 3.5,
    w: 4.3,
    h: 0.4,
    fontSize: 11,
    color: colors.muted,
  });

  // ============================================
  // SLIDE 5: 7 OBJECTIFS STRATÉGIQUES
  // ============================================
  const slide5 = pres.addSlide({ masterName: "NICKOPLUS_MASTER" });
  slide5.addText("7 Objectifs Stratégiques", {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.6,
    fontSize: 36,
    bold: true,
    color: colors.primary,
  });
  
  slide5.addText("La digitalisation comme stratégie pour moderniser et pérenniser l'entreprise", {
    x: 0.5,
    y: 0.9,
    w: 9,
    h: 0.4,
    fontSize: 14,
    color: colors.muted,
  });
  
  const objectifs = [
    { text: "Centraliser les stocks — Gérer les stocks de Douala et Kribi dans une base de données unique", status: "Atteint" },
    { text: "Suivi temps réel des ventes — Assurer une synchronisation automatique des données", status: "Atteint" },
    { text: "Réduire les ruptures de stock — Mettre en place un système d'alertes automatiques", status: "Atteint (-60%)" },
    { text: "Optimiser la gestion fournisseurs — Centraliser les commandes et les livraisons", status: "Atteint" },
    { text: "Faciliter la prise de décision — Intégrer un tableau de bord d'analyses de performance", status: "Atteint" },
    { text: "Former et responsabiliser — Garantir l'adoption de l'outil par les vendeuses et la gérante", status: "Atteint (100%)" },
    { text: "Interface intuitive — Conçue pour des utilisateurs peu familiers avec le numérique", status: "Atteint" },
  ];
  
  objectifs.forEach((obj, i) => {
    const yPos = 1.5 + i * 0.5;
    slide5.addText(`✅ ${obj.text}`, {
      x: 0.7,
      y: yPos,
      w: 7,
      h: 0.4,
      fontSize: 11,
      color: colors.light,
    });
    slide5.addText(obj.status, {
      x: 7.8,
      y: yPos,
      w: 1.7,
      h: 0.4,
      fontSize: 11,
      bold: true,
      color: colors.success,
      align: "right",
    });
  });
  
  slide5.addText("100% des objectifs atteints — Tous les critères métier, techniques et académiques validés", {
    x: 0.5,
    y: 5.5,
    w: 9,
    h: 0.4,
    fontSize: 14,
    bold: true,
    color: colors.success,
    align: "center",
  });

  // ============================================
  // SLIDE 6: ANALYSE & SOLUTIONS
  // ============================================
  const slide6 = pres.addSlide({ masterName: "NICKOPLUS_MASTER" });
  slide6.addText("Analyse & Solutions", {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.6,
    fontSize: 36,
    bold: true,
    color: colors.primary,
  });
  
  // Contraintes
  slide6.addText("Contraintes identifiées", {
    x: 0.5,
    y: 1.2,
    w: 4.5,
    h: 0.4,
    fontSize: 18,
    bold: true,
    color: colors.warning,
  });
  
  const contraintes = [
    "• Budget limité (solution open-source)",
    "• Connexion internet instable",
    "• Personnel peu formé au numérique",
    "• Multi-localisation des boutiques",
  ];
  
  contraintes.forEach((item, i) => {
    slide6.addText(item, {
      x: 0.7,
      y: 1.7 + i * 0.4,
      w: 4.3,
      h: 0.3,
      fontSize: 12,
      color: colors.light,
    });
  });
  
  // Approche
  slide6.addText("Notre approche", {
    x: 5.5,
    y: 1.2,
    w: 4.5,
    h: 0.4,
    fontSize: 18,
    bold: true,
    color: colors.primary,
  });
  
  const approche = [
    "• Application web progressive (PWA) fonctionnant hors ligne",
    "• Synchronisation automatique multi-boutiques",
    "• Interface intuitive adaptée aux utilisateurs peu familiers",
    "• Solution open-source pour maîtriser les coûts",
  ];
  
  approche.forEach((item, i) => {
    slide6.addText(item, {
      x: 5.7,
      y: 1.7 + i * 0.4,
      w: 4.3,
      h: 0.3,
      fontSize: 12,
      color: colors.light,
    });
  });
  
  // Solution highlight
  slide6.addText("Notre réponse : NICKOPLUS PRO", {
    x: 0.5,
    y: 3.8,
    w: 9,
    h: 0.5,
    fontSize: 24,
    bold: true,
    color: colors.primary,
    align: "center",
  });
  
  slide6.addText("Une application web progressive (PWA) adaptée au contexte local, fonctionnant hors ligne et optimisée pour une adoption rapide.", {
    x: 0.5,
    y: 4.4,
    w: 9,
    h: 0.5,
    fontSize: 12,
    color: colors.light,
    align: "center",
  });

  // ============================================
  // SLIDE 7: NOTRE SOLUTION
  // ============================================
  const slide7 = pres.addSlide({ masterName: "NICKOPLUS_MASTER" });
  slide7.addText("Notre Solution", {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.6,
    fontSize: 36,
    bold: true,
    color: colors.primary,
  });
  
  slide7.addText("NICKOPLUS PRO — Une plateforme tout-en-un pour les boutiques Nicko", {
    x: 0.5,
    y: 0.9,
    w: 9,
    h: 0.4,
    fontSize: 16,
    color: colors.muted,
  });
  
  const features = [
    { icon: "🌐", text: "Multi-boutiques : Douala & Kribi synchronisées" },
    { icon: "📱", text: "PWA : Fonctionne hors ligne" },
    { icon: "⚡", text: "Rapidité : Vente en < 2 minutes" },
    { icon: "📊", text: "Pilotage : Dashboard temps réel" },
  ];
  
  features.forEach((feature, i) => {
    const xPos = i % 2 === 0 ? 0.5 : 5.5;
    const yPos = 1.8 + Math.floor(i / 2) * 1.2;
    
    // Carte avec fond
    slide7.addShape(pres.ShapeType.rect, {
      x: xPos,
      y: yPos,
      w: 4.5,
      h: 1,
      fill: { color: colors.primary, transparency: 90 },
      line: { color: colors.primary, width: 1 },
    });
    
    slide7.addText(`${feature.icon} ${feature.text}`, {
      x: xPos + 0.2,
      y: yPos + 0.3,
      w: 4.1,
      h: 0.4,
      fontSize: 14,
      bold: true,
      color: colors.light,
      align: "center",
    });
  });

  // ============================================
  // SLIDE 8: FONCTIONNALITÉS DÉTAILLÉES
  // ============================================
  const slide8 = pres.addSlide({ masterName: "NICKOPLUS_MASTER" });
  slide8.addText("NICKOPLUS PRO — Fonctionnalités", {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.6,
    fontSize: 32,
    bold: true,
    color: colors.primary,
  });
  
  const modules = [
    "1. Application Web Responsive — Accessible sur ordinateur, tablette et smartphone",
    "2. Gestion des Ventes — Enregistrement rapide, historique, génération de tickets",
    "3. Gestion des Stocks — Consultation temps réel, alertes de rupture automatiques",
    "4. Gestion des Fournisseurs — Répertoire centralisé et suivi des commandes",
    "5. Tableau de Bord — Statistiques et KPIs en temps réel pour le pilotage",
    "6. Synchronisation Multi-boutiques — Données consolidées entre Douala et Kribi",
    "7. Gestion des Utilisateurs — Rôles : Vendeuse, Gérante, Administrateur",
    "8. Formation & Support — Documentation et sessions de formation incluses",
  ];
  
  modules.forEach((module, i) => {
    slide8.addText(module, {
      x: 0.7,
      y: 1.2 + i * 0.45,
      w: 8.6,
      h: 0.35,
      fontSize: 11,
      color: colors.light,
      bullet: { type: "number" },
    });
  });
  
  slide8.addText("Processus de vente < 2 minutes : Sélection produits → Mode paiement → Calcul automatique → Reçu professionnel", {
    x: 0.5,
    y: 5.5,
    w: 9,
    h: 0.4,
    fontSize: 12,
    bold: true,
    color: colors.success,
    align: "center",
  });

  // ============================================
  // SLIDE 9: MANAGEMENT DE PROJET
  // ============================================
  const slide9 = pres.addSlide({ masterName: "NICKOPLUS_MASTER" });
  slide9.addText("Management de Projet", {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.6,
    fontSize: 36,
    bold: true,
    color: colors.primary,
  });
  
  // Équipe
  slide9.addText("Équipe projet (5 personnes)", {
    x: 0.5,
    y: 1.2,
    w: 9,
    h: 0.4,
    fontSize: 18,
    bold: true,
    color: colors.primary,
  });
  
  const equipe = [
    "• KENMOGNE A. Yoann — Chef de projet & Relation client",
    "• BEDIAN I. Quentin — Développement Frontend & UX",
    "• KONGNE V. Joyce — Infrastructure & Déploiement",
    "• KAMDEM J. Léonard — Qualité & Tests",
    "• AMOUGOU F. Landry — Designer UX/UI",
  ];
  
  equipe.forEach((member, i) => {
    slide9.addText(member, {
      x: 0.7,
      y: 1.7 + i * 0.35,
      w: 8.6,
      h: 0.3,
      fontSize: 11,
      color: colors.light,
    });
  });
  
  slide9.addText("Superviseur : Igor Ewolo — UCAC-ICAM", {
    x: 0.5,
    y: 3.5,
    w: 9,
    h: 0.3,
    fontSize: 12,
    bold: true,
    color: colors.accent,
  });
  
  // Planning
  slide9.addText("Planning (8 semaines)", {
    x: 0.5,
    y: 4,
    w: 4.5,
    h: 0.4,
    fontSize: 16,
    bold: true,
    color: colors.primary,
  });
  
  const phases = [
    "1. Étude du besoin (S1-2)",
    "2. Conception (S2-3)",
    "3. Développement (S4-6)",
    "4. Tests & Formation (S7)",
    "5. Déploiement & Support (S8)",
  ];
  
  phases.forEach((phase, i) => {
    slide9.addText(phase, {
      x: 0.7,
      y: 4.5 + i * 0.35,
      w: 4.3,
      h: 0.3,
      fontSize: 11,
      color: colors.light,
    });
  });
  
  // Communication
  slide9.addText("Communication structurée", {
    x: 5.5,
    y: 4,
    w: 4.5,
    h: 0.4,
    fontSize: 16,
    bold: true,
    color: colors.accent,
  });
  
  slide9.addText("• Équipe : Hebdomadaire", {
    x: 5.7,
    y: 4.5,
    w: 4.3,
    h: 0.3,
    fontSize: 11,
    color: colors.light,
  });
  
  slide9.addText("• Cliente : Bi-mensuel", {
    x: 5.7,
    y: 4.85,
    w: 4.3,
    h: 0.3,
    fontSize: 11,
    color: colors.light,
  });
  
  slide9.addText("• Superviseur : Mensuel", {
    x: 5.7,
    y: 5.2,
    w: 4.3,
    h: 0.3,
    fontSize: 11,
    color: colors.light,
  });

  // ============================================
  // SLIDE 10: PLANNING PROJET
  // ============================================
  const slide10 = pres.addSlide({ masterName: "NICKOPLUS_MASTER" });
  slide10.addText("Planning Projet", {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.6,
    fontSize: 36,
    bold: true,
    color: colors.primary,
  });
  
  slide10.addText("8 semaines intensives — 6 novembre au 31 décembre 2025", {
    x: 0.5,
    y: 0.9,
    w: 9,
    h: 0.4,
    fontSize: 14,
    color: colors.muted,
  });
  
  // Planning prévisionnel
  slide10.addText("Planning Prévisionnel", {
    x: 0.5,
    y: 1.5,
    w: 4.5,
    h: 0.4,
    fontSize: 16,
    bold: true,
    color: colors.primary,
  });
  
  const planning = [
    "S1 : Étude du besoin (6-12 nov)",
    "S2-3 : Conception (13-26 nov)",
    "S4-6 : Développement (27 nov - 17 déc)",
    "S7 : Tests & Formation (18-24 déc)",
    "S8 : Déploiement (25-31 déc)",
  ];
  
  planning.forEach((item, i) => {
    slide10.addText(item, {
      x: 0.7,
      y: 2 + i * 0.4,
      w: 4.3,
      h: 0.3,
      fontSize: 11,
      color: colors.light,
    });
  });
  
  // Jalons
  slide10.addText("7 Jalons Critiques (Milestones)", {
    x: 5.5,
    y: 1.5,
    w: 4.5,
    h: 0.4,
    fontSize: 16,
    bold: true,
    color: colors.accent,
  });
  
  const jalons = [
    "✅ M1 (3 nov) : Démarrage et validation charte",
    "✅ M2 (12 nov) : Finalisation spécifications",
    "✅ M3 (26 nov) : Approbation maquettes",
    "✅ M4 (1 déc) : Déploiement staging",
    "✅ M5 (17 déc) : Version bêta livrée",
    "✅ M6 (24 déc) : Validation UAT",
    "✅ M7 (31 déc) : Déploiement production",
  ];
  
  jalons.forEach((jalon, i) => {
    slide10.addText(jalon, {
      x: 5.7,
      y: 2 + i * 0.35,
      w: 4.3,
      h: 0.3,
      fontSize: 10,
      color: colors.light,
    });
  });
  
  slide10.addText("Bilan Réel : Respect strict du délai — 100% des jalons atteints — Pivot technique réussi", {
    x: 0.5,
    y: 5.5,
    w: 9,
    h: 0.4,
    fontSize: 12,
    bold: true,
    color: colors.success,
    align: "center",
  });

  // ============================================
  // SLIDE 11: BUDGET DÉTAILLÉ
  // ============================================
  const slide11 = pres.addSlide({ masterName: "NICKOPLUS_MASTER" });
  slide11.addText("Budget Détaillé", {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.6,
    fontSize: 36,
    bold: true,
    color: colors.primary,
  });
  
  slide11.addText("Investissement total : 3 100 000 FCFA — Durée : 3 mois", {
    x: 0.5,
    y: 0.9,
    w: 9,
    h: 0.4,
    fontSize: 16,
    bold: true,
    color: colors.accent,
    align: "center",
  });
  
  // Tableau Budget RH
  const budgetRHData = [
    [
      { text: "Rôle", options: { bold: true, color: colors.primary } },
      { text: "Taux/mois", options: { bold: true, color: colors.primary } },
      { text: "Durée", options: { bold: true, color: colors.primary } },
      { text: "Total", options: { bold: true, color: colors.primary } },
    ],
    [
      { text: "Chef de projet & relation client" },
      { text: "250 000" },
      { text: "3 mois" },
      { text: "750 000" },
    ],
    [
      { text: "Développeur Frontend & UX" },
      { text: "200 000" },
      { text: "3 mois" },
      { text: "600 000" },
    ],
    [
      { text: "Infrastructure & déploiement" },
      { text: "200 000" },
      { text: "3 mois" },
      { text: "600 000" },
    ],
    [
      { text: "Qualité & tests" },
      { text: "150 000" },
      { text: "3 mois" },
      { text: "450 000" },
    ],
  ];
  
  slide11.addText("Ressources Humaines — 2 400 000 FCFA (77.4%)", {
    x: 0.5,
    y: 1.5,
    w: 4.5,
    h: 0.3,
    fontSize: 14,
    bold: true,
    color: colors.primary,
  });
  
  slide11.addTable(budgetRHData, {
    x: 0.5,
    y: 1.9,
    w: 4.5,
    colW: [2, 0.8, 0.7, 1],
    fontSize: 9,
    color: colors.light,
    fill: { color: colors.dark },
    border: { type: "solid", color: colors.primary, pt: 1 },
  });
  
  // Tableau Budget Infra
  const budgetInfraData = [
    [
      { text: "Service", options: { bold: true, color: colors.primary } },
      { text: "Coût", options: { bold: true, color: colors.primary } },
    ],
    [
      { text: "Supabase (PostgreSQL + Auth)" },
      { text: "198 000" },
    ],
    [
      { text: "Vercel" },
      { text: "Gratuit", options: { color: colors.success } },
    ],
    [
      { text: "Nom de domaine" },
      { text: "15 000" },
    ],
    [
      { text: "Certificat SSL" },
      { text: "Gratuit", options: { color: colors.success } },
    ],
    [
      { text: "Sauvegardes & sécurité" },
      { text: "90 000" },
    ],
    [
      { text: "Réserve technique" },
      { text: "147 000" },
    ],
  ];
  
  slide11.addText("Infrastructure & Hébergement — 450 000 FCFA (14.5%)", {
    x: 5.5,
    y: 1.5,
    w: 4.5,
    h: 0.3,
    fontSize: 14,
    bold: true,
    color: colors.success,
  });
  
  slide11.addTable(budgetInfraData, {
    x: 5.5,
    y: 1.9,
    w: 4.5,
    colW: [3, 1.5],
    fontSize: 9,
    color: colors.light,
    fill: { color: colors.dark },
    border: { type: "solid", color: colors.success, pt: 1 },
  });
  
  // Tableau Budget Formation
  const budgetFormationData = [
    [
      { text: "Formation", options: { bold: true, color: colors.primary } },
      { text: "Public", options: { bold: true, color: colors.primary } },
      { text: "Coût", options: { bold: true, color: colors.primary } },
    ],
    [
      { text: "Formation vendeurs Douala" },
      { text: "3 vendeurs" },
      { text: "75 000" },
    ],
    [
      { text: "Formation vendeurs Kribi" },
      { text: "2 vendeurs" },
      { text: "50 000" },
    ],
    [
      { text: "Formation gérante / admin" },
      { text: "1 personne" },
      { text: "100 000" },
    ],
    [
      { text: "Accompagnement post-déploiement" },
      { text: "1 mois" },
      { text: "25 000" },
    ],
  ];
  
  slide11.addText("Formation & Accompagnement — 250 000 FCFA (8.1%)", {
    x: 0.5,
    y: 4.2,
    w: 4.5,
    h: 0.3,
    fontSize: 14,
    bold: true,
    color: colors.accent,
  });
  
  slide11.addTable(budgetFormationData, {
    x: 0.5,
    y: 4.6,
    w: 4.5,
    colW: [2, 1, 1.5],
    fontSize: 9,
    color: colors.light,
    fill: { color: colors.dark },
    border: { type: "solid", color: colors.accent, pt: 1 },
  });
  
  // Récapitulatif
  slide11.addText("Récapitulatif", {
    x: 5.5,
    y: 4.2,
    w: 4.5,
    h: 0.3,
    fontSize: 14,
    bold: true,
    color: colors.primary,
  });
  
  const recapData = [
    [
      { text: "Poste", options: { bold: true, color: colors.primary } },
      { text: "Montant", options: { bold: true, color: colors.primary } },
      { text: "%", options: { bold: true, color: colors.primary } },
    ],
    [
      { text: "Ressources humaines" },
      { text: "2 400 000" },
      { text: "77.4%" },
    ],
    [
      { text: "Infrastructure & hébergement" },
      { text: "450 000" },
      { text: "14.5%" },
    ],
    [
      { text: "Formation & accompagnement" },
      { text: "250 000" },
      { text: "8.1%" },
    ],
  ];
  
  slide11.addTable(recapData, {
    x: 5.5,
    y: 4.6,
    w: 4.5,
    colW: [2.5, 1, 1],
    fontSize: 10,
    color: colors.light,
    fill: { color: colors.dark },
    border: { type: "solid", color: colors.primary, pt: 1 },
  });
  
  slide11.addText("Budget Total : 3 100 000 FCFA", {
    x: 5.5,
    y: 5.8,
    w: 4.5,
    h: 0.4,
    fontSize: 16,
    bold: true,
    color: colors.primary,
    align: "center",
  });

  // ============================================
  // SLIDE 12: GESTION DES RISQUES
  // ============================================
  const slide12 = pres.addSlide({ masterName: "NICKOPLUS_MASTER" });
  slide12.addText("Gestion des Risques", {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.6,
    fontSize: 36,
    bold: true,
    color: colors.primary,
  });
  
  slide12.addText("Matrice de criticité et plans de mitigation", {
    x: 0.5,
    y: 0.9,
    w: 9,
    h: 0.4,
    fontSize: 14,
    color: colors.muted,
  });
  
  // Tableau des risques
  const risquesData = [
    [
      { text: "ID", options: { bold: true, color: colors.primary } },
      { text: "Risque", options: { bold: true, color: colors.primary } },
      { text: "Probabilité", options: { bold: true, color: colors.primary } },
      { text: "Impact", options: { bold: true, color: colors.primary } },
      { text: "Criticité", options: { bold: true, color: colors.primary } },
      { text: "Mitigation", options: { bold: true, color: colors.primary } },
    ],
    [
      { text: "R1" },
      { text: "Retard définition besoins" },
      { text: "Moyenne" },
      { text: "Élevé" },
      { text: "ÉLEVÉ", options: { color: colors.danger } },
      { text: "Réunions hebdomadaires" },
    ],
    [
      { text: "R2" },
      { text: "Turnover d'équipe" },
      { text: "Basse" },
      { text: "Critique" },
      { text: "ÉLEVÉ", options: { color: colors.danger } },
      { text: "Documentation exhaustive" },
    ],
    [
      { text: "R5" },
      { text: "Manque d'adoption" },
      { text: "Moyenne" },
      { text: "Élevé" },
      { text: "ÉLEVÉ", options: { color: colors.danger } },
      { text: "UX intuitive + formation" },
    ],
    [
      { text: "R7" },
      { text: "Fuite de données" },
      { text: "Basse" },
      { text: "Critique" },
      { text: "ÉLEVÉ", options: { color: colors.danger } },
      { text: "Chiffrement SSL" },
    ],
    [
      { text: "R3" },
      { text: "Connectivité Internet" },
      { text: "Moyenne" },
      { text: "Moyen" },
      { text: "MOYEN", options: { color: colors.warning } },
      { text: "Architecture minimisant bande passante" },
    ],
    [
      { text: "R4" },
      { text: "Dépassement charge" },
      { text: "Basse" },
      { text: "Élevé" },
      { text: "MOYEN", options: { color: colors.warning } },
      { text: "Tests de charge" },
    ],
    [
      { text: "R6" },
      { text: "Divergence Spéc/Implém" },
      { text: "Moyenne" },
      { text: "Moyen" },
      { text: "MOYEN", options: { color: colors.warning } },
      { text: "Validation itérative" },
    ],
    [
      { text: "R8" },
      { text: "Dépassement budget" },
      { text: "Basse" },
      { text: "Moyen" },
      { text: "FAIBLE", options: { color: colors.success } },
      { text: "Choix du gratuit (BaaS)" },
    ],
  ];
  
  slide12.addTable(risquesData, {
    x: 0.3,
    y: 1.5,
    w: 9.4,
    colW: [0.5, 2, 1, 1, 1, 3.9],
    fontSize: 8,
    color: colors.light,
    fill: { color: colors.dark },
    border: { type: "solid", color: colors.primary, pt: 1 },
  });
  
  slide12.addText("100% des risques maîtrisés — Aucun incident majeur", {
    x: 0.5,
    y: 5.5,
    w: 9,
    h: 0.4,
    fontSize: 14,
    bold: true,
    color: colors.success,
    align: "center",
  });

  // ============================================
  // SLIDE 13: RÉALISATIONS TECHNIQUES
  // ============================================
  const slide13 = pres.addSlide({ masterName: "NICKOPLUS_MASTER" });
  slide13.addText("Réalisations Techniques", {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.6,
    fontSize: 36,
    bold: true,
    color: colors.primary,
  });
  
  slide13.addText("8 Modules fonctionnels • 12 Semaines de dev • 2 Boutiques connectées • 100% Tests passés", {
    x: 0.5,
    y: 0.9,
    w: 9,
    h: 0.4,
    fontSize: 12,
    color: colors.muted,
  });
  
  // Technologies
  slide13.addText("Technologies", {
    x: 0.5,
    y: 1.5,
    w: 3,
    h: 0.4,
    fontSize: 16,
    bold: true,
    color: colors.primary,
  });
  
  const technologies = [
    "• React 18 + TypeScript",
    "• Tailwind CSS + shadcn/ui",
    "• PWA avec Service Workers",
    "• Supabase (PostgreSQL + Auth)",
  ];
  
  technologies.forEach((tech, i) => {
    slide13.addText(tech, {
      x: 0.7,
      y: 2 + i * 0.4,
      w: 2.8,
      h: 0.3,
      fontSize: 11,
      color: colors.light,
    });
  });
  
  // Architecture
  slide13.addText("Architecture", {
    x: 3.8,
    y: 1.5,
    w: 3,
    h: 0.4,
    fontSize: 16,
    bold: true,
    color: colors.accent,
  });
  
  const architecture = [
    "• Architecture BaaS",
    "• Synchronisation temps réel",
    "• Mode hors ligne robuste",
    "• Déploiement Vercel + Supabase",
  ];
  
  architecture.forEach((arch, i) => {
    slide13.addText(arch, {
      x: 4,
      y: 2 + i * 0.4,
      w: 2.8,
      h: 0.3,
      fontSize: 11,
      color: colors.light,
    });
  });
  
  // Sécurité
  slide13.addText("Sécurité & Qualité", {
    x: 7.1,
    y: 1.5,
    w: 2.9,
    h: 0.4,
    fontSize: 16,
    bold: true,
    color: colors.success,
  });
  
  const securite = [
    "• Authentification JWT",
    "• Rôles et permissions",
    "• Chiffrement SSL/TLS",
    "• Tests automatisés (100%)",
  ];
  
  securite.forEach((sec, i) => {
    slide13.addText(sec, {
      x: 7.3,
      y: 2 + i * 0.4,
      w: 2.7,
      h: 0.3,
      fontSize: 11,
      color: colors.light,
    });
  });

  // ============================================
  // SLIDE 14: ARCHITECTURE TECHNIQUE
  // ============================================
  const slide14 = pres.addSlide({ masterName: "NICKOPLUS_MASTER" });
  slide14.addText("Architecture Technique", {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.6,
    fontSize: 36,
    bold: true,
    color: colors.primary,
  });
  
  slide14.addText("Pivot stratégique : Architecture BaaS pour rapidité, maintenabilité et maîtrise des coûts", {
    x: 0.5,
    y: 0.9,
    w: 9,
    h: 0.4,
    fontSize: 12,
    color: colors.muted,
  });
  
  // Pivot Architecture
  const pivotData = [
    [
      { text: "Composant", options: { bold: true, color: colors.primary } },
      { text: "Documentée", options: { bold: true, color: colors.primary } },
      { text: "Implémentée", options: { bold: true, color: colors.primary } },
      { text: "Avantage", options: { bold: true, color: colors.primary } },
    ],
    [
      { text: "Backend" },
      { text: "NestJS (Node.js)" },
      { text: "Supabase (BaaS)", options: { color: colors.success } },
      { text: "Complexité réduite" },
    ],
    [
      { text: "Base de données" },
      { text: "PostgreSQL personnalisé" },
      { text: "Supabase PostgreSQL", options: { color: colors.success } },
      { text: "Maintenance simplifiée" },
    ],
    [
      { text: "Authentification" },
      { text: "JWT custom" },
      { text: "Supabase Auth", options: { color: colors.success } },
      { text: "Solution robuste" },
    ],
    [
      { text: "Coûts" },
      { text: "Serveur dédié" },
      { text: "Plan gratuit", options: { color: colors.success } },
      { text: "Maîtrise des coûts" },
    ],
  ];
  
  slide14.addTable(pivotData, {
    x: 0.5,
    y: 1.5,
    w: 9,
    colW: [2, 2.5, 2.5, 2],
    fontSize: 9,
    color: colors.light,
    fill: { color: colors.dark },
    border: { type: "solid", color: colors.primary, pt: 1 },
  });
  
  // Frontend & Backend
  slide14.addText("Frontend : React 18 + TypeScript + Tailwind CSS + PWA", {
    x: 0.5,
    y: 3.8,
    w: 4.5,
    h: 0.3,
    fontSize: 12,
    bold: true,
    color: colors.primary,
  });
  
  slide14.addText("Backend : Supabase (PostgreSQL) + Auth + Synchronisation temps réel", {
    x: 5.5,
    y: 3.8,
    w: 4.5,
    h: 0.3,
    fontSize: 12,
    bold: true,
    color: colors.accent,
  });
  
  slide14.addText("Synchronisation Multi-boutiques : Boutique → Serveur → Base de données → Dashboard", {
    x: 0.5,
    y: 4.3,
    w: 9,
    h: 0.3,
    fontSize: 11,
    color: colors.light,
  });
  
  slide14.addText("Mode hors ligne : Ventes sauvegardées localement, synchronisation automatique au retour de connexion", {
    x: 0.5,
    y: 4.7,
    w: 9,
    h: 0.3,
    fontSize: 11,
    color: colors.success,
  });

  // ============================================
  // SLIDE 15: DÉMONSTRATION
  // ============================================
  const slide15 = pres.addSlide({ masterName: "NICKOPLUS_MASTER" });
  slide15.addText("Démonstration Live", {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.6,
    fontSize: 36,
    bold: true,
    color: colors.primary,
  });
  
  slide15.addText("Découverte de l'application en situation réelle", {
    x: 0.5,
    y: 0.9,
    w: 9,
    h: 0.4,
    fontSize: 14,
    color: colors.muted,
  });
  
  slide15.addText("🌐 Application en production : nikoplus.lovable.app", {
    x: 0.5,
    y: 1.5,
    w: 9,
    h: 0.4,
    fontSize: 16,
    bold: true,
    color: colors.primary,
    align: "center",
  });
  
  const demoSteps = [
    "🛒 Processus de vente — Création d'une vente en moins de 2 minutes",
    "📦 Gestion des stocks — Alertes automatiques et mise à jour temps réel",
    "📊 Dashboard admin — KPIs et rapports multi-boutiques",
    "💻 Mode hors ligne — Fonctionnement sans connexion internet",
  ];
  
  demoSteps.forEach((step, i) => {
    slide15.addText(step, {
      x: 0.7,
      y: 2.3 + i * 0.6,
      w: 8.6,
      h: 0.5,
      fontSize: 14,
      color: colors.light,
    });
  });

  // ============================================
  // SLIDE 16: IMPACT MESURABLE & KPI
  // ============================================
  const slide16 = pres.addSlide({ masterName: "NICKOPLUS_MASTER" });
  slide16.addText("Impact Mesurable & KPI", {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.6,
    fontSize: 36,
    bold: true,
    color: colors.primary,
  });
  
  slide16.addText("Tous les objectifs atteints — Des résultats concrets et quantifiables", {
    x: 0.5,
    y: 0.9,
    w: 9,
    h: 0.4,
    fontSize: 14,
    color: colors.muted,
  });
  
  // Impact Business
  slide16.addText("-75%", {
    x: 0.5,
    y: 1.6,
    w: 3,
    h: 0.6,
    fontSize: 48,
    bold: true,
    color: colors.success,
    align: "center",
  });
  slide16.addText("Temps transaction", {
    x: 0.5,
    y: 2.2,
    w: 3,
    h: 0.3,
    fontSize: 12,
    color: colors.light,
    align: "center",
  });
  
  slide16.addText("-60%", {
    x: 3.5,
    y: 1.6,
    w: 3,
    h: 0.6,
    fontSize: 48,
    bold: true,
    color: colors.success,
    align: "center",
  });
  slide16.addText("Ruptures de stock", {
    x: 3.5,
    y: 2.2,
    w: 3,
    h: 0.3,
    fontSize: 12,
    color: colors.light,
    align: "center",
  });
  
  slide16.addText("99%", {
    x: 6.5,
    y: 1.6,
    w: 3,
    h: 0.6,
    fontSize: 48,
    bold: true,
    color: colors.success,
    align: "center",
  });
  slide16.addText("Disponibilité", {
    x: 6.5,
    y: 2.2,
    w: 3,
    h: 0.3,
    fontSize: 12,
    color: colors.light,
    align: "center",
  });
  
  // Critères Métier
  slide16.addText("Critères Métier", {
    x: 0.5,
    y: 2.8,
    w: 3,
    h: 0.3,
    fontSize: 14,
    bold: true,
    color: colors.primary,
  });
  
  const criteresMetier = [
    "✅ Adoption utilisateurs : 100%",
    "✅ Réduction temps saisie : -75%",
    "✅ Réduction ruptures : -60%",
    "✅ Satisfaction : ≥ 4/5",
  ];
  
  criteresMetier.forEach((item, i) => {
    slide16.addText(item, {
      x: 0.7,
      y: 3.2 + i * 0.35,
      w: 2.8,
      h: 0.3,
      fontSize: 10,
      color: colors.light,
    });
  });
  
  // Critères Techniques
  slide16.addText("Critères Techniques", {
    x: 3.5,
    y: 2.8,
    w: 3,
    h: 0.3,
    fontSize: 14,
    bold: true,
    color: colors.accent,
  });
  
  const criteresTech = [
    "✅ Temps réponse : < 3s",
    "✅ Disponibilité : ≥ 99%",
    "✅ Couverture tests : ≥ 80%",
    "✅ Sécurité : Pas de vulnérabilités",
  ];
  
  criteresTech.forEach((item, i) => {
    slide16.addText(item, {
      x: 3.7,
      y: 3.2 + i * 0.35,
      w: 2.8,
      h: 0.3,
      fontSize: 10,
      color: colors.light,
    });
  });
  
  // Critères Académiques
  slide16.addText("Critères Académiques", {
    x: 6.5,
    y: 2.8,
    w: 3,
    h: 0.3,
    fontSize: 14,
    bold: true,
    color: colors.success,
  });
  
  const criteresAcad = [
    "✅ Respect planning : 100%",
    "✅ Qualité livrables : Validés",
    "✅ Apprentissage : Compétences acquises",
  ];
  
  criteresAcad.forEach((item, i) => {
    slide16.addText(item, {
      x: 6.7,
      y: 3.2 + i * 0.35,
      w: 2.8,
      h: 0.3,
      fontSize: 10,
      color: colors.light,
    });
  });

  // ============================================
  // SLIDE 17: CONCLUSION & PERSPECTIVES
  // ============================================
  const slide17 = pres.addSlide({ masterName: "NICKOPLUS_MASTER" });
  slide17.addText("Conclusion & Perspectives", {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.6,
    fontSize: 36,
    bold: true,
    color: colors.primary,
  });
  
  // Objectifs atteints
  slide17.addText("Objectifs atteints", {
    x: 0.5,
    y: 1.2,
    w: 4.5,
    h: 0.3,
    fontSize: 16,
    bold: true,
    color: colors.success,
  });
  
  const achievements = [
    "✅ Transformation opérationnelle réussie",
    "✅ Application fonctionnelle déployée",
    "✅ 2 boutiques connectées",
    "✅ Mode hors ligne robuste",
    "✅ 100% d'adoption",
    "✅ Formation complète réalisée",
  ];
  
  achievements.forEach((item, i) => {
    slide17.addText(item, {
      x: 0.7,
      y: 1.6 + i * 0.35,
      w: 4.3,
      h: 0.3,
      fontSize: 11,
      color: colors.light,
    });
  });
  
  // Vision Future
  slide17.addText("Vision Future", {
    x: 5.5,
    y: 1.2,
    w: 4.5,
    h: 0.3,
    fontSize: 16,
    bold: true,
    color: colors.accent,
  });
  
  const vision = [
    "🛒 Intégration E-commerce",
    "👥 Programme de Fidélité",
    "📊 Analyses Prédictives",
    "🔔 Notifications SMS/WhatsApp",
  ];
  
  vision.forEach((item, i) => {
    slide17.addText(item, {
      x: 5.7,
      y: 1.6 + i * 0.35,
      w: 4.3,
      h: 0.3,
      fontSize: 11,
      color: colors.light,
    });
  });
  
  slide17.addText("Impact Business : -75% temps transaction, -60% ruptures stock, 99% disponibilité", {
    x: 0.5,
    y: 4,
    w: 9,
    h: 0.4,
    fontSize: 12,
    bold: true,
    color: colors.primary,
    align: "center",
  });
  
  slide17.addText("NICKOPLUS PRO : Plus qu'une application, un levier de croissance durable", {
    x: 0.5,
    y: 4.6,
    w: 9,
    h: 0.4,
    fontSize: 14,
    bold: true,
    color: colors.primary,
    align: "center",
  });

  // ============================================
  // SLIDE 18: CONTACT
  // ============================================
  const slide18 = pres.addSlide({ masterName: "NICKOPLUS_MASTER" });
  slide18.addText("Transformons ensemble votre gestion boutique", {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.8,
    fontSize: 32,
    bold: true,
    color: colors.primary,
    align: "center",
  });
  
  // Offre
  slide18.addText("Offre de lancement", {
    x: 0.5,
    y: 1.8,
    w: 4.5,
    h: 0.3,
    fontSize: 16,
    bold: true,
    color: colors.primary,
  });
  
  const offre = [
    "✅ 6 mois gratuit pour les 2 boutiques",
    "✅ Migration gratuite des données",
    "✅ Formation complète incluse",
  ];
  
  offre.forEach((item, i) => {
    slide18.addText(item, {
      x: 0.7,
      y: 2.2 + i * 0.4,
      w: 4.3,
      h: 0.3,
      fontSize: 12,
      color: colors.light,
    });
  });
  
  // Contacts
  slide18.addText("Contacts", {
    x: 5.5,
    y: 1.8,
    w: 4.5,
    h: 0.3,
    fontSize: 16,
    bold: true,
    color: colors.accent,
  });
  
  const contacts = [
    "📧 team@nickoplus-project.com",
    "📱 +237 696 623 604",
    "🌐 nikoplus.lovable.app",
    "💻 github.com/Ken-Andre/nikoplus",
  ];
  
  contacts.forEach((contact, i) => {
    slide18.addText(contact, {
      x: 5.7,
      y: 2.2 + i * 0.4,
      w: 4.3,
      h: 0.3,
      fontSize: 12,
      color: colors.light,
    });
  });
  
  slide18.addText("Merci pour votre attention !", {
    x: 0.5,
    y: 5.5,
    w: 9,
    h: 0.6,
    fontSize: 28,
    bold: true,
    color: colors.primary,
    align: "center",
  });

  // Ajouter le numéro de slide sur chaque slide
  const allSlides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10, slide11, slide12, slide13, slide14, slide15, slide16, slide17, slide18];
  
  allSlides.forEach((slide, index) => {
    slide.addText(`${index + 1} / ${allSlides.length}`, {
      x: "85%",
      y: "92%",
      w: 1,
      h: 0.3,
      fontSize: 10,
      color: colors.muted,
      align: "right",
    });
  });

  // Sauvegarder la présentation
  pres.writeFile({ fileName: "NICKOPLUS_PRO_Presentation.pptx" });
};
