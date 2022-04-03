<template>
<!--pages/myself/myself.wxml-->
<view>
    <view class="top_container">
        <view class="top">
        <cover-image class="header_img" v-bind:src="all.avatar"></cover-image>
        <view class="header_message">
            <view class="header_name">{{all.username}}</view>
            <view class="vip" v-show="all.is_pro">vip</view>
            <view class="phone">手机号：{{all.phone}}</view>
        </view>
        <view class="clear"></view>
        </view>
    </view>
    <view class="banner">
        <swiper autoplay="true" indicator-dots="true" circular="true" easing-function="linear">
            <swiper-item class="a"></swiper-item>
            <swiper-item class="b"></swiper-item>
        </swiper>
    </view>
    <view class="bottom">
        <view class="all_container" @tap="goto_card">
            <view class="img_container">
                <image src="/static/image/taocan.png" class="image_item"></image>
            </view>
            <view class="text_container">
                卡券套餐
            </view>
        </view>
        <view class="all_container" @tap="goto_friends">
            <view class="img_container  friend">
                <image src="/static/image/goodfriends.png" class="image_item"></image>
            </view>
            <view class="text_container">
                好友
            </view>
        </view>
        <view class="all_container" @tap="goto_vip">
            <view class="img_container  VIP">
                <image src="/static/image/vip_1.png" class="image_item"></image>
            </view>
            <view class="text_container">
                VIP
            </view>
        </view>
        <view class="all_container" @tap="goto_order">
            <view class="img_container">
                <image src="/static/image/naozhong.png" class="image_item"></image>
            </view>
            <view class="text_container">
                我的预约
            </view>
        </view>
        <view class="all_container">
            <view class="img_container">
                <image src="/static/image/zizhu.png" class="image_item"></image>
            </view>
            <view class="text_container">
                自助设备
            </view>
        </view>
        <view class="all_container" @tap="goto_shop">
            <view class="img_container">
                <image src="/static/image/shop.png" class="image_item"></image>
            </view>
            <view class="text_container">
                店铺收藏
            </view>
        </view>
        <view class="all_container" @tap="goto_dynamic">
            <view class="img_container">
                <image src="/static/image/dynatic.png" class="image_item"></image>
            </view>
            <view class="text_container">
                我的动态
            </view>
        </view>
        <view class="all_container" @tap="goto_gear">
            <view class="img_container gear">
                <image src="/static/image/gear.png" class="image_item"></image>
            </view>
            <view class="text_container">
                设置
            </view>
        </view>
    </view>
</view>
</template>

<script>
import * as myself from "@/api/myself.js"
export default {
  data() {
    return {
			all:{
				username:"",
				phone:"",
				is_pro:"",
				userid:'',
				avatar:'/static/image/header_img.png'
			}
		};
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		myself.getUserInfo()
					.then(res=>{
            console.log(res);
						this.all = res.data
					})
					.catch(err=>err)
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
    goto_vip() {
      uni.navigateTo({
        url: "/pagesC/vip/vip"
      });
    },

    goto_gear() {
      uni.navigateTo({
        url: "/pagesC/gear/gear"
      });
    },

    goto_dynamic() {
      uni.navigateTo({
        url: '/pagesC/dynamic/dynamic'
      });
    },

    goto_shop() {
      uni.navigateTo({
        url: "/pagesC/shop_1/shop"
      });
    },

    goto_order() {
      uni.navigateTo({
        url: '/pagesC/order/order'
      });
    },

    goto_card() {
      uni.navigateTo({
        url: '/pagesC/card/card'
      });
    },

    goto_friends() {
      uni.navigateTo({
        url: "/pagesC/friends/friends"
      });
    }

  }
};
</script>
<style>
/* pages/myself/myself.wxss */
page{
    background-color: #F9F9F9;
}
.top_container{
    height: 140rpx;
    width: auto;
    padding-top: 60rpx;
    padding-left: 60rpx;
    background-color: #fff;
}
.top{
    float: left;
    margin: 0rpx auto;
    width: 600rpx;
    font-size: 28rpx;
}
.header_img{
    float: left;
    height: 100rpx;
    width: 100rpx;
    border-radius: 70rpx;
}
.header_message{
    float: left;
    margin-left: 20rpx;
}
.header_name{
    display: inline-block;
}
.vip{
    background-color: #F5D04B;
    display: inline-block;
    margin-left: 20rpx;
    padding-right: 12rpx;
    padding-left: 12rpx;
}
.phone{
    margin-top: 20rpx;
}
.clear{
    clear: both;
}
swiper{
    background-color: red;
}
	
.a{
	background-image: url('https://tse3-mm.cn.bing.net/th/id/OIP-C.n0szoETar9E4Ivsnjh6A2AHaGB?w=205&h=180&c=7&r=0&o=5&pid=1.7');
	background-size: cover;
}

.b{
	background-image: url(/static/image/overall3.jpg);
	background-size: cover;
}
.banner{
    margin: 0 auto;
    margin-top: 28rpx;
    width: 650rpx;
    height:240rpx;
    border-radius: 10rpx;
}
swiper{
    border-radius: 10rpx;
    height: 240rpx;
}
.img_container{
    width: 100rpx;
    height: 100rpx;
    border-radius: 70rpx;
    background-color: rgba(245, 208, 75, 45);
    margin: 0 auto;
}
.bottom:after{
    content: " ";
    display: block;
    clear: both;
}
.text_container{
    font-size: 28rpx;
    margin: 0 auto;
    text-align: center;
}
.bottom{
    margin-top: 28rpx;
    padding-top: 20rpx;
    background-color: #fff;
    height: 766rpx;
}
.all_container{
    float: left;
    margin-left: 100rpx;
    margin-top: 70rpx;
}
.VIP,.friend,.gear{
    margin: 0rpx 6rpx;
}
/* .a{
    background-color: pink;
} */
.image_item{
    display: inline-block;
    height: 60rpx;
    width: 60rpx;
    margin: 20rpx 20rpx;
}
</style>