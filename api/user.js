import request from "@/util/request.js"

export default{
	//微信注册登录
	loginByWeixin:function(code){
		console.log(typeof code)
		console.log(code)
		return request({
			url:'/v1/auth/wechat',
			method:'post',
			data:{
				code
			}
		})
	},
	
}