<template>
  <view>
    <!-- <view class="header"> -->
    <view class="diyihang">
      <view class="qiehuan">
        <view
          v-for="(item, index) in rankTypes"
          :key="index"
          :class="
            'qiehuan1 ' +
            (rankType === item.type
              ? item.type === 'dongtai'
                ? 'qiehuan-dactive'
                : 'qiehuan-pactive'
              : '')
          "
          :data-type="item.type"
          @tap="handleTypeChange"
          >{{ item.title }}</view
        >
      </view>
      <navigator url="/pagesB/soujian/soujian">
        <image
          class="soujian"
          v-if="rankType === 'dongtai'"
          src="/static/resources/soujian.png"
        ></image>
      </navigator>
    </view>
    <!-- 动态 -->
    <block v-if="rankType === 'dongtai'">
      <!-- 搜索框 -->
      <input
        type="text"
        class="header-input"
        placeholder="学友圈"
        placeholder-style="header-input-placeholder"
        @input="sousuoPost"
        @blur="shijiao" 
      />
      <icon type="search" class="header-input-icon" v-if="showIcon"></icon>
      <!-- 轮播图 -->
      <swiper :circular="true" :autoplay="true" class="swiper" indicator-dots>
        <swiper-item class="swiper-item">
          <image
            class="swiper-image"
            src="https://tse1-mm.cn.bing.net/th/id/OIP-C.InZNu-X-tEtq4NXVrKRzaAHaEK?w=326&h=183&c=7&r=0&o=5&pid=1.7"
          ></image>
        </swiper-item>
        <swiper-item>
          <image
            class="swiper-image"
            src="https://img.zcool.cn/community/011d7e5d22b575a801213763a8a61a.jpg@1280w_1l_2o_100sh.jpg"
          ></image>
        </swiper-item>
        <swiper-item>
          <image
            class="swiper-image"
            src="https://tse2-mm.cn.bing.net/th/id/OIP-C.ZP4wtmQqVdsJZUKSd8fDegHaEK?w=302&h=180&c=7&r=0&o=5&pid=1.7"
          ></image>
        </swiper-item>
      </swiper>
      <!-- 发布文章 -->
      <navigator url="/pagesB/xinzeng/xinzeng">
        <image
          class="xinzeng-photo"
          src="/static/resources/xinzeng.png"
        ></image>
      </navigator>

      <view class="project">
        <text class="project-title">热门</text>
        <view class="empty" :hidden="!(searchList && searchList.length == 0)"
          >无相关动态</view
        >
        <!-- 推荐动态 -->
        <view
          v-for="(item) in searchList?searchList: dongtaiList"
          :key="item.id"
          class="project-dongtai"
        >
          <!-- 个人信息 -->
          <view class="gerenxinxi">
            <image class="project-touxiang" :src="item.author.avatar"></image>
            <view class="project-xinxi">
              <view class="project-nicheng">{{ item.author.username }}</view>
              <view class="yuedushu">
                <!-- <image
                  class="yuedushuimage"
                  src="/static/resources/liulan.png"
                ></image> -->
                <!-- <view class="yuedushunum">{{ Math.round(Math.random()*500 + 1) }}</view> -->
                <view class="yuedushunum">{{ item.author.bio }}</view>
              </view>
            </view>
          </view>
          <!-- 帖子信息 -->
          <navigator :url="'/pagesB/Test/Test?id=' + item.id">
            <view class="project-content">
              <view class="project-content-neirong" v-if="item.type !=='image'">{{item.content.content[0].content[0].content}}</view>
              <image
                class="project-content-photo"
                v-if="item.content.content[1].type == 'image'"
                :src="item.content.content[1].url"
              ></image>
              <!-- :src="item.photo"原有的 -->
            </view>
          </navigator>

          <!-- <view class="project-quanzi">{{ item.quanzi }}</view> -->
          <view class="project-quanzi">{{item.title}}</view>

          <view class="xian1"></view>

          <view class="project-gongneng">
            <view class="fenxiang">
              <image
                class="tubiao"
                @tap.stop="handlefenxiang"
                src="/static/resources/fenxiang.png"
              ></image>
            </view>
            <view class="pinglun">
              <navigator :url="'/pagesB/Test/Test?id=' + item.dongtai_id">
                <image
                  class="tubiao"
                  src="/static/resources/pinglun.png"
                ></image>
              </navigator>
              <view>{{ item.comments.length }}</view>
            </view>
            <view class="dianzan">
              <img class="tubiao" 
                :src="item.liked_by_me
                ? '/static/resources/dianzan1.png'
                : '/static/resources/dianzan.png'"
                @click="() => handledianzan(item)"
              />
              <view>{{ item.likes }}</view>
            </view>
          </view>
          <view class="xian2"></view>
        </view>
      </view>
    </block>
    <!-- 排行榜 -->
    <block v-if="rankType === 'paihangbang'">
      <view class="title">月学时排行榜</view>
      <view v-for="(item, index) in paihangbang1" :key="index" class="qian">

        <view class="diyim">
          <image class="diyi" src="/static/resources/diyi.png"></image>
          <image class="yhtouxiang0" :src="item.touxiang"></image>
        </view>
        <view class="mingci0">{{ index + 1 }}</view>
        <view class="yhname0">{{ item.name }}</view>
        <view class="shichang0">{{ item.time }}</view>
      </view>

      <view v-for="(item, index) in paihangbang2" :key="index" class="zhong">
        <image class="yhtouxiang0" :src="item.touxiang"></image>
        <view class="mingci0">{{ index + 2 }}</view>
        <view class="yhname0">{{ item.name }}</view>
        <view class="shichang0">{{ item.time }}</view>
      </view>


      <view v-for="(item, index) in paihangbang3" :key="index" class="hou">
        <view class="mingci">{{ index + 4 }}</view>
        <image class="yhtouxiang" :src="item.touxiang"></image>
        <view class="yhname">{{ item.name }}</view>
        <view class="shichang">{{ item.time }}</view>
      </view>
    </block>
  </view>
