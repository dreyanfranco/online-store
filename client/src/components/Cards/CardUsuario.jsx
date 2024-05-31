import { useContext, useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Link } from "react-router-dom"
import robotcourse from "../../components/Cards/ImagesCards/robotcourse.jpg"
import coursesService, {
  getCoursesPurchase,
} from "../../services/courses.service"
import { formatCurrency } from "../../utilities/formatCurrency"
import "./CardsControl.css"
import { default as DeleteIcon } from "./DeleteIcon"

function CardUsuario() {
  const [courses, setCourses] = useState([])

  const handleDelCourseFromCart = async (courseId) => {
    try {
      await coursesService.deleteCoursePurchase(courseId);
    } catch (error) {
      console.error("No se ha podido eliminar al carrito", error)
    }
  }

  useEffect(() => {
    getCoursesPurchase()
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
              <Card className="" style={{ width: "18rem" }}>
                <Card.Img
                  style={{ height: "10rem", objectFit: "cover" }}
                  src={robotcourse}
                />
                <Card.Body>
                  <Link
                    to={`/${course._id}`}
                    style={{ textDecoration: "none" }}>
                    <div className="text-wrap" style={{ height: "5rem" }}>
                      <Card.Title className="text-reset link-offset-2 link-underline link-underline-opacity-0">
                        {course.title}
                      </Card.Title>
                    </div>

                    <div className="text-wrap" style={{ height: "8rem" }}>
                      <Card.Text>{course.description}</Card.Text>
                    </div>
                  </Link>

                  <div className="d-flex justify-content-between">
                    <Button onClick={() => handleDelCourseFromCart(course._id)} className="btndelete">
                      <DeleteIcon />
                    </Button>
                    <Link to={`/profile/editcourse/${course._id}`} style={{ textDecoration: "none" }}>
                      <Button className="btneditar" >
                        Editar
                        <i className="edit bi bi-pencil-fill"></i>
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <div className="d-flex justify-content-between">
                    <div>
                      {" "}
                      <i className="bi bi-clock"></i> {course.duration}hrs {" "}
                    </div>
                    <p className="fs-4 text" style={{ color: "#1ECAB8" }}>
                      {formatCurrency(course.price)}
                    </p>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  )
}


export default CardUsuario
