<template>
<view>
<view class="comment-list">
    <view v-for="(item, index) in topInfo" :key="index" class="project-dongtai">
        <view class="gerenxinxi">
            <image class="project-touxiang" :src="item.arator"></image>
            <view class="project-xinxi">
                <view class="project-nicheng">{{item.nick}}</view>
                <view class="shijian">{{item.date}}</view>
            </view>
            <view class="jiaHaoYouBox">
                <navigator url="/pagesB/jiahaoyou/jiahaoyou">
                    <image class="jiahaoyou" src="../static/resources/jiahaoyou.png"></image>
                </navigator>
            </view>
        </view>
        <view class="project-content">
            <view class="project-content-neirong">{{item.content.string}}</view>
            <image class="project-content-photo" :src="item.content.img"></image>
        </view>
        <view class="project-quanzi">{{item.label}}</view>
        <view class="xian1"></view>
    </view>


    <view class="xian"></view>
    <view v-if="comment_number>0">
        <view class="pinglun1">评论({{comment_number}})</view>
    </view>


    <view v-for="(item, index) in list" :key="index" class="pinglun2">
        <view class="gerenxinxi">
            <image class="project-touxiang" :src="item.user_info.user_aratar"></image>
            <view class="project-xinxi">
                <view class="project-nicheng">{{item.user_info.user_nick}}</view>
                <view class="shijian">{{item.date}}</view>
            </view>
        </view>
        <!-- 点击content -->
        <view class="pinglun-content" @tap="rootClick" :data-user_info="item">{{item.content}}</view>

        <!-- 子列表  -->
        <view v-for="(j, idx) in item.child_comment" :key="idx" class="huifu">
            <view class="xinxi">
                <image class="huifu1-tx" :src="j.user_info.user_aratar"></image>
                <view class="huifu1-mz">{{j.user_info.user_nick}}</view>
                <view class="huifu1-sj">{{j.date}}</view>
            </view>
            <view style="display:flex;">
                <text style="font-size: 26rpx;margin-left:30rpx;">回复:</text>
                <view style="color: #F5D04B;font-size: 26rpx;margin-left:30rpx;">{{j.father_user_nick}}</view>
            </view>
            <view class="huifu1-nr" @tap="rootClick" :data-user_info="j">{{j.content}}</view>
        </view>
        <view class="xian2"></view>

    </view>

</view>



<view class="foot">
    <view class="say">
      <view class="flex">
        <image class="say_img" src="../static/resources/xiepinglun.png"></image>
        <input confirm-type="send" class="say_inp" :placeholder="placeholder" :value="comment_text" :focus="focus" @confirm="confirm">
        
        <image class="say_img" src="../static/resources/xiepinglun.png" v-if="placeholder !== '说亿点好听的'" style="margin-left: 40rpx" @tap="clearPlaceholder"></image>
      </view>
    </view>
    <image class="foot_img" @tap.stop="handledianzan" :src="isdianzan?'../static/resources/dianzan1.png':'../static/resources/dianzan.png'"></image>
    <button open-type="share" style="margin: 0;width: 80rpx;height: 80rpx;padding: 0;">
    <image class="foot_img2" src="../static/resources/fenxiang.png"></image>
    </button>
</view>  
<!-- <image /> -->
</view>
</template>

<script>
// pages/Test/Test.js
import { getEssayCommentList, userInfo, addComment } from '../../mockData/TestData';
import { getDongTai } from '../../mockData/DongTaiData';

