import request from "@/util/request.js"

export default{
	//微信注册登录
	loginByWeixin:function(code){
		return request({
			url:'/v1/auth/wechat',
			method:'post',
			data:{
				code
			}
		})
	},
	// 获取验证码
	getPhoneCode:function (phoneNumber){
		return request({
			url:'/v1/auth/sendsms',
			method:'post',
			data:{
				phone:phoneNumber,
				__skip_send__:true
			}
		})
	},
	// 根据手机号注册
	registerByPhone:function (obj){
		return request({
			url:'/v1/auth/signin',
			method:'post',
			data:{
				phone:obj.phone,
				code:obj.code
			}
		})
	},
	// 通过手机号 密码登录
	loginByPhone:function (obj){
		return request({
			url:'/v1/auth/signin-password',
			method:'post',
			data:{
				phone:obj.phone,
				password:obj.password
			}
		})
	},
	// 通过手机号码，验证码登录
	loginByVerfy(obj){
		return request({
			url:'/v1/auth/signin',
			method:'post',
			data:{
				phone:obj.phone,
                verify:obj.code
			}
		})
	},
	// 获取用户当前数据
	getUserInfo(){
		return request({
			url:`/v1/user/me`,
			method:'get'
		})
	},

}
