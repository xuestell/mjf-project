<template>
<div class="table">
<el-table
 class="filter-table"
    :data="newData"
    :border="true"
    style="width: 100%"
    @selection-change="handleSelection" >
    <el-table-column type="selection" >
    </el-table-column>
    <el-table-column v-for="col in columns" :prop="col.prop" :label="col.label" :key="col.prop">
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="200">
    <template slot="header" >
      <el-input v-model="search" size="mini"
      placeholder="输入关键字搜索">
      </el-input>
    </template>
      <template slot-scope="scope">
        <el-button  size="small" @click="edit(scope.row)">编辑</el-button>
         <el-button @click="handleClick(scope.row)" type="danger" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
   <el-button @click="handleDelete" type="danger" size="small">删除所有选中行</el-button>
  </div>
</template>

<script>
export default {
  name: 'TableInfo',
  data(){
    return {
      mul:[],
      singleDel:{},
      search:''
    }
  },
  props:{
    //表头数据
    columns:{
      type:Array,
      default:()=>[{prop:'date',label:'日期'},{prop:'name',label:'姓名'},{prop:'address',label:'地址'}],
    },
    //表格数据源
    tableData:{
      type:Array,
      default:()=>
        [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }] 
    },
  },
  computed:{
   newData(){
      let data= JSON.parse(JSON.stringify(this.tableData));
      return this.handleSearch(data,this.search)
      //data 是一个数组对象，只要对象中的任何一个key所对应的value值包含search值 ，就保留这个对象
   }
  },
  mounted(){
    this.handleSearch();
  },
  methods:{
     //处理搜索的数据
    handleSearch(arr,search){
      let newArr=[];
      (arr||[]).forEach((item) => {
        if(!search||Object.values(item).toString().toLowerCase().includes(search.toLowerCase())){
          newArr.push(item);
        }
      });
     return newArr;  
    },
    //单行删除
    handleClick(obj){
      this.$emit('handleSigleDel',obj);

    },
    handleSelection(val){
    this.mul=val;
    },
    //多行删除
    handleDelete(){
      this.$emit('handleMulDel',this.mul);

    },
    //编辑
    edit(val){
      this.$emit("edit",val);
    },
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
//  .filter-table {
//     border:2px solid #409eff;
//       th {
//         background: #409eff;
//         border-right: none;
//         font-weight: normal;
//         font-size: 16px;
//       }
//       tr{
//         color:#000;
//         border: 1px solid #ff572226;
//         font-weight: normal;
//       } 
//     .el-table__body td{
//         border: 1px solid #ff572226; 
//     } 
// }


</style>
