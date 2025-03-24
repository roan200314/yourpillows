import { ref } from "vue";
import apiClient from "../api/apiClient";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

export function useLogin() {
    const email = ref("");
    const password = ref("");
    const errorMessage = ref("");
    const router = useRouter();
    const toast = useToast();

    const login = async () => {
        errorMessage.value = ""; // Reset

        if (!email.value || !password.value) {
            errorMessage.value = "Vul alstublieft alle velden in.";
            toast.error(errorMessage.value);
            return;
        }

        try {
            const response = await apiClient.post("/api/login", {
                email: email.value,
                password: password.value,
            });

            if (response.data.includes("Succesvol")) {
                toast.success("Succesvol ingelogd!");
                localStorage.setItem("token", response.data); // Als je JWT hebt
                await router.push("/");
            } else {
                errorMessage.value = response.data || "Ongeldig e-mailadres of wachtwoord.";
                toast.error(errorMessage.value);
            }
        } catch (error) {
            errorMessage.value = error.response?.data || "Er is een fout opgetreden.";
            toast.error(errorMessage.value);
        }
    };

    return { email, password, errorMessage, login };
}
