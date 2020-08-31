import Vue from 'vue';
//所有模板页面
import PageFactory from '../PageFactory';
//全局回到顶部
import BackToTop from '../BackToTop/BackToTop'
//全局表格组件
import ElFilterTable from '@/components/TableList/ElFilterTable';
//全局普通登录组件
const Login=()=>import ('@/components/AccountLogin/Login');
//全局手机验证码登录组件
const PhoneLogin=()=>import ('@/components/AccountLogin/PhoneLogin');

//导入左侧导航
import NavLeft from '@/components/MyFamily/Left'

Vue.component('PageFactory',PageFactory);
Vue.component('BackToTop',BackToTop);
Vue.component('ElFilterTable',ElFilterTable);
Vue.component('NavLeft',NavLeft);
Vue.component('Login',Login);
Vue.component('PhoneLogin',PhoneLogin);