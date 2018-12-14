<template>
  <div id="app">
    <!--<mt-header fixed title="vue项目"></mt-header>-->
    <mt-header fixed title="Vue项目"></mt-header>

    <!--<img src="./assets/logo.png">-->
    <transition>
      <router-view></router-view>
    </transition>

    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-llb" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">10</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*head栏高度*/
  margin-top: 40px;
  /*底部栏位高度*/
  margin-bottom: 50px;
  /*去除动画中下方滚动条*/
  overflow-x: hidden;

}


.mint-header.is-fixed {
  /*top: 0;*/
  /*right: 0;*/
  /*left: 0;*/
  /*position: fixed;*/
  z-index: 99;
}

.v-enter{
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  /*解决动画中上下飘*/
  position: absolute;
}
.v-enter-active,
.v-leave-active{
    transition:all 0.5s ease;
}

  /*改类名，解决底部tabbar无法切换的问题,注意各个类之间的空格*/
.mui-bar-tab .mui-tab-item-llb .mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-llb {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;

  text-overflow: ellipsis;
}

</style>
