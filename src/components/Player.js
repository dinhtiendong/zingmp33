import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as apis from '../apis'
import icons from '../utils/icons'
import * as actions from '../store/actions'
import moment from 'moment'
import { toast } from 'react-toastify';

const { AiOutlineHeart, AiFillHeart, BsThreeDots, MdSkipNext, MdSkipPrevious, CiRepeat,BsPauseFill, BsPlayFill, CiShuffle } = icons
var intervalId // để hứng intervalId và cler nó khi ko cần

  const Player = () => {
    
    const { curSongId, isPlaying,atAlbum } = useSelector(state => state.music)
    // ở  đây useSelector sẽ lấy được cái id ra và truyền vào trong thằng useEffect ở ngay dưới
    const [songInfo,setSongInfo] = useState(null)
    const [audio,setAudio] = useState(new Audio())
    const [curSeconds,setCurSeconds] = useState(0)
    const thumbRef = useRef() // đây là thẻ nằm trên
    const trackRef = useRef() //


    // hàm play là hàm bất đồng bộ tức là nó cần trả về kết quả thành công hay thất bại
    // chính vì vậy ta phải đợi nó trả về kết quả thì ta phải dùng async await hoặc tương tự vâyj

    const dispatch = useDispatch() 

    useEffect(()=>{
      const fetchDetailSong= async ()=>{
        const [res1,res2] = await Promise.all([
          apis.apiGetDetailSong(curSongId),
          // apiGetDetailSong gọi api để lấy curSongId
          apis.apiGetSong(curSongId)
          // apiGetDetailSong gọi api để lấy source ra để phát nhạc
        ])
        if(res1.data.err === 0)
        {
          setSongInfo(res1.data.data)
          setCurSeconds(0)
        }
        if(res2.data.err === 0)
        {
          audio.pause()
          setAudio(new Audio(res2.data.data['128']))
        }
        else{
          //  xét trường hợp yêu cầu tài khoản vip
          setAudio(new Audio(res2.data.data))
          dispatch(actions.play(false))
          toast.warn(res2.data.msg)
          setCurSeconds(0)
          thumbRef.current.style.cssText = `right: 100%`
        }
      }
  
      fetchDetailSong()
    },[curSongId]) 
    // curSongId cái dependency mỗi lần thay đổi tức là chuyển qua bài khác nó sẽ gọi api để lấy dữ liệu ra phát nhạc


    useEffect(() => {
      intervalId && clearInterval(intervalId)
      // dispatch(actions.play(true))
      // ta đặt 1 cái cờ là true tức là đang chơi nhạc
      audio.pause()
      audio.load()
      if(isPlaying){
        audio.play()
        intervalId = setInterval(()=>{
          let percent = Math.round(audio.currentTime * 10000 / songInfo.duration) / 100// trên 5 làm tròn lên dưới 5 làm trong xuống
          //  * 10000 để làm tròng 2 số thập phần / 100 để lấy 2 số thập phân 1.24, 2.34 kiểu vậy
          thumbRef.current.style.cssText = `right: ${100 - percent}%`
          setCurSeconds(Math.round(audio.currentTime))
        },200) // để 200 ms để cho thanh trên ngang chạy nhanh và mượt hơn
      }else{
        // nếu mà nghi chơi nhạc
        toast.warn()
      }
    }, [audio])


    const handleTogglePlayMusic = async () =>{
      if(isPlaying)
      {
        audio.pause()
        dispatch(actions.play(false))
      }
      else{
        audio.play()
        dispatch(actions.play(true))
  
      }
    }
  
    const handleClickPropressbar = (e) =>{
      const trackRect = trackRef.current.getBoundingClientRect()
      const percent = Math.round((e.clientX - trackRect.left)*10000 / trackRect.width) / 100
      // getBoundingClientRect() giúp ta lấy tọa độ của thẻ cha và thẻ cha được chọn là tracRef được sử dụng với props là ref ở dưới
      // clientX là vị trí con trỏ chuột khi click
      thumbRef.current.style.cssText = `right: ${100 - percent}%`
      audio.currentTime = percent * songInfo.duration / 100
      setCurSeconds(Math.round(percent * songInfo.duration /100))
    }

    const handleNextSong = () => {
      if(atAlbum)
      {
        console.log(1);
      }
    }

    return (
      <div className='bg-main-400 h-full px-5 flex'>
          <div className='w-[30%] flex flex-auto items-center gap-3'>
            <img src={songInfo?.thumbnail} alt="thumbanil" className='w-16 h-16 object-cover rounded-md'/>
            <div className='flex flex-col gap-2'>
                <span className='font-semibolb text-gray-700 text-sm'>{songInfo?.title}</span>
                <span className='text-xs text-gray-500'>{songInfo?.artistsNames}</span>
            </div>
            <div className='flex gap-4 pl-2'>
              <span>
                <AiOutlineHeart size={16}/>
              </span>
              <span>
                <BsThreeDots size={16}/>
              </span>
            </div>
          </div>
          <div className='w-[40%] flex-auto gap-2 flex flex-col justify-center items-center border border-red-500  py-2'> 
              <div className='flex gap-8 justify-center items-center'>
                <div className='text-main-500'></div>
                  <span className='cursor-pointer' title='Bật phát ngẫu nhiên'> <CiShuffle size={24}/></span>
                  <span className='cursor-pointer'><MdSkipPrevious size={24}/></span>
                  <span
                   className='p-1 border cursor-pointer
                    border-gray-700 hover:text-green-700 
                    rounded-full'
                    onClick={handleTogglePlayMusic}
                    >
                      {isPlaying ? <BsPauseFill size={30}/> : <BsPlayFill size={30}/> }
                  </span>
                  <span onClick={handleNextSong} className={`${!atAlbum ? 'text-gray-500' : 'cursor-pointer'}`}><MdSkipNext size={24}/></span>
                  <span className='cursor-pointer' title='Bật phát lại tất cả'><CiRepeat size={24}/></span>
  
              </div>
              <div className='w-full flex items-center justify-center gap-3 text-xs'>
                <span className=''>{moment.utc(curSeconds * 1000).format('mm:ss')}</span>
                <div className='w-3/5 relative h-[3px] hover:h-[8px] cursor-pointer rounded-l-full rounded-r-full bg-[rgba(0,0,0,0.1)]'
                onClick={handleClickPropressbar}
                ref ={trackRef}
                >
                  <div ref={thumbRef} className='absolute top-0 left-0 rounded-l-full rounded-r-full right-0 bottom-0 bg-[#0e8080]'></div>
                </div>
                <span>{moment.utc(songInfo?.duration * 1000).format('mm:ss')}</span>

              </div>
          </div>
          <div className='w-[30%] flex-auto border border-red-500'>
              Volume
          </div>
      </div>
    )
  }
  
  export default Player