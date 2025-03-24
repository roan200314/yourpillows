<template>
  <div v-if="cartVisible" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
    <div class="bg-white w-fit p-6 rounded-lg max-w-lg">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">Jouw winkelwagen</h3>

      <div v-if="cart.length === 0" class="mt-4 text-gray-500 text-center">
        Uw winkelwagen is leeg
        <div class="mt-6">
          <button
              @click="$emit('closeCart')"
              class="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300">
            Sluit
          </button>
        </div>
      </div>

      <div v-else>
        <div class="space-y-4">
          <CartItem
              v-for="(item, index) in cart"
              :key="index"
              :item="item"
              @remove="removeFromCart"
              @increase="increaseQuantity"
              @decrease="decreaseQuantity" />
        </div>

        <div class="mt-4 text-gray-800 font-bold">
          Totaal: €{{ totalPrice.toFixed(2) }}
        </div>

        <div class="flex space-x-4 mt-4">
          <button
              @click="$emit('closeCart')"
              class="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300">
            Sluit
          </button>

          <router-link
              @click="$emit('closeCart')"
              to="/Checkout"
              class="w-full bg-[#A3C7D6] text-white px-4 py-2 rounded-lg hover:bg-[#89A5B6] transition duration-300 flex justify-center">
            Naar afrekenen
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { useCartStore } from '../stores/cart';
import CartItem from '../components/CartItemComponent.vue';

export default {
  name: 'CartModal',
  components: { CartItem },
  props: {
    cartVisible: Boolean
  },
  computed: {
    cart() {
      const cartStore = useCartStore();
      return cartStore.cart;
    },
    totalPrice() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  },
  methods: {
    removeFromCart(item) {
      const cartStore = useCartStore();
      cartStore.removeFromCart(item);
    },
    increaseQuantity(item) {
      const cartStore = useCartStore();
      cartStore.updateQuantity(item, item.quantity + 1); // Increase quantity by 1
    },
    decreaseQuantity(item) {
      const cartStore = useCartStore();
      if (item.quantity > 1) {
        cartStore.updateQuantity(item, item.quantity - 1); // Decrease quantity by 1
      }
    }
  }
};
</script>
