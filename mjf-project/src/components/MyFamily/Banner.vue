<template>
    <div class="banner"  >
        <div class="prev" @click="handlePrev" @mouseout="autoPlay()"  @mouseover="clearHandle">{{bannerList.prev}}</div>
             <img :src="src">
        <div class="next" @click="handleNext" @mouseout="autoPlay()"  @mouseover="clearHandle" >{{bannerList.next}}</div>
    </div>
</template>
<script>
export default {
     data(){
        return {
        }
    },
    props:{
        bannerList:{
            type:Object,
            defaullt:()=>({
                n:0,
                prev:'<',
                next:'>',
                currrentPath:"static/myfamily/img/banner/",
                imgList:['banner0.png','banner1.png','banner2.png','banner3.png'],
                setId:null,  
            })
        }

    },
    computed:{
        src(){
            return `${this.bannerList.currrentPath}${this.bannerList.imgList[this.bannerList.n]}`
        }
    },
    methods:{
        //向前翻
        handlePrev(){
            if(this.bannerList.n==0){
                this.bannerList.n=3;
            }else{
                this.bannerList.n--;
            }
        },
        //向后翻
        handleNext(){
            if(this.bannerList.n==3){
                this.bannerList.n=0;
            }else{
                this.bannerList.n++;
            }
        },
        //自动播放
        autoPlay(){
            if(!this.bannerList.setId){
                this.bannerList.setId=setInterval(()=>{
                    this.handleNext();
                },3000);
            }
        },
       clearHandle(){
           clearInterval(this.bannerList.setId);
           this.bannerList.setId=null;
       }
    },
    mounted(){
        this.autoPlay();
      
    }
}
</script>
<style lang="scss" scoped>
.banner{
    position: relative;
    .prev,.next{
        width: 30px;
        height: 60px;
        background: rgba(0,0,0,0.3);
        line-height: 60px;
        font-size: 30px;
        color:#fff;
        position: absolute;
        top:140px;
        text-align: center;
        font-family: '宋体';
        cursor: pointer;
    }
    .prev{
        border-top-right-radius:15px;
        border-bottom-right-radius:15px;
        left:0;
    }
    .next{
        border-top-left-radius:15px;
        border-bottom-left-radius:15px;
        right: 0;
    }
}

</style>