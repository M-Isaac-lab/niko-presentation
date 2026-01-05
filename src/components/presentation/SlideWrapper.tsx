import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  slideNumber?: number;
  sectionTitle?: string;
}

export const SlideWrapper = ({ id, children, className = "", slideNumber, sectionTitle }: SlideWrapperProps) => {
  return (
    <section
      id={id}
      className={`min-h-screen flex flex-col justify-center py-16 md:py-24 px-4 md:px-8 relative overflow-hidden ${className}`}
    >
      {/* Slide number indicator */}
      {slideNumber && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="absolute top-8 left-8 flex items-center gap-3"
        >
          <span className="text-5xl md:text-6xl font-bold text-primary/20">
            {String(slideNumber).padStart(2, '0')}
          </span>
          {sectionTitle && (
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Section</span>
              <span className="text-sm font-medium text-primary">{sectionTitle}</span>
            </div>
          )}
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="container max-w-6xl mx-auto relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};
