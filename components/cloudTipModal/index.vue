<template>
<!--miniprogram/components/cloudTipModal/index.wxml-->
<view class="install_tip" v-if="showUploadTip">
  <view class="install_tip_back"></view>
  <view class="install_tip_detail">
    <view class="install_tip_detail_title">体验前需部署云资源</view>
    <view class="install_tip_detail_tip">请开启调试器进入终端窗口，复制并运行以下命令</view>
    <view class="install_tip_detail_shell">
      {{tipText}}
      <view @tap="copyShell" class="install_tip_detail_copy">复制</view>
    </view>
    <view @tap="onChangeShowUploadTip" class="install_tip_detail_button">已执行命令</view>
  </view>
</view>
</template>

<script>
// miniprogram/components/cloudTipModal/index.js
const {
  isMac
} = require("../../envList.js");

export default {
  data() {
    return {
      showUploadTip: false,
      tipText: isMac ? 'sh ./uploadCloudFunction.sh' : './uploadCloudFunction.bat'
    };
  },

  components: {},
  props: {
    showUploadTipProps: Boolean
  },
  watch: {
    "showUploadTipProps": {
      handler: function (showUploadTipProps) {
        this.setData({
          showUploadTip: showUploadTipProps
        });
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    onChangeShowUploadTip() {
      this.setData({
        showUploadTip: !this.showUploadTip
      });
    },

    copyShell() {
      uni.setClipboardData({
        data: this.tipText
      });
    }

  }
};
</script>
<style>
.install_tip_back {
  position: fixed;
  top: 0;/*  #ifdef  H5  */
  top: calc(88rpx + constant(safe-area-inset-top));
  top: calc(88rpx + env(safe-area-inset-top));/*  #endif  */
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,0.4);
  z-index: 1;
}

.install_tip_detail {
  position: fixed;
  background-color: white;
  right: 0;
  bottom: 0;
  left: 0;
  top: 60%;
  border-radius: 40rpx 40rpx 0 0;
  padding: 50rpx;
  z-index: 9;
}

.install_tip_detail_title {
  font-weight: 400;
  font-size: 40rpx;
  text-align: center;
}

.install_tip_detail_tip {
  font-size: 25rpx;
  color: rgba(0,0,0,0.4);
  margin-top: 20rpx;
  text-align: center;
}

.install_tip_detail_shell {
  margin: 70rpx 0;
  display: flex;
  justify-content: center;
}

.install_tip_detail_copy {
  color: #546488;
  margin-left: 10rpx;
}

.install_tip_detail_button {
  color: #07C160;
  font-weight: 500;
  background-color: rgba(0,0,0,0.1);
  width: 60%;
  text-align: center;
  height: 90rpx;
  line-height: 90rpx;
  border-radius: 10rpx;
  margin: 0 auto;
}
</style>