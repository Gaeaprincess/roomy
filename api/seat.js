import request from "@/util/request.js"
export default {
	getShop: function(geolocation) {
		return request({
			url: `/v1/store/nearby`,
			method: 'get',
			params: {
				geolocation
			}
		})
	},
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
