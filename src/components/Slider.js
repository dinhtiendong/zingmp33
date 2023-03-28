import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getArrSlider } from '../utils/fn'
// lấy dữ liệu từ redux thì ta dùng useSelector
import * as actions from '../store/actions'
import { useNavigate } from 'react-router-dom'
const Slider = () => {

    const {banner} = useSelector(state => state.app)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // animation for banner

    useEffect(()=>{
        const sliderEls = document.getElementsByClassName('slider-item')
        let min = 0 
        let max = 2 

        // setInterval trả về 1 cái Id là intervalId
        const intervalId = setInterval(()=>{
            // Sau 2500ms nó sẽ chạy vào hàm này để thay đổi ảnh vị trí 1,2,3
            const list = getArrSlider(min,max,sliderEls.length - 1);


            // Đây là xóa những thằng ở vị trí ban đầu
            for (let i = 0; i < sliderEls.length; i++)
            {
                 // Delete những classname mà ta css mà ta thêm trước đó
                 sliderEls[i]?.classList?.remove('animate-slide-right','order-last','z-20');
                 sliderEls[i]?.classList?.remove('animate-slide-left','order-first','z-10');
                 sliderEls[i]?.classList?.remove('animate-slide-left2','order-2','z-10');



                //  Hide or show images
                // Nó sẽ xét những thằng nào  nằm trong mảng list để hiện nó ra và thằng ào ko thì ẩn đi
                   if(list.some(item => item === i)) 
                   {
                    sliderEls[i].style.cssText =`display:block`
                   } 
                   else{
                    sliderEls[i].style.cssText =`display:none`

                   }
                    
            }

            // Add animation by adding classnames
            //  Ở đây ta thêm animation cho nó
            list.forEach(item =>{
                if(item === max)
                {
                    sliderEls[item]?.classList?.add('animate-slide-right','order-last','z-20')
                    // order-last là cái của tailwind
                }
                else if(item === min){
                    sliderEls[item]?.classList?.add('animate-slide-left','order-first','z-10')
                }
                else
                {
                    sliderEls[item]?.classList?.add('animate-slide-left2','order-2','z-10')
                }
            })
            // sliderEls[max].classList.add('animate-slide-right')
            min = (min === sliderEls.length - 1) ? 0 : min + 1
            max = (max === sliderEls.length - 1) ? 0 : max + 1

        },3000)
        return ()=>{
            // Khi trả về intervalId thì ta kiểm trả xem nếu id đó có tồn tại thì ta
            // Xóa nó đi bằng cleaInterval 
            intervalId && clearInterval(intervalId)
        }
    },[])

    const handleClickBanner = (item) => {
        // Nếu type =1 thì cho phát nhạc  = 4 là albums thì chuyển sang trang detal

        if(item?.type === 1)
        {
            // Nếu type = 1 thì ta sẽ lưu cái id vào redux và để lưu vào redux ta viết action cho nó
            // Để thay đổi state trong redux chỉ có ta dùng dispatch và action
            dispatch(actions.setCurSongId(item.encodeId))
            // dispatch là người đưa thư và truyền cho nó bức thư action.setCurSongId()
            dispatch(actions.play(true))
            dispatch(actions.playAlbum(false))
            
        }
        else if(item?.type === 4)
        {
            // type =4 là cái album
            const albumPath = item?.link?.split('.')[0]
            // split tức là ta sẽ cắt nó thành 1 mảng theo cái dấu mà ta chỉ định
            // VD: "/album/V-Pop-Rising-Cam-MONO-Luc-Huy-UMIE/ZFCIOABU.html" đây link thì nó sẽ cắt tới dấu .
            // ta sẽ được mảng ['/album/V-Pop-Rising-Cam-MONO-Luc-Huy-UMIE/ZFCIOABU','html']
            // [0] là lấy ra giá trị mảng đầu tiên sau khi cắt

            navigate(albumPath)
        }
        else{
            dispatch(actions.playAlbum(false))

        }
    }

    // follow của handleClickBanner Khi ta click vào 1 bức hình trên slide nó sẽ gọi hàm handlerClickBanner
     // Nó sẽ lấy cái item tức là bài hát mà ta click nó chạy vào hàm nếu type == 1 thì nó sẽ 
    //  dispatch 1 cái action để đưa cái encodeId tức là id của bài hát đưa vào trong redux 

  return (
    <div className='w-full overflow-hidden px-[59px]'>

        <div className='flex gap-8 w-full pt-8'>
            {banner?.map((item,index)=>(
                <img
                key={item.encodeId} 
                src={item.banner}
                onClick={()=>handleClickBanner(item)}
                // ta phaải để callback gọi đến hàm này ko nó mặc định gọi
                className={`slider-item flex-1 object-contain w-[30%] rounded-lg ${index <= 2 ? 'block':'hidden'}`}
                />
            ))}
        </div>
    </div>
  )
}

export default Slider