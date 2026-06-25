import React, { useState } from "react";

const ProjectCard = ({ image, category, title, description, stacks }) => {

  const stackColors = {
    React: "border-react text-react",
    "Node.js": "border-node text-node",
    Express: "border-express text-express",
    MongoDB: "border-mongodb text-mongodb",
    Python: "border-python text-python",
    Docker: "border-docker text-docker",
    JavaScript: "border-javascript text-javascript",
    Java: "border-java text-java",
    "Tailwind CSS": "border-tailwind text-tailwind",
  };
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className='border rounded-xl border-borders overflow-hidden px-10 py-10 pt-10 pb-10 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer '
      onClick={() => setFlipped(!flipped)}
    >
      {!flipped && (
        <>
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-md mb-3 text-font"
          />
          <span className="text-font-secondary font-others text-[12px]">
            {category}
          </span>
          <h3 className="font-main text-font my-2 font-medium">{title}</h3>
          <p className="font-secondary text-font-secondary text-xs">
            {description}
          </p>
        </>
      )}
      {flipped && (
        <>
          <h3 className="font-main text-font my-2 font-medium">{title}</h3>
          <p className="font-others text-borders text-xs">Tecnologias usadas</p>
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            {stacks.map((stack) => (
              <span
                key={stack}
                className={`px-4 py-1 rounded-4xl border font-others text-xs transition-all ${stackColors[stack]}`}
              >
                {stack}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectCard;
