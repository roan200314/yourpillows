import { ref } from "vue";
import apiClient from "../api/apiClient";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

export function useRegister() {
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const errorMessage = ref("");
    const router = useRouter();
    const toast = useToast();

    const register = async () => {
        if (password.value !== confirmPassword.value) {
            errorMessage.value = "Wachtwoorden komen niet overeen.";
            toast.error(errorMessage.value); // Mooie pop-up
            return;
        }

        try {
            const response = await apiClient.post("/api/register", {
                name: name.value,
                email: email.value,
                password: password.value,
            });

            toast.success(response.data || "Registratie succesvol!");
            await router.push("/login");
        } catch (error) {
            toast.error(errorMessage.value); // Mooie pop-up
        }
    };

    return { name, email, password, confirmPassword, errorMessage, register };
}
