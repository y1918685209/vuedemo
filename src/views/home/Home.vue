<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="left" v-on:click="$store.commit('ROUTERTO', '/category')">
        <img src="../../assets/img/1/分类.png" alt="" />
      </div>
      <div slot="center">
        <img
          src="~assets/img/1/logo.png"
          style="
            position: absolute;
            z-index: 10;
            margin-top: 11px;
            margin-left: 10px;
          "
        />
        <img
          src="~assets/img/1/ss.png"
          style="
            position: absolute;
            z-index: 10;
            margin-top: 13px;
            margin-left: 12%;
          "
        />
        <el-input
          class="textarea"
          v-model="input"
          placeholder="劳力士👑"
          v-on:focus="routerTo('/keywords')"
          >ss</el-input
        >
      </div>
      <div slot="right">
        <!-- 登录前 -->
        <span v-if="!$store.state.userInfo" @click="routerTo('/login')">
          登录
        </span>
        <!-- 登录后 -->
        <span v-else class="kk" @click="routerTo('/profile')"> </span>
      </div>
    </nav-bar>
    <div class="bjys"></div>
    <scroll
      class="homeContent"
      :probeType="3"
      @parentScroll="HomeScroll"
      ref="homeScrollCom"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <!-- 轮播图 -->
      <home-rotation :cbanners="banners"></home-rotation>
      <!-- 功能视图 -->
      <home-feature
        :cfeature="feature"
        @cfeatureAll="routerTo('home/feature')"
      ></home-feature>
      <div class="tabTitle">
        <div class="img1">
          <img src="~assets/img/1/xr.png" /><img src="~assets/img/1/xr2.png" />
        </div>
      </div>
      <div class="tabContent">
        <div><img src="~assets/img/1/wntj.png" alt=""></div>
        <goods-list
          :cgoods="showGoodsList"
          :cpath="path"
          :cisDirection="!parentDirection"
          :bus="bus"
        ></goods-list>
      </div>
    </scroll>
    <a class="toTop" @click="toTop" v-if="isShowBackTop"></a>
  </div>
</template>

