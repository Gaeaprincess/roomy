<template>
	<view style="height: 100vh;overflow: hidden">
		<!-- 打卡页面 -->
		<image class="bacgk" :src='testSrc'></image>
		<view class="content" style="width: 100%;">
			<!-- 时钟 -->
			<canvas canvas-id="tomatoCanvas" class="clock"></canvas>
        <text class="name">{{item.toToName}}</text>
        <text>{{t1}}分钟</text>
			<view class="info">
				<text v-if="isShow.isStartTomato">进行中</text>
				<text v-if="!isShow.isStartTomato">已重置</text>
				<text v-if="isShow.isStartRest">休息中</text>
			</view>
			<view class="botmIcon">
				<!-- isStartTomato为false时显示暂停键 -->
				<view class="iconfont icon-bofang margin-set" @click="bindTapTomato" v-show="!isShow.isStartTomato">
				</view>
				<!--isStartTomato为true时显示 播放键 -->
				<view class="iconfont icon-zantingtingzhi2 margin-set" v-show="isShow.isStartTomato"
					@click="bindTapTomato"></view>
				<view class="iconfont icon-yinxiaokai" v-show="isShowYinXiao" @click="closeMusic()"></view>
				<view class="iconfont icon-yinxiaoguan" v-show="! isShowYinXiao" @click="closeMusic()"></view>
				<view class="iconfont icon-tuichu margin-left" @click="showExitDialog()"></view>
			</view>
			<span class="clear"></span>
		</view>
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog :before-close="true" @close="close" @confirm="confirm" content="学霸模式下暂停即重置本次计时,是否重置？">
			</uni-popup-dialog>
		</uni-popup>
		<uni-popup ref="popup1" type="dialog">
			<uni-popup-dialog :before-close="true" @close="close" @confirm="finish" content="确认结束本次计时？">
			</uni-popup-dialog>
		</uni-popup>
		<span class="clear"></span>
	</view>
