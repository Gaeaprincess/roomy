<template>
<view>
<view class="header">
    <image class="hbiaoqian" src="../static/resources/biaoqian.png"></image>
    <text class="hxuanze">选择动态话题</text>
    <navigator url="/pagesB/huati/huati" class="gengduo">
        <text>更多  ></text>
    </navigator>
</view>
<!-- <view class="xuanze" wx:for="{{xuanze}}" wx:key="index">
    <view class="quanzi">{{item}}</view>
</view> -->
<quanzi @myevent="myevent" :xuanze="select"></quanzi>
<view class="xian"></view>
<view class="neirong">
    <textarea :value="textVal" @input="handleTextInput" class="shuru" placeholder="请输入..." auto-focus></textarea>
    <view class="SC">
        <view class="shangchuan" @tap="handleChooseImg">
            <image class="tupian" src="../static/resources/tupian.png"></image>
            <view class="wenzi">添加照片/视频</view>
        </view>
        <view v-for="(item, index) in chooseImgs" :key="index" class="img_wrap" @tap="handleRemoveImg" :data-index="index">
            <UpImg :src="item"></UpImg>
        </view>
    </view>
</view> 
    <view class="fabu" @tap="handleFormSubmit">发布</view>
</view>
</template>

<script>
import { addDongTai } from "../../mockData/DongTaiData.js";
import { userInfo } from "../../mockData/TestData"; // let {userInfo} = require('../../mockData/TestData')
import UpImg from "../../components/UpImg/UpImg";
import quanzi from "../../components/quan_zi/quanzi";

