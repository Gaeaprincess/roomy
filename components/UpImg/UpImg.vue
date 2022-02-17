<template>
<view class="img_wrap">
    <image :src="src"></image>
    <icon type="clear" size="23" color="#F5D04B"></icon>
</view>
</template>

<script>

export default {
  data() {
    return {};
  },

  components: {},
  props: {
    src: {
      type: String,
      default: ""
    }
  },
  methods: {}
};
</script>
<style>
.img_wrap{
    width: 200rpx;
    height: 200rpx;
    position: relative;
}
.img_wrap image{
    width: 100%;
    height: 100%;
    border-radius: 15rpx;
}

.img_wrap icon{
    position: absolute;
    top: -20rpx;
    right: -20rpx;
}


</style>