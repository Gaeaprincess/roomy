<template>
  <view>
    <view class="top">
      <uni-segmented-control :current="current"
                             :values="items"
                             @clickItem="onClickItem"
                             styleType="button"
                             activeColor="#F5D04B"></uni-segmented-control>
    </view>
    <view class="friend"
          v-show="current ===0">
      <view class="item"
            v-for="(item,index) in follower"
            :key="index">
        <image :src="item.avatar"
               class="image"></image>
        <view class="content">
          <view class="name">{{item.username}}</view>
          <view class="xiaoxi"></view>
        </view>
      </view>

    </view>
    <view class="lianxiren"
          v-show="current ===1">
      <view class="lianxiren_item"
            v-for="(item,index) in followings"
            :key="index">
        <image :src="item.avatar"
               class="lianxiren_image"></image>
        <view class="lianxiren_name">{{item.username}}</view>
        <view class="cancel"
              @click="unfollow(item.userid)">
          取消关注
        </view>
      </view>
    </view>
    <mpopup ref="mpopup"
            :isdistance="true"></mpopup>
  </view>
</template>

<script>
import { getfollower, getfollowings, postunfollow } from '@/api/myself.js'
import mpopup from "@/components/xuan-popup/xuan-popup.vue";
import { log } from '../../components/QS-tabs-wxs-list/js/config';
export default {
  data () {
    return {
      items: ["粉丝", "关注"],
      current: 0,
      follower: [],
      followings: []
    };
  },

  components: {
    mpopup
  },
  props: {},

  onLoad: function (options) {
    getfollower()
      .then(res => {
        this.follower = res.data
      })
      .catch(err => {
        console.log(err);
      });
    getfollowings()
      .then(res => {
        this.followings = res.data;
        console.log(this.followings);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    pop: function (msg) {
      this.$refs.mpopup.open({
        type: "success",
        content: msg,
        timeout: 2000,
      });
    },
    onClickItem (e) {
      if (this.current != e.currentIndex) {
        this.current = e.currentIndex;
      }
    },
    unfollow (id) {
      //调用取消关注的接口
      postunfollow(id)
        .then(res => {
          //取消成功，给予提示
          this.pop("取消关注成功");
          //刷新页面
          getfollowings()
            .then(res => {
              this.followings = res.data;
              console.log(this.followings);
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
};
</script>
<style>
page {
  padding-top: 30rpx;
  background-color: #f9f9f9;
}
.top {
  text-align: center;
  margin-bottom: 20rpx;
}
.left,
.right {
  display: inline-block;
  margin-bottom: 36rpx;
}
.left {
  border-top-left-radius: 40rpx;
  border-bottom-left-radius: 40rpx;
  background-color: #f5d04b;
  width: 160rpx;
  height: 60rpx;
  text-align: center;
  line-height: 60rpx;
  border: solid #f5d04b thin;
}
.right {
  border-top-right-radius: 40rpx;
  border-bottom-right-radius: 40rpx;
  background-color: #f5d04b;
  width: 160rpx;
  height: 60rpx;
  text-align: center;
  line-height: 60rpx;
  border: solid #f5d04b thin;
}
#left {
  background-color: #fff;
}
#right {
  background-color: #fff;
}
#friend {
  display: none;
}
#lianxiren {
  display: none;
}
.friend {
  background-color: #fff;
  padding-bottom: 40rpx;
}
.item {
  height: 130rpx;
  width: 654rpx;
  margin: 0rpx auto;
  padding-bottom: 20rpx;
  padding-top: 20rpx;
}
.image {
  float: left;
  margin-top: 20rpx;
  margin-left: 20rpx;
  margin-right: 40rpx;
  height: 100rpx;
  width: 100rpx;
  border-radius: 70rpx;
}
.content {
  float: left;
  width: 400rpx;
  padding-bottom: 10rpx;
  border-bottom: solid #bdbaba thin;
}
.name {
  margin-top: 20rpx;
}
.xiaoxi {
  margin-top: 20rpx;
}
.time {
  float: right;
  margin-top: -102rpx;
}
.lianxiren {
  background-color: #fff;
  padding-bottom: 40rpx;
}
.lianxiren_item {
  height: 130rpx;
  width: 654rpx;
  margin: 0rpx auto;
  padding-bottom: 20rpx;
  padding-top: 20rpx;
}
.lianxiren_image {
  float: left;
  margin-top: 20rpx;
  margin-left: 20rpx;
  margin-right: 40rpx;
  height: 100rpx;
  width: 100rpx;
  border-radius: 70rpx;
}
.lianxiren_name {
  float: left;
  line-height: 120rpx;
  width: 400rpx;
  border-bottom: solid #bdbaba thin;
}

.cancel {
  font-size: 18px;
  padding: 10px;
  border-radius: 20px;
  /* background-color: red; */
  float: right;
  margin-top: -80px;
  margin-right: 100px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
</style>