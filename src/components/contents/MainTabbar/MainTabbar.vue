<template>
  <tab-bar>
    <tab-bar-item path="/home">
        <img slot= 'item-icon' src="~/assets/img/tabbar/home.svg"/>
        <img slot= 'item-icon-active' src="~/assets/img/tabbar/home_active.svg"/> 
        <div slot= 'item-text'>首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
        <img slot= 'item-icon' src="~/assets/img/tabbar/category.svg"/>
        <img slot= 'item-icon-active' src="~/assets/img/tabbar/category_active.svg"/> 
        <div slot= 'item-text'>分类</div>
    </tab-bar-item>
    <tab-bar-item path ="/cart">
        <img slot= 'item-icon' src="~/assets/img/tabbar/cart.svg"/>
        <img slot= 'item-icon-active' src="~/assets/img/tabbar/cart_active.svg"/> 
        <div slot= 'item-text'>购物车</div>
    </tab-bar-item>
    <tab-bar-item path ="/profile">
        <img slot= 'item-icon' src="~/assets/img/tabbar/profile.svg"/>
        <img slot= 'item-icon-active' src="~/assets/img/tabbar/profile_active.svg"/> 
        <div slot= 'item-text'>我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import tabBar from "components/common/tabbar/TabBar";
import tabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabbar",
  components: {
    tabBar,
    tabBarItem
  }
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  color: #1c2631;
}
#tab-bar .tab-bar-item {
  flex: 1;
  font-size: 14px;
  text-align: center;
}
#tab-bar .tab-bar-item img {
  width: 24px;
  height: 24px;
  margin: 5px 0 2px 0;
  vertical-align: middle;
}
.active div{
  color:red;
}
</style>