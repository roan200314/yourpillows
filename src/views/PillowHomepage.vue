<template>
  <div class="min-h-screen bg-[#E5D9CF] font-sans">
    <main>
      <section class="relative bg-cover bg-center h-96 flex items-center justify-center text-white text-center" style="background-image: url('https://source.unsplash.com/1600x900/?bedding');">
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <div class="relative z-10 p-6">
          <h2 class="text-4xl font-semibold drop-shadow-lg">Waarom YourPillows?</h2>
          <p class="mt-2 text-lg">Omdat jij het perfecte kussen verdient. Kies je stof, pas de dikte aan en geniet van luxe comfort – helemaal gepersonaliseerd voor jou.</p>
          <button class="mt-4 bg-[#D4A373] text-white px-6 py-3 rounded-lg hover:bg-[#B88657] transition duration-300">Personaliseer je kussen</button>
        </div>
      </section>

      <section class="py-12 bg-[#FAF3E8] text-center">
        <h3 class="text-3xl font-semibold text-gray-800">Best Sellers</h3>
        <p class="text-gray-600 mt-2">Vind het perfecte kussen dat bij jou past</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-4 md:px-12">
          <router-link v-for="product in products" :key="product.id" :to="`/product/${product.id}`" class="bg-gray-50 p-6 rounded-lg shadow-md hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
            <img :src="product.image" class="w-full rounded-lg" />
            <h4 class="text-xl font-semibold text-gray-700 mt-4">{{ product.name }}</h4>
            <p class="text-gray-600">{{ product.description }}</p>
            <p class="mt-4 text-lg font-bold text-gray-800">€{{ product.price }}</p>
            <button class="mt-4 bg-[#D4A373] text-white px-6 py-2 rounded-lg hover:bg-[#B88657] transition duration-300">Bekijk product</button>
          </router-link>
        </div>
      </section>

      <section class="py-12 bg-[#A3C7D6] text-center text-white">
        <h3 class="text-3xl font-semibold">Waarom YourPillows?</h3>
        <p class="mt-2">"Jouw kussen, jouw comfort. Slaap op maat met YourPillows."</p>
        <div class="flex flex-wrap justify-center gap-6 mt-6">
          <div class="max-w-sm text-center">
            <p class="text-lg">✔ Pas de vulling zelf aan</p>
            <p class="text-lg">✔ Zijde, bamboe of satijn voor luxe comfort</p>
            <p class="text-lg">✔ Vorm zich naar jouw lichaam</p>
            <p class="text-lg">✔ Extra foam voor persoonlijk comfort</p>
            <p class="text-lg">✔ Milieuvriendelijk en duurzaam geproduceerd</p>
          </div>
        </div>
      </section>
    </main>

  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Zwangerschap kussen",
          description: "Lichtgewicht en ademend voor zacht comfort.",
          price: 59.95,
          image: require("../assets/images/zwangerschapkussen1.jpg")
        },
        {
          id: 2,
          name: "Vliegtuig kussen",
          description: "Comfort en duurzaamheid perfect gecombineerd.",
          price: 59.95,
          image: require("../assets/images/vliegtuigkussen1.jpg")
        },
        {
          id: 3,
          name: "Air kussen",
          description: "Luxe zijdezachte afwerking.",
          price: 59.95,
          image: require("../assets/images/airKussen1.jpg")
        },
        {
          id: 4,
          name: "Persoonlijk kussen",
          description: "Volledig aanpasbaar aan jouw voorkeuren.",
          price: 59.95,
          image: require("../assets/images/Quiz_foto.png")
        }
      ]
    };
  }
};
</script>

<style>
</style>
