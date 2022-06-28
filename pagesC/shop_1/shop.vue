<template>
  <view>
    <view class="content"
          v-for="(item,index) in shop"
          :key=index>
      <image :src="item.cover"
             @click="introduce"></image>
      <view class="item">
        <view class="tittle">{{item.name||'智慧自习室'}}</view>
        <view class="area">地点：{{item.location}}</view>
        <view class="time">经营时间：{{item.opening_hours}}小时，{{item.opening_days}}天</view>
        <button style="border-radius: 40rpx; font-size: 28rpx; font-weight: 400;"
                @click="reserve">预定座位</button>
      </view>
    </view>
  </view>
</template>

<script>
import * as myself from "@/api/myself.js"
export default {
  data () {
    return {
      shop: []
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    myself.getMendian()
      .then((res) => {
        console.log(res);
        this.$data.shop = res.data
      })
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
  methods: {
    // 选定座位
    reserve () {
      uni.navigateTo({
        url: '../../pagesA/shop/shop',
        fail: err => {
          console.log(err)
        }
      });
    },
    introduce () {
      uni.navigateTo({
        url: '../../pagesA/shop/shop',
        fail: err => {
          console.log(err)
        }
      });
    }
  }
};
</script>
<style>
page {
  background-color: #f9f9f9;
}
.content {
  width: 700rpx;
  height: 400rpx;
  margin: 46rpx auto;
  padding: 40rpx 10rpx;
  background-color: #fff;
  border-radius: 30rpx;
}
image {
  float: left;
  width: 288rpx;
  height: 320rpx;
  margin-left: 20rpx;
  margin-top: 30rpx;
  border-radius: 30rpx;
}
.item {
  float: left;
  height: 190rpx;
  width: 360rpx;
  margin-left: 20rpx;
}
.tittle,
.time,
.area,
button {
  float: left;
  margin-top: 30rpx;
}
button {
  background-color: #f5d04b;
}
</style>