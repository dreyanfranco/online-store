import PropTypes from "prop-types"
import { createContext, useContext, useEffect, useState } from "react"
import {
    addCourseToWishlist,
    deleteCourseFromWishlist,
    getCoursesFromWishlist,
} from "../services/courses.service"
import { AuthContext } from "./auth.context"

const WishlistContext = createContext()

const WishlistProviderWrapper = (props) => {
    const [wishlist, setWishlist] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        if (user) {
            fetchWishlist()
        } else {
            setWishlist([[]])
        }
    }, [user])

    const fetchWishlist = async () => {
        try {
            const response = await getCoursesFromWishlist()
            setWishlist(response.data.map((course) => course._id))
        } catch (error) {
            console.error(error)
            // setWishlist([])
        }
    }

    const addToWishlist = async (courseId) => {
        try {
            await addCourseToWishlist(courseId)
            setWishlist((prevWishlist) => [...prevWishlist, courseId])
        } catch (error) {
            console.error(error)
        }
    }

    const removeFromWishlist = async (courseId) => {
        try {
            await deleteCourseFromWishlist(courseId)
            setWishlist((prevWishlist) =>
                prevWishlist.filter((id) => id !== courseId)
            )
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <WishlistContext.Provider
            value={{ wishlist, addToWishlist, removeFromWishlist }}
        >
            {props.children}
        </WishlistContext.Provider>
    )
}

WishlistProviderWrapper.propTypes = {
    children: PropTypes.node,
}

export { WishlistContext, WishlistProviderWrapper }
