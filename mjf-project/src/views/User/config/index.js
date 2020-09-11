//查询表头label
const headColumns = [
	{
		prop: 's0',
		label: '服务器编号',
	},
	{
		prop: 'stype',
		label: '服务器类型',
	},
	{
		prop: 'sip',
		label: '服务器ip'
	},
	{
		prop: 'sdate',
		label: '服务器时间'
	}
  
  
];
//添加 label
const newItem = [
	{
		label: '服务器编号',
		type: 'input',
		value: '',
		key: 's0',
		subType: 'text',
		disabled: false
	},
	{
		label: '服务器类型',
		type: 'input',
		value: '',
		key: 'stype',
		subType: 'text',
		disabled: false
	},
	{
		label: '服务器ip',
		type: 'input',
		value: '',
		key: 'sip',
		subType: 'text',
		disabled: false
	},
	{
		label: '服务器时间',
		type: 'date',
		value: '',
		key: 'sdate',
	}
];
// 添加的value
const value = {
	s0: '',
	stype: '',
	sip: '',
	sdate: ''
};


//编辑的editItem
const editItem = [
	{
		label: '服务器编号',
		type: 'input',
		value: '',
		key: 's0',
		subType: 'text',
		
		disabled: true
	},
	{
		label: '服务器类型',
		type: 'input',
		value: '',
		key: 'stype',
		
		subType: 'text',
		disabled: false
	},
	{
		label: '服务器ip',
		type: 'input',
		value: '',
		key: 'sip',
		
		subType: 'text',
		disabled: false
	},
	{
		label: '服务器时间',
		type: 'date',
		value: '',
		key: 'sdate',
		
	}
];


export {headColumns,newItem,value,editItem};