import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import Conversation from '../views/conversation/Conversation.vue';
import UserLogin from '../views/User/UserLogin.vue';
import ConversationPopup from '../components/ConversationPopup.vue';
import Products from '../views/Products/Products.vue';
import SingleChatConversation from '../views/SingleChatConversation/SingleChatConversation.vue';
import SingleProduct from '../views/SingleProduct/SingleProduct.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/conversations',
    name: 'conversations',
    component: Conversation,
  },
  {
    path: '/conversations/conversation',
    name: 'conversation',
    component: SingleChatConversation,
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
  {
    path: '/conversationPopup',
    name: 'popup',
    component: ConversationPopup,
  },
  {
    path: '/product',
    name: 'product',
    component: SingleProduct,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
