<template>
<view class="top">
    <view>
        亲爱的学员，添加微信或者打客户电话，为你答疑哦
    </view>
    <view class="number">
        预约、资讯电话：17313757476
    </view>
    <image src="/static/image/er.png"></image>
    <view class="time">服务在线时间：00:00-23:59</view>
    <view class="tittle">微信号：<view class="phone">17313757476</view></view>
</view>
</template>

<script>

export default {
  data() {
    return {};
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
  methods: {}
};
</script>
<style>
page{
    background-color: #F9F9F9;
}
.top{
    height: 700rpx;
    width: 550rpx;
    margin: 80rpx auto;
    padding: 56rpx;
    border-radius: 20rpx;
    background-color: #fff;
}
image{
    display: block;
    height: 286rpx;
    width: 286rpx;
    margin: 28rpx auto;
}
.number{
    margin-top: 20rpx;
}
.time{
    text-align: center;
    margin-top: 36rpx;
}
.tittle{
    display:block;
    text-align: center;
    margin-top: 58rpx;
}
.phone{
    display: inline-block;
    background-color: #f3d771;
}
</style>