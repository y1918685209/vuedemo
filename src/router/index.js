import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store';
Vue.use(Router)
const Home = () => import("views/home/Home")
// const FeaturePage = () => import("views/home/FeaturePage")
const Category = () => import("views/category/Category")
<<<<<<< HEAD
// const Cart = () => import("views/cart/Cart")
const Cart = () => import("views/cart/Cart1")
const Settlement = () => import("views/cart/settlement/settlement")
const Proflie = () => import("views/profile/Profile")
const Jx = () => import("views/jx/Jx")
const Search = () => import("views/search/Search")
const KeyWords = () => import("views/search/Keywords")
const Details = () => import('views/details/Details')
const Login = () => import('views/login/Login')
=======
const Cart = () => import("views/cart/Cart")
const Proflie = () => import("views/profile/Profile")
const Jx = () => import("views/jx/Jx")
const Search = () => import("views/search/search")
const KeyWords = () => import("views/search/keywords")
const Details = () => import('views/details/details')
const Login = () => import('views/login/login')
>>>>>>> 2ba4451510f6cca78672af6b7119b5e0daa39477
const routes = [
  {
    path: '',
    redirect: "/home"
  },
  {
    path: "/home",//首页
    mata: {
      title: "首页"
    },
    component: Home,
  },
  {
    path: "/category",//分类
    mata: {
<<<<<<< HEAD
      title: "分类"
=======
      title: "首页"
>>>>>>> 2ba4451510f6cca78672af6b7119b5e0daa39477
    },
    component: Category
  },
  {
<<<<<<< HEAD
    path: "/jx",// 惊喜
    mata: {
      title: "惊喜"
    },
    component: Jx,
  },
  {
=======
>>>>>>> 2ba4451510f6cca78672af6b7119b5e0daa39477
    path: "/cart",//购物车
    mata: {
      title: "购物车"
    },
    component: Cart
  },
  {
    path: "/profile",// 我的
    mata: {
      title: "我的"
    },
    component: Proflie
  },
  {
<<<<<<< HEAD
=======
    path: "/jx",// 惊喜
    mata: {
      title: "惊喜"
    },
    component: Jx,
  },
  {
>>>>>>> 2ba4451510f6cca78672af6b7119b5e0daa39477
    path: '/search',
    mata: {
      title: "搜索"
    },
    component: Search
  },
  {
    path: '/keywords',
    mata: {
      title: "关键字"
    },
    component: KeyWords
  },
  {
    path: '/details/:id',
    meta: {
      title: "详情"
    },
    component: Details,
  },
  {
    path: '/login',
    meta: {
      title: "登录"
    },
    component: Login
<<<<<<< HEAD
  },
  {
    path:'/setllement',
    meta:{
      title:"订单"
    },
    component:Settlement
=======
>>>>>>> 2ba4451510f6cca78672af6b7119b5e0daa39477
  }
]

const routers = new Router({
  routes,
  mode: 'history',//可以修改模式
})
routers.beforeEach((to, from, next) => {
<<<<<<< HEAD
  // 每次路由在执行的时候，记录一下进入页面的路由地址，后期用于判断 tabbar被重复点击
  store.state.SKnavigation = to.path
  if(to.path == from.path) return
  for (let item in store.state.TabBar) {
    console.log(item);
    store.state.TabBar[item] = false
  }
  if (to.path == '/home' || to.path == '/category' || to.path == '/cart') store.state.TabBar.is_jd_TabBar = true
=======
  // to and from are both route objects. must call `next`.
  console.log(to, from);

  for (let item in store.state.TabBar) {
    // item = false
    console.log(item);
    store.state.TabBar[item] = false
  }
  if (to.path == '/home' || to.path == '/category') store.state.TabBar.is_jd_TabBar = true
>>>>>>> 2ba4451510f6cca78672af6b7119b5e0daa39477
  else if (to.path.lastIndexOf('/jx') != -1)  store.state.TabBar.is_jx_TabBar = true
  next();
})
export default routers
