<template>
<view>
<view class="header">
    <image src="../static/image/header_img.png" class="header_img"></image>
</view>
<view class="child child1" @tap="goto_about_money">
    关于押金
</view>
<view class="child">
    学习公约
</view>
<view class="child" @tap="goto_customer_service">
    我的客服
</view>
<view class="child" @tap="goto_information">
    关于用户
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
  methods: {
    goto_about_money() {
      uni.navigateTo({
        url: '/pagesC/about_money/about_money'
      });
    },

    goto_customer_service() {
      uni.navigateTo({
        url: '/pagesC/customer_service/customer_service'
      });
    },
		
		goto_information() {
			console.log(11111)
      uni.navigateTo({
        url: '/pagesC/teste/teste'
      });
    }

  }
};
</script>
<style>
page{
    background-color: #F9F9F9;
}
.header_img{
    display: block;
    height: 200rpx;
    width: 200rpx;
    border-radius: 100rpx;
}
.header{
    width: 200rpx;
    margin: 122rpx auto;
}
.child{
    height:76rpx;
    line-height: 76rpx;
    margin-top: 22rpx;
    text-align: center;
    background-color: #fff;
}
</style>