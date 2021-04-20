import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      layout: 'mainLayout'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about.vue'),
    meta: {
      layout: 'mainLayout'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contactUs.vue'),
    meta: {
      layout: 'mainLayout'
    }
  },
  {
    path: '/blog/post',
    name: 'post',
    component: () => import('../views/post.vue'),
    meta: {
      layout: 'mainLayout'
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/blog.vue'),
    meta: {
      layout: 'mainLayout'
    }
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/portfolio.vue'),
    meta: {
      layout: 'mainLayout'
    }
  },
  {
    path: '/portfolio/single',
    name: 'single',
    component: () => import('../views/single.vue'),
    meta: {
      layout: 'mainLayout'
    }
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/services.vue'),
    meta: {
      layout: 'mainLayout'
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
