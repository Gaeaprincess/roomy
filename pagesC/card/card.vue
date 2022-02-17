<template>
<view>
<view class="top"> 
    <view class="left" @tap="a" :id="left">团购兑券</view>
    <view class="right" @tap="b" :id="right">套餐</view>
</view>
<view class="buy" :id="buy">
    <image src="../static/image/meituan.png" class="image"></image>
    <view class="duiquan">自助兑券</view>
    <view class="item1"></view>
    <view class="item2"></view>
    <view class="item3"></view>
    <view class="item4"></view>
    <view class="hezi"></view>
    <picker @change="bindPickerChange" mode="selector" :value="index" :range="array">
        <view>选择门店：{{array[index]}}</view>
    </picker>
    <view class="input_area">
        <input type="text" placeholder="输入团购券码">
        <image src="../static/image/saomiao.png" class="saomiao"></image>
        <view class="item5">|</view>
    </view>
    <!-- <button style="height: 60rpx; width: 386rpx; background-color: #F5D04B; line-height: 60rpx; border-radius: 40rpx; box-shadow: 0 0 20rpx rgb(153, 151, 151);">兑换</button> -->
	<view class="exchange-btn">兑换</view>
</view>
<view class="taocan" :id="taocan">
    <view class="item">
        <view class="tittle">单次卡</view>
        <view class="time">最多课预约小时数：12小时</view>
        <view class="day">时间段：全天</view>
        <view class="taocan_item">￥30</view>
    </view>
</view>
</view>
</template>

<script>

export default {
  data() {
    return {
      array: ["1号店", "2号店", "3号店", "4号店", "5号店", "6号店"],
      index: 0,
      buy: " ",
      taocan: "taocan",
      left: " ",
      right: "right"
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

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
    a() {
      this.setData({
        buy: " ",
        taocan: "taocan",
        left: " ",
        right: "right"
      });
    },

    b() {
      this.setData({
        buy: "buy",
        taocan: " ",
        left: "left",
        right: " "
      });
    },

    bindPickerChange() {
      console.log("占位：函数 bindPickerChange 未声明");
    }

  }
};
</script>
<style>
page{
    margin-top: 26rpx;
    background-color: #F9F9F9;
}
.top{
    text-align: center;
}
.left,.right{
    display: inline-block;
}
.left{
    border-top-left-radius: 40rpx;
    border-bottom-left-radius: 40rpx;
    background-color: #F5D04B;
    width: 160rpx;
    height: 60rpx;
    text-align: center;
    line-height: 60rpx;
    border: solid #F5D04B thin;
}
.right{
    border-top-right-radius: 40rpx;
    border-bottom-right-radius: 40rpx;
    background-color: #F5D04B;
    width: 160rpx;
    height: 60rpx;
    text-align: center;
    line-height: 60rpx;
    border: solid #F5D04B thin;
}
.buy{
    height: 932rpx;
    width: 650rpx;
    margin: 66rpx auto;
    background-color: #fff;
    /* padding-top: 2rpx; */
    box-shadow:  0 0 20rpx rgb(153, 151, 151);
}
#left{
    background-color: #fff;
}
#right{
    background-color: #fff;
}
#buy{
    display: none;
}
#taocan{
    display: none;
}
.image{
    display: block;
    height: 80rpx;
    width: 80rpx;
    margin: 54rpx auto 18rpx;
}
.duiquan{
    text-align: center;
}
.hezi{
    width: 584rpx;
    height: 130rpx;
    margin: 104rpx auto;
    border-top:dashed rgb(127, 132, 134) thin;
    border-bottom:dashed rgb(127, 132, 134) thin;
}
.item1,.item2,.item3,.item4{
    width: 50rpx;
    height: 50rpx;
    border-radius: 70rpx;
    background-color: #F9F9F9;
}
.item1{
    float: left;
    margin-top: 78rpx;
    margin-right: 1000rpx;
    margin-left: -26rpx;
}
.item2{
    float: left;
    margin-top: 80rpx;
    margin-left: -26rpx;
}
.item3{
    float: right;
    margin-top: -180rpx;
    margin-left: 1000rpx;
    margin-right: -26rpx;
}
.item4{
    float: right;
    margin-top: -44rpx;
    margin-right: -26rpx;
}
picker{
    width: 410rpx;
    height: 60rpx;
    margin: 0rpx auto;
    text-align: center;
    border-radius: 20rpx;
    line-height: 60rpx;
    box-shadow: 0 0 20rpx rgb(153, 151, 151);
}
.input_area{
    width: 500rpx;
    height: 80rpx;
    margin: 58rpx auto;
    background-color:  #F9F9F9;
    border-radius: 20rpx;
}
input{
    display: inline-block;
    text-align: center;
    margin-top: 20rpx;
    margin-left: 20rpx;
}
.item5{
    float: right;
    margin-right: 40rpx;
    margin-top: 20rpx;
    color: rgb(153, 151, 151);
}
.saomiao{
    float: right;
    width: 48rpx;
    height: 48rpx;
    margin-top: 20rpx;
    margin-right: 20rpx;
}
.taocan{
    height: 218rpx;
    width: 650rpx;
    margin: 50rpx auto;
    padding-top: 20rpx;
    border-radius: 20rpx;
    box-shadow: 0 0 20rpx rgb(153, 151, 151);
    background-color: #fff;
}
.tittle,.time,.day{
    margin-left: 40rpx;
    margin-top: 20rpx;
}
.taocan_item{
    float: right;
    margin-top: -100rpx;
    margin-right: 40rpx;
    font-size: 46rpx;
    color: #F5D04B;
}
/* 兑换按钮 */
.exchange-btn{
	height: 60rpx;
	width: 386rpx;
	line-height: 60rpx;
	/* padding-top: 20rpx; */
	background-color: #F5D04B;
	text-align: center;
	border-radius: 40rpx;
	box-shadow: 0 0 20rpx rgb(153, 151, 151);
	margin: auto;
}
</style>