export default {
  data() {
    return {
      chooseImgs: [],
      //文本域的内容
      textVal: "",
      select: [],
      xiaobiai: 2,
      label: "#备战考研",
      //外网的图片的路径数组
      UpLoadImgs: []
    };
  },

  components: {
    UpImg,
    quanzi
  },
  props: {},

  onLoad() {
    // wx.request()
    // 模拟请求，实际自己写
    setTimeout(() => {
      this.setData({
        select: [{
          content: '#备考考研 ',
          isHot: true
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
      });
    }, 10);
  },

  methods: {
    //上传图片事件
    handleChooseImg() {
      uni.chooseImage({
        count: 3,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: result => {
          this.setData({
            // 图片数组进行拼接
            chooseImgs: [...this.chooseImgs, ...result.tempFilePaths]
          });
        }
      });
    },

    myevent(e) {
      // console.log(e);
      this.setData({
        xiaobiai: e.detail
      });
      console.log("父组件中的值是： " + this.xiaobiai);
      this.setData({
        label: this.xiaobiai
      });
    },

    //点击自定义图片组件,删除
    handleRemoveImg(e) {
      //获取索引
      const {
        index
      } = e.currentTarget.dataset; //获取图片数组

      let {
        chooseImgs
      } = this; //删除

      chooseImgs.splice(index, 1); //填充回去

      this.setData({
        chooseImgs
      });
    },

    itemClick(content) {
      console.log(content);
    },

    //文本域的输入事件
    handleTextInput(e) {
      this.setData({
        textVal: e.detail.value
      });
    },

    //提交事件的点击事件
    //   handleFormSubmit(){
    //     //获取文字内容和图片数组
    //     const {textVal,chooseImgs}=this.data;
    //     //合法性的验证
    //     if(!textVal.trim()){
    //       //不合法的结果
    //       wx.showToast({
    //         title: '请输入内容',
    //         icon: 'none',
    //         mask: true,
    //       });
    //       return;
    //     }
    //     //上传图片到专门的服务器
    //     //不支持上传多张图片同时上传     遍历数组
    //     //显示正在等待的图标
    //     wx.showLoading({
    //       title: '正在上传中',
    //       mask: true
    //     });
    //     //判断有没有需要上传的图片数组
    //     if(chooseImgs.length!=0){
    //     chooseImgs.forEach((v,i)=>{
    //         wx.uploadFile({
    //           filePath: v,
    //           //后台获取名称，文件
    //           name: "image",
    //           //图片传到的地址
    //           url: 'https://sm.ms/api/v2/',
    //           // url:'../../mockData/'
    //           //顺带的文本信息
    //           formData: {},
    //           success: (result) => {
    //             console.log(result)
    //             // let url = JSON.parse (result.data).url;
    //             let url = result.data.url;
    //             this.UpLoadImgs.push(url);
    //             console.log(this.UpLoadImgs);
    //             //所有图片都上传了才触发的
    //             if(i===chooseImgs.length-1){
    //               wx.hideLoading();
    //               close.log("把文本和图片数组提交到后台");
    //               //提交成功重置页面
    //               this.setData({
    //                 textVal:"",
    //                 chooseImgs:[]
    //               })
    //               //返回上一界面
    //               wx.navigateBack({
    //                 delta: 1,
    //               });
    //             }
    //           },
    //         })
    //     })
    //   }else{
    //     wx.hideLoading();
    //     console.log("仅提交了文本");
    //     wx.navigateBack({
    //       delta: 1,
    //     })
    //   }
    // },
    handleFormSubmit(e) {
      const {
        textVal,
        chooseImgs
      } = this;
      console.log(textVal, chooseImgs); //不为空

      if (!textVal.trim()) {
        uni.showToast({
          title: '请输入内容',
          icon: 'none',
          mask: true
        });
        return;
      } //加载中
      // wx.showLoading({
      //   title: '正在上传中',
      //   mask: true
      // });


      addDongTai({
        touxiang: userInfo.user_aratar,
        name: userInfo.user_nick,
        yuedushunum: 0,
        neirong: textVal,
        photo: chooseImgs,
        quanzi: this.label,
        pinglunshu: 0,
        dianzanshu: 0,
        isDianZan: false
      }).then(res => {
        uni.hideLoading();
        this.setData({
          textVal: "",
          chooseImgs: []
        });
      });
    }

  }
};
</script>
<style>
.header{
    display: flex;
    line-height: 80rpx;
    margin-left: 50rpx;
    margin-right: 50rpx;
}
.hbiaoqian{
    margin-top: 10rpx;
    width: 60rpx;
    height: 60rpx;
    line-height: 80rpx;
}
.hxuanze{
    flex: 1;
    font-size: 32rpx;
    width: 60rpx;
    line-height: 80rpx;
}
.hgengduo{
    width: 100rpx;
    height: 50rpx;
    /* /margin-left: 500rpx; */
    font-size: 32rpx;
}
.xuanze{
    display: flex;
    margin-left: 50rpx;
    font-size: 25rpx;
    flex-wrap: wrap;
} 
.quanzi{
    text-align: center;
    padding-top: 10rpx;
    width: 200rpx;
    height: 50rpx;
    background-color: rgb(232, 234, 235);
    border-radius: 30rpx;
    margin-bottom: 20rpx;
    margin-right: 20rpx;
}
.xian{
    width: 650rpx;
    margin-left: 50rpx;
    border: solid 2rpx rgb(228, 226, 226);
}
.neirong{
    margin-top: 50rpx;
    margin-left: 50rpx;
    background-color: rgb(248, 248, 248); 
}
.shuru{
    width: 650rpx;
    height: 200rpx;
    padding: 10rpx;
}
.fabu{
    padding-top: 10rpx;
    background-color: #F5D04B;
    text-align: center;
    font-size: 30rpx;
    width: 200rpx;
    height: 60rpx;
    border-radius: 20rpx;
    margin: auto;
}
.SC{
    display: flex;
    flex-wrap: wrap;
}
.shangchuan{
    width: 200rpx;
    height: 200rpx;
    border: 3rpx dashed #F5D04B;
    margin-bottom: 20rpx;
    margin-right: 20rpx;
    background-color: rgb(255, 254, 254);
}
.tupian{
    height: 80rpx;
    width: 80rpx;
    margin-left: 60rpx;
    margin-top: 50rpx;
}
.wenzi{
    width: 200rpx;
    margin-left:20rpx; 
    margin-right:auto;
    font-size: 24rpx;
}   
.img_wrap{
    margin-right: 20rpx;
}
</style>