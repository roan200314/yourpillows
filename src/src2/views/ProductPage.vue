<template>
  <div v-if="product" class="bg-[#E5D9CF] min-h-screen font-sans p-4">

    <!-- Product Container -->
    <div class="max-w-5xl mx-auto bg-white p-6 shadow-lg rounded-lg flex flex-col lg:flex-row gap-8">

      <!-- Product Image -->
      <div class="w-full lg:w-1/2 flex flex-col items-center">
        <img :src="getImageUrl(product.imageUrl)" alt="Product Image" class="rounded-lg shadow-md w-full h-auto object-cover" />
      </div>

      <!-- Product Details -->
      <div class="w-full lg:w-1/2">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800">{{ product.name }}</h2>
        <p class="text-gray-600 mt-2 text-sm md:text-base">{{ product.description }}</p>
        <p class="text-lg font-bold text-gray-800 mt-4">€{{ product.price }}</p>
        <p class="text-sm text-gray-500">⭐ 4.4</p>

        <!-- Personaliseer opties (alleen voor customizable producten) -->
        <div v-if="product.category === 'customizable'" class="mt-6">
          <h3 class="text-xl font-semibold text-gray-700">Personaliseer jouw kussen</h3>

          <p class="text-gray-700 font-semibold mt-4">Kies je eerste kussen zijde</p>
          <div class="flex flex-wrap gap-2 mt-2">
            <button
                v-for="side in ['Satijn', 'Bamboe', 'Zijde', 'Fleece', 'Flanel']"
                :key="side"
                @click="selectedFirstSide = side"
                class="px-3 py-1 border rounded-lg text-sm md:text-base"
                :class="{'bg-[#A3C7D6] text-white': selectedFirstSide === side}"
            >
              {{ side }}
            </button>
          </div>

          <p class="text-gray-700 font-semibold mt-4">Kies je tweede kussen zijde</p>
          <div class="flex flex-wrap gap-2 mt-2">
            <button
                v-for="side in ['Satijn', 'Bamboe', 'Zijde', 'Fleece', 'Flanel']"
                :key="side"
                @click="selectedSecondSide = side"
                class="px-3 py-1 border rounded-lg text-sm md:text-base"
                :class="{'bg-[#A3C7D6] text-white': selectedSecondSide === side}"
            >
              {{ side }}
            </button>
          </div>

          <p class="text-gray-700 font-semibold mt-4">Kies de inhoud van je kussen</p>
          <div class="flex flex-wrap gap-2 mt-2">
            <button
                v-for="filling in ['Microfiberfiber', 'Memory foam', 'Allebei']"
                :key="filling"
                @click="selectedFilling = filling"
                class="px-3 py-1 border rounded-lg text-sm md:text-base"
                :class="{'bg-[#A3C7D6] text-white': selectedFilling === filling}"
            >
              {{ filling }}
            </button>
          </div>
        </div>

        <!-- Extra beschrijving voor niet-aanpasbare kussens -->
        <p v-if="product.category !== 'customizable'" class="mt-4 text-gray-600 text-sm md:text-base">
          {{ extraDescription }}
        </p>

        <!-- "Add to Cart" Button -->
        <button class="mt-6 w-full bg-[#A3C7D6] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-[#89A5B6] transition duration-300 text-sm md:text-base">
          In winkelwagen
        </button>
      </div>
    </div>

    <!-- Product Specifications -->
    <ProductSpecifications :specifications="specifications" />

    <!-- Klantenreviews sectie -->
    <div class="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h3 class="text-xl font-semibold text-gray-800">Wat klanten zeggen</h3>
      <div class="mt-4 space-y-4">
        <div v-for="(review, index) in customerReviews" :key="index" class="border-b pb-2">
          <p class="text-gray-800 font-semibold">{{ review.name }}</p>
          <p class="text-yellow-500">{{ review.rating }}</p>
          <p class="text-gray-600 mt-1 text-sm md:text-base">"{{ review.text }}"</p>
        </div>
      </div>
    </div>

  </div>

  <div v-else class="min-h-screen flex items-center justify-center">
    <p class="text-lg text-gray-600">Product wordt geladen...</p>
  </div>
</template>

<script setup>
import { GetProduct } from '../composables/GetProduct';
import { ref } from 'vue';
import ProductSpecifications from '../components/ProductSpecifications.vue';

const { product } = GetProduct();

const getImageUrl = (imagePath) => {
  if (!imagePath) return '../assets/images/default-placeholder.png';
  return `/${imagePath}`;
};

const selectedFirstSide = ref('');
const selectedSecondSide = ref('');
const selectedFilling = ref('');

const extraDescription = ref(
    "Dit kussen is speciaal ontworpen voor maximaal comfort tijdens lange reizen. Het past zich aan je nek aan en biedt ultieme ondersteuning, zodat je uitgerust aankomt op je bestemming."
);

const customerReviews = ref([
  {name: "Lisa M.", rating: "⭐️⭐️⭐️⭐️⭐️", text: "Super comfortabel! Mijn nek voelde ontspannen na een lange vlucht."},
  {name: "Tom D.", rating: "⭐️⭐️⭐️⭐️", text: "Goede kwaliteit, maar had iets steviger mogen zijn voor mij."},
  {name: "Eva K.", rating: "⭐️⭐️⭐️⭐️⭐️", text: "Beste nekkussen dat ik ooit heb gehad!"}
]);

const specifications = ref([
  {title: "Formaat en gewicht", content: "Afmetingen: 50x70 cm, Gewicht: 800g"},
  {title: "Technische specificaties", content: "100% memory foam, Hypoallergeen, Ademend materiaal"},
  {title: "Wasvoorschriften", content: "Hoes: Machinewasbaar op 30°C, Kussen: Alleen handwas"},
  {title: "Wat zit er in de doos?", content: "1x Nekkussen, 1x Opbergzak, Handleiding"}
]);
</script>