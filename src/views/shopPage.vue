<template>
  <div class="min-h-screen bg-[#FAF3E8] font-sans">
    <main>
      <section class="py-12 bg-[#FAF3E8] text-center">
        <h3 class="text-3xl font-semibold text-gray-800">Onze Collectie</h3>
        <p class="text-gray-600 mt-2">Vind het perfecte kussen dat bij jou past</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-4 md:px-12">
          <router-link
              v-for="product in products"
              :key="product.id"
              :to="`/product/${product.id}`"
              class="bg-gray-50 p-6 rounded-lg shadow-md hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">

            <!-- ✅ Ensure images load correctly -->
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

      <section class="py-12 bg-[#A3C7D6] text-center text-black">
        <h3 class="text-3xl font-semibold">Waarom kiezen voor een persoonlijk kussen van <span class="italic">YourPillows?</span></h3>
        <div class="flex flex-wrap justify-center items-center gap-8 mt-6 px-4 md:px-12">
          <div class="max-w-sm">
            <img src="../assets/images/Shop_manSleep.png" alt="Man sleeping on pillow" class="rounded-lg shadow-md">
          </div>
          <div class="max-w-2xl text-left text-gray-800 p-6 rounded-lg">
            <h4 class="text-2xl font-bold">Ultiem comfort voor een optimale nachtrust</h4>
            <p class="mt-2 text-lg">Stel je ideale kussen samen met luxe stoffen zoals bamboe (duurzaam en ademend), zijde (zacht en verkoelend), of satijn (glad en stijlvol). Kies de vulling die bij jou past: memory foam, microvezel, of een combinatie van beide, en bepaal zelf de hoeveelheid extra foam voor jouw perfecte comfort. Maak je kussen uniek door jouw favoriete kleur te kiezen. Luxe, comfort en personalisatie – speciaal afgestemd op jouw slaapwensen.</p>
          </div>
        </div>
      </section>

      <section class="py-12 text-center flex flex-wrap justify-center items-center gap-6 px-4 md:px-12">
        <div class="max-w-lg text-left">
          <h3 class="text-2xl font-semibold text-gray-800">Zeker zijn van jouw hoofdkussen?</h3>
          <p class="text-xl font-bold mt-2">Doe de quiz</p>
          <button class="mt-4 bg-[#A3C7D6] text-black px-6 py-3 rounded-lg hover:bg-[#89A5B6] transition duration-300">
            Doe de quiz
          </button>
        </div>
        <img width="468" src="../assets/images/Quiz_foto.png" alt="" />
      </section>
    </main>
  </div>
</template>

<script setup>
import { useProducts } from '@/composables/UseProducts';

const { products } = useProducts();

const getImageUrl = (imagePath) => {
  if (!imagePath) return '../assets/images/default-placeholder.png';
  return `${process.env.VUE_APP_API_BASE_URL}${imagePath}`;
};
</script>


<style scoped>
</style>
