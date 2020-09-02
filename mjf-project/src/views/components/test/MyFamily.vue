<template>
 <page-factory>
    <div class="main">
        <div class="left">
            <nav-left :items="navList" :is-show="true" :default-li="defaultLi"></nav-left>
        </div>
        <div class="right">
            <div class="top">
               <banner :banner-list="bannerList" ></banner>
            </div>
            <div class="bottom">
              <right></right>
            </div>
        </div>
    </div>
 </page-factory>
</template>
<script>
import Banner from '@/components/MyFamily/Banner'
import Right from '@/components/MyFamily/Right'

export default {
    //注册组件
    components:{
        Banner,
        Right
    },
    data(){
        return {
            //左侧导航
            navList:[
            {index:0,text:'我'},
            {index:1,text:'小峰'},
            {index:2,text:'徐妈'},
            {index:3,text:'徐爸'},
            {index:4,text:'徐二姐'},
            {index:5,text:'徐三哥'},
            {index:6,text:'徐大哥'},
            ],
            defaultLi:'default',
            //中间banner的左右轮播
            bannerList:{
                n:0,
                prev:'<',
                next:'>',
                currrentPath:"static/myfamily/img/banner/",
                imgList:['banner0.png','banner1.png','banner2.png','banner3.png'],
                setId:null
            }
        }    
    }
    
}
</script>
<style>
*{
    margin:0;
    padding:0;
}
.main{
    width:1366px;
    margin: 20px auto;
    background:#ff572226;
    display: flex;
    text-align: center;
}
.left{
    width: 100px;
    margin-right: 10px;
}

.right{
    flex:1;
    /* background: blue; */
}
.bottom{
    margin:10px 0;
}
.top img{
    width: 100%;
}
</style>