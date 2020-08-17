import {requestPost} from "./request"

//创建订单
export function create_order(data){
    return requestPost({
        url:"vuedemo/create_order",
        data
    })
}
export function getOrderbyOrderId(data){
    return requestPost({
        url:"vuedemo/get_goods_inorder",
        data:{
            order_id:data
        }
    })
}