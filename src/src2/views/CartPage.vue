<template>
  <div class="max-w-7xl mx-auto p-5 flex flex-col lg:flex-row gap-10">
    <!-- Linkerkant: Checkout Form -->
    <div class="w-full lg:w-2/3">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Afrekenen</h2>

      <form @submit.prevent="submitOrder" class="space-y-6">
        <!-- Contactgegevens -->
        <div>
          <h3 class="text-lg font-semibold text-gray-700 mb-2">Contact</h3>
          <input
              type="email"
              v-model="order.email"
              placeholder="E-mail"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <label class="flex items-center mt-3 text-sm text-gray-600">
            <input
                type="checkbox"
                v-model="order.newsletter"
                class="mr-2 rounded text-blue-600 focus:ring-blue-400"
            />
            Stuur mij een e-mail met nieuws en aanbiedingen
          </label>
        </div>

        <!-- Bezorggegevens -->
        <div>
          <h3 class="text-lg font-semibold text-gray-700 mb-2">Bezorging</h3>
          <select
              v-model="order.country"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="Nederland">Nederland</option>
          </select>

          <div class="flex flex-col sm:flex-row sm:space-x-4 mt-4">
            <input
                type="text"
                v-model="order.firstName"
                placeholder="Voornaam"
                required
                class="w-full mb-3 sm:mb-0 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <input
                type="text"
                v-model="order.lastName"
                placeholder="Achternaam"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <input
              type="text"
              v-model="order.company"
              placeholder="Bedrijf (optioneel)"
              class="w-full mt-3 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <input
              type="text"
              v-model="order.street"
              placeholder="Straatnaam"
              required
              class="w-full mt-3 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <input
              type="text"
              v-model="order.houseNumber"
              placeholder="Huisnummer + toevoeging"
              required
              class="w-full mt-3 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <div class="flex flex-col sm:flex-row sm:space-x-4 mt-4">
            <input
                type="text"
                v-model="order.postalcode"
                placeholder="Postcode"
                required
                class="w-full mb-3 sm:mb-0 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <input
                type="text"
                v-model="order.city"
                placeholder="Stad"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <input
              type="tel"
              v-model="order.phone"
              placeholder="Telefoonnummer (optioneel)"
              class="w-full mt-3 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <label class="flex items-center mt-3 text-sm text-gray-600">
            <input
                type="checkbox"
                v-model="order.smsOffers"
                class="mr-2 rounded text-blue-600 focus:ring-blue-400"
            />
            Stuur mij een sms met nieuws en aanbiedingen
          </label>
        </div>

        <!-- Bestelling plaatsen -->
        <button
            type="submit"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition-colors"
        >
          Bestelling plaatsen
        </button>

        <!-- Berichten -->
        <p
            v-if="successMessage"
            class="mt-5 text-green-600 font-medium text-center"
        >
          {{ successMessage }}
        </p>
        <p
            v-if="errorMessage"
            class="mt-5 text-red-600 font-medium text-center"
        >
          {{ errorMessage }}
        </p>
      </form>
    </div>

    <!-- Rechterkant: Overzicht producten -->
    <div class="w-full lg:w-1/3 bg-gray-50 p-6 rounded-xl border border-gray-200 h-fit">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">Jouw bestelling</h3>
      <div v-for="item in cartStore.items" :key="item.id" class="flex justify-between items-center mb-4">
        <div>
          <p class="font-medium text-gray-800">{{ item.name }}</p>
          <p class="text-sm text-gray-500">{{ item.quantity }} x €{{ item.price.toFixed(2) }}</p>
        </div>
        <img :src="item.image" alt="Product afbeelding" class="w-16 h-16 object-cover rounded-md" />
      </div>

      <div class="border-t border-gray-200 pt-4 mt-4">
        <p class="flex justify-between text-gray-700 mb-2">
          <span>Subtotaal</span>
          <span>€{{ cartStore.totalPrice.toFixed(2) }}</span>
        </p>
        <p class="flex justify-between text-gray-700 mb-4">
          <span>Verzending</span>
          <span>Gratis</span>
        </p>
        <p class="flex justify-between font-bold text-gray-900 text-lg">
          <span>Totaal</span>
          <span>€{{ cartStore.totalPrice.toFixed(2) }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "../stores/cart";
import apiClient from "../api/apiClient";

const cartStore = useCartStore();

const successMessage = ref("");
const errorMessage = ref("");

const order = ref({
  email: "",
  newsletter: false,
  country: "Nederland",
  firstName: "",
  lastName: "",
  company: "",
  street: "",
  houseNumber: "",
  postalcode: "",
  city: "",
  phone: "",
  smsOffers: false,
  totalPrice: cartStore.totalPrice,
});

const submitOrder = async () => {
  try {
    order.value.totalPrice = cartStore.totalPrice;

    const response = await apiClient.post("/api/orders/create", order.value);

    if (response.data?.orderId) {
      successMessage.value = `Je bestelling (#${response.data.orderId}) is succesvol geplaatst!`;
      errorMessage.value = "";
      cartStore.clearCart();
    } else {
      successMessage.value = "Bestelling geplaatst, maar ordernummer ontbreekt.";
    }
  } catch (error) {
    console.error("Fout bij het plaatsen van de bestelling:", error);
    errorMessage.value = "Er is iets misgegaan, probeer het opnieuw.";
    successMessage.value = "";
  }
};
</script>
