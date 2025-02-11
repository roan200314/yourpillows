import axios from "axios";

console.log("VUE_APP_API_BASE_URL:", process.env.VUE_APP_API_BASE_URL);

const apiClient = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL || "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;
