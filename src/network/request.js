<<<<<<< HEAD
import axios from 'axios'

//get请求
export function request(config){
    const instance = new axios.create({
        baseURL:"http://106.12.85.17:8090",
        method:'get'
=======
import axios from "axios" 

export function request(config){
    const instance = new axios.create({
        baseURL:"http://106.12.85.17:9091",
>>>>>>> 5105c642baebfafca0f869a4c6b568e420ed3ae6
    })
    //请求拦截
    instance.interceptors.request.use(config=>{
        //.....
<<<<<<< HEAD
        console.log(config);
        return config
    })

    //响应拦截
    instance.interceptors.response.use(res=>{
        //....
        // console.log(res);
        return res.data
    },err=>{
        console.log(err);
    })
    return instance(config)
}
//post 请求
export function requestPost(config){
    const instance = new axios.create({
        baseURL:"http://106.12.85.17:8090",
        method: 'post'
    })
    //请求拦截
    instance.interceptors.request.use(config=>{
        //.....
        // console.log(config);
        return config
    })

    //响应拦截
    instance.interceptors.response.use(res=>{
        //....
        // console.log(res);
        return res.data
    },err=>{
        console.log(err);
=======
        return config
    })
    //响应拦截
    instance.interceptors.response.use(res=>{
        //...
        return res.data
    },err=>{
        console.log(err)
>>>>>>> 5105c642baebfafca0f869a4c6b568e420ed3ae6
    })
    return instance(config)
}