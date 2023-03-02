import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { actionPlay, actionPlayAlbum, actionSetCurSongId } from '../store/actions/music';
import { getArrSlider } from '../ultites/fn';

export default function Slider() {
    const {banner}=useSelector(state=>state.app);
    const dispatch=useDispatch();
    const navigate=useNavigate()
    useEffect(()=>{
        const sliderEls=document.getElementsByClassName('slider-item')
        let min=0
        let max=2
        // Khi chuyển qua trang khác thì hàm return của setInterval được gọi
        const intervalId= setInterval(()=>{
            const list= getArrSlider(min,max,sliderEls.length-1)
            for(let i=0; i<sliderEls.length; i++){
                if(list.some(item=>item===i)){
                    sliderEls[i].style.cssText= `display:block`
                } else
                {
                   sliderEls[i].style.cssText=`display:none`
                }
            }
           if(min === sliderEls.length-1){
            min=0
           } else{
            min+=1
           }
           if(max=== sliderEls.length-1){
            max=0
           } else{
            max+=1
           }
        },2000)
        return ()=>{
          intervalId && clearInterval(intervalId)
        }
    },[])

  const handleClickBaner=(item)=>{
    if(item?.type===1){
      dispatch(actionSetCurSongId(item.encodeId))
      dispatch(actionPlay(true))
      dispatch(actionPlayAlbum(false))
    } else 
    if(item?.type ===4){
       const albumPath=item?.link.split('.')[0]
       navigate(albumPath)

    }else{
      dispatch(actionPlayAlbum(false))
    }
  }

  return (
    <div className='flex gap-4 w-full overflow-hidden px-[50px] pt-8'>
        {banner?.map(item=>{
           return(
            <img src={item.banner}
            key={item.encodeId}
            onClick={()=> handleClickBaner(item)}
            className="slider-item flex-1 object-contain w-1/3 rounded-lg"
            />
           ) 
        })}
    </div>
  )
}
