<template>
<view>
<view class="header">
    <view class="tubiao1">#</view>
    <view class="tiaoti">近期热门话题</view>
</view>
<quanzi :xuanze="showQuan"></quanzi>

<!-- <input type="text" /> -->

<view class="footer" @tap="addHuaTi">继续添加多个话题</view>
</view>
</template>

<script>
import quanzi from "../../components/quan_zi/quanzi";

export default {
  data() {
    return {
      showQuan: [{
        content: "#备考考研",
        isHot: true
      }, {
        content: "#备考教资",
        isHot: true
      }, {
        content: "#备考会计",
        isHot: true
      }, {
        content: "#备考计算机",
        isHot: false
      }, {
        content: "#备考高考",
        isHot: false
      }, {
        content: "#备考中考",
        isHot: false
      }]
    };
  },

  components: {
    quanzi
  },
  props: {},
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
    itemCilck(e) {
      console.log(e.detail);
      console.log(this.showQuan[e.detail]);
    },

    /**
     * 生命周期函数--监听页面加载
     */
    addHuaTi() {
      let _1 = this.showQuan;

      _1.push({
        content: '#dongxi',
        isHot: true
      });

      this.setData({
        showQuan: _1
      });
    }

  }
};
</script>
<style>
.header{
    display: flex;
    line-height: 60rpx;
    margin-left: 50rpx; 
}
.tubiao1{
    width: 60rpx;
    height: 60rpx;
    font-size: 60rpx;
    color: #FB0707;
}
.biaoti{
    width: 60rpx;
    height: 60rpx;
    font-size: 50rpx;
}
.xuanze{
    margin-top: 30rpx;
    display: flex;
    margin-left: 50rpx;
    font-size: 25rpx;
    flex-wrap: wrap;
} 
.quanzi1{
    text-align: center;
    padding-top: 10rpx;
    width: 200rpx;
    height: 50rpx;
    color: red;
    background-color: #fccfcf;
    border-radius: 30rpx;
    margin-bottom: 20rpx;
    margin-right: 20rpx;
}
.quanzi{
    text-align: center;
    padding-top: 10rpx;
    width: 200rpx;
    height: 50rpx;
    background-color: rgb(232, 234, 235);
    border-radius: 30rpx;
    margin-bottom: 20rpx;
    margin-right: 20rpx;
}
.footer{
    margin: 20rpx auto;
    width: 250rpx;
    font-size: 28rpx;
    color: red;
}
</style>