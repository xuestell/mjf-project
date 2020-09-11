const UserIndex = ()=>import('@/views/IndexTemplate');
const UserList = ()=>import('@/views/User/UserList');
const AddUser = ()=>import('@/views/User/AddUser');
const EditUser = ()=>import('@/views/User/EditUser');
const UserManagement = [
	{
		path: '/',
		name: 'UserIndex',
		component: UserIndex,
		children: [
			{
				path: '/userList',
				name: 'UserList',
				component: UserList,
			},
			{
				path: '/addUser',
				name: 'AddUser',
				component: AddUser

			},
			{
				path: '/editUser',
				name: 'EditUser',
				component: EditUser

			}
		]
	},
];

export default UserManagement;