</template>

<script>
// import {dongtai,updateDianZan } from '../../mockData/DongTaiData';
import huoqu from "../../api/community.js";
import { log } from "../../components/QS-tabs-wxs-list/js/config.js";

export default {
  data() {
    return {
      // 搜索框文字
      ssvalue:"",
      like_by_me:false,
    //   postid: 0,
      showIcon: true,
      rankType: "dongtai",
      searchList: null,
      rankTypes: [
        {
          title: "动态",
          type: "dongtai",
        },
        {
          title: "排行榜",
          type: "paihangbang",
        },
      ],
      dongtai: "dongtai",
      dongtaiList: [],
      paihangbang1: [
        {
          touxiang:
            "https://tse1-mm.cn.bing.net/th/id/OIP-C.g4VMocET-A-JEvZrRMalBgAAAA?w=186&h=186&c=7&r=0&o=5&pid=1.7",
          name: "蛋蛋",
          time: "33.5小时",
        },
      ],
      paihangbang2: [
        {
          touxiang:
            "https://tse1-mm.cn.bing.net/th/id/OIP-C.Bj5kwHmaEPOsJZnYGw_VrwHaLH?w=115&h=180&c=7&r=0&o=5&pid=1.7",
          name: "庆庆",
          time: "33.4小时",
        },
        {
          touxiang:
            "https://tse1-mm.cn.bing.net/th/id/OIP-C.hZUk8MzqhLqWiteTdLNKLQHaHa?w=177&h=190&c=7&r=0&o=5&pid=1.7",
          name: "霞霞",
          time: "32.5小时",
        },
      ],
      paihangbang3: [
        {
          touxiang:
            "https://tse3-mm.cn.bing.net/th/id/OIP-C.jwdyntX4GuNihC4SPAYo6AHaEo?w=267&h=180&c=7&r=0&o=5&pid=1.7",
          name: "乔虎虎",
          time: "30.5小时",
        },
        {
          touxiang:
            "https://tse3-mm.cn.bing.net/th/id/OIP-C.jwdyntX4GuNihC4SPAYo6AHaEo?w=267&h=180&c=7&r=0&o=5&pid=1.7",
          name: "闫超",
          time: "30.5小时",
        },
        {
          touxiang:
            "https://tse3-mm.cn.bing.net/th/id/OIP-C.jwdyntX4GuNihC4SPAYo6AHaEo?w=267&h=180&c=7&r=0&o=5&pid=1.7",
          name: "何零",
          time: "30.5小时",
        },
        {
          touxiang:
            "https://tse3-mm.cn.bing.net/th/id/OIP-C.jwdyntX4GuNihC4SPAYo6AHaEo?w=267&h=180&c=7&r=0&o=5&pid=1.7",
          name: "罗华荣",
          time: "30.5小时",
        },
      ],
    };
  },
  // 初始加载
  onLoad() {
    this.setData({ dongtai: this.dongtai });
    this.getArctile();

  },

  onShow() {
    this.getArctile();
  },


  // 下拉刷新
  onPullDownRefresh() {
      this.getArctile()
  },

  methods: {
    
    //请求更多文章列表 no
    // getMoreCdcAccountList(){
    //     console.log("ssss");
    // },

    //切换模式

    handleTypeChange(e) {
      const rankType = e.currentTarget.dataset.type;
      this.setData({
        rankType,
      });
    },

    // 搜索文章
    sousuoPost(e){
        this.ssvalue = e.detail.value;
        console.log(this.ssvalue);
        if(!this.ssvalue){
          this.getArctile();
          console.log(this.searchList);
        }else{
          huoqu.handleInputChange({
              keyword: this.ssvalue,
              page:1
          }).then((res)=>{
              this.searchList = res.data;
              console.log(1111);
              console.log(this.searchList);
          });
        }
        this.setData({
            showIcon: this.ssvalue ? false : true,
        });
    },
    // 搜索框失焦
    shijiao(){
      console.log(111)
      if(!this.ssvalue){
        console.log("ww")
        this.searchList=null;
        this.getArctile()
      }
    },

    // 获取文章列表
    async getArctile() {
      huoqu.getPost().then((res) => {
        const _1 = res.data;
        for (let i = 0; i < _1.length; i ++ ) _1[i].idx = i
        this.setData({ dongtaiList: _1 })
        console.log(this.dongtaiList);
      });
    },

    //点赞 取消点赞
    handledianzan(e) {
      const _1 = e.liked_by_me
      const { id } = e
      huoqu.giveLike(id, _1).then(_1 => {
        uni.showToast({
            title: !_1 ? '点赞成功' : '取消点赞',
            icon: "success",
        });
        this.dongtaiList[e.idx].liked_by_me = !_1
        this.dongtaiList[e.idx].likes += _1 ? -1 : 1
      });
    },

    //点击分享
    handlefenxiang() {
      uni.showActionSheet({
        itemList: ["分享到朋友圈", "分享到QQ", "分享到微博"],
        success(res) {
          console.log(res.tapIndex);
        },
      });
    },
  },
};
</script>
<style>
.diyihang {
  display: flex;
  line-height: 60rpx;
}
.qiehuan {
  display: flex;
  width: 320rpx;
  height: 60rpx;
  border-radius: 30rpx;
  font-size: 32rpx;
  border: 2rpx solid rgba(245, 208, 75, 100);
  margin: 30rpx 0rpx 30rpx 220rpx;
}
.qiehuan1 {
  flex: 1;
  line-height: 50rpx;
  text-align: center;
}
.qiehuan-dactive {
  border-radius: 30rpx 0rpx 0rpx 30rpx;
  background-color: #f5d04b;
}
.qiehuan-pactive {
  border-radius: 0rpx 30rpx 30rpx 0rpx;
  background-color: #f5d04b;
}
.soujian {
  height: 60rpx;
  width: 70rpx;
  float: right;
  margin-left: 60rpx;
  margin-top: 30rpx;
}
.header-input {
  margin-left: 50rpx;
  /* margin-top: 112rpx; */
  margin-bottom: 20rpx;
  width: 650rpx;
  height: 60rpx;
  border-radius: 30rpx;
  color: rgba(16, 16, 16, 100);
  font-size: 28rpx;
  text-align: center;
  box-shadow: 0rpx 4rpx 12rpx 0rpx rgba(0, 0, 0, 0.4);
}
.header-input-placeholder {
  font-size: 28rpx;
  color: rgb(237, 237, 238);
}
.header-input-icon {
  position: absolute;
  left: 50%;
  top: 128rpx;
  transform: translateX(-200rpx);
  color: rgb(237, 237, 238);
}
.swiper {
  height: 350rpx;
}
.swiper-image {
  margin: 30rpx 50rpx;
  width: 650rpx;
  height: 320rpx;
  border-radius: 20rpx;
  /* display: inline-block;
    vertical-align: middle; */
}
.xinzeng-photo {
  position: fixed;
  width: 100rpx;
  height: 100rpx;
  right: 40rpx;
  bottom: 40rpx;
}
.project {
  margin-top: 20rpx;
}
.project-title {
  font-size: 36rpx;
  margin-left: 50rpx;
  margin-top: 60rpx;
}
.empty {
  font-size: 30rpx;
  text-align: center;
}
.project-dongtai {
  width: 650rpx;
  /* height: 700rpx; */
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
.yuedushu {
  flex-grow: 1;
  display: flex;
  padding-top: 10rpx;
}
.yuedushuimage {
  width: 30rpx;
  height: 30rpx;
}
.yuedushunum {
  font-size: 20rpx;
  padding-left: 10rpx;
}
.project-content {
  width: 650rpx;
  /* height: 450rpx; */
  margin-top: 30rpx;
  font-size: 28rpx;
  /* display: flex; */
}
.project-content-photo {
  margin-top: 30rpx;
  height: 350rpx;
}
.project-quanzi {
  padding-left: 20rpx;
  max-width: 140rpx;
  height: 40rpx;
  font-size: 24rpx;
  border-radius: 20rpx;
  background-color: rgb(240, 238, 238);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.xian {
  border: rgb(218, 218, 218) solid 3rpx;
}
.project-gongneng {
  display: flex;
  line-height: 60rpx;
  margin-top: 10rpx;
}
.fenxiang {
  flex-grow: 1;
  text-align: center;
}
.pinglun {
  display: flex;
  flex-grow: 1;
  font-size: 24rpx;
  margin-left: 80rpx;
}
.dianzan {
  display: flex;
  flex-grow: 1;
  font-size: 24rpx;
  text-align: center;
  margin-left: 80rpx;
}
.tubiao {
  width: 40rpx;
  height: 40rpx;
  margin-right: 20rpx;
  margin-top: 5rpx;
}
.xian2 {
  width: 100%;
  border-bottom: solid 20rpx rgb(236, 236, 240);
}
/* 排行榜 */
.title {
  width: 260rpx;
  padding-left: 60rpx;
  margin: 10rpx auto;
  font-size: 36rpx;
}
.diyim {
  position: relative;
}
.diyi {
  width: 48rpx;
  height: 48rpx;
  position: absolute;
  top: -40rpx;
  margin: 0 0 0 20rpx;
}
.qian {
  width: 140rpx;
  margin: 30rpx auto;
  text-align: center;
}
.zhong {
  /* justify-content: center; */
  /* vertical-align: middle; */
  display: table-cell;
  width: 400rpx;
  text-align: center;
  margin-left: 50rpx;
}
.yhtouxiang0 {
  width: 90rpx;
  height: 90rpx;
  border-radius: 50%;
}
.mingci0 {
  font-size: 55rpx;
  font-weight: 500;
}
.yhname0 {
  font-size: 25rpx;
}
.shichang0 {
  font-size: 25rpx;
}
.hou {
  display: flex;
  margin: 50rpx 50rpx;
  border: 2rpx solid #e2e2e1;
  border-radius: 16rpx;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);
  line-height: 80rpx;
  text-align: center;
  width: 650rpx;
  height: 104rpx;
  align-items: center;
}
.mingci {
  font-size: 30rpx;
  padding-left: 20rpx;
}
.yhtouxiang {
  width: 55rpx;
  height: 55rpx;
  border-radius: 30rpx;
  margin-left: 60rpx;
}
.yhname {
  text-align: left;
  margin-left: 28rpx;
  font-size: 28rpx;
  width: 300rpx;
}
.shichang {
  font-size: 24rpx;
}
</style>
