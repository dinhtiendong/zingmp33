import React, { memo } from 'react'
import { List } from './';
import icons from '../utils/icons';
import moment from 'moment';
import { useSelector } from 'react-redux';

const {BsDot} = icons

const Lists = ({ totalDuration}) => {

    const {songs} = useSelector(state => state.music)
  return (
    <div className='w-full flex flex-col text-xs text-gray-600 '>
        <div className='flex justify-between items-center p-[10px] font-semibold'>
            <span className='w-[50%]'>BÀI HÁT</span>
            <span className='flex justify-center items-center flex-1'>ALBUM</span>
            <span className='flex flex-1 justify-end'>THỜI GIAN</span>

        </div>
        <div className='flex flex-col'>
          {songs?.map(item =>(
            <List key={item.encodeId} songData={item}/>
          ))}
        </div>
        <span className='flex items-center gap-1 '>
            <span>{`${songs?.length} bài hát`}</span>
            <BsDot size={24}/>
            <span>{moment.utc(totalDuration*1000).format('HH:mm:ss')}</span>
        </span>
    </div>
  )
}

export default memo(Lists)

//  Chức năng memo khi mà thằng cha đổ data về nó Vd ở đây là Album 
// <Lists songs={playListData?.song.items} totalDuration={playListData?.song.totalDuration}/> nó import thằng list
// songs={playListData?.song.items} totalDuration={playListData?.song.totalDuration} đây là truyền prop nếu không bọc trong memo
//  Thì mỗi khi thằng Album render thì thằng Lists lại chạy vào componnent của nó để re-render bất kể cho prop có thay đổi hay không
//  chính vậy ta bọc trong memo để tránh việc re-render không cần thiết, cái component này chỉ re-render khi cái prop truyền vào thay đổi
