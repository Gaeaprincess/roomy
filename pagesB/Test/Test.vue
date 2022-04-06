<template>
  <view class="test">
    <view class="comment-list">
      <!-- 帖子详情 -->
      <view class="project-dongtai">
        <!-- 用户信息 -->
        <view class="gerenxinxi">
          <image class="project-touxiang" :src="topInfo.author.avatar"></image>
          <view class="project-xinxi">
            <view class="project-nicheng">{{ topInfo.author.username }}</view>
            <view class="shijian">{{ $IsoToString(topInfo.time) }}</view>
          </view>
          <!-- 添加好友功能 -->
          <!-- <view class="jiaHaoYouBox">
                <navigator url="/pagesB/jiahaoyou/jiahaoyou">
                    <image class="jiahaoyou" src="../static/resources/jiahaoyou.png"></image>
                </navigator>
            </view> -->
        </view>
        <!-- 帖子内容 -->
        <view class="project-content">
          <view class="project-content-neirong">{{
            topInfo.content.content[0].content[0].content
          }}</view>
          <image
            v-show="topInfo.content.content[1].url"
            class="project-content-photo"
            :src="topInfo.content.content[1].url"
          ></image>
        </view>
        <view class="project-quanzi">{{ topInfo.title }}</view>
        <view class="xian1"></view>
      </view>

      <!-- 文章评论 -->
      <view class="xian"></view>
      <view v-if="topInfo.comments.length > 0">
        <view class="pinglun1">评论({{ topInfo.comments.length }})</view>
      </view>

      <!-- 评论列表 -->
      <view
        v-for="(item, index) in topInfo.comments"
        :key="index"
        class="pinglun2"
      >
        <!-- 个人信息 -->
        <view class="gerenxinxi">
          <image class="project-touxiang" :src="item.author.avatar"></image>
          <view class="project-xinxi">
            <view class="project-nicheng">{{ item.author.username }}</view>
            <view class="shijian">{{ $IsoToString(item.time) }}</view>
          </view>
        </view>
        <!-- 点击content回复 -->
        <view
          class="pinglun-content"
          @click="rootClick"
          @longtap="longtap(item.content.content)"
          :data-user_info="item"
          >{{ item.content.content }}</view
        >

        <!-- 子列表  -->
        <view v-for="(j, idx) in item.replies" :key="idx" class="huifu">
          <view class="xinxi">
            <image class="huifu1-tx" :src="j.author.avatar"></image>
            <view class="huifu1-mz">{{ j.author.username }}</view>
            <view class="huifu1-sj">{{ $IsoToString(j.time) }}</view>
          </view>
          <view style="display: flex">
            <text style="font-size: 26rpx; margin-left: 30rpx">回复:</text>
            <view
              style="color: #f5d04b; font-size: 26rpx; margin-left: 30rpx"
              >{{ item.author.username }}</view
            >
          </view>
          <view
            class="huifu1-nr"
            @click="rootClick"
            :data-user_info="j"
            @longtap="longtap(j.content)"
            >{{ j.content.content }}</view
          >
        </view>
        <view class="xian2"></view>
      </view>
    </view>
    <view class="foot">
      <!-- 评论框 -->
      <view class="say">
        <view class="flex">
          <!-- 输入框 -->
          <image
            class="say_img"
            src="../static/resources/xiepinglun.png"
          ></image>
          <input
            class="say_inp"
            confirm-type="send"
            :placeholder="placeholder"
            v-model="replycontent.content"
            :focus="focus"
            @confirm="reply"
          />
          <!-- <image class="say_img" src="../static/resources/xiepinglun.png" v-if="placeholder !== '说亿点好听的'" style="margin-left: 40rpx" @tap="clearPlaceholder"></image> -->
        </view>
      </view>
      <!-- 分享 -->
      <button class="say_fasong" @tap="reply">发送</button>
      <button
        open-type="share"
        style="margin: 0; width: 80rpx; height: 80rpx; padding: 0"
      >
        <image class="foot_img2" src="../static/resources/fenxiang.png"></image>
      </button>
    </view>
    <!-- 提示窗示例 -->
    <view>
      <uni-popup ref="alertDialog" type="dialog">
        <uni-popup-dialog
          type="error"
          confirmText="删除"
          content="您要删除吗?"
          @confirm="dialogConfirm"
          @close="dialogClose"
        ></uni-popup-dialog>
      </uni-popup>
    </view>

  </view>
