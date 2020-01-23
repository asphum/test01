import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _72888e97 = () => interopDefault(import('..\\pages\\photos\\index.vue' /* webpackChunkName: "pages_photos_index" */))
const _7174dbc0 = () => interopDefault(import('..\\pages\\photos\\_category\\index.vue' /* webpackChunkName: "pages_photos__category_index" */))
const _56d90efa = () => interopDefault(import('..\\pages\\photos\\_category\\_id\\index.vue' /* webpackChunkName: "pages_photos__category__id_index" */))
const _9010e990 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/photos",
    component: _72888e97,
    name: "photos"
  }, {
    path: "/photos/:category",
    component: _7174dbc0,
    name: "photos-category"
  }, {
    path: "/photos/:category/:id",
    component: _56d90efa,
    name: "photos-category-id"
  }, {
    path: "/",
    component: _9010e990,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
