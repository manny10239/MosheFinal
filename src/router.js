import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Profile from './views/Profile.vue'
import AutoComplete from './views/AutoComplete.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/autoComplete',
      name: 'autoComplete',
      component: AutoComplete
    }
  ]
})