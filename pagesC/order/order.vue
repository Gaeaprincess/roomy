<template>
  <view>
    <view class="top">
      <!-- <view class="left" :model:id="left" @tap="left">预约中</view>
    <view class="right" :model:id="right" @tap="right">已使用</view> -->
      <ms-tabs
        :list="list"
        v-model="current"
        lineColor="#F5D04B"
        itemColor="#F5D04B"
      ></ms-tabs>
    </view>
    <view v-show="current === 0">
      <view
        class="shiyong common"
        v-for="(item, index) in pre_message"
        :key="index"
      >
        <view class="day"
          ><text>预约日期：</text
          >{{ item.start_time.slice(0, item.start_time.indexOf("T")) }}</view
        >
        <view class="time"
          ><text>预约时间：</text
          >{{
            item.start_time.substring(
              item.start_time.indexOf("T") + 1,
              item.start_time.indexOf("T") + 6
            )
          }}-{{
            item.end_time.substring(
              item.end_time.indexOf("T") + 1,
              item.end_time.indexOf("T") + 6
            )
          }}</view
        >
        <view class="area"><text>座位：</text>JY0{{ item.seat_id }}</view>
        <!-- <view class="money"><text>已支付：</text>25元</view> -->
        <button
          style="
            background-color: #f5d04b;
            color: white;
            float: right;
            line-height: 60rpx;
            width: 200rpx;
            height: 60rpx;
            padding: 0;
            margin-right: 20rpx;
          "
          @click="pop_mima"
        >
          立即使用
        </button>
        <!-- <view class="dizhi"><text>地址：</text><text id="info">翠屏区白沙湾四川轻化工大学</text></view> -->
      </view>
    </view>
    <view v-show="current === 1">
      <view
        class="shiyong common"
        v-for="(item, index) in old_message"
        :key="index"
      >
        <view class="day"
          ><text>预约日期：</text
          >{{ item.start_time.slice(0, item.start_time.indexOf("T")) }}</view
        >
        <view class="time"
          ><text>预约时间：</text
          >{{
            item.start_time.substring(
              item.start_time.indexOf("T") + 1,
              item.start_time.indexOf("T") + 6
            )
          }}-{{
            item.end_time.substring(
              item.end_time.indexOf("T") + 1,
              item.end_time.indexOf("T") + 6
            )
          }}</view
        >
        <view class="area"><text>座位：</text>JY0{{ item.seat_id }}</view>
        <button
          style="
            background-color: #f5d04b;
            color: white;
            float: right;
            line-height: 60rpx;
            width: 200rpx;
            height: 60rpx;
            padding: 0;
            margin-right: 20rpx;
          "
        >
          立即离开
        </button>
      </view>
    </view>
    <mpopup ref="mpopup" :isdistance="true"></mpopup>
  </view>
</template>

<script>
import * as myself from "@/api/myself.js";
import mpopup from "@/components/xuan-popup/xuan-popup.vue";
import { log } from "../../components/QS-tabs-wxs-list/js/config";
// import { log } from '../../components/QS-tabs-wxs-list/js/config';
export default {
  data() {
    return {
      content: "",
      list: [
        {
          title: "预约",
        },
        {
          title: "已使用",
        },
      ],
      current: 0,
      pre_message: [],
      old_message: [],
      pop_msg: "",
    };
  },

  components: {
    mpopup,
  },
  props: {},
  computed: {
    timestamp() {
      return Date.parse(new Date());
    },
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    myself.getOrder().then((res) => {
      let date;
      console.log(res.data);
      res.data.forEach((element) => {
        date = new Date(
          element.start_time.slice(0, element.start_time.indexOf("T")) +
            " " +
            element.start_time.substring(
              element.start_time.indexOf("T") + 1,
              element.start_time.indexOf("T") + 6
            )
        );
        if (date.getTime() > this.timestamp) {
          this.pre_message.push(element);
        } else {
          this.old_message.push(element);
        }
      });
      res.data.length
        ? (this.pop_msg = `加载${res.data.length}条数据完成`)
        : (this.pop_msg = "没有订单");
      this.pop(this.pop_msg);
    });
  },
  onShareAppMessage: function () {},
  methods: {
    pop_mima() {
      myself.getpwd()
        .then((res) => {
          this.pop("自习室密码为" + res.data.nonce);
        });
    },
    pop: function (msg) {
      this.$refs.mpopup.open({
        type: "success",
        content: msg,
        timeout: 2000,
      });
    },
    reportClickItem(e) {
      if (this.current != e.currentIndex) {
        this.current = e.currentIndex;
      }
    },
    open() {
      this.$refs.popup.open("top");
    },
  },
};
</script>
<style scoped>
page {
  background-color: #f9f9f9;
}
.top {
  width: auto;
  height: 48rpx;
  background-color: #fff;
  margin-bottom: 10rpx;
}
.common {
  width: 650rpx;
  height: 200rpx;
  /* line-height: 50rpx; */
  border-radius: 20rpx;
  /* text-align: center; */
  box-shadow: 0rpx 4rpx 12rpx 0rpx rgba(0, 0, 0, 0.4);
  margin: 100rpx auto;
  padding: 40rpx;
}
text {
  font-weight: bolder;
  padding-right: 10rpx;
  font-size: 32rpx;
  display: inline-block;
}
#info {
  font-weight: normal;
  display: inline-block;
  width: 300rpx;
  vertical-align: top;
}
/* .shiyong {
}
.meiyong {x
} */
</style>
