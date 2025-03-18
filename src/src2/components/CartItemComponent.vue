<template>
  <div class="flex justify-between items-center">
    <div class="flex items-center">
      <img :src="item.imageUrl" alt="Product Image" class="w-10 h-10 object-cover rounded-md mr-4">
      <span class="text-gray-800">{{ item.name }} x{{ item.quantity }}</span>
    </div>
    <span class="text-gray-800 font-bold">€{{ (item.price * item.quantity).toFixed(2) }}</span>
    <button @click="$emit('remove', item)" class="text-red-500 hover:text-red-700 text-sm">Verwijder</button>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    item: Object
  }
};
</script>
