import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import apiClient from '../api/apiClient';

export function GetProduct() {
    const route = useRoute();
    const product = ref(null);

    const fetchProduct = async () => {
        try {
            console.log("🔍 Fetching product with ID:", route.params.id);
            const response = await apiClient.get(`/api/products/${route.params.id}`);
            product.value = response.data;
            console.log("✅ Product fetched successfully:", product.value);
        } catch (error) {
            console.error("❌ Error fetching product details:", error);
        }
    };

    onMounted(fetchProduct);
    watch(() => route.params.id, fetchProduct);

    return { product };
}
