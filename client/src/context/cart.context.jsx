import { createContext, useState, useEffect } from "react";
import { getCart, getCourses } from "../services/courses.service";

export const CartContext = createContext({
    cartCourses: [],
    addOneCourseToCart: () => { },
    deleteCourseFromCart: () => { },
    getTotalCoast: () => { },
    deleteAllCart: () => { },
})

export default function CartProvider({ children }) {
    const [cartCourses, setCartCourses] = useState([]);

    useEffect(() => {
        getCart()
            .then(({ data }) => setCartCourses(data))
            .catch((error) => console.error(error))
    }, [])

    function addOneCourseToCart(courseData) {
        setCartCourses(prevCartCourses => {
            const filteredCourses = prevCartCourses.filter(course => course._id !== courseData._id);

            return [
                ...filteredCourses,
                {
                    _id: courseData._id,
                    title: courseData.title,
                    description: courseData.description,
                    duration: courseData.duration,
                    price: courseData.price
                }
            ];
        });
    } 

    function deleteCourseFromCart(id) {
        setCartCourses(cartCourses => cartCourses.filter(currentCourse => currentCourse._id !== id));
    }

    function deleteAllCart() {
        setCartCourses([]);
    }

    function getTotalCoast() {
        let totalCoast = 0;
        cartCourses.map((course) => {
            totalCoast += (course.price * course.quantity);
        })

        return totalCoast;
    }

    const contextValue = {
        cartCourses: cartCourses,
        addOneCourseToCart,
        deleteCourseFromCart,
        getTotalCoast,
        deleteAllCart,
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

