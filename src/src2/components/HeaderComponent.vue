<template>
  <header
      v-bind:class="{'fixed top-0 left-0 w-full z-50': isSticky, 'shadow-md': isSticky}"
      class="bg-[#A3C7D6] py-4 relative transition-all duration-300"
  >
    <div class="container mx-auto flex justify-between items-center px-4 sm:px-6 relative">
      <!-- Mobile menu button -->
      <button @click="toggleMenu" class="sm:hidden text-gray-800 focus:outline-none z-50">
        <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
        <svg v-if="isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <!-- Title -->
      <router-link :to="`/`" class="text-xl sm:text-2xl font-bold text-gray-800 sm:order-1 sm:mr-auto">YourPillows</router-link>

      <!-- Navigation -->
      <nav class="hidden sm:flex space-x-6 text-lg sm:order-2">
        <router-link to="/Shop" class="text-gray-800 hover:text-gray-900 transition duration-300 py-2">Shop</router-link>
        <a href="#" class="text-gray-800 hover:text-gray-900 transition duration-300 py-2">Contact</a>
        <a href="#" class="text-gray-800 hover:text-gray-900 transition duration-300 py-2">Over ons</a>
        <router-link to="/registreren" class="text-gray-800 hover:text-gray-900 transition duration-300 py-2">Registreren</router-link>
      </nav>

      <!-- Shopping cart -->
      <div class="flex items-center space-x-10 sm:order-3 ml-10">
        <button @click="toggleCart" class="text-gray-800 hover:text-gray-900 transition duration-300">
          <svg class="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          <span v-if="cart.length > 0" class="ml-2 text-gray-800 text-lg">{{ cart.length }}</span> <!-- Display quantity -->
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <nav v-show="isMenuOpen" class="fixed inset-0 bg-[#A3C7D6] flex flex-col items-center justify-center space-y-6 text-center z-40 transition-all duration-300">
      <ul class="space-y-6 text-lg">
        <li><router-link @click="toggleMenu" to="/Shop" class="block text-gray-800 hover:text-gray-900 transition duration-300 py-2">Shop</router-link></li>
        <li><a @click="toggleMenu" href="#" class="block text-gray-800 hover:text-gray-900 transition duration-300 py-2">Contact</a></li>
        <li><a @click="toggleMenu" href="#" class="block text-gray-800 hover:text-gray-900 transition duration-300 py-2">Over ons</a></li>
        <li><router-link @click="toggleMenu" to="/registreren" class="block text-gray-800 hover:text-gray-900 transition duration-300 py-2">Registreren</router-link></li>
      </ul>
    </nav>
  </header>

  <!-- Cart Modal Pop-up -->
  <div v-if="cartVisible" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
    <div class="bg-white p-6 rounded-lg w-96 max-w-lg">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">Your Cart</h3>

      <div v-if="cart.length === 0" class="mt-4 text-gray-500">Your cart is empty.</div>

      <div v-else>
        <div class="space-y-4">
          <div v-for="(item, index) in cart" :key="index" class="flex justify-between items-center">
            <div class="flex items-center">
              <img :src="item.imageUrl" alt="Product Image" class="w-10 h-10 object-cover rounded-md mr-4">
              <span class="text-gray-800">{{ item.name }} x{{ item.quantity }}</span>
            </div>
            <span class="text-gray-800 font-bold">€{{ (item.price * item.quantity).toFixed(2) }}</span>
            <button @click="removeFromCart(item)" class="text-red-500 hover:text-red-700 text-sm">Remove</button>
          </div>
        </div>

        <div class="mt-4 text-gray-800 font-bold">
          Total: €{{ totalPrice.toFixed(2) }}
        </div>

        <div class="flex space-x-4 mt-4">
          <button @click="toggleCart" class="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">Close</button>
          <button class="w-full bg-[#A3C7D6] text-white px-4 py-2 rounded-lg hover:bg-[#89A5B6]">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "../stores/cart"; // Import the store

export default {
  name: "HeaderComponent",
  data() {
    return {
      isMenuOpen: false,
      lastScrollTop: 0,
      isSticky: false,
      cartVisible: false, // Add state to control cart modal visibility
    };
  },
  computed: {
    // Using Pinia store to get the cart items
    cart() {
      const cartStore = useCartStore();
      return cartStore.cart; // Accessing cart directly from the store
    },
    totalPrice() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleCart() {
      this.cartVisible = !this.cartVisible; // Toggle cart modal visibility
    },
    removeFromCart(item) {
      const cartStore = useCartStore();
      cartStore.removeFromCart(item); // Remove from cart using the store method
    },
    handleScroll() {
      const currentScroll = window.pageYOffset;
      if (currentScroll > this.lastScrollTop && currentScroll > 100) {
        this.isSticky = false;
      } else if (currentScroll < this.lastScrollTop) {
        this.isSticky = true;
      }
      this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
