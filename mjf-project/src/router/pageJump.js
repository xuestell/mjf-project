//First为主页面
const First = ()=>import('@/views/components/test/First.vue');
const A = () =>import('@/components/PageJump/A.vue');
const B = () =>import('@/components/PageJump/B.vue');
const A1 = () =>import('@/components/PageJump/A1.vue');

export default [
	{
		path: '/first',
		name: 'First',
		component: First,
		children: [
			{
				path: '/a',
				name: 'A',
				component: A
			},
			{
				path: '/a1',
				name: 'A1',
				component: A1
			},
			{
				path: '/b',
				name: 'B',
				component: B
			},
		]
	},
];

