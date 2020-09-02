<template>
    <login :ruleForm="ruleForm" :rules="rules" @submit="submit" @errHandle="errHandle"></login>
</template>

<script>
  export default {
    name: 'NormalLogin',
    components: {
    },
    data(){
      return {
        //表单数据对象
        ruleForm:{
          username:'',
          password:'',
        },
        rules:{
          //每一个验证规则为一个数组
          username:[
            {
            required:true,
            message:'用户名不能为空',
            trigger:'blur',
            },
            {
              min:2,
              max:6,
              message:'用户名在2-6个字符之间',
              trigger:'blur',
            }
          ],
          password:[
            {
            required:true,
            message:'密码不能为空',
            trigger:'blur',
            },
            {
            min:6,
            max:15,
            //错误提示
            message:'密码在6-15个字符',
            //触发方式
            trigger:'blur'
            }
          ]
        }
      };
    },
    methods:{
      submit(){
        this.$message.success('提交成功');
      },
      errHandle(){
        this.$message.error('表单填写有误，请检查');
      }

    }
   
  }
</script>


<style lang="scss" scoped>


</style>
