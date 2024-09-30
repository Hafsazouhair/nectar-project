import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/components/Main.vue';
import AboutUs from '@/views/aboutUs.vue';

import Dishes from '@/views/Dishes.vue';
import Login from '@/views/auth/Login.vue';
import Register from '@/views/auth/Register.vue';
import Blog from '@/views/Blog.vue';
import Contactus from '@/views/Contactus.vue';
import Services from '@/views/Services.vue';
import Gallery from '@/views/Gallery.vue';
import Shop from '@/views/Shop.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: Main,
  },
  {
    path: '/aboutus',
    name: 'aboutUs',
    component: AboutUs,
  },
  {
    path: '/dishes',
    name: 'dishes',
    component: Dishes,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },

  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/blog',
    name: 'blog',
    component:Blog,
  },
  {
    path: '/contact',
    name: 'contact',
    component:Contactus,
  }, 
  {
    path: '/services',
    name: 'services',
    component:Services,
  }, 
  {
    path: '/gallery',
    name: 'gallery',
    component:Gallery,
  },
  {
    path: '/shop',
    name: 'shop',
    component:Shop,
  },
  // Add more routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;