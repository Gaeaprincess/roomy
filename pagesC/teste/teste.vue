<template>
  <view class="top">
    <mpopup ref="mpopup"
            :isdistance="true"></mpopup>
    <view class="content">
      姓名：
      <input type="text"
             v-model="attribute.username" />
    </view>
    <view class="content">
      头像：
      <input type="text"
             v-model="attribute.avatar" />
    </view>
    &nbsp;
    <view class="content bottom">
      简介：
      <input type="text"
             v-model="attribute.bio" />
    </view>
    &nbsp;
    <button @click="sub"
            class="btn">提交</button>

  </view>
</template>

<script>
import * as myself from "@/api/myself.js"
import mpopup from '@/components/xuan-popup/xuan-popup.vue'
export default {
  data () {
    return {
      attribute: {
        username: '',
        avatar: '',
        bio: ''
      }
    }
  },
  components: {
    mpopup,
  },
  methods: {
    pop: function (msg) {
      this.$refs.mpopup.open({
        type: 'success',
        content: msg,
        timeout: 2000,
      });
    },
    sub () {
      //转换成为JSON格式
      let data = JSON.stringify(this.$data.attribute);

      myself.putInformation(data)
        .then((res) => {
          this.pop(res.msg);
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.top {
  /* background-color: red; */
  width: 90%;
  margin: 0 auto;
  padding: 10px;
  margin-top: 200px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}
.content {
  padding: 8px;
  font-size: 30px;
  margin-top: 20px;
  border-bottom: 1px solid #e8e8e8;
}

.bottom {
  margin-bottom: 20px;
}

input {
  /* margin-top: 10px; */
  height: 60px;
  font-size: 30px;
}
.btn {
  background-color: #00bfa6;
  padding: 14px 40px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  border-radius: 10px;
  border: 2px dashed #00bfa6;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: 0.4s;
}

.btn span:last-child {
  display: none;
}

.btn:hover {
  transition: 0.4s;
  border: 2px dashed #00bfa6;
  background-color: #fff;
  color: #00bfa6;
}

.btn:active {
  background-color: #87dbd0;
}
</style>
