
<template>
  <page-factory>
    <div class="table-container">
    <nav-menu :navList="navList" @queryItem="queryItem" @addItem="addItem" :current="current"></nav-menu>
    <div class="right-content">
    <router-view></router-view>
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
    },
    methods:{
      queryItem(obj){ 
        console.log(obj);
        //let newobj=this.processParams(obj);
        this.$router.push({
          name:'TableList',
          params:{
            data:obj
          }
        })

      },
      addItem(obj){
        this.$router.push({
        path:'/addItem'
      })
      },
      processParams(obj){
        return  encodeURIComponent(JSON.stringify(obj));   
      }
  },
  
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
  }



}


</style>
