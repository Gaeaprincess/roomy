<template>
	<view class="">
		<view class="top">
			<view :class=left @click="change1" id="left">
				消息
			</view>
			<view :class=right @click="change2" id="right">
				联系人
			</view>
		</view>
		<uni-list v-show="flag1">
			<uni-list :border="true">
				<uni-list-chat title="张艳霞"  :avatar-circle="true" avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png" note="您收到一条新的消息" time="2020-02-02 20:20" badge-text="12"></uni-list-chat>
				<uni-list-chat title="文艺单"  :avatar-circle="true" avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png" note="吃什么" time="2020-02-02 20:20" badge-text="10"></uni-list-chat>
				<uni-list-chat title="张飞"  :avatar-circle="true" avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png" note="您好" time="2020-02-02 20:20" ></uni-list-chat>
			</uni-list>
		</uni-list>
		<uni-list v-show="flag2">
			<uni-list :border="true">
				<uni-list-chat title="张艳霞"  :avatar-circle="true" avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"></uni-list-chat>
				<uni-list-chat title="文艺丹"  :avatar-circle="true" avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"></uni-list-chat>
			</uni-list>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				flag1:true,
				flag2:false,
				left:"left",
				right:" "
			}
		},
		methods: {
			change1(){
				this.flag1=true
				this.flag2=false
				// let a =document.getElementsByClassName("left");
				// a.setAttribute("class","left1");
				this.left="left"
				this.right=" "
			},
			change2(){
				this.flag2=true
				this.flag1=false
				this.left=" "
				this.right="right"
			},
		}
	}
</script>

<style scoped>
	*{
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}
	page{
		background-color: #F1F1F1;
	}
	#left{
		height: 30rpx;
		width: 80rpx;
		border-top-left-radius: 25rpx;
		border-bottom-left-radius: 25rpx;
		border-style: solid;
		border-width: thin;
	}
	#right{
		height: 30rpx;
		width: 80rpx;
		border-top-right-radius: 25rpx;
		border-bottom-right-radius: 25rpx;
		border-style: solid;
		border-width: thin;
	}
	#left,#right{
		line-height: 30rpx;
		border-color: #F5D04B;
		background-color: #F5D04B;
		font-size: 14rpx;
		display: inline-block;
	}
	.top{
		text-align: center;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
	}
	#left.left{
		background-color: white;
	}
	#right.right{
		background-color: white;
	}
</style>
