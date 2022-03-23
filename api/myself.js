import request from "../util/request.js"
const id = uni.getStorageSync('id')
//
// export default  导出一个对象 里面可以写很多方法 其他地方引入的话比较方便
export default {
	// 获取用户当前数据
	getUserInfo(){
		let id=uni.getStorageSync('id')
		return request({
			url:`/v1/user/${id}`,
			method:'get'
		})
	},
	//
}
