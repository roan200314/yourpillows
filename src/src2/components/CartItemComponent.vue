<template>
  <div class="flex justify-between items-center">
    <div class="flex items-center">
      <img :src="item.imageUrl" alt="Product Image" class="w-10 h-10 object-cover rounded-md mr-4">
      <span class="text-gray-800">{{ item.name }}</span>
    </div>

    <div class="flex items-center space-x-4">
      <button
          @click="$emit('decrease', item)"
          class="text-blue-500 hover:text-blue-700 text-sm">
        -
      </button>
      <span class="text-gray-800">{{ item.quantity }}</span> <!-- Display the current quantity -->
      <button
          @click="$emit('increase', item)"
          class="text-blue-500 hover:text-blue-700 text-sm">
        +
      </button>
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
