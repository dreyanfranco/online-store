import React, { useEffect, useState } from "react"
import {
    deleteCourseFromWishlist,
    getCoursesFromWishlist,
} from "../../services/courses.service"

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([])

    useEffect(() => {
        fetchWishlist()
    }, [])

    const fetchWishlist = async () => {
        try {
            const response = await getCoursesFromWishlist()
            setWishlist(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    const removeFromWishlist = async (courseId) => {
        try {
            await deleteCourseFromWishlist(courseId)
            setWishlist(wishlist.filter((course) => course._id !== courseId))
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            {wishlist.map((course) => (
                <h1 key={course._id}>{course.title}</h1>
            ))}
        </>
    )
}

export default Wishlist
