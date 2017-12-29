// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery

let bootstrap = require('bootstrap')

import 'bootstrap/dist/css/bootstrap.css'
Vue.config.productionTip = false
// directives

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
