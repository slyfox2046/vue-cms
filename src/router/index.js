import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import HomeContainer from '@/components/tabbar/HomeContainer'
import MemberContainer from '@/components/tabbar/MemberContainer'
import ShopcarContainer from '@/components/tabbar/ShopcarContainer'
import SearchContainer from '@/components/tabbar/SearchContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {path:'/home',component : HomeContainer},
    {path:'/member',component : MemberContainer},
    {path:'/shopcar',component : ShopcarContainer},
    {path:'/search',component : SearchContainer},
  ],
  linkActiveClass:'mui-active' //覆盖默认路由高亮的类，默认的类叫做router-link-active
})
