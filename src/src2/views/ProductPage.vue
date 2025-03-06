<template>
  <div v-if="product" class="bg-[#E5D9CF] min-h-screen font-sans p-4">

    <!-- Cart Modal -->
    <div v-if="cartVisible" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div class="bg-white p-6 rounded-lg w-96">
        <h3 class="text-xl font-semibold text-gray-800">Your Cart</h3>
        <div v-if="cart.length === 0" class="mt-4 text-gray-500">Your cart is empty.</div>
        <div v-else class="mt-4 space-y-4">
          <div v-for="(item, index) in cart" :key="index" class="flex justify-between items-center">
            <span class="text-gray-800">{{ item.name }} x{{ item.quantity }}</span>
            <button @click="removeFromCart(item)" class="text-red-500">Remove</button>
          </div>
          <div class="mt-4 text-gray-800 font-bold">
            Total: €{{ totalPrice.toFixed(2) }}
          </div>
        </div>
        <button @click="toggleCart" class="mt-4 w-full bg-[#A3C7D6] text-white px-4 py-2 rounded-lg hover:bg-[#89A5B6] transition duration-300">Close</button>
      </div>
    </div>

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
                v-for="filling in ['Microfiber', 'Memory foam', 'Allebei']"
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
        <button
            @click="addToCart(product)"
            class="mt-6 w-full bg-[#A3C7D6] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-[#89A5B6] transition duration-300 text-sm md:text-base"
            :disabled="product.category === 'customizable' && !(selectedFirstSide && selectedSecondSide && selectedFilling)">
          In winkelwagen
        </button>

        <!-- Message for customizable products -->
        <p v-if="product.category === 'customizable' && !(selectedFirstSide && selectedSecondSide && selectedFilling)" class="mt-2 text-red-500 text-sm">
          Selecteer alle opties om toe te voegen aan winkelwagen.
        </p>


        <!-- Only show this message if the product is customizable -->
        <p v-if="product.category === 'customizable'" class="mt-2 text-red-500 text-sm">Selecteer alle opties om toe te voegen aan winkelwagen.</p>
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
import { ref } from 'vue';
import { useCart } from '../composables/UseCart';
import ProductSpecifications from '../components/ProductSpecifications.vue';
import { GetProduct } from '../composables/GetProduct';
import { useProductDetails } from '../composables/useProductDetails';

const { product } = GetProduct();
const { extraDescription, customerReviews, specifications } = useProductDetails();
const { cart, addToCart, removeFromCart, totalPrice } = useCart();

const getImageUrl = (imagePath) => {
  if (!imagePath) return '../assets/images/default-placeholder.png';
  return `/${imagePath}`;
};

const selectedFirstSide = ref('');
const selectedSecondSide = ref('');
const selectedFilling = ref('');
const cartVisible = ref(false);

const toggleCart = () => {
  cartVisible.value = !cartVisible.value;
};
</script>
