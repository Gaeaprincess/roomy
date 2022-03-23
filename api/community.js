import request from '@/util/request.js'
export  default {
    // 获取帖子
    getInvitation:()=>{
        return request({
            url:`/v1/community/recommand`
        })
    }
}
