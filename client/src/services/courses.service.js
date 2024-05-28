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

export const getCart = () => {
    return axiosInstance.get('/user/cart');
};

export const newCart = (courseId) => {
    return axiosInstance.post("/user/cart", { courseId })
}

export const deleteCourseCart = (courseId) => {
    return axiosInstance.delete(`${courseId}/cart`, { courseId })
}

const coursesService = {
    getCourses,
    newCourse,
    getCart,
    newCart,
    deleteCourseCart,
}

export default coursesService
