import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
console.log(store)
Vue.use(ElementUI);

//定义一个`全局`可以使用的$bus总线   ---->需要通过原型为Vue添加一个总线属性
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false
=======

Vue.config.productionTip = false

>>>>>>> 5105c642baebfafca0f869a4c6b568e420ed3ae6
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
<<<<<<< HEAD


=======
>>>>>>> 5105c642baebfafca0f869a4c6b568e420ed3ae6
