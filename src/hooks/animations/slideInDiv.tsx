import React from "react";
import { motion } from "framer-motion";

interface SlideInDivProps {
  children?: React.ReactNode;
}

const SlideInDiv: React.FC<SlideInDivProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }} // Empieza 200px a la izquierda y opaco
      transition={{ duration: 0.5, ease: "easeOut" }} // Duración y suavizado
      viewport={{ once: true, amount: 0.2 }} // 'once' = solo una vez; 'amount' = porcentaje visible
      whileInView={{ opacity: 1, x: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default SlideInDiv;
