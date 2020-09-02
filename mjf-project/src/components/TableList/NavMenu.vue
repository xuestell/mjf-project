<template>
    <div class="nav-list">
        <el-menu 
        @open="handleOpen"
        @close="handleClose" 
        @select="handleSelect"
         background-color="#545c64"
         text-color="#fff"
         active-text-color="#ffd04b"
         :default-active="current"
        >
            <el-submenu v-for="(item,index) in navList" :key="item+index" :index=item.index>
                <template slot="title">
                    <!-- <i class="el-icon-location"></i> -->
                    <p>{{item.label}}</p>
                </template>
                <el-menu-item v-for="(citem,cindex) in item.children" :key="citem+cindex" :index=citem.index>{{citem.label}}</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
export default {
    data(){
        return {
             
        }  
        },
        props:{
            navList:{
                type:Array,
                default:()=>[]
            },
            current:{
                type:String,
                default:'1-2'
            }

        },
    methods:{
        handleClick(data,ite){
            switch(data){
                case 'query':
                this.$emit('queryItem',ite);
                break;
                case 'add':
                this.$emit('addItem',ite);
                break;
                default:
                 console.log('');
            }
        },
        // subMenu 打开时的回调
        handleOpen(key,keyPath){
            //console.log(key,keyPath);

        },
        // subMenu 关闭时的回调
        handleClose(key,keyPath){
            //console.log(key,keyPath);

        },
        //subMenu 选中时的回调 (只能一层children)
        handleSelect(key,keyPath){
            let arr = this.navList;
            arr.forEach((item)=>{
                item.children.forEach((ite)=>{
                    //找到选中值的obj
                    if(ite.index==key){
                        this.handleClick(ite.type,ite);
                    }
                }) 
            })
        }
    }
    
}
</script>
<style  lang="scss">

</style>