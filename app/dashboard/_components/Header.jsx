"use client"
import { UserDetailContext } from '@/app/_context/UserDetailContext'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/clerk-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'

function Header() {
    const {userDetail,setUserDetail}=useContext(UserDetailContext);
  return (
    <div className='p-3 md:p-5 shadow-sm flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center'>
        <Link href={'/'} className='flex gap-2 items-center'>
            <Image 
                src={'/logo.svg'} 
                width={40} 
                height={40} 
                alt="IA Design Logo"
            />
            <h2 className='font-bold text-lg text-white'>IA DESIGN</h2>
        </Link>

        <div className='flex flex-wrap gap-3 md:gap-7 items-center justify-center'>
            <Link href={'/dashboard/buy-credits'}>
            <Button variant="ghost" className="rounded-full text-[#D4F462] text-base md:text-lg font-medium">Adquirir Créditos</Button>
            </Link>
            {userDetail?.credits&& <div className='flex gap-2 p-1 items-center bg-slate-200 px-3 rounded-full'>
                <Image src={'/star.png'} width={20} height={20}/>
                <h2>{userDetail?.credits}</h2>
            </div>}
            <UserButton/>
            <Link href={'/dashboard'}>
            <Button>Dashboard</Button>
            </Link>
        </div>
    </div>
  )
}

export default Header