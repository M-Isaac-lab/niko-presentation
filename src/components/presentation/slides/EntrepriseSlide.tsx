import { motion } from "framer-motion";
import { SlideWrapper } from "../SlideWrapper";
import { Building2, MapPin, Scissors, Sofa, BedDouble, Home } from "lucide-react";

const products = [
  { icon: Scissors, title: "Décoration de fenêtres", description: "Rideaux, voilages, tissus sur mesure" },
  { icon: BedDouble, title: "Décoration de chambre", description: "Draps, taies, housses" },
  { icon: Sofa, title: "Décoration de salon", description: "Coussins, revêtements" },
  { icon: Home, title: "Prestations associées", description: "Prise de mesures, confection, installation, conseil" },
];

const locations = [
  { city: "Douala", type: "Boutique principale", description: "Zone urbaine à forte activité" },
  { city: "Kribi", type: "Boutique secondaire", description: "Zone côtière touristique" },
];

export const EntrepriseSlide = () => {
  return (
    <SlideWrapper id="entreprise" slideNumber={1} sectionTitle="Présentation Entreprise">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-primary/10 rounded-xl">
          <Building2 className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Les Boutiques <span className="text-gradient">Nicko</span>
        </h2>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg text-muted-foreground mb-8"
      >
        Une entreprise familiale au cœur de la décoration textile et d'intérieur
      </motion.p>

      {/* Main content grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Products & Services */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-primary rounded-full"></span>
            Produits & Services
          </h3>
          <div className="grid gap-4">
            {products.map((product, i) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 card-gradient rounded-xl border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                  <product.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{product.title}</h4>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Locations */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-accent rounded-full"></span>
            Implantation
          </h3>
          
          <div className="space-y-4 mb-8">
            {locations.map((location, i) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.4 }}
                viewport={{ once: true }}
                className="p-5 card-gradient rounded-xl border border-border/50 hover:border-accent/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-lg font-semibold text-gradient">{location.city}</span>
                </div>
                <p className="font-medium text-foreground">{location.type}</p>
                <p className="text-sm text-muted-foreground">{location.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Client info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="p-5 glass-effect rounded-xl"
          >
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Direction</p>
            <p className="text-lg font-semibold">Mme Pia Dim Nicole</p>
            <p className="text-sm text-primary">Directrice des Boutiques Nicko</p>
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
};
