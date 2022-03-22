import service from "@/util/request.js"
const id = uni.getStorageSync('id')
//
// export default  导出一个对象 里面可以写很多方法 其他地方引入的话比较方便

// 获取用户当前数据
function getUserInfo (){
	let id=uni.getStorageSync('id');
	return service({
		url:`/v1/user/me`,
		method:'get'
	})
}

function getOrder (){
	let id=uni.getStorageSync('id');
	return service({
		url:`/v1/order/all`,
		method:'get'
	})
}

function getMendian(){
	return service({
		url:`/v1/store/stared`,
		method:'get',
		params:{
			id:1
		}
	})
}


function putInformation(aaa){
	console.log(aaa)
	return service({
		url:`/v1/user/me`,
		method:'put',
		data:{
			"username":"布罗特亨德尔",
			"avatar":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp01%2F1ZZQ20QJS6-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650551799&t=29ab545537e8cff48e04fc9163db017e",
			"bio":"众神之父今天偏爱我！",
		}
	})
}

export {getUserInfo,getOrder,getMendian,putInformation}
