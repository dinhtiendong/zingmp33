import axios from "../axios";

export const apiGetSong = (sid) => new Promise(async(resolve, reject) =>{
    try {
        const response = await axios({
            url:'/song',
            // REACT_APP_SERVER_URL = 'http://localhost:5000/api' vì trong file là /api và sau api ta cần gọi đến và nối thêm là api/home
            method:'get',
            // để mặc định method là get để lấy data
            params: {id: sid}
            // ta truyền 1 key có value sid
    })
    //  Vì là bất đồng bộ gọi api ta cần thời gian chờ ko lấy ra được ngay lập tức nên dùng await
        resolve(response)
    } catch (error) {
       reject(error); 
    }
    // Trong đoạn try này nếu nó không bắt được lỗi thì nó trả về cho ta cái respone
    //  còn nếu mà có lỗi sẽ chạy vào catch và trả về lỗi
})
 

export const apiGetDetailSong = (sid) => new Promise(async(resolve, reject) =>{
    try {
        const response = await axios({
            url:'/infosong',
            method:'get',
            params: {id: sid}
    })
        resolve(response)
    } catch (error) {
       reject(error); 
    }
})


export const apiGetDetailPlayList = (pid) => new Promise(async(resolve, reject) =>{
    // pid là id của item nếu item đó là danh sách hay album
    try {
        const response = await axios({
            url:'/detailplaylist',
            method:'get',
            params: {id: pid}
    })
        resolve(response)
    } catch (error) {
       reject(error); 
    }
})