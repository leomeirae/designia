"use client"
import Image from 'next/image'
import React, { useState } from 'react'

function ImageSelection({selectedImage}) {

    const [file,setFile]=useState();
    const onFileSelected=(event)=>{
        console.log(event.target.files[0]);
        setFile(event.target.files[0])
        selectedImage(event.target.files[0])
    }

  return (
    <div>
        <label 
          className='text-[#1a1a1a] hover:text-[rgb(127,87,241)] font-bold transition-colors' 
          style={{ color: 'inherit' }}
        >
          1 - Faça o upload da imagem do seu ambiente: jpg, png e jpeg.
        </label>
        <div className='mt-3'>
            <label htmlFor='upload-image'>
                <div className={` border rounded-xl 
                border-dotted flex justify-center border-primary
                 bg-slate-200 cursor-pointer hover:shadow-lg
                 ${file?'p-0 bg-white':'p-28'}
                 `}>
                   {!file ? 
                    <Image 
                        src={'/imageupload.png'} 
                        width={70} 
                        height={70}
                        alt="Upload icon"
                    />
                    :
                    <Image 
                        src={URL.createObjectURL(file)} 
                        width={300} 
                        height={300}
                        alt="Selected room image"
                        className='w-[300px] h-[300px] object-cover'
                    />
                   }
                </div>
            </label>
            <input type="file" accept='image/*' 
            id="upload-image"
            style={{display:'none'}}
            onChange={onFileSelected}
            />
        </div>
    </div>
  )
}

export default ImageSelection