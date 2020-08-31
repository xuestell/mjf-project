<template>
    <div>
       <img-list :goodId="goodId" :url="url" :curent-url="curentUrl" :curent-path="curentPath" ></img-list>
    </div>
</template>
<script>
import Msg from './msg.js'
import ImgList from './ImgList'
export default {
    components:{
     ImgList,
    },
    data(){
        return {
            //当前左侧编号
            goodId:"default",
            //底部json文件
            url:[ 
                {
                  index:0,
                  url:'json/xj.json',
                },
                {
                   index:1,
                   url:'json/mjf.json',
                },
                {
                   index:2,
                   url:'json/xu-mom.json'
                },
                 {
                   index:3,
                   url:'json/xu-father.json'
                },
                 {
                   index:4,
                   url:'json/xu-erjie.json'
                },
                 {
                   index:5,
                   url:'json/xu-sange.json'
                },
                {
                   index:6,
                   url:'json/xu-dage.json'
                }
                ],
                
                curentPath:'static/myfamily/img/'
        }      
    },
    computed:{
            //获取当前的url
            curentUrl(){
            return  `static/myfamily/${this.goodId !=="default" ?this.url.filter(item=>{return item.index==this.goodId; })[0].url : 'json/default.json'}`;
            }
           
           

    },
    mounted(){
      Msg.$on("val",(m)=>{
          this.goodId=m;
      })
    }
    
}
</script>