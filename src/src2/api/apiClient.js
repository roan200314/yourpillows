import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

console.log("Base API URL:", baseURL);

const apiClient = axios.create({
    baseURL: baseURL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;
