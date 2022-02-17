	export default {
		data() {
			return {
				// 是否用验证码登录
				isVerification:false,
				// 密码框是否可见
				isShowPWD:false,
				// 按钮的样式
				//用户登录的信息
				userMsg:{
					account:'',
					password:'',
					phone:'',
					code:''
				},
				// 用户和密码登录按钮的禁用
				isFinished:false,
				// 验证码登录按钮禁用''
				isComplete:false,
				// 跳转页面所带参数
				editItem:{
					isRegister:false,
				},
				// 是否填写手机号码
				isSend:false,
				
				
			}
		},
		methods: {
			verification(){
				this.isVerification=false;
			},
			toggleIcon(){
				this.isShowPWD= !this.isShowPWD;
			},
			//监听输入框的blur事件
			isFinish(){
				// console.log(this);
				if(this.userMsg.account!==''&& this.userMsg.password!==''){
					this.isFinished=true;
				}else{
					this.isFinished=false;
				}
				//验证码登录监听输入框
				if(this.userMsg.phone!==''&& this.userMsg.code!=''){
					this.isComplete=true;
				}else{
					this.isComplete=false;
				}
				if(this.userMsg.phone!==''){
					this.isSend=true
				}else{
					this.isSend=false
				}
			},
			// 显示使用验证码登录的盒子
			showVerificationBox(){
				this.isVerification=true;
			},
			// 注册
			goToRegister(){
				// console.log(this)
				this.editItem.isRegister=true;
				uni.navigateTo({
					url:'../register/register?indexeditItem='+encodeURIComponent(JSON.stringify(this.editItem))
					// url:'../register/register'
				})
			},
			// 跳转到忘记密码页面
			findPass(){
				// console.log("a")
				this.$set(this.editItem,'isRegister',false);
				uni.navigateTo({
					url:'../register/register?indexeditItem='+encodeURIComponent(JSON.stringify(this.editItem))
				})
			},
		}
	}
