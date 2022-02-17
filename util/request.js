import Vue from 'vue'
import axios from 'axios'


const service = axios.create({
baseURL:'http://127.0.0.1:3001',
timeout: 6000, // request timeout
crossDomain: true

})

service.interceptors.request.use(config => {

    //添加请求头
    let token = uni.getStorageSync('token') || ''
    if (token) {
        config.headers.Authorization = token
    }
    // console.log('请求拦截成功')
    return config;
},
error => {
    // console.log(error); 
    return Promise.reject(error);
}

);

service.interceptors.response.use(res => {

if (res.data.status == 200) {
    return res.data
} else {
    return Promise.reject(res.data.msg);
}

}, error => {

if (error.response.status) {
    switch (error.response.status) {
        case 401:
            break;
        default:
            break;
    }
}
return Promise.reject(error)

})

axios.defaults.adapter = function(config) {

return new Promise((resolve, reject) => {
    // console.log(config)
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
            // console.log("执行完成：", response)
            response = {
                data: response.data,
                status: response.statusCode,
                errMsg: response.errMsg,
                header: response.header,
                config: config
            };

            settle(resolve, reject, response);
        }
    })
})

}

export default service