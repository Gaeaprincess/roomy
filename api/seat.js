import request from "@/util/request.js"
export default {
	setSeat: function(id) {
		return request({
			url: `/store/seats`,
			method: 'get',
			params: {
				id
			}
		})
	}

}
