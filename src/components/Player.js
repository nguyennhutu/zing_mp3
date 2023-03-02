import React, { useEffect, useRef, useState } from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { getDetailSong, getSong } from '../apis/music';
import { actionPlay, actionSetCurSongId } from '../store/actions/music';
import LoadingSong from './LoadingSong';
import icons from '../ultites/icons';
import moment from "moment"
import { toast } from 'react-toastify'
const {AiOutlineHeart,BsThreeDots,MdSkipNext,MdSkipPrevious,CiRepeat,CiShuffle,BsFillPlayFill,BsFillPauseFill,TbRepeatOnce,BsMusicNoteList,SlVolumeOff,SlVolume1,SlVolume2} =icons
var intervalId

export default function Player({setIsShowRightSideBar}) {
  //Object contructor kế thừa các thuộc tính của Audio()
  const [audio,setAudio]=useState(new Audio());
  const [duraton,setDuration]=useState(0)
  const {curSongId}=useSelector(state=>state.music);
  const {isPlaying,songs}=useSelector(state=>state.isPlaying)
  const [songInfo,setSongInfo]=useState();
  const [curSecond,setCurSecond]=useState(0)
  const [isShuffle,setIsShuffle]=useState(false)
  const [repeatMode,setRepeatMode]=useState(0)
  const [isLoadingSource,setIsLoadingSource]=useState(true)
  const [volume,setVolume]=useState(70)
  const dispatch=useDispatch()
  const thumbRef=useRef()
  const trackRef=useRef()
 
  // useEffect là nó muốn tất cả đồng bộ lên nó không sử dụng đc async await vd(useEffect(async()=>{})) lỗi trong nay
  useEffect(() => {
    const fetchDetailSong = async () => {
        setIsLoadingSource(false)
        const [res1, res2] = await Promise.all([
            getDetailSong(curSongId),
            getSong(curSongId)
        ])
        setIsLoadingSource(true)
        if (res1.data.err === 0) {
            setSongInfo(res1.data.data)
        }
        if (res2.data.err === 0) {
            audio.pause()
            setAudio(new Audio(res2.data.data['128']))
        } else {
            audio.pause()
            dispatch(actionPlay(false))
            setAudio(new Audio())
            toast.info(res2.data.msg)
            thumbRef.current.style.cssText='right:100%'
        }
    }

    fetchDetailSong()
}, [curSongId])

useEffect(()=>{
  const handleEnded=()=>{
     if(isShuffle){
      handleShuffle()
     }else if(repeatMode){
      repeatMode ===1 ? handleReapeatOne() : handleNextSong()
     }else{
      audio.pause()
      dispatch(actionPlay(false))
     }
  }
  audio.addEventListener('ended',handleEnded)
  return()=>{
    audio.addEventListener('ended',handleEnded)
  }
},[audio,isShuffle,repeatMode])
useEffect(()=>{
  audio.volume=volume/100
},[volume])

useEffect(() => {
    intervalId && clearInterval(intervalId)
    audio.pause()
    audio.load()
    if (isPlaying && thumbRef.current) {
      audio.play()
      intervalId = setInterval(() => {
        let percent = Math.round(audio.currentTime * 10000 / songInfo.duration) / 100
        // console.log(percent)
        thumbRef.current.style.cssText = `right: ${100 - percent}%`
        setCurSecond(Math.round(audio.currentTime))
    }, 200)
    }
}, [audio])

const handleTogglePlayMusic = async () => {
  if (isPlaying) {
      audio.pause()
      dispatch(actionPlay(false))
  } else {
      audio.play()
      dispatch(actionPlay(true))
  }
}

const handleClickProgressbar=(e)=>{
  // console.log(e);
  // console.log(trackRef.current.getBoundingClientRect());
  const trackReact=trackRef.current.getBoundingClientRect()
  const percent= Math.round((e.clientX-trackReact.left)*10000/ trackReact.width)/100
  thumbRef.current.style.cssText = `right: ${100 - percent}%`
  audio.currentTime=percent * songInfo.duration /100
  setCurSecond(Math.round(percent * songInfo.duration /100))
}

const handleReapeatOne=()=>{
  audio.play()
  dispatch(actionPlay(true))
}

const handleNextSong=()=>{
   if(songs){
    let currentSongIndex
    songs?.forEach((item,index)=>{
      if(item.encodeId=== curSongId){
        currentSongIndex=index
      }
    })
    dispatch(actionSetCurSongId(songs[currentSongIndex+1].encodeId))
    dispatch(actionPlay(true))
   }
}
const handlePrevSong=()=>{
   if(songs){
    let currentSongIndex
    songs?.forEach((item,index)=>{
      if(item.encodeId=== curSongId){
        currentSongIndex=index
      }
    })
    dispatch(actionSetCurSongId(songs[currentSongIndex-1].encodeId))
    dispatch(actionPlay(true))
   }
}

const handleShuffle=()=>{
  const randomIndex=Math.round(Math.random()*songs?.length)-1
  dispatch(actionSetCurSongId(songs[randomIndex].encodeId))
  dispatch(actionPlay(true))
}

  return (
    <div className='bg-main-400 px-5 h-full flex items-center py-2'>
        <div className='w-[30%] flex flex-auto  items-center gap-3 '>
            <img src={songInfo?.thumbnail} alt='thumbnail' className=' w-16 h-16 object-cover rounded-md'/>
            <div className='flex flex-col  '>
              <span className='font-semibold text-gray-700 text-sm'>{songInfo?.title}</span>
              <span className='text-xs text-gray-500'>{songInfo?.artistsNames}</span>
            </div>
            <div className='flex gap-4 pl-2'>
              <span><AiOutlineHeart size={16}/></span>
              <span><BsThreeDots size={16}/></span>
            </div>
        </div>
        <div className='w-[40%] flex flex-col flex-auto items-center gap-4  justify-center py-2'>
            <div className='flex gap-8 justify-center items-center'>
              <span 
              className={`cursor-pointer ${isShuffle?'text-purple-600':'text-black'}`}
              title='Bật phát ngẫu nhiên'
              onClick={()=>setIsShuffle(prev=>!prev)}
              ><CiShuffle size={24}/></span>
              <span onClick={handlePrevSong} className={`${!songs?'text-gray-500':'cursor-pointer'}`} ><MdSkipPrevious size={24}/></span>
              <span className='p-1 border border-gray-700 cursor-pointer hover:text-main-500 rounded-full'
              onClick={handleTogglePlayMusic}
              >
                 {!isLoadingSource?<LoadingSong/>:isPlaying?<BsFillPauseFill size={30}/>:<BsFillPlayFill size={30}/> } 
                </span>
              <span onClick={handleNextSong} className={`${!songs?'text-gray-500':'cursor-pointer'}`}><MdSkipNext size={24}/></span>
              {/* O,1 cũng đại diện luôn cho true false */}
              <span 
              className={`cursor-pointer ${repeatMode && 'text-purple-600'}`}
              onClick={()=>setRepeatMode(prev=>prev===2 ? 0 : prev+1)}
              title='Bật phát lại tất cả'
              >
                {repeatMode ===1 ? <TbRepeatOnce size={24}/>:<CiRepeat size={24}/>}
              </span>
            </div>
            <div className='w-full flex items-center justify-center gap-3 text-sm px-4'>
               <span className=''>{moment.utc(curSecond* 1000).format('mm:ss')}</span>
               <div className='w-4/5 hover:h-[8px] cursor-pointer m-auto relative h-[3px] rounded-l-full  rounded-r-full bg-[rgba(0,0,0,0.1)]'
               onClick={handleClickProgressbar}
               ref={trackRef}
               >
                  {/* Khi gán ref thì cái thumbRef đại diện cho cái thẻ div này */}
                  <div ref={thumbRef} className='absolute top-0 left-0 bottom-0 rounded-l-full  rounded-r-full  bg-[#0e8080]'></div>
               </div>
               <span>{moment.utc(songInfo?.duration * 1000).format('mm:ss')}</span>
            </div>
        </div>
        <div className='w-[30%] flex flex-auto items-center justify-end gap-4 '>
           <div className='flex gap-2 items-center'>
            <span onClick={()=>setVolume(prev=>+prev===0 ? 70 : 0)}>{+volume>=50?<SlVolume2/>:+volume===0?<SlVolumeOff/>:<SlVolume1/>}</span>
            <input type="range" 
            step={1} 
            min={0} 
            max={100}
            value={volume}
            onChange={(e)=>setVolume(e.target.value)}
            />
           </div>
           <span 
           onClick={()=>setIsShowRightSideBar(prev=>!prev)}
           className='p-1 rounded-md cursor-pointer bg-main-500 opacity-90 hover:opacity-100'
           ><BsMusicNoteList size={20}/></span>
        </div>
    </div>
  )
}
