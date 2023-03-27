Redux là 1 thư viện chạy song song với app của mình khi nào mình có nhiều cái state mà muốn thay đổi mà dùng chung cho nhiều component nào cũng lấy được thì ta dùng redux.
- Redux muốn dùng được phải có store

Sơ đồ làm việc của Redux:
- Thì nguyên cục lớn chứa Store là redux, trong store của redux chứa các state
- View là cái react của mình là cái hiển thị giao diện người dùng
-Action: Khi ở view mình muốn render ra 1 dữ liệu nào đó từ chỗ redux thì gửi cho nó 1 cái action, tức là ở view mình gửi cho nó 1 cái action nó là 1 cái hàm ở file view mình gọi hàm action,(Dispatch) thì cái hàm này đi tới thằng Reducer đi qua redux nó thực hiện action nhưng làm sao để nó đi được thì là thằng  Dispatcher.

Mỗi Action thì có 1 cái tên thực thi nhiệm vụ của tưng action khi mà action đưa qua store thì trong thằng reducer nó giống như người xử lý thì cái action nó mang tên ai thì trong cái reducer sẽ xử lý những action tương ứng thôi, (State) thì sau khi sử lý xong nó sẽ được 1 cái kết quả thì cái kết quả đó sẽ làm thay đổi cái state trong redux thì cái state sẽ được dùng lại cho file View

- Để dùng được redux trong file index.js ta cần phải bọc App trong Provider và truyền vào 1 cái store


Cấu tạo Reducer:
Về bản chất nó chỉ là 1 hàm có 2 đối action và state.
- state tức là tất cả những biến mà reducer nó quản lý
- action là cái mà khi ta gửi qua dispatch nó sẽ chạy vào hàm này


- Ban chất của redux là lưu lại con app mà mình đang chạy, nhưng khi mình reload lại trang thì những cái state trước đó cua redux nó sẽ reset cái trạng thái ban đầu của nó luôn
VD: trong appReducer cái inival là banner nó là 1 mảng rỗng, thì nó nhận vào 6 tấm ảnh nhưng khi mình reload lại trang thì nó lại trờ về mảng rỗng.

Gói npm redux-persist nó sẽ lưu những state của redux dưới local và sau khi mình reload nó sẽ chọc xuống local, nó xem thẻ có lưu cái state nào dưới local ko nếu có thì nó sẽ lấy những cái mà ta lưu dưới local đó set cho state đó luôn

persistReducer dùng để persist cái reducer mà mình muốn tức là mình muốn dữ lại cái state của thằng reducer nào thì mình persist cái reducer đó.

VD: const persistedReducer = persistReducer(persistConfig, rootReducer)

const persistConfig = {
  key: 'root',
  storage,
}
Ở đây ta muốn giữ lại những state của rootReducer được lưu ở dưới local và cái persistConfig là mình muốn lưu ở đâu với tên là gì, state nào lưu, state nào k lưu thì ta lưu ời persistConfig

persistGate: dùng để delay cái UI của mình lại cho đến khi cái state của redux được persist hoặc save đại khái dùng để hạn chế render nhiều lần

persisteGate dùng để bọc Provider



redux thunk dùng để viết bất đồng bộ, tức là ta dùng action để gọi API, còn nếu ko có thunk thì reudx chỉ trả lại cho ta object thuần thôi ko trả về 1 hàm, còn thunk thì trả về 1 hàm và dùng hàm đó để call API

Quá trình thunk:
Khi ta bắn 1 action đi thì action sẽ qua middleware rồi và nhờ middleware action sẽ trả ra 1 function dùng để call API, và khi call API xong thì mình mới chạy vào cái store và update cái state


folder components dùng để chứa những component ko có route tức là để import vào component khác

folder containers dùng để chứa những component có route 
    +/ public và system trong container dùng để phân biêt trang nào cần đăng nhập trang nào k cần
foler utils dùng để lưu các constant
folder apis dùng để viết các hàm gọi api

React Router Dom thì ở file index chính ta phải bọc lại trong BrowerRouter thì ta mới dùng được single page

<!-- <Router> sẽ được bọc trong <Routers>, Mỗi <Router> tương ứng với 1 trang -->

        <Route path='/*' element={<Punlic/>}>

        </Route>

        1 router sẽ có 2 thành phần 1 là đường chỉ 2 trang tương ứng
        /* tượng chưng cho tất cả, tức là tất cả link nào bắt đầu bằng dấu thì nó sẽ hiển thị route này


Nested router là các route được lòng bên trong router khác nếu mà bên trong ko có dấu / thì tức là nó lấy path của thằng cha + path của thằng con

- Khi dùng nested router thì nó luôn render thằng cha trước và để dùng được thằng con bên trong ta sử dụng 1 cái có sẵn đó là <Outlet>
- thằng outlet ở trang chính nó mặc định hiển thị thằng cha và thằng con được map với nó

object-fit: cover : ưu tiên cái kích thước hơn là ảnh tức là nó chấp nhận mất 1 phần của ảnh để nó full cái kích thước mà ta đã xét trước với ảnh

contain: tức là nó ưu tiên cái ảnh hơn nó k chịu cắt ảnh, nó sẽ lấy chiều rộng hoặc chiều cao mà mình xét nó sẽ là full 1 trong 2 và nó giữ nguyên tấm ảnh mà ko cắt


1 action bình thườn thì sẽ trả về 1 object có dạng 
const namefunction = ()=>({
    type: <tên reducer>,data
})

Nhưng khi mình gọi api thì mình không thể nào gọi trả về 1 object thuân được mà phải gọi 1 function trả về 1 api thì thằng redux-thunk nó giúp mk ngoài trả về object thuần thì nó còn trả về cho mk 1 cái hàm nữa

const namefunction = ()=>(dispatch)=>{

}

1 hàm trả về 1 hàm và trong hàm trả về có 1 tham số là dispatch của thằng thunk cấp cho mk để đưa tới reducer đế handler


flex-auto là lấy những thằng còn lại sau khi trừ thằng có flex-none.
flex-none là nó cố định giá trị 1 thằng mà ko bị thay đổi kích thước theo những thằng kahcs


useEffect ta ko sử dụng async cho callback của nó được tức là ta ko viết bất đồng bộ trong hàm của useEffect 
VD: useEffect(async()=>{}) như này sẽ báo lỗi vì useEffect mặc định chạy đồng bộ
- ta chỉ có thể viết bất đồng bộ trong hàm được tạo bên trong useEffect
VD: useEffect(()=>{
  const test = async()=>{

  }
})

Để convert từ timeStamp sang time bình thường ta dùng thư viện JS moment




