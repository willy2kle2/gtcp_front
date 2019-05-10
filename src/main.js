// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import axios from 'axios';
import acl from './acl'
import VueAxios from 'vue-axios';
import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faUserShield } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { faUserCog } from '@fortawesome/free-solid-svg-icons'
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons'
import { faPrint } from '@fortawesome/free-solid-svg-icons'
import VueSweetalert2 from 'vue-sweetalert2';
import VueRouterBackButton from 'vue-router-back-button'

const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674'
}


Vue.use(VueRouterBackButton, { router })
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faUserSecret, faUserShield, faAddressBook, faUserCog, faPiggyBank, faPrint)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue);

Vue.use(VueAxios, axios);
Vue.use(VueSweetalert2, options);
Vue.use(require('vue-moment'));


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css' 


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
   acl,
  store,
  components: { App, },

  template: '<App/>'
})
