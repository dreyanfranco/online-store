import { useContext, useEffect, useState } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"
import { getCourses } from "../../services/courses.service"
import { formatCurrency } from "../../utilities/formatCurrency"
import DeleteIcon from "../Cards/DeleteIcon"
import robotcourse from "../Cards/ImagesCards/robotcourse.jpg"
import coursesService from "../../services/courses.service"
import Swal from 'sweetalert2'


const CreatedCourses = () => {
    const { user } = useContext(AuthContext)
    const [courses, setCourses] = useState([])

    useEffect(() => {
        const fetchCourses = async () => {
            const owner = user?._id
            const { data } = await getCourses()
            setCourses(data.filter((course) => course.owner === owner))
        }
        fetchCourses()
    }, [user])

    const deleteCourseButton = async (course_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const deleteCourse = async () => {
                    try {
                        const response = await coursesService.deleteCourse(course_id);
                        setCourses(courses.filter((course) => course._id !== course_id));
                        console.log(`Curso con ID ${course_id} eliminado con éxito.`, response);
                    } catch (error) {
                        console.error(`Error al eliminar el curso con ID ${course_id}.`, error);
                    }
                };
                deleteCourse();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            };
        }
        );
        // try {
        //     const response = await coursesService.deleteCourse(course_id);
        //     setCourses(courses.filter((course) => course._id !== course_id));
        //     console.log(`Curso con ID ${course_id} eliminado con éxito.`, response);
        //     window.alert('Curso eliminado con éxito.');
        // } catch (error) {
        //     console.error(`Error al eliminar el curso con ID ${course_id}.`, error);
        // }
    };



    return (
        <>
            <button
                onClick={() => window.scrollTo(0, 0)}
                style={{ position: "fixed", bottom: "20px", right: "20px" }}
            >
                Volver arriba
            </button>

            <Row className="text-white">
                <Col>
                    <h2 className="text-center">Cursos creados por mi</h2>
                    <Container className="my-5">
                        <Row
                            sm={1}
                            md={2}
                            lg={3}
                            xl={3}
                            xxl={4}
                            className="g-5"
                        >
                            {courses.length > 0 &&
                                courses.map((course) => (
                                    <Col key={course.owner}>
                                        <Card
                                            className=""
                                            style={{ width: "18rem" }}
                                        >
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
                                                    style={{
                                                        textDecoration: "none",
                                                    }}
                                                >
                                                    <div
                                                        className="text-wrap"
                                                        style={{
                                                            height: "5rem",
                                                        }}
                                                    >
                                                        <Card.Title className="text-reset link-offset-2 link-underline link-underline-opacity-0">
                                                            {course.title}
                                                        </Card.Title>
                                                    </div>

                                                    <div
                                                        className="text-wrap"
                                                        style={{
                                                            height: "8rem",
                                                        }}
                                                    >
                                                        <Card.Text>
                                                            {course.description}
                                                        </Card.Text>
                                                    </div>
                                                </Link>

                                                <div className="d-flex justify-content-between">
                                                    <Button className="btndelete" onClick={() => deleteCourseButton(course._id)}>
                                                        <DeleteIcon />
                                                    </Button>
                                                    <Link
                                                        to={`/profile/editcourse/${course._id}`}
                                                        style={{
                                                            textDecoration:
                                                                "none",
                                                        }}
                                                    >
                                                        <Button className="btneditar">
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
                                                        <i className="bi bi-clock"></i>{" "}
                                                        {course.duration}hrs{" "}
                                                    </div>
                                                    <p
                                                        className="fs-4 text"
                                                        style={{
                                                            color: "#1ECAB8",
                                                        }}
                                                    >
                                                        {formatCurrency(
                                                            course.price
                                                        )}
                                                    </p>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                ))}
                        </Row>
                    </Container>
                </Col>
            </Row>
        </>
    )
}

export default CreatedCourses
