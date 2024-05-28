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

export const addCourseToWishlist = (course_id) => {
    return axiosInstance.post(`/${course_id}/wishlist`)
}

export const getCoursesFromWishlist = () => {
    return axiosInstance.get("/user/wishlist")
}

export const deleteCourseFromWishlist = (course_id) => {
    return axiosInstance.delete(`/${course_id}/wishlist`)
}

const coursesService = {
    getCourses,
    newCourse,
}

export default coursesService
