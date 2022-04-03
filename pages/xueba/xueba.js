import {getId} from '../../util/uniqueId'
export default {
				// 对用户学习时间进行处理
				fomatFloat(num, n) {
					var f = parseFloat(num);
					if (isNaN(f)) {
						return false;
					}
					f = Math.round(num * Math.pow(10, n)) / Math.pow(10, n); // n 幂
					var s = f.toString();
					var rs = s.indexOf('.');
					//判定如果是整数，增加小数点再补0
					if (rs < 0) {
			  	rs = s.length;
						s += '.';
					}
					while (s.length <= rs + n) {
						s += '0';
					}
					return s;
				},
				// tabs切换处理函数
				onClickItem(e) {
					// e:返回一个对象 {currentIndex: 1} 为currentIndex 0序
					if (this.current != e.currentIndex) {
						this.current = e.currentIndex;
					}
				},
				// 学习报告的分段器处理
				reportClickItem(e) {
					if (this.current1 != e.currentIndex) {
						this.current1 = e.currentIndex;
					}
				},
				// 添加代办按钮显示对话框
				addToDo() {
					this.isShowToDo = true;
					this.showMasking = true
				},
				// 获取用户的数据(应该设为全局调用一次的函数 待整合)
				async getUserInfo() {
					const {
						data: res
					} = await this.$myRequest({
						url: '/record'
					})
					this.item = res;
					//  Number类型
					// console.log(typeof(this.item.totalTime))
				},
				//从缓存里面取 列表
				 getToDolist() {
					this.toDOList =uni.getStorageSync('data').list;
				},
				// 跳转至番茄页面
				gotoClock(item) {
					console.log(item)
					uni.navigateTo({
						url: '/pages/clock/clock?obj=' + encodeURIComponent(JSON.stringify(item))
					})
				},
				// 根据id删除一个代办
				async deletToDo(id) {
					// 取出代办
					 let data=uni.getStorageSync('todoList');
					 if(data){
						 data=data.filter(item=>{
							 if(item.id==id){
								 return false
							 }
							 return true
						 })
					 }
					uni.setStorageSync('todoList',data)
					uni.showToast({
						icon: "none",
						title: "删除成功!"
					})
					this.toDOList =uni.getStorageSync('todoList')?uni.getStorageSync('todoList'):[];
				},
				// 保存新建代办
				async addNewList() {
					if (this.newList.toToName === '') {
						return uni.showToast({
							icon: 'none',
							title: '请填写代办名称'
						});
					} else if (this.newList.toDoTime === '') {
						return uni.showToast({
							icon: 'none',
							title: '请设置代办时长'
						});
					} else if (this.newList.study_target === '') {
						return uni.showToast({
							icon: 'none',
							title: '请选择代办目标'
						});
					}
					let id=getId()
					this.newList.id=id
					// 四项内容都填了
					let data=uni.getStorageSync('todoList')
					console.log(data);
					let list=[]
					if(!data){
						// data 为空
						data=[]
						data.unshift(this.newList)
					}else {
						data.unshift(this.newList)
					}
					uni.setStorageSync('todoList',data)
					this.toDOList =uni.getStorageSync('todoList');
					uni.showToast({
						icon: "none",
						title: "新建代办成功!"
					})
					this.newList.toToName=''
					this.isShowToDo = false;
					this.showMasking = false;
				},
				// 关闭新建代办对话框
				closeAddToDo() {
					this.isShowToDo = false;
					this.showMasking = false;
				},
				radio1Change(e) {
					// console.log('radio发生change事件，携带value值为：',e.detail.value)
					this.newList.study_target = e.detail.value;
				},
				radio3Change(e) {
					// console.log('radio发生change事件，携带value值为：',e.detail.value)
					if (e.detail.value === 'zidingyi') {
						this.newList.toDoTime = '';
						this.timeSetting = true;
						this.showMasking2 = true;
						return;
					}
					this.newList.toDoTime = e.detail.value;
				},
				// 设置时间对话框
				reload() {
					this.isRefresh = false
					this.$nextTick(() => {
						this.isRefresh = true
					})
				},
				// 关闭自定义时间对话框
				close() {
					this.timeSetting = false;
					this.showMasking2 = false;
					this.newList.toDoTime = '';
					this.reload();
				},
				// 保存自定义的时间
				saveTime() {
					this.timeSetting = false;
					this.showMasking2 = false;
					this.newList.toDoTime = this.toDoTime + "";
				},
				//自定义时间的增加和减少时间
				subtract() {
					let num = 10;
					if (this.toDoTime == 0) {
						uni.showToast({
							icon: "none",
							title: "不能再减了哦"
						})
						return;
					}
					this.toDoTime -= num;
				},
				add() {
					this.toDoTime += 10;
				},
	}
