<template>
  <view class="top">
    <time-line
      ref="timeline"
      location="center"
      title="我的时间轴"
      :arr="arr"
    ></time-line>
  </view>
</template>

<script>
import timeLine from "@/components/xuan-timeLine/xuan-timeLine.vue"
import { getchicken } from "../../api/myself.js"
export default {
  data() {
    return {
      arr: [],
    }
  },

  components: {
    timeLine,
  },
  props: {},

  onShow: function (options) {
    getchicken().then((res) => {
      console.log(res)
      this.arr = res.data
      console.log(this.arr)
    })
  },

  methods: {},
}
</script>
<style>
page {
  background-color: #f9f9f9;
}
</style>
