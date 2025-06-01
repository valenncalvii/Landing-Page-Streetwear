import React from "react";
import { motion } from "framer-motion";

interface SlideInDivProps {
  children?: React.ReactNode;
}

const SlideInDiv: React.FC<SlideInDivProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }} // Empieza 200px a la izquierda y opaco
      animate={{ x: 0, opacity: 1 }} // Termina en su posición normal y visible
      transition={{ duration: 0.5, ease: "easeOut" }} // Duración y suavizado
    >
      {children}
    </motion.div>
  );
};

export default SlideInDiv;
