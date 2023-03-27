// Lưu những cái state những biến có liên quan đến app
import actionTypes from "../actions/actionTypes";

const initState = {
    banner: [],
}

const appReducer =(state= initState,action)=>{
// switch case để check xem reducer này tương ứng với case nào
// action ở đây thường objec và 1 key value gọi là type để chỉ cái tên mà action thực thi
    switch(action.type){
        case actionTypes.GET_HOME:
            // console.log(action);
            return {
                ...state,
                banner: action.homeData?.find(item => item.sectionType === 'banner')?.items ||null
            }

        default: 
            return state
        }
}

export default appReducer