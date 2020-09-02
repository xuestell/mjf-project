<template>
    <div class="phone-login">
        <h1>手机验证码登录</h1>
        <el-form :model="ruleForm" :rules="rules" ref="loginForm">
            <el-form-item label="手机号" prop="phone">
                <el-input  placeholder="请输入手机号" v-model="ruleForm.phone">
                    <i slot="prefix" class="el-icon-phone"></i>
                </el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="code">
                <!-- element-ui 栅格化布局 -->
                <el-row :gutter="19">
                    <el-col :span=15>
                        <el-input  placeholder="请输入验证码" v-model="ruleForm.code">
                            <i slot="prefix" class="el-icon-tickets"></i>
                        </el-input>
                    </el-col>
                    <el-col :span="1">
                        <el-button @click="sendCode" :disabled="disabled">{{codeText}}</el-button>
                    </el-col>
                </el-row>
               
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width:100%;" @click="phoneLogin" :disabled="!disabled">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    name:'PhoneLogin',
    data(){
        //自定义验证规则
        let checkPhone=(rule,value,callback)=>{
            if(!value){
                return callback(new Error('手机号不能为空'));
            }else{
                //以1 开头,第二位为3,4,5,7,8 后面跟9位数
                let reg=/^1[3|4|5|7|8][0-9]\d{8}$/;
                //满足验证条件
                if(reg.test(value)){
                    callback();
                }else{
                    return callback(new Error('手机号输入的不正确'));
                }
            }
        }
        return{
            rules:{
                phone:
                [
                    {
                        validator:checkPhone,
                        trigger:'change'
                    },
                ],

                code:
                [
                    {
                    required:true,
                    message:'验证码不能为空',
                    trigger:'blur'
                    }
                ]
            },
            disabled:false,
            codeText:'发送验证码',
            timer:0,
        }

    },
    props:{
        //表单对象
        ruleForm:{
            type:Object,
            required:true,
        },
        //倒计时对象
        countDown:{
            type:Number,
            default:60,
        }  
    },
    methods:{
        sendCode(){
            //验证手机号
            this.$refs.loginForm.validateField('phone',(errMsg)=>{
                if(errMsg){
                     this.$message.error('请先输入正确的手机号')
                }else{
                 let setId=setInterval(()=>{
                     this.disabled=true;
                     this.timer--;
                     this.codeText=`${this.timer}后重新发送`;
                     if(this.timer==0){
                         clearInterval(setId);
                         this.disabled=false;
                         this.codeText='请点击重新发送';
                     }
                 },1000)   
                }
            })
            //1.验证手机号输入正确
            //2.发送验证码按钮置灰，倒计时--，文字变为多少秒后重新发送
            //3.倒计时完毕，按钮重新变为重新发送，按钮还原
            //4.code 
           // let err
        },
        phoneLogin(){
            //验证整个表单
            this.$refs.loginForm.validate((valid)=>{
                if(valid){
                    this.$emit('submit');
                }else{
                    this.$emit('errhandle');
                }
            })
        }
    },
    mounted(){
        this.timer=this.countDown;
    }

}
</script>
<style lang="scss" scoped>
.phone-login{
    width: 500px;
    margin-left:30px;
}

</style>