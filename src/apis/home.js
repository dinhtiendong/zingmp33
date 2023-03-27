import axios from "../axios";

export const getHome = () => new Promise(async(resolve, reject) =>{
    try {
        const response = await axios({
            url:'/home',
            // REACT_APP_SERVER_URL = 'http://localhost:5000/api' vì trong file là /api và sau api ta cần gọi đến và nối thêm là api/home
            method:'get'
            // để mặc định method là get để lấy data
    })
    //  Vì là bất đồng bộ gọi api ta cần thời gian chờ ko lấy ra được ngay lập tức nên dùng await
        resolve(response)
    } catch (error) {
       reject(error); 
    }
    // Trong đoạn try này nếu nó không bắt được lỗi thì nó trả về cho ta cái respone
    //  còn nếu mà có lỗi sẽ chạy vào catch và trả về lỗi
})