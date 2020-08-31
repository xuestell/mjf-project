<template>
  <div id="app">
    <!-- 全局回到顶部 -->
    <back-to-top>
    <router-view />
    </back-to-top>
  </div>
</template>

<script>
  export default {
    name: 'App',  
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
