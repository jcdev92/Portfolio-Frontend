/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export const Animated = ({ children }) => {
  const animations = {
    initial: {
      opacity: 0,
      x: -400,
      scale: 0.2
    },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    exit: {
      opacity: 0,
      x: -400,
      scale: 0.2,
    },
  };
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
};
