import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import apolloProvider from '../plugins/apollo'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  // apolloProvider,
  router,
  store,
  template: '<App/>',
  components: { App }
})
