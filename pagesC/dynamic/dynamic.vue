<template>
  <view>
    <image src="../static/image/header_img.png"
           class="bgc"></image>
    <image class="header_img"
           :src="avatar"></image>
    <view class="name">{{name}}</view>
    <view class="clear"></view>

    <view class="content"
          v-for="(item,index) in dynamic_arr"
          :key="index">
      <view class="item">
        <!-- <view class="time">今天</view> -->
        <!-- <view class="day_img"></view> -->
        <view class="day_content">{{item.title}}</view>
        <br>
        <br>
        <view class="day_text">{{item.content.content[0].content[0].content}}</view>
      </view>
    </view>
  </view>
</template>

<script>
import { getdynamic, getUserInfo } from '@/api/myself.js'
// import { log } from '../../components/QS-tabs-wxs-list/js/config';
export default {
  data () {
    return {
      name: '',
      avatar: '../static/image/header_img.png',
      dynamic_arr: []
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getUserInfo()
      .then(res => {
        console.log(res);
        this.name = res.data.username
        this.avatar = res.data.avatar
      })
      .catch(err => err)
    getdynamic()
      .then(res => {
        console.log(res);
        this.dynamic_arr = res.data;
      })
      .catch(err => err)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () { },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () { },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () { },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () { },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () { },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () { },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { },
  methods: {}
};
</script>
<style>
.bgc {
  display: block;
  height: 392rpx;
  width: 100%;
}
.header_img {
  float: right;
  height: 100rpx;
  width: 100rpx;
  margin-top: -36rpx;
  margin-right: 34rpx;
  border-radius: 70rpx;
}
.name {
  float: right;
  margin-right: 16rpx;
  font-size: 40px;
}
.clear {
  clear: both;
}
.content {
  height: 180px;
  margin-top: 150rpx;
  display: block;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
}
.time,
.day_img,
.day_content {
  font-weight: 600;
  float: left;
  margin-left: 52rpx;
}
.day_text {
  float: left;
  margin-left: 52rpx;
  font-size: 36px;
}
.time {
  font-size: 36rpx;
  font-weight: 800;
}
.day_img {
  height: 162rpx;
  width: 162rpx;
  background-color: yellow;
}
</style>