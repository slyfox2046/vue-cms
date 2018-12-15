// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import './lib/mui/css/mui.css'
// import './lib/mui/css/icons-extra.css'

import 'vue-awesome-mui/mui/dist/css/mui.css'
import "vue-awesome-mui/mui/examples/hello-mui/css/icons-extra.css";
// import {Header} from 'mint-ui'
// Vue.component(Header.name,Header)

Vue.config.productionTip = false

// 引入全部组件
import Mint from 'mint-ui';
Vue.use(Mint);

//轮播图
// import { Swipe, SwipeItem ,Button,Lazyload} from 'mint-ui';
//
// Vue.use(Lazyload);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);

import MintUI from "mint-ui"
Vue.use(MintUI)
import "mint-ui/lib/style.css"

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root ="http://127.0.0.1:3000"

import Mui from 'vue-awesome-mui'
Vue.use(Mui)

import moment from 'moment'

//安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

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
