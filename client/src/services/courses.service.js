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

export const updatedCourse = (course_id, courseData) => {
    return axiosInstance.patch(`/${course_id}`, courseData)
}

const coursesService = {
    getCourses,
    newCourse,
    updatedCourse,
}

export default coursesService
