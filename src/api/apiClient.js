import axios from "axios";

const baseURL = process.env.VUE_APP_API_BASE_URL || "http://localhost:8080";


console.log("Base API URL:", baseURL); // ✅ Debugging: Check if it's correctly loaded

const apiClient = axios.create({
    baseURL: baseURL,
    withCredentials: true, // ✅ Allows authentication cookies
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;
