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
  },
  {
    path: '/device/:id',
    name: 'deviceDetail',
    component: () => import('@/views/devicePro/detail.vue'),
    props: true
  },
  {
    path: '/department',
    name: 'department',
    component: () => import('@/views/department/index.vue')
  },
  {
    path: '/department/situation',
    name: 'departmentSituation',
    component: () => import('@/views/department/situation.vue')
  },
  {
    path: '/department/special',
    name: 'departmentSpecial',
    component: () => import('@/views/department/special.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router