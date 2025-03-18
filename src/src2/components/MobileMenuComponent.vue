<template>
  <nav v-show="isMenuOpen" class="fixed inset-0 bg-[#A3C7D6] flex flex-col items-center justify-center space-y-6 text-center z-40 transition-all duration-300">
    <ul class="space-y-6 text-lg">
      <li><router-link @click="$emit('closeMenu')" to="/Shop" class="block text-gray-800 hover:text-gray-900 transition duration-300 py-2">Shop</router-link></li>
      <li><a @click="$emit('closeMenu')" href="#" class="block text-gray-800 hover:text-gray-900 transition duration-300 py-2">Over ons</a></li>
      <li><a @click="$emit('closeMenu')" href="#" class="block text-gray-800 hover:text-gray-900 transition duration-300 py-2">Contact</a></li>
      <li><router-link @click="$emit('closeMenu')" to="/registreren" class="block text-gray-800 hover:text-gray-900 transition duration-300 py-2">Registreren</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MobileMenu',
  props: {
    isMenuOpen: Boolean
  }
};
</script>
