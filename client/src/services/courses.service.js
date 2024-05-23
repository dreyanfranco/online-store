import axios from "axios"

const axiosInstance = axios.create({
    baseURL: `http://localhost:5005/api`,
})

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("authToken")
    if (token) {
        config.headers = { Authorization: `Bearer ${token}` }
    }
    return config
})

export const getCourses = () => {
    return axiosInstance.get("/")
}

export const newCourse = (courseData) => {
    return axiosInstance.post("/", courseData)
}

const coursesService = {
    getCourses,
    newCourse,
}

export default coursesService
