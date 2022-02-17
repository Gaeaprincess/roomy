<template>
<view class="jiahaoyou">
<input type="text" class="header-input" placeholder="账号/手机号" placeholder-style="header-input-placeholder" @input="handleInputChange">
    <icon type="search" class="header-input-icon" v-if="showIcon"></icon>
</view>
</template>

<script>

export default {
  data() {
    return {
      showIcon: true
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
    // 搜索框图标消失
    handleInputChange(e) {
      const value = e.detail.value;
      this.setData({
        showIcon: value ? false : true
      });
    }

  }
};
</script>
<style>
.header-input{
    margin-left: 50rpx;
    margin-top: 40rpx;
    margin-bottom: 20rpx;
    width: 650rpx;
    height: 60rpx;
	line-height: 60rpx;
    border-radius: 30rpx;
    color: rgba(16, 16, 16, 100);
    font-size: 28rpx;
    text-align: center;
	position: relative;
    box-shadow: 0rpx 4rpx 12rpx 0rpx rgba(0, 0, 0, 0.4);
}
.header-input-placeholder{
    font-size: 28rpx;
    color: rgb(237, 237, 238);
}
.header-input-icon{
    position: absolute;
    left: 25%;
    top: 50rpx;
	line-height: 60rpx;
    transform: translateX(-100rpx);
    color: rgb(237, 237, 238);
}
</style>