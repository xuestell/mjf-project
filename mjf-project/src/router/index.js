import Vue from 'vue';
import Router from 'vue-router';
//引入table组件
import TableInfo from '@/components/TableList/TableInfo';
//引入模板首页
import Home from '@/views/Index';
//加载PageJump模块
import PageJump from './pageJump'
//加载MyFamily模块
import MyFamily from './myFamily'
//异步加载带表格的页面
const AddItem=()=> import('@/views/components/TableList/AddItem')
const NavMenu=()=> import('@/components/TableList/NavMenu')
const Login= ()=>import('@/views/components/AccountLogin/NormalLogin');
const PhoneLogin= ()=>import('@/views/components/AccountLogin/PhoneLogin');
Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    //首页
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    //普通登录
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    //手机号登录
    {
      path: '/phoneLogin',
      name: 'PhoneLogin',
      component: PhoneLogin,
    },
    //table列表组件
    {
      path: '/tableInfo',
      name: 'TableInfo',
      component: TableInfo,
    },
    //给table添加数据组件
    {
      path: '/addItem',
      name: 'AddItem',
      component: AddItem,
    },
    //左侧菜单导航组件
    {
      path: '/navMenu',
      name: 'NavMenu',
      component: NavMenu,
    },


   // 嵌入页面的PageJump模块，动态配置
    ...PageJump,
    //嵌入页面的 myFamily模块，动态配置
    ...MyFamily,
  ]
})