</template>

<script>
import huoqu from "../../api/community.js";

export default {
  data() {
    return {
      _1: 0,
      topInfo: {},
      comment_number: 0,
      comment_id: -1, //评论的id  默认会变成帖子的，需要回复其他的就改成其他的
      cancelText: "",
      isdianzan: false,
      focus: false,
      placeholder: "说亿点好听的",
      // comment_text: null,
      //底部评论框内容

      now_reply_name: null,
      //当前点击的评论或回复评论的用户昵称     -> father-nick
      now_parent_id: -1, //当前点击的评论或回复评论的所属评论id   -> 根

      replycontent: {
        content: "",
        images: [],
      },
    };
  },

  onLoad: function (options) {
    this._1 = parseInt(options.id);
    this.setData({
      comment_id: this._1,
    });
    this.getThisPost(this._1);
  },
  methods: {
    // 长按删除
    close() {
      this.$refs.alertDialog.close();
    },
    longtap(content) {
      console.log(content)
      this.cancelText = content;
      this.$refs.alertDialog.open("center");
    },
    dialogConfirm(){
      const id = this.comment_id
      huoqu.deleteComment(id).then((res)=>{
          this.getThisPost(this._1)
      })
    },

    // 回复帖子
    reply() {
      huoqu
        .replyPost({
          id: this.comment_id,
          content: this.replycontent,
        })
        .then((res) => {
          console.log(res), 
          this.getThisPost(this._1)
          this.setData({
            comment_id:this._1,
            replycontent:{},
          })
        });
    },

    // 展示文章详情
    getThisPost(e) {
      huoqu.getPostDetail(e).then((res) => {
        this.topInfo = res.data;
      });
    },

    // 清除状态
    // clearPlaceholder() {
    //   this.setData({
    //     placeholder: "说亿点好听的",
    //     //底部输入框占字符
    //     now_reply_name: null,
    //     //当前点击的评论或回复评论的用户昵称     -> father-nick
    //     now_parent_id: -1,
    //     //当前点击的评论或回复评论的所属评论id   -> 根
    //     comment_text: null, //底部评论框内容
    //   });
    // },

    // 评论点击
    rootClick(e) {
      console.log(e);
      this.setData({
        focus: true,
        placeholder:
          "回复" + e.currentTarget.dataset.user_info.author.username + "：",
        //更改底部输入框占字符
        now_reply_name: e.currentTarget.dataset.user_info.author.username,
        // 回复评论或者回复
        comment_id: e.currentTarget.dataset.user_info.id,
      });

    },
  },
};
</script>
<style>
.test{
  z-index: 2 !important;
}
.project {
  margin-top: 20rpx;
}
.project-title {
  font-size: 36rpx;
  margin-left: 50rpx;
  margin-top: 60rpx;
}
.project-dongtai {
  width: 650rpx;
  /* height: 650rpx; */
  padding-left: 50rpx;
  margin-top: 30rpx;
}
.gerenxinxi {
  display: flex;
}
.project-touxiang {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
}
.project-xinxi {
  display: flex;
  flex-direction: column;
  margin-left: 30rpx;
}
.project-nicheng {
  font-size: 28rpx;
  flex-grow: 1;
}
/* .shijian1{
  width: 180px;
  height: 20px;
} */
.shijian {
  /* word-break:keep-all;    */
  font-size: 22rpx;
  max-width: 400rpx;
  max-height: 30rpx;
  color: rgb(42, 42, 42);
  overflow: hidden;
  text-overflow: clip;
}
.jiaHaoYouBox {
  margin-left: 270rpx;
}
.jiahaoyou {
  /* clear:both; */
  width: 60rpx;
  height: 60rpx;
  /* flex-direction:row; */
  /* margin-left: 270rpx; */
  /* float: right; */
}
.project-content {
  width: 650rpx;
  /* height: 450rpx; */
  margin-top: 30rpx;
  font-size: 28rpx;
}
.project-content-photo {
  margin-top: 30rpx;
  /* height: 350rpx; */
}
.project-quanzi {
  margin-top: 20rpx;
  padding-top: 10rpx;
  padding-left: 20rpx;
  width: 140rpx;
  height: 45rpx;
  font-size: 24rpx;
  border-radius: 20rpx;
  background-color: rgb(240, 238, 238);
  max-width: 140rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.xian {
  border: solid 30rpx rgb(245, 245, 252);
}
.pinglun1 {
  margin-left: 50rpx;
  margin-top: 30rpx;
  font-size: 36rpx;
}
.pinglun2 {
  margin-top: 30rpx;
  margin-left: 50rpx;
}
.comment-list {
  position: absolute;
  top: 49rpx;
  left: 0;
  right: 0;
  bottom: 136rpx;
  overflow-y: scroll;
  overflow-x: hidden;
}
.pinglun-content {
  margin-top: 30rpx;
  font-size: 30rpx;
  margin-left: 100rpx;
}
.huifu {
  margin: 0rpx 50rpx 0rpx 100rpx;
  background-color: #f5f4f4;
}
.xinxi {
  display: flex;
  padding-top: 20rpx;
  height: 60rpx;
  text-align: center;
}
.huifu1-tx {
  width: 50rpx;
  height: 50rpx;
  border-radius: 50%;
  margin-left: 30rpx;
}
.huifu1-mz {
  font-size: 24rpx;
  margin-left: 20rpx;
}
.huifu1-sj {
  margin-left: 60rpx;
  font-size: 24rpx;
}
.huifu1-nr {
  margin-top: 10rpx;
  margin-left: 30rpx;
  font-size: 26rpx;
  padding-bottom: 20rpx;
  word-wrap: break-word;
  word-break: normal;
}
.xian2 {
  margin-right: 50rpx;
  margin-top: 30rpx;
  border: solid 2rpx rgb(238, 238, 247);
}
.foot {
  display: flex;
  width: 686rpx;
  padding: 32rpx 32rpx;
  background-color: #ffffff;
  box-shadow: 0rpx -1rpx 4rpx 0rpx rgba(0, 0, 0, 0.08);
  position: fixed;
  bottom: 0;
  left: 0;
}
.say {
  display: inline-block;
  width: 500rpx;
  padding: 20rpx 0rpx 10rpx 24rpx;
  background-color: #f2f2f2;
  border-radius: 48rpx;
}
.flex {
  display: flex;
  align-items: center;
}
.say_img {
  width: 30rpx;
  height: 30rpx;
  margin-right: 13rpx;
}
.say_inp {
  display: inline-block;
  width: 300rpx;
  height: 33rpx;
  font-size: 24rpx;
}
.say_place {
  color: #333333;
}
.say_fasong {
  margin-left: 0rpx;
  font-size: 20rpx;
  color: rgb(245, 208, 75);
  width: 100rpx;
  height: 80rpx;
  text-align: center;
  line-height: 80px;
}
.foot_img {
  width: 45rpx;
  height: 45rpx;
  margin-left: 50rpx;
  margin-right: 17rpx;
}
.foot_img2 {
  width: 40rpx;
  height: 40rpx;
  margin-left: 30rpx;
  margin-right: 17rpx;
}
</style>