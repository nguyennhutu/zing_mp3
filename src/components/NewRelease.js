import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SongItems from './SongItems';

export default function NewRelease() {
const {newRelease}=useSelector(state=>state.app)
const [isActive,setIsActive]=useState(0)
const [songs,setSongs]=useState([])
    console.log({newRelease});
useEffect(()=>{
    {isActive?setSongs(newRelease?.items?.others):setSongs(newRelease?.items?.vPop)}
},[isActive,newRelease])
  return (
    <div className='mt-12 px-[59px] flex flex-col gap-5'>
       <div className='flex items-center justify-between'>
           <h1 className='text-[20px] font-bold'>{newRelease?.title}</h1>
           <span className='text-xs'>Tất Cả</span>
       </div>
       <div className='flex items-center gap-5 text-xs'>
             <button
               onClick={()=>setIsActive(0)}
              className={`py-1 px-4 rounded-l-full rounded-r-full border border-gray-400  ${isActive=== 0 &&'bg-main-500 text-white'}`}
             >
             VIỆT NAM
          </button>
             <button
              onClick={()=>setIsActive(1)}
              className={`py-1 px-4 rounded-l-full rounded-r-full border  border-gray-400  ${isActive=== 1 &&'bg-main-500 text-white'}`}
             >
             QUỐC TẾ
          </button>
       </div>
        <div className='flex flex-wrap w-full '>
           {songs?.map((item,index)=>{
            return(
                <SongItems key={item.encodeId} 
                thumbnail={item.thumbnail} 
                title={item.title} 
                artists={item.artistsNames}
                releaseDate={item.releaseDate}
                />
            )
           })}
        </div>
    </div>
  )
}
