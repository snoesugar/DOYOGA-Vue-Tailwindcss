import { createRouter, createWebHistory } from 'vue-router'
// 1. 匯入你的 Layout 元件
import Layout from '../layouts/Layout.vue'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout, // 設定根路徑使用 Layout
      children: [
        {
          path: '', // 這就代表 '/'
          component: Home,
        },
      ],
    },
  ],
})

export default router
