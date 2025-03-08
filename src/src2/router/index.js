import { createRouter, createWebHistory } from 'vue-router';
import HomePageComponent from '../views/PillowHomepage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import LoginPage from "../views/LoginPage.vue";
import ShopPage from "../views/ShopPage.vue"
import ProductPage from "../views/ProductPage.vue";
import CartPage from "../views/CartPage.vue";



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
  {
    path: '/Product/:id',
    name: 'Product',
    component: ProductPage
  },
  {
    path: '/Checkout',
    name: 'Checkout',
    component: CartPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;