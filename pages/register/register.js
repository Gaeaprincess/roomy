import  userAPI from "@/api/user.js"
export default {
		data() {
			return {
				//是否是需要使用注册功能
				isRegister:true,
				// 根据传递的参数显示不同标题
				title:"注册",
				// 动态切换登录界面
				isShowVeify:true,
				//密码错误显示提示框
				isShowPrompt:false,
				// 是否正确输入验证码并且填写手机号码
				isFinsh:false,
				// 用户手机号码和验证码数据对象
				userInfo:{
					phone:'',
					verification:'',
					password:'',
					rePWd:''
				},
				// 发送验证码按钮是否禁用
				isSend:false,
				// 完成按钮的禁用
				isSure:false,
				//是找回密码还是注册
				editItem:{

				},
			}
		},
		methods: {
			// 发送手机验证码
			sendCode(){
				userAPI.getPhoneCode(this.userInfo.phone).then(res=>{
					if(res.code===200){
						uni.showToast({
							title: '发送成功，请注意查收',
							duration: 2000
						});
						console.log(res.data.msg);
					}
				}).catch(err=>err)
			},
			// 监听手机号输入
			watchPhone(e){
				if(e.detail.value.length===11){
					this.isSend=true
				}
			},
			//监听验证码输入
			watchCode(e){
				if(e.detail.value.length===4){
					this.isComplete=true
				}
			},
			// 手机号码和验证码完整无误
			checkFinsh(){
				//判断手机号码和验证码是否完整
				if(this.userInfo.phone!==''&&this.userInfo.verification!=''){
					this.isFinsh=true;
				}else{
					this.isFinsh=false;
				}
				// 发送验证码按钮是否可以用
				if(this.userInfo.phone!==''){
					this.isSend=true;
				}else{
					this.isSend=false
				}
			},
			// 设置新密码输入框监听事件
			checkPWd(){
				let pss=this.userInfo.password;
				let rePas=this.userInfo.rePWd;
				if(pss!=''&&rePas!='' ){
					if(pss===rePas){
						this.isShowPrompt=false;
						this.isSure=true;
					}else{
						this.isShowPrompt=true;
						this.isSure=false;
					}
				}else{
					this.isShowPrompt=false;
				}
			},

			//下一步按钮
			setpwd(){
				this.isShowVeify=false;
			}
		},
		onLoad(option){
			 const editItem = JSON.parse(decodeURIComponent(option.indexeditItem));
			this.editItem=editItem;
			// console.log(this.editItem);
		}

	}
