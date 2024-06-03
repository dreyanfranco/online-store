import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import Swal from 'sweetalert2';
import { formatCurrency } from "../utilities/formatCurrency";
import coursesService from "../services/courses.service";
import { CartContext } from "../context/cart.context";


export default function CheckoutForm({ totalCoast }) {
    const stripe = useStripe();
    const elements = useElements();
    const [isLoading, setIsLoading] = useState(false);
    const cart = useContext(CartContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });
        if (error) {
            setIsLoading(false);
        }
        else {
            setIsLoading(true);
        }



        if (!error) {
            const { id } = paymentMethod;

            try {
                const amountInCents = Math.round(totalCoast * 100);
                const { data } = await coursesService.addCoursePurchaseToStripe({
                    id,
                    amount: amountInCents,
                })

                // elements.getElement(CardElement).clear();
                setIsLoading(false);
                if (data.message.type === "StripeCardError") {
                    Swal.fire({
                        title: 'Ha ocurrido un error',
                        text: data.message.raw.message,
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    })
                }
                else {
                    coursesService.addCoursePurchase(cart.cartCourses.map(course => course._id))
                        .then(response => {
                            console.log('Cursos comprados', response.data);
                        })
                        .catch(error => {
                            console.error('Error al comprar los cursos:', error);
                        });
                    Swal.fire({
                        title: 'Gracias por la compra',
                        text: data.message,
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.href = "/profile";
                        }
                    });
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className="card card-body gap-3 justify-content-between" style={{ height: "220px" }}>
            <div className="form-group">
                <h4>Añadir tarjeta de crédito</h4>
                <CardElement className="form-control" />
            </div>
            <h3 className="text-center text-black">Total: {formatCurrency(totalCoast)}</h3>
            <button type="submit" className="btn btn-success" disabled={totalCoast === 0 ? true : false}>
                {
                    isLoading ?
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        :
                        "Comprar"
                }
            </button>
        </form>
    )
}