<template>
    <div id="home">
        <nav-bar class="home-nav-bar">
            <div slot="left">&lt;</div>
            <div slot="center"><input type="search" placeholder="衣服"></div>
            <div slot="right">登录</div>
        </nav-bar>
        <!--<ul class="banner">
            <li v-for="(item,index) in banners" :key="index">
                <img :src="path+bannerSrc+item.crs" alt="">
            </li>
        </ul>-->
        <home-rotation :cbanners="banners" :interval = "1000"></home-rotation>
    </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar"
import HomeRotation from "./childComp/HomeRotation"
import * as base from "network/home"
export default {
    name:"Home",
    data(){
        return {
            banners:null,
            feature:[
                [
                    {id:'1',img:"xxx",href:"xxx",metail:"xxx"},
                    {id:'2',img:"xxx",href:"xxx",metail:"xxx"},
                    {id:'3',img:"xxx",href:"xxx",metail:"xxx"},
                    {id:'4',img:"xxx",href:"xxx",metail:"xxx"},
                    {id:'5',img:"xxx",href:"xxx",metail:"xxx"},
                ],
                [
                    {id:'1',img:"xxx",href:"xxx",metail:"xxx"},
                    {id:'2',img:"xxx",href:"xxx",metail:"xxx"},
                    {id:'3',img:"xxx",href:"xxx",metail:"xxx"},
                    {id:'4',img:"xxx",href:"xxx",metail:"xxx"},
                    {id:'5',img:"xxx",href:"xxx",metail:"xxx"},
                ]
            ]
        }
    },
    components:{
        NavBar,
        HomeRotation
    },
    created(){//vue实例在创建时的钩子函数
        //页面在创建的时候，我们需要请求数据
        this.getHomeBanner()
    },
    methods:{
        getHomeBanner(){
            base.getHomeBanner().then(res=>{
                console.log(res);
                this.banners = res
                // this.banners = {...res}//解构赋值
            })
        }
    }
}
</script>
<style scoped>
    #home{
        padding-top:44px;
        text-align:center
    }
   .home-nav-bar{
        position:fixed;
        top:0;
        left:0;
        right:0;
        z-index:100;
        color:#fff;
        background-color:#e43130;
    }
    /*.banner{
        padding:0;
        margin:0;
        width:98vw;
        padding:0 1vw;
    }
    .banner li{
        list-style:none;
    }
    .banner img{
        width:98vw;
    }*/
</style>