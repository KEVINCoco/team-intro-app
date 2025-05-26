import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/teamIntro/index.vue')
  },
  {
    path: '/member/:name',
    name: 'memberDetail',
    component: () => import('@/views/memberDetail/index.vue'),
    props: true
  },
  {
    path: '/device',
    name: 'devicePro',
    component: () => import('@/views/devicePro/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router