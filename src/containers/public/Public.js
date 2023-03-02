import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Loading, Player, SidebarLeft, SidebarRight } from '../../components'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useSelector } from 'react-redux';


export default function Public() {
  const [isShowRightSidebar,setIsShowRightSideBar]=useState(false)
  const {isLoading}=useSelector(state=>state.app)
  console.log({isLoading});
  return (
    <div className='w-full relative h-screen flex flex-col bg-main-300'>
       <div className='w-full h-full flex flex-auto '>
        <div className='w-[240px] min-full flex-none border border-blue-500'>
        <SidebarLeft/>
        </div>
        <div className='flex-auto relative flex flex-col border border-red-500 '>
           {isLoading &&  <div className='absolute top-0 bottom-0 left-0 right-0 bg-main-200 z-20 opacity-[01] flex items-center justify-center'>
                <Loading/>
           </div> }
          <div className='h-[70px] flex-none px-[59px] flex items-center'> 
            <Header/>
         </div>
         <div className='flex-auto w-full'>
          <Scrollbars style={{ width:'100%', height:'100%'}}>
              <Outlet/>
          </Scrollbars>
        </div>
        </div>
        {/* Trên 1600px flex dưới 1600 là hidden */}
          {isShowRightSidebar && <div className='w-[250px] hidden 1026:flex flex-none border border-green-500 '>
          <SidebarRight/>
        </div> }
       </div>
       {/* Fixed là set thẻ của nó nổi cao hơn sao với cái màn hình */}
      <div className='fixed bottom-0 left-0 right-0 h-[90px] z-50'>
        <Player setIsShowRightSideBar={setIsShowRightSideBar}/>
      </div>

    </div>
  )
}
