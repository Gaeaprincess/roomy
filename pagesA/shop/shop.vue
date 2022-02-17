<template>
	<view>
		<!--pages/shop/shop.wxml-->
		<view class="overall">
			<image class="img1" src="../static/image/overall.jpg"></image>
			<view class="container">
				<text class="title">门店介绍</text>
				<!-- <text class="content">门店：\n地址：\n设备设施：高级椅子， 真皮沙发，千兆WIFI 红酒</text> -->
				<view class="content">
					<view>
						<text>门店：</text><view class="info"> 四川轻化工大学（宜宾校区）</view>
					</view>
					<view>
						<text>地址：</text><view class="info">翠屏区白沙湾街道白塔路1号醉泉湖旁</view>
					</view>
					<view>
						<text>店内设施：</text><view class="info">高级椅子， 真皮沙发，千兆WIFI 红酒</view>
					</view>
				</view>
				<map class="map" :longitude="longitude" :latitude="latitude" show-location="true" @tap="map"></map>
				<text class="title">分区介绍</text>
				<view class="zone">
					<view v-for="(item,index) in list" :key="index" class="box-item">
						<text>{{item.name}}</text>
						<image :src="item.src"></image>
					</view>
				</view>
			</view>
		<view class="navi">
			<view class="col" @tap="col">
				<view>
					<image class="col_img" :src="img_src"> </image>
				</view>
				<view><text class="col_txt">收藏</text></view>
			</view>
			<view class="but_book" @tap="reserve">预定座位</view>
		</view>
</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: '',
				latitude: '',
				img_src: "../static/image/col.png",
				flag: false,
				// 四大区的数据
				list: [{
						src: '../static/image/key.png',
						name: '键盘区'
					},
					{
						src: '../static/image/sun.jpg',
						name: '阳光区'
					},
					{
						src: '../static/image/silent.jpg',
						name: '静音区'
					},
					{
						src: '../static/image/single.jpg',
						name: '单人自习区'
					},
				]
			};
		},

		components: {},
		props: {},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {},

		/**
		 * 生命周期函数--监听页面初次渲染完成
		 */
		onReady: function() {},

		/**
		 * 生命周期函数--监听页面显示
		 */
		onShow: function() {},

		/**
		 * 生命周期函数--监听页面隐藏
		 */
		onHide: function() {},

		/**
		 * 生命周期函数--监听页面卸载
		 */
		onUnload: function() {},

		/**
		 * 页面相关事件处理函数--监听用户下拉动作
		 */
		onPullDownRefresh: function() {},

		/**
		 * 页面上拉触底事件的处理函数
		 */
		onReachBottom: function() {},

		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage: function() {},
		methods: {
			tabChange(e) {
				console.log('tab change', e);
			},

			map: function() {
				uni.showLoading({
					title: "定位中",
					mask: true
				});
				var that = this;
				uni.getLocation({
					type: 'gcj02',
					altitude: true,
					//高精度定位
					//定位成功，更新定位结果
					success: function(res) {
						var latitudee = res.latitude;
						var longitudee = res.longitude;
						that.setData({
							longitude: parseFloat(longitudee),
							latitude: parseFloat(latitudee)
						});
					},
					//定位失败回调
					fail: function() {
						uni.showToast({
							title: "定位失败",
							icon: "none"
						});
					},
					complete: function() {
						//隐藏定位中信息进度
						uni.hideLoading();
					}
				});
			},
			col: function() {
				// 查询数据库  
				console.log(this);

				if (this.flag == false) {
					this.setData({
						'img_src': "../static/image/col1.png",
						flag: true
					}), uni.showToast({
						title: '收藏成功',
						duration: 2500
					}); // 修改数据库
				} else {
					this.setData({
						'img_src': "../static/image/col.png",
						flag: false
					}), uni.showToast({
						title: '取消收藏',
						icon: 'error',
						duration: 2500
					}); // 修改数据库
				}
			},
			reserve: function() {
				uni.navigateTo({
					url: '../bookseat/bookseat',
					fail:err=>{
						console.log(err)
					}
				});
			}
		}
	};
</script>
<style lang="scss" scoped>
	/* pages/shop/shop.wxss */
	.overall {
		height: 100%;
		position: relative;
		padding: 20px 5px;
		.img1 {
			width: 100%;
			z-index: 1;
		}

		.container {
			margin-left: 5%;
			margin-top: -200rpx;
			width: 90%;
			height: 100%;
			background-color: #ffffff;
			line-height: 40rpx;
			border-radius: 50rpx 50rpx 0rpx 0rpx;
			text-align: center;
			margin: auto;
			z-index: 3;
			padding-top: 20rpx;
			.title {
				display: block;
				margin-top: 42rpx;
				width: 100%;
				height: 50rpx;
				color: rgba(16, 16, 16, 100);
				font-size: 36rpx;
				text-align: center;
				font-family: PingFangSC-regular;
			}
			.content {
				margin-top: 16rpx;
				width: 586rpx;
				// height: 300rpx;
				line-height: 40rpx;
				color: rgba(16, 16, 16, 100);
				font-size: 28rpx;
				text-align: left;
				margin: auto;
				font-family: PingFangSC-regular;
				text{
					font-weight: bolder;
					padding-right: 30rpx;
				}
				.info{
					vertical-align: top;
					display: inline-block;
				}
				view:nth-child(1){
					margin: auto;
				}
				view:nth-child(2){
					margin: auto;
				}
				view:nth-child(3){
					text{
						padding-right: 10rpx;
					}
					margin: auto;
					.info{
						width: 410rpx;
					}
				}
			}

			.map {
				margin-top: 30rpx;
				width: 572rpx;
				height: 248rpx;
				margin: auto;
			}
			.zone{
				margin-top: 30rpx;
				text-align: center;
				.box-item{
					margin-bottom: 30rpx;
					image{
						display: block;
						margin-top: 22rpx;
						width: 258rpx;
						height: 198rpx;
						border-radius: 30rpx;
						margin:30rpx auto;
					}
				}
			
			}
		}

	.navi {
		width: 748rpx;
		height: 120rpx;
		line-height: 40rpx;
		/* text-align: center; */
		/* float: left; */
		display: flex;
		position: sticky;
		background-color: #ffffff;
		position: -webkit-sticky;
		bottom: 0;

	}

	.col_img {
		margin-left: 30rpx;
		margin-top: 10rpx;
		width: 48rpx;
		height: 48rpx;
		/* background-color: rgba(16, 16, 16, 100); */
	}

	.col_txt {
		margin-left: 26rpx;
		margin-top: 8rpx;
		width: 56rpx;
		height: 40rpx;
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		text-align: left;
		font-family: PingFangSC-regular;
	}

	.but_book {
		margin-left: 32rpx;
		margin-top: 16rpx;
		width: 586rpx;
		height: 84rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		border-radius: 70rpx;
		background-color: rgba(245, 208, 75, 100);
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		text-align: center;
		box-shadow: 2rpx 2rpx 0rpx 0rpx rgba(0, 0, 0, 0.4);
		font-family: Microsoft Yahei;
	}
	}
</style>
