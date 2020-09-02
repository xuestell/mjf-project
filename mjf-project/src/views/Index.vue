
<template>
  <page-factory>
    <div class="table-container">
    <nav-menu :navList="navList" @queryItem="queryItem" @addItem="addItem"></nav-menu>
    <div class="right-content">
      <!-- 查询表格数据 -->
      <table-info  :table-data="tableData" :columns="columns"></table-info>
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
        msg: 'hello,mds',
        //表头数据
        columns:[],
        //数据源
        tableData: [],
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
                        type:'add'
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
                            type:'add'
                        },
                        {
                          label:'查看列表',
                          index:"2-2",
                          url:'static/table/table2.json',
                          type:'query',

                        }
                    ]

                }
            ],
            // ruleForm:{
            //     "s1": "1",
            //     "stype": "1",
            //     "sip": "10.134.103.101",
            //     "sapauthor": "1",
            //     "sapplicationdate": "2020-06-16T16:00:00.000+00:00",
            //     "sinstalldate": "2020-06-16T16:00:00.000+00:00",
            //     "smodifydate": "2020-06-16T16:00:00.000+00:00",
            //     "sstatus": "1",
            //     "sremark": "新增加进清单",
            //     "server_application": null,
            //     "server_status": null,
            //     "server_type": null
            // },
            //是否显示addItem
            changeFlag:false,
      
      }
    },
    computed:{
      //疑问？我怎么知道我这个新增的表格数据需要添加哪些字段呢，是你这边提供接口还是我这边先查询表格数据再去获取需要新增的表格数据呢
      ruleForm(){
        //获取需要添加的表字段
       let addProp= Object.keys(this.tableData[0]);
       let obj={};
       addProp.forEach((item)=>{
         obj[item]='';
       })
        return obj;
      }
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
      queryItem(obj){    
        //根据id查询数据
        this.url=obj.url;
        this.getTableInfo(this.url);
       },
       addItem(data){
         let {index}=data;
         let title=String(index).split('-')[0];
         console.log(data);
         //参数传递之前需转换一下
         //传递参数
         let params=JSON.stringify(this.ruleForm);
         this.$router.push({
           path:'/addItem',
           query:{
             obj:encodeURIComponent(params),
             title:`表${title}数据`
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

    .add-table-item{
      width:500px;
      float:left;
    }
  }



}


</style>
