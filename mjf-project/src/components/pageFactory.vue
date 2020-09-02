<template>
<div class="wrapper">
    <div class="container">
      <h3>{{msg}}</h3>
      <!-- 自定义中间部分内容 -->
      <slot>
      </slot>
    </div>
    <div>Footer</div>
</div>
</template>

<script>
//这是模板页面
export default {
  name: 'PageFactory',
  components:{
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    goTo(path){
      this.$router.push(path);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .container{
    margin-bottom: 20px;

    h3{
      margin:20px;
    }
  }



</style>
