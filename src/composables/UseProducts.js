import { ref, onMounted } from 'vue';
import apiClient from "../api/apiClient";

export function useProducts() {
    const products = ref([]);

    const fetchProducts = async () => {
        try {
            const response = await apiClient.get('/api/products'); // Ensure this matches your backend route
            products.value = response.data;
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    onMounted(fetchProducts);

    return { products };
}
