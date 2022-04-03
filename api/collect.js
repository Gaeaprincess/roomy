import request from "@/util/request.js"
export default {
	setCollect: function(id) {
		return request({
			url: `/v1/store/star`,
			method: 'post',
			params: {
				id
			}
		})
	},

	setUncollect: function(id) {
		return request({
			url: `/v1/store/unstar`,
			method: 'post',
			params: {
				id
			}
		})
	},

	getCollect: function(page) {
		return request({
			url: `/v1/store/stared`,
			method: 'get',
			params: {
				page
			}
		})
	}

}
