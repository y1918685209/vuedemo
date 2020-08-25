<template>
  <div>
    <h1>我的</h1>
    <div v-on:click="$store.commit('ROUTERTO','/login')">去登陆</div>
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
   
  },
  //当页面离开的时候
  beforeRouteLeave(to, from, next) {
      //如果去的页面是login,则记录页面
      if (to.path == "/login") this.$store.state.loginHistory = from.path;
      next();
  }
};
</script>

<style scoped>
</style>
