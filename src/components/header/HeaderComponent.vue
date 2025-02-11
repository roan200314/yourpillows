<template>
    <header class="bg-white shadow-md py-4">
      <div class="container mx-auto flex justify-between items-center px-6">
        <router-link :to="`/`" class="text-2xl font-bold text-gray-800">YourPillows</router-link>
        <nav>
          <ul class="flex space-x-6">
            <router-link :to="`/Shop`"   class="text-gray-600 hover:text-gray-900 transition duration-300">Shop</router-link>
            <li><a href="#contact" class="text-gray-600 hover:text-gray-900 transition duration-300">Contact</a></li>
            <li><a href="#about" class="text-gray-600 hover:text-gray-900 transition duration-300">Over ons</a></li>
            <router-link :to="`/registreren`"  class="text-gray-600 hover:text-gray-900 transition duration-300">Registreren</router-link>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: "HeaderComponent"
  };
  </script>
  
  <style>
  nav ul {
    list-style: none;
  }
  </style>
  