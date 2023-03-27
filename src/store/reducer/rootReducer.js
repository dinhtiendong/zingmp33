// Redux có nhiều reducer để xử lý công việc chính vì vậy thằng root này là để gom lại
import appReducer from "./appReducer";
import { combineReducers } from "redux";
import musicReducer from "./musicReducer";
// combineReducers dùng để gom tất cả các reducer với nhau thành 1
// applyMiddleware sử dụng những middleware cho redux
import { persistStore, persistReducer } from 'redux-persist'
// Ta sẽ định nghĩa cái redux-persist trong này tức là ta muốn lưu những biến nào, state nào dưới local thì ta sẽ setup ở đây
import storage from 'redux-persist/lib/storage'
// cái này là xét sẵn localStorage  cho trang web
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'


const commonConfig= {
  storage: storage,
  stateReconciler: autoMergeLevel2
  // stateReconciler liên quan đến độ sau của việc merge state của redux-persist
}

// commonConfig tức là sau này ta ko chỉ muốn persist nguyên 1 cái reducer nào mà ta dành cho all reduce luôn

const musicConfig = {
  ...commonConfig,
  key: 'music',
  whitelist: ['curSongId']
  // nếu ko xét whilelist thì nó sẽ lưu hết tất cả những cái state của  reducer là music
  //  Còn nếu ta chỉ muốn lưu 1 vài state trong dó thôi những thằng còn lại ko cần lưu ta sẽ để trong whitelist
  // blacklist đối ngược lại whitelist là những thằng ko muốn lưu dưới local
}

const rootReducer = combineReducers({
  app: appReducer,
  music: persistReducer(musicConfig,musicReducer),
});

export default rootReducer;