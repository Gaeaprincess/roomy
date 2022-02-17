<template>
<view class="top">
        <image src="../static/image/VIP.png"></image>
        <view class="vip_contents">
            会员等级：
            <view class="vip_content">
            LV2
            </view>
        </view>
        <view class="vip_time">
            到期时间：2002-01-01
        </view>
        <button style="height: 60rpx;line-height: 60rpx; width: 200rpx; border-radius:60rpx; font-size: 28rpx; padding:0; font-weight: 400;color: white;margin: auto;">立即续费</button>
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
    background-color: #F9F9F9 ;
}
.top{
    margin: 60rpx auto;
    height: 466rpx;
    width: 652rpx;
    background-color:white;
    border-radius: 40rpx;
}
image{
    float: left;
    margin: 56rpx 246rpx 16rpx;
    width: 160rpx;
    height: 160rpx;
    box-shadow: 0 0 20rpx rgb(153, 151, 151);
}
.vip_contents{
    float: left;
    margin-left: 200rpx;
}
.vip_time{
    float: left;
    margin: 30rpx 0rpx 38rpx 160rpx;
}
.vip_content{
    display: inline-block;
    padding: 0rpx 18rpx;
    background-color: #f3d771;
}
button{
    display: block;
    border-radius: 60rpx;
    background-color: #F2D855;
    /* margin: 0rpx 246rpx; */
    /* width: 200rpx; */
    /* height: 60rpx; */
    /* line-height: 60rpx; */
    /* border-radius: 60rpx; */
}
</style>