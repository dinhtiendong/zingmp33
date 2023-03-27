import React from 'react'
import { Outlet } from 'react-router-dom'
import {Player,SidebarLeft,SidebarRight,Header } from '../../components'
//  Vì 2 thằng sidebar ko thay đổi khi ta click vào nội dung bất kỳ ở phần content 
// Vì vậy ta cho nằm cùng home, outlet để đựng cái ở giữa

const Public = () => {
  return (
    <div className='w-full relative h-screen flex flex-col bg-main-300'>
      <div className='w-full h-full flex flex-auto '>
        <div className='w-[240px] h-full flex-none border border-blue-500'>
          <SidebarLeft/>
        </div>
        <div className='flex-auto border border-red-500'>       
          <div className='h-[70px] px-[59px] flex items-center mb-5'>
            <Header/>
          </div>
          <Outlet/>
        </div>

        <div className='w-[329px] hidden 1300:flex flex-none border border-green-500 animate-slide-left bg-red-500'> 
          {/* hidden 1600:flex mean: trước 1600 là hidden sau 1600 thì là flex đó là cách responsive của tailwind */}
          <SidebarRight/>
        </div>
        </div>
      <div className='fixed bottom-0 left-0 right-0 flex-none h-[90px]'>
        <Player/>
      </div>
    </div>
    
  )
}

export default Public