export default {
  data() {
    return {
      topInfo: {},
      comment_number: 0,
      comment_id: null,
      list: [],
      userInfo,
      detailObj: {},

      /*定义一些数据*/
      isdianzan: false,
      focus: false,
      //输入框是否聚焦
      placeholder: '说亿点好听的',
      //底部输入框占字符
      comment_text: null,
      //底部评论框内容

      /*
      *以下初始化数据是用户点击任意一条评论或回复时需要设置的数据
      *然后将设置好的数据传递给评论时新创建的评论数据对象
      */
      now_reply_name: null,
      //当前点击的评论或回复评论的用户昵称     -> father-nick
      now_parent_id: -1 //当前点击的评论或回复评论的所属评论id   -> 根

    };
  },

  components: {},
  props: {},
  onLoad: function (options) {
    // console.log(typeof options.id)
    // console.log();
    let _1 = new Number(options.id).valueOf();

    this.setData({
      comment_id: new Number(options.id).valueOf()
    });

    let _2 = getDongTai(_1);

    this.setData({
      comment_number: this.getList(_1),
      topInfo: [{
        nick: _2.name,
        content: {
          string: _2.neirong,
          img: _2.photo
        },
        arator: _2.touxiang,
        date: "2021/9/23  17:05",
        label: _2.quanzi
      }]
    }); // console.log(getDongTai(_1))
    // this.setData({
    // })
  },
  methods: {
    clearPlaceholder() {
      // 清除状态
      this.setData({
        placeholder: '说亿点好听的',
        //底部输入框占字符
        now_reply_name: null,
        //当前点击的评论或回复评论的用户昵称     -> father-nick
        now_parent_id: -1,
        //当前点击的评论或回复评论的所属评论id   -> 根
        comment_text: null //底部评论框内容

      });
    },

    // 输入框 题交 触发事件
    confirm(e) {
      console.log(e);
      let t = {
        date: '2021/9/28  19:20',
        content: e.detail.value,
        root_comment: this.now_parent_id,
        father_user_nick: this.now_reply_name,
        user_info: userInfo,
        comment_essay_id: this.comment_id // 文档id 

      };
      console.log(t);
      addComment(t); // 追加到数据库里面

      this.getList(this.comment_id); // 更新列表

      this.setData({
        // 取消所有状态
        comment_text: null,
        now_reply_name: null,
        now_parent_id: -1,
        placeholder: '说亿点好听的'
      });
    },

    // 拉起输入框触发事件
    replyComment(e) {
      console.log(e);
    },

    // 评论点击
    rootClick(e) {
      // console.log(e)
      this.setData({
        focus: true,
        placeholder: '回复' + e.currentTarget.dataset.user_info.user_info.user_nick + '：',
        //更改底部输入框占字符
        now_reply_name: e.currentTarget.dataset.user_info.user_info.user_nick
      });

      if (e.currentTarget.dataset.user_info.root_comment === -1) {
        this.setData({
          now_parent_id: e.currentTarget.dataset.user_info.comment_id
        });
      } else this.setData({
        now_parent_id: e.currentTarget.dataset.user_info.root_comment
      }); // console.log(this.data);

    },

    /**
    * 生命周期函数--监听页面加载
    */
    getList(idx) {
      let _1 = getEssayCommentList(idx);

      let _2 = [];

      for (let i = 0; i < _1.length; i++) {
        //  continue // 如果不是一级评论,则跳过
        if (_1[i].root_comment !== -1) continue; // 如果是根 跳过

        let t = {
          comment_id: _1[i].comment_id,
          // 此评论唯一id
          user_info: _1[i].user_info,
          date: _1[i].date,
          content: _1[i].content,
          root_comment: -1,
          child_comment: []
        };

        for (let j = i + 1; j < _1.length; j++) // 检索后面的所有评论,如果她们的root 是 当前的 id 那么就是我的子评论
        if (_1[j].root_comment === -1) continue; // 如果是一级评论,跳过
        else if (_1[j].root_comment === t.comment_id) t.child_comment.push(_1[j]); // 如果他的根是当前评论,添加


        _2.splice(i, 1, t);
      } // console.log(_2);


      this.setData({
        list: _2
      });
      return _1.length; // console.log(this.data.list)
    },

    handledianzan() {
      console.log("占位：函数 handledianzan 未声明");
    }

  }
};
</script>
<style>
.project{
    margin-top: 20rpx;
}
.project-title{
    font-size: 36rpx;
    margin-left: 50rpx;
    margin-top: 60rpx;
}
.project-dongtai{
    width: 650rpx;
    height: 650rpx;
    padding-left: 50rpx;
    margin-top: 30rpx;
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
}
.jiahaoyou{
    /* clear:both; */
    width: 60rpx;
    height: 60rpx;
    /* flex-direction:row; */
    /* margin-left: 270rpx; */
    /* float: right; */
}
.project-content{
    width: 650rpx;
    height: 450rpx;
    margin-top: 30rpx;
    font-size: 28rpx;
}
.project-content-photo{
    margin-top: 30rpx;
    height: 350rpx;
}
.project-quanzi{
    padding-top: 10rpx;
    padding-left: 20rpx;
    width: 140rpx;
    height: 45rpx;
    font-size: 24rpx;
    border-radius: 20rpx;
    background-color: rgb(240, 238, 238);
}
.xian{
    border: solid 30rpx rgb(245, 245, 252);
}
.pinglun1{
    margin-left: 50rpx;
    margin-top: 30rpx;
    font-size: 36rpx;
}
.pinglun2{
    margin-top: 30rpx;
    margin-left: 50rpx;
    
}
.comment-list{
    position: absolute;
    top: 49rpx;
    left: 0;
    right: 0;
    bottom: 136rpx;
    overflow-y: scroll;
    overflow-x: hidden;
}
.pinglun-content{
    margin-top: 30rpx;
    font-size: 30rpx;
    margin-left: 100rpx;
}
.huifu{
    margin: 0rpx 50rpx 0rpx 100rpx;
    background-color: #f5f4f4;
}
.xinxi{
    display: flex;
    padding-top: 20rpx;
    height: 60rpx;
    text-align: center;
}
.huifu1-tx{
    width: 50rpx;
    height: 50rpx;
    border-radius: 50%;
    margin-left: 30rpx;
}
.huifu1-mz{
    font-size: 24rpx;
    margin-left: 20rpx;
}
.huifu1-sj{
    margin-left: 60rpx;
    font-size: 24rpx;
}
.huifu1-nr{
    margin-top: 10rpx;
    margin-left: 30rpx;
    font-size: 26rpx;
    padding-bottom: 20rpx;
    word-wrap:break-word;
    word-break:normal; 
}
.xian2{
    margin-right: 50rpx;
    margin-top: 30rpx;
    border: solid 2rpx rgb(238, 238, 247);
}
.foot{  
    display: flex;
    width: 686rpx;  
    padding: 32rpx 32rpx;  
    background-color: #FFFFFF;  
    box-shadow:0rpx -1rpx 4rpx 0rpx rgba(0, 0, 0, 0.08);  
    position: fixed;  
    bottom: 0;  
    left: 0;
}
.say{  
    display: inline-block;  
    width: 450rpx;  
    padding: 20rpx 0rpx 10rpx 24rpx;  
    background-color: #F2F2F2;  
    border-radius: 48rpx;
}
.flex{  
    display: flex;  
    align-items: center;
}
.say_img{  
    width: 30rpx;  
    height: 30rpx;  
    margin-right: 13rpx;  
}
.say_inp{  
    display: inline-block;  
    width: 300rpx;  
    height: 33rpx;
    font-size: 24rpx;  
}
.say_place{  
    color: #333333;
}
.foot_img{  
    width: 45rpx;  
    height: 45rpx;  
    margin-left: 50rpx;  
    margin-right: 17rpx;
}
.foot_img2{ 
    width: 40rpx;  
    height: 40rpx;  
    margin-left: 30rpx;  
    margin-right: 17rpx;
}
</style>