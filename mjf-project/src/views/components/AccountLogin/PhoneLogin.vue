<template>
    <phone-login :ruleForm="phoneForm" :count-down="countDown"  @submit="submit" @errhandle="errhandle"></phone-login>
</template>
<script>
export default {
    data(){
        return {
            phoneForm:{
                phone:"",
                code:"",
            },
            countDown:30
        }

    },
    methods:{
        submit(){
            this.$message.success('手机号登录成功');
        },
        errhandle(){
            this.$message('表单填写有误，请检查')
        }
    }
}
</script>
<style>

</style>