<script>
//引入公共组件
import NavBar from "components/common/navbar/NavBar";
//引入公共组件中跟项目....
import Scroll from "components/contents/scroll/Scroll";
import GoodsList from "components/contents/goods/GoodsList";
// import GoodsList1 from "components/contents/goods/GoodsList1";
//引入当前组件的子组件
import HomeRotation from "./childComp/HomeRotation";
import HomeFeature from "./childComp/HomeFeature";
// import {getHomeBanner} from "network/home"
import { debounce } from "common/utils";
//引入其他文件
import { ROUTERTO, SET_USERINFO } from "store/mutation-types";
//引入网络请求模块部分组件/方法
import { getHomeBanner, getFeature } from "network/home";
//取商品数据
import { getGoods } from "network/goods";
import { autoLand } from "network/user";
export default {
  name: "Home",
  data() {
    return {
      path: "http://106.12.85.17:8090/public/image",
      banners: null,
      feature: [],
      input: "",
      num: 500,
      isShowBackTop: false,
      //接收商品的obj
      goods: {
        recommend: {
          page: 0,
          list: [],
        },
        news: {
          page: 10,
          list: [],
        },
      },
      tabCurrentType: "recommend", //当前被选中tab按钮的类型
      parentDirection: true, // goods展示的时候是否切换横向/纵向展示
      isLoadmore: true, //是否加载更多
      bus: "homeImageLoad",
      saveY: 0, //保存滚动条y的值
      postData: {
        like: "", //模糊查询
        order: {
          // c2_id: "UtoD",
          // money_now: "DtoU",
        },
        minMoney: 0,
        maxMoney: 0,
        exact: {
          //精确查找
        },
      },
    };
  },
  components: {
    NavBar,
    Scroll,
    GoodsList,
    HomeRotation,
    HomeFeature,
  },
  created() {
    //vue实例在创建时的钩子函数
    //页面在创建的时候，我们需要请求数据
    this.getHomeBanner();
    //获取功能视图数据
    this.getFeature(1);
    this.getGoodsMax("recommend");
    this.getGoodsMax("news");
  },
  activated() {
    //在组件激活的时候，调整滚动条的位置。
    this.$refs.homeScrollCom.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.homeScrollCom.scrollTo1(0, this.saveY, 0);
    this.$refs.homeScrollCom.refreshScroll();
    if (!this.$store.state.userInfo) {
      this.auto_code();
    }
  },
  deactivated() {
    //在组件离开的时候，记录滚动条的位置
    this.saveY = this.$refs.homeScrollCom.scroll.y;
    // console.log(this.saveY);
  },
  computed: {
    //显示的goods是哪一个
    showGoodsList() {
      return this.goods[this.tabCurrentType].list;
    },
  },
  methods: {
    //取banner的数据
    getHomeBanner() {
      getHomeBanner().then((res) => {
        this.banners = res.data;
      });
    },
    //定义功能视图的数据
    getFeature() {
      getFeature().then((res) => {
        console.log(res);
        //if (res.code != 200) return console.log("getFeature没有请求到数据");
        let arr = res.data;
        for (let i = 0; i < arr.length / 10; i++) {
          this.feature.push([]);
          arr.forEach((item, index) => {
            parseInt(index / 10) == i ? this.feature[i].push(item) : "";
          });
        }
      });
    },
    //获取滚动条滚动的值
    HomeScroll(position) {
      // console.log(position);
      this.isShowBackTop = -position.y > 1000;
    },
    //回到顶部
    toTop() {
      this.$refs.homeScrollCom.scrollTo1(0, 0, 300);
    },
    //取出home页现实的goods数据
    getGoodsMax(type) {
      // let page = this.goods[type].page + 1;
      let data = {
        page: this.goods[type].page + 1,
        pagesize: 10,
      };
      getGoods(data).then((res) => {
        this.goods[type].page += 1;
        this.goods[type].list.push(...res.data);
        this.$refs.homeScrollCom.finishpullup();
        this.isLoadmore = true; //获取到一次数据后isLoadmore 才变为true，才能进行下一次请求
      });
    },
    //加载更多数据
    loadMore() {
      if (!this.isLoadmore) return; //如果this.isLoadmore 则代表上一次请求没完成。不能下一次请求
      this.isLoadmore = false;
      this.getGoodsMax(this.tabCurrentType);
    },
    //点击切换
    tabClick(type) {
      this.tabCurrentType = type;
    },
    //跳转category页面
    // toCategory() {
    //   this.$router.push("/category");
    //   this.$router.commit(ROUTERTO);
    // },
    //跳转关键字页面
    Login() {
      this.$router.push("/login");
    },
    //路由跳转
    routerTo(path) {
      this.$store.commit(ROUTERTO, path);
    },
    //获取购物车数据，调用vuex中actions的数据
    getShopCart(data) {
      if (data != "" && data != null && data != undefined) {
        this.$store.dispatch("getShopCart", data);
      }
    },
    //默认进入有人吗的时候，都是从首页进入
    auto_code() {
      let path = window.location.origin + "/jd";
      //先去本地存储取值
      let data = window.localStorage.getItem(path);
      console.log(data);
      //
      if (data != null) {
        let autocode = JSON.parse(data).autocode;
        autoLand({
          autocode: autocode,
        }).then((res) => {
          console.log(res);
          if (res.code != 200) return;
          this.$store.commit(SET_USERINFO, res); //每次登录更改登录
          this.getShopCart(res.data.user.id);
        });
      }
    },
  },
  mounted() {
    // 使用防抖方法，放置图片刷新被多次循环调用，在指定事件内，如果没有图片加载完成，我们在刷新scroll高度
    const refresh = debounce(this.$refs.homeScrollCom.refreshScroll, 50);
    this.$bus.$on(this.bus, () => {
      //当图片加载完成 在GoodsListItem中通过$bus总线 执行 当前方法 goodsImageLoad ,
      //然后对BScroll  进行重新计算高度
      // this.$refs.homeScrollCom.refresh(); // this.$refs.homeScrollCom   =>> 没找到 refresh方法()
      refresh();
    });
  },
  //当离开页面的时候
  beforeRouteLeave(to, from, next) {
    //当页面离开的时候，如果访问的路由时/area_code 则记录当前路由地址
    if (to.path == "/login") this.$store.state.loginHistory = from.path;
    next();
  },
  filters: {
    changePrice: (data, str) => {
      return str + data;
    },
  },
};
</script>
<style lang="less">
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
  .home-nav-bar {
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }
  .homeContent {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
    /* height:calc(100vh - 93px); */
    overflow: hidden;
  }
  .toTop {
    position: absolute;
    bottom: 100px;
    right: 5px;
    /* background-color: red; */
    background-image: url(~assets/img/common/top.png);
    display: block;
    width: 40px;
    height: 40px;
    background-size: 100%;
  }
  .tabTitle {
    width: 100%;
    display: flex;
    margin: 5px 0;
  }
  .tabTitle .img1 {
    padding: 0 10px;
  }
  .tabTitle img {
    width: 50%;
  }
  .tabContent {
    display: flex;
    flex-wrap: wrap;
    margin:10px;
  }
  .tabContent img {
    width: 100%;
  }
  .GoodsListItem.column{
    background: #fff;
    margin:1%;
    border:0;
  }
  .GoodsListItem.column a{
    text-decoration:none;
  }
  .GoodsListItem.column span {
    color: black;
  }
  .home-nav-bar .left img {
    width: 40%;
    margin-top: 25%;
  }
  .textarea {
    width: 100%;
  }
  .textarea .el-input__inner {
    border-radius: 20px;
    height: 30px;
    background: #f7f7f7;
    padding-left: 75px;
    width: 100%;
    padding-top: 3px;
  }
  .kk {
    background-image: url(~assets/img/1/user.png);
    background-repeat: no-repeat;
    background-size: 40%;
    width: 100%;
    height: 50px;
    display: block;
    margin-left: 15px;
    margin-top: 9px;
  }
  .bjys {
    background-image: linear-gradient(0deg, #f1503b, #c82519 50%);
    width: 100%;
    height: 150px;
    border-bottom-left-radius: 10%;
    border-bottom-right-radius: 10%;
  }
}
</style>
