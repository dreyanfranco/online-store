import { Container } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import robotcourse from "../../components/Cards/ImagesCards/robotcourse.jpg"
import "./CardsControl.css"
import { useContext } from "react"
import { AuthContext } from "../../context/auth.context"
import { CartContext } from "../../context/cart.context"
import { WishlistContext } from "../../context/wishlist.context"
import coursesService from "../../services/courses.service"
import { formatCurrency } from "../../utilities/formatCurrency"

function CardsControl({ course }) {
    const cart = useContext(CartContext)
    const { wishlist, addToWishlist, removeFromWishlist } =
        useContext(WishlistContext)
    const { user } = useContext(AuthContext);

    const toggleWishlistStatus = (courseId) => {
        const isWishlisted = wishlist.some((course) => course._id === courseId)
        if (isWishlisted) {
            removeFromWishlist(courseId)
        } else {
            addToWishlist(courseId)
        }
    }

    const handleToggleButtonCart = (courseId) => {
        const isnInCart = cart.cartCourses.some(courses => courses._id === courseId)
        return isnInCart;
    }

    const handleAddCourseToCart = async (courseData) => {
        try {
            await coursesService.newCart(courseData._id)
            cart.addOneCourseToCart(courseData)
        } catch (error) {
            console.error("No se ha podido agregar al carrito", error)
        }
    }

    const handleDelCourseFromCart = async (courseId) => {
        try {
            await coursesService.deleteCourseCart(courseId);
            cart.deleteCourseFromCart(courseId);
        } catch (error) {
            console.error("No se ha podido eliminar al carrito", error)
        }
    }
    return (

        <Card className="" style={{ width: "18rem" }}>
            <Card.Img
                style={{ height: "10rem", objectFit: "cover" }}
                src={robotcourse}
            />
            <Card.Body>
                <Card.Title>
                    <a
                        href={`/${course._id}`}
                        className="text-reset link-offset-2 link-underline link-underline-opacity-0"
                    >
                        {course.title}
                    </a>
                </Card.Title>

                <Card.Text>
                    {course.description}
                </Card.Text>

                <div className="d-flex justify-content-between align-items-center my-3">
                    {
                        handleToggleButtonCart(course._id) ?
                            < Button
                                onClick={() =>
                                    handleDelCourseFromCart(course._id)
                                }
                                className="btncompra bg-danger"
                            >
                                <span className="IconContainer">
                                    <i
                                        className="bi bi-cart2"
                                        height="1em"
                                    ></i>
                                </span>
                                <p className="add">
                                    Eliminar del carrito
                                </p>
                            </Button>
                            :
                            < Button
                                onClick={() =>
                                    handleAddCourseToCart(course)
                                }
                                className="btncompra"
                            >
                                <span className="IconContainer">
                                    <i
                                        className="bi bi-cart2"
                                        height="1em"
                                    ></i>
                                </span>
                                <p className="add">
                                    Añadir al carrito
                                </p>
                            </Button>
                    }

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill={
                            user &&
                                wishlist.some(
                                    (userWishlist) =>
                                        userWishlist._id ===
                                        course._id
                                )
                                ? "red"
                                : "none"
                        }
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                        onClick={(e) => {
                            e.preventDefault()
                            if (user)
                                toggleWishlistStatus(
                                    course._id
                                )
                        }}
                        style={{ cursor: "pointer" }}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                    </svg>
                </div>
            </Card.Body>
            <Card.Footer>
                <div className="d-flex justify-content-between">
                    <div>
                        {" "}
                        <i className="bi bi-clock"></i> 7.5
                        hrs{" "}
                    </div>
                    <span
                        className="fs-4 text"
                        style={{ color: "#1ECAB8" }}
                    >
                        {" "}
                        {formatCurrency(course.price)}
                    </span>
                </div>
            </Card.Footer>
        </Card>
    )
}

export default CardsControl
