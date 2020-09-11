// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入全局重置的样式
import '@/assets/common.css';
//引入全局注册组件
import './components/GlobalComponents';
//全局导入axios
import axios from 'axios';


Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);


/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>',
});
