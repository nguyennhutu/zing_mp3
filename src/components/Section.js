import React, { memo } from 'react'

import {useNavigate} from "react-router-dom"

 const Section=({friday})=>{
    const navigate=useNavigate()
  return (
    <div className='mt-[48px] p-[59px] flex flex-col gap-5'>
        <div className='flex items-center justify-between'>
            <h3 className='text-[20px] font-bold'>{friday?.title}</h3>
            <span className='text-xs'>Tất cả</span>
        </div>
        <div className='flex items-start justify-between gap-[28px]'>
        {friday && friday?.items?.length>0 && friday.items.filter((item,index)=>index<=4)?.map(item=>{
           return(
              <div key={item.encodeId} className='flex flex-col  flex-auto w-1/5 text-sm gap-3'>
                <img 
                onClick={()=>{
                    const albumPath=item?.link.split('.')[0]
                    navigate(albumPath)
                }}
                src={item.thumbnailM} alt="avater" 
                className='w-full h-auto rounded-lg cursor-pointer' />
                <span className='flex flex-col'>
                   <span>{item.title}</span>
                   {friday?.sectionId==='h100'?<span>{item.artistsNames}</span>:<span>{item?.sortDescription?.length>=40?`${item.sortDescription?.slice(0,40)}...`:item?.sortDescription}</span>}
                </span>
              </div>
           ) 
        })}
        </div>
    </div>
  )
}

export default memo(Section)