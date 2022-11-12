import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login.vue'
import signUp from '../views/signUp.vue'
import profile from '../views/profile.vue'
import post  from '../views/post.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      component: signUp
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    }, 

    {
      path: '/login',
      name: 'login',
      component: login 
     }, 

     { path: '/post',
     name: 'post',
     component: post
    }, 
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
  ]
})

export default router
