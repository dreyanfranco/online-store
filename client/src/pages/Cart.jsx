import { useEffect, useState, useContext } from "react";
import coursesService, { addCoursePurchase, getCart } from "../services/courses.service";
import { Button, Card, Col, Container } from "react-bootstrap";
import { CartContext } from "../context/cart.context";
import Swal from "sweetalert2";
import CardCarrito from "../components/Cards/CardCarrito";
import CheckoutForm from "../forms/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe("pk_test_51PJC6AJeIz2JibtC32QxNpQqNVtPQ06sAJOfLd7CvEkux2WEKekyYZmCaT2gHCLGJSiXIxmWCU6iMwXeZstZAeWG00utnMfqhT");

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
                {coursesInCart.length > 0 ?
                    coursesInCart.map(course => {
                        return (
                            <CardCarrito className="my-4 p-3"
                                key={course._id}
                                course={course}
                            />
                        )
                    })
                    :
                    <h2 className="text-white">El carrito esta vacío</h2>
                }
            </Col>
            <Elements stripe={stripePromise}>
                <CheckoutForm totalCoast={handleTotalCoast()} />
            </Elements>

        </Container>
    )
}

export default Cart