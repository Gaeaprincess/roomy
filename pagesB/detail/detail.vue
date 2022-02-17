<template>
<view>
<view v-for="(item, index) in dongtai" :key="index" class="project-dongtai">
        <view class="gerenxinxi">
            <image class="project-touxiang" :src="item.touxiang"></image>
            <view class="project-xinxi">
                <view class="project-nicheng">{{item.name}}</view>
                <view class="shijian">{{item.shijian}}</view>
            </view>
            <view class="jiaHaoYouBox">
                <navigator url="/pagesB/jiahaoyou/jiahaoyou">
                    <image class="jiahaoyou" src="../static/resources/jiahaoyou.png"></image>
                </navigator>
            </view>
        </view>
        <view class="project-content">
            <view class="project-content-neirong">{{item.neirong}}</view>
            <image class="project-content-photo" :src="item.photo"></image>
        </view>
        <view class="project-quanzi">{{item.quanzi}}</view>
        <view class="xian1"></view>
</view>
<view class="xian"></view>
<view>
    <view class="pinglun1">评论(520)</view>
</view>


<view v-for="(item, index) in pinglun" :key="index" class="pinglun2">
    <view class="gerenxinxi">
        <image class="project-touxiang" :src="item.touxiang"></image>
        <view class="project-xinxi">
            <view class="project-nicheng">{{item.name}}</view>
            <view class="shijian">{{item.shijian}}</view>
        </view>
    </view>
    <view class="pinglun-content">{{item.content}}</view>
    <view v-for="(item, index2) in huifu" :key="index2" class="huifu">
        <view class="xinxi">
            <image class="huifu1-tx" :src="item.touxiang"></image>
            <view class="huifu1-mz">{{item.name}}</view>
            <view class="huifu1-sj">{{item.shijian}}</view>
        </view>
        <view style="display:flex;">
            <text style="font-size: 26rpx;margin-left:30rpx;">回复:</text>
            <view style="color: #F5D04B;font-size: 26rpx;margin-left:30rpx;">景景</view>
        </view>
        <view class="huifu1-nr">{{item.content}}</view>
    </view>
    <view class="xian2"></view>
</view>

<view class="foot">
    <view class="say">
      <view class="flex">
        <image class="say_img" src="../static/resources/xiepinglun.png"></image>
        <input confirm-type="send" class="say_inp" :placeholder="placeholder" :value="comment_text" :focus="focus" @blur="blur" @confirm="confirm">
        
      </view>
    </view>
    <image class="foot_img" @tap.stop="handledianzan" :src="isdianzan?'../static/resources/dianzan1.png':'../static/resources/dianzan.png'"></image>
    <button open-type="share" style="margin: 0;width: 80rpx;height: 80rpx;padding: 0;">
    <image class="foot_img2" src="../static/resources/fenxiang.png"></image>
    </button>
</view>  
<image></image>
</view>
</template>

<script>

