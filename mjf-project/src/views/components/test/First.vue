<template>
    <div class="first">
    <ul><li><router-link to="/a" class="ys1"> 去往A页面</router-link></li>
    <li><router-link to="/b" class="ys1"> 去往B页面</router-link></li>
    </ul>
    <router-view></router-view>
    <phone-login :ruleForm="phoneForm" :count-down="countDown"  @submit="submit" @errhandle="errhandle"></phone-login>
    </div>
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
/* @import "../../public/ys1.css" */
 /* .ys1{
    color:red;
    font-size:30px;
} */
</style>