import React, { useState } from 'react'
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import AiOutputDialog from './AiOutputDialog';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function RoomDesignCard({room}) {

   
  return (
    <div className='shadow-md rounded-md cursor-pointer' >
        <ReactBeforeSliderComponent
            firstImage={{
                imageUrl:room?.aiImage,
            }}
            secondImage={{
                imageUrl:room?.orgImage,
                
            }}
            className="custom-slider"
        />
        <div className='p-4'>
         <h2>🏡 Tipo de Ambiente: {room.roomType}</h2>
         <h2>🎨 Tipo de Design: {room.designType}</h2>
        </div>

       
    </div>
  )
}

export default RoomDesignCard