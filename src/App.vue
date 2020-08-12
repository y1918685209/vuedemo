<template>
  <div id="app">
    <!-- 
      缓存中会存有数据记录，所以在使用过的时候，会出现数据不进行替换。 
      正常使用中，如果不使用keep-alive,组件在离开的时候会被销毁
    -->
<<<<<<< HEAD
    <keep-alive :exclude="$store.state.keepExclude">
      <router-view />
    </keep-alive>
    <jd-main-tab-bar v-if="is_jd_tabbar"></jd-main-tab-bar>
    <jx-main-tab-bar v-if="is_jx_tabbar"></jx-main-tab-bar>
=======
    <keep-alive :exclude="$store.state.keepExclude" :include="$store.state.keepInclude">
      <router-view />
    </keep-alive>
    <jd-main-tab-bar v-if="$store.state.TabBar.is_jd_TabBar"></jd-main-tab-bar>
    <jx-main-tab-bar v-if="$store.state.TabBar.is_jx_TabBar"></jx-main-tab-bar>
>>>>>>> 2ba4451510f6cca78672af6b7119b5e0daa39477
  </div>
</template>

<script>
import JdMainTabBar from "components/contents/MainTabbar/JdMainTabbar";
import JxMainTabBar from "components/contents/MainTabbar/JxMainTabbar";
<<<<<<< HEAD
import { requestIp } from "network/request";
export default {
  name: "app",
  components: {
    JdMainTabBar,
    JxMainTabBar,
  },
  created() {
    console.log(this.user);
    requestIp().then((res) => { //把地址获取拿到了app页面，因为其他页面加载也都是加载到app页面。
      //如果没有用户登录，则配送地址为获取的地址
      if (!this.user) {
        this.$store.state.ShoppingAddress = eval(
          "(" + res.slice(res.indexOf("=") + 1, res.length - 1) + ")"
        ).cname;
      }
      //默认城市为获取的地址
      this.$store.state.city = eval(
          "(" + res.slice(res.indexOf("=") + 1, res.length - 1) + ")"
        ).cname;
    });
  },
  computed: {
    //计算
    is_jd_tabbar() {
      return this.$store.state.TabBar.is_jd_TabBar;
    },
    is_jx_tabbar() {
      return this.$store.state.TabBar.is_jx_TabBar;
    },
    userInfo(){
      return this.$store.state.userInfo
    },
    user() {
      return ( this.userInfo != "" &&this.userInfo != null && this.userInfo != undefined );
    },
  },
  watch: {
    is_jd_tabbar(newVal, oldVal) {
      console.log(newVal, oldVal);
    },
  },
=======
export default {
  name: "app",
  data() {
    return {
    };
  },
  components: {
    JdMainTabBar,
    JxMainTabBar
  },
  mounted() {
  },
  created(){
    console.log(this.$store.state.userInfo);
  }
>>>>>>> 2ba4451510f6cca78672af6b7119b5e0daa39477
};
</script>

<style>
@import "assets/css/base.css";
<<<<<<< HEAD
#app {
  height: 100vh;
=======
#app{
  height:100vh;
>>>>>>> 2ba4451510f6cca78672af6b7119b5e0daa39477
}
</style>
