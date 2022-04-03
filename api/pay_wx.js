import request from "@/util/request.js"
export default {
	pay_wx: function(seat_id,start_time,end_time) {
		console.log(seat_id);
		console.log(start_time);
		console.log(end_time);
		return request({
			url: `/v1/session/apply`,
			method: 'post',
			data: {
				seat:parseInt(seat_id),
				start_time:parseInt(start_time),
				end_time:parseInt(end_time)
			}
		})
	},

}
