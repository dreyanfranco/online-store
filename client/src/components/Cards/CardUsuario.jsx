import { useEffect, useState } from "react"
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
import Swal from "sweetalert2"

const CardUsuario = () => {
  const [courses, setCourses] = useState([])

  const deleteCoursePurchaseButton = async (course_id) => {
    Swal.fire({
        title: "¿Estás seguro de que quieres eliminar este curso comprado?",
        text: "No se podrán deshacer estos cambios",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "!Si, eliminar!"
    }).then((result) => {
        if (result.isConfirmed) {
            const deleteCourse = async () => {
                try {
                    const response = await coursesService.deleteCoursePurchase(course_id);
                    setCourses(courses.filter((course) => course._id !== course_id));
                    console.log(`Curso con ID ${course_id} eliminado con éxito.`, response);
                } catch (error) {
                    console.error(`Error al eliminar el curso con ID ${course_id}.`, error);
                }
            };
            deleteCourse();
            Swal.fire({
                title: "!Eliminado!",
                text: "Tu curso fue eliminado con exito.",
                icon: "success"
            });
        };
    });
};

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
      <Row sm={1} md={2} lg={3} xl={3} xxl={4} className="g-5 d-flex justify-content-center">
        {courses.length > 0 &&
          courses.map((course) => (
            <Col className="d-flex justify-content-center" key={course._id}>
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
                    <Button onClick={() => deleteCoursePurchaseButton(course._id)} className="btndelete">
                      <DeleteIcon />
                    </Button>
                    {/* <Link to={`/profile/editcourse/${course._id}`} style={{ textDecoration: "none" }}>
                      <Button className="btneditar" >
                        Editar
                        <i className="edit bi bi-pencil-fill"></i>
                      </Button>
                    </Link> */}
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
  );
}


export default CardUsuario
