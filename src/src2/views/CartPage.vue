<template>
  <div class="checkout">
    <h2>Afrekenen</h2>

    <form @submit.prevent="submitOrder">
      <h3>Contact</h3>
      <input type="email" v-model="order.email" value="roan_alhelly@hotmail.com" placeholder="E-mail" required />
      <label>
        <input type="checkbox" v-model="order.newsletter" />
        Stuur mij een e-mail met nieuws en aanbiedingen
      </label>

      <h3>Bezorging</h3>
      <select v-model="order.country" required>
        <option value="Nederland">Nederland</option>
      </select>

      <div class="name-fields">
        <input type="text" v-model="order.firstName" value="Roan" placeholder="Voornaam" required />
        <input type="text" v-model="order.lastName" value="al Helly" placeholder="Achternaam" required />
      </div>

      <input type="text" v-model="order.company" value="" placeholder="Bedrijf (optioneel)" />

      <input type="text" v-model="order.street" value="Mastbos" placeholder="Straatnaam" required />
      <input type="text" v-model="order.houseNumber" value="421" placeholder="Huisnummer + toevoeging" required />

      <div class="address-fields">
        <input type="text" v-model="order.postalcode" value="2134NL" placeholder="Postcode" required />
        <input type="text" v-model="order.city" value="Hoofddorp" placeholder="Stad" required />
      </div>

      <input type="tel" v-model="order.phone" value="0612945625" placeholder="Telefoon (optioneel)" />

      <label>
        <input type="checkbox" v-model="order.smsOffers" />
        Stuur mij een sms met nieuws en aanbiedingen
      </label>

      <h3>Samenvatting</h3>
      <p>Totaal: €{{ cartStore.totalPrice }}</p>

      <button type="submit" class="checkout-btn">Bestelling plaatsen</button>
    </form>

    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "../stores/cart";
import apiClient from "../api/apiClient"; // Gebruik de axios client

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
  totalPrice: cartStore.totalPrice
});

const submitOrder = async () => {
  try {
    const response = await apiClient.post("/api/orders/create", order.value);

    if (response.data && response.data.orderId) {
      successMessage.value = `Je bestelling (#${response.data.orderId}) is succesvol geplaatst!`;
    } else {
      successMessage.value = "De bestelling is geplaatst, maar het ordernummer is niet beschikbaar.";
    }

    cartStore.clearCart(); // Leeg de winkelwagen na bestelling
  } catch (error) {
    console.error("Fout bij het plaatsen van de bestelling:", error);
    errorMessage.value = "Er is iets misgegaan, probeer het opnieuw.";
  }
};
</script>

<style scoped>
.checkout {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}

input, select, button {
  width: 100%;
  margin: 8px 0;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.name-fields,
.address-fields {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.name-fields input,
.address-fields input {
  width: 48%;
}

.checkout-btn {
  background-color: #A3C7D6;
  color: white;
  border: none;
  padding: 14px;
  cursor: pointer;
}

.checkout-btn:hover {
  background-color: #8DAEBF;
}

.success-message, .error-message {
  margin-top: 15px;
  color: green;
  font-weight: bold;
}

.error-message {
  color: red;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  .name-fields,
  .address-fields {
    flex-direction: column;
  }

  .name-fields input,
  .address-fields input {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .checkout {
    padding: 10px;
    max-width: 100%;
  }

  input, select, button {
    padding: 10px;
  }

  .checkout-btn {
    font-size: 16px;
  }
}
</style>
