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
			// 测试登录
			test(){
				let jwt='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
				uni.setStorageSync('Authorization',jwt)
				// 存储用户id
				uni.setStorageSync('id',1)
				uni.navigateTo({
					url: '../index/index'
				})
			},
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
				uni.login({
					provider: 'weixin',
					onlyAuthorize:true,
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
				let code=this.code
				if(uni.getUserProfile){
					uni.getUserProfile({
						desc:'获取用户的基本信息',
						success:res=>{
							// 授权成功
							userAPI.loginByWeixin(code).then(res=>{
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
