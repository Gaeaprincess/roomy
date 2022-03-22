<template>
<view>
<view class="top">
    <!-- <view class="left" :model:id="left" @tap="left">预约中</view>
    <view class="right" :model:id="right" @tap="right">已使用</view> -->
	<ms-tabs :list="list" v-model="current" lineColor="#F5D04B" itemColor="#F5D04B"></ms-tabs>
</view>
<view class="shiyong common" v-show="current===0">
    <view class="day"><text>预约日期：</text>2021-10-29</view>
    <view class="time"><text>预约时间：</text>06:00-11:30</view>
    <view class="area"><text>座位：</text>JY02</view>
    <view class="money"><text>已支付：</text>25元</view>
    <button style="background-color: #F5D04B;color:white; float: right; line-height: 60rpx; width: 200rpx; height:60rpx; padding: 0; margin-right: 20rpx;">立即使用</button>
    <view class="dizhi"><text>地址：</text><text id="info">翠屏区白沙湾四川轻化工大学</text></view>
</view>
<view class="shiyong common" v-show="current===1">
    <view class="day"><text>预约日期：</text>2021-10-29</view>
    <view class="time"><text>预约时间：</text>06:00-11:30</view>
    <view class="area"><text>座位：</text>JY02</view>
    <view class="money"><text>已支付：</text>25元</view>
    <button style="background-color: #F5D04B;color:white; float: right; line-height: 60rpx; width: 200rpx; height:60rpx; padding: 0; margin-right: 20rpx;">立即离开</button>
    <view class="dizhi"><text>地址：</text><text id="info">翠屏区白沙湾四川轻化工大学</text></view>
</view>
  <mpopup  ref="mpopup" :isdistance="true"></mpopup>
</view>
</template>

<script>
import * as myself from "@/api/myself.js"
import mpopup from '@/components/xuan-popup/xuan-popup.vue'
export default {
  data() {
    return {
    content:'',
	  list: [{
	  		title: '预约'
	  	},
	  	{
	  		title: '已使用'
	  	},
	  ],
	  current:0,
    };
  },

  components: {
		mpopup,
	},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		myself.getOrder()
					.then((res)=>{
						console.log(res)
						this.pop(res.msg || "没有订单")
					})
	},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  methods: {
		 pop:function(msg){
		            this.$refs.mpopup.open({
		                type:'success',
		                content: msg,
		                timeout:2000,
		            });
		        },
	reportClickItem(e) {
		if (this.current != e.currentIndex) {
			this.current = e.currentIndex;
		}
	},
	 open(){
	        this.$refs.popup.open('top')
	      }
  }
};
</script>
<style scoped>
page{
    background-color: #F9F9F9;
}
.top{
    width: auto;
    height: 48rpx;
    background-color: #fff;
	margin-bottom: 10rpx;
}
.common{
	width: 650rpx;
	height: 300rpx;
	/* line-height: 50rpx; */
	border-radius: 20rpx;
	/* text-align: center; */
	box-shadow: 0rpx 4rpx 12rpx 0rpx rgba(0, 0, 0, 0.4);
	margin:100rpx auto;
	padding: 40rpx;
}
text{
	font-weight: bolder;
	padding-right: 10rpx;
	font-size: 32rpx;
	display: inline-block;
}
#info{
	font-weight: normal;
	display: inline-block;
	width:300rpx;
	vertical-align: top;
}
.shiyong{
	
}
.meiyong{
	
}
</style>