<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/home/newslist">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/home/photolist">
          <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/home/goodslist">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
        <span class="mui-icon mui-icon-location"></span>
        <div class="mui-media-body">留言反馈</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
        <span class="mui-icon mui-icon-search"></span>
        <div class="mui-media-body">视频专区</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
        <span class="mui-icon mui-icon-phone"></span>
        <div class="mui-media-body">联系我们</div>
      </a></li>

    </ul>


  </div>
</template>

<script>
  import {Toast} from 'mint-ui'

  export default {
    name: "HomeContainer",
    data() {
      return {
        lunbotuList: []

      }
    },
    created() {
      this.getLunbotu();
    },
    methods: {
      getLunbotu() {
        this.$http.get("lunbo").then(result => {
          if (result.body.status === 0) {
            this.lunbotuList = result.body.message
            console.log(this.lunbotuList)

          } else {
            Toast("加载轮播图失败");

          }
        })

      }

    }
  }
</script>

<style lang="scss" scoped>

  .mint-swipe {
    height: 200px;
  }

  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }

    &:nth-child(2) {
      background-color: blue;
    }

    &:nth-child(3) {
      background-color: cyan;
    }

    img {
      height: 100%;
      width: 100%;
    }

  }

  .mui-grid-view.mui-grid-9 {
    background-color: white;
    board: none;

    .mui-media-body {
      font-size: 13px;
      color: #007aff;
    }

  }

  .mui-grid-view.mui-grid-9 .mui-media {
    color: red;
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: none;

  }

</style>
