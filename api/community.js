import request from "@/util/request.js"

export default{

	// 搜索
	handleInputChange:function(obj){
		return request({
			url:`/v1/community/thread/search`,
			method:'post',
			data: {
				keyword:obj.keyword,
				page:obj.page,
			}
		})
	},

	// 发表帖子
	publishPost:function(obj){
		return request({
			url:`/v1/community/thread`,
			method:'post',
		  data: {
				title: obj.title,
				content: obj.content,
			}
		})
	},

	// 获取推荐帖子
	getPost:function(e){
		// console.log(obj);
		return request({
			url:`/v1/community/recommand`,
			method:'get',
		})
	},

	// 点赞和取消点赞
	giveLike:function(id, f){
		// console.log(`/v1/community/thread/${id}/like`);
		return request({
			url:`/v1/community/thread/${id}/like`,
			method: !f ? 'post' : 'delete',
		})
	},

	//获取帖子详情
	getPostDetail:function(id){
		return request({
			url:`/v1/community/thread/${id}`,
			method:'get'
		})
	},

	// 删除帖子或者评论
	deleteComment:function(id){
		return request({
			url:`/v1/community/thread/${id}`,
			method:'delete'
		})
	},

	// 回复帖子和评论
	replyPost:function(obj){
		return request({
			url:`/v1/community/thread/${obj.id}/reply`,
			method:'post',
			data:{
				content:obj.content
			}
		})
	},

	// 我的帖子
	myPost:function(e){
		return request({
			url:`/v1/community/user/threads`,
			method:'get',
			params: {
				page: e
			}
		})
	},

	// 关注用户
	attentionUser:function(id){
		return request({
			url:`/v1/user/${id}/follow`,
			method:'post'
		})
	},

	// 取消关注用户
	unattentionUser:function(id){
		return request({
			url:`/v1/user/${id}/unfollow`,
			method:'post'
		})
	},

	// 获取用户数据
	getUser:function(id){
		return request({
			url:`/v1/user/${id}`,
			method:'get'
		})
},
}

