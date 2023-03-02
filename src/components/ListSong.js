import React from 'react'
import List from './List';
import icons from '../ultites/icons';
import moment from 'moment';
import { useSelector } from 'react-redux';

const {BsDot}=icons

export default function ListSong({songs}) {
  const songReducer=useSelector(state=>state.isPlaying.songs)
  const song=songs?.items;
  const duration=songs?.totalDuration;
  return (
    <div className='w-full flex flex-col text-xs p-[10px] text-gray-600 font-semibold '>
        <div className='flex justify-between items-center pl-[15px]'>
            <span className='flex-1 min-w-[260px]'>Bài Hát</span>
            <span className='flex-1'>Album</span>
            <span className='flex-1'>Thời gian</span>
        </div>
        <div className='flex flex-col'>
            {songReducer?.map(item=>
              (<List key={item.encodeId} songData={item}/>)
            )}
        </div>
        <span className='flex items-center gap-2 py-[10px] pt-6 border-t border-[rgba(0,0,0,0.05)]'>
          <span>{`${songReducer?.length} bài hát`}</span>
          <BsDot size={24}/>
          <span>{moment.utc(duration* 1000).format('HH:mm:ss')}</span>
        </span>
    </div>
  )
}

