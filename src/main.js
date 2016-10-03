import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';

__webpack_public_path__ = WEBPACK_PUBLIC_PATH;

Vue.use(VueRouter);

let router = new VueRouter({
	base: __dirname,
	routes: [
		{
			path: '/',
			name: 'home',
			component: (resolve) => {
				require(['Pages/Home'], resolve);
			}
		},

		{
			path: '/about',
			name: 'about',
			component: (resolve) => {
				require(['Pages/About'], resolve);
			}
		}
	]
});

new Vue(Vue.util.extend(
	{router}, App
)).$mount('#app');