<template>
  <view>
    <view class="header">
      <image class="hbiaoqian" src="../static/resources/biaoqian.png"></image>
      <text class="hxuanze">选择动态话题</text>
      <navigator url="/pagesB/huati/huati" class="gengduo">
        <text>更多 ></text>
      </navigator>
    </view>
    <!-- <view class="xuanze" wx:for="{{xuanze}}" wx:key="index">
    <view class="quanzi">{{item}}</view>
    </view> -->
    <quanzi @myevent="myevent" :xuanze="select"></quanzi>

    <view class="xian"></view>
    <view class="neirong">
      <!-- 文本 -->
      <!-- <textarea :value="textVal" @input="handleTextInput" class="shuru" placeholder="请输入..." auto-focus></textarea> -->
      <textarea
        :value="textVal"
        @input="handleTextInput"
        class="shuru"
        placeholder="请输入..."
        auto-focus
      ></textarea>
      <!-- 图片 -->
      <view class="SC">
        <view class="shangchuan" @tap="handleChooseImg">
          <image class="tupian" src="../static/resources/tupian.png"></image>
          <view class="wenzi">添加照片</view>
        </view>
        <view
          v-for="(item, index) in chooseImgs"
          :key="index"
          class="img_wrap"
          @tap="handleRemoveImg"
          :data-index="index"
        >
          <UpImg :src="item"></UpImg>
        </view>
        <!-- <view class="img_wrap" @tap="handleRemoveImg">
          <UpImg :src="imgUp"></UpImg>
        </view> -->
      </view>
    </view>
    <view class="fabu" @tap="handleFormSubmit">发布</view>
  </view>
</template>

<script>
// import { addDongTai } from "../../mockData/DongTaiData.js";
// import { userInfo } from "../../mockData/TestData"; // let {userInfo} = require('../../mockData/TestData')
import community from "../../api/community";
import UpImg from "../../components/UpImg/UpImg";
import quanzi from "../../components/quan_zi/quanzi";
// import huoqu from "../../api/community.js";

export default {
  data() {
    return {
      chooseImgs: [],
      //文本域的内容
      textVal: "",
      // imgUp:"",
      contents: {
        length: 2000,
        content: [
          {
            type: "paragraph",
            content: [
              {
                style: "normal",
                content: "",
              },
            ],
          },
        ],
      },
      select: [],
      xiaobiai: 2,
      label: "#备战考研",
    };
  },

  components: {
    UpImg,
    quanzi,
  },
  props: {},

  onLoad() {
    setTimeout(() => {
      this.setData({
        select: [
          {
            content: "#备考考研 ",
            isHot: true,
          },
          {
            content: "#备考教资 ",
            isHot: false,
          },
          {
            content: "#备考会计 ",
            isHot: true,
          },
          {
            content: "#备考计算机 ",
            isHot: false,
          },
          {
            content: "#备考高考 ",
            isHot: true,
          },
          {
            content: "#备考中考 ",
            isHot: false,
          },
        ],
      });
    }, 10);
  },

  onShow() {},

  methods: {
    // 更新文章列表
    // upDataPost(){
    //   huoqu.getPost().then((res) => {
    //     this.dongtaiList = res.data;
    //   });
    // }

    //上传图片事件
    handleChooseImg() {
      uni.chooseImage({
        count: 1,
        sizeType: ["original", "compressed"],
        sourceType: ["album", "camera"],
        success: (result) => {
          this.setData({
            // 图片数组进行拼接
            chooseImgs: [...this.chooseImgs, ...result.tempFilePaths],
          });
        },
      });
    },
    // 圈子选择
    myevent(e) {
      // console.log(e);
      this.setData({
        xiaobiai: e.detail,
      });
      console.log("父组件中的值是： " + this.xiaobiai);
      this.setData({
        title: this.xiaobiai,
      });
    },
    //点击自定义图片组件,删除
    handleRemoveImg(e) {
      //获取索引
      const { index } = e.currentTarget.dataset; //获取图片数组

      let { chooseImgs } = this; //删除

      chooseImgs.splice(index, 1); //填充回去

      this.setData({
        chooseImgs,
      });
    },
    //文本域的输入事件
    handleTextInput(e) {
      this.setData({
        textVal: e.detail.value,
      });
    },

    handleFormSubmit() {
      // const { textVal, chooseImgs } = this;
      // const  contents  = this;
      // console.log(textVal, chooseImgs); //不为空
      this.contents.content[0].content[0].content = this.textVal;
      if (this.contents.content[0].content[0].content === "") {
        uni.showToast({
          title: "请输入内容",
          icon: "none",
          mask: true,
        });
        return;
      } //加载中

      for (var imgUrl of this.chooseImgs) {
        this.contents.content.push({
          type: "image",
          url: imgUrl,
          desc: "这里是图片描述",
        });
      }

      community
        .publishPost({
          title: this.label,
          content: this.contents,
        })
        .then((res) => {
          uni.hideLoading();
          uni.switchTab({
            url: "../../pages/community/community",
            success() {
              let page = getCurrentPages().pop(); //跳转页面成功之后
              if (!page) return;
              page.onLoad(); //如果页面存在，则重新刷新页面
            },
          });
          this.setData({
            textVal: "",
            chooseImgs: [],
          });
        });
    },
  },
};
</script>
<style>
.header {
  display: flex;
  line-height: 80rpx;
  margin-left: 50rpx;
  margin-right: 50rpx;
}
.hbiaoqian {
  margin-top: 10rpx;
  width: 60rpx;
  height: 60rpx;
  line-height: 80rpx;
}
.hxuanze {
  flex: 1;
  font-size: 32rpx;
  width: 60rpx;
  line-height: 80rpx;
}
.hgengduo {
  width: 100rpx;
  height: 50rpx;
  /* /margin-left: 500rpx; */
  font-size: 32rpx;
}
.xuanze {
  display: flex;
  margin-left: 50rpx;
  font-size: 25rpx;
  flex-wrap: wrap;
}
.quanzi {
  text-align: center;
  padding-top: 10rpx;
  width: 200rpx;
  height: 50rpx;
  background-color: rgb(232, 234, 235);
  border-radius: 30rpx;
  margin-bottom: 20rpx;
  margin-right: 20rpx;
}
.xian {
  width: 650rpx;
  margin-left: 50rpx;
  border: solid 2rpx rgb(228, 226, 226);
}
.neirong {
  margin-top: 50rpx;
  margin-left: 50rpx;
  background-color: rgb(248, 248, 248);
}
.shuru {
  width: 650rpx;
  height: 200rpx;
  padding: 10rpx;
}
.fabu {
  padding-top: 10rpx;
  background-color: #f5d04b;
  text-align: center;
  font-size: 30rpx;
  width: 200rpx;
  height: 60rpx;
  border-radius: 20rpx;
  margin: auto;
}
.SC {
  display: flex;
  flex-wrap: wrap;
}
.shangchuan {
  width: 200rpx;
  height: 200rpx;
  border: 3rpx dashed #f5d04b;
  margin-bottom: 20rpx;
  margin-right: 20rpx;
  background-color: rgb(255, 254, 254);
}
.tupian {
  height: 80rpx;
  width: 80rpx;
  margin-left: 60rpx;
  margin-top: 50rpx;
}
.wenzi {
  width: 200rpx;
  margin-left: 20rpx;
  margin-right: auto;
  font-size: 24rpx;
}
.img_wrap {
  margin-right: 20rpx;
}
</style> 