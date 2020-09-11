import Vue from 'vue';
//所有模板页面
import PageFactory from '../PageFactory';
//首页页面
import Index from '@/views/Index';
//全局回到顶部
import BackToTop from '../BackToTop/BackToTop';
//全局表格组件
import TableInfo from '@/components/TableList/TableInfo';
//全局普通登录组件
const Login = ()=>import('@/components/AccountLogin/Login');
//全局手机验证码登录组件
const PhoneLogin = ()=>import('@/components/AccountLogin/PhoneLogin');
const AddItem = ()=> import('@/components/TableList/AddItem');
const NavMenu = ()=> import('@/components/TableList/NavMenu');
const CustomForm = ()=>import('@/components/Form/CustomForm');


//导入左侧导航
import NavLeft from '@/components/MyFamily/Left';

Vue.component('PageFactory',PageFactory);
Vue.component('Index',Index);
Vue.component('BackToTop',BackToTop);
Vue.component('TableInfo',TableInfo);
Vue.component('NavLeft',NavLeft);
Vue.component('Login',Login);
Vue.component('PhoneLogin',PhoneLogin);
Vue.component('AddItem',AddItem);
Vue.component('NavMenu',NavMenu);
Vue.component('CustomForm',CustomForm);