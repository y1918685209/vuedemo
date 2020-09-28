<template>
  <div id="confirmOrder">
    <scroll class="scroll">
      <nav-bar class="navbar">
        <div slot="left">
          <i class="el-icon-arrow-left" v-on:click="$router.go(-1)"></i>
        </div>
        <div slot="center">确认订单</div>
        <div slot="right"></div>
      </nav-bar>
      <div class='address'>
        <div v-if='$store.state.ShoppingAddress == null'>
          <button @click="$store.commit('ROUTERTO','/newAddr/0')">+ 请添加地址</button>
        </div> 
        <div v-else class='selectAddr' @click="$store.commit('ROUTERTO','/allAddr')">
          <h2>{{address.takeover_name}} <span>{{ address.takeover_tel | changeTel}}</span> <i class="el-icon-arrow-right" style="float:right;margin-top:3%"></i></h2>
          <p>{{address.takeover_addr}}</p>
         
        </div>
        <div class="bjt"></div>
      </div>
      <div class="spxq">
        <div class="order_shopBar" v-for="(item,index) in shop" :key="index">
          <div class="dpm">JD {{item.shop_name}}</div>
          <ul>
            <li>
              <div class="product">
                <div class="product1"><img :src="urlPath+'/goods/'+item.img_cover" alt /></div>
                <div class="product2">{{item.goods_name}}</div>
                <div class="product3">{{item.hot_keyword}}</div>
                <div class="product4">
                  <span class="span1">{{item.money_now}}</span>
                  <span class="span2">{{item.money_old}}</span>
                  <span class="span4">×{{item.num}}</span>
                </div>
              </div>
            </li>
          </ul>
          <el-button type="text" @click="open" class="jgsm"><img class="img" src="~assets/img/confirmOrder/2.png"><span>价格说明</span></el-button>
          <div class="ps">
            <div class="ps1">
              <div>
                <span class="left">配送</span><span class="right">京东快递</span>
              </div>
              <br/>
              <div>
                <span class="left l">中小件送货时间</span><span class="right r">约3天后到达</span><br/><p>工作日、双休日与节假日均可送货</p>
              </div>
              <i class="el-icon-arrow-right"></i>
              <div class="th"><div class="wy">退换无忧</div><span>退换货可获运费赔付或免费取件</span><div class="zs">商家赠送</div></div>
              <div class="ly"><div>留言</div><input type="text" placeholder="选填，给商家留言"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="spze">
        <div class="spze1">
          <span class="left">商品总额</span>
          <span class="right zjj">￥{{totalPayment}}</span>
        </div>
        <br>
        <div>
          <span class="left">运费</span>
          <span class="right">免运费</span>
        </div>
        <br>
        <div>
          <span class="left">优惠券</span>
          <span class="right">暂无优惠券</span>
        </div>
        <br>
        <div class="spze4">
          <div>总计：<span>￥{{totalPayment}}</span></div>
        </div>
      </div>
      <div class="fp">
        <a href="">
          <span class="left">发票</span>
          <span class="right">普票(商品明细-个人) ></span>
        </a>
      </div>
      <div class="mm">
        <div><button class="button">货到付款</button></div>
        <div><button class="button1" @click="payment">确认订单</button></div>
      </div>
      <div class="logo">
          <div></div>
      </div>
    </scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/contents/scroll/Scroll";
