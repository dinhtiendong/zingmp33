import React,{useEffect} from 'react'
import { Header,Slider } from '../../components'


const Home = () => {

  // useEffect() dùng để gọi api, để defenance là [] tức là chỉ gọi 1 lần tương đương component dimount trong class component
  // còn nếu trong trong [] có 1 defenance nào đó thì đó là component dimount diUpDate
  // Còn nếu trong useEffect cố 1 cái return thì đoạn code trong return nó tương đương với component viewUnMount

 
  return (
    // tai vì ở sidebar và cả trang home đều có sroll để cuộn chính vì vậy mỗi component ta sẽ để riêng nếu mà nội dài sẽ tự có sroll
    <div className='overflow-y-auto w-full'>

      <Slider/>

    </div>
  )
}

export default Home