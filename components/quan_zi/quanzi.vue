<template>
<view>
<block>

    <view v-for="(item, index) in xuanze" :key="index" :class="(index%3 === 0 ? 'item-left':'') + ' ' + (index === selectIdx ? 'action' : 'noAction') + ' item'" @tap="itemClick" :data-selectIdx="index">
        {{item.content}}
        
            <image v-if="item.isHot" class="quzanzi1_img" src="/static/resources/hot.png"></image>
    </view>
    
</block>
</view>
</template>

<script>

export default {
  data() {
    return {
      // xuanze: [],
      selectIdx: 0
    };
  },

  components: {},
  props: {
    xuanze: {
      type: Array,
      default: () => [{
        content: '#备考考研 ',
        isHot: false
      }, {
        content: '#备考教资 ',
        isHot: false
      }, {
        content: '#备考会计 ',
        isHot: true
      }, {
        content: '#备考计算机 ',
        isHot: false
      }, {
        content: '#备考高考 ',
        isHot: true
      }, {
        content: '#备考中考 ',
        isHot: false
      }]
    }
  },
  methods: {
    itemClick(e) {
      // console.log(e);
      this.setData({
        selectIdx: e.currentTarget.dataset.selectidx
      }); // console.log(this.properties.xuanze[ e.currentTarget.dataset.selectidx ]);

      this.$emit('myevent', {
        detail: this.properties.xuanze[e.currentTarget.dataset.selectidx].content
      });
    }

  }
};
</script>
<style>
/* pages/xinzeng/ChildCpm/quanzi/quanzi.wxss */


.action{
    color: white;
    background-color: rgb(245,208,75);
}

.noAction{
     background-color: rgb(232, 234, 235);
}

.item{
    position: relative;
    display: inline-block;
    text-align: center;
    padding-top: 10rpx;
    width: 200rpx;
    height: 50rpx;
    border-radius: 30rpx;
    margin-top: 20rpx;
    margin-right: 30rpx;
    font-size: 28rpx;
}
/* .item:nth-child(1){
    margin-left: 50rpx;
}
.item:nth-child(4){
    margin-left: 50rpx;
} */
.item-left{
    margin-left: 50rpx;
}
.quzanzi1_img{
    width: 60rpx;
    height: 60rpx;
    position: absolute;
    top: -25rpx;
    right: -25rpx;
}
.action quzanzi1_img{
    display: none;
}

</style>