<template>
  <div id="upaddr">
    <nav-bar class="sC-nav-bar">
      <div slot="left" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div slot="center">收货地址</div>
    </nav-bar>
    <div class="bigBox">
      <div class="box" v-for="i in allAddress" :key="i.id">
        <div class="leftBox" @click="updataDef(i)">
          <span class="radioBox">
            <el-radio v-model="radio" :label="i.default"></el-radio>
          </span>
          <div>
            <div class="leftBox1">
              <div class="leftBox11" >
                <span>{{i.takeover_name}}</span>&nbsp;
                <span>{{i.takeover_tel | hiddenPhone}}</span>
              </div>
              <span class="leftBox12">{{i.takeover_label}}</span>
              <span>{{i.takeover_addr}}</span>
            </div>
          </div>
        </div>
        <div class="rightBox" @click="$store.commit('ROUTERTO','/newAddr/' + i.id)">编辑</div>
      </div>

    </div>
    <div class="tabbar">
      <el-button type="danger" round @click="$store.commit('ROUTERTO','/newAddr/0')">新增收货地址</el-button>
    </div>
  </div>
</template>

<script>
import navBar from "components/common/navbar/NavBar";
//获取所有的收货地址
import { get_user_address } from "network/address";
import { autoLand } from "network/user";

import { SET_USERINFO } from "store/mutation-types";
export default {
  name: "allAddr",
  created() {
    //先请求下用户 ， 后期删除
    if (!this.$store.state.userInfo) {
      let path = window.location.origin + "/jd";
      let autocode = window.localStorage.getItem(path);
      autoLand({
        autocode: autocode,
      }).then((res) => {
        console.log(res);
        if (res.code != 200) return;
        this.$store.commit(SET_USERINFO, res);
      });
    }
    //延迟请求收货地址， 后期去掉定时器
    setTimeout(() => {
      get_user_address({
        user_id: this.$store.state.userInfo.id,
      }).then((res) => {
        console.log(res);
        this.allAddress = res.data;
      });
    }, 500);
  },
  data() {
    return {
      allAddress: null,
      radio: "1",
    };
  },
  watch: {},
  components: { navBar },
  methods: {
    updataDef(val) {
      console.log(val);
      this.$store.state.ShoppingAddress = val;
      this.$router.go(-1)      
    },
  },
  computed: {
    userId() {
      return this.$store.state.userInfo.id;
    },
  },
  filters: {
    hiddenPhone(val) {
      let reg = /^(\d{3})\d{4}(\d{4})$/;
      return val.replace(reg, "$1****$2");
    },
  },
};
</script>
<style lang='less'>
.navbar{
  background:#fff;
}
.bigBox {
  background-color: #fff;
  .box {
    border-top: 1px solid rgba(238, 238, 238, 0.589);
    display: flex;
    line-height: 44px;
    padding: 10px;
    .leftBox {
      text-align: left;
      flex: 10;
      display: flex;
      .radioBox {
        width: 30px;
        margin-top:12px;
        overflow: hidden;
        .el-radio__label{
          margin-left: 10px;
        }
      }
      p {
        margin: 0;
        line-height: 22px;
      }
      .leftBox1{
        font-size:12px;
        .leftBox11{
          height:20px;font-size:15px;font-weight:bold;margin-bottom: 5px;
        }
        .leftBox12{
          color: #4b9bfb;padding:0 2px;border-radius:3px;border:1px solid #4b9bfb;margin-right:10px;
        }
      }
      
    }
    .rightBox {
      flex: 1;
      color: rgb(224, 15, 15);
      font-size:13px;
      margin-top:12px;
    }
  }
}
.tabbar {
  position: fixed;
  width: 100%;
  bottom: 1px;
  .el-button {
    width: 94%;
    background-image: linear-gradient(135deg, #f2140c, #f2270c 70%, #f24d0c);
    height:40px;
  }
}
</style>
