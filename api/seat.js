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
	// setSeat: function(id) {
	// 	return request({
	// 		url: `/store/seats`,
	// 		method: 'get',
	// 		params: {
	// 			id
	// 		}
	// 	})
	// },
	getSeat: function(id,year,month,day) {
		return request({
			url: `/v1/store/`+id+`/seats`,
			method: 'get',
			params: {
				year,
				month,
				day
			}
		})
	}

}
