<template>
  <header class="bg-[#A3C7D6] shadow-md py-4 relative">
    <div class="container mx-auto flex justify-between items-center px-4 sm:px-6 relative z-50">
      <!-- Mobiele menu knop -->
      <button @click="toggleMenu" class="sm:hidden text-gray-800 focus:outline-none z-50">
        <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
        <svg v-if="isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <!-- Titel links op desktop, midden op mobiel -->
      <router-link :to="`/`" class="text-xl sm:text-2xl font-bold text-gray-800 sm:order-1 sm:mr-auto">YourPillows</router-link>

      <!-- Navigatie in het midden op desktop, verborgen op mobiel -->
      <nav class="hidden sm:flex space-x-6 text-lg sm:order-2">
        <router-link to="/Shop" class="text-gray-800 hover:text-gray-900 transition duration-300 py-2">Shop</router-link>
        <a href="#" class="text-gray-800 hover:text-gray-900 transition duration-300 py-2">Contact</a>
        <a href="#" class="text-gray-800 hover:text-gray-900 transition duration-300 py-2">Over ons</a>
        <router-link to="/registreren" class="text-gray-800 hover:text-gray-900 transition duration-300 py-2">Registreren</router-link>
      </nav>

      <!-- Winkelwagen uiterst rechts -->
      <div class="flex items-center space-x-10 sm:order-3 ml-10"> <!-- Added margin-left here -->
        <button class="text-gray-800 hover:text-gray-900 transition duration-300">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobiel menu -->
    <nav v-show="isMenuOpen" class="fixed inset-0 bg-[#A3C7D6] flex flex-col items-center justify-center space-y-6 text-center z-40 transition-all duration-300">
      <ul class="space-y-6 text-lg">
        <li><router-link @click="toggleMenu" to="/Shop" class="block text-gray-800 hover:text-gray-900 transition duration-300 py-2">Shop</router-link></li>
        <li><a @click="toggleMenu" href="#" class="block text-gray-800 hover:text-gray-900 transition duration-300 py-2">Contact</a></li>
        <li><a @click="toggleMenu" href="#" class="block text-gray-800 hover:text-gray-900 transition duration-300 py-2">Over ons</a></li>
        <li><router-link @click="toggleMenu" to="/registreren" class="block text-gray-800 hover:text-gray-900 transition duration-300 py-2">Registreren</router-link></li>
      </ul>
    </nav>
  </header>
</template>


<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>
