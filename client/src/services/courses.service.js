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

export const getCourse = (course_id) => {
    return axiosInstance.get(`/${course_id}`)
}

export const newCourse = (courseData) => {
    return axiosInstance.post("/", courseData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
}

export const updatedCourse = (course_id, courseData) => {
    return axiosInstance.patch(`/${course_id}`, courseData)
}

export const deleteCourse = (course_id) => {
    return axiosInstance.delete(`/${course_id}`)
}

export const getCart = () => {
    return axiosInstance.get("/user/cart")
}

export const newCart = (courseId) => {
    return axiosInstance.post("/user/cart", { courseId })
}

export const deleteCourseCart = (courseId) => {
    return axiosInstance.delete(`${courseId}/cart`, { courseId })
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

export const addCoursePurchase = (courseIds) => {
    return axiosInstance.post("/user/purchase", { courseIds })
}

export const deleteCoursePurchase = (courseId) => {
    return axiosInstance.delete(`${courseId}/purchase`, { courseId })
}

export const addCoursePurchaseToStripe = (stripeData) => {
    return axiosInstance.post("/user/checkout", stripeData)
}

export const getCoursesPurchase = () => {
    return axiosInstance.get("/user/purchase")
}

const coursesService = {
    getCourses,
    getCourse,
    newCourse,
    updatedCourse,
    getCart,
    newCart,
    deleteCourseCart,
    deleteCourse,
    getCoursesPurchase,
    addCoursePurchase,
    addCoursePurchaseToStripe,
    deleteCoursePurchase,
}

export default coursesService
