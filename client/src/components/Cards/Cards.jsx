import { useEffect, useState } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import code2 from "../../components/Cards/ImagesCards/code2.jpg"
import { getCourses } from "../../services/courses.service"
import { formatCurrency } from "../../utilities/formatCurrency"
import "./Cards.css"

function Cards() {
    const [courses, setCourses] = useState([])

    // const sortedCourses = courses
    //     .slice()
    //     .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

    useEffect(() => {
        getCourses()
            .then(({ data }) => setCourses(data))
            .catch((error) => console.error(error))
    }, [])

    if (!courses) {
        return <h1>Loading...</h1>
    }

    return (
        <Container>
            <Row className="gy-5">
                {courses.length > 0 &&
                    courses.map((course) => (
                        <Col key={course._id} lg={3}>
                            <Link
                                to={`/${course._id}`}
                                style={{ textDecoration: "none" }}
                            >
                                <Card className="">
                                    <Card.Img src={code2} />
                                    <Card.Body className="Title Text botonc">
                                        <Card.Title>{course.title}</Card.Title>
                                        <Card.Text className="Text">
                                            {course.description}
                                        </Card.Text>
                                        <Button
                                            className="botonc"
                                            style={{
                                                backgroundColor: "#45b8ac",
                                            }}
                                        >
                                            Añadir al carrito
                                        </Button>
                                        <Card.Footer className="footerC">
                                            <div className="footer-price">
                                                {formatCurrency(course.price)}
                                            </div>
                                        </Card.Footer>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}
            </Row>
        </Container>
    )
}
export default Cards

/*<div className="">
            <div className="wrapper overflow-hidden text-center">
                <div className="row gap-5">
                           
            <div className="card">
                <img src={Img1} />
                <div className="info">
                    <h1>Título 1</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo diam, mollis eget lectus et, ultrices pretium eros. Sed gravida vel nunc sit amet volutpat. </p>
                    
                    <h1 className="price">000€</h1>
                    <a href="" className="btn"> Comprar</a>
                            
                </div>
            </div>

            <div className="card ">
                <img src={Img2} />
                <div className="info">
                    <h1>Título 2</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo diam, mollis eget lectus et, ultrices pretium eros. Sed gravida vel nunc sit amet volutpat. </p>
                    <a href="" className="btn"> Comprar</a>
                </div>
            </div>

            <div className="card ">
                <img src={Img3} />
                <div className="info">
                    <h1>Título 3</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo diam, mollis eget lectus et, ultrices pretium eros. Sed gravida vel nunc sit amet volutpat. </p>
                    <a href="" className="btn"> Comprar</a>
                </div>
                        </div>
                    
                        
        
            <div className="card  ">
                <img src={Img4} />
                <div className="info">
                    <h1>Título 4</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo diam, mollis eget lectus et, ultrices pretium eros. Sed gravida vel nunc sit amet volutpat. </p>
                    <a href="" className="btn"> Comprar</a>
                </div>
            </div>

            <div className="card ">
                <img src={Img5} />
                <div className="info">
                    <h1>Título 5</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo diam, mollis eget lectus et, ultrices pretium eros. Sed gravida vel nunc sit amet volutpat. </p>
                    <a href="" className="btn"> Comprar</a>
                </div>
            </div>

            <div className="card ">
                <img src={Img6} />
                <div className="info">
                    <h1>Título 6</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo diam, mollis eget lectus et, ultrices pretium eros. Sed gravida vel nunc sit amet volutpat. </p>
                    <a href="" className="btn"> Comprar</a>
                </div>
                </div>
            </div>

      
            



                   
                </div>
            </div>*/
