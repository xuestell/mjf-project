<template>
    <el-form-item :label="item.label" :prop="item.key" :class="{'align-left':item.type==='date'}">
        <el-input v-if="item.type==='input'"
        :disabled="item.disabled"
        v-model="value[item.key]"
        :type="item.subType"></el-input>
        <el-date-picker 
        v-else-if="item.type==='date'" 
        v-model="value[item.key]"
        type="datetime"
        placeholder="选择日期时间">
        </el-date-picker>
        <span v-else>
            其他类型控件
        </span>
    </el-form-item>
</template>
<script>

export default {
    data(){
        return {

        }
    },
    props:{
        item:{
            type:Object,
            default:()=>({})
        },
        value:{
            type:Object,
            default:()=>({})
        },

    }
    
}
</script>
<style scoped>

</style>