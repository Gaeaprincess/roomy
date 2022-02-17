<template>
<view :class="className" @tap="itemCilck">
    <text>{{ content }}</text>
    <view v-if="className === 'quanzi1'">
        <image class="quzanzi1_img" src="/static/resources/hot.png"></image>
    </view>
</view>
</template>

<script>

export default {
  data() {
    return {};
  },

  components: {},
  props: {
    className: {
      type: String,
      default: 'quanzi'
    },
    content: {
      type: String,
      default: "#备考会计"
    },
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    itemCilck() {
      // console.log(this.properties.index);
      this.$emit('itemCilck', {
        detail: this.index
      });
    }

  }
};
</script>
<style>
.quanzi1{
    position: relative;
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
    position: relative;
    text-align: center;
    padding-top: 10rpx;
    width: 200rpx;
    height: 50rpx;
    background-color: rgb(232, 234, 235);
    border-radius: 30rpx;
    margin-bottom: 20rpx;
    margin-right: 20rpx;
}
.quzanzi1_img{
    width: 60rpx;
    height: 60rpx;
    position: absolute;
    top: -25rpx;
    right: -25rpx;
}
</style>