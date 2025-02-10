import { createRouter, createWebHistory } from 'vue-router';
import HomePageComponent from '@/views/PillowHomepage.vue';
import RegisterPage from '@/views/RegisterPage.vue';


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
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;