import { Container, Form } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import "./Botones.css"

// eslint-disable-next-line react/prop-types
const Filters = ({ setFilter }) => {
    return (
        <Container>
            <div className="container-fluid d-flex flex-column-reverse flex-md-row justify-content-md-between align-items-md-center">
                <div className="d-flex gap-2 flex-grow-1 my-2 mb-md-0 ">
                    <Button
                        className="button"
                        onClick={() => setFilter("recent")}
                    >
                        <i className="bi bi-bar-chart-fill me-2"></i>
                        Recientes
                    </Button>{" "}
                    {""}
                    <Button className="button">
                        <i className="bi bi-search me-2"></i>
                        Más buscados
                    </Button>
                    {""}
                    {/* <Button className="button">
                <i className="bi bi-coin me-2"></i>
                Ordenar por:
            </Button>{" "} */}
                </div>
                <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => setFilter(e.target.value)}
                    className="button w-25"
                    size=""
                >
                    <option value="">Ordenar por</option>
                    <option value="starRating">Reseñas</option>
                    <option value="priceLowToHigh">
                        Precio de menor a mayor
                    </option>
                    <option value="priceHighToLow">
                        Precio de mayor a menor
                    </option>
                </Form.Select>
            </div>
        </Container>
    )
}

export default Filters
