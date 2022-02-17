<template>
<view>
<!--pages/pay/pay.wxml-->
<view class="top">
    <view class="information">
        <view class="row">
            <view class="txt1">预约日期:</view>
            <text class="txt2">{{date}}</text>
        </view>
        <view class="row">
            <view class="txt1">预约时间:</view>
            <text class="txt2">{{time}}</text>
        </view>
        <view class="row">
            <view class="txt1">座位:</view>
            <text class="txt2">{{seat}}</text>
        </view>
        <view class="row">
            <view class="txt1">预计费用:</view>
            <text class="txt2">{{cost}}元</text>
        </view>
    </view>
    <view class="rechoose" @tap="re_choose">重新选座位</view>
</view>
<view class="bottom">
    <view class="pay" @tap="pay_card">使用卡券</view>
    <view class="pay" @tap="pay_wx">微信支付</view>
</view>
</view>
</template>

<script>

export default {
  data() {
    return {
      date: "2021-10-06",
      time: "06:00-09:00",
      seat_i: ["JY", "JP", "YG"],
      cost: "25",
      seat: ""
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    console.log(option);
    var i = option.i;
    var j = option.j;
    var date = option.date;
    var time = option.time;
    this.setData({
      seat: this.seat_i[i] + "_" + j,
      date: date,
      time: time
    }); // console.log(option.query)
    // const eventChannel = this.getOpenerEventChannel()
    // eventChannel.emit('acceptDataFromOpenedPage', {
    //   data: 'test'
    // });
    // eventChannel.emit('someEvent', {
    //   data: 'test'
    // });
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    // eventChannel.on('acceptDataFromOpenerPage', function (data) {
    //   console.log(data)
    // })
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
    re_choose() {
      uni.navigateTo({
        url: '/pagesA/chooseseat/chooseseat'
      });
    },

    pay_wx(e) {
      var that = this;
      uni.request({
        header: {
          'Authorization': 'Bearer' + uni.getStorageSync('token')
        },
        url: app.host + "/pay/wxpay",
        data: {
          money: that.czmoney
        },
        method: 'POST',

        success(res) {
          console.log(res);

          if (res.data.status_code == 200) {
            // 拿到数据，再次发起请求，
            唤醒支付所需要的字段;
            const payargs = res.data.data; // 8.调用微信支付api

            uni.requestPayment({
              timeStamp: payargs.timeStamp,
              nonceStr: payargs.nonceStr,
              package: payargs.package,
              signType: payargs.signType,
              paySign: payargs.paySign,

              success(res2) {
                uni.reLaunch({
                  url: '../../pagesA/wallet/index'
                });
              },

              fail(res3) {
                uni.showToast({
                  title: '支付失败！',
                  icon: 'none',
                  duration: 2000
                });
              }

            });
          } else {
            uni.showToast({
              title: res.data.message,
              icon: 'none',
              duration: 2000
            });
          }
        }

      });
    },

    pay_card() {
      console.log("占位：函数 pay_card 未声明");
    }

  }
};
</script>
<style>
/* pages/pay/pay.wxss */
.top {
    margin-left: 50rpx;
    margin-top: 60rpx;
    width: 325px;
    height: 163px;
    line-height: 20px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);
}

.information {
    margin-top: 72rpx;
    margin-left: 168rpx;
    width: 314rpx;
    height: 166rpx;
    color: rgba(16, 16, 16, 100);
    font-size: 28rpx;
    text-align: left;
    font-family: PingFangSC-regular;
}

/* .row{
    display: inline-block;
} */
.txt1 {
    text-align: left;
    width: 130rpx;
    display: inline-block;
}

.rechoose {
    margin-left: 206rpx;
    margin-top: 14rpx;
    width: 240rpx;
    height: 60rpx;
    line-height: 60rpx;
    border-radius: 30rpx;
    background-color: rgba(245, 208, 75, 100);
    color: rgba(16, 16, 16, 100);
    font-size: 28rpx;
    text-align: center;
    font-family: Microsoft Yahei;
}

.bottom {
    margin-left: 50rpx;
    margin-top: 78rpx;
    width: 650rpx;
    height: 894rpx;
    line-height: 40rpx;
    border-radius: 30rpx;
    text-align: center;
    box-shadow: 0rpx 4rpx 12rpx 0rpx rgba(0, 0, 0, 0.4);
}

.pay {
    margin-left: 50rpx;
    margin-top: 40rpx;
    width: 550rpx;
    height: 88rpx;
    line-height: 88rpx;
    border-radius: 20rpx;
    color: rgba(16, 16, 16, 100);
    font-size: 28rpx;
    text-align: center;
    box-shadow: 0rpx 4rpx 12rpx 0rpx rgba(0, 0, 0, 0.4);
    font-family: Microsoft Yahei;
}
</style>