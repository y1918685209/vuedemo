<template>
    <div class="Login">
      <div class="header">
          <span @click='$router.go(-1)'><img src="../../assets/img/1/左尖括号.png" alt=""></span>
          <span>京东登录注册</span>
      </div>
      <div v-show="show1" id="home1">
        <div>
          <div class="input-content">
            <el-dropdown class="phone">
              <span class="el-dropdown-link">
                +86<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>圣诞岛</el-dropdown-item>
                <el-dropdown-item>西伯利亚</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <input id="username" placeholder="请输入手机号" type="text">
          </div>
          <div class="input-content2">
            <input id="pwd" placeholder="请输入收到的验证码" type="text">
            <button>获取验证码</button>
          </div>
          <a href="#" class="btn">
            登录
          </a>
          <a href="#" class="btn2">
            一键登录
          </a>
          <div class="btn3">
            <span class="left" @click="hh">
              账号密码登录
            </span>
            <a href="#" class="right">  
              手机快速注册
            </a>
          </div>
          <div class="quick-login">
              <h4>其他登录方式</h4>
              <p class="way">
                <a href="#" class="way1">
                  QQ
                </a>
                <a href="#" class="way2">
                  微信
                </a>
              </p>
          </div>
          <p class="baomi">
            <span>未注册的手机号验证后将自动创建京东账号,</span>
            登录即代表您已同意
            <a href="#">京东隐私政策</a>
          </p>
        </div>
      </div>
      <div v-show="show2" id="home2">
        <div>
          <div class="input-content">
            <input id="username" placeholder="用户名/邮箱/手机号" type="text">
          </div>
          <div class="input-content2">
            <input id="pwd" placeholder="请输入密码" type="text">
            <button>忘记密码</button>
          </div>
          <a href="#" class="btn">
            登录
          </a>
          <a href="#" class="btn2">
            一键登录
          </a>
          <div class="btn3">
            <span class="left" @click="hh2">
              短信验证码登录
            </span>
            <a href="#" class="right">  
              手机快速注册
            </a>
          </div>
          <div class="quick-login">
              <h4>其他登录方式</h4>
              <p class="way">
                <a href="#" class="way1">
                  QQ
                </a>
                <a href="#" class="way2">
                  微信
                </a>
              </p>
          </div>
          <p class="baomi">
            登录即代表您已同意
            <a href="#">京东隐私政策</a>
          </p>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    name: "Login",
    data() {
      return {
        show1:true,
        show2:false
      }
    },
    methods:{
      hh(){
       this.show1 =  false
       this.show2 = true
      },
      hh2(){
        this.show1 =  true
        this.show2 = false
      }
    }
  }
</script>

<style scoped>
.Login{
  padding:0 7%;
}
.header{
    height: 44px;
    line-height: 44px;
    background: #fff;
    font-size: 17px;
    z-index: 999;
}
.header span img{
  float:left;
  margin-top:14px;
}
.input-content{
  margin-top:5%;
  padding:5% 0;
  border-bottom: .01rem solid #efefef;
}
.input-content .phone{
    position: absolute;
    left: 30px;
    line-height:25px;
}
.input-content #username{
  width:100%;
  border:0;
  font-size:15px;
  height:100%;
  outline: none;
}
#home1 .input-content #username{
    padding-left:20%;
    width:80%;
}
.input-content2{
  padding:10% 0;
  border-bottom: .01rem solid #efefef;
  margin-bottom:5%;
}
.input-content2 button{
  border: none;
  border-left: 1px solid #ccc;
  background: #fff;
  font-size:15px;
  border-radius: 0;
  color: #848689;
  padding-left:5%;
  float:right;
  outline: none;
}
.input-content2 #pwd{
  width:50%;
  float:left;
  border:0;
  font-size:15px;
  height:100%;
  outline: none;
}
.input-content2 span{
  float:right
}
.btn{
  width:100%;
  background-color:#ffbcb3;
  display:block;
  height:3rem;
  line-height:3rem;
  color:#fff;
  border-radius: 25rem;
  text-decoration:none;
}
.btn2{
  width:100%;
  border: 2px solid #ffbcb3;
  display:block;
  height:3rem;
  border-radius: 25rem;
  line-height:3rem;
  color:#ffbcb3;
  text-decoration:none;
  margin-top:1rem;
}
.btn3{
  margin-top:5%;
}
.btn3 .left{
  color: rgba(0,0,0,.4);
  font-size:14px;
  width:30%;
  float:left;
}
.btn3 .right{
  color: rgba(0,0,0,.4);
  text-decoration:none;
  float:right;
  width:30%;
  font-size:14px;
}
.quick-login{
  margin-top:40%;
  color: rgba(0,0,0,.2);
  border-top: 1px solid rgba(0,0,0,.1);
}
.quick-login h4{
  margin: -.5rem auto 0;
  width:50%;
  background: #fff;
  font-size:12px;
}
.quick-login .way{
  text-align:center;
  margin-top:10%;
  margin-bottom:3%;
}
.quick-login .way a{
    color: rgba(0,0,0,.4);
    background-size: 100% auto;
    display: inline-block;
    padding-top: 18%;
    width:15%;
    text-decoration:none;
    margin:0 5%;
    background-repeat: no-repeat;
}
.quick-login .way .way1{
  background-image:url("../../assets/img/1/qq.png");
}
.quick-login .way .way2{
  background-image:url("../../assets/img/1/wx.png");
}
.baomi{
  text-align: center;
  font-size: .13rem;
  color: rgba(0,0,0,.3);
  margin-top: .15rem;
}
.baomi a{
  text-decoration:none;
}
</style>
