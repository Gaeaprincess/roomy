import service from "@/util/request.js"
const id = uni.getStorageSync('id')
//
// export default  导出一个对象 里面可以写很多方法 其他地方引入的话比较方便

// 获取用户当前数据
function getUserInfo () {
  let id = uni.getStorageSync('id');
  return service({
    url: `/v1/user/me`,
    method: 'get'
  })
}

function getOrder () {
  let id = uni.getStorageSync('id');
  return service({
    url: `/v1/session/history?page=1`,
    method: 'get'
  })
}

function getMendian () {
  return service({
    url: `/v1/store/stared?page=1`,
    method: 'get'
  })
}


function putInformation (aaa) {
  return service({
    url: `/v1/user/me`,
    method: 'put',
    data: aaa
  })
}

function getdynamic () {
  return service({
    url: `/v1/community/user/threads?page=1`,
    method: 'get',
  })
}

function chicken () {
  return service({
    url: '/v1/community/checkin',
    method: 'post'
  })
}

function getchicken () {
  return service({
    url: '/v1/community/checkin/history',
    method: 'get'
  })
}

function getpwd (token) {
  return service({
    url: '/v1/iot/interaction/gdan',
    method: 'post',
    data: {
      "session": token
    }
  })
}


function getfollower () {
  return service({
    url: `/v1/user/${id}/followers`,
    method: 'get'
  })
}

function getfollowings () {
  return service({
    url: `/v1/user/${id}/followings`,
    method: 'get'
  })
}

function postunfollow (id) {
  return service({
    url: `/v1/user/${id}/unfollow`,
    method: 'post'
  })
}

function postrecharge (amount) {
  return service({
    url: `/v1/subscription/recharge`,
    method: 'post',
    data: {
      "amount": amount
    }
  })
}

function poststartcount (obj) {
  return service({
    url: `/v1/session/commence`,
    method: 'post',
    data: {
      "timestamp": obj.timestamp,
      "session": obj.session
    }
  })
}


function getmoney () {
  return service({
    url: `/v1/order/all?page=1&&limit=100`,
    method: 'get',
  })
}


function setprice (id) {
  return service({
    url: '/v1/callbacks/pay_debug',
    method: 'post',
    data: {
      "order_id": id
    }
  })
}


function stopcharge (obj) {
  return service({
    url: '/v1/session/end',
    method: 'post',
    data: {
      "timestamp": obj.timestamp,
      "session": obj.session
    }
  })
}

function getnotification () {
  return service({
    url: `/v1/notification/notifications?page=1&&limit=10`,
    method: 'get',
  })
}

export { getUserInfo, getOrder, getMendian, putInformation, getdynamic, chicken, getchicken, getfollower, getfollowings, getpwd, postunfollow, postrecharge, poststartcount, getmoney, setprice, stopcharge, getnotification }