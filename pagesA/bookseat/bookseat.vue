<template>
<view class="all">
    <image class="layout" src="../static/image/layout.png"></image>
    <view class="rect">
        <view class="selected">
            <view class="selected_txt">立即入座</view>
            <view class="stripe"></view>
        </view>
        <view class="notselected" @tap="appointments">预约订座</view>

    </view>
    <view class="choose">
        <!-- <view class="round" wx:for="{{time}}" wx:for-index="index">{{time[index]}}</view> -->
        <text class="cho_txt">入座时长：</text>
        <view :class="cho_ti1" @tap="subtraction">-</view>
        <text class="cho_txt1" @tap="hour_change">{{hour}}</text>
        <view :class="cho_ti2" @tap="add">+</view>
        <text class="cho_txt2">小时</text>
        <view class="cho_button" @tap="choose_seat">选择座位</view>
    </view>
</view>
</template>

<script>

export default {
  data() {
    return {
      // time:["1小时","2小时","3小时","4小时","5小时","6小时","7小时","8小时", "9小时","10小时"],
      hour: 1,
      cho_ti1: "cho_hour1",
      cho_ti2: "cho_hour2",
	  date:"",
	  time:""
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this);
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
    hour_change: function () {
      var num = this.hour;

      if (num == 0) {
        var num2 = "cho_afterhour1";
        this.setData({
          cho_ti1: num2
        });
      } else if (num == 24) {
        var num2 = "cho_afterhour2";
        this.setData({
          cho_ti2: num2
        });
      } else {
        var num2 = "cho_hour1";
        var num3 = "cho_hour2";
        this.setData({
          cho_ti1: num2,
          cho_ti2: num3
        });
      }
    },
    subtraction: function () {
      if (this.hour > 0) {
        var num = this.hour- 1;
        this.setData({
          hour: num
        });
      }

      this.hour_change();
    },
    add: function () {
      if (this.hour < 24) {
        var num = this.hour + 1;
        this.setData({
          hour: num
        });
      }

      this.hour_change();
    },

    appointments() {
      uni.redirectTo({
        url: '/pagesA/bookseat1/bookseat1'
      });
    },

    choose_seat() {
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
	var h = date.getHours(); var end_h = h + this.hour;
	var min = date.getMinutes();
    this.setData({
      date: y + "-" + m + "-" + d,
	  time: h + ":" + min + "-" + end_h + ":" + min
    });
    console.log(this.date);
    console.log(this.time);
      uni.navigateTo({
        url: '/pagesA/chooseseat/chooseseat?' + "date=" + this.date + "&time=" + this.time
      });
    }

  }
};
</script>
<style>
.layout {
    width: 100%;
    height: 500rpx;
}

.rect {
    display: flex;
}

.selected {
    margin-left: 50rpx;
    margin-top: 33rpx;
    width: 324rpx;
    height: 80rpx;
    border-radius: 30rpx 30rpx 0rpx 0rpx;
    background-color: #ffffff;
    color: rgba(16, 16, 16, 100);
    font-size: 28rpx;
    text-align: center;
    font-family: Microsoft Yahei;
}

.selected_txt {
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
    margin-top: 53rpx;
    width: 324rpx;
    height: 60rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 0rpx 30rpx 0rpx 0rpx;
    background-color: #ffffff;
    color: rgba(16, 16, 16, 100);
    font-size: 28rpx;
    text-align: center;
    font-family: Microsoft Yahei;
}

.choose {
    margin-left: 50rpx;
    width: 648rpx;
    height: 272rpx;
    line-height: 40rpx;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-radius: 0rpx 0rpx 30rpx 30rpx;
    color: rgba(16, 16, 16, 100);
    background-color: #ffffff;
    font-size: 28rpx;
    text-align: center;
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
.cho_txt {
    margin-left: 92rpx;
    margin-top: 76rpx;
    width: 140rpx;
    height: 40rpx;
    color: rgba(16, 16, 16, 100);
    font-size: 28rpx;
    text-align: left;
    font-family: PingFangSC-regular;
}

.cho_txt1 {
    margin-left: 28rpx;
    margin-top: 76rpx;
    width: 15rpx;
    height: 40rpx;
    color: rgba(16, 16, 16, 100);
    font-size: 28rpx;
    text-align: left;
    font-family: PingFangSC-regular;
}

.cho_txt2 {
    margin-left: 28rpx;
    margin-top: 76rpx;
    width: 140rpx;
    height: 40rpx;
    color: rgba(16, 16, 16, 100);
    font-size: 28rpx;
    text-align: left;
    font-family: PingFangSC-regular;
}

.cho_hour1 {
    margin-left: 35rpx;
    margin-top: 72rpx;
    width: 48rpx;
    height: 48rpx;
    line-height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 38rpx;
    border-radius: 12rpx;
    background-color: #f5d048;
    text-align: center;
    border: 2rpx solid rgba(245, 208, 75, 100);
}
.cho_afterhour1{
    margin-left: 35rpx;
    margin-top: 72rpx;
    width: 48rpx;
    height: 48rpx;
    line-height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 38rpx;
    border-radius: 12rpx;
    background-color:rgba(251,236,183);
    text-align: center;
    border: 2rpx solid rgba(245, 208, 75, 100);
}
.cho_hour2 {
    margin-left: 35rpx;
    margin-top: 72rpx;
    width: 48rpx;
    height: 48rpx;
    line-height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 38rpx;
    border-radius: 12rpx;
    background-color: #f5d048;
    text-align: center;
    border: 2rpx solid rgba(245, 208, 75, 100);
}
.cho_afterhour2{
    margin-left: 35rpx;
    margin-top: 72rpx;
    width: 48rpx;
    height: 48rpx;
    line-height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 38rpx;
    border-radius: 12rpx;
    background-color:rgba(251,236,183);
    text-align: center;
    border: 2rpx solid rgba(245, 208, 75, 100);
}
.cho_button {
    margin-left: 226rpx;
    margin-top: 42rpx;
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