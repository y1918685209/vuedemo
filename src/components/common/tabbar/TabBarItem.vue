<template>
<<<<<<< HEAD
  <div class="tab-bar-item" @click="itemClick" :style="activeStyle">
      <!-- 用来插入图片 -->
      <div v-if="!isActive">
        <slot name="item-icon"></slot>
      </div>
      <!-- 用来插入选中后的图片 -->
      <div v-else>
        <slot name="item-icon-active"></slot>
      </div>

      <!-- 文本 -->
      <div>
        <slot name="item-text"></slot>
      </div>
    </div>
=======
  <div class="tab-bar-item" @click="itemClick()">
    <div v-if="!isActive">
      <slot name="item-icon">用来插入图片</slot>
    </div>
    <div v-else>
      <slot name="item-icon-active">用来插入选中图片</slot>
    </div>
    <div :class="{active:isActive}">
      <slot name="item-text">用来插入名字</slot>
    </div>
  </div>
>>>>>>> 5105c642baebfafca0f869a4c6b568e420ed3ae6
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
<<<<<<< HEAD
    //接收父组件传递的path值
    path: {
      type: String
    },
    cstyle: {
      type: Object,
      default() {
        return {
          bgcolor: "transparent",
          activeBG: "transparent",
          color: "black",
          activeTxt: "red"
        };
      }
    }
  },
  data() {
    return {
      //isActive:false //false 显示黑色图  true 显示粉色图
      // activeStyle:{color:'black'}
    };
  },
  mounted() {
  },
  computed: {
    //通过计算属性来让tabbar的active效果改变
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle(){
      return this.isActive ? {color:this.cstyle.activeTxt,background:this.cstyle.activeBG}: {color:this.cstyle.color,background:this.cstyle.bgcolor}
=======
    //接收父组件传递
    path: {
      type: String
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
>>>>>>> 5105c642baebfafca0f869a4c6b568e420ed3ae6
    }
  },
  methods: {
    itemClick() {
<<<<<<< HEAD
      //路由跳转
      this.$router.push(this.path); //category
      console.log(this.$route.path);
    }
  }
};
</script>


<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>
=======
      this.$router.replace(this.path);
    }
  }
};
</script>
>>>>>>> 5105c642baebfafca0f869a4c6b568e420ed3ae6
