import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import * as apis from '../../apis'
import moment from 'moment'
import { Lists } from '../../components'
import { Scrollbars } from 'react-custom-scrollbars-2';
//  hook này được sử dụng lấy cái param trên url


const Album = () => {

    const { pid } = useParams()
    const [playListData,setPlayListData] = useState({})

    useEffect(()=>{
      const fetchDetailPlayList =async () =>{
        const response = await apis.apiGetDetailPlayList(pid)
        if(response?.data.err === 0)
        {
          setPlayListData(response.data?.data)
        }
      }

      fetchDetailPlayList()
    },[pid])
    // Khi pid thay đổi thì nso lại chạy vào useEffect này để thay đôi id

    // ở trong route ta để :/ để react router dom hiểu rằng đó là param thôi

  return (
<div className='flex w-full h-full gap-8 px-[59px]'>
      <div className='flex-none w-1/4 border border-red-500
       flex flex-col items-center gap-2'>
        <img src={playListData?.thumbnailM} alt='Thumbnail' className='w-full object-contain rounded-md shadow-md'/>
        <div className='flex flex-col items-center gap-1'>
          <h3 className='text-[20px] text-gray-800 font-bold'>{playListData?.title}</h3>
          <span className='flex gap-2 items-center text-xs text-gray-500'> 
            <span >
              Cập nhật:
            </span>
            <span> {moment.unix(playListData?.contentLastUpdate).format("DD/MM/YYYY")}</span>
          </span>
          <span className='flex gap-2 items-center text-xs text-gray-500'>{playListData?.artistsNames}</span>
          <span className='flex gap-2 items-center text-xs text-gray-500'>{`${Math.round(playListData?.like/1000)}k người yêu thích`}</span>
        </div>
      </div> 
       <Scrollbars style={{ width: '100%', height: '70%' }}>
      <div className='flex-auto mb-40'>
          <span className='text-sm'>
            <span className='text-gray-600'>Lời tựa </span>
            <span className=''>
              {playListData?.sortDescription}
            </span>
          </span>
            <Lists songs={playListData?.song?.items} totalDuration={playListData?.song?.totalDuration}/>
      </div>
    </Scrollbars>
    </div>
  )
}

export default Album