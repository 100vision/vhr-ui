// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//注意：命名规范!!，引入router的名字必须是router,否则
// 会报错vue.esm.js?// efeb:628 [Vue warn]: Error in render: "TypeError: Cannot read property 'matched' of undefined"
import router from './routers'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
