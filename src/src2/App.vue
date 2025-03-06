<template>
  <div id="app" class="min-h-screen bg-gray-100">
    <HeaderComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import {useCartStore} from './stores/cart';

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
  },
  mounted() {
    const cartStore = useCartStore();  // Initialize the cart store
    cartStore.loadCart();  // Call loadCart to load the cart from localStorage
  }
};
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
