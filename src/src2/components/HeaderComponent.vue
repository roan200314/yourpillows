<template>
  <header class="bg-[#A3C7D6] shadow-md py-4 relative">
    <div class="container mx-auto flex justify-between items-center px-4 sm:px-6 relative z-50">
      <router-link :to="`/`" class="text-xl sm:text-2xl font-bold text-gray-800">YourPillows</router-link>

      <!-- Menu-knop voor mobiel en tablet (tot 1024px) -->
      <button @click="toggleMenu" class="sm:hidden md:block text-gray-800 focus:outline-none z-50 relative">
        <!-- Hamburger iconen, alleen zichtbaar als het menu gesloten is -->
        <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>

        <!-- Cross icon, alleen zichtbaar als het menu open is -->
        <svg v-if="isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    <!-- Navigatie die het hele scherm bedekt (mobiel) -->
    <nav v-show="isMenuOpen" class="fixed inset-0 bg-[#A3C7D6] flex flex-col items-center justify-center space-y-6 text-center z-40 transition-all duration-300">
      <ul class="space-y-6 text-lg">
        <li><router-link @click="toggleMenu" :to="`/Shop`" class="block text-gray-800 hover:text-gray-900 transition duration-300 py-2">Shop</router-link></li>
        <li><a @click="toggleMenu" href="#" class="block text-gray-800 hover:text-gray-900 transition duration-300 py-2">Contact</a></li>
        <li><a @click="toggleMenu" href="#" class="block text-gray-800 hover:text-gray-900 transition duration-300 py-2">Over ons</a></li>
        <li><router-link @click="toggleMenu" :to="`/registreren`" class="block text-gray-800 hover:text-gray-900 transition duration-300 py-2">Registreren</router-link></li>
      </ul>
    </nav>

    <!-- Navigatie voor desktop (vanaf 1024px en breder) -->
    <nav class="hidden sm:flex justify-center space-x-6 text-lg z-30">
      <router-link to="/Shop" class="text-gray-800 hover:text-gray-900 transition duration-300 py-2">Shop</router-link>
      <a href="#" class="text-gray-800 hover:text-gray-900 transition duration-300 py-2">Contact</a>
      <a href="#" class="text-gray-800 hover:text-gray-900 transition duration-300 py-2">Over ons</a>
      <router-link to="/registreren" class="text-gray-800 hover:text-gray-900 transition duration-300 py-2">Registreren</router-link>
    </nav>
  </header>
</template>

<style scoped>
/* Zorg ervoor dat de container van de header een hogere z-index heeft dan de menu */
.container {
  position: relative;
  z-index: 50; /* Zorg ervoor dat de inhoud van de header boven de navigatie verschijnt */
}

/* De navigatie zelf heeft een lagere z-index */
nav {
  z-index: 40;
}

/* Verberg de mobiele navigatie voor schermen breder dan 1024px */
@media (min-width: 1024px) {
  nav.v-show {
    display: none;
  }
  .sm\:hidden {
    display: none; /* Verbergt de hamburgerknop op grotere schermen */
  }

  .sm\:flex {
    display: flex; /* Zorg ervoor dat de normale navbar zichtbaar is op grotere schermen */
    justify-content: center; /* Centraal uitlijnen */
    gap: 2rem; /* Ruimte tussen de items */
  }

  .sm\:flex a,
  .sm\:flex router-link {
    padding: 0.5rem 1rem; /* Padding voor de links */
  }
}

/* Verberg de desktop navigatie voor schermen kleiner dan 1024px */
@media (max-width: 1024px) {
  nav.hidden {
    display: none; /* Verbergt de normale desktop navbar op kleinere schermen */
  }
}

/* Zorg ervoor dat de hamburgerknop zichtbaar is tussen 640px en 1024px */
@media (min-width: 640px) and (max-width: 1024px) {
  .sm\:hidden {
    display: block; /* Zorg ervoor dat de hamburgerknop zichtbaar is tussen 640px en 1024px */
  }

  nav.v-show {
    display: none; /* Verbergt de desktop nav op deze grootte */
  }
}

</style>

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
