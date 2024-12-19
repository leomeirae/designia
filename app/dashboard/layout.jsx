import React from 'react'
import Header from './_components/Header'

export default function DashboardLayout({children}) {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#08002F] via-[#030014] to-[#000003]">
        <Header/>
      </div>
      <div className='pt-5 md:pt-20 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40'>
        {children}
      </div>
    </div>
  )
}