// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
// import {Header} from 'mint-ui'
// Vue.component(Header.name,Header)

Vue.config.productionTip = false

// 引入全部组件
import Mint from 'mint-ui';
Vue.use(Mint);

//轮播图
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root ="http://127.0.0.1:3000"

import moment from 'moment'

Vue.filter('dateFormat',function (dataStr,pattern="YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern);
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
