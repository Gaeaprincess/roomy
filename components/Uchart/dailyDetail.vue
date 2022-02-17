<style lang='less' scoped>
	#template {}
	.weekly-chart{
		width: 100%;
		height:450rpx;
	}
</style>
<template>
	<view id="template">
		<view class="weekly-chart">
			<qiun-data-charts type="pie" :chartData="dailyAnalyse" background="none"
				tooltipFormat='tooltipDemo2' :reshow="current===0"/>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				// 饼状图数据 日
				dailyAnalyse: {
					"series": [{
						"data": [{
								"name": "高数复习",
								"value": 50
							},
							{
								"name": "考研单词",
								"value": 30
							},
							{
								"name": "听力",
								"value": 20
							},
							{
								"name": "算法",
								"value": 40
							}
						]
					}]
				},
			}
		},
		methods: {
			
		},
		props:['current'],
		mounted() {}
	}
</script>
