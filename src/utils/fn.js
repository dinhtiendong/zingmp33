//  Đây là file mình sẽ viết những hàm hỗ trợ trong này
export const getArrSlider = (start,end,number) =>{
const limit = start > end ? number : end
// number là số lượng ảnh
let output = []
    for(let i= start; i <= limit; i++) {
        output.push(i)
    }
    if(start > end){
        for(let i= 0; i <= end; i++) {
            output.push(i)
        }
    }
    return output
}
