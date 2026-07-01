import { motion, useScroll } from "motion/react";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 w-full bg-font origin-left z-50"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
};

export default ScrollProgress;