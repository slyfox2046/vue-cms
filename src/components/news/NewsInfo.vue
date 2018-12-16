<template>
  <!--<div>新闻详情&#45;&#45;{{id}}</div>-->
  <div class="newsinfo-container">
    <h3 class="title">{{newsinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{newsinfo.addtime |dateFormat('YYYY-MM-DD')}}</span>
      <span>点击：{{newsinfo.click}}次</span>
    </p>
    <hr>
    <div class="content" v-html="newsinfo.content">
    </div>
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui'

  // 导入comment组件
  import comment from '../subcomponents/comment'

  export default {
    name: "NewsInfo",
    data() {
      return {
        id:this.$route.params.id, //将url地址中传递过了的id值，挂载到data上，方便以后调用
        newsinfo:{}
      }
    },
    created() {
      this.getNewsInfo();
    },
    methods: {
      getNewsInfo() {
        this.$http.get("getnewsinfo/"+this.id).then(result => {
          console.log(result);
          if (result.body.status === 0) {
            this.newsinfo = result.body.message

          } else {
            Toast("加载新闻失败");

          }
        })

      }

    },
    components:{
    //  用来注册子组件
      'comment-box':comment
    }
  }
</script>

<!--<style lang="scss" scoped>-->
<!--去掉scope是因为v-html注入代码的img标签没有被标记scope的特定标示，所以scope对其无效-->
<style lang="scss" scoped>
  .newsinfo-container{
    padding: 0 4px;
    .title{
      font-size: 16px;
      text-align: center;
      margin: 15px 0;
      color: red;
    }
    .subtitle{
      font-size: 13px;
      color:#226aff;
      display: flex;
      justify-content: space-between;

    }
    .content{
      img {
        width:100%;
      }

    }
  }

  /*.my-gallery{*/
    /*display: flex;*/
    /*flex-wrap: wrap;*/
  /*}*/

</style>
