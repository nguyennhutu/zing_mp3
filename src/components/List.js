import React,{memo} from 'react'
import icons from '../ultites/icons'
import moment from "moment"
import {useDispatch} from "react-redux"
import { actionPlay, actionPlayAlbum, actionSetCurSongId } from '../store/actions/music'


const {BsMusicNoteBeamed}=icons

const List=({songData})=>{
  const dispatch=useDispatch();
  return (
    <div className='flex justify-between items-center p-[10px] border-t border-[rgba(0,0,3,0.05)] hover:bg-[#DDE4E4] cursor-pointer' 
    onClick={()=>{
      dispatch(actionSetCurSongId(songData?.encodeId))
      dispatch(actionPlay(true))
      dispatch(actionPlayAlbum(true))
    }}>
        <div className='flex items-center gap-3  flex-1'>
          <span><BsMusicNoteBeamed/></span>
          <img src={songData?.thumbnail} alt='thumbnail' className='w-10 h-10 object-cover rounded-md'/>
          <span className='flex flex-col w-full'>
            <span className='text-sm font-semibold min-w-[260px] '>{songData?.title?.length>30?`${songData?.title?.slice(0,30)}...`:songData?.title}</span>
            <span>{songData?.artistsName}</span>
          </span>
        </div>
        <div className=' flex items-center w-15 flex-1 ml-1'>
         {songData?.album?.title?.length>30?`${songData?.album?.title?.slice(0,30)}...`:songData?.album?.title}
          {/* {songData?.album?.title} */}
        </div>
        <div className=' flex justify-end w-15 flex-1'>
           {moment.utc(songData?.duration*1000).format('mm:ss')}
        </div>
    </div>
  )
}

export default memo(List)
