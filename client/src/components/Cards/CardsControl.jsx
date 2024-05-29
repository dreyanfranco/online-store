import { Container } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import robotcourse from "../../components/Cards/ImagesCards/robotcourse.jpg"
import "./CardsControl.css"

function CardsControl() {
    return (
        <Container className="my-5">
            <Row sm={1} md={2} lg={3} xl={3} xxl={4} className="g-5">
                {Array.from({ length: 12 }).map((__, idx) => (
                    <Col key={idx}>
                        <Card className="" style={{ width: "18rem" }}>
                            <Card.Img
                                style={{ height: "10rem", objectFit: "cover" }}
                                src={robotcourse}
                            />
                            <Card.Body>
                                <Card.Title>
                                    <a
                                        href=""
                                        className="text-reset link-offset-2 link-underline link-underline-opacity-0"
                                    >
                                        Título
                                    </a>
                                </Card.Title>

                                <Card.Text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the
                                    card&apos;s content.
                                </Card.Text>

                                <div className="d-flex justify-content-between">
                                    <Button className="btncompra">
                                        <span className="IconContainer">
                                            <i
                                                className="bi bi-cart2"
                                                height="1em"
                                            ></i>
                                        </span>
                                        <p className="add">Añadir al carrito</p>
                                    </Button>

                                    <a className="btnheart ">
                                        <i className="iconn bi bi-heart-fill fa-2x text-danger"></i>
                                    </a>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        {" "}
                                        <i className="bi bi-clock"></i> 7.5 hrs{" "}
                                    </div>
                                    <p
                                        className="fs-4 text"
                                        style={{ color: "#1ECAB8" }}
                                    ></p>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default CardsControl
