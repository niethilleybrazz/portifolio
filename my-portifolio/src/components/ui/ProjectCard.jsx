import React from 'react'

const ProjectCard = ({image, category, title, description}) => { 
  return (
    <div className='border rounded-xl border-borders overflow-hidden py-4 px-7'>
        <img src={image} alt={title} className='w-full h-48 object-cover rounded-md mb-3 text-font'/>
        <span className='text-font-secondary font-others text-[12px]'>
            {category}
        </span>
        <h3 className='font-main text-font my-2 font-medium'>
            {title}
        </h3>
        <p className="font-others text-font text-xs">
            {description}
        </p>
    </div>
  )
}

export default ProjectCard