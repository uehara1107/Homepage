import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/top',
    name: 'Top',
    component: () => import('../views/Top.vue')
  },
  {
    path: '/skill',
    name: 'Skill',
    component: () => import('../views/Skill.vue')
  },
  {
    path: '/body',
    name: 'Body',
    component: () => import('../views/Body.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/Product.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/top',
  routes
})

export default router
