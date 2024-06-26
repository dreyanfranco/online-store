import { useContext, useEffect, useState } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import robotcourse from "../../components/Cards/ImagesCards/robotcourse.jpg"
import { AuthContext } from "../../context/auth.context"
import { CartContext } from "../../context/cart.context"
import { WishlistContext } from "../../context/wishlist.context"
import coursesService, { getCourses } from "../../services/courses.service"
import { formatCurrency } from "../../utilities/formatCurrency"
import "./Cards.css"
import "./CardsControl.css"


// eslint-disable-next-line react/prop-types
function Cards({ filter }) {
    const [courses, setCourses] = useState([])
    const cart = useContext(CartContext)
    const { wishlist, addToWishlist, removeFromWishlist } =
        useContext(WishlistContext)
    const { user } = useContext(AuthContext)

    // const handleToggleButtonCart = () => {
    //     setIsInCart(!isInCart)
    // }

    const toggleWishlistStatus = (courseId) => {
        const isWishlisted = wishlist.some((course) => course._id === courseId)
        if (isWishlisted) {
            removeFromWishlist(courseId)
        } else {
            addToWishlist(courseId)
        }
    }

    const handleToggleButtonCart = (courseId) => {
        const isnInCart = cart.cartCourses.some(
            (courses) => courses._id === courseId
        )
        return isnInCart
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
            await coursesService.deleteCourseCart(courseId)
            cart.deleteCourseFromCart(courseId)
        } catch (error) {
            console.error("No se ha podido eliminar al carrito", error)
        }
    }

    useEffect(() => {
        getCourses()
            .then(({ data }) => setCourses(data))
            .catch((error) => console.error(error))
    }, [])

    const sortCriteria = {
        recent: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        priceLowToHigh: (a, b) => a.price - b.price,
        priceHighToLow: (a, b) => b.price - a.price,
        // starRating: (a, b) => b.starRating - a.starRating,
    }

    const filteredCourses = courses
        .slice()
        .sort(sortCriteria[filter] || (() => 0))

    if (!filteredCourses) {
        return <h1 className="text-center p-5">Loading...</h1>
    }

    return (
        <Container className="my-5 ">
            <Row sm={1} md={2} lg={3} xl={3} xxl={4} className="g-5 mx-auto">
                {filteredCourses.length > 0 &&
                    filteredCourses.map((course) => (
                        <Col key={course._id}>
                            <Card className="" style={{ width: "auto" }}>
                                <Card.Img
                                    style={{
                                        height: "10rem",
                                        objectFit: "cover",
                                    }}
                                    src={course.imageUrl ? course.imageUrl : robotcourse}
                                />
                                <Card.Body>
                                    <Link
                                        to={`/${course._id}`}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <div
                                            className="text-wrap"
                                            style={{ height: "5rem" }}
                                        >
                                            <Card.Title className="text-reset link-offset-2 link-underline link-underline-opacity-0">
                                                {course.title}
                                            </Card.Title>
                                        </div>
                                        <div
                                            className="text-wrap"
                                            style={{ height: "8rem" }}
                                        >
                                            <Card.Text>
                                                {course.description}
                                            </Card.Text>
                                        </div>
                                    </Link>

                                    <div className="d-flex justify-content-between align-items-center my-3">
                                        {handleToggleButtonCart(course._id) ? (
                                            <Button
                                                onClick={() =>
                                                    handleDelCourseFromCart(
                                                        course._id
                                                    )
                                                }
                                                className="btncompra bg-danger"

                                            >
                                                <span className="IconContainer bg-danger" >
                                                    <i
                                                        className="bi bi-cart-x"
                                                    ></i>
                                                </span>
                                                <p className="add p-3">
                                                    Eliminar del carrito
                                                </p>
                                            </Button>
                                        ) : (
                                            <Button
                                                onClick={() =>
                                                    handleAddCourseToCart(
                                                        course
                                                    )
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
                                        )}

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
                                            <i className="bi bi-clock"></i> {course.duration}
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
                        </Col>
                    ))}
                <button
                    onClick={() => window.scrollTo(0, 0)}
                    style={{ position: "fixed", bottom: "20px", right: "20px", width: "80px" }}
                >
                    <i className="bi bi-arrow-up-circle"></i>
                </button>
            </Row>
        </Container>
    )
}

export default Cards
