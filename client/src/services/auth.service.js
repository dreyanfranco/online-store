import axios from "axios"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ""

const axiosInstance = axios.create({
    baseURL: `${API_BASE_URL}/api/auth`,
})

export const register = (userData) => {
    return axiosInstance.post("/register", userData)
}

export const login = (userData) => {
    return axiosInstance.post("/login", userData)
}

export const validateToken = (token) => {
    return axiosInstance.get("/validate-token", {
        headers: { Authorization: `Bearer ${token}` },
    })
}

const authService = {
    register,
    login,
    validateToken,
}

export default authService
