<template>
<!--logs.wxml日志-->
<view class="container log-list">
  <block v-for="(log, index) in logs" :key="index">
    <text class="log-item">{{index + 1}}. {{log.date}}</text>
  </block>
</view>
</template>

<script>
// logs.js
const util = require("../../util/util.js");

export default {
  data() {
    return {
      logs: []
    };
  },

  components: {},
  props: {},

  onLoad() {
    this.setData({
      logs: (uni.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        };
      })
    });
  },

  methods: {}
};
</script>
<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}
.log-item {
  margin: 10rpx;
}

</style>