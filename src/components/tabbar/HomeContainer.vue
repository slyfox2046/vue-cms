<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>a11</mt-swipe-item>
      <mt-swipe-item>b22</mt-swipe-item>
      <mt-swipe-item>c33</mt-swipe-item>
    </mt-swipe>
    <div>      home    </div>

  </div>
</template>

<script>
    export default {
      name: "HomeContainer",
      data(){
        return {
          lunbotuList:[]

        }
      },
      created(){
        this.getLunbotu();
      },
      methods:{
        getLunbotu(){
          this.$http.get("src/testdata/lunbo.json").then(result =>{
            console.log(result);
          })

        }

      }
    }
</script>

<style lang="scss" scoped>
  .mint-swipe{
    height: 200px;
  }
  .mint-swipe-item{
    &:nth-child(1){
      background-color: red;
    }
    &:nth-child(2){
      background-color: blue;
    }
    &:nth-child(3){
      background-color: cyan;
    }


  }

</style>
