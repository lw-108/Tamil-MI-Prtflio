"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { motion, useReducedMotion } from "framer-motion";

const FadeInStaggerContext = createContext(false);

const viewport = {
  once: true,
  margin: "0px 0px -200px",
};

const FadeIn = ({ children, ...props }) => {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  // 🔥 Prevent SSR hydration mismatch
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Ensure server + first client render match
  const variants = {
    hidden: {
      opacity: 0,
      y: mounted && !shouldReduceMotion ? 24 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={variants}
      transition={{ duration: 0.5 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport,
          })}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const FadeInStagger = ({ faster = false, children, ...props }) => {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{
          staggerChildren: faster ? 0.12 : 0.2,
        }}
        {...props}
      >
        {children}
      </motion.div>
    </FadeInStaggerContext.Provider>
  );
};

export default FadeIn;
