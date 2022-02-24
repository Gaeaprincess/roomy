<template>
	<view class="wrap">
		<view class="index" v-show="toogle.isShowIndex">
			<image src="../../static/logo.png" mode=""></image>
			<text class="title">智慧无人自习室</text>
			<button class="authorization-login normal" :disabled="!item.isChecked" :class="item.isChecked==true ? 'checked':''" @click="test">微信授权登录</button>
			<button class="authorization-login normal" :disabled="!item.isChecked" :class="item.isChecked==true ? 'checked':''"  @click="phoneLogin">手机注册 / 登录</button>
			 <view>
				 <checkbox-group>
			     <label class="radio"><checkbox  value="r1" :checked="false" @click="checkBox($event, item)" color="#F5D04B"/>我已阅读并同意<navigator url="../protocol/protocol">《用户使用手册》</navigator></label>
				 </checkbox-group>
			</view>
			<view>
				<p style='font-size: 10px;margin-top: 20px;'>未注册的用户将自动注册</p>
			</view>
		</view>
	</view>
</template>

<script>
	import login from './login.js'
	export default{
		... login
	}
</script>

<style lang="scss" scoped>
 @import "./login.scss";
</style>
