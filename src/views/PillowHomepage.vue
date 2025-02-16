<template>
  <div class="min-h-screen bg-[#E5D9CF] font-sans">
    <main>
      <section class="relative bg-cover bg-center h-96 flex items-center justify-center text-white text-center"
               style="background-image: url('https://source.unsplash.com/1600x900/?bedding');">
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <div class="relative z-10 p-6">
          <h2 class="text-4xl font-semibold drop-shadow-lg">Waarom YourPillows?</h2>
          <p class="mt-2 text-lg">Omdat jij het perfecte kussen verdient. Kies je stof, pas de dikte aan en geniet van luxe comfort – helemaal gepersonaliseerd voor jou.</p>
          <router-link
              v-for="product in products"
              :key="product.id"
              :to="`/product/${product.id}`"
              class="mt-4 bg-[#D4A373] text-white px-6 py-3 rounded-lg hover:bg-[#B88657] transition duration-300">
            Personaliseer je kussen
            </router-link>
        </div>
      </section>

      <section class="py-12 bg-[#FAF3E8] text-center">
        <h3 class="text-3xl font-semibold text-gray-800">Best Sellers</h3>
        <p class="text-gray-600 mt-2">Vind het perfecte kussen dat bij jou past</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-4 md:px-12">
          <router-link
              v-for="product in products"
              :key="product.id"
              :to="`/product/${product.id=4}`"
              class="bg-gray-50 p-6 rounded-lg shadow-md hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">

            <!-- ✅ Fetch images dynamically from backend -->
            <img :src="getImageUrl(product.imageUrl)" class="w-full rounded-lg" />

            <h4 class="text-xl font-semibold text-gray-700 mt-4">{{ product.name }}</h4>
            <p class="text-gray-600">{{ product.description }}</p>
            <p class="mt-4 text-lg font-bold text-gray-800">{{ product.price }}</p>
            <button class="mt-4 bg-[#D4A373] text-white px-6 py-2 rounded-lg hover:bg-[#B88657] transition duration-300">
              Bekijk product
            </button>
          </router-link>
        </div>
      </section>

      <section class="py-12 bg-[#A3C7D6] text-center text-white">
        <h3 class="text-3xl font-semibold">Waarom YourPillows?</h3>
        <p class="mt-2">"Jouw kussen, jouw comfort. Slaap op maat met YourPillows."</p>
        <div class="flex flex-wrap justify-center gap-6 mt-6">
          <div class="max-w-sm text-center">
            <p class="text-lg">✔ Pas de vulling zelf aan</p>
            <p class="text-lg">✔ Zijde, bamboe of satijn voor luxe comfort</p>
            <p class="text-lg">✔ Vorm zich naar jouw lichaam</p>
            <p class="text-lg">✔ Extra foam voor persoonlijk comfort</p>
            <p class="text-lg">✔ Milieuvriendelijk en duurzaam geproduceerd</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { useProducts } from '@/composables/UseProducts';

const { products } = useProducts();

// ✅ Function to dynamically get image URL
const getImageUrl = (imagePath) => {
  if (!imagePath) return '../assets/images/default-placeholder.png';
  return `${process.env.VUE_APP_API_BASE_URL}${imagePath}`;


};
</script>

<style scoped>
</style>
