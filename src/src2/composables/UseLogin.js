import { ref } from "vue";
import apiClient from "../api/apiClient";
import { useRouter } from "vue-router";

export function useLogin() {
    const email = ref("");
    const password = ref("");
    const errorMessage = ref("");
    const router = useRouter();

    const login = async () => {
        errorMessage.value = ""; // Reset error

        try {
            const response = await apiClient.post("/api/login", {
                email: email.value,
                password: password.value,
            });

            alert("Succesvol ingelogd!");
            localStorage.setItem("token", response.data.token); // Store token (if using JWT)
            await router.push("/dashboard"); // Redirect to dashboard or homepage
        } catch (error) {
            errorMessage.value = error.response?.data || "Ongeldig e-mailadres of wachtwoord.";
        }
    };

    return { email, password, errorMessage, login };
}
