<template>
      <div>
        <h3> 新增表{{title}}数据 </h3>
   <!--  新增表格数据 -->
      <add-item  :rule-form="ruleForm" @submit="submit" ></add-item>
      </div>
</template>
<script>

  export default {
    name: 'AddItemPage',
    components:{
    },
    data () {
      return { 
        tableData:[], 
        
      }
    },
    computed:{
     ruleForm(){
       return JSON.parse(decodeURIComponent(this.$route.query.obj));
     },
     title(){
       return this.$route.query.title;
     },
    },
    mounted(){
       console.log(this.ruleForm);

    },
    methods:{
    submit(obj){
          this.$message.success("信息添加成功");
          this.tableData.push(obj);
       }
  }
}
</script>
<style scoped>

</style>

