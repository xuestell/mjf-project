import Vue from 'vue';
import Router from 'vue-router';
//加载PageJump模块
import PageJump from './pageJump';
//加载MyFamily模块
import MyFamily from './myFamily';
//引入用户管理模块
import UserManagement from './userIndex';


//异步加载带表格的页面
const NavMenu = ()=> import('@/components/TableList/NavMenu');
const Login = ()=>import('@/views/components/AccountLogin/NormalLogin');
const PhoneLogin = ()=>import('@/views/components/AccountLogin/PhoneLogin');
Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
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
		//左侧菜单导航组件
		{
			path: '/navMenu',
			name: 'NavMenu',
			component: NavMenu,
		},
		// PageJump模块
		...PageJump,
		//myFamily模块
		...MyFamily,
		//用户管理
		...UserManagement
	]
});
