<script setup>
import { useProducts } from '../composables/UseProducts';

const { products } = useProducts();

const getImageUrl = (imagePath) => {
  console.log("📸 Original imagePath:", imagePath);
  if (!imagePath) return '../src/uploads/airKussen1.jpeg';

  // Directly return the URL
  const image = `src/uploads${imagePath}`;

  console.log(image);
  return image;
};
</script>

<template>
  <div class="min-h-screen bg-[#E5D9CF] font-sans">
    <main>
      <section class="relative bg-cover bg-center h-64 flex items-center justify-center text-white text-center sm:h-96"
               style="background-image: url('https://source.unsplash.com/1600x900/?bedding');">
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <div class="relative z-10 p-4 sm:p-6">
          <h2 class="text-3xl sm:text-4xl font-semibold drop-shadow-lg">Waarom YourPillows?</h2>
          <p class="mt-2 text-base sm:text-lg">Omdat jij het perfecte kussen verdient. Kies je stof, pas de dikte aan en geniet van luxe comfort.</p>
          <router-link
              to="/product/4"
              class="mt-4 bg-[#D4A373] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-[#B88657] transition duration-300 block w-max mx-auto">
            Personaliseer je kussen
          </router-link>
        </div>
      </section>

      <section class="py-8 sm:py-12 bg-[#FAF3E8] text-center px-4">
        <h3 class="text-2xl sm:text-3xl font-semibold text-gray-800">Best Sellers</h3>
        <p class="text-gray-600 mt-2">Vind het perfecte kussen dat bij jou past</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
          <router-link
              v-for="product in products"
              :key="product.id"
              :to="`/product/${product.id}`"
              class="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">

            <img :src="getImageUrl(product.imageUrl)" class="w-full rounded-lg" />

            <h4 class="text-lg sm:text-xl font-semibold text-gray-700 mt-2 sm:mt-4">{{ product.name }}</h4>
            <p class="text-gray-600 text-sm sm:text-base">{{ product.description }}</p>
            <p class="mt-2 sm:mt-4 text-lg font-bold text-gray-800">{{ product.price }}</p>
            <button class="mt-2 sm:mt-4 bg-[#D4A373] text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-[#B88657] transition duration-300">
              Bekijk product
            </button>
          </router-link>
        </div>
      </section>

      <section class="py-12 bg-[#A3C7D6] px-4 text-white">
        <div class="max-w-3xl mx-auto text-center">
          <h3 class="text-3xl sm:text-4xl font-bold mb-4">Waarom YourPillows?</h3>
          <p class="text-lg sm:text-xl mb-8">Jouw kussen, jouw comfort. Slaap op maat met YourPillows.</p>

          <ul class="text-left max-w-md mx-auto space-y-4">
            <li class="flex items-start">
              <svg class="w-6 h-6 text-white bg-purple-500 rounded-full p-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-base sm:text-lg">Pas de vulling zelf aan</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-white bg-purple-500 rounded-full p-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-base sm:text-lg">Zijde, bamboe of satijn voor luxe comfort</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-white bg-purple-500 rounded-full p-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-base sm:text-lg">Vormt zich naar jouw lichaam</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-white bg-purple-500 rounded-full p-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-base sm:text-lg">Extra foam voor persoonlijk comfort</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-white bg-purple-500 rounded-full p-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-base sm:text-lg">Milieuvriendelijk en duurzaam geproduceerd</span>
            </li>
          </ul>
        </div>
      </section>

    </main>
  </div>
</template>




<style scoped>
</style>
