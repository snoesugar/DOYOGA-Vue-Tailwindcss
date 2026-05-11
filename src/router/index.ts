import { createRouter, createWebHistory } from 'vue-router'
// 1. 匯入你的 Layout 元件
import Layout from '../layouts/Layout.vue'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '', // 這就代表 '/'
          component: Home,
        },
        {
          path: '/course',
          component: () => import('../views/Course.vue'),
        },
        {
          path: '/surroundings',
          component: () => import('../views/Surroundings.vue'),
        },
        {
          path: '/curriculum',
          component: () => import('../views/Curriculum.vue'),
        },
        {
          path: '/reservation',
          component: () => import('../views/Reservation.vue'),
        },
        {
          path: '/contact',
          component: () => import('../views/Contact.vue'),
        },
        {
          path: '/reservation-1',
          component: () => import('../views/Reservation-1.vue'),
        },
      ],
    },
  ],
})

export default router
