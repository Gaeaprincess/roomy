<template>
	<view>
		<view class="charts-box">
		 <qiun-data-charts
		    type="arcbar"
			:opts="{title}"
		    :chartData="chartData"
		    background="none"
			:reshow="current===0"
		  />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				chartData:{
				  "series": [
				          {
				              "name": "正确率",
				              "data": 1,
				              "color": "#F5D04B"
				          }
				      ]	 
				},
				
				test:20,
				// 环形图的数据
				  title: {
					  // name是Strig类型
				        "fontSize": 25,
						"fontWeight":800,
				        "color": "#58C9B9",
				        "offsetX": 0,
				        "offsetY": -5
				    },
			}
		},
		props:['current','toDoTime','totalTime'],
		created() {
			this.setDaliyTime()
			// console.log(this.title)
		},
		methods: {
			setDaliyTime(){
				let data=0;
				if(this.current===0){
					data=this.toDoTime
				}else{
					data=this.totalTime
				}
				this.$set(this.title,"name",data+"")
			}
		}
	}
</script>

<style scoped>
.charts-box{
	  width: 100%;
	  height:300rpx;
	}
</style>
