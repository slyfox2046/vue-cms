<template>
    <div class="goods-list">
      <div class="goods-item">
        <img src="https://i1.mifile.cn/a1/pms_1537356460.6227958!220x220.png" alt="">
        <h1 class="title">小米8 屏幕指纹版</h1>
        <div class="info">
          <p class="price">
            <span class="now">￥2199</span>
            <span class="old">￥1999</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩余60件</span>
          </p>
        </div>
      </div>
      <div class="goods-item">
        <img src="https://i1.mifile.cn/a1/pms_1524621350.77238418!220x220.jpg" alt="">
        <h1 class="title">小米MIX 2S
           6GB+128GB 立省900元 到手价2699元 8GB+256GB 黑色、白色立省600元 到手价3399元</h1>
        <div class="info">
          <p class="price">
            <span class="now">￥2199</span>
            <span class="old">￥1999</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩余60件</span>
          </p>
        </div>
      </div>
      <div class="goods-item">
        <img src="https://i1.mifile.cn/a1/pms_1537356460.6227958!220x220.png" alt="">
        <h1 class="title">红米6 Pro 高颜值大电量 红米旗舰 / 异形全面屏 19:9 FHD＋ / 后置1200万 AI双摄</h1>
        <div class="info">
          <p class="price">
            <span class="now">￥2199</span>
            <span class="old">￥1999</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩余60件</span>
          </p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsList"
    }
</script>

<style lang="scss" scoped>
  .goods-list{
    display:flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;

    .goods-item{
      border: 1px solid #ccc;
      box-shadow:0 0 8px #ccc ;
      margin:4px 0;
      width:49%;
      padding:2px;

      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      min-height: 330px;

      img{
        width:100%;
      }
      .title{
        font-size: 14px;
      }
      .info{
        background-color: #eee;
        p {
          margin: 0px;
          padding:5px;
          text-align: left;
        }
        .price{
          .now{
            color: red;
            font-weight: bold;
            font-size: 16px;
          }
          .old{
            text-decoration: line-through;
            font-size:12px;
            margin-left: 10px;

          }
        }
        .sell{
          display: flex;
          justify-content: space-between;
          flex-size:12px
        }
      }

    }
  }
</style>
