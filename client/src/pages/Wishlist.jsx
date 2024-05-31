import { useContext } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import robotcourse from "../components/Cards/ImagesCards/robotcourse.jpg"

import { WishlistContext } from "../context/wishlist.context"

import { formatCurrency } from "../utilities/formatCurrency"

const Wishlist = () => {
    const { wishlist, removeFromWishlist } = useContext(WishlistContext)

    return (
        <Container>
            {wishlist.length === 0 ? (
                <>
                    <h1 className="text-center">
                        No hay cursos en la lista de deseos
                    </h1>
                    <p>
                        Ir a{" "}
                        <Link
                            to="/"
                            style={{ textDecoration: "none", color: "white" }}
                        >
                            inicio
                        </Link>
                    </p>
                </>
            ) : (
                <>
                    <h1>Lista de deseos</h1>
                    <Row>
                        {wishlist.map((course) => (
                            <Col key={course._id}>
                                <Card className="" style={{ width: "18rem" }}>
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

                                        <div className="d-flex justify-content-between align-items-center">
                                            {/* <Button
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
                                        <p className="add">Añadir al carrito</p>
                                    </Button> */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="red"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="size-6"
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    removeFromWishlist(
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
                                                <i className="bi bi-clock"></i>{" "}
                                                {course.duration}hrs{" "}
                                            </div>
                                            <p
                                                className="fs-4 text"
                                                style={{ color: "#1ECAB8" }}
                                            >
                                                {formatCurrency(course.price)}
                                            </p>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </>
            )}
        </Container>
    )
}

export default Wishlist
