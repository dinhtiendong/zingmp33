// Lưu những cái state những biến có liên quan đến app
import actionTypes from "../actions/actionTypes";

const initState = {
    curSongId: null,
    isPlaying: false
    //  Ban đầu sẽ là null nếu mà chưa chọn bài hát nào nếu mà đã chọn bài hát rồi thì 
    // Ta sẽ xét thành ID của bài hát đó
}

const musicReducer = (state = initState,action) =>{
// switch case để check xem reducer này tương ứng với case nào
// action ở đây thường objec và 1 key value gọi là type để chỉ cái tên mà action thực thi
    switch(action.type){
        
        case actionTypes.SET_CUR_SONG_ID:
            return{
                ...state,
                // trả lại cái state tức là thằng nào k muốn thay đổi ta sẽ tả lại đây
                curSongId: action.sid || null
                // ta chỉ cần thay đôi cái curSongId
            }
//  sau khi có được type và sid thì nó sẽ bê sang Reducer và xét xem actionTypes nào SET_CUR_SONG_ID 
// thì trong appReducer thì GET_HOME nên đi sang musicReducer và trong musicReducer có thằng SET_CUR_SONG_ID 
//  Và nó sẽ xét curSongId = cái sid được gửi sang

        case actionTypes.PLAY:
            return {
                ...state,
                isPlaying: action.flag
            }

        default: 
         return state
        }
}

export default musicReducer