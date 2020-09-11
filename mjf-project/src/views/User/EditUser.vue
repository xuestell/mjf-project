<template>
      <div class="form-wrap">
        <h3> 编辑表数据 </h3>
        <custom-form :formConfig="formConfig" :rules="rules" :value="value" @submit="submit" :obj="obj" @errhandle="errhandle"  @cancel="cancel"></custom-form>
      </div>
</template>
<script>
import {editItem,value} from './config'
  export default {
    name: 'EditUser',
    components:{
    },
    data () {
      return { 
        //表头数据
        formConfig:editItem,
        value:value,
        tableData:[],
        obj:{
          save:'保存',
          cancel:'取消'
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
      //暂存表格数据
     this.tableData=JSON.parse(localStorage.getItem('arr'));
     let data=JSON.parse(this.$route.query.res);

     this.value=data;
    },
    computed:{
    },
    methods:{
    submit(obj){
      const editTableData=JSON.parse(JSON.stringify(this.tableData));
      let idx=editTableData.findIndex((item)=>{
      console.log(item.s0,this.value.s0)
      return item.s0==this.value.s0
    })
    editTableData[idx]=this.value;
    localStorage.setItem('arr',JSON.stringify(editTableData));
    this.$message.success("信息修改成功");
    this.$router.push('/userList');
    },
    errhandle(){
       this.$message.error('请检查表单')
    },
    cancel(){
      this.$router.push('/userList');
    }
    
    }
  }
</script>
<style scoped>

</style>
