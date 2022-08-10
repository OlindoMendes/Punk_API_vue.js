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
