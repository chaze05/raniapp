import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import 'vue-material-design-icons/styles.css'
import 'vuetify/dist/vuetify.css'
import router from './router'

Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
