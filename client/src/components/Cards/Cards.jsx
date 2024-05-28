import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import robotcourse from "../../components/Cards/ImagesCards/robotcourse.jpg";
import { getCourses } from "../../services/courses.service";
import { formatCurrency } from "../../utilities/formatCurrency";
import "./CardsControl.css"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
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


  // const sortedCourses = courses
  //     .slice()
  //     .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

  useEffect(() => {
    getCourses()
      .then(({ data }) => setCourses(data))
      .catch((error) => console.error(error));
  }, []);

  if (!courses) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container className="my-5">
      <Row sm={1} md={2} lg={3} xl={3} xxl={4} className="g-5">
        {courses.length > 0 &&
          courses.map((course) => (
            <Col key={course._id}>
              <Card className="h-100" style={{ width: "18rem" }}>
                <Card.Img  style={{ height: "10rem", objectFit: "cover" }} src={robotcourse} />
                <Card.Body>
                  <Link
                    to={`/${course._id}`}
                    style={{ textDecoration: "none" }}>
                    <div className="text-wrap" style={{height:"5rem"}}>
                    <Card.Title className="text-reset link-offset-2 link-underline link-underline-opacity-0">
                      {course.title}
                    </Card.Title>
                    </div>
                    <div className="text-wrap" style={{height:"8rem"}}>
                    <Card.Text>{course.description}</Card.Text>
                    </div>
                  </Link>
                
                  <div className="d-flex justify-content-between my-3">
                         <Button
                      onClick={() => handleAddCourseToCart(course)}
                      className="btncompra">
                      <span className="IconContainer">
                        <i class="bi bi-cart2" height="1em"></i>
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
                      <div> <i className="bi bi-clock"></i> 7.5 hrs </div>
                      <span className="fs-4 text" style={{color:"#1ECAB8"}} > {formatCurrency(course.price)}</span>
                      </div>
                    </Card.Footer>                               
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}
export default Cards;

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
