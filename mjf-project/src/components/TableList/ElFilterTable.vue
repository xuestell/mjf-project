<template>
<div class="table">
<el-table
 class="filter-table"
    :data="tableData"
    :border="true"
    style="width: 100%">
    <el-table-column v-for="col in columns" :prop="col.prop" :label="col.label" :key="col.prop">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  name: 'ElFilterTable',
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
    }

  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 .filter-table {
    border:2px solid #409eff;
      th {
        background: #409eff;
        border-right: none;
        font-weight: normal;
        font-size: 16px;
      }
      tr{
        color:#000;
        border: 1px solid #ff572226;
        font-weight: normal;
      } 
    .el-table__body td{
        border: 1px solid #ff572226; 
    } 
}


</style>
