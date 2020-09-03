import Vue from 'vue'
import Router from 'vue-router'
import MainCard from '@/components/MainCard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainCard',
      component: MainCard
    }
  ]
})
