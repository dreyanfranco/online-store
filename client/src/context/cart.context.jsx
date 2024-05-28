import { createContext, useState, useEffect } from "react";
import { getCart, getCourses } from "../services/courses.service";

export const CartContext = createContext({
    cartCourses: [],
    getCourseQuantity: () => { },
    addOneCourseToCart: () => { },
    removeOneCourseFromCart: () => { },
    deleteCourseFromCart: () => { },
    getTotalCoast: () => { },
})

export default function CartProvider({ children }) {
    const [cartCourses, setCartCourses] = useState([]);

    useEffect(() => {
        getCart()
            .then(({ data }) => setCartCourses(data))
            .catch((error) => console.error(error))
    }, [])

    function getCourseQuantity(id) {
        const quantity = cartCourses.find(course => course._id === id)?.quantity;

        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }

    function addOneCourseToCart(courseData) {
        const quantity = getCourseQuantity(courseData._id);

        if (quantity === 0) {
            setCartCourses(
                [
                    ...cartCourses,
                    {
                        _id: courseData._id,
                        title: courseData.title,
                        quantity: 1
                    }
                ]
            );
            
        } else {
            setCartCourses(
                cartCourses.map(
                    course =>
                        course._id === courseData._id
                            ?
                            { ...course, quantity: course.quantity + 1 }
                            : course
                )
            )
        }
    }

    function removeOneCourseFromCart(id) {
        const quantity = getCourseQuantity(id);

        if (quantity === 1) {
            deleteCourseFromCart(id);
        } else {
            setCartCourses(
                cartCourses.map(
                    course =>
                        course._id === id
                            ?
                            { ...course, quantity: course.quantity - 1 }
                            : course
                )
            )
        }
    }

    function deleteCourseFromCart(id) {
        setCartCourses(cartCourses => cartCourses.filter(currentCourse => currentCourse._id !== id));
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
        getCourseQuantity,
        addOneCourseToCart,
        removeOneCourseFromCart,
        deleteCourseFromCart,
        getTotalCoast,
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}
