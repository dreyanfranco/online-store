import { useContext, useEffect, useState } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import code2 from "../../components/Cards/ImagesCards/code2.jpg"
import { AuthContext } from "../../context/auth.context"
import { WishlistContext } from "../../context/wishlist.context"
import { getCourses } from "../../services/courses.service"
import { formatCurrency } from "../../utilities/formatCurrency"
import "./Cards.css"

function Cards() {
    const [courses, setCourses] = useState([])
    // const [wishlist, setWishlist] = useState([])
    const { wishlist, addToWishlist, removeFromWishlist } =
        useContext(WishlistContext)
    const { user } = useContext(AuthContext)

    // const sortedCourses = courses
    //     .slice()
    //     .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

    useEffect(() => {
        getCourses()
            .then(({ data }) => setCourses(data))
            .catch((error) => console.error(error))
    }, [])

    const toggleWishlistStatus = (courseId) => {
        if (wishlist.includes(courseId)) {
            removeFromWishlist(courseId)
        } else {
            addToWishlist(courseId)
        }
    }

    if (!courses) {
        return <h1>Loading...</h1>
    }

    return (
        <Container className="mt-5">
            <Row className="gy-5">
                {courses.length > 0 &&
                    courses.map((course) => (
                        <Col key={course._id} lg={3}>
                            {/* <Link
                                to={`/${course._id}`}
                                style={{ textDecoration: "none" }}
                            > */}
                            <Card className="position-relative">
                                <Card.Img src={code2} />
                                <Card.Body className="Title Text botonc">
                                    <Card.Title>{course.title}</Card.Title>
                                    <Card.Text className="Text">
                                        {course.description}
                                    </Card.Text>
                                    <div className="d-flex align-items-center justify-content-between my-2">
                                        <Button
                                            className="botonc"
                                            style={{
                                                backgroundColor: "#45b8ac",
                                            }}
                                        >
                                            Añadir al carrito
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
                                    {/* <Card.Footer className="footerC"> */}
                                    <div className="text-center ">
                                        <kbd>
                                            {formatCurrency(course.price)}
                                        </kbd>
                                    </div>
                                    {/* </Card.Footer> */}
                                </Card.Body>
                            </Card>
                            {/* </Link> */}
                        </Col>
                    ))}
            </Row>
        </Container>
    )
}
export default Cards
