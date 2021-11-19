import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ae557040 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _1602fe24 = () => interopDefault(import('..\\pages\\allpost\\index.vue' /* webpackChunkName: "pages/allpost/index" */))
const _04ed695c = () => interopDefault(import('..\\pages\\Login.vue' /* webpackChunkName: "pages/Login" */))
const _09e02d94 = () => interopDefault(import('..\\pages\\newsfeed\\index.vue' /* webpackChunkName: "pages/newsfeed/index" */))
const _61107fb2 = () => interopDefault(import('..\\pages\\Postdata.vue' /* webpackChunkName: "pages/Postdata" */))
const _2628e200 = () => interopDefault(import('..\\pages\\Register.vue' /* webpackChunkName: "pages/Register" */))
const _42587b70 = () => interopDefault(import('..\\pages\\admin\\_id.vue' /* webpackChunkName: "pages/admin/_id" */))
const _db183254 = () => interopDefault(import('..\\pages\\allpost\\_id.vue' /* webpackChunkName: "pages/allpost/_id" */))
const _090484fc = () => interopDefault(import('..\\pages\\newsfeed\\_id.vue' /* webpackChunkName: "pages/newsfeed/_id" */))
const _7858b336 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _ae557040,
    name: "admin"
  }, {
    path: "/allpost",
    component: _1602fe24,
    name: "allpost"
  }, {
    path: "/Login",
    component: _04ed695c,
    name: "Login"
  }, {
    path: "/newsfeed",
    component: _09e02d94,
    name: "newsfeed"
  }, {
    path: "/Postdata",
    component: _61107fb2,
    name: "Postdata"
  }, {
    path: "/Register",
    component: _2628e200,
    name: "Register"
  }, {
    path: "/admin/:id",
    component: _42587b70,
    name: "admin-id"
  }, {
    path: "/allpost/:id",
    component: _db183254,
    name: "allpost-id"
  }, {
    path: "/newsfeed/:id",
    component: _090484fc,
    name: "newsfeed-id"
  }, {
    path: "/",
    component: _7858b336,
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
