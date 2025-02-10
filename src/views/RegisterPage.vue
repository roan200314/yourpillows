<template>
    <div class="min-h-screen bg-[#FAF3E8] font-sans flex items-center justify-center px-4">
      <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 class="text-3xl font-semibold text-gray-800 text-center">Registreer</h2>
        <p class="text-gray-600 text-center mt-2">Maak een account aan en ontdek het ultieme slaapcomfort</p>
        
        <form @submit.prevent="register" class="mt-6">
          <div class="mb-4">
            <label class="block text-gray-700">Naam</label>
            <input v-model="name" type="text" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#D4A373]" required />
          </div>
          
          <div class="mb-4">
            <label class="block text-gray-700">E-mailadres</label>
            <input v-model="email" type="email" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#D4A373]" required />
          </div>
          
          <div class="mb-4">
            <label class="block text-gray-700">Wachtwoord</label>
            <input v-model="password" type="password" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#D4A373]" required />
          </div>
          
          <div class="mb-4">
            <label class="block text-gray-700">Bevestig wachtwoord</label>
            <input v-model="confirmPassword" type="password" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#D4A373]" required />
          </div>
          
          <button type="submit" class="w-full bg-[#D4A373] text-white py-2 rounded-lg hover:bg-[#B88657] transition duration-300">
            Registreren
          </button>
        </form>
        
        <p class="text-center text-gray-600 mt-4">
          Heb je al een account? <router-link to="/login" class="text-[#D4A373] font-semibold">Inloggen</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "RegisterPage",
    data() {
      return {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      };
    },
    methods: {
      register() {
        if (this.password !== this.confirmPassword) {
          alert("Wachtwoorden komen niet overeen");
          return;
        }
        alert("Registratie succesvol!");
        // Hier kan een API-aanroep worden toegevoegd om de gebruiker te registreren
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  