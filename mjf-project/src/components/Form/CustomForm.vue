<template>
   <el-form :model="value" ref="ruleForm" :rules="rules">
        <form-item v-for="item in formConfig" :key="item.key" :item="item" :value="value" >
        </form-item>
         <el-form-item>
           <el-button type="primary" @click="handleAdd" >{{obj.save}}</el-button>
           <el-button @click="reset">{{obj.cancel}}</el-button>
         </el-form-item>
   </el-form>
</template>
<script>
import FormItem from './components/Item'
export default {
   name:'CustomForm',
   components:{
       FormItem,
   },
   data(){
       return {

       }
   },
   props:{
       formConfig:{
           type:Array,
           default:()=>[]
       },
       value:{
            type:Object,
            default:()=>({})
       },
       obj:{
           type:Object,
           default:()=>({})
       },
        rules:{
            type:Object,
            dfault:()=>({})
        }
        
       

   },
   methods:{
       handleAdd(){
           this.$refs.ruleForm.validate((valid)=>{
               if(valid){
                this.$emit('submit',this.value)
               }else{
                this.$emit('errhandle')
               }
           })
           

        },
        reset(){
            this.$refs.ruleForm.resetFields();
            this.$emit('cancel')
        }

   },
   
}
</script>