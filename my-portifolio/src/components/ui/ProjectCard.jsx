import React from 'react'

const ProjectCard = ({image, category, title, description}) => { 
  return (
    <div className='border rounded-xl border-borders overflow-hidden px-10 py-10 pt-10 pb-10'>
        <img src={image} alt={title} className='w-full h-48 object-cover rounded-md mb-3 text-font'/>
        <span className='text-font-secondary font-others text-[12px]'>
            {category}
        </span>
        <h3 className='font-main text-font my-2 font-medium'>
            {title}
        </h3>
        <p className="font-secondary text-font-secondary text-xs">
            {description}
        </p>
    </div>
  )
}

export default ProjectCard