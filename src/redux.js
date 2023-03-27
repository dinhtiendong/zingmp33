//  File này dùng để tạo store cho con app của ta
import rootReducer from "./store/reducer/rootReducer";
import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { persistStore } from "redux-persist"

const reduxConfig = ()=>{

    const store = createStore(rootReducer,applyMiddleware(thunk));
    const persistor = persistStore(store)

    //  Thì để mà persist 1 hay nhiều reducer thì ta cần phải persist cả store của reudux để quản lý
   
    return {store,persistor}
}

export default reduxConfig;