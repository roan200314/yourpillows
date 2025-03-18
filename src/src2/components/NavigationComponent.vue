<template>
  <nav class="hidden sm:flex space-x-6 text-lg sm:order-2">
    <router-link to="/Shop" class="text-gray-800 hover:text-gray-900 transition duration-300 py-2">Shop</router-link>
    <a href="#" class="text-gray-800 hover:text-gray-900 transition duration-300 py-2">Contact</a>
    <a href="#" class="text-gray-800 hover:text-gray-900 transition duration-300 py-2">Over ons</a>
    <router-link to="/registreren" class="text-gray-800 hover:text-gray-900 transition duration-300 py-2">Registreren</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavigationMenu'
};
</script>
