import { useSelector,useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'
import { Routes,Route} from 'react-router-dom'
import { Home,Public,Login,Personal,Album} from '../src/containers/public'
import path from './utils/path';
import * as actions from '../src/store/actions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// useSelector dùng để lấy dữ liệu từ redux
// useDispatch có tác dụng mang action tới redux
 // const { test } = useSelector(state => state.app) cái state đầu tiên là đại diện cho toàn bộ state của store và trong state đó ta cần gọi đến trực tiếp state cụ thể là app
function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(actions.getHome())
  },[])

  return (
    <>
    
    <div className="">
      <Routes>
        <Route path={path.PUBLIC} element={<Public/>}>
          <Route path={path.HOME} element={<Home/>}/>
          <Route path={path.LOGIN} element={<Login/>}/>
          <Route path={path.MY_MUSIC} element={<Personal/>}/>
          <Route path={path.ALBUM_TITLE_PID} element={<Album/>}/>
          <Route path={path.PLAYLIST_TITLE_PID} element={<Album/>}/>





          <Route path={path.STAR} element={<Home/>}/>
        </Route>
      </Routes>
    </div>
    <ToastContainer
    position='top-right'
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme='light'
    >
    </ToastContainer>
    </>

  );
}

export default App;