</template>
<script>
	import _ from 'lodash'
	export default {
		data() {
			return {
				// 传递过来的参数
				item: {},
				t1: "",
				timer: null,
				flag_copy: {},
				flag: {
					intervalTime: 10,
					tomatoTime: 0,
					restTime: 5 * 60 * 1000, //休息时间
					totalTime: 0,
					currentProgress: 0,
					minutes: 0,
					seconds: 0,
					hours: 0
				},
        // 剩余时间
        remainTime:'',
				isShow: {
					isStartTomato: true, //是否开始番茄时间
					isStartRest: false, //是否开始休息时间
					tomatoTimeOver: false, //是否结束了番茄时间
				},
				isShowYinXiao: false,
				// 音效对象
				AudioContext: null,
				testSrc: '../../static/bg1.jpeg',
        todoItem:{
          name:'',
          value:0
        }
			}
		},
		methods: {
			// 改变传来时间的格式
			changeTimeFM(time) {
				const t = parseInt(time);
				return t * 60 * 1000;
			},
			intial() {
				if (this.isShow.isStartRest) {
					this.flag.totalTime = this.flag.restTime;
				} else {
					this.flag.totalTime = this.flag.tomatoTime;
				}
				this.iniTime();
				this.flag.currentProgress = 0;
				this.drawProgressArc();
			},
			iniTime(){
				let flag1 = this.flag.tomatoTime / 1000 / 60 / 60;
				let flag2 = (this.flag.tomatoTime / 1000 / 60) % 60;
				let flag3 = (this.flag.tomatoTime / 1000) % 60;
				if (flag1 && !flag2 && !flag3) {
					this.flag.hours = Math.floor(flag1);
					this.flag.minutes = 0;
					this.flag.seconds = 0;
				} else {
					this.flag.hours = Math.floor(flag1);
					this.flag.minutes = Math.floor(flag2);
					this.flag.seconds = Math.floor(flag3);
				}
				// console.log(this.flag.minutes,this.flag.seconds);
			},
			initProgress() {
				this.iniTime();
				this.flag.currentProgress = 0;
				this.flag.totalTime = this.flag.tomatoTime;
				this.drawProgressArc();
				this.startCountdown();
			},
			// 画时钟
			drawProgressArc() {
			 let context = uni.createCanvasContext("tomatoCanvas");
				// Draw outer arc
				context.beginPath();
				// 终点x,y坐标  半径  起始角，结束角
			 context.arc(192, 187.5, 120, 0, 2 * Math.PI);
				context.setStrokeStyle("#cccccc");
				context.setLineWidth(5);
				context.stroke();
				context.closePath();
				//Draw inner arc
				context.beginPath();
				context.arc(
					187.5,
					187.5,
					120,
					1.5 * Math.PI,
					(1.5 + 2 * this.flag.currentProgress) * Math.PI
				);
				//  开始 线是蓝色  休息 线是橙色
				context.setStrokeStyle(this.isShow.isStartTomato ? "#58C9B9" : "#e74c3c");
				context.setLineWidth(5);
				context.stroke();
				context.closePath();

			 //Draw text
				context.beginPath();
				// 休息时字体是橙色 开始时字体是蓝色
			 context.setFillStyle(this.isShow.isStartRest ? "#e74c3c" : "#58C9B9");
				context.setFontSize(40);
				context.setTextAlign("center");
				context.setTextBaseline("middle");
			 if (this.flag.hours !== 0) {
					context.fillText(this.flag.hours + ":" + this.flag.minutes + ":" + this.flag.seconds, 187.5, 187.5,
						187.5);
				} else {
					context.fillText(this.flag.minutes + ":" + this.flag.seconds, 187.5, 187.5);
				}
				context.fill();
			 context.closePath();

				context.draw();
			},
			// 关闭，打开音效
			closeMusic() {
				this.isShowYinXiao = !this.isShowYinXiao;
				if (this.isShowYinXiao) {
					this.AudioContext.play();
				} else {
					this.AudioContext.pause();
				}

			},
			// 计时
			startCountdown() {currentCount
				let totalCount = this.flag.totalTime / this.flag.intervalTime;
				let currentCount = totalCount;
				this.timer = setInterval(() => {
					if (currentCount-- == 0) {

						//  时间到了自动调用的函数
						this.stopCountdown();
						this.$set(this.isShow, "isStartTomato", this.isShow.isStartTomato ? !this.isShow
							.isStartTomato : this.isShow.isStartTomato);
						this.$set(this.isShow, "isStartRest", this.isShow.isStartRest ? !this.isShow.isStartRest :
							this.isShow.isStartRest);
						this.isShow.tomatoTimeOver = this.isShow.isStartTomato;
			 		// console.log(this.isShow.isStartTomato);
					} else {
						var remainTime =
							this.flag.totalTime -
							(totalCount - currentCount) * this.flag.intervalTime;
              this.remainTime=remainTime
						this.flag.currentProgress = 1 - currentCount / totalCount;
						this.flag.hours=Math.floor((remainTime / 1000 / 60/60) % 60);
						this.flag.minutes = Math.floor((remainTime / 1000 / 60) % 60);
						this.flag.seconds = Math.floor((remainTime / 1000) % 60);
						this.drawProgressArc();
					}
				}, this.flag.intervalTime);
			},
			//停止，并重置
			stopCountdown() {
				clearInterval(this.timer);
				this.timer = null;
				this.intial();
			},
			// 暂停/开始
			bindTapTomato(event) {
				// 如果是正在播放按钮 点一下先提示
				if (this.isShow.isStartTomato) {
					this.open();
					return;
				}
				// 点击开始播放  isStartTomato为false
				this.isShow.isStartTomato = !this.isShow.isStartTomato;
				this.isShow.isStartRest = false;
				this.isShow.tomatoTimeOver = false;
				this.startCountdown();
				// this.bindTap();
			},
			//
			bindTap() {
				this.isShow.isStartTomato = !this.isShow.isStartTomato;
				this.isShow.isStartRest = false;
				this.isShow.tomatoTimeOver = false;
				if (this.isShow.isStartTomato) {
					this.startCountdown();
				} else {
					this.stopCountdown();
				}
			},
			// 打开提示框
			open() {
				this.$refs.popup.open()
			},
			// 关闭提示框=> 取消重置
			close() {
				this.$refs.popup.close()
				this.$refs.popup1.close()
			},
			// 确认重置
			confirm() {
				if (this.isShow.isStartTomato) {
					this.bindTap();
					this.close();
				}
			},
      // 保存代办数据
      saveTodoItem(){
        let data=uni.getStorageSync('data')
        console.log(data,'1111');
        let dailyItem=[]
        if(!data){
          //
          data={}
          dailyItem=[this.todoItem]
        }
        if(!data.dailyItem){
          // data肯定有数据
          dailyItem=[this.todoItem,]
        }else {
          if(!data.dailyItem){
            dailyItem=[this.todoItem,]
          }else {
			  // 日代办有数据了
			  try{
				  //  this.todoItem.value
				  data.dailyItem.forEach((item,index)=>{
					  if(item.id==this.todoItem.id){
						  let time=Number(item.value)+Number(this.todoItem.value)
						  this.todoItem.value=time.toFixed(2)
						  data.dailyItem.splice(index,1);
						  throw new Error();
					  }
				  })
				   throw new Error();
			  }catch(e){
				  // 头差
				  dailyItem=data.dailyItem
				  dailyItem.unshift(this.todoItem) //
			  }
			
          }
          // 有数据
        }
		
        data.dailyItem=dailyItem
		// console.log(data,222);
        uni.setStorageSync('data',data)
      },
			//开始/暂停休息
			bindTapRest(event) {
				this.isShow.isStartRest = !this.isShow.isStartRest;
				this.isShow.isStartTomato = false;
				this.isShow.tomatoTimeOver = !this.isShow.isStartRest;
				if (this.isShow.isStartRest) {
					this.flag.totalTime = this.flag.restTime;
					this.startCountdown();
				} else {
		 		this.stopCountdown();
				}
			},
			//退出休息
			bindTapRestExit(event) {
				this.$set(this.isShow, "tomatoTimeOver", false);
			},
			// 退出
			finish() {
				// 不能带参数
				uni.reLaunch({
					url: '/pages/xueba/xueba'
				})
			},
			// 显示退出计时对话框
			showExitDialog() {
				this.$refs.popup1.open("center")
			},
      // 保存时间
      saveTime(){
        // 取出时间
        let hour=Number(uni.getStorageSync('studyHours'))
        const time=(this.flag.tomatoTime-this.remainTime)/1000/60/60 // 小时  number
        this.todoItem.value=(time*60).toFixed(2) // 分
        hour=Number(hour)+Number(time.toFixed(2)) // 字符串
        uni.setStorageSync('studyHours',hour)
      }
		},
		onLoad(option) {
			this.item = JSON.parse(decodeURIComponent(option.obj));// 接受参数
			console.log("代办数据：",this.item);
      		this.todoItem.name=this.item.toToName
			this.todoItem.id=this.item.id;
      		this.t1 = this.item.toDoTime;
			// 将传来的时间字符串改为数字
			this.flag.tomatoTime = this.changeTimeFM(this.item.toDoTime);
      		var innerAudioContext = uni.createInnerAudioContext();
			innerAudioContext.autoplay = false;
			innerAudioContext.src = 'https://downsc.chinaz.net/Files/DownLoad/sound1/201909/11983.mp3';
			innerAudioContext.loop = true;
			innerAudioContext.obeyMuteSwitch = true;
			this.AudioContext = innerAudioContext;
		},
		onReady() {
			// console.log(this.flag.tomatoTime);
			this.flag_copy = _.cloneDeep(this.flag);
			this.initProgress();
		},
		onUnload() {
			clearInterval(this.timer);
			this.timer = null;
			this.item = {};
			this.flag=this.flag_copy;
			this.AudioContext.destroy();
			this.saveTime()
			this.saveTodoItem()
    }
	}
</script>

<style lang="scss" scoped>
	@import "./clock.scss";
</style>
