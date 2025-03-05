<script setup>
import { ref } from 'vue';
/* eslint-disable */

// ✅ Props: Accepts product specifications from the parent
defineProps({
  specifications: Array,
});

// ✅ Track which details are open
const openDetails = ref([]);

// ✅ Toggle function for each section
const toggleDetail = (index) => {
  openDetails.value[index] = !openDetails.value[index];
};
</script>

<template>
  <div class="max-w-4xl mx-auto mt-8">
    <h3 class="text-xl font-semibold">Productspecificaties</h3>
    <div class="mt-4">
      <div
          v-for="(spec, index) in specifications"
          :key="index"
          class="bg-white p-4 rounded-lg shadow-md cursor-pointer mt-2"
      >
        <div @click="toggleDetail(index)" class="flex justify-between items-center">
          <p class="font-semibold">{{ spec.title }}</p>
          <span :class="{ 'rotate-180': openDetails[index] }" class="transition-transform duration-300">
            ▼
          </span>
        </div>

        <!-- ✅ Smooth expanding animation -->
        <transition name="slide">
          <div v-show="openDetails[index]" class="overflow-hidden">
            <p class="mt-2 text-gray-600">{{ spec.content }}</p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ✅ Smooth Slide Animation */
.slide-enter-active, .slide-leave-active {
  transition: max-height 0.4s ease-in-out, opacity 0.3s ease-in-out;
  overflow: hidden;
}

.slide-enter-from, .slide-leave-to {
  max-height: 0;
  opacity: 0;
}

.slide-enter-to, .slide-leave-from {
  max-height: 200px; /* Adjust based on content */
  opacity: 1;
}

/* ✅ Arrow Rotation Animation */
.rotate-180 {
  transform: rotate(180deg);
}
</style>
