<script>
	export default {
		globalData:{
			saying:[],
      date:''
		},
		onLaunch() {
      this.setDate()
		},
		onShow(){
			this.upDateDays()
		},
		onHide(){
		},
		methods:{
			// 打开页面的名言获取 调用次数有限 所以暂时用第一次返回的数据
			async getSaying(){
				await uni.request({
					url:"http://api.tianapi.com/txapi/lzmy/index",
					data:{
						key : '3bee6aa2c2aab72c85860906e5907f71',
						num:1
					},
					fail:(res)=>{
						return uni.showToast({
							icon:"none",
							title:"调用接口失败"
						});
					},
					success:(res)=>{
						if(res.data.code!=200){
							return uni.showToast({
								title: '获取数据失败'
							});
						}
						this.$options.globalData.saying=res.data.newslist;
					}
				});
			},
			// 获取用户登录天数
      upDateDays(){
        let time=new Date()
        uni.setStorageSync('date',time)
        uni.setStorageSync('days',1)
      },
      setDate(){
        let time=new Date()
        this.date=uni.getStorageSync('date')
        if(time!==this.date){
          let days=uni.getStorageSync('days')
          uni.setStorageSync('days',days+1)
        }
      }
		}
	}
</script>

<style lang="scss">
	@import "./static/font/iconfont.css";
	@import url("./global.css")
	/*每个页面公共css */
</style>
