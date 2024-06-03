import { Form } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import "./Botones.css"

// eslint-disable-next-line react/prop-types
const Filters = ({ setFilter }) => {
    return (
        <div className="container-fluid d-flex justify-content-center gap-3 mb-5">
            <Button className="button" onClick={() => setFilter("recent")}>
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
            <Form.Select
                aria-label="Default select example"
                onChange={(e) => setFilter(e.target.value)}
            >
                <option value="">Ordenar por:</option>
                <option value="starRating">Reseñas</option>
                <option value="priceLowToHigh">Precio de menor a mayor</option>
                <option value="priceHighToLow">Precio de mayor a menor</option>
            </Form.Select>
        </div>
    )
}

export default Filters
