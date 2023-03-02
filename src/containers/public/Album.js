import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiGetDetailPlaylist } from '../../apis/music';
import moment from 'moment';
import { ListSong } from '../../components';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useDispatch, useSelector } from 'react-redux';
import { actionIsloading, actionSetPlaylist } from '../../store/actions/music';


export default function Album() {
    const {title,pid}=useParams();
    const {curSongId}=useSelector(state=>state.music);
    const {isPlaying,songs}=useSelector(state=>state.isPlaying)
    const [playlistData,setPlaylistData]=useState({});
    const dispatch=useDispatch()
    useEffect(()=>{
        const fetchDetailPlaylist=async()=>{
            dispatch(actionIsloading(true))
            const response= await apiGetDetailPlaylist(pid)
            dispatch(actionIsloading(false))
            if(response?.data.err ===0){
               setPlaylistData(response.data?.data)
               dispatch(actionSetPlaylist(response?.data?.data?.song?.items))
            }
        }
        fetchDetailPlaylist()
    },[pid])
  return (
      <div className='flex  gap-8 w-full h-full px-[50px]'>
       <div className='flex-none w-1/4 flex flex-col items-center gap-1'>
          <img 
          src={playlistData?.thumbnailM} 
          alt="thumbnailM" 
          className={`w-full object-contain  ${isPlaying?'rounded-full animate-rotate-center':'rounded-md animate-rotate-center-pause'} shadow-md`}/>
          <div className='flex flex-col'>
            <h3 className='text-[20px] font-bold  text-gray-700'>{playlistData?.title}</h3>
              <span className='flex gap-2 items-center text-gray-500 text-[15px]'>
                <span>Cập nhật:</span>
                 <span>
                  {moment.unix(playlistData?.contentLastUpdate).format("DD/MM/YYYY")}
                 </span>
               </span>
               <span className='flex gap-2 items-center text-gray-500 text-xs'>{playlistData?.artistsName}</span>
               <span className='flex gap-2 items-center text-gray-500 text-xs'>{`${Math.round(playlistData?.like/1000)}K người yêu thích`}</span>
          </div>
        </div>
        <Scrollbars autoHide style={{width:'100%',height:'80%'}}>
         <div className='flex-auto  mb-40'>
         <span className='text-sm'>
            <span clasName='text-gray-600'>Lời tựa :</span>
            <span>{playlistData?.sortDescription}</span>
         </span>
         <div>
           <ListSong songs={playlistData?.song}/>
         </div>
         </div>
        </Scrollbars>
    </div>
   
  )
}
