<style lang='less' scoped>
#template{

}
.weekly-chart{
		width: 100%;
		height:450rpx;
	}
</style>
<template>
    <view id="template">
		<view class="weekly-chart">
			<qiun-data-charts type="line" :chartData="weeklyAnalyse" background="none"
				tooltipFormat='tooltipDemo1' :reshow="current===1"/>
		</view>
    </view>
</template>
<script>
export default {
   data() {
      return {
		// 折线统计图数据  周
		weeklyAnalyse: {
			"categories": [
				"10.1",
				"10.2",
				"10.3",
				"10.4",
				"10.5",
				"10.6",
				"10.7"
			],
			"series": [{
				"data": [
					35,
					8,
					25,
					37,
					0,
					20
				]
			}]
		}
		
      }
   },
   methods:{

   },
   props:['current'],
   mounted() {
   }
}
</script>