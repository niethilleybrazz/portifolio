import React from "react";
import {
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaJava,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const SKILLS = [
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Node", icon: <FaNodeJs /> },
  { name: "Spring", icon: <SiSpring /> },
  { name: "ReactJs", icon: <FaReact /> },
  { name: "Tailwind", icon: <RiTailwindCssFill /> },
  { name: "Github", icon: <FaGithub /> },
  { name: "Figma", icon: <FaFigma /> },
];

const SkillList = ({ listId }) => (
  <div className="flex items-center flex-none">
    {SKILLS.map((skill, index) => (
      <div
        key={`list-${listId}-${index}`}
        className="flex items-center gap-4 px-10 text-gray-400 font-medium whitespace-nowrap font-main"
      >
        <span className="text-2xl">{skill.icon}</span>
        {skill.name}
      </div>
    ))}
  </div>
);

const DividerCarousel = () => {
  return (
    <div className="w-full py-4 overflow-hidden relative before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-linear-to-r before:from-main-bg before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-linear-to-l after:from-main-bg after:to-transparent">
      <div className="flex w-max animate-scroll-carousel">
        <SkillList listId="1" />
        <SkillList listId="2" />
      </div>
    </div>
  );
};

export default DividerCarousel;
