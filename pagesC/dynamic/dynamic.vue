<template>
<view>
<image src="../static/image/header_img.png" class="bgc"></image>
<image class="header_img" src="../static/image/header_img.png"></image>
<view class="name">罗华荣</view>
<view class="clear"></view>
<view class="content">
    <view class="item">
        <view class="time">今天</view>
        <view class="day_img"></view>
        <view class="day_content">读书啦</view>
    </view>
</view>
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
.bgc{
    display: block;
    height: 392rpx;
    width:  100%;
}
.header_img{
    float: right;
    height: 100rpx;
    width: 100rpx;
    margin-top: -36rpx;
    margin-right: 34rpx;
    border-radius: 70rpx;
}
.name{
    float: right;
    margin-right: 20rpx;
}
.clear{
    clear: both;
}
.content{
    margin-top: 194rpx;
}
.time,.day_img,.day_content{
    float: left;
    margin-left: 52rpx;
}
.time{
    font-size: 36rpx;
    font-weight: 800;
}
.day_img{
    height: 162rpx;
    width: 162rpx;
    background-color: yellow;
}
</style>