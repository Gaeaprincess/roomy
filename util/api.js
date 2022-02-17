const BASE_URL='http://localhost:3000';
export const myRequest= (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+options.url,
			method:options.method || 'GET',
			data:options.data || {},
			header:options.header||{},
			success:(res)=>{
				if(res.statusCode!==200){
					// return uni.showToast({
					// 	title:"获取数据失败",
					// 	icon:'error'
					// })
				}
				resolve(res);	
				// console.log(res)
			},
			fail:(error)=>{
				uni.showToast({
					title:"调用接口失败",
					icon:'error'
				})
				reject(error);
				// console.log(error)
			}
		})
	})
}