const MyFamily=()=>import('@/views/components/test/MyFamily.vue')
const LeftNav=()=>import('@/components/MyFamily/Left.vue')
export default [
    {
        path:'/myFamily',
        name:'MyFamily',
        component:MyFamily,
    },
    {
        path:'/leftNav',
        name:'LeftNav',
        component:LeftNav,

    }

]