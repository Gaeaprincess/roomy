<template>
	<view class="top">
		<mpopup  ref="mpopup" :isdistance="true"></mpopup>
		<view class="content">
			姓名：
			<input type="text" v-model="attribute.username" />
		</view>
		<view class="content">
			头像：
			<input type="text" v-model="attribute.avatar" />
		</view>
		&nbsp;
		<view class="content bottom">
			简介：
			<input type="text" v-model="attribute.bio" />
		</view>
		&nbsp;
		<button @click="sub">提交</button>
	</view>
</template>

<script>
	import * as myself from "@/api/myself.js"
	import mpopup from '@/components/xuan-popup/xuan-popup.vue'
	export default {
		data() {
			return {
				attribute:{
					username:'',
					avatar:'',
					bio:''
				}
			}
		},
		components:{
			mpopup,
		},
		methods: {
			pop:function(msg){
			           this.$refs.mpopup.open({
			               type:'success',
			               content: msg,
			               timeout:2000,
			           });
			       },
			sub(){
				let data = JSON.stringify(this.$data.attribute)
				myself.putInformation(data)
							.then((res)=>{
								console.log(res)
								this.pop(res.msg)
							})
							.catch((err)=>{
								console.log(err)
				})
			}
		}
	}
</script>

<style scoped>
.top{
	/* background-color: red; */
	width: 90%;
	margin: 0 auto;
	padding: 10px;
	margin-top: 200px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}
.content{
	padding: 8px;
	font-size: 30px;
	margin-top: 20px;
	border-bottom: 1px solid #E8E8E8;
}

.bottom{
	margin-bottom: 20px;
}

button{
	border: white;
}
input{
	/* margin-top: 10px; */
	height: 60px;
	font-size: 30px;
}
</style>
