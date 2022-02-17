<template>
<view :class="'box ' + (is_show ? 'box-d':'')">
    <view class="xian"></view>


    <view v-for="(item, index) in pinglun" :key="index" class="project-dongtai">
    <view class="gerenxinxi">
        <image class="project-touxiang" :src="item.touxiang"></image>
        <view class="project-xinxi">
            <view class="project-nicheng">{{item.huifuname}}</view>
            <view class="shijian">{{item.shijian}}</view>
        </view>
        <view class="jiaHaoYouBox">
                <view class="huifu" @tap="isShow" :data-id="item.root_id" :data-name="item.huifuname" :data-comment_essay_id="item.pinglun_pr_id">回复</view>
        </view>
    </view>
    <view class="neirong">{{item.content}}</view>
    <view class="yuanwen">
        <image :src="item.photo"></image>
        <view class="xingming">{{item.name}} :</view>
        <view>{{item.neirong}}</view>
    </view>
    <view class="huifukuang" @tap="isShow" :data-id="item.root_id" :data-name="item.huifuname" :data-comment_essay_id="item.pinglun_pr_id">回复{{item.huifuname}}:</view>
</view>


<view class="buttom" v-if="is_show">
    <view class="mask" @tap="noShow"></view>
    <view class="xialakuang">
        <image src="/static/resources/xiala.png" @tap="noShow" style="width: 50rpx;height: 50rpx;margin-left:660rpx;"></image>
        <view style="margin-left: 40rpx">回复 {{huifuname}}</view>
        <textarea placeholder="请输入..." class="xialakuang1" :value="content" @input="contentChange"></textarea>
        <button style="background-color: #F2D855; width: 160rpx;height: 50rpx;padding: 0;" @tap="confirm" :data-id="item.pinglun_pr_id">发送</button>
    </view>
</view>


</view>
</template>

<script>
import { addComment, getMyMessage, userInfo } from "../../mockData/TestData.js";
import { getDongTai } from "../../mockData/DongTaiData.js";

export default {
  data() {
    return {
      pinglun: [],
      content: '',
      root_id: null,
      huifuname: null,
      is_show: false,
      comment_essay_id: null
    };
  },

  components: {},
  props: {},

  onLoad() {
    getMyMessage(userInfo).then(res => {
      // console.log(res);
      let _1 = [];

      for (let i of res) {
        let t = getDongTai(i.comment_essay_id); // console.log(t);

        let _2 = {
          pinglun_id: i.comment_id,
          pinglun_pr_id: i.comment_essay_id,
          //评论文章所属id
          touxiang: i.user_info.user_aratar,
          huifuname: i.user_info.user_nick,
          shijian: i.date,
          content: i.content,
          root_id: i.root_comment,
          // 评论的根，默认为0
          name: t.name,
          neirong: t.neirong,
          photo: t.photo
        };

        _1.push(_2);
      }

      this.setData({
        pinglun: _1
      });
    });
  },

  methods: {
    contentChange(e) {
      this.setData({
        content: e.detail.value
      });
    },

    isShow(e) {
      this.setData({
        root_id: e.currentTarget.dataset.id,
        comment_essay_id: e.currentTarget.dataset.comment_essay_id,
        huifuname: e.currentTarget.dataset.name,
        is_show: true
      });
    },

    noShow() {
      this.setData({
        root_id: null,
        comment_essay_id: null,
        huifuname: null,
        is_show: false
      });
    },

    confirm(e) {
      console.log(e);
      addComment({
        comment_essay_id: this.comment_essay_id,
        // 此评论所属的文章id
        root_comment: this.root_id,
        // 根评论
        father_user_nick: this.huifuname,
        // 父级评论  -1 代表一级评论，其他代表上级评论
        user_info: userInfo,
        date: '2021/9/27  10:30',
        content: this.content
      }).then(res => {
        this.noShow();
      });
    }

  }
};
</script>
<style>
.xian{
    border: solid 20rpx #f8f8f8;
}
.project-dongtai{
    width: 650rpx;
    height: 350rpx;
    padding-left: 50rpx;
    margin-top: 80rpx;
}
.gerenxinxi{
    display:flex;
}
.project-touxiang{
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
}
.project-xinxi{
    display:flex;
    flex-direction:column;
    margin-left: 30rpx;
}
.project-nicheng{
    font-size: 28rpx;
    flex-grow:1;
}
.shijian{
    font-size: 24rpx;
    width: 200rpx;
}
.jiaHaoYouBox{
    margin-left: 270rpx;
    color: #F2D855;
}
.neirong{
    font-size: 28rpx;
    margin-top: 20rpx;
}
.yuanwen{
    display: flex;
    line-height: 150rpx;
    background-color: #f8f8f8;
    margin-top: 20rpx;
}
.yuanwen image{
    width: 160rpx;
    height: 144rpx;
}
.xingming{
    margin-left: 30rpx;
    margin-right: 30rpx;
    color: #F2D855;
}
.yuanwen view{
    font-size: 28rpx;
    text-align: center;
}
.huifukuang{
    margin-top: 10rpx;
    /* margin-left: 50rpx; */
    width: 650rpx;
    height: 60rpx;
    background-color: #f8f8f8;
    border-radius: 20rpx;
    color: #615f5f;
    padding-left: 30rpx;
    padding-top: 10rpx;
    font-size: 28rpx;
}
.xianshi{
    display: none;
}

.xialakuang{
    position: fixed;
    width: 750rpx;
    height: 450rpx;
    bottom: 20rpx;
    border: 4rpx solid #f8f8f8;
    box-shadow: 0rpx 4rpx 12rpx 0rpx rgba(0, 0, 0, 0.4);
    background: white;
}
.xialakuang{
    position: absolute;
    bottom: 0;
    left: 0;
}
.xialakuang1{
    width: 550rpx;
    height: 150rpx;
    padding: 30rpx 50rpx;
    background-color: #f8f8f8;
    margin-bottom: 30rpx;
    margin-left: 50rpx;
    margin-top: 20rpx
}

.buttom{
    z-index: 999;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    /* overflow: hidden; */
}
.mask{
    position: absolute;
    left: 0;
    top: 0;
    width: 750rpx;
    height: calc(100vh - 480rpx);
    background: rgba(0,0,0,.2);
}
.box{
    overflow-y: scroll;
    height: 1612rpx;
    width: 750rpx;
}
.box-d{
    overflow-y: hidden;
}
</style>