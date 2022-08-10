import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import BaseCard from './components/ui/BaseCard'
import BaseButton from './components/ui/BaseButton'
import BaseBadge from './components/ui/BaseBadge'
import BaseSpinner from './components/ui/BaseSpinner'
import BaseDialog from './components/ui/BaseDialog'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { ToastPlugin } from 'bootstrap-vue'
Vue.use(ToastPlugin)

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)



Vue.component('base-card', BaseCard)
Vue.component('base-badge', BaseBadge)
Vue.component('base-button', BaseButton)
Vue.component('base-spinner', BaseSpinner)
Vue.component('base-dialog', BaseDialog)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
