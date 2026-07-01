import React, { useState } from "react";
import { motion } from "motion/react";

import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaJava,
  FaPython,
} from "react-icons/fa";

import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const ProjectCard = ({ image, category, title, description, stacks }) => {
  const [flipped, setFlipped] = useState(false);

  const stackStyles = {
    React: {
      icon: FaReact,
      className: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
    },
    "Node.js": {
      icon: FaNodeJs,
      className: "text-green-500 border-green-500/30 bg-green-500/10",
    },
    Express: {
      icon: SiExpress,
      className: "text-gray-300 border-gray-400/20 bg-gray-400/10",
    },
    MongoDB: {
      icon: SiMongodb,
      className: "text-green-400 border-green-400/30 bg-green-400/10",
    },
    JavaScript: {
      icon: SiJavascript,
      className: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
    },
    Java: {
      icon: FaJava,
      className: "text-orange-500 border-orange-500/30 bg-orange-500/10",
    },
    Python: {
      icon: FaPython,
      className: "text-blue-400 border-blue-400/30 bg-blue-400/10",
    },
    Docker: {
      icon: FaDocker,
      className: "text-sky-400 border-sky-400/30 bg-sky-400/10",
    },
    "Tailwind CSS": {
      icon: SiTailwindcss,
      className: "text-cyan-300 border-cyan-300/30 bg-cyan-300/10",
    },
  };

  return (
    <motion.div
      onClick={() => setFlipped(!flipped)}
      className="border border-borders rounded-xl overflow-hidden px-8 py-8 cursor-pointer bg-main-bg"
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
    >
      {!flipped ? (
        <>
          <motion.img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-lg mb-4"
            whileHover={{
              scale: 1.05,
            }}
            transition={{
              duration: 0.3,
            }}
          />

          <span className="text-font-secondary text-xs font-others">
            {category}
          </span>

          <h3 className="font-main text-font text-lg mt-2">
            {title}
          </h3>
        </>
      ) : (
        <>
          <h3 className="font-main text-font text-lg mb-2">
            {title}
          </h3>

          <p className="text-xs text-borders font-semibold">
            Tecnologias utilizadas
          </p>

          <p className="text-xs text-font-secondary mt-3 leading-5">
            {description}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {stacks.map((stack, index) => {
              const Icon = stackStyles[stack]?.icon;

              return (
                <motion.span
                  key={stack}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    scale: 1.08,
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium ${stackStyles[stack]?.className}`}
                >
                  {Icon && <Icon size={14} />}
                  {stack}
                </motion.span>
              );
            })}
          </div>
        </>
      )}
    </motion.div>
  );
};

export default ProjectCard;
