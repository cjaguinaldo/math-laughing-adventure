import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/views/home/index.vue")
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: () => import("@/views/quiz/index.vue")
    },
  ]
})

export default router
