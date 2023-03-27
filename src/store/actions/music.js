import actionTypes from "./actionTypes";
import * as apis from '../../apis'

export const setCurSongId = (sid)=>({
  // khi gọi hàm này ta cần truyền 1 cái song id
    // hàm này ta ko cần truyền 1 dispatch mà truyền cho 1  object thôi

    type:actionTypes.SET_CUR_SONG_ID,
    // sau khi có action ta gọi qua đây handle cái state
    sid 
    // ở đây ta nhận 1 cái song id ta có thể viết sid: sid như này nhưng vì giống nhau nên ta có thể viết nguyên sid
})


export const play = (flag)=>({
//  flag tức là true or flase hay chơi nhạc hay ko
    type:actionTypes.PLAY,
    flag
})

 

//  Muốn đưa 1 dữ liệu về reducer ta cần thằng dipatch, reducer như là bưu điện thì dipatch giống như nhân viên của nó
// reducer chỉ chấp nhận cho dipatch đem tới