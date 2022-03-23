<template>
	<view class="wrap">
		<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="button"
			activeColor="#F5D04B"></uni-segmented-control>
		<view class="content">
			<view v-if="current ===0">
				<!-- 代办页 -->
				<view class="header">
					<view class="first-line">
						<text class="info">更加专注的学习模式</text>
						<view class="iconfont icon-jia" @click.prevent="addToDo"></view>
					</view>
					<view>本月已连续专注{{item.totalTimes}}天</view>
				</view>
				<!-- 代办列表 -->
				<view class="toDoBox">
					<view class="toDoItem" v-for="item in toDOList" :key="item.id">
						<uni-swipe-action autoClose=true>
							<uni-swipe-action-item>
								<view class="frist_line">
									<view>{{item.toToName}}</view>
									<view @click="gotoClock(item)">开始自习</view>
								</view>
								<view class="second_line">
									<view>{{item.toDoTime}}分钟</view>
								</view>
								<template v-slot:right>
									<view class="delet">
										<text class="iconfont icon-lajitong"
											@click="deletToDo(item.id)">
										</text>
									</view>
								</template>
							</uni-swipe-action-item>
						</uni-swipe-action>
					</view>
					<!-- 添加代办对话框 -->
					<view v-if="isShowToDo" class="ToDobox">
						<view class="masking" v-if="showMasking">
						</view>
						<view class="model-wraper">
							<view class="title">
								<text>添加代办</text>
								<view class="icon">
									<view class="iconfont icon-chenggong" @click="addNewList"></view>
									<view class="iconfont icon-quxiao" @click="closeAddToDo"></view>
								</view>
							</view>
							<form :data="newList" class="form">
								<view class="name">
									<text>代办名称：</text>
									<input type="text" class="toDoName" v-model="newList.toToName" prop="toDoName">
								</view>
								<view class="target">
									<text style="display: block;color:#F5D04B">代办分类</text>
									<radio-group @change="radio1Change">
										<label>
											<radio value="proposal" color="#F5D04B" />达目标
										</label>
										<label>
											<radio value="custom" color="#F5D04B" />养习惯
										</label>
									</radio-group>
								</view>
								<view class="target">
									<text style="display: block;color:#F5D04B">代办时长</text>
									<radio-group @change="(e)=>radio3Change(e)">
										<label>
											<radio value="30" color="#F5D04B" />30分钟
										</label>
										<label>
											<radio value="60" color="#F5D04B" />60分钟
										</label>
										<label>
											<radio value="zidingyi" color="#F5D04B" v-if="isRefresh" />自定义
										</label>
									</radio-group>

								</view>
							</form>
						</view>
					</view>
				</view>

			</view>
<!--     日 -->
			<view v-if="current === 1">
				<text class="head">累计学习时长:<text>{{studyTime?studyTime:0}}</text>小时</text>
				<view class="report-wrap">
					<ms-tabs :list="list" v-model="current1" lineColor="#F5D04B" itemColor="#F5D04B"></ms-tabs>
					<view v-show="current1===0">
						<view class="time-box normal">
							<text>累计学习时长</text>
							<view class="charts-box">
								<qiun-data-charts type="arcbar" :chartData="dailyData" background="none"
									:opts="{'title':dailyTitle}" />
							</view>

						</view>
						<view class="classify normal">
							<text>学习版块分布</text>
							<!-- <chart-b :current="current1"></chart-b> -->
							<view class="weekly-chart">
								<qiun-data-charts type="pie" :chartData="dailyAnalyse" background="none"
									tooltipFormat='tooltipDemo2' />
							</view>
						</view>
					</view>
<!--         月 -->
					<view v-show="current1===1">
						<view class="time-box normal">
							<text>累计学习时长</text>
							<!-- <chart-c :current="current1" :toDoTime="toDoTime" :totalTime="totalTime"></chart-c> -->
							<view class="charts-box">
								<qiun-data-charts type="arcbar" :chartData="weeklyData" :reshow="current1===1" :opts="{'title':weeklyTitle}"/>
							</view>

						</view>
						<view class="classify normal">
							<text>学习时间分布</text>
							<!-- <chart-d :current="current1"></chart-d> -->
							<view class="weekly-chart" >
								<qiun-data-charts type="line" :chartData="weeklyAnalyse" background="none"
									tooltipFormat='tooltipDemo1' :reshow="current1===1" />
							</view>

						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 设置时间弹出层 -->
		<view v-if="timeSetting" class="popupBox">
			<view class="masking2" v-if="showMasking2">
				<view class="inputWrap">
					<view class="title"><text>自定义时间</text></view>
					<label>
						<text class="btn-left btn" @click="subtract">-</text><text>{{toDoTime}}分钟</text><text
							class="btn-right btn" @click="add">+</text>
					</label>
					<view class="btm-btn">
						<button @click="close" class="frist-btn">取消</button>
						<button type="default" class="second-Btn" @click="saveTime">确定</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import xueba from './xueba.js'
	export default {
		...xueba
	}
</script>
<style lang="scss" scoped>
	@import "./xueba.scss";
</style>
