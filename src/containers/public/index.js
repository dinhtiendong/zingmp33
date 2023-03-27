//  file này tượng trưng cho folder này dùng để import các file trong cùng folder public 
export { default as Home } from './Home'
// cái này viết tắt ta import file Home vào file index này rồi export nó ra
export { default as Login } from './Login'
export { default as Public } from './Public'

// Tại sao lại phải tạo ra file index này vì ở các file khác nếu mà ta muốn
// sử dụng các component này thì ta lại phải import từng thằng một sẽ rất dài thay vì vậy ta chỉ cần
// import 1 lần gọi vào trang index này distructring là xong
// VD: import {Home,Login} from '../../containers/public' chỉ cần như này là xong nó sẽ tự vào file index

export { default as Personal } from './Personal'
export { default as Album } from './Album'

