import request from "@/util/request.js"
export default{
	getCollect:function(id){
		return request({
			url:`/v1/store/star/${id}`,
			method:'post'
		})
	}

}
