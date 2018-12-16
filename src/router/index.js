import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import HomeContainer from '@/components/tabbar/HomeContainer'
import MemberContainer from '@/components/tabbar/MemberContainer'
import ShopcarContainer from '@/components/tabbar/ShopcarContainer'
import SearchContainer from '@/components/tabbar/SearchContainer'
import NewsList from '@/components/news/NewsList'
import NewsInfo from '@/components/news/NewsInfo'
import PhotoList from '@/components/photos/Photolist'
import PhotoInfo from '@/components/photos/PhotoInfo'
import GoodsList from '@/components/goods/GoodsList'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {path:"/",redirect:"/home"},
    {path:'/home',component : HomeContainer},
    {path:'/member',component : MemberContainer},
    {path:'/shopcar',component : ShopcarContainer},
    {path:'/search',component : SearchContainer},
    {path:'/home/newslist',component : NewsList},
    {path:'/home/newsinfo/:id',component : NewsInfo},
    {path:'/home/photolist',component : PhotoList},
    {path:'/home/photoinfo/:id',component : PhotoInfo},
    {path:'/home/goodslist',component : GoodsList},
  ],
  linkActiveClass:'mui-active' //覆盖默认路由高亮的类，默认的类叫做router-link-active
})
