import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import Conversation from '../views/conversation/Conversation.vue';
import Products from '../views/Products/Products.vue';
import UserLogin from '../views/User/UserLogin.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/conversation',
    name: 'conversation',
    component: Conversation,
  },
  {
    path: '/products',
    name: 'products',
    component: Products,
  },
  {
    path: '/login',
    name: 'login',
    component: UserLogin,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
