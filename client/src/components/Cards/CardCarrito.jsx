import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import robotcourse from "../../components/Cards/ImagesCards/robotcourse.jpg";
import "./CardsControl.css"
import { Container } from "react-bootstrap";
import DeleteIcon from "./DeleteIcon";
import { formatCurrency } from "../../utilities/formatCurrency";
import coursesService from "../../services/courses.service";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

function CardCarrito({ course }) {
  const cart = useContext(CartContext);

  const handleDelCourseFromCart = async (courseId) => {
    try {
      const { data } = await coursesService.deleteCourseCart(courseId);
      cart.deleteCourseFromCart(courseId);
    } catch (error) {
      console.error("No se ha podido eliminar al carrito", error)
    }
  }

  return (
    <Container className="my-5">
      <Row sm={1} md={2} lg={3} xl={3} xxl={4} className="g-5">
        <Col >
          <Card className="" style={{ width: "18rem" }}>
            <Card.Img style={{ height: "10rem", objectFit: "cover" }} src={robotcourse} />
            <Card.Body>
              <Card.Title>
                <a
                  href={`/${course._id}`}
                  className="text-reset link-offset-2 link-underline link-underline-opacity-0">
                  {course.title}
                </a>
              </Card.Title>

              <Card.Text>
                {course.description}
              </Card.Text>

              <div className="d-flex justify-content-between">
                <Button onClick={()=>handleDelCourseFromCart(course._id)} className="btndelete">
                  <DeleteIcon />
                </Button>
              </div>

            </Card.Body>
            <Card.Footer>
              <div className="d-flex justify-content-between">
                <div> <i className="bi bi-clock me-2"></i>{course.duration}hrs</div>
                <p className="fs-4 text" style={{ color: "#1ECAB8" }}></p>
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
      </Row>
    </Container>
  );
}

export default CardCarrito;
