<template>
      <div class="form-wrap">
        <h3>新增表数据 </h3>
      <!--  新增表格数据 -->
        <custom-form :formConfig="formConfig" :value="value" :rules="rules" @submit="submit" :obj="obj" @errhandle="errhandle"></custom-form>
      </div>
</template>
<script>
import {newItem,value} from './config'
  export default {
    name: 'AddUser',
    components:{
    },
    data () {
      return { 
        //表头数据
        formConfig:newItem,
        value:value,
        obj:{
          save:'添加',
          cancel:'重置'
        },
        rules:{
          s0:[
            {
              required:true,
              message:'服务器编号不能为空',
              trigger:blur,
            },
          ],
          stype:[
          {
             required:true,
              message:'服务器类型不能为空',
              trigger:blur,
          }
        ],
        sip:[
          {
             required:true,
              message:'服务器ip不能为空',
              trigger:blur,
          }
        ],
        sdate:[
          {
             required:true,
              message:'服务器时间不能为空',
              trigger:blur,
          }
        ]

        },
      }  
    },
    mounted(){
    },
    computed:{
    },
    methods:{
    submit(obj){
          if(typeof(Storage)!==undefined){
             //存储第一波数据
            this.appendLocal('arr',obj)
          }
          this.$message.success("信息添加成功");
          this.value={};
    },
    errhandle(){
       this.$message.error('请检查表单')
    },
    appendLocal(key,obj){
      //localStorage 存储多个对象保存在一个数组中
      if(obj==null) return ;
      let temp,tempStr='';
      try{
        if(localStorage.getItem(key)==null)
        throw new Error('空或undefined');
        //查询
        temp=JSON.parse(localStorage.getItem(key));
      }
      catch(err){
        temp=[];
      }
      //将每个对象转成字符串
      temp=temp.map((item)=>{
        return JSON.stringify(item);
      })
      //去重
      if(temp.indexOf(JSON.stringify(obj))===-1) temp.push(JSON.stringify(obj));
      temp.forEach((item,index,arr)=>{
        arr.length===index+1?tempStr+=`${item}`:tempStr+=`${item},`;
      });
      localStorage.setItem(key,`[${tempStr}]`);
     }
    }
  }
</script>
<style scoped>

</style>
