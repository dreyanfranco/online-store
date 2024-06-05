import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import { useContext, useEffect, useState } from "react";
import { WishlistContext } from "../context/wishlist.context";
import coursesService, { getCourse } from "../services/courses.service";
import { formatCurrency } from "../utilities/formatCurrency";
import { AuthContext } from "../context/auth.context";
import { CartContext } from "../context/cart.context";


const Course = () => {
  const { course_id } = useParams();
  const [course, setCourse] = useState(null);
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);
  const { user } = useContext(AuthContext);
  const cart = useContext(CartContext);

  const toggleWishlistStatus = (courseId) => {
    const isWishlisted = wishlist.some((course) => course._id === courseId)
    if (isWishlisted) {
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

  useEffect(() => {
    getCourse(course_id)
      .then(({ data }) => {
        setCourse(data);
      })
      .catch((error) => console.error(error));
  }, [course_id]);

  if (!course) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Container>

        <Row key={course._id} className="my-5 d-flex justify-content-between">
          <Col sm={12} xl={6} className="">
            <ReactPlayer
              className="d-flex justify-content-center align-items-center"
              style={{ margin: "0 auto" }}
              url={"https://www.youtube.com/watch?v=pqa09f7NaAo"}
              width="100%"
              playing={true}
              controls={true}
              muted={true}></ReactPlayer>
          </Col>
          <Col md={12} xl={5} className="">
            <h1 className="text-center" style={{ color: "#45B8AC" }}>
              {course.title}
            </h1>
            <p className="text-white text-center">{course.description}</p>
            <div
              className="text-white rounded d-flex justify-content-center align-items-center py-2"
              style={{ border: "2px solid #45B8AC " }}>
              {" "}
              <i className="bi bi-clock text-white me-2"></i>{course.duration}hrs{" "}
            </div>
            <div
              className="text-white  rounded d-flex justify-content-evenly align-items-center py-2"
              style={{ border: "2px solid #45B8AC " }}>
              <h1 className="text-white "> {formatCurrency(course.price)} </h1>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={user && wishlist.some(
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
                  e.preventDefault();
                  if (user) toggleWishlistStatus(course._id);
                }}
                style={{ cursor: "pointer" }}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>

              <Button
                onClick={() => handleAddCourseToCart(course)}
                className="btncompra">
                <span className="IconContainer">
                  <i className="bi bi-cart2" height="1em"></i>
                </span>
                <p className="add">Añadir al carrito</p>
              </Button>
            </div>
          </Col>
        </Row>

        <Row className="my-5 d-flex justify-content-between">
          <Col xl={6} className="text-white">
            <h2 style={{ color: "#45B8AC" }}>Lo que aprenderás</h2>
            <Row>
              <Col lg={6}>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    {" "}
                    <i
                      className="bi bi-check2 "
                      style={{ color: "#45B8AC" }}></i>{" "}
                    {course.category}{" "}
                  </li>
                </ul>
              </Col>
              <Col lg={6}>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    {" "}
                    <i
                      className="bi bi-check2 "
                      style={{ color: "#45B8AC" }}></i>{" "}
                    {course.language}{" "}
                  </li>
                  <li className="mb-2">
                    {" "}
                    <i
                      className="bi bi-check2 "
                      style={{ color: "#45B8AC" }}></i>{" "}
                    Lorem ipsum dolor sit amet.{" "}
                  </li>
                  <li className="mb-2">
                    {" "}
                    <i
                      className="bi bi-check2 "
                      style={{ color: "#45B8AC" }}></i>{" "}
                    Lorem ipsum dolor sit amet.{" "}
                  </li>
                  <li className="mb-2">
                    {" "}
                    <i className="bi bi-check2 " style={{ color: "#45B8AC" }}>
                      {" "}
                    </i>{" "}
                    Lorem ipsum dolor sit amet.
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col xl={5} className="text-white">
            <h2 style={{ color: "#45B8AC" }}>Sobre el curso</h2>
            <p>
              {course.descriptionLarga}
            </p>
          </Col>
        </Row>
      </Container>

      <button
        onClick={() => window.scrollTo(0, 0)}
        style={{ position: "fixed", bottom: "20px", right: "20px" }}>
        <i class="bi bi-arrow-up-circle"></i>
      </button>
    </>
  );
};

export default Course;
