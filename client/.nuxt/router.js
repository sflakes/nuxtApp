import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _342e42fe = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _3b86f34f = () => interopDefault(import('..\\pages\\allpost\\index.vue' /* webpackChunkName: "pages/allpost/index" */))
const _1d74d44a = () => interopDefault(import('..\\pages\\Login.vue' /* webpackChunkName: "pages/Login" */))
const _d733f15a = () => interopDefault(import('..\\pages\\newsfeed\\index.vue' /* webpackChunkName: "pages/newsfeed/index" */))
const _7859cf48 = () => interopDefault(import('..\\pages\\Postdata.vue' /* webpackChunkName: "pages/Postdata" */))
const _61ea1dbe = () => interopDefault(import('..\\pages\\Register.vue' /* webpackChunkName: "pages/Register" */))
const _5122e5ae = () => interopDefault(import('..\\pages\\admin\\_id.vue' /* webpackChunkName: "pages/admin/_id" */))
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
    path: "/admin",
    component: _342e42fe,
    name: "admin"
  }, {
    path: "/allpost",
    component: _3b86f34f,
    name: "allpost"
  }, {
    path: "/Login",
    component: _1d74d44a,
    name: "Login"
  }, {
    path: "/newsfeed",
    component: _d733f15a,
    name: "newsfeed"
  }, {
    path: "/Postdata",
    component: _7859cf48,
    name: "Postdata"
  }, {
    path: "/Register",
    component: _61ea1dbe,
    name: "Register"
  }, {
    path: "/admin/:id",
    component: _5122e5ae,
    name: "admin-id"
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
