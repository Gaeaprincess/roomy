<template>
  <view>
    <view class="top">
      <cover-image class="header_img"
                   src="@/static/bg1.jpeg"></cover-image>
      <view class="header_message">
        <view class="header_name">header_name</view>
        <view class="phone">手机号：11111</view>
      </view>
      <view class="clearfix"></view>
      <view class="one">上线时间：2022-10-10</view>
      <view class="one">下线时间：2022-10-10</view>
    </view>
    <view class="top">
      <cover-image class="header_img"
                   src="@/static/bg1.jpeg"></cover-image>
      <view class="header_message">
        <view class="header_name">header_name</view>
        <view class="phone">手机号：11111</view>
      </view>
      <view class="clearfix"></view>
      <view class="one">上线时间：2022-10-10</view>
      <view class="one">下线时间：2022-10-10</view>
    </view>
  </view>
</template>

<script>
export default {
  name: "message"
}
</script>

<style scoped>
.top {
  width: 75%;
  height: 250px;
  background-color: rgb(241, 239, 239);
  border-radius: 20px;
  margin: 50px auto;
  padding: 15px;
}
.header_img {
  float: left;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.header_message {
  font-size: 16px;
  margin-left: 20px;
  float: left;
}

.header_name {
  padding-bottom: 10px;
  margin-top: 10px;
}
.clearfix::after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.one {
  margin-top: 30px;
  font-size: 18px;
}
</style>