import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import starter from '@/components/starter'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '*', component: resolve => require(['@/components/err404'], resolve) },
    { path: '/',                redirect: '/login' },
    { path: '/error404',        component: resolve => require(['@/components/err404'], resolve) },
    { path: '/error401',        component: resolve => require(['@/components/err401'], resolve) },
    { path: '/error',           component: resolve => require(['@/components/errpage'], resolve) },
    { path: '/login',           component: resolve => require(['@/views/login'], resolve) }
  ]
})
