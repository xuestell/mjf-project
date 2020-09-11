<template>
    <div>
        <table-info  
        :table-data="tableData" 
        :columns="columns"
        @handleSigleDel="handleSigleDel"
        @handleMulDel="handleMulDel"
        @edit="edit"
        ></table-info>
    </div>
</template>
<script>
import { headColumns } from './config'
import {handle} from './mixins/handleData'
export default {
    name:"UserList",
    mixins:[handle],
    data(){
        return {
            //表头数据
            columns:headColumns,
            //数据源
            tableData: [],
            url:'static/table/table.json',
            headUrl:  'static/table/table-head.json',
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
            let obj=JSON.stringify(val);
            //localStorage.setItem('obj',JSON.stringify(obj));
            this.$router.push({
                path:'/editUser',
                  query:{
                    res:obj,
                }
            });
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