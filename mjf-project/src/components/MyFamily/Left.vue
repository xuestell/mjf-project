<template>
    <div class="nav-left">
        <div class="title" @click="menu('default')" v-show="isShow">{{title}}</div>
           <ul class="menu">
               <li v-for="(item,idx) in items" :key=idx @click=menu(item.index) :class="{'actived':item.index===current}">{{item.text}}</li>
           </ul>
    </div>
</template>
<script>
import Msg from './msg.js'
export default {
    name:'AA',
    data(){
        return {
           current:'',
        }  
    },
    props:{
        items:{
            type:Array,
            default:()=>[{index:0,text:'我'},
            {index:1,text:'小峰'},
            {index:2,text:'徐妈'},
            {index:3,text:'徐爸'},
            {index:4,text:'徐二姐'},
            {index:5,text:'徐三哥'},
            {index:6,text:'徐大哥'},],
            required:true,
        },
        title:{
            type:String,
            default:'热门推荐',
        },
        isShow:false,
        // //当前选中项
        defaultLi:{
            type:[String,Number],
            default:'',
        }

    },
    watch:{
        defaultLi:{
            handler(val){
                this.current=val;
            }
        }
    },
    created(){
        this.current=this.defaultLi|| (this.items[0]||{}).index;
    },

    methods:{
        //控制高亮哪一个和传出当前index
        menu(m){
            this.current=m;
            //普通子传父
            this.$emit('my',m);
            //非父子组件传值，通过中央事件总线
            Msg.$emit('val',m)
        }
    }
    
}
</script>
<style lang="scss" scoped>
.title{
    width:100px;
    color:red;
    line-height: 60px;
    font-size:20px;
    cursor: pointer;
}
.nav-left{
    width: 100px;
}
.menu li{
    list-style: none;
    height: 50px;
    margin-bottom: 2px;
    line-height: 50px;  
    background: #fff;
    color:#f44336;
    cursor: pointer; 
}
.menu li.actived{
    background:#ff572226;

}

</style>
