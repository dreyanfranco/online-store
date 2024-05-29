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

function Cards() {
    const [courses, setCourses] = useState([])
    const cart = useContext(CartContext)
    const { wishlist, addToWishlist, removeFromWishlist } =
        useContext(WishlistContext)
    const { user } = useContext(AuthContext)

    // const handleToggleButtonCart = () => {
    //     setIsInCart(!isInCart)
    // }

    const toggleWishlistStatus = (courseId) => {
        if (wishlist.includes(courseId)) {
            removeFromWishlist(courseId)
        } else {
            addToWishlist(courseId)
        }
    }

    const handleAddCourseToCart = async (courseData) => {
        try {
            await coursesService.newCart(courseData._id)
            cart.addOneCourseToCart(courseData)
        } catch (error) {
            console.error("No se ha podido agregar al carrito", error)
        }
    }

    // const sortedCourses = courses
    //     .slice()
    //     .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

    useEffect(() => {
        getCourses()
            .then(({ data }) => setCourses(data))
            .catch((error) => console.error(error))
    }, [])

    if (!courses) {
        return <h1>Loading...</h1>
    }

    return (
        <Container className="my-5">
            <Row sm={1} md={2} lg={3} xl={3} xxl={4} className="g-5">
                {courses.length > 0 &&
                    courses.map((course) => (
                        <Col key={course._id}>
                            <Card className="h-100" style={{ width: "18rem" }}>
                                <Card.Img
                                    style={{
                                        height: "10rem",
                                        objectFit: "cover",
                                    }}
                                    src={robotcourse}
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
                                        <Button
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
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill={
                                                user &&
                                                wishlist.includes(course._id)
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
                        </Col>
                    ))}
            </Row>
        </Container>
    )
}

export default Cards
