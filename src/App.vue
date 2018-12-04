<template>
  <div id="app">
    <!--<mt-header fixed title="vue项目"></mt-header>-->
    <mt-header fixed title="固定在顶部"></mt-header>

    <!--<img src="./assets/logo.png">-->
    <router-view/>
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
  margin-top: 60px;
}
</style>
