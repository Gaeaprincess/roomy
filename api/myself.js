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


export { getUserInfo, getOrder, getMendian, putInformation, getdynamic, chicken, getchicken, getfollower, getfollowings }

