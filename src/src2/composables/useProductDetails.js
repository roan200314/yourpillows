import { ref } from 'vue';

export function useProductDetails() {
    const extraDescription = ref(
        "Dit kussen is speciaal ontworpen voor maximaal comfort tijdens lange reizen. Het past zich aan je nek aan en biedt ultieme ondersteuning, zodat je uitgerust aankomt op je bestemming."
    );

    const customerReviews = ref([
        { name: "Lisa M.", rating: "⭐️⭐️⭐️⭐️⭐️", text: "Super comfortabel! Mijn nek voelde ontspannen na een lange vlucht." },
        { name: "Tom D.", rating: "⭐️⭐️⭐️⭐️", text: "Goede kwaliteit, maar had iets steviger mogen zijn voor mij." },
        { name: "Eva K.", rating: "⭐️⭐️⭐️⭐️⭐️", text: "Beste nekkussen dat ik ooit heb gehad!" }
    ]);

    const specifications = ref([
        { title: "Formaat en gewicht", content: "Afmetingen: 50x70 cm, Gewicht: 800g" },
        { title: "Technische specificaties", content: "100% memory foam, Hypoallergeen, Ademend materiaal" },
        { title: "Wasvoorschriften", content: "Hoes: Machinewasbaar op 30°C, Kussen: Alleen handwas" },
        { title: "Wat zit er in de doos?", content: "1x Nekkussen, 1x Opbergzak, Handleiding" }
    ]);

    return { extraDescription, customerReviews, specifications };
}
