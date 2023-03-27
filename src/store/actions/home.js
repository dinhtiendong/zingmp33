import actionTypes from "./actionTypes";
import * as apis from '../../apis'

export const getHome = ()=>async (dispatch)=>{
        try {
            const response = await apis.getHome()
            // console.log(response.data.data.items);
            if(response?.data.err == 0)
            {
                // handle when success
                dispatch({
                    type: actionTypes.GET_HOME,
                    homeData: response.data.data.items
                })
            }
            else{
                // handle when fail
                dispatch({
                    type: actionTypes.GET_HOME,
                    homeData: null
                })
            }
        } catch (error) {
                    dispatch({
                    type: actionTypes.GET_HOME,
                    homeData: null
                })
        }
    }


//  Muốn đưa 1 dữ liệu về reducer ta cần thằng dipatch, reducer như là bưu điện thì dipatch giống như nhân viên của nó
// reducer chỉ chấp nhận cho dipatch đem tới