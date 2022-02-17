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
				//  微信用户的oppenid
				oppenid: '',
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
						let code = res.code;
						uni.request({
							method: 'get',
							url: `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`,
							success:res=>{
								console.log(res.data.openid)
								this.user.oppenid = res.data.openid;
							},
							fail:err=>{
								console.log(err)
							}
						})
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
							this.user.nickname=res.userInfo.nickName;
							this.user.gendar=res.userInfo.gendar;
							this.user.avatarUrl=res.userInfo.avatarUrl;
							this.user.oppenid=res.userInfo.oppenid;
							this.$https({
								url:'/api/login',
								method:'post',
								data:this.user
							}).then(res=>{
								console.log(res)
								
							}).catch(err=>{
								console.log(err)
							})
							uni.reLaunch({
								url: '/pages/index/index'
							})
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
