<template>
	<view class="wrap">
		<!-- 注册和改密码都用一个页面 -->
		<view class="index">
			<text class="title">{{editItem.isRegister==true?'注册':"找回密码"}}</text>
			<image src="../../static/logo.png" mode=""></image>
			<text class="title">智慧无人自习室</text>
		</view>
		<!-- 获取验证码 -->
		<view class="verification" v-show="isShowVeify">
			<view class="frist-line">
				<input type="text" placeholder="输入手机号:" @blur="checkFinsh" v-model="userInfo.phone" @input="watchPhone">
			</view>
			<view class="second-line">
				<input type="text" placeholder="输入验证码:" @blur="checkFinsh" v-model="userInfo.verification" @input="watchCode"/>
				<button :disabled="!isSend" :class="isSend==true?'active':''" @click="sendCode">获取验证码</button>
			</view>
			<view class="thrid-line">
				<button class="next-step" @click="setpwd" :disabled="!isFinsh" :class="isFinsh==true ?'active':''">下一步</button>
			</view>
		</view>
		<view class="verification-code" v-show="! isShowVeify">
			<!--  验证码检验合格后再出现这个页面-->
			<view class="first-line">
				<input password placeholder="设置密码" v-model="userInfo.password" @input="checkPWd">
			</view>
			<view class="second-line">
				<input password placeholder="再次输入密码"v-model="userInfo.rePWd" @input="checkPWd">
			</view>
			<view class="prompt-box" v-show="isShowPrompt">
				<text>两次输入密码不一致！</text>
			</view>
			<view class="thrid-line">
				<button :disabled="!isSure" :class="isSure==true?'active':''"  @click="register">确定</button>
			</view>
		</view>
	</view>
</template>

<script>
	import register from './register.js'
	export default{
		... register
	}
</script>

<style lang="scss" scoped>
@import "./register.scss";
</style>
