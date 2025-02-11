<template>
  <div class="min-h-screen bg-[#FAF3E8] font-sans">
    <main>
      <section class="relative bg-cover bg-center h-80 flex items-center justify-center text-white text-center" style="background-image: url('https://source.unsplash.com/1600x900/?bedding');">
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <div class="relative z-10 p-6">
          <h2 class="text-4xl font-semibold drop-shadow-lg">Shop</h2>
          <p class="mt-2 text-lg">Kies jouw perfecte kussen voor ultiem comfort.</p>
        </div>
      </section>

      <section class="py-12 bg-white text-center">
        <h3 class="text-3xl font-semibold text-gray-800">Onze Collectie</h3>
        <p class="text-gray-600 mt-2">Vind het perfecte kussen dat bij jou past</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-4 md:px-12">
          <div v-for="product in products" :key="product.id" class="bg-gray-50 p-6 rounded-lg shadow-md">
            <img :src="product.image" class="w-full rounded-lg" />
            <h4 class="text-xl font-semibold text-gray-700 mt-4">{{ product.name }}</h4>
            <p class="text-gray-600">{{ product.description }}</p>
            <p class="mt-4 text-lg font-bold text-gray-800">€{{ product.price }}</p>
            <button class="mt-4 bg-[#D4A373] text-white px-6 py-2 rounded-lg hover:bg-[#B88657] transition duration-300">Bekijk product</button>
          </div>
        </div>
      </section>

      <section class="py-12 bg-[#A3C7D6] text-center text-white">
        <h3 class="text-3xl text-black font-semibold">Waarom YourPillows?</h3>
        <p class="mt-2 text-black">"Jouw kussen, jouw comfort. Slaap op maat met YourPillows."</p>
        <div class="flex flex-wrap justify-center gap-6 mt-6 px-4 md:px-12">
          <div class="max-w-2xl text-left text-gray-800 p-6 rounded-lg shadow-md">
            <h4 class="text-xl font-bold">Ultiem comfort voor een optimale nachtrust</h4>
            <p class="mt-2">Stel je ideale kussen samen met luxe stoffen zoals bamboe (duurzaam en ademend), zijde (zacht en verkoelend), of satijn (glad en stijlvol). Kies de vulling die bij jou past: memory foam, microvezel, of een combinatie van beide, en bepaal zelf de hoeveelheid extra foam voor jouw perfecte comfort. Maak je kussen uniek door jouw favoriete kleur te kiezen. Luxe, comfort en personalisatie – speciaal afgestemd op jouw slaapwensen.</p>
          </div>
          <img src="../assets/images/Shop_manSleep.png" class="rounded-lg shadow-md" />
        </div>
      </section>

      <section class="py-12 text-center flex flex-wrap justify-center items-center gap-6 px-4 md:px-12">
        <div class="max-w-lg text-left">
          <h3 class="text-2xl font-semibold text-gray-800">Zeker zijn van jouw hoofdkussen?</h3>
          <p class="text-xl font-bold mt-2">Doe de quiz</p>
          <button class="mt-4 bg-[#A3C7D6] text-black px-6 py-3 rounded-lg hover:bg-[#89A5B6] transition duration-300">Doe de quiz</button>
        </div>
        <img width="468" src="../assets/images/Quiz_foto.png" alt="" />
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "ShopPage",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Zwangerschap kussen",
          description: "Lichtgewicht en ademend voor zacht comfort.",
          price: 59.95,
          image: "https://source.unsplash.com/300x200/?silk-pillow"
        },
        {
          id: 2,
          name: "Vliegtuig kussen",
          description: "Comfort en duurzaamheid perfect gecombineerd.",
          price: 59.95,
          image: "https://source.unsplash.com/300x200/?bamboo-pillow"
        },
        {
          id: 3,
          name: "Air kussen",
          description: "Luxe zijdezachte afwerking.",
          price: 59.95,
          image: "https://source.unsplash.com/300x200/?satin-pillow"
        },
        {
          id: 4,
          name: "Persoonlijk kussen",
          description: "Volledig aanpasbaar aan jouw voorkeuren.",
          price: 59.95,
          image: "https://source.unsplash.com/300x200/?pillow-question"
        }
      ]
    };
  }
};
</script>

<style>
</style>
