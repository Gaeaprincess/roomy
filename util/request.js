import Vue from 'vue'
import axios from 'axios'


const service = axios.create({
baseURL:'http://111.229.239.208:9986',
timeout: 6000, // request timeout
crossDomain: true
})
 // 请求拦截器
service.interceptors.request.use(config => {
    // console.log(config);
    //访问需要权限的接口要添加请求头
    if(config.url=='/v1/auth/wechat'||config.url=='/v1/auth/sendsms'||config.url=='/v1/auth/signin'||config.url=='/v1/auth/signin'||config.url=='/v1/auth/signin-password'||config.url=='/v1/auth/{id}/setpassword'){

    return config;
    }else{
        //添加请求头
        let token ='Bearer '+ uni.getStorageSync('Authorization') || ''
        if (token) {
            config.headers.Authorization = token
        }
    }
    return config;
},
error => {
    // console.log(error);
    return Promise.reject(error);
}

);
// 响应拦截器
service.interceptors.response.use(res => {
    if (res.status === 200||res.code===200) {
    return res.data
} else {
	console.log(res.data)
    return Promise.reject(res.data.msg);
}
}, error => {
if (error.res.code) {
    switch (error.res.code) {
        case 401:
            break;
        default:
            break;
    }
}
return Promise.reject(error)

})

axios.defaults.adapter  = function(config) {

return new Promise((resolve, reject) => {
    var settle = require('axios/lib/core/settle');
    var buildURL = require('axios/lib/helpers/buildURL');
    uni.request({
            method: config.method.toUpperCase(),
        url: config.baseURL + buildURL(config.url, config.params, config.paramsSerializer),
        header: config.headers,
        data: config.data,
        dataType: config.dataType,
        responseType: config.responseType,
        sslVerify: config.sslVerify,
        complete: function complete(response) {
            // console.log('1111111',response);
            response = {
                data: response.data,
                code: response.statusCode,
                msg: response.msg,
                header: response.header,
                config: config
            };
            settle(resolve, reject, response);
        },fail(err){
			console.log(err)
		}
    })
})

}

export default service
