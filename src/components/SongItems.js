import React, { memo } from 'react'
import moment from "moment"

const  SongItems=({thumbnail,title,artists,releaseDate})=>{
  return (
    <div className='w-[45%] min-[1024px]:w-[30%] flex  p-[10px] gap-[10px] hover:bg-main-100 rounded-md cursor-pointer'>
        {/* object-cover ảnh sẽ tràn vừa cái thẻ div của mình */}
       <img src={thumbnail} alt="thumbnail" className='w-[60px] h-[60px] object-cover rounded-md'/>
       <div className='flex flex-col'>
          <span className='text-[14px] font-semibold'>{title}</span>
          <span className='text-xs text-gray-700'>{artists}</span>
          <span className='text-xs text-gray-700'>{moment(releaseDate *1000).fromNow()}</span>
        
       </div>
    </div>
  )
}

export default memo (SongItems)