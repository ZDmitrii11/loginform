import Vue from 'vue'
import App from './App.vue'
import router from './router/routers.js'
import store from '../src/store'
import Paginate from 'vuejs-paginate'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


Vue.config.productionTip = false
Vue.component('paginate', Paginate)


new Vue({

  router,
  store,

  render: h => h(App),
}).$mount('#app')
