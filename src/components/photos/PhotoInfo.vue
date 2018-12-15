<template>
  <div class="photoinfo-container">
    <h3>{{photoinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{photoinfo.add_time|dateFormat}}</span>
      <span>点击：{{photoinfo.click}}次</span>
    </p>
    <hr>
    <!--缩略图区域-->
    <vue-preview :slides="slide1" @close="handleClose"></vue-preview>

    <!--图片内容-->
    <div class="content" v-html="photoinfo.content">

    </div>

    <!--评论子组件-->
    <cmt-box :id="id"></cmt-box>
  </div>
</template>

<script>
  // 导入comment组件
  import comment from '../subcomponents/comment'


  export default {
    name: "PhotoInfo",
    prop:[
      "id"
    ],
    components:{
      //注册评论子组件
      'cmt-box':comment
    },
    data() {
      return {
        id: this.$route.params.id,
        photoinfo: [],
        slide1: [
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 600,
            h: 400
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 1200,
            h: 900
          }
        ]
      }
    },
    created() {
      this.getPhotoInfo();
    },
    methods: {
      handleClose(){
        console.log("close vue preview");
      },
      getPhotoInfo() {
        //  获取图片信息
        this.$http.get("getimageinfo/" + this.id).then(result => {
          // if(result.body.status ===0){
          console.log(result.body);
          this.photoinfo = result.body;
          // }
        })

      }
    }
  }
</script>

<style lang="scss" scoped>
  .photoinfo-container{
    padding:3px;
    h3 {
      color : #26a2ff;
      font-size:15px;
      text-align: center;
      margin: 15px 0;
    }
    .subtitle{
      display: flex;
      justify-content: space-between;
      font-size: 13px;
    }

    .content{
      font-size: 13px;
      line-height: 30px;
    }

    text-align: left;
  }

</style>
