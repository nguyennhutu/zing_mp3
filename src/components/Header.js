import React, { useEffect } from 'react'
import icons from '../ultites/icons'
import Search from './Search'
export default function Header() {
  const {AiOutlineArrowRight,AiOutlineArrowLeft}=icons;
  return (
    <div className='flex justify-between w-full'>
       <div className='flex gap-6 w-full items-center'>
        <div className='flex text-gray-400 gap-6'>
          <span><AiOutlineArrowLeft size={20}/></span>
          <span><AiOutlineArrowRight size={20}/></span>
        </div>
        <div className='w-2/3'>
          <Search/>
        </div>
       </div>
       <div>
        dang nhap
       </div>
    </div>
  )
}
