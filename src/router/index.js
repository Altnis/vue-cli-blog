import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import login from '@/components/login'
import register from '@/components/register'
import apply from '@/components/apply'
import back from '@/components/back'
import reset from '@/components/reset'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/register',
      name: 'register',
      component: register
    },{
      path: '/apply',
      name: 'apply',
      component: apply
    },{
      path: '/back',
      name: 'back',
      component: back
    },{
      path: '/reset',
      name: 'reset',
      component: reset
    }
  ]
})
