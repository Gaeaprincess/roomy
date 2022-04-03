<template>
<view>
<!--pages/pay/pay.wxml-->
<view class="top">
    <view class="information">
        <view class="row">
            <view class="txt1">预约日期:</view>
            <text class="txt2">{{date}}</text>
        </view>
        <view class="row">
            <view class="txt1">预约时间:</view>
            <text class="txt2">{{time}}</text>
        </view>
        <view class="row">
            <view class="txt1">座位:</view>
            <text class="txt2">{{seat}}</text>
        </view>
        <view class="row">
            <view class="txt1">预计费用:</view>
            <text class="txt2">{{cost}}元</text>
        </view>
    </view>
    <!-- <view class="rechoose" @tap="re_choose">重新选座位</view> -->
</view>
<!-- <view class="bottom"> -->
    <!-- <view class="pay" @tap="pay_card" style="background-color: rgb(245,208,75);">使用卡券</view> -->
    <view class="pay" @tap="pay_wx" style="background-color: #04BE02;">微信支付</view>
<!-- </view> -->
</view>
</template>

<script>
import payAPI from '../../api/pay_wx.js'
export default {
  data() {
    return {
      date: "2021-10-06",
      time: "06:00-09:00",
      seat_i: ["JY", "JP", "YG"],
      cost: "25",
      seat: "",
	  seat_id:0,
	  start:0,
	  end:0
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    var i = option.i;
    var j = option.j;
    var date = option.date;
    var time = option.time;
    this.setData({
      seat: this.seat_i[i] + "_" + j,
      date: date,
      time: time
    }); 
	this.seat_id=option.seat_id;
	this.start=option.start;
	this.end=option.end
	// console.log(option.seat_id);
	// console.log(option.start);
	// console.log(option.end);
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
    re_choose() {
      uni.navigateTo({
        url: '/pagesA/chooseseat/chooseseat'
      });
    },

    pay_wx(e) {
        payAPI.pay_wx(this.seat_id,this.start,this.end).then(res => {
			console.log(res);
			uni.showToast({
				title: '订座成功',
				icon: 'success',
				duration: 2500
			});
			setTimeout(() => {
				uni.navigateTo({
				  url:"../../pages/index/index"})
			}
			,2500)
		}).catch(err => {
			console.log(err);
		})
    },
	naTo(){
		uni.navigateTo({
		  url:"../../pages/index/index"})
	}

    // pay_card() {
    //   console.log("占位：函数 pay_card 未声明");
    // }

  }
};
</script>
<style>
/* pages/pay/pay.wxss */
.top {
    margin-left: 200rpx;
    margin-top: 60rpx;
	padding: 20rpx;
    width: 325px;
    height: 163px;
    line-height: 20px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);
}

.information {
    margin-left: 25rpx;
    width: 314rpx;
    height: 166rpx;
    color: rgba(16, 16, 16, 100);
    font-size: 28rpx;
    text-align: left;
    font-family: PingFangSC-regular;
}

.row{
    margin-top: 15rpx;
}
.txt1 {
    text-align: left;
    width: 130rpx;
    display: inline-block;
}

.rechoose {
    margin: 80rpx auto;
    width: 200rpx;
    height: 60rpx;
    line-height: 60rpx;
    border-radius: 30rpx;
	background-color: white;
    color: red;
    font-size: 28rpx;
    text-align: center;
    font-family: Microsoft Yahei;
}

/*.bottom  {
    margin: 150rpx auto;
	padding: 40rpx;
    width: 600rpx;
    height: 100%;
    line-height: 40rpx;
    border-radius: 30rpx;
    text-align: center;
    box-shadow: 0rpx 4rpx 12rpx 0rpx rgba(0, 0, 0, 0.4);
} */

.pay {
    margin: 250rpx auto;
    /* margin-top: 40rpx; */
    width: 550rpx;
    height: 88rpx;
    line-height: 88rpx;
    border-radius: 20rpx;
    color: rgba(16, 16, 16, 100);
    font-size: 28rpx;
    text-align: center;
    box-shadow: 0rpx 4rpx 12rpx 0rpx rgba(0, 0, 0, 0.4);
    font-family: Microsoft Yahei;
}
</style>