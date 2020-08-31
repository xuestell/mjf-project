
<template>
  <page-factory>
    <div class="table-container">
    <nav-left :items="navList"  :title="title" @my="getItem"></nav-left>
    <el-filter-table :table-data="tableData" :columns="columns"></el-filter-table>
    </div>
  </page-factory>
</template>

<script>

  export default {
    name: 'Index',
    components:{
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        //表头数据
        columns:[],
        //数据源
        tableData: [],
        url:'static/table/table1.json',
        //左侧导航
        navList:[
        {index:1,text:'表1',url:'static/table/table1.json',},
        {index:2,text:'表2',url:'static/table/table2.json',},
        {index:3,text:'表3',url:'static/table/table3.json',},
        {index:4,text:'表4',url:'static/table/table4.json',},
        {index:5,text:'表5',url:'static/table/table5.json',},
        {index:6,text:'表6',url:'static/table/table6.json',},
        {index:7,text:'表7',url:'static/table/table7.json',},
        ],
        title:'表格列表',
      }
    },
    computed:{
    },
    mounted(){
      
      this.getTableInfo(this.url);
    },
    methods:{
      getTableInfo(url){ 
        this.$axios.get(url).then((res)=>{
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
        }).catch((err)=>{
          console.log(err);
        })
      },
      getItem(n){
       //获取当前点击的是第几项
       let obj=this.navList.find((item)=>{
          return item.index==n
        });
        this.url=obj.url;
        this.current=obj.index;
        this.getTableInfo(this.url);
      }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.table-container{
  display: flex;
  .nav-left{
    margin: 0 10px;
    border:1px solid cornflowerblue;
    .title{
      color:#000;
    }
    background: cornflowerblue;
  }
  .table{
    flex:1;
  }

}


</style>
