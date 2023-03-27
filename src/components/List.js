import React, {memo} from 'react'
import icons from '../utils/icons'
import moment from 'moment'
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions'

const {BsMusicNoteBeamed} = icons

const List = ({songData}) => {
    const dispatch = useDispatch()
    //  Ta đang cần khi click vào 1 bài hát ở trong Lists tức là thằng List hiện tại đây ta cần phải lấy được id và gửi qua redux
  return (
    <div 
    className='flex justify-between items-center p-[10px] border-t border-[rgba(0,0,0,0.05)] hover:bg-[#DDE4E4] cursor-pointer'
    onClick={()=>{
        dispatch(actions.setCurSongId(songData?.encodeId))
        dispatch(actions.play(true))
    }}
    // ở đây onclick này là ta đang sent 1 cái id về redux vì songData là item được api trả về 
    >
        <div className='flex items-center w-[50%] gap-3'>
            <span><BsMusicNoteBeamed/></span>
            <img src={songData?.thumbnail} alt="thumbbnailM" className='w-10 h-10 object-cover rounded-md'/>
            <span className='flex flex-col w-full'>
                <span className='text-sm font-semibold '>{songData?.title?.length > 30 ? `${songData?.title?.slice(0,30)}...`: songData?.title}</span>            
                <span>{songData?.artistsNames}</span>

            </span>
        </div>
        <div className='flex-1 flex justify-center items-center'>
            {songData?.album?.title?.length > 30 ? `${songData?.album?.title?.slice(0,30)}...`: songData?.album?.title}           
        </div>
        <div className='flex flex-1 justify-end'>
            {moment.utc(songData?.duration*1000).format('mm:ss')}
        </div>
    </div>
  )
}

export default memo(List)