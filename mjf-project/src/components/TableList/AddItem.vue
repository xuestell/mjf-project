<template>
<div class="add-table-item">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" >
        <el-form-item  v-for="(value,key,index) in ruleForm " :key="index">
            <el-form-item :label="key" :prop="key">
                <el-input v-model="ruleForm[key]"></el-input>
            </el-form-item>
        </el-form-item>
        <el-button type="primary" @click="addItem">立即创建</el-button>
        <el-button @click="reset">重置</el-button>
    </el-form>
</div>
    
</template>
<script>
export default {
    name:'AddItem',
    data(){
       return {
            
            rules:{
                // s0:[
                //     {
                //         required:true,message:'请输入s1',trigger:'blur',
                //     }
                // ],
                // stype:[
                //     {
                //         required:true,message:'请输入stype',trigger:'blur',

                //     }
                // ]


            }
       }

    },
    props:{
        ruleForm:{
            type:Object,
        }

    },
    methods:{
        addItem(){
            this.$refs.ruleForm.validate((valid)=>{
                if(valid){
                    this.$emit('submit',this.ruleForm);
                }else{
                     this.$emit('errHandle');
                }
            })

        },
        reset(){
            this.$refs.ruleForm.resetFields();

        }

    }
}
</script>
<style scoped>

</style>
