<template>
<view>
<view class="top">
    <image src="../static/image/money.png"></image>
    <view class="tittle">我的押金</view>
    <view class="content">￥99.00</view>
</view>
<button style="display: block; border-radius: 40rpx; font-size: 28rpx; font-weight: 500; margin-top:580rpx;">退押金</button>
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
    width: 652rpx;
    height: 466rpx;
    margin: 80rpx auto;
    padding-top: 32rpx;
    border-radius: 40rpx;
    background-color: #fff;
}
image{
    display: block;
    margin: 0 auto;
    height: 240rpx;
    width: 240rpx;
}
.tittle{
    /* width: 652rpx; */
    margin-top: 30rpx;
    margin-bottom: 16rpx;
    text-align: center;
}
.content{
    text-align: center;
    font-size: 72rpx;
    font-weight: 600;
}
button{
    background-color: #BBBBBB ;
}
</style>