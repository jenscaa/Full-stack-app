import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/kontaktskjema',
      name: 'kontaktskjema',
      component: () => import('../views/KontaktSkjema.vue')
    },
    {
      path: '/kalkulator',
      name: 'kalkulator',
      component: () => import('../views/Calculator.vue')
    }
  ]
})

export default router
