<template>
  <div>
    <h1>我的</h1>
    <div v-if="$store.state.userInfo">欢迎{{$store.state.userInfo.name}}使用京东</div>
    <div v-if="!$store.state.userInfo"  v-on:click="$store.commit('ROUTERTO','/login')">去登录</div>
    <div v-else v-on:click="sigOut">退出登录</div>
  </div>
</template>
<script>
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
    if( !this.$store.state.userInfo){
      this.$store.commit('AOTU_CODE')
    }
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
    }
  }
};
</script>

<style scoped>
</style>
