import React from 'react'
import icons from '../utils/icons'
import { Search } from './'

const {HiArrowLeft,HiArrowRight} = icons

const Header = () => {
  return (
    <div className='flex justify-between w-full items-center'>
        <div className='flex items-center gap-6 w-full'>
            <div className='flex gap-6 text-gray-400'>
                <span><HiArrowLeft size={24}/></span>
                <span><HiArrowRight size={24}/></span>
            </div>
            <div className='w-1/2'>
                <Search/>
            </div>
        </div>
        <div>
            Login
        </div>
    </div>
  )
}

export default Header