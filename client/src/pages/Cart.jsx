import { useEffect, useState, useContext } from "react";
import coursesService, { addCoursePurchase, getCart } from "../services/courses.service";
import { Button, Card, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartContext } from "../context/cart.context";
import Swal from "sweetalert2";

const Cart = () => {
    const [coursesInCart, setCoursesInCart] = useState([]);
    const [disabledValue, setDisabledValue] = useState(true);
    const cart = useContext(CartContext);

    function handleTotalCoast() {
        if (coursesInCart.length > 0) {
            const totalCoast = coursesInCart.reduce((prevCourse, nextCourse) =>
                prevCourse + nextCourse.price, 0
            )
            return totalCoast;
        }
        return 0;
    }

    function handlePurchaseCourses() {
        Swal.fire({
            title: "OK",
            text: "Cursos comprados satisfactoriamente",
            icon: "success"
          });
        addCoursePurchase(coursesInCart.map(course => course._id))
            .then(response => {
                console.log('Cursos comprados', response.data);
            })
            .catch(error => {
                console.error('Error al comprar los cursos:', error);
            });
    }

    const handleDelCourseFromCart = async (courseId) => {
        try {
            const { data } = await coursesService.deleteCourseCart(courseId);
            cart.deleteCourseFromCart(courseId);
        } catch (error) {
            console.error("No se ha podido eliminar al carrito", error)
        }
    }

    useEffect(() => {
        setCoursesInCart(cart.cartCourses)
    }, [cart.cartCourses]);

    useEffect(() => {
        getCart()
            .then(({ data }) => setCoursesInCart(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <Container className="d-flex justify-content-between">
            <Col className="col-md-5">
                {   coursesInCart.length > 0 ?
                    coursesInCart.map(course => (
                        <Card className="my-4 p-3" key={course._id}>
                            <h2>{course.title}</h2>
                            <p>{course.description}</p>
                            <p>{course.price}</p>
                            <Button onClick={() => handleDelCourseFromCart(course._id)} className="bg-danger">
                                <span className="me-2">Eliminar del carrito</span>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </Button>
                        </Card>
                    ))
                    :
                    <h2 className="text-white">El carrito esta vacío</h2>
                }
            </Col>
            <Card className="col-md-4 p-2 justify-content-between" style={{ height: "200px" }}>
                <h2>Resumen</h2>
                <span>Total: {formatCurrency(handleTotalCoast())}</span>
                <Button onClick={()=> handlePurchaseCourses()} className="bg-success">Comprar curso/s</Button>
            </Card>
        </Container>
    )
}

export default Cart