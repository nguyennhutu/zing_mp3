import React from 'react'
import icons from '../ultites/icons'

export default function Search() {
const {AiOutlineSearch}=icons
  return (
    <div className='w-full flex items-center relative'>
         <span className='absolute left-3 text-[#757575]'>
           <AiOutlineSearch size={24} />
         </span>
        <input type="text" className='outline-none bg-[#DDE4E4] px-11 py-2 rounded-[20px] h-10 w-full text-gray-500'
        placeholder='Tìm kiếm bài hát,nghệ sĩ,lời bài hát ...'/>
    </div>
  )
}
