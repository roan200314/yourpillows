<template>
  <header
      :class="{ 'fixed top-0 left-0 w-full z-50': isSticky, 'shadow-md': isSticky }"
      class="bg-[#A3C7D6] py-4 relative transition-all duration-300"
  >
    <div class="container mx-auto flex justify-between items-center px-4 sm:px-6 relative">
      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="sm:hidden text-gray-800 focus:outline-none z-50">
        <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Title -->
      <router-link to="/Homepagina" class="text-xl sm:text-2xl font-bold text-gray-800 sm:order-1 sm:mr-auto">YourPillows</router-link>

      <!-- Navigation -->
      <NavigationMenu />

      <!-- Cart Icon -->
      <div class="flex items-center space-x-10 sm:order-3 ml-10">
        <button @click="toggleCart" class="text-gray-800 hover:text-gray-900 transition duration-300">
          <svg class="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0
                0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span v-if="cart.length > 0" class="ml-2 text-gray-800 text-lg">{{ cart.length }}</span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Component -->
    <MobileMenu :isMenuOpen="isMenuOpen" @closeMenu="toggleMenu" />

    <!-- Cart Modal Component -->
    <CartModal :cartVisible="cartVisible" @closeCart="toggleCart" />
  </header>
</template>

<script>
import { useCartStore } from '../stores/cart';
import NavigationMenu from '../components/NavigationComponent.vue';
import MobileMenu from '../components/MobileMenuComponent.vue';
import CartModal from '../components/CartModalComponent.vue';

export default {
  name: 'HeaderComponent',
  components: {
    NavigationMenu,
    MobileMenu,
    CartModal
  },
  data() {
    return {
      isMenuOpen: false,
      lastScrollTop: 0,
      isSticky: false,
      cartVisible: false
    };
  },
  computed: {
    cart() {
      const cartStore = useCartStore();
      return cartStore.cart;
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleCart() {
      this.cartVisible = !this.cartVisible;
    },
    handleScroll() {
      const currentScroll = window.scrollY;
      if (currentScroll > this.lastScrollTop && currentScroll > 100) {
        this.isSticky = false;
      } else if (currentScroll < this.lastScrollTop) {
        this.isSticky = true;
      }
      this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    const cartStore = useCartStore();
    cartStore.loadCart();
  }
};
</script>
