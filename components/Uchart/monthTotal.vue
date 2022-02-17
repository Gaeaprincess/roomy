<style lang='less' scoped>
.charts-box{
	  width: 100%;
	  height:300rpx;
	}
</style>
<template>
	<!-- 每月环形数据统计 -->
    <view id="template">
		<view class="charts-box">
			<qiun-data-charts type="arcbar" :chartData="weeklyData" :reshow="current===1" :opts="{weeklyTitle}" background="none"/>
		</view>
    </view>
</template>
<script>
export default {
   data() {
      return {
		// 环形图提示性文字 周
		weeklyTitle: {
			// name是Strig类型
			"name":"120",
			"fontSize": 25,
			"fontWeight":800,
			"color": "#58C9B9",
			"offsetX": 0,
			"offsetY": -5
		},
		// 环形统计图 周
		weeklyData: {
			"series": [{
				"data": 1,
				"color": "#F5D04B"
			}]
		},
      }
   },
   created(){
	   this.setDaliyTime()
	   // console.log(this.weeklyTitle)
   },
   methods:{
	setDaliyTime(){
		this.$set(this.weeklyTitle,"name",this.totalTime+"")
	}
   },
   props:['current','totalTime'],
   mounted() {
   }
}
</script>
