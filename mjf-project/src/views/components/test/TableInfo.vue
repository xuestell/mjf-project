
<template>
  <page-factory>
    <div class="table-container">
    <nav-menu :navList="navList" @queryItem="queryItem" @addItem="addItem" :current="current"></nav-menu>
    <div class="right-content">
      <!-- 查询表格数据 -->
      <slot>
      <table-info  :table-data="tableData" :columns="columns"></table-info>
      </slot>
      <router-view></router-view>
      <!-- 新增表格数据 -->
      <!-- <add-item  :rule-form="ruleForm" @submit="submit" ></add-item> -->
    </div>
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
        msg: 'hello,xds',
        //表头数据
        columns:[],
        //数据源
        tableData: [],
        tableLabel:{},
        url:'static/table/table1.json',
        //左侧导航
        navList:[
                {
                    label:'表一',
                    index:"1",
                    children:[
                      {
                        label:'添加数据',
                        index:"1-1",
                        type:'add',
                        url:'static/table/table1.json'
                      },
                      {
                        type:'query',
                        label:'查看列表',
                        index:"1-2",
                        url:'static/table/table1.json'
                      }
                    ]

                },
                {   
                    label:'表二',
                    index:"2",
                    children:[
                        {
                            label:'添加数据',
                            type:'add',
                            index:"2-1",
                            type:'add',
                            url:'static/table/table2.json',
                        },
                        {
                          label:'查看列表',
                          index:"2-2",
                          url:'static/table/table2.json',
                          type:'query',

                        }
                    ]

                },
                {   
                    label:'表三',
                    index:"3",
                    children:[
                        {
                            label:'添加数据',
                            type:'add',
                            index:"3-1",
                            type:'add',
                            url:'static/table/table3.json',
                        },
                        {
                          label:'查看列表',
                          index:"3-2",
                          url:'static/table/table3.json',
                          type:'query',

                        }
                    ]

                }
            ],
            current:'1-2',
      }
    },
    computed:{
    },
    mounted(){
      this.getTableInfo(this.url);
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
      queryItem(obj){ 
        this.current=obj.index;
        // this.$router.push('/');
        //根据id查询数据
        this.getTableInfo(obj.url);
       },
     async addItem(obj){
         let {index}=obj;
         this.current=obj.index;
         console.log(obj.url);
        await this.getTableInfo(obj.url);
         let title=String(index).split('-')[0];
         this.tableLabel=this.processRuleForm(this.tableData);
         console.log(this.tableLabel);
         //参数传递之前需转换一下
         //传递参数
         let params=JSON.stringify(this.tableLabel);
         this.$router.push({
           path:'/addItem',
           query:{
             obj:encodeURIComponent(params),
             title:`${title}`,
             dataType:obj,
           }

         })
       },
        submit(obj){
        //  console.log(obj);
        //  let params=[];
        //  params.push(obj);
        //  console.log(JSON.stringify(params));
          this.$message.success("信息添加成功");
          this.tableData.push(obj);
       },
        processRuleForm(arr){
         //获取需要添加的表字段
          let addProp= Object.keys(arr[0]);
          let obj={};
          addProp.forEach((item)=>{
            obj[item]='';
          })
          return obj;
         
       }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.table-container{
  overflow: auto;
  .nav-list{
    width: 250px;
    float: left;
    margin: 0 10px;
  }
  .right-content{
    margin-left:300px;
    float:left;
    .add-table-item{
      width:500px;
    }
  }



}


</style>
