import { createRouter, createWebHistory } from 'vue-router';
import HomePageComponent from '@/views/PillowHomepage.vue';
import RegisterPage from '@/views/RegisterPage.vue';
import LoginPage from "@/views/LoginPage.vue";
import ShopPage from "@/views/shopPage.vue"


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePageComponent
  },
  {
    path: '/Registreren',
    name: 'Registreren',
    component: RegisterPage
  },
  {
    path: '/Shop',
    name: 'Shop',
    component: ShopPage
  },
  {
    path: '/Login',
    name: 'Login',
    component: LoginPage
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;