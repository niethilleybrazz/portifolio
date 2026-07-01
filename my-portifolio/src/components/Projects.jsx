import React from "react";
import { TiArrowForwardOutline } from "react-icons/ti";
import ProjectCard from "./ui/ProjectCard";
import { container } from "./animations/variants";
import { motion } from "motion/react";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      category: "E-commerce",
      title: "Loja de Roupas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores quisquam nihil maiores sunt? Laborum vitae repellendus ad debitis saepe id, atque animi consequatur eligendi, ab sint quam unde deleniti qui?",
      image: "url1.jpg",
      stacks: ["React", "JavaScript", "Express", "MongoDB"],
    },
    {
      id: 2,
      category: "Delivery",
      title: "App Delivery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores quisquam nihil maiores sunt? Laborum vitae repellendus ad debitis saepe id, atque animi consequatur eligendi, ab sint quam unde deleniti qui?",
      image: "url2.jpg",
      stacks: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      id: 3,
      category: "Dashboard",
      title: "SaaS Dashboard",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores quisquam nihil maiores sunt? Laborum vitae repellendus ad debitis saepe id, atque animi consequatur eligendi, ab sint quam unde deleniti qui?",
      image: "url3.jpg",
      stacks: ["React", "Python", "Docker"],
    },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      className="min-h-80 mt-25 mb-15 flex flex-col items-center w-full"
    >
      <div className="flex justify-between w-full max-w-[70%] mb-8">
        <h3 className="font-main text-font text-xl font-medium">
          Alguns projetos
        </h3>
        <a
          href="https://github.com/niethilleybrazz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-font font-others"
        >
          Ver todos <TiArrowForwardOutline className="font-medium" />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[85%] min-h-[70%] bg-main-bg border-borders">
        {projectsData.map((item) => (
          <ProjectCard
            key={item.id}
            image={item.image}
            category={item.category}
            title={item.title}
            description={item.description}
            stacks={item.stacks}
            stackColors={item.stackColors}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
