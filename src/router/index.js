import Vue from 'vue'
import VueRouter from 'vue-router'


const login = () => import("@/views/login/login")
const home = () => import("@/views/home/home")
const classify = () => import("@/views/classify/classify")
const my = () => import("@/views/my/my")
const shopcar = () => import("@/views/shopcar/shopcar")


Vue.use(VueRouter)
const routes = [
    {
        path: '*',
        redirect:'/home'
    },
    {
        path: '/login',
        name: 'login',
        component:login
    },
    // 首页
    {
        path: '/home',
        name: 'home',
        component: home
    },
      {
        path: '/shopcar',
        name: 'shopcar',
        component: shopcar
    },
    {
        path: '/classify',
        name: 'classify',
        component: classify
    },
    {
        path: '/my',
        name: 'my',
        component: my
    },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router