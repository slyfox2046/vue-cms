<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发布评论</mt-button>
    <div class="cmt-list" >
      <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
        <div class="cmt-title">
          第{{i+1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发布时间:{{item.add_time | dateFormat}}
        </div>
        <div class="cmt-body">
         {{item.content}}

        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  export default {
    name: "comment",
    props:["id"],
    data() {
      return {
        comments:[],
        pageIndex:1,
        msg:"" //评论输入的内容
      }
    },
    created() {
      this.getComments();
    },
    methods: {
      getComments() {
        //http://localhost:3000/getcomments?id=1&_start=0&_limit=3
        this.$http.get("getcomments?id="+this.id+"&_limit=3&_start="+(this.pageIndex-1)*3).then(result => {
          if (result.status === 200) {
            // console.log(result.bodyText);
            // this.comments = JSON.parse(result.bodyText);
          //  加载更多时候，数据进行拼接
            this.comments = this.comments.concat(JSON.parse(result.bodyText));

          } else {
            Toast("加载评论失败");

          }
        })

      },
      getMore(){
        this.pageIndex++ ;
        this.getComments();
      },
      postComment(){
        //-----post comment ----
        if (this.msg.trim().length===0 ){
          return Toast("评论内容不能为空");
        }
        //
        // this.$http.post("app/postcomment"+ this.id,{
        //   connent:this.msg.trim()
        // }).then(function (result) {
        //   if( result.body.status===0){
        //    var cmt = {user_name :'匿名用户',add_time:Date.now(),content:this.msg.trim()};
        //     this.comments.unshift(cmt);
        //     this.msg = "";
        //   }
        //
        // })

        var cmt = {user_name :'匿名用户',add_time:Date.now(),content:this.msg.trim()};
        this.comments.unshift(cmt);
        this.msg = "";
      }
    }
  }

</script>

<style lang="scss" scoped>
  .cmt-container{
    text-align: left;
    h3 {
      font-size: 13px;
    }
    textarea {
      font-size: 14px;
      height: 85px;
      margin: 0;
    }

    .cmt-list{
      margin: 5px 0 ;
      .cmt-item{
        line-height: 30px;
        font-size: 13px;
        .cmt-title{
          background-color: #ccc;

        }
        .cmt-body{
          line-height: 30px;
          text-indent: 2em;
           
        }
      }
    }
  }


</style>
