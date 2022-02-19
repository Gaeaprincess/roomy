import  userAPI from "@/api/user.js"
export default {
		data() {
			return {
				//  单选框
				item: {
					isChecked: false
				},
				// 两种登录方式的显示和隐藏
				toogle: {
					isShowIndex: true,
					isShowAuthorization: true
				},
				//  微信用户的code
				code: '',
				user:{
					nickname:'',
					gendar:0,
					avatarUrl:''
				}

			}
		},
		methods: {
			// 控制按钮状态
			checkBox(e, item) {
				item.checked = !item.checked;
				if (item.checked) {
					this.$set(item, "isChecked", true)
				} else {
					this.$set(item, "isChecked", false)
				}
			},
			// 登录方法，页面加载时调用
			login() {
				let secret = 'be89422ff9379e3e35c39679a3d13128'
				let appid = 'wx94b8661d033f6623'
				uni.login({
					provider: 'weixin',
					success: res => {
						 this.code = res.code;
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
			// 微信授权登录
			Authorization() {
				// uni.getUserProfile  判断是否支持这个
				if(uni.getUserProfile){
					uni.getUserProfile({
						desc:'获取基本的用户信息',
						success:res=>{
							// 授权成功
							userAPI.loginByWeixin(this.code).then(res=>{
								console.log(res)
							}).catch(err=>{
								console.log(err)
							}
							)
						},
						fail:err=>{
							console.log(err)
						}
					})
				}
			
			},
			//手机登录
			phoneLogin() {
				uni.navigateTo({
					url: '../phoneLogin/phoneLogin'
				})
			},

		},
		onLoad() {
			this.login();
			this.item.isChecked = false;
		},
		onShow() {

		}
	}
