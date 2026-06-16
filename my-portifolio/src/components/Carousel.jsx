import React from 'react'
import DividerCarousel from './ui/DividerCarousel'

const Carousel = () => {
  return (
    <div className='py-12 px-6 md:px-12 lg:px-24 max-w-330 mx-auto mb-10 mt-10'>
        <div className="mt-30">
        <h4 className="mb-10 font-main text-font text-xl font-medium">
          Algumas tecnologias que uso e estudo
        </h4>
      </div>
      <DividerCarousel />
    </div>
  )
}

export default Carousel