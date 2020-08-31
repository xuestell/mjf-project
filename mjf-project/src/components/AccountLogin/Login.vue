<template>
    <div class="login">
        <h1>普通登录</h1>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm"> 
            <el-form-item label="用户名" prop="username">
                <el-input 
                    palceholder="请输入用户名" 
                    v-model="ruleForm.username">
                    <i slot="prefix" class="el-icon-user" ></i>
                </el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input 
                    palceholder="请输入密码" 
                    v-model="ruleForm.password">
                    <i slot="prefix"  class=" el-icon-lock" show-password></i>
                </el-input>
            </el-form-item>
            <el-button
                @click="login"
                type="primary" style="width:100%;">登录</el-button>
        </el-form>
    </div>
</template>
<script>
export default {
    data(){
        return {
        }

    },
    props:{
        //表单数据对象
         ruleForm:{
             type:Object,
             required:true,
         },
         //验证对象
         rules:{
             type:Object,
             required:true,
         },
    },
    methods:{
        login(){
            this.$refs.ruleForm.validate((valid)=>{
                if(valid){
                    this.$emit('submit');
                }else{
                    this.$emit('errHandle');
                }
            })
        }
    }
}
</script>
<style lang="scss">
.login{
    width:500px;
    margin:20px;
}

</style>