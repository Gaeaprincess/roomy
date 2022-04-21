<script>
	import utils from './util/util.js'
	export default {
		globalData:{
			saying:[],
      date:''
		},
		onLaunch() {
			this.setLoginDays()
		},
		onShow(){	
		},
		onHide(){
		},
		methods:{
			// 获取用户登录天数
			setLoginDays(){
				let day=utils.getTime()
				let today=day.slice(-2)
				uni.setStorageSync('date',day)
				uni.setStorageSync('day',1)
				let preDate=uni.getStorageSync('date')
				let loginDays=Number(uni.getStorageSync('day'))
				// 每日代办
				let todayList=uni.getStorageSync('data').dailyItem
				// 每月代办
				let MonthList=uni.getStorageSync('monthList')
				if(day!=preDate){
					// 过了一天
					loginDays+=1;
					uni.setStorageSync('day',loginDays)
					if(!todayList){
						return;
					}
					// 今日代办数据总时长
					let todayTotalTime=0
					todayList.forEach((item)=>{
						todayTotalTime+=Number(item.value)
					})
					if(!MonthList){
						// 没有月代表数据
						let monthData={};
						let categories=[]
						let data=[]
						categories.push(today)
						data.push(todayTotalTime)
						let series=[{data:data}]
						monthData.categories=categories
						monthData.series=series
						
						debugger;
						uni.setStorageSync('monthList',monthData)
					}
					// 有月代办
					MonthList.categories.push(today)
					MonthList.series[0].data.push(todayTotalTime)
					uni.clearStorage('data')
					
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
