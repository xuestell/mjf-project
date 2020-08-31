import Vue from 'vue';
import Router from 'vue-router';
//引入table组件
import ElFilterTable from '@/components/TableList/ElFilterTable';
//引入模板首页
import Home from '@/views/Index';
//加载PageJump模块
import PageJump from './pageJump'
//加载MyFamily模块
import MyFamily from './myFamily'
//异步加载带表格的页面
const PageTable=()=>import('@/views/components/InfoTable')
import AccoutLogin from './login'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    //加载单个table组件
    {
      path: '/table',
      name: 'elfiltertable',
      component: ElFilterTable,
    },
    {
      path: '/pageTable',
      name: 'PageTable',
      component: PageTable,
    },
   // 嵌入页面的PageJump模块，动态配置
    ...PageJump,
    //嵌入页面的 myFamily模块，动态配置
    ...MyFamily,
    //登录界面
    ...AccoutLogin,
  ]
})
