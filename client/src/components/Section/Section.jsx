import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import robot from "../../components/Section/robot.png"
import robotlogoportatil from "../../components/Section/robotlogoportatil.png"
import "./section.css"

const Section = () => {
    return (
        <Container className="">
            <Row className="">
                <Col md={6} lg={6} className="p-5">
                    <h1 className="fw-bold text-white mb-3">
                        Lleva tu programación
                    </h1>
                    <h1
                        className=" font-monospace d-inline-block text-truncate mb-3"
                        style={{ color: "#45B8AC" }}
                    >
                        {" "}
                        Al siguiente nivel
                    </h1>
                    <blockquote className="blockquote">
                        <p className="text-white">
                            {" "}
                            Más de 30 cursos disponibles. Aprende desde los
                            conceptos básicos hasta técnicas avanzadas en
                            desarrollo de juegos. Únete a nuestra comunidad de
                            desarrolladores y lleva tus habilidades al próximo
                            nivel.
                        </p>
                    </blockquote>
                </Col>
                <Col>
                    <Image src={robotlogoportatil} fluid />
                </Col>
            </Row>
        </Container>
    )
}

export default Section
