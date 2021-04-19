import Vue from 'vue'
import App from './App.vue'
import router from './router/routers.js'
import store from '../src/store'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
