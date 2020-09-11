<template>
    <div class="wrapper">
        <top></top>
        <el-container class="main">
            <el-aside width="200px">
                <el-menu>
                    <el-submenu index="1">
                        <template slot="title">用户管理</template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1"><router-link to="/userList">查看用户列表</router-link></el-menu-item>
                            <el-menu-item index="1-2"><router-link to="/addUser">新增用户</router-link></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <div class="content">
            <router-view></router-view>
            </div>
        </el-container>
        <bottom></bottom>
    </div>
</template>
<script>
import Top from '@/views/Top/Top'
import Bottom from '@/views/Bottom/Bottom'
export default {
    name:'IndexTemplate',
    components:{
        Top,
        Bottom,
    }
}
</script>
<style lang="scss" scoped>
.content{
    margin-left:30px;
    width: 100%;
}

</style>