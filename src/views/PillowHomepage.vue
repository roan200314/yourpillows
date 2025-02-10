<template>
  <div class="min-h-screen bg-[#FAF3E8] font-sans">
    <main>
      <section class="relative bg-cover bg-center h-96 flex items-center justify-center text-white text-center" style="background-image: url('https://source.unsplash.com/1600x900/?bedding');">
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <div class="relative z-10 p-6">
          <h2 class="text-4xl font-semibold drop-shadow-lg">Waarom YourPillows?</h2>
          <p class="mt-2 text-lg">Omdat jij het perfecte kussen verdient. Kies je stof, pas de dikte aan en geniet van luxe comfort – helemaal gepersonaliseerd voor jou.</p>
          <button class="mt-4 bg-[#D4A373] text-white px-6 py-3 rounded-lg hover:bg-[#B88657] transition duration-300">Personaliseer je kussen</button>
        </div>
      </section>

      <section class="py-12 bg-white text-center">
        <h3 class="text-3xl font-semibold text-gray-800">Onze producten</h3>
        <p class="text-gray-600 mt-2">Speciaal voor jouw optimale rust ontworpen</p>
        <div class="flex flex-wrap justify-center gap-6 mt-6">
          <div class="max-w-sm bg-gray-50 p-6 rounded-lg shadow-md">
            <img src="https://source.unsplash.com/300x200/?silk-pillow" class="w-full rounded-lg" />
            <h4 class="text-xl font-semibold text-gray-700 mt-4">Zijde kussen</h4>
            <p class="text-gray-600">Lichtgewicht en ademend voor zacht comfort.</p>
            <p class="mt-4 text-lg font-bold text-gray-800">€59,95</p>
          </div>
          <div class="max-w-sm bg-gray-50 p-6 rounded-lg shadow-md">
            <img src="https://source.unsplash.com/300x200/?bamboo-pillow" class="w-full rounded-lg" />
            <h4 class="text-xl font-semibold text-gray-700 mt-4">Bamboe kussen</h4>
            <p class="text-gray-600">Comfort en duurzaamheid perfect gecombineerd.</p>
            <p class="mt-4 text-lg font-bold text-gray-800">€59,95</p>
          </div>
          <div class="max-w-sm bg-gray-50 p-6 rounded-lg shadow-md">
            <img src="https://source.unsplash.com/300x200/?satin-pillow" class="w-full rounded-lg" />
            <h4 class="text-xl font-semibold text-gray-700 mt-4">Satijn kussen</h4>
            <p class="text-gray-600">Luxe zijdezachte afwerking.</p>
            <p class="mt-4 text-lg font-bold text-gray-800">€59,95</p>
          </div>
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
  name: "YourPillows"
};
</script>

<style>
</style>
