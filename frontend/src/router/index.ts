import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Reservations from '../views/Reservations.vue'
import Inventory from '../views/Inventory.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: 'reservations'
  },
  {
    path: '/reservations',
    name: 'Reservations',
    component: Reservations
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: Inventory
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
