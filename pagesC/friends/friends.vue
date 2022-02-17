<template>
<view>
<view class="top"> 
<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="button"
			activeColor="#F5D04B"></uni-segmented-control>
</view>
<view class="friend" v-show="current ===0">
    <view class="item">
        <image src="../static/image/header_img.png" class="image"></image>
        <view class="content">
            <view class="name">丹丹</view>
            <view class="xiaoxi">在干哈</view>
            <view class="time">上午12:12</view>
        </view>
    </view>
    <view class="item">
        <image src="../static/image/header_img.png" class="image"></image>
        <view class="content">
            <view class="name">丹丹</view>
            <view class="xiaoxi">在干哈</view>
            <view class="time">上午12:12</view>
        </view>
    </view>
</view>
<view class="lianxiren" v-show="current ===1">
    <view class="lianxiren_item">
        <image src="../static/image/header_img.png" class="lianxiren_image"></image>
        <view class="lianxiren_name">丹丹</view>
    </view>
    <view class="lianxiren_item">
        <image src="../static/image/header_img.png" class="lianxiren_image"></image>
        <view class="lianxiren_name">霞霞</view>
    </view>
</view>
</view>
</template>

<script>

export default {
  data() {
    return {
      // left: " ",
      // right: "right",
      // lianxiren: "lianxiren",
      // friend: " "
	  //  分段器数据
	  items: ["消息", "联系人"],
	  current:0,
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
    // left() {
    //   this.setData({
    //     left: " ",
    //     right: "right",
    //     lianxiren: 'lianxiren',
    //     friend: ' '
    //   });
    // },
    // right() {
    //   this.setData({
    //     left: "left",
    //     right: " ",
    //     lianxiren: ' ',
    //     friend: 'friend'
    //   });
    // }
	// 分段器
	onClickItem(e) {
		// e:返回一个对象 {currentIndex: 1} 为currentIndex 0序
		if (this.current != e.currentIndex) {
			this.current = e.currentIndex;
		}
	},
  }
};
</script>
<style>
page{
    padding-top: 30rpx;
    background-color: #F9F9F9;
}
.top{
    text-align: center;
	margin-bottom: 20rpx;
}
.left,.right{
    display: inline-block;
    margin-bottom: 36rpx;
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
#left{
    background-color: #fff;
}
#right{
    background-color: #fff;
}
#friend{
    display: none;
}
#lianxiren{
    display: none;
}
.friend{
    background-color: #fff;
    padding-bottom: 40rpx;
}
.item{
    height: 130rpx;
    width: 654rpx;
    margin: 0rpx auto;
    padding-bottom: 20rpx;
    padding-top: 20rpx;
}
.image{
    float: left;
    margin-top: 20rpx;
    margin-left: 20rpx;
    margin-right: 40rpx;
    height: 100rpx;
    width: 100rpx;
    border-radius: 70rpx;
}
.content{
    float: left;
    width: 400rpx;
    padding-bottom: 10rpx;
    border-bottom: solid #bdbaba thin;
}
.name{
    margin-top: 20rpx;
}
.xiaoxi{
    margin-top: 20rpx;
}
.time{
    float: right;
    margin-top: -102rpx;
}
.lianxiren{
    background-color: #fff;
    padding-bottom: 40rpx;
}
.lianxiren_item{
    height: 130rpx;
    width: 654rpx;
    margin: 0rpx auto;
    padding-bottom: 20rpx;
    padding-top: 20rpx;
}
.lianxiren_image{
    float: left;
    margin-top: 20rpx;
    margin-left: 20rpx;
    margin-right: 40rpx;
    height: 100rpx;
    width: 100rpx;            
    border-radius: 70rpx;
}
.lianxiren_name{
    float: left;
    line-height: 120rpx;
    width: 400rpx;
    border-bottom: solid #bdbaba thin;
}
</style>