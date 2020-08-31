<template>
<div class="page-back-top">
<el-backtop target=".page-back-top" >
</el-backtop>
<slot></slot>
   
</div>
</template>
<script>
export default {
    name:'BackTOTop',
    
}
</script>
<style lang="scss" scoped>
.page-back-top{
    position: absolute;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    overflow-x: hidden;
}

</style>