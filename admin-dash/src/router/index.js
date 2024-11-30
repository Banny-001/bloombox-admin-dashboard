import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path:'/login',
      name:'login',
      component: ()=>import ('@/views/Auth/login.vue')
    },
    {
      path:'/register',
      name:'register',
      component:()=>import('@/views/Auth/register.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/products/products.vue'),
    },
    {
      path: '/create',
      name: 'CreateProduct',
      component: () => import('../views/products/createproducts.vue'),
    },
    {
      path: '/edit',
      name: 'editProduct',
      component: () => import('../views/products/editproducts.vue'),
      props: true,
    },
    {
      path: '/show',
      name: 'showProduct',
      component: () => import('../views/products/showproducts.vue'),
      props: true,
    },
    {
      path: '/florists',
      name: 'florists',
      component: () => import('../views/florists/florists.vue'),
    },
    {
      path: '/florists/create',
      name: 'create',
      component: () => import('../views/florists/create.vue'),
    },
    {
      path:'/florists/edit/id',
      name:'edit',
      component:()=>import('@/views/florists/edit.vue')
    }
  ],
})

export default router
