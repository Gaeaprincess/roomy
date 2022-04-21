<template>
<view>
<!--pages/chooseseat/chooseseat.wxml-->
<view class="overall">
    <!-- <radio-group  @change="pepo_num">
        <view class="pepo_num">
            <view v-for="(item, index) in toplabel" :key="index" class="pepo_num_item">
                <view :class="'circle ' + (index === laleActive ? 'active' : '')" @tap="changeItem" :data-idx="index">{{item.label}}</view>
                <text class="pepo_num_txt">余{{item.shengyu}}间</text>
            </view>
        </view>
    </radio-group> -->
        <view class="Classification">
            <view class="mark">
                <image class="mark_icon" src="../static/image/seat.png"></image>
                <text class="mark_txt">未选中</text>
            </view>
            <view class="mark">
                <image class="mark_icon" src="../static/image/seat1.png"></image>
                <text class="mark_txt">已选中</text>
            </view>
            <view class="mark">
                <image class="mark_icon" src="../static/image/seat2.png"></image>
                <text class="mark_txt">已预约</text>
            </view>
        </view>

    <!-- <view class="display" wx:for="{{part}}" wx:for-item="item" wx:key="item">
        <text class="display_txt">{{item}}</text>
        <view class="seats">
            <view class="one_seat" wx:for="{{seat}}" wx:for-item="it" wx:key="item">
                <image src="{{ index === selected_idx ? '/image/seat1.png':'/image/seat.png'}}" 
                class="seat_icon" 
                data-idx="{{index}}" 
                bindtap="changeseat"></image>
                <text class="seat_txt">{{it}}</text>
            </view>
        </view>
    </view> -->
    
    <view v-for="(item,key,i) in selectbot"  class="display">
        <text class="display_txt">{{key}}</text>
        <view class="seats">
            <view v-for="(it, j) in item" :key="j" class="one_seat" @tap="itemClick" :data-idx-i="i" :data-idx-j="j">
                <image :src="statusSrc(item,i,j)" class="seat_icon" :data-idx="index" @tap="changeseat(item[j].seat_id)"></image>
                <text class="seat_txt">{{it.idx}}</text>
            </view>
        </view> 
    </view>

    
</view>
<view class="bottom">
    <view class="confirm" @tap="change_pay">确认订座</view>
</view>
</view>
</template>

