<template>
<!--pages/bookseat1/bookseat1.wxml-->
<view class="all">
    <image class="layout" src="../static/image/layout.png"></image>
    <view class="rect">

        <view class="notselected" @tap="appointments">立即入座</view>
        <view class="selected">
            <view class="selected_txt">预约订座</view>
            <view class="stripe"></view>
        </view>
    </view>
    <view class="choose">
        <!-- <view class="round" wx:for="{{time}}" wx:for-index="index">{{time[index]}}</view> -->
        <view class="appoint_date">
            <text class="date_txt">预约日期</text>
            <picker mode="date" :start="date" @change="datechange">
                <view class="date_digital">{{date}}</view>
            </picker>
        </view>
        <view class="appoint_time">
            <text class="time_txt">预约时间</text>
            <picker mode="time" @change="startchange">
                <view class="start_digital">{{start}}</view>
            </picker>
            <text class="start_end">-</text>
            <picker mode="time" :start="start" @change="endchange">
                <view class="end_digital">{{end}}</view>
            </picker>
        </view>
        <view class="cho_button" @tap="choose_seat">选择座位</view>
    </view>
</view>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      start: "开始时间",
      end: "结束时间",
      date: "",
      time: "",
	  hour:0,
	  id:0,
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  
    // var date = new Date();
    // var y = date.getFullYear();
    // var m = new DecimalFormat("00").format(date.getMonth() + 1);
    // var d = date.getDate();
    this.setData({
      // date: y + "-" + m + "-" + d
	    date:moment(new Date()).format('YYYY-MM-DD'),
    });
    console.log(this.date); // console.log(time);
	this.id=options.id;
  },

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
    datechange(e) {
      console.log(e.detail.value), this.setData({
        date: e.detail.value
      });
    },

    startchange(e) {
      this.setData({
        start: e.detail.value
      });
    },

    endchange(e) {
      this.setData({
        end: e.detail.value
      });
    },

    appointments() {
      uni.redirectTo({
        url: '/pagesA/bookseat/bookseat?id='+this.id
      });
    },

    choose_seat() {
      this.setData({
        time: this.start,
      });
	  this.hour = (new Date(this.date + " " +this.end).getTime() - new Date(this.date + " " +this.start).getTime())/(1000 * 60 * 60);
	  // console.log(new Date (this.date + " " +this.start))
	  console.log(this.hour);
      uni.navigateTo({
        url: '/pagesA/chooseseat/chooseseat?' + "date=" + this.date + "&time=" + this.time + "&hour=" + this.hour + "&id="+this.id
      });
    }

  }
};
</script>
<style>
/* pages/bookseat1/bookseat1.wxss */
.layout {
    width: 100%;
    height: 500rpx;
}

.rect {
    display: flex;
}

.selected {
    margin-top: 33rpx;
    width: 326rpx;
    height: 90rpx;
    border-radius: 30rpx 30rpx 0rpx 0rpx;
    background-color: rgba(255, 255, 255, 100);
    color: rgba(16, 16, 16, 100);
    font-size: 28rpx;
    text-align: center;
    font-family: Microsoft Yahei;
}

.selected_txt {
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
    margin-top: 20rpx;
}

.stripe {
    margin-left: 130rpx;
    margin-top: 16rpx;
    width: 66rpx;
    height: 6rpx;
    text-align: center;
    background-color: #f5d048;
    /* border: 8rpx solid rgba(245, 208, 75, 100); */
}

.notselected {
    margin-left: 50rpx;
    margin-top: 53rpx;
    width: 324rpx;
    height: 70rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 30rpx 0rpx 0rpx 0rpx;
    color: rgba(16, 16, 16, 100);
    background-color: #ffffff;
    font-size: 28rpx;
    text-align: center;
    font-family: Microsoft Yahei;
}

.choose {
    margin-left: 50rpx;
    width: 648rpx;
    height: 272rpx;
    /* line-height: 40rpx; */
    border-radius: 0rpx 0rpx 30rpx 30rpx;
    color: rgba(16, 16, 16, 100);
    background-color: #ffffff;
    font-size: 28rpx;
    /* text-align: center; */
    box-shadow: 0rpx 4rpx 12rpx 0rpx rgba(0, 0, 0, 0.4);
    font-family: Arial;
}

/* .round {
    margin-left: 34rpx;
    margin-top: 12rpx;
    width: 80rpx;
    height: 80rpx;
    line-height: 80rpx;
    color: rgba(245, 208, 75, 100);
    font-size: 24rpx;
    text-align: center;
    font-family: Arial;
    border: 1px solid rgba(187, 187, 187, 100);
    border-radius: 40rpx;
} */
.appoint_date {
    margin-left: 32rpx;
    width: 600rpx;
    height: 70rpx;
    line-height: 70rpx;
    border-bottom: 2rpx solid #bbbbbb;
    display: flex;
}

.date_txt {
    margin-left: 18rpx;
    width: 112rpx;
    height: 40rpx;
    color: rgba(16, 16, 16, 100);
    font-size: 28rpx;
    text-align: left;
    font-family: PingFangSC-regular;
}

.date_digital {
    margin-left: 290rpx;
    width: 180rpx;
    height: 40rpx;
    color: rgba(16, 16, 16, 100);
    font-size: 28rpx;
    text-align: left;
    font-family: PingFangSC-regular;
}

.appoint_time {
    margin-top: 20rpx;
    margin-left: 32rpx;
    width: 586rpx;
    height: 70rpx;
    line-height: 70rpx;
    border-bottom: 2rpx solid #bbbbbb;
    display: flex;
}

.time_txt {
    margin-left: 18rpx;
    width: 112rpx;
    height: 40rpx;
    color: rgba(16, 16, 16, 100);
    font-size: 28rpx;
    text-align: left;
    font-family: PingFangSC-regular;
}

.start_digital {
    margin-left: 30rpx;
    width: 180rpx;
    height: 60rpx;
    line-height: 60rpx;
    border-radius: 30rpx;
    background-color: rgba(245, 208, 75, 100);
    color: rgba(16, 16, 16, 100);
    font-size: 28rpx;
    text-align: center;
    font-family: Microsoft Yahei;
}

.start_end {
    margin-left: 16rpx;
    width: 18rpx;
    height: 40rpx;
    color: rgba(16, 16, 16, 100);
    font-size: 28rpx;
    text-align: left;
    font-family: PingFangSC-regular;
}

.end_digital {
    margin-left: 16rpx;
    width: 180rpx;
    height: 60rpx;
    line-height: 60rpx;
    border-radius: 30rpx;
    background-color: rgba(245, 208, 75, 100);
    color: rgba(16, 16, 16, 100);
    font-size: 28rpx;
    text-align: center;
    font-family: Microsoft Yahei;
}

.cho_button {
    margin-left: 226rpx;
    margin-top: 20rpx;
    width: 200rpx;
    height: 60rpx;
    border-radius: 30rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(245, 208, 75, 100);
    color: rgba(16, 16, 16, 100);
    font-size: 28rpx;
    text-align: center;
    font-family: Microsoft Yahei;
}
</style>