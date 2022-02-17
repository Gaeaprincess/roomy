import Vue from 'vue'
import App from './App'
import {myRequest} from './util/api.js'
// Api函数polyfill（目前为实验版本，如不需要，可删除！）';
import Polyfill from './polyfill/polyfill';
Polyfill.init();

import request from './util/request.js';
Vue.prototype.$https = request;


// 全局mixins，用于实现setData等功能';
import Mixin from './polyfill/mixins';
Vue.mixin(Mixin);
Vue.prototype.$myRequest=myRequest
Vue.config.productionTip = false
import './uni.scss'
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
