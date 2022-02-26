import service from "@/util/request.js"
const id = uni.getStorageSync('id')
//

export default () => {
	return service({
		url:'/v1/user/' + id,
		method:'get',
		data:{}
	})
}