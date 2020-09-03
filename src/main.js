// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import CardBox from './components/CardBox'
import InputSearch from './components/InputSearch'
import ActionButton from './components/ActionButton'
import Modal from './components/Modal'
import Chips from './components/Chips'
import Snackbar from './components/SnackBar'

Vue.config.productionTip = false

Vue.component('card-box', CardBox)
Vue.component('input-search', InputSearch)
Vue.component('action-button', ActionButton)
Vue.component('modal-win', Modal)
Vue.component('one-chip', Chips)
Vue.component('snackbar', Snackbar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
