import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'
import home from '../components/home'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/home',
      component: home
    }
  ]
})

router.beforeEach((to, from, next) => {
  // console.log(to)
  if (to.path != '/login') {
    if (!sessionStorage.getItem('user')) {
      router.replace('/login')
    }
  }
  next()
})

export default router

