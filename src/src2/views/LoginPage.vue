<template>
  <div class="min-h-screen bg-[#FAF3E8] font-sans flex items-center justify-center px-4">
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      <h2 class="text-3xl font-semibold text-gray-800 text-center">Inloggen</h2>
      <p class="text-gray-600 text-center mt-2">Log in om verder te gaan</p>

      <form @submit.prevent="login" class="mt-6">
        <div class="mb-4">
          <label class="block text-gray-700">E-mailadres</label>
          <input v-model="email" type="email" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#D4A373]" required />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700">Wachtwoord</label>
          <input v-model="password" type="password" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#D4A373]" required />
        </div>

        <p v-if="errorMessage" class="text-red-600 text-center mb-4">{{ errorMessage }}</p>

        <button type="submit" class="w-full bg-[#D4A373] text-white py-2 rounded-lg hover:bg-[#B88657] transition duration-300">
          Inloggen
        </button>
      </form>

      <p class="text-center text-gray-600 mt-4">
        Nog geen account? <router-link to="/Registreren" class="text-[#D4A373] font-semibold">Registreer</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { useLogin } from '../composables/UseLogin';

const { email, password, errorMessage, login } = useLogin();
</script>

<style scoped>
/* Add any extra styling if needed */
</style>
