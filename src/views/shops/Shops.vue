<template>
    <div id="shops">
        <div class="shopHeader">
            <div>
            <router-link to="/ShopDetails" class="shopLink">
                <div class="shopLogo"><img src="../../assets/img/shops/2.jpg"></div>
                <div class="shopName">Apple产品京东自营旗舰店</div>
                <div class="shopIcon"><span class="icon"></span></div>
            </router-link>
            <div class="shopCollect">
                <button>收藏</button>
                <div class="shopCollectNumber">2178万人收藏</div>
            </div>
            <div class="shopIcon2">   
                <el-dropdown trigger="click" @command="pushRouter">
                    <span class="el-dropdown-link">
                      <i class="el-icon-more-outline el-icon-more"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown" class="dropdown">
                      <el-dropdown-item command="/home">首页</el-dropdown-item>
                      <el-dropdown-item command="/keywords">分类搜索</el-dropdown-item>
                      <el-dropdown-item command="/cart">购物车</el-dropdown-item>
                      <el-dropdown-item command="/profile">我的京东</el-dropdown-item>
                      <el-dropdown-item command="/zj">浏览记录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
         <div class="">
                    <div class="">
                        <div class="">
                            <input type="text" placeholder="搜商品">
                        </div>
                    </div>
                    <div class="">
                        <ul class="">
                            <li class="">
                                <div>精选</div>
                            </li> 
                            <li class="">
                                <div>商品</div>
                            </li>
                            <li class="">
                                <div>新品</div>
                            </li>
                            <li class="">
                                <div>买家秀</div>
                            </li>
                            <li class="">
                                <div>动态</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
    export default {
        name:"shops",
        data(){
            return{

            }
        },
        methods:{
             pushRouter(path) {
                console.log(path);
                this.$router.push(path);
            },
        }
    }
</script>
<style scoped>
.shopHeader{
    background-image:url('../../assets/img/shops/1.png');
    height:120px;
    width:100%;
}
.shopHeader div .shopLink{
    display:block;
    padding-left:70px;
    padding-top:5%;
}
.shopLogo{
    width:50px;
    height:50px;
    position:absolute;
    margin:3%;
    left: 5px;
    top: 10px;
}
.shopLogo img{
    width:100%;
    height:100%;
    border-radius:5px;
}
.shopName{
    color:#fff;
    font-size:16px;
}
.shopLink{
    width: 51%;float: left;
}
.shopLink .shopIcon .icon{
    background-image:url('../../assets/img/shops/3.png');
    background-repeat: no-repeat;
    display:block;
    height:30px;
    background-size:30px;
    margin-left: 10px;
    margin-top: 10px;
}
.shopCollect{
    float: left;
    padding-top: 5%;
}
.shopCollect button{
    background-color:#e93b3d;
    border:1px solid #e93b3d;
    color:#fff;
    padding:10% 20%;
    font-size:14px;
    border-radius:15px;
}
.shopCollect .shopCollectNumber{
    color:#fff;
    padding-top: 5%;
    font-size:12px;
}
.shopIcon2{
    float:left;
    margin-top:8%;
    width:37px;
    height:20px;
}
.shopIcon2 div span{
    font-size:20px;
    color:#fff;
}
.dropdown{
    background:black;
    color:#fff;
    border:1px solid black;
}
.dropdown>>>li{
    color:#fff;
}
</style>
