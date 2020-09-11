<template>
    <div>
        <table-info  
        :table-data="tableData" 
        :columns="columns"
        @handleSigleDel="handleSigleDel"
        @handleMulDel="handleMulDel"
        @edit="edit"
        ></table-info>
        <el-dialog :visible.sync="dialogVisible" :before-close="handleClose">
         <div class="form-wrap">
            <h3> 编辑表数据 </h3>
            <custom-form :formConfig="formConfig" :rules="rules" :value="value" @submit="submit" :obj="obj" @errhandle="errhandle"  @cancel="cancel"></custom-form>
        </div>
        </el-dialog>
    </div>
</template>
<script>
import {editItem,value} from './config'
import { headColumns } from './config'
import {handle} from './mixins/handleData'
export default {
    name:"UserList",
    mixins:[handle],
    data(){
        return {
            dialogVisible:false,
            //表头数据
            columns:headColumns,
            //数据源
            tableData: [],
            url:'static/table/table.json',
            headUrl: 'static/table/table-head.json',
            //编辑
            formConfig:editItem,
            value:value,
            obj:{
            save:'保存',
            cancel:'取消'
            },
            rules:{}
            
        }
    },
    mounted(){
        this.getTableInfo(this.url);
        // 请求表头数据
        //this.getTableHead(this.headUrl);
        //获取表格数据
        //this.getTableInfo(this.url);
        // this.showAllData(this.url);
    },
    methods:{
        //获取删除的参数id
        getParam(){
          return (headColumns||[])[0].prop;
        },
        //单行删除
        handleSigleDel(val){
            this.$confirm('确定删除么','提示',{
                confirmButtonText:'确定',
                cancelButtonText:'取消',
                type:'warning'
            }).then(()=>{
                let delId=this.getParam();
                let delVal=val[delId];
                let data=JSON.parse(JSON.stringify(this.tableData));
                let index = data.findIndex(item=>item[delId]===delVal);
                data.splice(index,1);
                localStorage.setItem("arr",JSON.stringify(data));
                this.tableData=data;
                this.$message.success(`删除一条数据成功`);
            }).catch((resp)=>{
                this.$message.info('已取消删除数据')
            })
            

        },
        //多行删除
        handleMulDel(val){
            this.$confirm('确定要删除这些数据么？','提示',{
                confirmButtonText:'确定',
                cancelButtonText:'取消',
                type:'warning',
            }).then(()=>{
                console.log(val,'多删')
                let mulVal=val;
                let mulId=[];
                mulVal.forEach(element => {
                    mulId.push(element[this.getParam()])
                });
                //深拷贝
                let data=JSON.parse(JSON.stringify(this.tableData));
                //利用差集
                let arr=data.filter(item=>{return mulId.indexOf(item[this.getParam()])==-1})
                //设置数据
                localStorage.setItem("arr",JSON.stringify(arr));
                this.tableData=arr;
                this.$message.success(`删除${mulId.length}数据成功`);
            }).catch((resp)=>{
                this.$message.info('已取消删除数据');
            })
            

        },
        edit(val){
            this.dialogVisible=true;
            this.value=val;
            let obj=JSON.stringify(val);
            //localStorage.setItem('obj',JSON.stringify(obj));
            // this.$router.push({
            //     path:'/editUser',
            //       query:{
            //         res:obj,
            //     }
            // });
        },
         submit(obj){
            const editTableData=JSON.parse(JSON.stringify(this.tableData));
            let idx=editTableData.findIndex((item)=>{
            console.log(item[this.getParam()],this.value[this.getParam()])
            return item[this.getParam()]==this.value[this.getParam()]
        })
        editTableData[idx]=this.value;
        localStorage.setItem('arr',JSON.stringify(editTableData));
        this.$message.success("信息修改成功");
        this.dialogVisible=false;
        },

        errhandle(){
        this.$message.error('请检查表单')
        },

        cancel(){
        this.dialogVisible=false;
        },
        handleClose(done){
            this.$confirm('确定关闭么').then(()=>{
                done();
            }).catch((err)=>{
                console.log(err);
            })

        },
            //表头
            async getTableHead(url){
               await this.$axios.get(url).then((res)=>{
                    //如果没有数据就终止
                    if(!res.data||!res.data.length){
                        return;
                    }
                    let obj = res.data[0];
                    //获取表头数据
                    this.columns= this.handleHeadData(obj);
                }).catch((err)=>{
                    console.log(err);
                })
                //获取表格数据
                this.getTableInfo(this.url);
            },

            // //表格
            //  getTableInfo(url){ 
            //     this.$axios.get(url).then((res)=>{
            //          //如果没有数据就终止
            //         if(!res.data||!res.data.length){
            //             return;
            //         }
            //         let data=res.data;
            //         //获取表格数据
            //         this.tableData=data;   
            //     }).catch((err)=>{
            //         console.log(err);
            //     })
            // },
            showAllData(url){
                getTableInfo(url)
            },
    
            //处理表头数据方法
            handleHeadData(obj){
                //获取表头数据
                let headColumns=[];
                for(let key in obj){
                    headColumns.push({prop:key,label:obj[key]})
                }
                return headColumns;

            }
    },

}
</script>