export default {
  data() {
    return {
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
      //当前点击的评论或回复评论的用户昵称
      now_reply_type: 0,
      //当前回复类型 默认为0 1为回复评论 2为回复回复
      now_parent_id: 0,
      //当前点击的评论或回复评论的所属评论id
      now_reply: 0,
      //当前点击的评论或回复评论的id
      //模拟用户信息
      userinfo: {
        name: '马飞',
        touxiang: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.--EXmUDGAG8iF9TCLdA7CwHaJ4?w=133&h=180&c=7&r=0&o=5&pid=1.7'
      },
      dongtai: [{
        dongtai_id: 1,
        touxiang: "https://tse2-mm.cn.bing.net/th/id/OIP-C.6RMkLazqoJZhaP1MOJQDawHaLH?w=200&h=300&c=7&r=0&o=5&pid=1.7",
        name: "文文",
        shijian: "2021/9/23   17:05",
        neirong: "有没有一起考研的朋友？",
        photo: "https://tse2-mm.cn.bing.net/th/id/OIP-C.Agioz3aXz_FYkGN4uocCKAHaEK?w=302&h=180&c=7&r=0&o=5&pid=1.7",
        quanzi: "#备考考研",
        pinglunshu: 520,
        dianzanshu: "1.2K"
      }],
      //评论文章
      pinglun: [{
        pinglun_id: 1,
        pinglun_pr_id: 1,
        //评论文章所属id
        touxiang: "https://tse2-mm.cn.bing.net/th/id/OIP-C.4xjOBRgVSMrjC47-FH6qZwHaHa?w=200&h=200&c=7&r=0&o=5&pid=1.7",
        name: "景景",
        shijian: "2021/9/24",
        content: "我也想，可以一起吗，我超自律。",
        reply_id: 0,
        //回复谁的评论，默认为0
        parent_id: 0,
        //评论所属评论id，默认为0
        reply_name: '' //回复评论用户的昵称 默认为''

      }, {
        pinglun_id: 2,
        pinglun_pr_id: 1,
        //评论文章所属id        
        touxiang: "https://tse3-mm.cn.bing.net/th/id/OIP-C.bAZ-3kualUsee0I2VzjBvwHaHa?w=192&h=192&c=7&r=0&o=5&pid=1.7",
        name: "菜菜不菜",
        shijian: "2021/9/25",
        content: "带带我，啾啾~",
        reply_id: 0,
        //回复谁的评论，默认为0
        parent_id: 0,
        //评论所属评论id，默认为0
        reply_name: '' //回复评论用户的昵称 默认为''

      }],
      //回复用户评论
      huifu: [{
        huifu_id: 1,
        huifu_pr_id: 1,
        touxiang: "https://tse1-mm.cn.bing.net/th/id/OIP-C.UL4QLUdNZId8G6IvpZLz7AHaNK?w=187&h=333&c=7&r=0&o=5&pid=1.7",
        name: "何林是猴",
        shijian: "2021/9/27",
        content: "吼吼吼，俺老何也想参加！",
        reply_id: 0,
        //回复谁的评论，默认为0
        parent_id: 0,
        //评论所属评论id，默认为0
        reply_name: '' //回复评论用户的昵称 默认为''

      }, {
        huifu_id: 2,
        huifu_pr_id: 1,
        touxiang: "https://tse1-mm.cn.bing.net/th/id/OIP-C.UL4QLUdNZId8G6IvpZLz7AHaNK?w=187&h=333&c=7&r=0&o=5&pid=1.7",
        name: "何林是猴",
        shijian: "2021/9/27",
        content: "吼吼吼，俺老何也想参加！",
        reply_id: 0,
        //回复谁的评论，默认为0
        parent_id: 0,
        //评论所属评论id，默认为0
        reply_name: '' //回复评论用户的昵称 默认为''

      }],
      collection: ""
    };
  },

  components: {},
  props: {},
  // onLoad: function(options){
  //     let index = options.index;
  //     this.setData({
  //         detailObj: dongtai
  //     })
  // },
  onShareAppMessage: function () {},
  methods: {
    //点击用户评论或回复时触发
    replyComment(e) {
      var cid = e.currentTarget.dataset.cid; //当前点击的评论id

      var name = e.currentTarget.dataset.name; //当前点击的评论昵称

      var pid = e.currentTarget.dataset.pid; //当前点击的评论所属评论id

      var type = e.currentTarget.dataset.type; //当前回复类型

      this.setData({
        focus: true,
        //输入框获取焦点
        placeholder: '回复' + name + '：',
        //更改底部输入框占字符
        now_reply: cid,
        //当前点击的评论或回复评论id
        now_reply_name: name,
        //当前点击的评论或回复评论的用户名
        now_parent_id: pid,
        //当前点击的评论或回复评论所属id
        now_reply_type: type //获取类型(1回复评论/2回复-回复评论)

      });
    },

    //底部输入框提交内容时触发
    confirm(e) {
      //获取输入框输入的内容
      var comment_text = e.detail.value; //判断用户是否输入内容为空

      if (comment_text == '') {
        //用户评论输入内容为空时弹出
        uni.showToast({
          title: '请输入内容',
          //提示内容
          icon: 'none' //提示图标

        });
      } else {
        var date = new Date(); //创建时间对象

        var year = date.getFullYear(); //获取年      

        var month = date.getMonth() + 1; //获取月      

        var day = date.getDate(); //获取日      

        var hour = date.getHours(); //获取时      

        var minute = date.getMinutes(); //获取分      

        var second = date.getSeconds(); //获取秒      

        var time = `${year}年${month}月${day}日${hour}时${minute}分${second}秒`; //当前时间

        var pinglun = this.pinglun; //获评论数据

        var huifu = this.huifu; //获取回复数据

        var pinglun_length = pinglun.length; //获取当前评论数组的长度

        var last_id = pinglun[pinglun_length - 1].pinglun_id; //获取最后一个评论的id

        var huifu_length = huifu.length; //获取回复数组的长度

        var last_id2 = huifu[huifu_length - 1].huifu_id; //获取最后回复的id

        var new_id = last_id > last_id2 ? last_id + 1 : last_id2 + 1; //当前将要发表的评论的id

        var userinfo = this.userinfo; //获取当前的用户信息      

        var comment_user_name = userinfo.name; //用户昵称      

        var comment_user_avatar = userinfo.touxiang; //用户头像

        var reply_name = null; //回复评论用户的昵称

        var parent_id = 0; //评论所属哪个评论的id

        var reply_id = this.now_reply; //回复谁的评论id
        //通过回复谁的评论id判断现在是评论还是回复

        if (reply_id != 0) {
          //现在是回复
          var reply_type = this.now_reply_type; //回复类型
          //通过回复类型判断是回复评论还是回复回复

          if (reply_type == 1) {
            //回复评论
            parent_id = this.now_reply; //回复评论所属评论id

            reply_name = this.now_reply_name; //回复评论用户昵称
          } else {
            //回复回复
            parent_id = this.now_parent_id; //回复评论所属评论id

            reply_name = this.now_reply_name; //回复评论用户昵称
          }
        } else {
          //现在是评论
          var comment_detail = {}; //评论/回复对象

          comment_detail.comment_id = new_id; //评论Id      

          comment_detail.comment_user_name = comment_user_name; //用户昵称      

          comment_detail.comment_user_avatar = comment_user_avatar; //用户头像      

          comment_detail.comment_text = comment_text; //评论内容      

          comment_detail.comment_time = time; //评论时间      

          comment_detail.reply_id = reply_id; //回复谁的评论的id      

          comment_detail.parent_id = parent_id; //评论所属哪个评论id      

          comment_detail.reply_name = reply_name; //回复评论人的昵称
        } //判断parent_id是否为0 为0就是评论 不为0就是回复


        if (comment_detail.parent_id > 0) {
          //回复
          comment_list2.unshift(comment_detail);
        } else {
          //评论
          comment_list.unshift(comment_detail);
        } //动态渲染


        ths.setData({
          //发表评论后将以下数据初始化 为下次发表评论做准备
          comment_text: null,
          //评论内容        
          now_reply: 0,
          //当前点击的评论id        
          now_reply_name: null,
          //当前点击的评论的用户昵称        
          now_reply_type: 0,
          //评论类型        
          now_parent_id: 0,
          //当前点击的评论所属哪个评论id        
          placeholder: "说亿点好听的",
          //输入框占字符
          //将加入新数据的数组渲染到页面        
          pinglun,
          //评论列表        
          huifu //回复列表

        });
      }
    },

    //下面的方法可以绑定在输入框的bindblur属性上	
    blur(e) {
      const text = e.detail.value.trim();

      if (text == '') {
        this.setData({
          now_reply: 0,
          //当前点击的评论或回复评论的id        
          now_reply_name: null,
          //当前点击的评论或回复评论的用户昵称        
          now_reply_type: 0,
          //当前回复类型        
          now_parent_id: 0,
          //当前点击的评论或回复评论的所属评论id        
          placeholder: "说亿点好听的",
          //占字符        
          focus: false //输入框获取焦点

        });
      }
    },

    //获取输入框内容
    getCommentText(e) {
      var val = e.detail.value;
      this.setData({
        comment_text: val
      });
    },

    // onLoad: function(option) {
    //     var getId = option.id;
    //     this.setData({
    //      currentId: getId
    //     });
    //     // 读取所有的文章列表点赞缓存状态
    //     var cache = wx.getStorageSync('cache_key');
    //     if (cache) {
    //      // 拿到所有缓存状态中的1个
    //      var currentCache = cache[getId];
    //      // 把拿到的缓存状态中的1个赋值给data中的collection，如果当前文章没有缓存状态，currentCache 的值就是 false，如果当前文章的缓存存在，那么 currentCache 就是有值的，有值的说明 currentCache 的值是 true
    //      this.setData({
    //       collection: currentCache
    //      })
    //     } else {
    //      // 如果所有的缓存状态都不存在 就让不存在的缓存存在
    //      var cache = {};
    //      // 既然所有的缓存都不存在，那么当前这个文章点赞的缓存也不存在，我们可以把当前这个文章点赞的缓存值设置为 false
    //      cache[getId] = false;
    //      // 把设置的当前文章点赞放在整体的缓存中
    //      wx.setStorageSync('cache_key',cache);
    //     }
    //    },
    // 点击图片的点赞事件 这里使用的是同步的方式
    toCollect: function (event) {
      var cache = uni.getStorageSync('cache_key'); // 获取当前文章是否被点赞的缓存

      var currentCache = cache[this.currentId];
      currentCache = !currentCache; // 更新cache中的对应的1个的缓存值，使其等于当前取反的缓存值

      cache[this.currentId] = currentCache; // 重新设置缓存

      uni.setStorageSync('cache_key', cache); // 更新数据绑定,从而切换图片

      this.setData({
        // collection 默认的是 false
        collection: currentCache
      }); // 交互反馈

      uni.showToast({
        title: currentCache ? '点赞' : '取消',
        icon: 'success',
        duration: 2000
      });
    },
    // 点击图片的点赞事件 这里使用的是同步的方式
    toCollect: function (event) {
      // 获取缓存，得到当前文章是否被点赞
      var cache = uni.getStorageSync('cache_key'); // 获取当前文章是否被点赞的缓存

      var currentCache = cache[this.currentId]; // 取反，点赞的变成未点赞 未点赞的变成点赞

      currentCache = !currentCache; // 更新cache中的对应的1个的缓存值，使其等于当前取反的缓存值

      cache[this.currentId] = currentCache; // 调用 showModal方法

      this.showModal(cache, currentCache);
    },
    showModal: function (cache, currentCache) {
      var that = this;
      uni.showModal({
        title: "点赞",
        content: currentCache ? "要点赞吗？" : "要取消赞吗？",
        showCancel: "true",
        cancelText: "取消",
        cancelColor: "#666",
        confirmText: "确定",
        confirmColor: "#222",
        success: function (res) {
          if (res.confirm) {
            // 重新设置缓存
            uni.setStorageSync('cache_key', cache); // 更新数据绑定,从而切换图片

            that.setData({
              collection: currentCache
            });
          }
        }
      });
    },

    //点赞
    handledianzan() {
      let isdianzan = !this.isdianzan;
      this.setData({
        isdianzan
      }); //提示

      let title = isdianzan ? '点赞成功' : '取消点赞';
      uni.showToast({
        title,
        icon: 'success'
      });
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
.pinglun-content{
    margin-top: 30rpx;
    font-size: 30rpx;
    margin-left: 100rpx;
}
.huifu{
    margin: 20rpx 50rpx 0rpx 100rpx;
    background-color: #f7f2f2;
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