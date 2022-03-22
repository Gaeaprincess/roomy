import request from "@/util/request.js"

export default{
	handleInputChange:function(id){
		return request({
			url:`/v1/community/thread/search`,
			method:'post',
			params: {
				id
			}
		})
	},
}