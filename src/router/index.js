import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Dashboard/Dashboard.vue'
import SignIn from '../components/SignIn/SignIn.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: SignIn },
  ]
})

export default router