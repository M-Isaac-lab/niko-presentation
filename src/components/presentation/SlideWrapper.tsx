import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export const SlideWrapper = ({ id, children, className = "" }: SlideWrapperProps) => {
  return (
    <section
      id={id}
      className={`min-h-screen flex flex-col justify-center py-16 md:py-24 px-4 md:px-8 relative overflow-hidden ${className}`}
    >
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
