import { useContext, useEffect, useState } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import code2 from "../../components/Cards/ImagesCards/code2.jpg"
import coursesService, { getCourses } from "../../services/courses.service"
import { formatCurrency } from "../../utilities/formatCurrency"
import "./Cards.css"
import { CartContext } from "../../context/cart.context"

function Cards() {
    const [courses, setCourses] = useState([]);
    const cart = useContext(CartContext);
    // const [isInCart, setIsInCart] = useState(false);

    // const handleToggleButtonCart = () => {
    //     setIsInCart(!isInCart)
    // }

    if (!courses) {
        return <h1>Loading...</h1>
    }
    
    const handleAddCourseToCart = async (courseData) => {
        try {
            const { data } = await coursesService.newCart(courseData._id);
            cart.addOneCourseToCart(courseData);
        } catch (error) {
            console.error("No se ha podido agregar al carrito", error)
        }
    }

    useEffect(() => {
        getCourses()
            .then(({ data }) => setCourses(data))
            .catch((error) => console.error(error))
    }, [])

    return (
        <Container>
            <Row className="gy-5">
                {courses.length > 0 &&
                    courses.map((course) => (
                        <Col key={course._id} lg={3}>
                            <Card className="">
                                <Card.Body className="Title Text botonc">
                                    <Link to={`/${course._id}`}
                                        style={{ textDecoration: "none" }}>
                                        <Card.Img src={code2} />
                                        <Card.Title>{course.title}</Card.Title>
                                        <Card.Text className="Text">
                                            {course.description}
                                        </Card.Text>
                                    </Link>
                                    <Button
                                        onClick={() => handleAddCourseToCart(course)}
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
