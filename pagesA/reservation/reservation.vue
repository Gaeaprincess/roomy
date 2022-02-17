<template>
<view>
<!--pages/chooseseat/chooseseat.wxml-->
<view class="overall">
    <view class="pepo_num">
        <view class="pepo_num1">
            <view class="circle">单人室</view>
            <text class="pepo_num_txt">余{{num1}}间</text>
        </view>
        <view class="pepo_num2">
            <view class="circle">双人室</view>
            <text class="pepo_num_txt">余{{num2}}间</text>
        </view>
        <view class="pepo_num3">
            <view class="circle">讨论室</view>
            <text class="pepo_num_txt">余{{num3}}间</text>
        </view>
    </view>
    <view class="Classification">
        <view class="mark">
            <image class="mark_icon" src="../static/image/seat.png"></image>
            <text class="mark_txt">未选中</text>
        </view>
        <view class="mark">
            <image class="mark_icon" src="../static/image/seat1.png"></image>
            <text class="mark_txt">已选中</text>
        </view>
        <view class="mark">
            <image class="mark_icon" src="../static/image/seat2.png"></image>
            <text class="mark_txt">已预约</text>
        </view>
    </view>
    <view v-for="(item, index) in part" :key="index" class="display">
        <text class="display_txt">{{item}}</text>
        <view class="seats">
            <view v-for="(it, index2) in seat" :key="index2" class="one_seat">
                <image :src="img_seat" class="seat_icon"></image>
                <text class="seat_txt">{{it}}</text>
            </view>
        </view>
    </view>
</view>
<view class="bottom">
    <view class="confirm">确认订座</view>
</view>
</view>
</template>

<script>

export default {
  data() {
    return {
      num1: 12,
      num2: 12,
      num3: 12,
      part: ["静音区", "键盘区", "阳光区"],
      seat: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
      img_seat: "../static/image/seat.png"
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
  methods: {}
};
</script>
<style scoped>
/* pages/chooseseat/chooseseat.wxss */
.pepo_num {
    width: 100%;
    height: 300rpx;
    margin-top: 40rpx;
    display: flex;
    text-align: center;
    /* border: 2rpx solid #101010; */
}

.pepo_num1 {
    margin-left: 30rpx;
    width: 150rpx;
    height: 300rpx;
    /* border: 2rpx solid #101010; */
    /* overflow: hidden; */
}

.pepo_num2 {
    margin-left: 120rpx;
    width: 150rpx;
    height: 300rpx;
    /* border: 2rpx solid #101010; */
}

.pepo_num3 {
    margin-left: 120rpx;
    width: 150rpx;
    height: 300rpx;
    /* border: 2rpx solid #101010; */
}

.circle {
    margin-top: 50rpx;
    margin-left: 15rpx;
    width: 120rpx;
    height: 120rpx;
    line-height: 120rpx;
    border-radius: 60rpx;
    color: rgba(16, 16, 16, 100);
    background-color: #ffffff;
    font-size: 28rpx;
    text-align: center;
    box-shadow: 0rpx 4rpx 12rpx 0rpx rgba(0, 0, 0, 0.4);
    font-family: Microsoft Yahei;
}

.pepo_num_txt {
    display: inline-block;
    margin-top: 26rpx;
    width: 94rpx;
    height: 40rpx;
    color: rgba(16, 16, 16, 100);
    font-size: 28rpx;
    font-family: PingFangSC-regular;
}

.Classification {
    display: flex;
}

.mark {
    margin-left: 112rpx;
}

.mark_icon {
    width: 48rpx;
    height: 48rpx;
}

.mark_txt {
    width: 60rpx;
    height: 28rpx;
    color: rgba(16, 16, 16, 100);
    font-size: 20rpx;
    text-align: left;
    font-family: PingFangSC-regular;
}

.display {
    margin-top: 40rpx;
    text-align: center;
}

.display_txt {
    margin-top: 30rpx;
    width: 84rpx;
    height: 40rpx;
    color: rgba(16, 16, 16, 100);
    font-size: 28rpx;
    text-align: center;
    font-family: PingFangSC-regular;
}

.seats {
    margin-left: 50rpx;
    margin-top: 30rpx;
    width: 650rpx;
    height: 354rpx;
    background-color: #ffffff;
    display: flex;
    flex-wrap: wrap;
    line-height: 40rpx;
    border-radius: 30rpx;
    text-align: center;
    box-shadow: 0rpx 4rpx 12rpx 0rpx rgba(0, 0, 0, 0.4);
}

.one_seat {
    margin-left: 88rpx;
    width: 55rpx;
    height: 80rpx;
    display: inline-block;
    text-align: center;
}

.seat_icon {
    margin-top: 18rpx;
    width: 52rpx;
    height: 52rpx;
    display: block;
    background-color: rgba(157, 157, 157, 100);
}

.seat_txt {
    width: 52rpx;
    height: 40rpx;
    display: block;
    color: rgba(16, 16, 16, 100);
    font-size: 24rpx;
    text-align: center;
    font-family: PingFangSC-regular;
}
.bottom{
    position: sticky;
    position: -webkit-sticky;
    bottom: 0;
}
.confirm {
    margin-left: 50rpx;
    width: 650rpx;
    height: 84rpx;
    line-height: 84rpx;
    border-radius: 70rpx;
    background-color: rgba(245, 208, 75, 100);
    color: rgba(16, 16, 16, 100);
    font-size: 28rpx;
    text-align: center;
    box-shadow: 0rpx 4rpx 12rpx 0rpx rgba(0, 0, 0, 0.4);
    font-family: Microsoft Yahei;
}
</style>