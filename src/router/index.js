import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from '../view/home.vue'



Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/home',
      component: home
     
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
