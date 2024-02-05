import { createRouter, createWebHistory } from 'vue-router'
import calculator from '../components/Calculator.vue'
import kontaktskjema from '../views/KontaktSkjema.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'kalkulator',
      component: calculator
    },
    {
      path: '/kontaktskjema',
      name: 'kontakskjema',
      component: kontaktskjema
    }
  ]
})

export default router
