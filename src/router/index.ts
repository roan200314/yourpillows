import { createRouter, createWebHistory } from 'vue-router';
import HomePageComponent from '@/components/PillowHomepage.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePageComponent
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;