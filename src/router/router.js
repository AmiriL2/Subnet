import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Calculator from '../views/calculator.vue'
import Contact from '../views/contact.vue'

const routes = [
   {
      path: '/',
      component: HomePage
   },

   {
      path: '/calculator',
      component: Calculator
   },
   {
      path: '/contact',
      component: Contact
   },
]
const router = createRouter({
   history: createWebHashHistory(),
   routes
})
export default router

