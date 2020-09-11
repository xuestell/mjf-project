const handle = {
	methods: {
		//表格
		getTableInfo(url){ 
			this.$axios.get(url).then((res)=>{
				//如果没有数据就终止
				if (!res.data || !res.data.length){
					return;
				}
				let data = res.data;
				//获取表格数据
				//this.tableData.push(...data); 
				//获取添加的数据 
				this.tableData.push(...(JSON.parse(localStorage.getItem('arr'))));
			}).catch((err)=>{
				console.log(err);
			});
		},
	}
};
export {
	handle,
};

