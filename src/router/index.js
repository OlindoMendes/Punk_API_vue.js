import Vue from 'vue'
import VueRouter from 'vue-router'
import UserAuth from '@/pages/auth/UserAuth'
import BeerList from '@/pages/beers/BeerList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: UserAuth
    
  },
  {
    path: '/beers',
    component: BeerList
    
  },
  {
    path: '/beers/:id/edit',
    name: 'editbeer',
    component: () => import('@/pages/beers/EditBeer'),
    params: true
},
]

const router = new VueRouter({
  routes
})

export default router
