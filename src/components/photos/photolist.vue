<template>
  <div>
    <!--去除mui-fullscreen全屏样式-->
    <!--<div id="slider" class="mui-slider mui-fullscreen">-->
    <div id="slider" class="mui-slider">
      <!--顶部滑动条区域-->
      <div id="sliderSegmentedControl"
           class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a :class="['mui-control-item',item.id==0 ? 'mui-active':'']"  v-for="item in cates" :key="item.id"
          @click="getPhotoListByCateId(item.id)"
          >
            {{item.title}}
          </a>
        </div>
      </div>

      <!--图片列表区域-->
      <ul class="photo-list">
        <li v-for="item in list">
          <img v-lazy="item.message.img_url">
          <div class="info">
            <h1 class="info-title">{{item.message.title}}</h1>
            <div class="info-body">{{item.message.content}}</div>
          </div>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  //1.导入mui的js文件
  // import mui from '../../lib/mui/js/mui.min.js'
  // import Mui from 'vue-awesome-mui'
  // Vue.use(Mui)
  // import mui from 'mui'
  //2. 初始化滑动控件
  // this.$mui('.mui-scroll-wrapper').scroll({
  //   deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  // });
  export default {
    name: "photolists",
    data(){
      return {
        cates:[], //所有分类的列表数组
        list:[]    //图片列表的数组
      }
    },
    created(){
      this.getAllCategory();
      this.getPhotoListByCateId(0);
    },
    methods:{
      getAllCategory(){
        // this.$http.get("api/getimgcategory").then(result=>{
        //   if(result.body.status ===0){
        //     //手动拼接出处一个完整的分类列表
        //     result.body.message.unshift({title:"全部",id:0});
        //     this.cates = result.body.message;
        //   }
        // })
        this.cates = [
          {title:"全部",id:0},
          {title:"家居",id:1},
          {title:"摄影",id:2},
          {title:"明星",id:3},
          {title:"科技",id:4},
          {title:"汽车",id:5},
        ]
      },
      getPhotoListByCateId(cateId) {
        //  根据分类id，获取图片列表
        //   this.$http.get("api/getimages"+cateId).then(result=>{
        //     if(result.body.status ===0){
        //       this.list = result.body.message;
        //     }
        //   })

        console.log(cateId);
        this.list = [];
        this.$http.get("getnewsinfo").then(result => {
          this.list = result.body

        })
      }
    },
    mounted() {
      //当组件中的dom结构被渲染好并放到页面中后，会执行这个钩子函数
      //如果要操作元素了，最好在mounted里面，因为这里时候的dom元素是最新的
      mui('.mui-scroll-wrapper').scroll({
          deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    }
  }
</script>

<style lang="scss" scoped>
  * {
    touch-action: pan-y;
  }

  .photo-list {
    list-style: none;
    margin: 0;
    padding:10px;
    padding-bottom: 0px;

    li {
      background-color: #ccc;
      text-align: center;
      margin-bottom: 10px;
      box-shadow: 0 0 9px #999;
      position: relative;

      img{
        width:100%;
        vertical-align: middle;
      }
      img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
      }

      .info{
        color: white;
        text-align: left;
        position: absolute;
        bottom: 0px;
        background-color: rgba(0,0,0,0.4);
        max-height: 84px;
        .info-title{
          font-size: 14px;

        }
        .info-body{
          font-size: 13px;

        }
      }
    }
  }
</style>
