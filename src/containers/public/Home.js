import React,{useEffect} from 'react'
import {NewRelease, Section,Slider} from '../../components'
import { useSelector } from 'react-redux/es/exports';

export default function Home() {
  const {friday,newEveryday,top100,newMusic, newRelease}=useSelector(state=>state.app)
  // console.log('aa',newRelease);
  return (
    <div className='overflow-y-auto '>
       <div>
         <Slider/>
         <Section friday={friday}/>
         <Section friday={newEveryday}/>
         <NewRelease/>
         <Section friday={top100}/>
         <Section friday={newMusic}/>
         <div className='w-full h-[500px]'></div>
       </div>
    </div>
  )
}
