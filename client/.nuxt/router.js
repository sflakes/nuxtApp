import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3b86f34f = () => interopDefault(import('..\\pages\\allpost\\index.vue' /* webpackChunkName: "pages/allpost/index" */))
const _d733f15a = () => interopDefault(import('..\\pages\\newsfeed\\index.vue' /* webpackChunkName: "pages/newsfeed/index" */))
const _60f10512 = () => interopDefault(import('..\\pages\\allpost\\_id.vue' /* webpackChunkName: "pages/allpost/_id" */))
const _6e63c27b = () => interopDefault(import('..\\pages\\newsfeed\\_id.vue' /* webpackChunkName: "pages/newsfeed/_id" */))
const _9fa85a38 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/allpost",
    component: _3b86f34f,
    name: "allpost"
  }, {
    path: "/newsfeed",
    component: _d733f15a,
    name: "newsfeed"
  }, {
    path: "/allpost/:id",
    component: _60f10512,
    name: "allpost-id"
  }, {
    path: "/newsfeed/:id",
    component: _6e63c27b,
    name: "newsfeed-id"
  }, {
    path: "/",
    component: _9fa85a38,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
