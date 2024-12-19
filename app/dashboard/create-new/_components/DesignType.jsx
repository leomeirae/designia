import Image from 'next/image'
import React, { useState } from 'react'

function DesignType({selectedDesignType}) {
  const Designs = [
    {
      name: 'Moderno',
      image: '/modern.png',
    },
    {
      name: 'Industrial',
      image: '/industrial.png',
    },
    {
      name: 'Boêmio',
      image: '/bohemian.png',
    },
    {
      name: 'Traditional',
      image: '/traditional.png',
    },
    {
      name: 'Rústico',
      image: '/rustic.png',
    }, {
      name: 'Minimalista',
      image: '/minimalist.png',
    }
  ]

  const [selectedOption,setSelectedOption]=useState();
  return (
    <div className='mt-5'>
      <label 
        className='text-[#1a1a1a] hover:text-[rgb(127,87,241)] font-bold transition-colors' 
        style={{ color: 'inherit' }}
      >
        3 - Selecione o estilo de design do seu ambiente *
      </label>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-4'>
        {Designs.map((design,index)=>(
          <div 
            key={index} 
            onClick={()=>{setSelectedOption(design.name);selectedDesignType(design.name)}}
            className='flex flex-col items-center gap-3'
          >
            <Image 
              src={design.image} 
              width={200} 
              height={200} 
              alt={`${design.name} style example`}
              className={`h-[120px] w-[120px] rounded-md object-cover
              hover:scale-105 transition-all 
              cursor-pointer ${design.name==selectedOption&&'border-2 border-primary rounded-md p-1'}`}
            />
            <h2 className='text-center font-medium'>{design.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DesignType