// src/hooks/animations/splitText.ts

import { motion } from "framer-motion";
import React from "react";

// Definimos las variantes de animación
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// Función splitText
export const splitText = (text: string): React.ReactElement => {
  const words = text.split(" ");

  return (
    <motion.span
      variants={containerVariants}
      initial={"hidden"}
      animate="visible"
      style={{ display: "inline-block", overflow: "hidden" }}
    >
      {words.map((word, index) => (
        <span key={index} style={{ whiteSpace: "nowrap" }}>
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={`${index}-${charIndex}`}
              variants={letterVariants}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
          {/* Agregamos el espacio entre palabras */}
          &nbsp;
        </span>
      ))}
    </motion.span>
  );
};
