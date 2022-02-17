<template>
	<view class="wrap">
		<!-- 验证码登录 -->
		<view class="logo">
			<image src="../../static/logo.png" mode=""></image>
			<text class="title">智慧无人自习室</text>
		</view>
		<view class="verification" v-if="isVerification">
			<form action="">
				<view>
					<input type="text" placeholder="输入手机号码:" @blur="isFinish()" v-model="userMsg.phone">
				</view>
				<view>
					<input type="text" placeholder="输入验证码:"@blur="isFinish()" v-model="userMsg.code"/>
					<button  class="getCodeBtn" :disabled="!isSend" :class="isSend==true ? 'active':''">获取验证码</button>
				</view>
				<view>
					<button :disabled="!isComplete" :class="isComplete==true ? 'active':''">登录</button>
				</view>
			</form>
			<view class="change-method">
				<text  @click="verification()">使用账号和密码登录</text>
			</view>
		</view>
		<!-- 用户密码登录 -->
		<view class="account" v-if="! isVerification">
			<view class="account-box">
				<input type="text" placeholder="账号/手机号" v-model="userMsg.account" @blur="isFinish()">
			</view>
			<view class="password">
				<input :password="true" placeholder="密码" v-if="!isShowPWD" v-model="userMsg.password" @blur="isFinish()"/>
				<input  placeholder="密码" v-else v-model="userMsg.password" @blur="isFinish()"/>
				<view class="iconfont icon-yanjingbiyankaobei" v-if="! isShowPWD" @click="toggleIcon"></view>
				<view class="iconfont icon-zhengyan" v-else @click="toggleIcon"></view>
			</view>
			<view class="footer">
				<view><text @click="showVerificationBox">用验证码登录</text></view>
				<view><text @click="findPass()">忘记密码</text></view>
			</view>
			<view class="button">
				<button :disabled="!isFinished" :class="isFinished==true ? 'active':''">登录</button>
				<button @click="goToRegister()">去注册</button>
			</view>
		</view>
	</view>
</template>

<script>
  import phoneLogin from './phoneLogin.js'
	export default{
		... phoneLogin
	}
</script>

<style lang="scss" scoped>
@import "./phoneLogin.scss";
</style>
