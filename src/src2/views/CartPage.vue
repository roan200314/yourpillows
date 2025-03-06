<template>
  <div class="cart">
    <h2>Shopping Cart</h2>
    <div v-if="cartStore.cart.length > 0">
      <div v-for="item in cartStore.cart" :key="item.id" class="cart-item">
        <p>{{ item.name }} - €{{ item.price }} (x{{ item.quantity }})</p>
        <input type="number" v-model="item.quantity" @change="cartStore.updateQuantity(item, item.quantity)" />
        <button @click="cartStore.removeFromCart(item)">Remove</button>
      </div>
      <p>Total: €{{ cartStore.totalPrice }}</p>
    </div>
    <div v-else>
      <p>Your cart is empty</p>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "../stores/cart";
const cartStore = useCartStore();
</script>
