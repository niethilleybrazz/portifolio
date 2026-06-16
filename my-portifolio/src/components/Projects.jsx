import React from 'react'
import { TiArrowForwardOutline } from "react-icons/ti";
import ProjectCard from './ui/ProjectCard';

const Projects = () => {
    const projectsData= [
        { id: 1, category: "E-comerce", title: "Loja de Roupas", description: "Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...", image: "url1.jpg"},
        { id: 2, category: "E-commerce", title: "App Delivery", description: "Lorem ipsum dolor sit amet...", image: "url2.jpg" },
        { id: 3, category: "E-commerce", title: "SaaS Dashboard", description: "Lorem ipsum dolor sit amet...", image: "url3.jpg" }
    ]

  return (
    <div className='min-h-80 mt-15 mb-30 flex flex-col items-center w-full'>
        <div className="flex justify-between w-full max-w-[70%] mb-8">
            <h3 className="font-main text-font text-xl font-medium">Alguns projetos</h3>
            <a href="" className="flex items-center gap-3 text-font font-others">Ver todos <TiArrowForwardOutline className='font-medium'/></a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[85%] min-h-[70%] bg-main-bg border-borders">
            {
                projectsData.map((item)=>(
                    <ProjectCard 
                        key={item.id}
                        image={item.image}
                        category={item.category}
                        title={item.title}
                        description={item.description}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Projects