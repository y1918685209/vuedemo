<style lang="less" scoped>
#AreaCode {
  .scroll {
    position: absolute;
    top: 49px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    li {
      border-bottom: 1px solid black;
      margin-bottom: 3px;
      line-height: 36px;
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
    }
  }
}
</style>

<template>
  <!-- 国际区号页面 AreaCode -->
  <div id="AreaCode">
    <nav-bar>
      <div slot="left">
        <i class="el-icon-arrow-left" @click="$router.push('/register/0')"></i>
      </div>
      <div slot="center">选择国家或者地区</div>
    </nav-bar>
    <scroll class="scroll">
      <ul>
        <li v-for="(item) in phone_area_code" :key="item.id" @click="checkCode(item.area_code)">
          <span>{{item.country}}</span>
          <span>+{{item.area_code}}</span>
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/contents/scroll/Scroll";
//连接国际区号的 网络请求函数对象
import { get_mobile_prefix } from "network/user";
export default {
  name: "AreaCode",
  data() {
    return {
      phone_area_code: null,
    };
  },
  components: {
    NavBar,
    Scroll,
  },
  created() {
    //创建页面的时候，调取国际区号数据   执行网络请求函数(无参数传递),然后(.then)查看返回值(res)
    get_mobile_prefix().then((res) => {
      //请求得到的数据需要在页面上显示
      this.phone_area_code = res.data;
    });
  },
  methods: {
    //事件
    checkCode(val) {
      //让状态管理里面的  area_code   获取当前的选中的区号值
      this.$store.state.area_code = val;
      //跳转页面。传递区号
      this.$router.push("/register/" + val);
    },
  },
};
</script>
