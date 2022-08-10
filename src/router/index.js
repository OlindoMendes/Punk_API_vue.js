import Vue from 'vue'
import VueRouter from 'vue-router'
import UserAuth from '@/pages/auth/UserAuth'
import BeerList from '@/pages/beers/BeerList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    component: UserAuth
    
  },
  {
    path: '/beers',
    component: BeerList
    
  },
]

const router = new VueRouter({
  routes
})

export default router
