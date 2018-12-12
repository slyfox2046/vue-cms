<template>
  <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
      <router-link :to="'/home/newsinfo/'+item.id">
        <img class="mui-media-object mui-pull-left" :src="item.img_url">
        <div class="mui-media-body">
          <h1>{{item.title}}</h1>
          <p class='mui-ellipsis'>
            <span>发表时间：{{item.addtime | dateFormat('YYYY-MM-DD')}}</span>
            <span>点击：{{item.click}}次</span>
          </p>
        </div>
      </router-link>
    </li>


  </ul>
</template>

<script>
    // export default {
    //     name: "NewsList"
    // }
    export default {
      name: "NewsList",
      data() {
        return {
          newslist: []

        }
      },
      created() {
        this.getNewsList();
      },
      methods: {
        getNewsList() {
          this.$http.get("getnewslist").then(result => {
            if (result.body.status === 0) {
              this.newslist = result.body.message

            } else {
              Toast("加载新闻失败");

            }
          })

        }

      }
    }
</script>

<style lang="scss" scoped>
  .mui-table-view{
    li{
      h1{
        font-size: 14px;
        text-align:left;
      }
      .mui-ellipsis {
        font-size: 12px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
        
      }
    }
  }

</style>
