import Vue from 'vue'
import App from './App'
// Api函数polyfill（目前为实验版本，如不需要，可删除！）';
import Polyfill from './polyfill/polyfill';
Polyfill.init();
// 对原生的uni.request进行了封装 发起请求 用 this.$http()
import request from './util/request.js';
Vue.prototype.$https = request;


// 全局mixins，用于实现setData等功能';
import Mixin from './polyfill/mixins';
Vue.mixin(Mixin);

Vue.config.productionTip = false
// 引入一些全局变量、公用的样式
import './uni.scss'
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