<script>
import seatAPI from '../../api/seat.js'
export default {
  data() {
    return {
      toplabel: [],
      laleActive: 0,
      // selected_idx:0,
      selectbot: {},
      selected_i: 0,
      selected_j: 0,
      j: "",
      i: "",
      date: "",
      time: "",
	  hour: 0,
	  id:0,
      selected_idx: "",
	  start:"",
	  end:"",
	  seat_id:0
    };
  },
 methods: {
    /**
     * 生命周期函数--监听页面加载
     */
    itemClick(e) {
      // console.log(e);
      let _1 = e.currentTarget.dataset.idxI;
      let _2 = e.currentTarget.dataset.idxJ;

      // if (this.selectbot[_1].seat[_2].status === 1) {
      //   console.log("yiyuyue");
      //   return;
      // }

      this.setData({
        selected_i: _1,
        selected_j: _2
      });
    },

    changeItem(e) {
      console.log(e);
      this.setData({
        laleActive: e.currentTarget.dataset.idx
      }); // console.log(this.data.laleActive);
    },

    changeseat(id) {
      console.log(id);
      // this.setData({
      //   selected_idx: e.currentTarget.dataset.idx
      // });
	  this.seat_id=id;
	  // console.log(this.seat_id);
    },

    change_pay() {
	  let j = this.selected_j+1;
	  console.log(this.seat_id);
      uni.navigateTo({
        url: '/pagesA/pay/pay?' + "i=" + this.selected_i + "&j=" + j + "&date=" + this.date + "&time=" + this.time + "&seat_id=" +this.seat_id+"&start="+this.start+"&end="+this.end,
        events: {
          // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
          acceptDataFromOpenedPage: function (data) {
            console.log(data);
          },
          someEvent: function (data) {
            console.log(data);
          }
        },
        success: function (res) {// 通过eventChannel向被打开页面传送数据
          // let _1 = {
          //     i: this.data.selected_i,
          //     j: this.data.selected_j
          // }
          // res.eventChannel.emit('acceptDataFromOpenerPage', { data: this.data.selected_j})
        }
      });
    },

    pepo_num() {
      console.log("占位：函数 pepo_num 未声明");
    },
	
	getSeat(id,year,month,day){
		seatAPI.getSeat(id,year,month,day).then(res => {
			console.log(res.data);
			this.selectbot = res.data;
			// let a = res.data;
			// this.selectbot = Object.keys(a);
		}).catch(err => {
			console.log(err);
		})
	},
	getOcptime(date,time){
		console.log(time);
		this.start=date+" "+time;
		   // 当前时间戳
		this.start = parseInt(new Date(this.start).getTime()/1000);
		// this.end = parseInt(new Date(this.end).getTime()/1000);
		this.end = this.start + this.hour * 60 * 60;
		console.log(this.start);
		console.log("----"+this.end);
	},
	  statusSrc(item,i,j) {
		  // console.log(item[0].status)
		// console.log(this.start);
		// console.log(this.end);
		// this.seat_id=item[j].seat_id;
		  let arr=item[j].status;
		  for (var idx in arr) {
		  // console.log(parseInt(new Date(arr[idx].start_time).getTime()/1000) );
			  if(arr[idx].status=="occupied" && (parseInt(new Date(arr[idx].start_time).getTime()/1000) < this.end && parseInt(new Date(arr[idx].end_time).getTime()/1000) > this.start) ){
				  console.log("111111");
				  return '../static/image/seat2.png';
			  }
		  }
		  if(i === this.selected_i && j === this.selected_j){
			  return '../static/image/seat1.png';
		  }
		  return '../static/image/seat.png';
	  }

  },
  computed:{
  },
  components: {},
  props: {},
  onLoad: function (options) {
    console.log(options);
    this.setData({
      date: options.date,
      time: options.time,
	  hour: options.hour,
    }); 
	this.id=options.id;
	// console.log(this.id)
	let year=parseInt(this.date.substring(0,4)).toString();
	let month=parseInt(this.date.substring(5,7)).toString();
	let day=parseInt(this.date.substring(8)).toString();
	// console.log(year);
	// console.log(month);
	// console.log(day);
	
	this.getSeat(this.id,year,month,day);
	this.getOcptime(this.date,this.time);
  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
};
</script>
<style>
/* pages/chooseseat/chooseseat.wxss */
.pepo_num {
    width: 100%;
    height: 300rpx;
    margin-top: 40rpx;
    display: flex;
    text-align: center;
    /* border: 2rpx solid #101010; */
}

.pepo_num_item:nth-child(1) {
    margin-left: 30rpx;
    width: 150rpx;
    height: 300rpx;
    /* border: 2rpx solid #101010; */
    /* overflow: hidden; */
}
.pepo_num_item:nth-child(2) {
    margin-left: 120rpx;
    width: 150rpx;
    height: 300rpx;
    /* border: 2rpx solid #101010; */
}

.pepo_num_item:nth-child(3) {
    margin-left: 120rpx;
    width: 150rpx;
    height: 300rpx;
    /* border: 2rpx solid #101010; */
}

.circle {
    margin-top: 50rpx;
    margin-left: 15rpx;
    width: 120rpx;
    height: 120rpx;
    line-height: 120rpx;
    border-radius: 60rpx;
    color: rgba(16, 16, 16, 100);
    background-color: #ffffff;
    font-size: 28rpx;
    text-align: center;
    box-shadow: 0rpx 4rpx 12rpx 0rpx rgba(0, 0, 0, 0.4);
    font-family: Microsoft Yahei;
}

.active {
    margin-top: 50rpx;
    margin-left: 15rpx;
    width: 120rpx;
    height: 120rpx;
    line-height: 120rpx;
    border-radius: 60rpx;
    color: rgba(16, 16, 16, 100);
    background-color: #f5d048;
    font-size: 28rpx;
    text-align: center;
    box-shadow: 0rpx 4rpx 12rpx 0rpx rgba(0, 0, 0, 0.4);
    font-family: Microsoft Yahei;
}
.pepo_num_txt {
    display: inline-block;
    margin-top: 26rpx;
    width: 94rpx;
    height: 40rpx;
    color: rgba(16, 16, 16, 100);
    font-size: 28rpx;
    font-family: PingFangSC-regular;
}

.Classification {
	margin-top: 40rpx;
    display: flex;
}

.mark {
    margin-left: 112rpx;
}

.mark_icon {
    width: 48rpx;
    height: 48rpx;
}

.mark_txt {
    width: 60rpx;
    height: 28rpx;
    color: rgba(16, 16, 16, 100);
    font-size: 20rpx;
    text-align: left;
    font-family: PingFangSC-regular;
}

.display {
    margin-top: 40rpx;
    text-align: center;
}

.display_txt {
    margin-top: 30rpx;
    width: 84rpx;
    height: 40rpx;
    color: rgba(16, 16, 16, 100);
    font-size: 28rpx;
    text-align: center;
    font-family: PingFangSC-regular;
}

.seats {
    margin-left: 50rpx;
    margin-top: 30rpx;
    width: 650rpx;
    height: 354rpx;
    background-color: #ffffff;
    display: flex;
    flex-wrap: wrap;
    line-height: 40rpx;
    border-radius: 30rpx;
    text-align: center;
    box-shadow: 0rpx 4rpx 12rpx 0rpx rgba(0, 0, 0, 0.4);
}

.one_seat {
    margin-left: 88rpx;
    width: 55rpx;
    height: 80rpx;
    display: inline-block;
    text-align: center;
}

.seat_icon {
    margin-top: 18rpx;
    width: 52rpx;
    height: 52rpx;
    display: block;
    background-color: rgba(157, 157, 157, 100);
}

.seat_txt {
    width: 52rpx;
    height: 40rpx;
    display: block;
    color: rgba(16, 16, 16, 100);
    font-size: 24rpx;
    text-align: center;
    font-family: PingFangSC-regular;
}
.bottom{
    position: sticky;
    position: -webkit-sticky;
    bottom: 0;
}
.confirm {
    margin-left: 50rpx;
    width: 650rpx;
    height: 84rpx;
    line-height: 84rpx;
    border-radius: 70rpx;
    background-color: rgba(245, 208, 75, 100);
    color: rgba(16, 16, 16, 100);
    font-size: 28rpx;
    text-align: center;
    box-shadow: 0rpx 4rpx 12rpx 0rpx rgba(0, 0, 0, 0.4);
    font-family: Microsoft Yahei;
}
</style>