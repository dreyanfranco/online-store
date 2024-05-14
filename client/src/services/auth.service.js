import axios from "axios"

const axiosInstance = axios.create({
    baseURL: `http://localhost:5005/api/auth`,
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
