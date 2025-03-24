<template>
  <div class="w-full flex justify-between items-start p-4 border-b border-gray-200">
    <!-- Left Side: Product Info + Quantity Controls -->
    <div class="flex space-x-4">
      <!-- Product Image -->
      <img
          :src="item.imageUrl"
          alt="Product Image"
          class="w-20 h-20 object-cover rounded-md"
      />

      <!-- Product Details + Quantity Controls -->
      <div class="flex flex-col justify-between">
        <!-- Name + Details -->
        <div class="mb-4">
          <span class="font-semibold text-gray-900 block">{{ item.name }}</span>
          <span class="text-sm text-gray-500 block">Grootte: M</span>
        </div>

        <!-- Quantity Controls + Remove -->
        <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-2">
            <button
                @click="$emit('decrease', item)"
                class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-500 hover:bg-gray-100 transition text-lg font-light"
            >
              -
            </button>
            <span class="text-gray-800 text-md">{{ item.quantity }}</span>
            <button
                @click="$emit('increase', item)"
                class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-500 hover:bg-gray-100 transition text-lg font-light"
            >
              +
            </button>
          </div>

          <button
              @click="$emit('remove', item)"
              class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-500 hover:text-red-500 hover:border-red-500 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Right Side: Price -->
    <div class="text-right min-w-[80px] ml-4">
      <span class="text-lg font-semibold text-gray-900">€{{ item.price }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    item: Object,
  },
};
</script>