import { create_order} from "network/order";
export default {
  name: "ConfirmOrder",
  components: {
    //组件
    NavBar,
    Scroll,
  },
  data() {
    return {
      orderData: {
        user_id: "",
        shopcarts_id: [],
      },
    };
  },
  beforeRouteLeave (to, from, next) {
    console.log(from);
    this.$store.state.configOrderHistory = from.path
    next()
  },
  methods: {
    //事件
    payment() {
      //获取要提交的数据
      this.orderData.user_id = this.$store.state.userInfo;

      this.shop.forEach((item) => {
        this.orderData.shopcarts_id.push(item.id);
      });
      if (window.confirm("是否确认提交订单")) {
        create_order(this.orderData).then((res) => {
          if (res.code != 200) {
            //失败的话 给用于一个提示。当用户点击确认的时候。跳转页面
            this.$router.push("/profile");
            return console.log("下单失败");
          }
          //提交订单成功后。把默认的配送地址取回来。放到购物车页面
          this.$store.state.ShoppingAddress = this.$store.state.userInfo.defaddr;
          this.$router.push("/payment/" + res.data.order_id);
        });
      }
    },
    open() {
      this.$alert('因可能存在系统缓存、页面更新导致价格变动异常等不确定性情况出现，商品售价以本结算页商品价格为准；如有疑问，请您立即联系销售商咨询。', '价格说明', {
        confirmButtonText: '知道了',
      });
    }
  },
  computed: {
    //计算
    address(){
      return this.$store.state.ShoppingAddress
    },
    urlPath() {
      return this.$store.state.urlPath;
    },
    totalPayment(){
      return this.$store.state.totalPayment
    },
  },
  created() {
    //创建
    //JSON.stringify()  // 把数组/对象类型的数据转换成JSON类型的字符串数据
    // JSON.parse() 方法把字符串数据转换成原来的类型
    if(!this.$store.state.userInfo){
      this.$store.commit('ROUTERTO','/home')
    }
    this.shop = JSON.parse(this.$route.params.shop);
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
  filters:{
    changeTel(val){
      return val.replace(/(\d{3})\d{4}(\d{4})/,'$1****$2')
    }
  }
};
</script>
<style lang="less">
#confirmOrder {
  .scroll {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 49px;
    overflow: hidden;
    .address{
      background:#fff;
      .selectAddr{
        font-size:12px;
        padding:10px;
        text-align: left;
        h2{
          margin-bottom:8px;
        }
      }
    }
  } 
  .navbar{
    background:#fff;  
  }
  .address{
    .bjt{
      background-image:url(~assets/img/confirmOrder/1.png);
      height:5px;
      background-size: 60px 5px;
    }
  }
  .spxq{
    .dpm{
      text-align:left;
      font-size:15px;
      span{
        font-weight:bold;
      }
    }
    .order_shopBar{
      padding:10px;
      margin:10px 0;
      border-radius:10px;
      background:#fff;
      ul{
        li{
          .product{
            margin:10px;
            .product1{
              img{
                float:left;
                width:75px;
                height:75px;
              }
            }
            .product2{
              color: #333;
              padding-left:25%;
              text-align:left;
              font-size:12px;
            }
            .product3{
              padding-left:25%;
              text-align:left;
              font-size:12px;
              color:pink;
              margin:5px 0;
            }
            .product4{
              padding-left:25%;
              text-align:left;
              .span1{
                color:red;
              }
              .span2{
                text-decoration:line-through;
                font-size:12px;
                margin-left:5px;
              }
              .span4{
                font-size:12px;
                float:right;
                line-height:17px;
              }
            }
            .product4{
              padding-left:25%;
            }
          }
        }
      }
      .jgsm{
        padding: 0;
        margin-left: 27%;
        text-align:left;
        height: 20px;
        font-size:13px;
        margin-top:0;
        color:black;
        margin-bottom:0;
        .img{
          width:15px;
          float:left;
        }
      }
      .ps{
        margin-top:10px;
        .ps1{
          padding-right:15px;
          i{
            position:absolute;
            right:0;
            top:37%;
            color:#ccc;
          }
          p{
            text-align:right;
            color:#ccc;
            font-size:12px;
          }
          .l,.r{
            color:#ccc;
          }
          .left{
            float:left;
            text-align:left;
            font-size:12px;
            width:25%;
          }
          .right{
            font-size:12px;
            width:25%;
            text-align:right;
            float:right;
          }
          .ly{
            div{
              color: #333;
              font-size: 14px;
              position:absolute;
            }
            input{
              text-align: right;
              width:100%;
              font-size:12px;
              border:0;
              outline:0;
            }
          }
          .th{
            margin: 15px 0;
            .wy{
              color: #333;
              font-size: 14px;
              line-height:18px;
              float:left;
            }
            span{
              color: #ccc;
              font-size: 14px;
            }
            .zs{
              font-size: 12px;
              color:red;
              line-height:18px;
              float:right;
            }
          }
        }
      }
    }
  }
  .spze{
    padding: 10px;
    margin: 10px 0;
    border-radius: 10px;
    background: #fff;
    div{
      margin:10px 0;
      font-size:13px;
    }
    .left{
      float:left;
      width:25%;
      text-align:left;
    }
    .right{
      width:25%;
      text-align:right;
      float:right;
      color:red;
    }
    .spze1{
      .zjj{
        color:black;
      }
    }
    .spze4{
      text-align:right;
      span{
        color:red;
      }
      div{
        border-top: 1px solid #ccc;
        padding-top: 10px;
        font-size:15px;
      }
    }
  }
  .fp{
    margin: 10px 0;
    border-radius: 10px;
    background: #fff;
    a{
      display:block;
      padding: 10px;
      color:black;
      text-decoration:none;
      font-size:15px;
      .left{
        float:left;
        text-align:left;
        width:50%;
      }
      .right{
        margin-right:-55px;
        width:50%;
        font-size:13px;
        color:#ccc;
      }
    }
  }
  .mm{
    margin: 10px 0;
    border-radius: 10px;
    background: #fff;
    div{
      .button{
        width:95%;
        border:1px solid #bbebe9;
        border-radius:20px;
        color:#fff;
        background:#bbebe9;
        height:40px;
        margin:5px 0;
      }
      .button1{
        width:95%;
        border:1px solid #3884ff;
        border-radius:20px;
        color:#fff;
        background:#3884ff;
        height:40px;
        margin:5px 0;
      }
    }
  }
  .logo{
    div{
      background-image:url(~assets/img/confirmOrder/3.png);
      background-repeat:no-repeat;
      width: 100px;
      height: 20px;
      margin: 0 auto;
      background-size: 100%;
    }
  }
}
.el-message-box__wrapper{
  .el-message-box{
    border-radius:10px;
    width:80%;
  }
}

</style>
 

