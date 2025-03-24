import { ref } from "vue";
import apiClient from "../api/apiClient"; // 👈 Import the centralized API client
import { useRouter } from "vue-router";

export function useRegister() {
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const errorMessage = ref("");
    const router = useRouter();

    const register = async () => {
        if (password.value !== confirmPassword.value) {
            errorMessage.value = "Wachtwoorden komen niet overeen";
            return;
        }

        try {
            const response = await apiClient.post("/api/register", {
                name: name.value,
                email: email.value,
                password: password.value,
            });

            alert(response.data || "Registratie succesvol!");
            await router.push("/login");
        } catch (error) {
            errorMessage.value = error.response?.data || "Er is een fout opgetreden";
        }
    };

    return { name, email, password, confirmPassword, errorMessage, register };
}
