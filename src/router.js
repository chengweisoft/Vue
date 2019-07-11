import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/home.vue'
import Accout from './views/system/account.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
    name: 'home',
    component: Home
},
    {
      path: '/',
      name: 'account',
      component: Accout
    }
  ]
})
