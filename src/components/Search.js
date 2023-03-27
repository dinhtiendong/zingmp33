import React from 'react'
import icons from '../utils/icons'

const {BsSearch} = icons

const Search = () => {
  return (
    <div className='w-full flex items-center'>
        <span className='h-10 pl-4 bg-[#DDE4E4] flex items-center justify-center rounded-l-[20px] text-gray-500'>
         <BsSearch size={24}/>
        </span>
       
        <input 
        type="text"
        className='outline-none w-full text-gray-500 bg-[#DDE4E4] px-4 py-2 rounded-r-[20px] h-10'
        placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bát hát,...'
        />
    </div>
  )
}

export default Search