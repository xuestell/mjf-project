<template>
    <div>
        <table-info  :table-data="tableData" :columns="columns"></table-info>
    </div>
</template>
<script>
export default {
    name:"TableList",
    data(){
        return {
            //表头数据
            columns:[],
            //数据源
            tableData: [],
            navObj:{},
            url:'static/table/table1.json',
        }
    },
    mounted(){
        this.navObj=this.$route.params.data;
        this.getTableInfo( this.navObj.url||this.url);
    },
    methods:{
        async getTableInfo(url){ 
            await  this.$axios.get(url).then((res)=>{
                let data=res.data;
                //获取表头数据
                let headColumns=[];
                Object.keys(data[0]).forEach((item)=>{
                    headColumns.push({prop:String(item),label:String(item)});
                })
                //将表头数据填充到columns
                this.columns=headColumns;
                //获取表格数据
                this.tableData=data;
                console.log(this.tableData,'getTable')
                
            }).catch((err)=>{
                console.log(err);
            })
        },
    }
}
</script>