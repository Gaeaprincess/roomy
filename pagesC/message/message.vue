<template>
  <view>
    <view class="top"
          v-show="is_show">
      <cover-image class="header_img"
                   src="@/static/bg1.jpeg"></cover-image>
      <view class="header_message">
        <view class="header_name">aaa</view>
        <view class="phone">手机号：11111</view>
      </view>
      <view class="clearfix"></view>
      <view class="one">上线时间：2022-10-10</view>
      <view class="one">下线时间：2022-10-10</view>
    </view>

    <view class="top"
          v-for="(item,index) in details"
          :key="index">
      <cover-image class="header_img"
                   :src="item.follower.avatar"></cover-image>
      <view class="header_message">
        <view class="header_name">昵称：{{item.follower.username}}</view>
        <view class="phone">个性签名：{{item.follower.bio}}</view>
      </view>
      <view class="clearfix"></view>
      <view class="one">上线时间：{{item.time.substring(0,10)}}</view>
      <view class="one">人家都在努力学习，你也要加油学习呀</view>
    </view>
  </view>
</template>

<script>
import * as myself from "@/api/myself.js"

export default {
  name: "message",
  data () {
    return {
      details: [],
      is_show: true
    }
  },
  onLoad: function () {
    myself.getnotification()
      .then(res => {
		console.log(res.data)
        if (res.data.notifications.length > 0) {
          this.is_show = false;
          console.log(res.data.notifications);
          this.details = res.data.notifications[0].details
        }
        else {
          this.details[0] = {
            follower: {
              avatar: '',
              username: '',
              bio: ''
            },
            time: ''
          }
        }
      })
  },
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