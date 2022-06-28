<template>
  <view>
    <view class="top">
      <image src="../static/image/money.png"></image>
      <view class="tittle">我的余额</view>
      <view class="content">￥{{count}}</view>
    </view>
    <view class="top2">
      <view class="content2">
        <p>金额</p>
        <input type="text"
               v-model="amount" />
      </view>
      &nbsp;
      <view class="content2 bottom">
        <p>密码</p>
        <input type="password"
               v-model="pwd" />
      </view>
    </view>
    <button class="cssbuttons-io-button"
            @click="recharge(amount)">
      <svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           width="24"
           height="24">
        <path fill="none"
              d="M0 0h24v24H0z"></path>
        <path fill="currentColor"
              d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path>
      </svg>
      <span class="add">recharge</span>
    </button>

    <xy-dialog :show="show"
               title="提示"
               content="充值成功"
               @cancel="clickCancel('cancel')"
               @confirmButton="clickConfirm()">
    </xy-dialog>

  </view>
</template>

<script>
import { postrecharge, getUserInfo, getmoney, setprice } from "@/api/myself.js";
import myDialog from '@/components/xy-dialog/mydialog.vue';
import { log } from '../../components/QS-tabs-wxs-list/js/config';
export default {
  data () {
    return {
      show: false,
      amount: '',
      pwd: '',
      count: ''
    };
  },

  components: {
    myDialog,
  },
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getUserInfo()
      .then(res => {
        console.log(res.data.remaining_credit);
        this.count = res.data.remaining_credit;
      })
      .catch(err => {
        console.log(err);
      })
  },


  onShareAppMessage: function () { },
  methods: {
    clickConfirm () {
      //获取充值订单
      getmoney()
        .then(res => {
          console.log(res.data);
          //将订单第一个设置为已经支付
          console.log(res.data[0].id);
          setprice(res.data[0].id)
            .then(res => {
              console.log(res.msg);
            })
            .catch(err => {
              console.log(err);
            })
        })
        .catch(err => {
          console.log(err);
        })
      this.show = false;
    },
    SHOW () {
      this.show = true
    },
    recharge (amount) {
      this.count = this.count + Number(amount);
      postrecharge(Number(amount))
        .then(res => {
          this.amount = '';
          this.pwd = '';
          this.SHOW();
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
  background-color: #f9f9f9;
}
.top {
  width: 652rpx;
  height: 466rpx;
  margin: 80rpx auto;
  padding-top: 32rpx;
  border-radius: 40rpx;
  background-color: #fff;
}
image {
  display: block;
  margin: 0 auto;
  height: 240rpx;
  width: 240rpx;
}
.tittle {
  /* width: 652rpx; */
  margin-top: 30rpx;
  margin-bottom: 16rpx;
  text-align: center;
}
.content {
  text-align: center;
  font-size: 72rpx;
  font-weight: 600;
}
/* button {
  background-color: #bbbbbb;
} */

.add {
  font-size: 24px;
  font-weight: 800;
  line-height: 50px;
}
.cssbuttons-io-button {
  margin-top: 50px;
  width: 400px;
  display: flex;
  align-items: center;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  padding: 0.7em 1.4em 0.7em 1.1em;
  color: white;
  background: #ad5389;
  background: linear-gradient(
    0deg,
    rgba(20, 167, 62, 1) 0%,
    rgba(102, 247, 113, 1) 100%
  );
  border: none;
  box-shadow: 0 0.7em 1.5em -0.5em #14a73e98;
  letter-spacing: 0.05em;
  border-radius: 20em;
}

.cssbuttons-io-button svg {
  margin-right: 6px;
  margin-left: 100px;
}

.cssbuttons-io-button:hover {
  box-shadow: 0 0.5em 1.5em -0.5em #14a73e98;
}

.cssbuttons-io-button:active {
  box-shadow: 0 0.3em 1em -0.5em #14a73e98;
}

.top2 {
  /* background-color: red; */
  width: 80%;
  padding: 20px;
  margin: 80rpx auto;
  padding-top: 32rpx;
  border-radius: 40rpx;
  background-color: #fff;
}

p {
  text-align: center;
}

input {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  border-radius: 10px;
  padding: 10px;
  border-bottom: 1px solid rgb(204, 199, 199);
  width: 60%;
  margin: 20px auto;
}
</style>