<template>
<div class="add-table-item">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item  v-for="(value,key,index) in ruleForm " :key="index" :label="key" :prop="key">
            {{index}} {{key}} {{value}}
            <el-input @input="changeSequence" v-model="ruleForm[key]" ></el-input>
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
        
            }
       }

    },
    props:{
        ruleForm:{
            type:Object,
        },
        columns:{
            type:Array,
            default:()=>[]
        }

    },
    mounted(){
        console.log(this.ruleForm,'g');

    },
    methods:{
        //解决输入input不及时回显，强制更新
        changeSequence(){
            this.$forceUpdate();

        },
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
