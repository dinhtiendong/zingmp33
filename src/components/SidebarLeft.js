import React from 'react'
import logo from '../assets/logo-light.svg'
import { sidebarMenu } from '../utils/menu'
import { NavLink,Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import path from '../utils/path'
// Navlink dùng để import link trong navbar, navlink khác với link ở chỗ navlink nó còn trả về cho mk 1 kết quả xem thằng nào đang active


const notActiveStyle = 'py-2 px-[25px] flex gap-3 items-center font-semibold text-[13px] text-[#32323D]'

const activeStyle ='py-2 px-[25px] flex gap-3 items-center font-semibold text-[13px] text-[#0F7070]'

const SidebarLeft = () => {
  const navigate = useNavigate()
  // useNavigate trả về cho mk 1 thằng điều hướng ta dùng thằng đó để hứng 
  return (
    <div className='flex h-full flex-col bg-main-200'>

       <div
      //  onClick={()=>navigate(path.HOME)} dùng cách này hoặc cách <Link> đều được
        className='w-full h-[70px] py-[15px] px-[25px] flex items-center justify-start'>
          <Link to={path.HOME}>
          <img src={logo} alt='logo'className='w-[120px] h-10'/>
          </Link>
      </div>
      <div className='flex flex-col'>

          {sidebarMenu.map((item) =>(

          <NavLink
          key={item.path}
              to={item.path}
              end={item.end}
            className={({isActive})=>isActive ? activeStyle : notActiveStyle}
          
          >
            {item.icons}
            <span>{item.text}</span>
            
        </NavLink>
          ))}
      </div>
    </div>
  )
}

export default SidebarLeft