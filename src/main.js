// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import './lib/jquery-vender.js'

// user plugin
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'select2'
import 'select2/dist/css/select2.min.css'
import 'ztree'
import 'ztree/css/metroStyle/metroStyle.css'
import 'font-awesome/css/font-awesome.css'
import 'admin-lte'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'
import 'bootstrap3-dialog'
import 'bootstrap3-dialog/dist/css/bootstrap-dialog.min.css'
import 'parsleyjs'
import 'parsleyjs/dist/i18n/zh_cn.js'

import * as common from './lib/common.js'
import './assets/css/ui.css'

Vue.config.productionTip = false

// axios
let axiosConfig = {
  timeout: 5000 // request timeout
}

// if (process.env.NODE_ENV !== 'production') {
//   axiosConfig.baseURL = process.env.BASE_API
// }

const instance = axios.create(axiosConfig)
// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  let token = common.getStoreData('token')
  if (typeof (token) === 'string') {
    config.headers['authorization'] = token
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})
Vue.prototype.$http = instance

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
