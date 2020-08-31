<template>
  <el-container>
    <el-header> 
      <p>
        <el-button type="primary" @click="goTo('/')"> 回到首页</el-button>
        <el-button type="primary" @click="goTo('/pageTable')"> 测试页面</el-button>
        <el-button type="primary" @click="goTo('/table')"> table组件</el-button>
        <el-button type="primary" @click="goTo('/myFamily')"> 去往myfamily</el-button>
        <el-button type="primary" @click="goTo('/first')"> 去往first页面</el-button>
      </p> 
    </el-header>
    <div class="container">
      <h3>{{msg}}</h3>
      <!-- 自定义中间部分内容 -->
      <slot>
      </slot>
    </div>
    <el-footer>Footer</el-footer>
  </el-container>
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
