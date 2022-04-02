<template>
<view>

<view class="top">
  <!-- <text class="title">宜宾</text>
  <image class="arrow" src="/image/arrow.png" ></image> -->
  <region-picker @change="bindRegionChange" :value="region">
        <view class="picker">
            {{region[2]}}<image class="arrow" src="/static/image/arrow_.png"></image>
        </view>
  </region-picker>
  <swiper class="swi" indicator-dots="true" autoplay="true" interval="3000">
    <swiper-item>
      <image class="img1" src="/static/image/overall.jpg"></image>
    </swiper-item>
    <swiper-item>
      <image class="img1" src="/static/image/overall2.jpg"></image>
    </swiper-item>
    <swiper-item>
      <image class="img1" src="/static/image/overall3.jpg"></image>
    </swiper-item>
  </swiper>

</view>
<view class="title2">附近门店</view><!--v-for="(item, index) in list" :key="index"-->
<view  class="shop" @tap="regionFun">
  <image class="img2" src="/static/image/shop_1.png"></image>
  <view class="txt">
    <view class="txt1">{{item.title}}</view>
    <view class="txt1">{{item.place}}</view>
    <view class="txt1">{{item.time}}</view>
  </view>
</view>
</view>
</template>

<script>
import  userAPI from "@/api/user.js"
import  shopAPI from "@/api/seat.js"
export default {
  data() {
    return {
      region: ['四川省', '宜宾市', '翠屏区'],
      // customItem: '全部',
      // list: [{
      //   title: "智慧自习室",
      //   place: "地点：四川轻化工大学城",
      //   time: "经营时间:00:00-24:00"
      // }, {
      //   title: "智慧自习室",
      //   place: "地点：四川轻化工大学城",
      //   time: "经营时间:00:00-24:00"
      // }],
	  shop:{} 
    };
  },

  components: {},
  props: {},
  methods: {
    bindRegionChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value);
      this.setData({
        region: e.detail.value
      });
    },
    regionFun: function () {
      uni.navigateTo({
        url: '/pagesA/shop/shop'
      });
    },
    // 获取用户数据
    getInfoByUserId(){
      userAPI.getUserInfo().then(res=>{
        console.log('1111',res);
      }).catch(err=>{
        console.log(err);
      })
    },
	getShop(geolocation){
		shopAPI.getShop(geolocation).then(res => {
			console.log(res.data);
			this.setData({
				shop:res.data,
			});
		}).catch(err => {
			console.log(err);
		})
	}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(uni.getStorageSync('id'));
    this.getInfoByUserId(),
	this.getShop(273323.19856,7234123.96344712)
	console.log(11)
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

};
</script>
<style scoped>
.top {
  width: 100%;
  height: 450rpx;
  font-size: 36rpx;
  margin-top: 20rpx;
  /* border: 1rpx solid black; */
}

.picker {
  /* padding: 19rpx 26rpx; */
  margin-left: 50rpx;
  /* margin-top: 50rpx; */
  /* background-color: #FFFFFF;
  border: 1rpx solid cornflowerblue; */
}

.title {
  margin-left: 50rpx;
  margin-top: 56rpx;
  /* width: 72rpx;
  height: 52rpx; */
  font-size: 36rpx;
  /* text-align: left; */
}

.arrow {
  margin-left: 14rpx;
  margin-top: 0rpx;
  width: 36rpx;
  height: 36rpx;
}

.swi {

  width: 100%;
  height: 350rpx;
}

.img1 {
  width: 90%;
  height: 300rpx;
  margin-top: 48rpx;
  margin-left: 5%;
  border-radius: 20rpx;
}

.title2 {
  margin-left: 50rpx;
  margin-top: 22rpx;
  width: 192rpx;
  height: 66rpx;
  color: rgba(16, 16, 16, 100);
  font-size: 48rpx;
  text-align: left;
  font-family: PingFangSC-regular;
}

.shop {
  margin-left: 50rpx;
  margin-top: 54rpx;
  width: 650rpx;
  height: 284rpx;
  line-height: 40rpx;
  border-radius: 30rpx;
  color: rgba(16, 16, 16, 100);
  background-color: #ffffff;
  font-size: 28rpx;
  /* text-align: center; */
  box-shadow: 0rpx 4rpx 12rpx 0rpx rgba(0, 0, 0, 0.4);
  font-family: Arial;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.img2 {
  margin-left: 20rpx;
  margin-top: 20rpx;
  width: 288rpx;
  height: 240rpx;
  border-radius: 34rpx;
}

.txt {
  margin-left: 16rpx;
  margin-top: 46rpx;
  width: 308rpx;
  height: 190rpx;
  color: rgba(16, 16, 16, 100);
  font-size: 28rpx;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}

.txt1 {
  /* margin-left: 16rpx; */
  margin-top: 20rpx;
}
</style>
