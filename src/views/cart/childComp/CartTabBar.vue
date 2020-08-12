<template>
<<<<<<< HEAD
  <div id="CartTabBar">
    <div class="select-money">
      <label for="allCheck" v-on:click="checkAll('all')">
        <input type="checkbox" id='allCheck' />全选
        </label> 
      <div class="allMoney">合计:{{totalPayment | changePrice("￥")}}</div>
    </div>
    <div class="btn">
      <router-link tag="button" to="settlement" class="settlement">
        <span class="settlement">去结算({{totalNum}})</span>
      </router-link>
=======
  <div id="DetailsTabBar">
    <tab-bar class='bar'>
        <tab-bar-item>
            <img slot="item-icon" src="" />
            <div slot="item-text">客服</div>
        </tab-bar-item>
        <tab-bar-item>
            <img slot="item-icon" src="" />
            <div slot="item-text">店铺</div>
        </tab-bar-item>
        <tab-bar-item>
            <img slot="item-icon" src="" />
            <div slot="item-text">购物车</div>
        </tab-bar-item>
    </tab-bar>
    <div class='btn'>
      <router-link tag='button' to='payload' class='payload'>
        <span >立即支付</span>
      </router-link >
>>>>>>> 2ba4451510f6cca78672af6b7119b5e0daa39477
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
export default {
  name: "DetailsTabBar",
  computed: {
    totalPayment(){
      return this.$store.state.totalPayment
    },
    totalNum(){
      return this.$store.state.totalNum
    }
  },
  methods: {
    checkAll(data){
      // console.log("被调用");
      this.$emit('check_all',data)
    }
  },
  filters: {
    changePrice(val, str = "$") {
      return str + Number(val).toFixed(2);
    },
=======
import TabBar  from 'components/common/tabbar/TabBar'
import TabBarItem  from 'components/common/tabbar/TabBarItem'
export default {
  name: "DetailsTabBar",
  data() {
    return {};
  },
  components: {
    //组件
    TabBar,
    TabBarItem
  },
  computed: {
    //计算
  },
  created() {
    //创建
  },
  activated() {
    //激活
  },
  deactivated() {
    //未激活
  },
  mounted() {
    //渲染
  },
  methods: {
    //事件
  },
  watch: {
    //监听
>>>>>>> 2ba4451510f6cca78672af6b7119b5e0daa39477
  },
};
</script>
<style lang='less' scoped>
<<<<<<< HEAD
#CartTabBar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  height: 49px;
  background-color: #fff;
  box-shadow: 0 -1px 1 #dedede;
  display: flex;
  align-items: center;
  div.select-money {
    width: 70vw;
    display: flex;
    padding:0 15px;
    input{
      width:16px;
      height:16px;
      margin-right:5px;
    }
    .allMoney{
      margin-left:20px;
    }
  }
  div.btn {
    max-width: 30vw;
    min-width: 30vw;
    display: flex;
    button {
      flex: 1;
      margin: 0 3px;
      height: 40px;
      border-radius: 20px;
      font-size: 14px;
      padding: 0 13px;
      color: #fff;
      background: red;
      outline: none;
      border: none;
      span {
        display: block;
        min-width: 14px;
        overflow: hidden;
        height: 14px;
      }
    }
    button.settlement {
      background: red;
      color: #fff;
    }
  }
=======
#DetailsTabBar{
    position:fixed;
    left:0;
    right:0;
    bottom:0;
    height:49px;
    background-color:#fff;
    box-shadow: 0 -1px 1 #dedede;
    display: flex;
    div.bar{
        position:static;
        min-width: 70vw;
        display: flex;
    }
    div.btn{
        max-width:30vw;
        min-width: 30vw;
        display: flex;
        button{
            flex:1;
            margin:0 3px;
            height:40px;
            border-radius:20px;
            font-size:14px;
            padding:0 13px;
            color:#fff;
            background:red;
            outline: none;
            border:none;
            span{
                display: block;
                min-width: 14px;
                overflow: hidden;
                height:14px;
            }
        }
        button.payload{
            background:yellow;
            color:#000;
        }
    }
>>>>>>> 2ba4451510f6cca78672af6b7119b5e0daa39477
}
</style>
