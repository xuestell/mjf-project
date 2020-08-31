<template>
    <div>
        <ul class="img-list">
            <li v-for ="(goods,idx) in imgList" :key= idx >
                <img :src="`${curentPath}${goods.img}`">
                <p>{{goods.name}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'imgList',
    data(){
        return {
            imgList:[] ,
        }
    },
    props:{
        goodId:{
            type:[Number,String],
        },
        url:{
            type:Array,
            default:()=>[]
        },
        curentUrl:{
            type:String,
            default:''
        },
       curentPath:{
           type:String,
           default:'',
       }
    },
    computed:{
    },
    methods:{
        showImg(){
            this.$axios.get(this.curentUrl).then((res)=>{
                this.imgList=res.data;
            })
        }
    },
    mounted(){
        //默认进来触发接口
        this.showImg();

    },
    watch:{
        goodId(){
            //当导航发生切换再次触发接口
            this.showImg();
        }
    }
    
}
</script>
<style lang="scss" scoped>
.img-list{
    display:flex;
    //两端对齐
    justify-content: space-between;
    //换行
    flex-wrap: wrap;

    li{
        list-style: none;
        width:240px;
        margin-right: 10px;
     
        p{
            line-height: 30px;
        }
        img{
            width:100%;   
        }
        &:nth-child(5n){
            margin-right: 0;
        }
    }

    &::after{
        content:'';
        flex:auto;
    }
}



</style>