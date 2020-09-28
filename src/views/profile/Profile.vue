<template>
  <div>
    <scroll>
      <nav-bar>
        <div slot="left" v-on:click="$store.commit('BACK')">
         <i class="el-icon-arrow-left"></i>
        </div>
         <div slot="center">
            我的京东
        </div>
        <div slot="right">
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
      </nav-bar>
      <div id="profile">
          <div class="content">
            <div class="content-linear">
              <div class="content-linear1">
                <div style="display: flex;">
                  <div class="profiletx">
                    <img v-if="$store.state.userInfo" src="~assets/img/profile/2.jpg">
                    <img v-else src="~assets/img/profile/6.png">
                  </div>
                  <div class="profilemz">
                    <div>
                      <div v-if="$store.state.userInfo" class="yhm">
                        <p>{{$store.state.userInfo.name}} /<span @click='sigOut'>退出</span></p>
                      </div>
                      <div v-else class="yhm">
                        <router-link tag="span" to="/login">登录</router-link>/
                        <router-link tag="span" to="/register">注册</router-link>
                      </div>
                    </div>
                    <div class="xy">
                      <span>京享值88</span>
                      <span>小白信用66.6</span>
                    </div>
                  </div>
                  <div class="sz"><span></span></div>
                </div>
              </div>
              <div class="content-linear2">
                <div>
                  <div><span>8</span></div>
                  <div>商品收藏</div>
                </div>
                <div>
                  <div><span>8</span></div>
                  <div>店铺收藏</div>
                </div>
                <div>
                  <div><span>8</span></div>
                  <div>我的足迹</div>
                </div>
              </div>
              <div class="content-linear3">
                <div class="hy">
                    <div class="hylogo">
                      <div>
                        <img src="~assets/img/profile/5.png" width="60px;"><i></i><span>尊享会员特权</span><a>立即查看</a>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div class="content2-linear">
              <div class="content2-linear1">
                <div class="dfk"><span>待付款</span></div>
                <div class="dsh"><span>待收货</span></div>
                <div class="thsh"><span>退换/售后</span></div>
                <div class="qbdd"><span>全部订单</span></div>
              </div>
              <div class="content2-linear2">
                <div><div><div>0</div></div><span>优惠券</span></div>
                <div><div><span class="lj">立减40元</span><div>开通有礼</div></div><span>白条</span></div>
                <div><div><div>0</div></div><span>京豆</span></div>
                <div><div><div>0</div></div><span>红包</span></div>
                <div style="padding:20px 5px"><div style="margin:0;"><div><img src="~assets/img/profile/11.png" width="25px"></div></div><span>我的资产</span></div>
              </div>
              <div class="content2-linear3">
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
      </div>
    </scroll>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/contents/scroll/Scroll";
export default {
  name: "Profile",
  beforeRouteEnter(to, from, next) {
    //组件创建前调用的守卫
    next();
  },
  data() {
    return {};
  },
  created(){
    // if( !this.$store.state.userInfo){
    //   this.$store.commit('AOTU_CODE')
    // }
  },
  components:{
    NavBar,
    Scroll,
  },
  //当页面离开的时候
  beforeRouteLeave(to, from, next) {
      //如果去的页面是login,则记录页面
      if (to.path == "/login") this.$store.state.loginHistory = from.path;
      next();
  },
  methods:{
    //退出
    sigOut(){
      this.$store.state.userInfo = null
      this.$store.state.shopCart = null
      this.$store.state.shopCartLength = 0
      let path = window.location.origin + '/jd'
      localStorage.setItem(path,'')
    },
    pushRouter(path) {
      console.log(path);
      this.$router.push(path);
    }
  }
};
</script>
<style scoped>
  #profile .content .content-linear{
    background-image:url(~assets/img/profile/1.png);
    background-size:100% 100%;
  }
  .profiletx{
    width:20%;
  }
  .profiletx img{
    width: 100%;
    border-radius: 100px;
    margin:10%;
  }
  .profilemz{
    width:50%;
  }
  .profilemz div{
    margin-top:10%;
    margin-left:10%;
    text-align:left;
    color:#fff;
  }
  .profilemz .xy span{
    font-size:12px;
    background: rgba(0,0,0,.16);
    border-radius: 10px;
    margin: 0 3px;
    padding: 0 8px;
  }
  .profilemz .yhm{
    margin-left:3%;
  }
  .sz{
    width:30%;
  }
  .sz span{
    background-image:url(~assets/img/profile/3.png);
    width:40px;
    height:40px;
    background-size:20px;
    background-repeat: no-repeat;
    display:block;
    margin-left:63%;
    margin-top:30%;
  }
  .content-linear2{
    padding:0 15px;
    display:flex;
  }
  .content-linear2>div{
    width:30%;
    margin:3% 5%;
    color:#fff;
    font-size:14px;
  }
  .content-linear3 .hy{
    background-image:url(~assets/img/profile/4.png);
    background-size: cover;
    margin:0 5%;
  }
  .content-linear3 .hylogo{
    padding: 4% 0;
    text-align:left;
    line-height:18px;
    font-size:12px;
    color: #ffe678;
  }
  .content-linear3 .hylogo div img{
    float:left;
    margin-left:5%;
    margin-top:1%;
    margin-right:3%;
  }
  .content-linear3 .hylogo div{
    margin-top:-10px;
    padding:2% 0;
  }
  .content-linear3 .hylogo div i{
    width: 1px;
    height: 10px;
    margin-top:4px;
    position: absolute;
    background: #ffe678;
  }
  .content-linear3 .hylogo div span{
    margin-left:10px;
  }
  .content-linear3 .hylogo div a{
    margin-left:25%;
    border-radius: 9px;
    color: #262626;
    padding: 1px 10px;
    background-color:yellow;
  }
  .content2-linear1{
    background-color:#fff;
    margin-top:-10px;
    border-radius: 12px;
    display:flex;
    padding: 0 15px;
  }
  .content2-linear1 div{
    width:25%;
    height:100px;
    background-position:30px 25px;
    background-size:30% 30%;
  }
  .content2-linear1 div span{
    margin-top:70%;
    font-size:12px;
    display:block;
  }
  .content2-linear1 .dfk{
    background-image:url(~assets/img/profile/7.png);
    background-repeat:no-repeat;
    
  }
  .content2-linear1 .dsh{
    background-image:url(~assets/img/profile/8.png);
    background-repeat:no-repeat;
  }
  .content2-linear1 .thsh{
    background-image:url(~assets/img/profile/9.png);
    background-repeat:no-repeat;
    
  }
  .content2-linear1 .qbdd{
    background-image:url(~assets/img/profile/10.png);
    background-repeat:no-repeat;
  }
  .content2-linear2{
    padding: 0 15px;
    display:flex;
    margin:15px 0;
    border-radius: 12px;
    background-color:#fff;
  }
  .content2-linear2>div{
    width:25%;
    padding: 20px 5px;
    font-size:14px;
  }
  .content2-linear2>div>div{
    margin:10% 0;
    font-weight:bold;
  }
  .content2-linear2>div>div .lj{
    position: absolute;
    margin-top:-20px;
    margin-left:-5px;
    font-size:10px;
    background: -webkit-gradient(linear,left top,right top,from(#e93b3d),to(#ff9574));
    border-radius: 8px;
    border-bottom-left-radius: 0;
    color:#fff;
    padding:2px 5px;
  }
  .content2-linear3{

  }
</style>
